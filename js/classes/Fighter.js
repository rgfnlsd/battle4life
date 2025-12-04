// Battle4Life - Fighter Class
// Auto-extracted from script.js

class Fighter {
    constructor(charKey, x, y, type) {
        this.char = characters[charKey];
        this.x = x;
        this.y = y;
        // Scale character size based on screen size
        const baseSize = 50;
        const screenScale = Math.min(window.innerWidth / 800, window.innerHeight / 600);
        const scaledSize = Math.floor(baseSize * screenScale * 1.5); // 1.5x bigger than before
        this.width = Math.max(60, scaledSize); // Minimum size of 60
        this.height = Math.max(60, scaledSize);
        this.health = this.char.maxHealth;
        this.maxHealth = this.char.maxHealth;
        this.direction = type === 'player' ? 1 : -1;
        this.type = type;
        
        // Attack systems
        this.canAttack = true;
        this.attackCooldown = 0;
        this.canSpecialAttack = true;
        this.specialCooldown = 0;
        this.specialMaxCooldown = this.char.specialReloadTime || 780; // Use character's individual special reload time
        
        // Physics
        this.velocityY = 0;
        this.onGround = false;
        this.gravity = 0.8;
        this.jumpPower = -19; // Increased to -19 for even higher jumps
        
        // Animation system for walking
        this.animationFrame = 0;
        this.isMoving = false;
        this.lastX = x;

        // Item rotation animation
        this.itemRotation = 0;

        // Apply badge bonuses to base stats
        this.applyBadgeBonuses();
    }

    applyBadgeBonuses() {
        // Get equipped badges for this player
        let equippedBadges = [];
        if (gameState.gameMode === 'multiplayer') {
            if (this.type === 'player') {
                equippedBadges = gameState.player1EquippedBadges || [];
            } else {
                equippedBadges = gameState.player2EquippedBadges || [];
            }
        } else {
            equippedBadges = gameState.equippedBadges || [];
        }

        // Apply badge effects to base stats
        equippedBadges.forEach(badgeId => {
            const badge = badges[badgeId];
            if (!badge) return;

            switch(badge.effect) {
                case 'health':
                    this.maxHealth += badge.value;
                    this.health += badge.value; // Also increase current health
                    break;
                case 'speed':
                    // Speed will be applied during movement (not stored as a stat)
                    break;
                case 'reload':
                    // Reduce reload time by percentage
                    this.char.reloadTime = Math.round(this.char.reloadTime * (1 - badge.value));
                    this.specialMaxCooldown = Math.round(this.specialMaxCooldown * (1 - badge.value));
                    break;
                case 'warrior':
                    // Warrior badges: +damage, -health
                    this.char.damage += badge.value;
                    this.char.specialDamage += badge.value;
                    const healthLoss = badge.value * 2.5; // Lose 2.5 HP per damage point
                    this.maxHealth = Math.max(50, this.maxHealth - healthLoss);
                    this.health = Math.max(50, this.health - healthLoss);
                    break;
                case 'tank':
                    // Tank badges: +health, -speed (speed handled in movement)
                    this.maxHealth += badge.value;
                    this.health += badge.value;
                    break;
                case 'focus':
                    // Focus badges: faster special reload
                    const specialReduction = badge.value / 100;
                    this.specialMaxCooldown = Math.round(this.specialMaxCooldown * (1 - specialReduction));
                    break;
            }
        });

        console.log(`${this.char.name} badge bonuses applied - HP: ${this.health}/${this.maxHealth}, Reload: ${this.char.reloadTime}, Special Reload: ${this.specialMaxCooldown}`);
    }

    getMovementSpeed() {
        let baseSpeed = 4; // Base movement speed
        let speedBonus = 0;

        // Get equipped badges for speed calculation
        let equippedBadges = [];
        if (gameState.gameMode === 'multiplayer') {
            if (this.type === 'player') {
                equippedBadges = gameState.player1EquippedBadges || [];
            } else {
                equippedBadges = gameState.player2EquippedBadges || [];
            }
        } else {
            equippedBadges = gameState.equippedBadges || [];
        }

        // Apply badge speed bonuses
        equippedBadges.forEach(badgeId => {
            const badge = badges[badgeId];
            if (!badge) return;

            switch(badge.effect) {
                case 'speed':
                    speedBonus += badge.value;
                    break;
                case 'tank':
                    // Tank badges reduce speed
                    speedBonus -= Math.floor(badge.value / 20); // Lose 1 speed per 20 HP
                    break;
            }
        });

        // Apply item speed bonuses and check for frozen status
        if (this.activeEffects && this.activeEffects.length > 0) {
            this.activeEffects.forEach(effect => {
                if (effect.type === 'speedBoost') {
                    speedBonus += (effect.data.multiplier - 1) * baseSpeed;
                } else if (effect.type === 'frozen') {
                    // Frozen characters cannot move
                    return 0;
                }
            });
        }

        // Check if frozen - return 0 speed if frozen
        const isFrozen = this.activeEffects && this.activeEffects.some(effect => effect.type === 'frozen');
        if (isFrozen) {
            return 0; // Cannot move when frozen
        }

        return Math.max(1, baseSpeed + speedBonus); // Minimum speed of 1
    }

    update() {
        // Don't update if dead (in boss battle mode, dead players should not move)
        if (this.health <= 0) {
            return;
        }

        // Check if character is moving for animation
        this.isMoving = Math.abs(this.x - this.lastX) > 0.1;
        if (this.isMoving && this.onGround) {
            this.animationFrame += 0.3; // Walking speed
            if (this.animationFrame >= Math.PI * 2) {
                this.animationFrame = 0;
            }
        } else {
            this.animationFrame = 0; // Reset to idle pose when not moving
        }
        this.lastX = this.x;
        
        // Apply gravity
        this.velocityY += this.gravity;
        this.y += this.velocityY;

        // Check platform collisions
        this.checkPlatformCollisions();

        // Ground collision - only if not already on a platform
        const groundLevel = gameState.battle ? gameState.battle.groundLevel : (window.innerHeight - 120);
        if (this.y >= groundLevel && !this.onGround) {
            this.y = groundLevel;
            this.velocityY = 0;
            this.onGround = true;

            // Add dust cloud effect when landing on ground
            if (gameState.battle && gameState.battle.addVisualEffect) {
                for (let i = 0; i < 4; i++) {
                    gameState.battle.addVisualEffect('dust_cloud',
                        this.x + this.width/2 + (Math.random() - 0.5) * this.width,
                        this.y + this.height, // At character's feet level
                        {
                            life: 30,
                            size: 6 + Math.random() * 4, // Thicker dust clouds
                            velocityX: (Math.random() - 0.5) * 2 // Horizontal spread
                        }
                    );
                }
            }
        }

        // Keep in bounds - use dynamic screen width
        const maxX = gameState.battle ? (gameState.battle.canvas.width - this.width) : (window.innerWidth - this.width);
        this.x = Math.max(0, Math.min(this.x, maxX));

        // Update cooldowns
        if (this.attackCooldown > 0) {
            this.attackCooldown--;
        } else {
            this.canAttack = true;
        }

        if (this.specialCooldown > 0) {
            this.specialCooldown--;
            // Log every 60 frames (once per second)
            if (this.specialCooldown % 60 === 0) {
                console.log(`⏱️ ${this.char.name} special cooldown: ${this.specialCooldown} / ${this.specialMaxCooldown} (${(this.specialCooldown/60).toFixed(1)}s remaining)`);
            }
        } else {
            if (!this.canSpecialAttack) {
                console.log(`✅ ${this.char.name} special attack ready!`);
            }
            this.canSpecialAttack = true;
        }

        // CRITICAL FIX: Update item effects every frame!
        this.updateItemEffects();

        // Update item rotation animation
        if (this.heldItem) {
            // Initialize itemRotation if not set
            if (this.itemRotation === undefined || isNaN(this.itemRotation)) {
                this.itemRotation = 0;
                console.log(`${this.char.name} initialized item rotation for ${this.heldItem.name}`);
            }
            this.itemRotation += 0.15; // Rotate at constant speed (faster for visibility)
            if (this.itemRotation >= Math.PI * 2) {
                this.itemRotation -= Math.PI * 2; // Keep it in range
            }
        } else {
            // Reset rotation when no item
            this.itemRotation = 0;
        }
    }

    checkPlatformCollisions() {
        // Reset ground state first
        this.onGround = false;

        // Check platform collisions - only from above, allow horizontal movement
        if (gameState && gameState.battle && gameState.battle.mapData && gameState.battle.mapData.platforms) {
            gameState.battle.mapData.platforms.forEach(platform => {
                // Precise platform collision - character must overlap platform horizontally
                if (this.x < platform.x + platform.width && // Character left edge before platform right edge
                    this.x + this.width > platform.x && // Character right edge after platform left edge
                    this.y + this.height >= platform.y && // Character bottom at or below platform top
                    this.y + this.height <= platform.y + platform.height + 5 && // Character bottom within platform (small tolerance)
                    this.velocityY >= 0) { // Must be falling down or stationary

                    // Land with feet exactly on the platform surface
                    this.y = platform.y - this.height;
                    this.velocityY = 0;
                    this.onGround = true;

                    // Add dust cloud effect when landing
                    if (gameState.battle && gameState.battle.addVisualEffect) {
                        for (let i = 0; i < 3; i++) {
                            gameState.battle.addVisualEffect('dust_cloud',
                                this.x + this.width/2 + (Math.random() - 0.5) * this.width,
                                this.y + this.height, // At character's feet level
                                {
                                    life: 25,
                                    size: 5 + Math.random() * 3, // Thicker dust clouds
                                    velocityX: (Math.random() - 0.5) * 1.5 // Horizontal spread
                                }
                            );
                        }
                    }
                }
            });
        }

        // Check obstacle collisions - only if not already on a platform
        if (!this.onGround && gameState && gameState.battle && gameState.battle.mapData && gameState.battle.mapData.obstacles) {
            gameState.battle.mapData.obstacles.forEach(obstacle => {
                // Very forgiving collision detection for obstacles
                if (this.x + this.width > obstacle.x - 10 && // Extra horizontal tolerance
                    this.x < obstacle.x + obstacle.width + 10 && // Extra horizontal tolerance
                    this.y + this.height >= obstacle.y - 5 && // Small upward tolerance
                    this.y + this.height <= obstacle.y + obstacle.height + 40 && // Large downward tolerance
                    this.velocityY >= -2) { // Allow slight upward velocity

                    // Land on top of the obstacle
                    this.y = obstacle.y - this.height;
                    this.velocityY = 0;
                    this.onGround = true;
                }
            });
        }
    }

    jump() {
        // Check if frozen - cannot jump when frozen
        const isFrozen = this.activeEffects && this.activeEffects.some(effect => effect.type === 'frozen');
        if (isFrozen) {
            return; // Cannot jump when frozen
        }

        if (this.onGround) {
            this.velocityY = this.jumpPower;
            this.onGround = false;
        }
    }

    draw(ctx) {
        // Don't draw if dead (in boss battle mode, show dead players as transparent)
        if (this.health <= 0) {
            // Draw dead player as semi-transparent
            ctx.globalAlpha = 0.3;
        }

        const centerX = this.x + this.width / 2;
        const centerY = this.y + this.height / 2;
        
        // Draw special attack circle around character body - NEW FEATURE!
        const circleRadius = 35;
        ctx.lineWidth = 3;
        ctx.strokeStyle = this.canSpecialAttack ? '#00FF00' : '#FF4444'; // Green when ready, red when loading
        ctx.shadowColor = this.canSpecialAttack ? '#00FF00' : '#FF4444';
        ctx.shadowBlur = 10;
        ctx.beginPath();
        ctx.arc(centerX, centerY, circleRadius, 0, Math.PI * 2);
        ctx.stroke();
        ctx.shadowBlur = 0;
        
        // Draw stick figure
        ctx.strokeStyle = this.char.color;
        ctx.lineWidth = 4;
        ctx.lineCap = 'round';
        
        // Body
        ctx.beginPath();
        ctx.moveTo(centerX, centerY - 10);
        ctx.lineTo(centerX, centerY + 20);
        ctx.stroke();
        
        // ANIMATED ARMS - Walking, Jumping, and Falling!
        this.drawAnimatedArms(ctx, centerX, centerY);
        
        // ANIMATED LEGS - Walking and Jumping!
        this.drawAnimatedLegs(ctx, centerX, centerY);
        
        // Draw emoji head (only if not flying as special attack projectile)
        this.drawCharacterHead(ctx, centerX, centerY);
        
        // FIXED: Draw health bars and reload bars!
        this.drawHealthAndBars(ctx, centerX, centerY);

        // Draw status effect indicators
        this.drawStatusEffects(ctx, centerX, centerY);

        // Draw held item rotating around player
        this.drawHeldItem(ctx, centerX, centerY);
    }

    drawHeldItem(ctx, centerX, centerY) {
        if (!this.heldItem) {
            return;
        }

        // Initialize itemRotation if not set
        if (this.itemRotation === undefined || isNaN(this.itemRotation)) {
            this.itemRotation = 0;
        }

        // Debug: Log once per second
        if (!this.lastDrawLog || Date.now() - this.lastDrawLog > 1000) {
            console.log(`Drawing ${this.char.name}'s held item: ${this.heldItem.name} ${this.heldItem.emoji}, rotation: ${this.itemRotation.toFixed(2)}`);
            this.lastDrawLog = Date.now();
        }

        // Calculate hand position based on current animation state
        let handX, handY;

        if (!this.onGround) {
            // JUMPING/FALLING HAND POSITIONS
            if (this.velocityY < 0) {
                // GOING UP (jumping) - Hand follows arm going down
                const jumpProgress = Math.abs(this.velocityY) / 19;
                const armDownAmount = Math.min(jumpProgress * 20, 20);
                handX = centerX + (this.direction > 0 ? 15 : -15);
                handY = centerY + 15 + armDownAmount;
            } else {
                // FALLING - Hand follows wiggling arms that are up
                const wiggleTime = Date.now() * 0.01;
                const armWiggle = this.direction > 0 ? Math.sin(wiggleTime + 1) * 5 : Math.sin(wiggleTime) * 5;
                handX = centerX + (this.direction > 0 ? 20 : -20) + armWiggle;
                handY = centerY - 25;
            }
        } else if (this.isMoving) {
            // WALKING ANIMATION - Hand follows pumping arm motion
            const armPump = this.direction > 0 ?
                Math.sin(this.animationFrame + Math.PI) * 10 :
                Math.sin(this.animationFrame) * 10;
            handX = centerX + (this.direction > 0 ? 12 : -12) + armPump;
            handY = centerY + 12;
        } else {
            // IDLE - Hand at T-pose position
            handX = centerX + (this.direction > 0 ? 20 : -20);
            handY = centerY;
        }

        ctx.save();

        // Draw item at edge of hand (offset beyond hand position)
        // Offset by 15 pixels in the direction the character is facing
        const itemOffsetX = this.direction > 0 ? 15 : -15;
        const itemX = handX + itemOffsetX;
        const itemY = handY;

        ctx.shadowColor = '#FFD700';
        ctx.shadowBlur = 15;
        ctx.font = 'bold 28px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillStyle = '#FFFFFF';
        ctx.fillText(this.heldItem.emoji, itemX, itemY);

        ctx.restore();
    }

    drawStatusEffects(ctx, centerX, centerY) {
        if (!this.activeEffects || this.activeEffects.length === 0) return;

        // Draw status effect icons above the character
        let iconX = centerX - (this.activeEffects.length * 15) / 2;
        const iconY = this.y - 80;

        this.activeEffects.forEach((effect, index) => {
            // Background circle for effect icon
            ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
            ctx.beginPath();
            ctx.arc(iconX, iconY, 12, 0, Math.PI * 2);
            ctx.fill();

            // Effect icon based on type
            ctx.font = '16px Arial';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';

            let icon = '?';
            let color = '#FFFFFF';

            switch(effect.type) {
                case 'damageBoost':
                    icon = '⚔️';
                    color = '#FF4444';
                    break;
                case 'defenseBoost':
                    icon = '🛡️';
                    color = '#4444FF';
                    break;
                case 'speedBoost':
                    icon = '💨';
                    color = '#44FF44';
                    break;
                case 'poisoned':
                    icon = '☢️';
                    color = '#44FF44';
                    break;
                case 'frozen':
                    icon = '❄️';
                    color = '#00FFFF';
                    break;
                case 'teleport':
                    icon = '🌀';
                    color = '#9932CC';
                    break;
                case 'timeStop':
                    icon = '⏰';
                    color = '#FFFF44';
                    break;
                case 'heal':
                    icon = '💚';
                    color = '#44FF44';
                    break;
            }

            ctx.fillStyle = color;
            ctx.fillText(icon, iconX, iconY);

            // Duration indicator (small bar below icon)
            const durationPercent = effect.timeLeft / (effect.duration || 1000);
            ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
            ctx.fillRect(iconX - 8, iconY + 15, 16 * durationPercent, 2);

            iconX += 30;
        });
    }

    drawAnimatedArms(ctx, centerX, centerY) {
        ctx.strokeStyle = this.char.color;
        ctx.lineWidth = 4;
        ctx.lineCap = 'round';

        if (!this.onGround) {
            // JUMPING/FALLING ARM ANIMATIONS
            if (this.velocityY < 0) {
                // GOING UP (jumping) - Elbows bend slightly, arms go all the way down then straighten
                const jumpProgress = Math.abs(this.velocityY) / 19; // Updated for new jump power
                const armDownAmount = Math.min(jumpProgress * 20, 20);
                
                ctx.beginPath();
                // Left arm - bent elbow, going down
                ctx.moveTo(centerX, centerY);
                ctx.lineTo(centerX - 8, centerY + 5 + armDownAmount);
                ctx.lineTo(centerX - 15, centerY + 15 + armDownAmount);
                
                // Right arm - bent elbow, going down
                ctx.moveTo(centerX, centerY);
                ctx.lineTo(centerX + 8, centerY + 5 + armDownAmount);
                ctx.lineTo(centerX + 15, centerY + 15 + armDownAmount);
                ctx.stroke();
            } else {
                // FALLING - Arms go up and wiggle until hitting ground
                const wiggleTime = Date.now() * 0.01;
                const leftWiggle = Math.sin(wiggleTime) * 5;
                const rightWiggle = Math.sin(wiggleTime + 1) * 5;
                
                ctx.beginPath();
                // Left arm - up and wiggling
                ctx.moveTo(centerX, centerY);
                ctx.lineTo(centerX - 12 + leftWiggle, centerY - 15);
                ctx.lineTo(centerX - 20 + leftWiggle, centerY - 25);
                
                // Right arm - up and wiggling
                ctx.moveTo(centerX, centerY);
                ctx.lineTo(centerX + 12 + rightWiggle, centerY - 15);
                ctx.lineTo(centerX + 20 + rightWiggle, centerY - 25);
                ctx.stroke();
            }
        } else if (this.isMoving) {
            // WALKING ANIMATION - Elbow bends and straightens in pumping motion
            const leftArmPump = Math.sin(this.animationFrame) * 10;
            const rightArmPump = Math.sin(this.animationFrame + Math.PI) * 10;
            
            ctx.beginPath();
            // Left arm - pumping motion (opposite to legs)
            ctx.moveTo(centerX, centerY);
            ctx.lineTo(centerX - 8, centerY + 5);
            ctx.lineTo(centerX - 12 + leftArmPump, centerY + 12);
            
            // Right arm - pumping opposite to left
            ctx.moveTo(centerX, centerY);
            ctx.lineTo(centerX + 8, centerY + 5);
            ctx.lineTo(centerX + 12 + rightArmPump, centerY + 12);
            ctx.stroke();
        } else {
            // IDLE ANIMATION - Classic stickman T-pose with arms straight out at 90 degrees
            ctx.beginPath();
            ctx.moveTo(centerX, centerY);
            ctx.lineTo(centerX - 20, centerY);
            ctx.moveTo(centerX, centerY);
            ctx.lineTo(centerX + 20, centerY);
            ctx.stroke();
        }
        
        // ITEM IN HAND SYSTEM! - Show held item instead of mini emoji when holding an item
        let handX, handY;
        
        // Calculate actual hand position based on current animation state
        if (!this.onGround) {
            // JUMPING/FALLING HAND POSITIONS
            if (this.velocityY < 0) {
                // GOING UP (jumping) - Hand follows arm going down
                const jumpProgress = Math.abs(this.velocityY) / 19; // Updated for new jump power
                const armDownAmount = Math.min(jumpProgress * 20, 20);
                
                // Hand is at the end of the extended arm
                handX = centerX + (this.direction > 0 ? 15 : -15);
                handY = centerY + 15 + armDownAmount;
            } else {
                // FALLING - Hand follows wiggling arms that are up
                const wiggleTime = Date.now() * 0.01;
                const armWiggle = this.direction > 0 ? Math.sin(wiggleTime + 1) * 5 : Math.sin(wiggleTime) * 5;
                
                // Hand is at the end of the raised, wiggling arm
                handX = centerX + (this.direction > 0 ? 20 : -20) + armWiggle;
                handY = centerY - 25;
            }
        } else if (this.isMoving) {
            // WALKING ANIMATION - Hand follows pumping arm motion
            const armPump = this.direction > 0 ? 
                Math.sin(this.animationFrame + Math.PI) * 10 : // Right arm (opposite phase)
                Math.sin(this.animationFrame) * 10; // Left arm
            
            // Hand is at the end of the pumping arm
            handX = centerX + (this.direction > 0 ? 12 : -12) + armPump;
            handY = centerY + 12;
        } else {
            // IDLE ANIMATION - Hand at normal straight arm position
            handX = centerX + (this.direction > 0 ? 12 : -12);
            handY = centerY;
        }
        
        // Draw what's in the hand
        ctx.font = 'bold 12px Arial';
        ctx.fillStyle = '#ffffff';
        ctx.textAlign = 'center';
        
        if (this.heldItem) {
            // HOLDING AN ITEM - Show item emoji instead of character emoji
            ctx.shadowColor = '#FFD700'; // Golden glow for held items
            ctx.shadowBlur = 8;
            ctx.fillText(this.heldItem.emoji, handX, handY + 3);
            ctx.shadowBlur = 0;
        } else if (this.canAttack) {
            // NOT HOLDING ITEM BUT CAN ATTACK - Show mini character emoji (normal "bullet")
            ctx.shadowColor = this.char.color;
            ctx.shadowBlur = 5;
            ctx.fillText(this.char.emoji, handX, handY + 3);
            ctx.shadowBlur = 0;
        }
        // If can't attack and no item, show nothing in hand
        
        ctx.textAlign = 'left';
    }

    drawAnimatedLegs(ctx, centerX, centerY) {
        ctx.strokeStyle = this.char.color;
        ctx.lineWidth = 4;
        ctx.lineCap = 'round';
        
        if (!this.onGround) {
            // JUMPING ANIMATION - Both legs bend then push down
            const jumpProgress = Math.abs(this.velocityY) / 19; // Updated for new jump power
            
            if (this.velocityY < 0) {
                // Going up - legs bend and push down
                const bendAmount = Math.min(jumpProgress * 15, 15);
                ctx.beginPath();
                // Left leg - bent up
                ctx.moveTo(centerX, centerY + 20);
                ctx.lineTo(centerX - 8, centerY + 20 + bendAmount);
                ctx.lineTo(centerX - 12, centerY + 30 - bendAmount);
                // Right leg - bent up  
                ctx.moveTo(centerX, centerY + 20);
                ctx.lineTo(centerX + 8, centerY + 20 + bendAmount);
                ctx.lineTo(centerX + 12, centerY + 30 - bendAmount);
                ctx.stroke();
            } else {
                // Falling down - legs extend down
                ctx.beginPath();
                ctx.moveTo(centerX, centerY + 20);
                ctx.lineTo(centerX - 10, centerY + 35);
                ctx.moveTo(centerX, centerY + 20);
                ctx.lineTo(centerX + 10, centerY + 35);
                ctx.stroke();
            }
        } else if (this.isMoving) {
            // WALKING ANIMATION - Alternating leg positions
            const leftLegOffset = Math.sin(this.animationFrame) * 8;
            const rightLegOffset = Math.sin(this.animationFrame + Math.PI) * 8;
            
            ctx.beginPath();
            // Left leg - moves back and forth
            ctx.moveTo(centerX, centerY + 20);
            ctx.lineTo(centerX - 10 + leftLegOffset, centerY + 35);
            // Right leg - moves opposite to left leg
            ctx.moveTo(centerX, centerY + 20);
            ctx.lineTo(centerX + 10 + rightLegOffset, centerY + 35);
            ctx.stroke();
        } else {
            // IDLE ANIMATION - Normal standing legs
            ctx.beginPath();
            ctx.moveTo(centerX, centerY + 20);
            ctx.lineTo(centerX - 10, centerY + 35);
            ctx.moveTo(centerX, centerY + 20);
            ctx.lineTo(centerX + 10, centerY + 35);
            ctx.stroke();
        }
    }

    drawCharacterHead(ctx, centerX, centerY) {
        // Draw emoji head (only if not flying as special attack projectile)
        if (!this.headFlying) {
            // Scale font size based on character size
            const screenScale = Math.min(window.innerWidth / 800, window.innerHeight / 600);
            const fontSize = Math.floor(24 * screenScale * 1.5); // 1.5x bigger
            const minFontSize = 30; // Minimum font size for visibility
            const finalFontSize = Math.max(minFontSize, fontSize);

            ctx.font = `bold ${finalFontSize}px Arial`;
            ctx.fillStyle = '#ffffff';
            ctx.textAlign = 'center';
            ctx.fillText(this.char.emoji, centerX, centerY - 15);
            ctx.textAlign = 'left';
        }

        // DRAW EQUIPPED ADDONS IN BATTLE
        const playerName = this === gameState.battle?.player1 ? 'player1' : 'player2';

        // Get character key for this player
        const charKey = playerName === 'player1' ? gameState.selectedCharacter : gameState.selectedPlayer2Character;

        // Initialize character equipped addons storage if it doesn't exist
        if (!gameState.characterEquippedAddons) {
            gameState.characterEquippedAddons = {};
        }

        // Get equipped addons for this specific character
        const equippedAddons = charKey && gameState.characterEquippedAddons[charKey]
            ? gameState.characterEquippedAddons[charKey]
            : null;

        if (equippedAddons) {
            const shoeKey = equippedAddons.shoes;
            const pantsKey = equippedAddons.pants;
            const shirtKey = equippedAddons.shirt;
            const hatKey = equippedAddons.hat;

            // Extract country/sport/theme from keys
            const getCountrySport = (key) => {
                if (!key) return { country: null, sport: null };
                const country = key.includes('_') ? key.split('_')[1] : null;
                const sports = ['soccer', 'basketball', 'baseball', 'football', 'hockey', 'tennis', 'golf', 'boxing', 'racing', 'cycling'];
                const themes = ['wizard', 'knight', 'ninja', 'chef', 'doctor', 'pilot', 'winter', 'summer', '80s', '90s', 'army', 'navy'];
                const sport = sports.find(s => key.includes(s)) || themes.find(t => key.includes(t));
                return { country, sport };
            };

            // Calculate animated limb positions based on character state
            let leftFootX, leftFootY, rightFootX, rightFootY;
            let leftHandX, leftHandY, rightHandX, rightHandY;
            let leftShoulderX, leftShoulderY, rightShoulderX, rightShoulderY;

            if (!this.onGround) {
                // JUMPING/FALLING
                const jumpProgress = Math.abs(this.velocityY) / 19;

                if (this.velocityY < 0) {
                    // Going up - legs bent
                    const bendAmount = Math.min(jumpProgress * 15, 15);
                    leftFootX = centerX - 12;
                    leftFootY = centerY + 30 - bendAmount;
                    rightFootX = centerX + 12;
                    rightFootY = centerY + 30 - bendAmount;

                    // Arms down
                    const armDownAmount = Math.min(jumpProgress * 20, 20);
                    leftHandX = centerX - 15;
                    leftHandY = centerY + 15 + armDownAmount;
                    rightHandX = centerX + 15;
                    rightHandY = centerY + 15 + armDownAmount;
                } else {
                    // Falling - legs extended
                    leftFootX = centerX - 10;
                    leftFootY = centerY + 35;
                    rightFootX = centerX + 10;
                    rightFootY = centerY + 35;

                    // Arms up and wiggling
                    const wiggleTime = Date.now() * 0.01;
                    leftHandX = centerX - 20 + Math.sin(wiggleTime) * 5;
                    leftHandY = centerY - 25;
                    rightHandX = centerX + 20 + Math.sin(wiggleTime + 1) * 5;
                    rightHandY = centerY - 25;
                }
            } else if (this.isMoving) {
                // WALKING - alternating legs and pumping arms
                const leftLegOffset = Math.sin(this.animationFrame) * 8;
                const rightLegOffset = Math.sin(this.animationFrame + Math.PI) * 8;

                leftFootX = centerX - 10 + leftLegOffset;
                leftFootY = centerY + 35;
                rightFootX = centerX + 10 + rightLegOffset;
                rightFootY = centerY + 35;

                // Arms pump opposite to legs
                const leftArmPump = Math.sin(this.animationFrame) * 10;
                const rightArmPump = Math.sin(this.animationFrame + Math.PI) * 10;

                leftHandX = centerX - 12 + leftArmPump;
                leftHandY = centerY + 12;
                rightHandX = centerX + 12 + rightArmPump;
                rightHandY = centerY + 12;
            } else {
                // IDLE - standing still with classic T-pose
                leftFootX = centerX - 10;
                leftFootY = centerY + 35;
                rightFootX = centerX + 10;
                rightFootY = centerY + 35;

                // Arms straight out at 90 degrees (classic stickman)
                leftHandX = centerX - 20;
                leftHandY = centerY;
                rightHandX = centerX + 20;
                rightHandY = centerY;
            }

            // Shoulders - adjust based on animation state for better shirt rendering
            if (this.isMoving || !this.onGround) {
                // Moving/jumping - shoulders at normal position
                leftShoulderX = centerX - 15;
                leftShoulderY = centerY - 10;
                rightShoulderX = centerX + 15;
                rightShoulderY = centerY - 10;
            } else {
                // Idle T-pose - shoulders at body center for proper sleeve rendering
                leftShoulderX = centerX - 5;
                leftShoulderY = centerY - 5;
                rightShoulderX = centerX + 5;
                rightShoulderY = centerY - 5;
            }

            // Draw SHOES on animated feet
            if (shoeKey && addons[shoeKey]) {
                const { country, sport } = getCountrySport(shoeKey);
                // Left shoe follows left foot
                drawShoe(ctx, leftFootX - 5, leftFootY - 3, 10, 6, addons[shoeKey].color, country, sport);
                // Right shoe follows right foot
                drawShoe(ctx, rightFootX - 5, rightFootY - 3, 10, 6, addons[shoeKey].color, country, sport);
            }

            // Draw PANTS on animated legs
            if (pantsKey && addons[pantsKey]) {
                const { country, sport } = getCountrySport(pantsKey);
                drawPants(ctx, centerX, centerY + 20, leftFootX, leftFootY - 3, rightFootX, rightFootY - 3, 8, addons[pantsKey].color, country, sport);
            }

            // Draw SHIRT on animated body and arms (shirt will cover the arms) - thinner
            if (shirtKey && addons[shirtKey]) {
                const { country, sport } = getCountrySport(shirtKey);
                drawShirt(ctx, centerX, centerY - 20, centerY + 20, leftShoulderX, leftShoulderY, rightShoulderX, rightShoulderY, leftHandX, leftHandY, rightHandX, rightHandY, 9, addons[shirtKey].color, country, sport);
            }

            // Draw HAT on top of head (not inside it) - lower in battle
            if (hatKey && addons[hatKey]) {
                const { country, sport } = getCountrySport(hatKey);
                drawHat(ctx, centerX, centerY - 45, 15, 12, addons[hatKey].color, country, sport);
            }
        }

        // FLAG CAPTURE MODE - Draw flag in hand if holding it
        if (gameState.battle && gameState.battle.isFlagCaptureMode) {
            const flagPlayerName = this === gameState.battle.player1 ? 'player1' : 'player2';
            if (gameState.flagCapture.flagHolder === flagPlayerName) {
                // Draw flag in player's hand
                ctx.font = '25px Arial';
                ctx.textAlign = 'center';
                const flagX = centerX + (this.direction > 0 ? 25 : -25); // Flag in front of player
                const flagY = centerY + 5; // Slightly below center
                ctx.fillText('🏁', flagX, flagY);
                ctx.textAlign = 'left';
            }
        }
    }

    drawHealthAndBars(ctx, centerX, centerY) {
        // Draw health bar with HP numbers - WORKING!
        const healthBarY = this.y - 50; // Moved up to make room for circle
        
        // Health bar background
        ctx.fillStyle = '#333';
        ctx.fillRect(this.x, healthBarY, this.width, 8);
        
        // Health bar fill
        const healthPercent = this.health / this.maxHealth;
        ctx.fillStyle = healthPercent > 0.5 ? '#4caf50' : healthPercent > 0.25 ? '#ff9800' : '#f44336';
        ctx.fillRect(this.x, healthBarY, this.width * healthPercent, 8);
        
        // HP numbers - WORKING AND VISIBLE! Scale with screen size
        const screenScale = Math.min(window.innerWidth / 800, window.innerHeight / 600);
        const hpFontSize = Math.floor(14 * screenScale * 1.5); // 1.5x bigger
        const minHpFontSize = 18; // Minimum font size for visibility
        const finalHpFontSize = Math.max(minHpFontSize, hpFontSize);

        ctx.fillStyle = '#FFFFFF';
        ctx.font = `bold ${finalHpFontSize}px Arial`;
        ctx.textAlign = 'center';
        ctx.strokeStyle = '#000000';
        ctx.lineWidth = 2;
        ctx.strokeText(`${Math.max(0, Math.floor(this.health))}/${this.maxHealth}`, centerX, healthBarY - 5);
        ctx.fillText(`${Math.max(0, Math.floor(this.health))}/${this.maxHealth}`, centerX, healthBarY - 5);
        ctx.textAlign = 'left';
        
        // Normal attack cooldown bar
        if (!this.canAttack) {
            const attackBarY = this.y + this.height + 8;
            ctx.fillStyle = '#333';
            ctx.fillRect(this.x, attackBarY, this.width, 4);
            ctx.fillStyle = '#FFD700';
            const attackProgress = 1 - (this.attackCooldown / this.char.reloadTime);
            ctx.fillRect(this.x, attackBarY, this.width * attackProgress, 4);
        }
        
        // No special attack info displayed at bottom - only circle shows status

        // Reset alpha if it was changed for dead players
        ctx.globalAlpha = 1.0;
    }

    calculateActualDamage(baseDamage, attackType = 'normal') {
        let finalDamage = baseDamage;
        let damageMultiplier = 1.0;
        let flatDamageBonus = 0;
        let isCritical = false;

        // 1. ITEM EFFECTS - Apply temporary item bonuses
        if (this.activeEffects && this.activeEffects.length > 0) {
            this.activeEffects.forEach(effect => {
                switch(effect.type) {
                    case 'damageBoost':
                        flatDamageBonus += effect.data.amount || 0;
                        break;
                    case 'powerBoost':
                        damageMultiplier *= effect.data.multiplier || 1.0;
                        break;
                    case 'magicBoost':
                        // Magic damage boost
                        flatDamageBonus += effect.data.amount || 0;
                        break;
                    case 'heavyWeapon':
                        // Heavy weapon damage boost
                        flatDamageBonus += effect.data.damage || 0;
                        break;
                    case 'allPowers':
                        // All powers activated - massive boost
                        damageMultiplier *= 2.0;
                        flatDamageBonus += 25;
                        break;
                    case 'berserk':
                        // Berserk mode when low health
                        if (this.health / this.maxHealth < 0.5) {
                            damageMultiplier *= 1.5;
                        }
                        break;
                }
            });
        }

        // 2. BADGE EFFECTS - Apply equipped badge bonuses
        let equippedBadges = [];
        if (gameState.gameMode === 'multiplayer') {
            if (this.type === 'player') {
                equippedBadges = gameState.player1EquippedBadges || [];
            } else {
                equippedBadges = gameState.player2EquippedBadges || [];
            }
        } else {
            equippedBadges = gameState.equippedBadges || [];
        }

        let criticalChance = 0;
        let criticalMultiplier = 1.5; // Base critical multiplier

        equippedBadges.forEach(badgeId => {
            const badge = badges[badgeId];
            if (!badge) return;

            switch(badge.effect) {
                case 'damage':
                    if (attackType === 'normal') {
                        flatDamageBonus += badge.value;
                    }
                    break;
                case 'special_damage':
                    if (attackType === 'special') {
                        flatDamageBonus += badge.value;
                    }
                    break;
                case 'critical':
                    criticalChance += badge.value;
                    break;
                case 'assassin':
                    criticalMultiplier += (badge.value / 100); // Convert percentage to multiplier
                    break;
                case 'berserk':
                    if (this.health / this.maxHealth < 0.5) {
                        damageMultiplier *= (1 + badge.value / 100);
                    }
                    break;
                case 'hunter':
                    // Bonus damage vs high HP enemies
                    const enemy = this.type === 'player' ? gameState.battle.player2 : gameState.battle.player1;
                    if (enemy && enemy.health / enemy.maxHealth > 0.75) {
                        damageMultiplier *= (1 + badge.value / 100);
                    }
                    break;
                case 'warrior':
                    flatDamageBonus += badge.value;
                    break;
                case 'elementalist':
                    if (attackType === 'special') {
                        flatDamageBonus += badge.value;
                    }
                    break;
            }
        });

        // 3. CRITICAL HIT CALCULATION
        if (criticalChance > 0 && Math.random() * 100 < criticalChance) {
            isCritical = true;
            damageMultiplier *= criticalMultiplier;
        }

        // 4. APPLY ALL MODIFIERS
        finalDamage = (baseDamage + flatDamageBonus) * damageMultiplier;

        // 5. ROUND TO NEAREST INTEGER
        finalDamage = Math.round(finalDamage);

        // 6. LOG DAMAGE CALCULATION FOR DEBUGGING
        if (flatDamageBonus > 0 || damageMultiplier !== 1.0 || isCritical) {
            console.log(`${this.char.name} ${attackType} damage calculation:
                Base: ${baseDamage}
                Flat Bonus: +${flatDamageBonus}
                Multiplier: x${damageMultiplier.toFixed(2)}
                Critical: ${isCritical ? 'YES' : 'NO'}
                Final: ${finalDamage}`);
        }

        return finalDamage;
    }

    normalAttack() {
        if (!this.canAttack) return;

        // Don't attack if dead
        if (this.health <= 0) return;

        // Check if frozen - cannot attack when frozen
        const isFrozen = this.activeEffects && this.activeEffects.some(effect => effect.type === 'frozen');
        if (isFrozen) {
            console.log(`${this.char.name} cannot attack while frozen!`);
            return;
        }

        // FLAG CAPTURE MODE - Cannot attack while holding flag
        if (gameState.battle && gameState.battle.isFlagCaptureMode) {
            const playerName = this === gameState.battle.player1 ? 'player1' : 'player2';
            if (gameState.flagCapture.flagHolder === playerName) {
                console.log(`${this.char.name} cannot attack while holding the flag!`);
                return;
            }
        }

        // Calculate actual damage including item effects
        const baseDamage = this.char.damage;
        const actualDamage = this.calculateActualDamage(baseDamage, 'normal');

        const projectile = new Projectile(
            this.x + (this.direction > 0 ? this.width : 0),
            this.y + this.height / 2,
            this.direction * 8,
            actualDamage,
            this.char.color,
            this
        );

        gameState.battle.projectiles.push(projectile);
        this.canAttack = false;
        this.attackCooldown = this.char.reloadTime;

        // Add screen shake for attack
        if (gameState.battle) {
            gameState.battle.addScreenShake(3, 10);
        }

        console.log(`${this.char.name} normal attack: ${actualDamage} damage (base: ${baseDamage})`);
    }

    // Method to handle lifesteal healing when this player deals damage
    applyLifesteal(damageDealt) {
        let totalLifesteal = 0;

        // Get equipped badges for lifesteal calculation
        let equippedBadges = [];
        if (gameState.gameMode === 'multiplayer') {
            if (this.type === 'player') {
                equippedBadges = gameState.player1EquippedBadges || [];
            } else {
                equippedBadges = gameState.player2EquippedBadges || [];
            }
        } else {
            equippedBadges = gameState.equippedBadges || [];
        }

        // Calculate lifesteal percentage from badges
        equippedBadges.forEach(badgeId => {
            const badge = badges[badgeId];
            if (badge && badge.effect === 'lifesteal') {
                totalLifesteal += badge.value;
            }
        });

        // Apply lifesteal healing
        if (totalLifesteal > 0) {
            const healAmount = Math.round(damageDealt * (totalLifesteal / 100));
            const actualHeal = Math.min(healAmount, this.maxHealth - this.health);

            if (actualHeal > 0) {
                this.health += actualHeal;
                console.log(`🩸 ${this.char.name} lifesteal: +${actualHeal} HP (${totalLifesteal}% of ${damageDealt} damage)`);
            }
        }
    }

    specialAttack() {
        console.log(`🎯 specialAttack called for ${this.char.name}`);
        console.log(`   canSpecialAttack: ${this.canSpecialAttack}`);
        console.log(`   specialCooldown: ${this.specialCooldown}`);
        console.log(`   specialMaxCooldown: ${this.specialMaxCooldown}`);
        console.log(`   headFlying: ${this.headFlying}`);

        if (!this.canSpecialAttack) {
            console.log(`   ❌ Cannot special attack - on cooldown`);
            return;
        }
        if (this.headFlying) {
            console.log(`   ❌ Cannot special attack - head is flying`);
            return; // Prevent multiple head projectiles
        }

        // Don't attack if dead
        if (this.health <= 0) return;

        // Check if frozen - cannot attack when frozen
        const isFrozen = this.activeEffects && this.activeEffects.some(effect => effect.type === 'frozen');
        if (isFrozen) {
            console.log(`${this.char.name} cannot special attack while frozen!`);
            return;
        }

        // FLAG CAPTURE MODE - Cannot attack while holding flag
        if (gameState.battle && gameState.battle.isFlagCaptureMode) {
            const playerName = this === gameState.battle.player1 ? 'player1' : 'player2';
            if (gameState.flagCapture.flagHolder === playerName) {
                console.log(`${this.char.name} cannot special attack while holding the flag!`);
                return;
            }
        }

        // HEAD EMOJI SPECIAL ATTACK! - The head flies off as a spinning projectile
        this.headFlying = true; // Flag to hide head emoji while it's flying

        // Calculate actual special damage including item effects and badges
        const baseDamage = this.char.specialDamage;
        const actualDamage = this.calculateActualDamage(baseDamage, 'special');

        // Determine target and direction
        const target = this === gameState.battle.player1 ? gameState.battle.player2 : gameState.battle.player1;
        const directionToTarget = target.x > this.x ? 1 : -1;

        // Calculate head starting position (exactly from character's head)
        const centerX = this.x + this.width / 2;
        const centerY = this.y + this.height / 2;
        const headStartX = centerX;
        const headStartY = centerY - 15; // Exact same position as drawCharacterHead

        // Create head projectile that spins toward target
        const headProjectile = new HeadProjectile(
            headStartX,
            headStartY,
            directionToTarget * 12, // Faster than normal projectiles, aimed at target
            actualDamage,
            this.char.color,
            this,
            this.char.emoji // Pass the head emoji
        );

        gameState.battle.projectiles.push(headProjectile);

        this.canSpecialAttack = false;
        this.specialCooldown = this.specialMaxCooldown;

        // Track special attack usage for challenges (only for Player 1)
        if (this === gameState.battle?.player1) {
            trackChallengeProgress('special_used');

            // Track character-specific special uses
            const charKey = gameState.selectedCharacter;
            if (charKey) {
                // Initialize stats if they don't exist
                if (!gameState.characterStats) {
                    gameState.characterStats = {};
                }
                if (!gameState.characterStats[charKey]) {
                    gameState.characterStats[charKey] = {
                        wins: 0,
                        losses: 0,
                        totalDamageDealt: 0,
                        totalDamageTaken: 0,
                        fastestWin: null,
                        specialsUsed: 0,
                        perfectWins: 0,
                        comebackWins: 0
                    };
                }
                gameState.characterStats[charKey].specialsUsed++;
                console.log(`🌟 Special used! Total: ${gameState.characterStats[charKey].specialsUsed}`);
            }
        }

        // Add stronger screen shake for special attack
        if (gameState.battle) {
            gameState.battle.addScreenShake(8, 25);
        }

        console.log(`${this.char.name} HEAD SPECIAL ATTACK: ${actualDamage} damage (base: ${baseDamage}) - HEAD FLIES OFF!`);
    }

    takeDamage(incomingDamage, attacker = null) {
        let finalDamage = incomingDamage;
        let flatReduction = 0;
        let percentageReduction = 0;
        let dodged = false;

        // 1. DODGE CALCULATION - Check if attack is dodged
        let dodgeChance = 0;

        // Get equipped badges for dodge calculation
        let equippedBadges = [];
        if (gameState.gameMode === 'multiplayer') {
            if (this.type === 'player') {
                equippedBadges = gameState.player1EquippedBadges || [];
            } else {
                equippedBadges = gameState.player2EquippedBadges || [];
            }
        } else {
            equippedBadges = gameState.equippedBadges || [];
        }

        // Calculate dodge chance from badges
        equippedBadges.forEach(badgeId => {
            const badge = badges[badgeId];
            if (badge && badge.effect === 'dodge') {
                dodgeChance += badge.value;
            }
        });

        // Check for dodge
        if (dodgeChance > 0 && Math.random() * 100 < dodgeChance) {
            dodged = true;
            console.log(`💨 ${this.char.name} DODGED the attack! (${dodgeChance}% chance)`);
            return; // No damage taken
        }

        // 2. DEFENSE CALCULATION - Apply damage reduction

        // Badge-based defense
        equippedBadges.forEach(badgeId => {
            const badge = badges[badgeId];
            if (!badge) return;

            switch(badge.effect) {
                case 'defense':
                    // Defense badges now use percentage reduction
                    percentageReduction += badge.value;
                    break;
                case 'guardian':
                    percentageReduction += badge.value;
                    break;
                case 'survivor':
                    // Extra defense when low health
                    if (this.health / this.maxHealth < 0.25) {
                        percentageReduction += badge.value;
                    }
                    break;
                case 'tank':
                    // Tank badges provide percentage reduction based on HP bonus
                    percentageReduction += Math.floor(badge.value / 20); // 20 HP = 1% defense
                    break;
            }
        });

        // Item-based defense
        if (this.activeEffects && this.activeEffects.length > 0) {
            this.activeEffects.forEach(effect => {
                switch(effect.type) {
                    case 'defenseBoost':
                        // Defense items provide percentage reduction
                        percentageReduction += effect.data.amount || 0;
                        break;
                    case 'shielded':
                        percentageReduction += effect.data.reduction || 0;
                        break;
                }
            });
        }

        // 3. APPLY DAMAGE REDUCTION

        // Apply flat reduction first
        finalDamage = Math.max(1, finalDamage - flatReduction); // Minimum 1 damage

        // Apply percentage reduction
        if (percentageReduction > 0) {
            const reductionMultiplier = Math.max(0.1, 1 - (percentageReduction / 100)); // Minimum 10% damage taken
            finalDamage = finalDamage * reductionMultiplier;
        }

        // Round to nearest integer
        finalDamage = Math.round(finalDamage);

        // 4. TRACK DAMAGE FOR CHALLENGES (only for Player 1 dealing damage)
        if (attacker && attacker === gameState.battle?.player1 && this !== gameState.battle?.player1) {
            trackChallengeProgress('damage_dealt', { damage: finalDamage });

            // Track character-specific damage dealt
            const charKey = gameState.selectedCharacter;
            if (charKey) {
                // Initialize stats if they don't exist
                if (!gameState.characterStats) {
                    gameState.characterStats = {};
                }
                if (!gameState.characterStats[charKey]) {
                    gameState.characterStats[charKey] = {
                        wins: 0,
                        losses: 0,
                        totalDamageDealt: 0,
                        totalDamageTaken: 0,
                        fastestWin: null,
                        specialsUsed: 0,
                        perfectWins: 0,
                        comebackWins: 0
                    };
                }
                gameState.characterStats[charKey].totalDamageDealt += finalDamage;
                console.log(`💥 Damage dealt tracked: +${finalDamage} (Total: ${gameState.characterStats[charKey].totalDamageDealt})`);
                // Note: We don't save here to avoid too many saves, it will save at battle end
            }
        }

        // 5. LIFESTEAL CALCULATION (for the attacker)
        // Note: This would need to be called from the attacker's side, but we'll track it here for logging

        // 6. FLAG CAPTURE MODE - Handle flag stealing
        if (gameState.battle && gameState.battle.isFlagCaptureMode && !dodged && attacker) {
            const attackedPlayer = this === gameState.battle.player1 ? 'player1' : 'player2';
            const attackingPlayer = attacker === gameState.battle.player1 ? 'player1' : 'player2';

            // If this player has the flag, steal it to the attacker
            if (gameState.flagCapture.flagHolder === attackedPlayer) {
                gameState.battle.stealFlag(attackedPlayer, attackingPlayer);
            }
        }

        // 6. APPLY FINAL DAMAGE
        this.health = Math.max(0, this.health - finalDamage);

        // 6. ADD VISUAL EFFECTS
        if (gameState.battle) {
            // Screen shake based on damage amount
            const shakeIntensity = Math.min(finalDamage / 10, 15);
            gameState.battle.addScreenShake(shakeIntensity, 20);

            // Hit sparks
            if (gameState.battle && gameState.battle.addVisualEffect) {
                for (let i = 0; i < 5; i++) {
                    gameState.battle.addVisualEffect('hit_spark',
                        this.x + this.width/2 + (Math.random() - 0.5) * 30,
                        this.y + this.height/2 + (Math.random() - 0.5) * 30,
                        {
                            life: 15,
                            velocityX: (Math.random() - 0.5) * 4,
                            velocityY: (Math.random() - 0.5) * 4
                        }
                    );
                }

                // Damage number
                gameState.battle.addVisualEffect('damage_number',
                    this.x + this.width/2,
                    this.y + this.height/2 - 20,
                    {
                        life: 60,
                        damage: finalDamage
                    }
                );
            }
        }

        // 7. LOG DAMAGE CALCULATION
        if (flatReduction > 0 || percentageReduction > 0) {
            console.log(`🛡️ ${this.char.name} damage reduction:
                Incoming: ${incomingDamage}
                Flat Reduction: -${flatReduction}
                Percentage Reduction: -${percentageReduction}%
                Final Damage: ${finalDamage}
                HP: ${Math.floor(this.health)}/${this.maxHealth}`);
        } else {
            console.log(`${this.char.name} takes ${finalDamage} damage! HP: ${Math.floor(this.health)}/${this.maxHealth}`);
        }
    }

    useItem() {
        if (!this.heldItem) {
            console.log(`${this.char.name} has no item to use!`);
            return;
        }
        
        // Use the held item
        console.log(`${this.char.name} uses ${this.heldItem.name}!`);
        this.applyItemEffect(this.heldItem);
        
        // Clear the held item after use
        this.heldItem = null;
    }

    applyItemEffect(item) {
        const itemData = item.data;
        console.log(`${this.char.name} uses ${itemData.name}! Effect: ${itemData.type}`);
        
        // Initialize item effects tracking if needed
        if (!this.itemEffects) this.itemEffects = {};
        if (!this.activeEffects) this.activeEffects = [];
        
        // Apply item effects based on type
        switch(itemData.type) {
            case 'weapon':
            case 'ranged':
            case 'legendary':
            case 'alpha':
            case 'beta':
            case 'military':
                // Weapon damage boost
                this.addTimedEffect('damageBoost', {
                    amount: itemData.damage || 50,
                    duration: itemData.duration || 10000,
                    name: itemData.name
                });
                console.log(`${this.char.name} gains +${itemData.damage || 50} damage for ${(itemData.duration || 10000)/1000}s!`);
                break;
                
            case 'explosive':
            case 'ultimate':
            case 'cosmic':
            case 'omega':
                // EXPLOSIVE DAMAGE - Instant explosion damage to enemy!
                const explosiveTarget = this === gameState.battle.player1 ? gameState.battle.player2 : gameState.battle.player1;
                const explosiveDamage = itemData.damage || 80;

                // Deal instant damage
                explosiveTarget.takeDamage(explosiveDamage, this);

                // Create massive explosion animation
                this.createExplosionEffect(explosiveTarget);

                console.log(`💥 EXPLOSION! ${itemData.name} deals ${explosiveDamage} damage to ${explosiveTarget.char.name}!`);
                break;
                
            case 'defense':
                // Defense boost
                this.addTimedEffect('defenseBoost', {
                    amount: itemData.defense || 20,
                    duration: itemData.duration || 10000,
                    name: itemData.name
                });
                console.log(`${this.char.name} gains +${itemData.defense || 20} defense!`);
                break;
                
            case 'consumable':
                // INSTANT HEAL
                if (itemData.heal) {
                    const healAmount = itemData.heal;
                    const oldHealth = this.health;
                    this.health = Math.min(this.maxHealth, this.health + healAmount);
                    const actualHeal = this.health - oldHealth;
                    console.log(`${this.char.name} heals for ${actualHeal} HP! (${oldHealth} -> ${this.health})`);
                    
                    // Visual heal effect
                    this.createHealEffect(actualHeal);
                }
                break;
                
            case 'buff':
                // Speed boost
                if (itemData.speedMultiplier) {
                    this.addTimedEffect('speedBoost', {
                        multiplier: itemData.speedMultiplier,
                        duration: itemData.duration || 10000,
                        name: itemData.name
                    });
                    console.log(`${this.char.name} gains ${itemData.speedMultiplier}x speed!`);
                }
                // Power boost
                if (itemData.powerBoost) {
                    this.addTimedEffect('powerBoost', {
                        multiplier: itemData.powerBoost,
                        duration: itemData.duration || 10000,
                        name: itemData.name
                    });
                    console.log(`${this.char.name} gains ${itemData.powerBoost}x power!`);
                }
                break;
                
            case 'instant':
                // INSTANT DAMAGE to enemy
                const enemy = this === gameState.battle.player1 ? gameState.battle.player2 : gameState.battle.player1;
                const instantDamage = itemData.damage || 80;
                enemy.takeDamage(instantDamage);
                console.log(`⚡ INSTANT EFFECT: ${itemData.name} strikes ${enemy.char.name} for ${instantDamage} damage!`);
                
                // Visual lightning effect
                this.createLightningEffect(enemy);
                break;
                
            case 'debuff':
                const target = this === gameState.battle.player1 ? gameState.battle.player2 : gameState.battle.player1;

                // Freeze enemy
                if (itemData.freezeDuration) {
                    target.addTimedEffect('frozen', {
                        duration: itemData.freezeDuration,
                        name: itemData.name
                    });
                    console.log(`❄️ ${target.char.name} is FROZEN for ${itemData.freezeDuration/1000} seconds!`);
                }

                // Poison enemy
                if (itemData.poisonDamage && itemData.poisonDuration) {
                    target.addTimedEffect('poisoned', {
                        tickDamage: itemData.poisonDamage,
                        duration: itemData.poisonDuration,
                        name: itemData.name,
                        lastTick: Date.now()
                    });
                    console.log(`☠️ ${target.char.name} is POISONED! Taking ${itemData.poisonDamage} damage/sec for ${itemData.poisonDuration/1000}s!`);
                }
                break;
                
            case 'area':
                // Area damage around enemy
                const areaTarget = this === gameState.battle.player1 ? gameState.battle.player2 : gameState.battle.player1;
                const areaDamage = itemData.damage || 60;
                areaTarget.takeDamage(areaDamage);
                console.log(`💥 AREA BLAST: ${itemData.name} hits ${areaTarget.char.name} for ${areaDamage} damage!`);
                break;
                
            case 'magic':
            case 'celestial':
                // Magic damage boost with special effects
                this.addTimedEffect('magicBoost', {
                    amount: itemData.damage || 65,
                    duration: itemData.duration || 12000,
                    name: itemData.name
                });
                console.log(`✨ ${this.char.name} gains MAGICAL +${itemData.damage || 65} damage!`);
                break;
                
            case 'projectile':
            case 'heavy':
                // Heavy weapons - more damage, slower reload
                this.addTimedEffect('heavyWeapon', {
                    damage: itemData.damage || 90,
                    duration: itemData.duration || 8000,
                    name: itemData.name
                });
                console.log(`🔨 ${this.char.name} wields HEAVY WEAPON: +${itemData.damage || 90} damage!`);
                break;
                
            case 'radiation':
                // Poison damage over time to enemy
                const radTarget = this === gameState.battle.player1 ? gameState.battle.player2 : gameState.battle.player1;
                radTarget.addTimedEffect('poisoned', {
                    damage: itemData.damage || 10,
                    tickDamage: 10,
                    duration: itemData.duration || 8000,
                    name: itemData.name
                });
                console.log(`☢️ ${radTarget.char.name} is IRRADIATED! Taking poison damage!`);
                break;
                
            case 'time':
                // Time stop effect - freeze enemy temporarily
                if (itemData.freezeAll) {
                    const timeTarget = this === gameState.battle.player1 ? gameState.battle.player2 : gameState.battle.player1;
                    timeTarget.addTimedEffect('timeStop', {
                        duration: itemData.freezeAll || 3000,
                        name: itemData.name
                    });
                    console.log(`⏰ TIME STOP! ${timeTarget.char.name} is frozen in time!`);
                }
                break;
                
            case 'chaos':
                // Random effect!
                if (itemData.randomEffect) {
                    const chaosEffects = [
                        { type: 'heal', amount: 75 },
                        { type: 'damage_boost', amount: 50, duration: 8000 },
                        { type: 'speed', multiplier: 2, duration: 6000 },
                        { type: 'enemy_damage', amount: 60 }
                    ];
                    const randomEffect = chaosEffects[Math.floor(Math.random() * chaosEffects.length)];

                    switch(randomEffect.type) {
                        case 'heal':
                            this.health = Math.min(this.maxHealth, this.health + randomEffect.amount);
                            console.log(`🔮 CHAOS HEAL: +${randomEffect.amount} HP!`);
                            break;
                        case 'damage_boost':
                            this.addTimedEffect('damageBoost', {
                                amount: randomEffect.amount,
                                duration: randomEffect.duration,
                                name: 'Chaos Boost'
                            });
                            console.log(`🔮 CHAOS BOOST: +${randomEffect.amount} damage!`);
                            break;
                        case 'speed':
                            this.addTimedEffect('speedBoost', {
                                multiplier: randomEffect.multiplier,
                                duration: randomEffect.duration,
                                name: 'Chaos Speed'
                            });
                            console.log(`🔮 CHAOS SPEED: ${randomEffect.multiplier}x speed!`);
                            break;
                        case 'enemy_damage':
                            const chaosTarget = this === gameState.battle.player1 ? gameState.battle.player2 : gameState.battle.player1;
                            chaosTarget.takeDamage(randomEffect.amount);
                            console.log(`🔮 CHAOS STRIKE: ${randomEffect.amount} damage to enemy!`);
                            break;
                    }
                }
                break;

            case 'dimensional':
                // Space Rift - teleport ability
                if (itemData.teleport) {
                    this.addTimedEffect('teleport', {
                        duration: itemData.duration || 10000,
                        name: itemData.name
                    });
                    console.log(`🌀 ${this.char.name} gains teleport ability!`);
                }
                break;

            case 'fate':
                // Destiny - small chance for instant victory
                if (itemData.guaranteedWin && Math.random() < itemData.guaranteedWin) {
                    const enemy = this === gameState.battle.player1 ? gameState.battle.player2 : gameState.battle.player1;
                    enemy.health = 0;
                    console.log(`✨ DESTINY ACTIVATED! ${enemy.char.name} is defeated by fate!`);
                } else {
                    // If destiny doesn't trigger, give a powerful damage boost
                    this.addTimedEffect('damageBoost', {
                        amount: 100,
                        duration: itemData.duration || 10000,
                        name: itemData.name
                    });
                    console.log(`✨ Destiny grants +100 damage boost!`);
                }
                break;

            case 'infinite':
                // Infinity Stone - ALL POWERS
                if (itemData.allPowers) {
                    this.addTimedEffect('damageBoost', { amount: 150, duration: itemData.duration || 15000, name: 'Infinity Damage' });
                    this.addTimedEffect('speedBoost', { multiplier: 3, duration: itemData.duration || 15000, name: 'Infinity Speed' });
                    this.addTimedEffect('defenseBoost', { amount: 50, duration: itemData.duration || 15000, name: 'Infinity Defense' });
                    this.health = this.maxHealth; // Full heal
                    console.log(`♾️ INFINITY STONE ACTIVATED! ALL POWERS GRANTED!`);
                }
                break;

            case 'wave':
                // Tsunami - wave damage
                const waveTarget = this === gameState.battle.player1 ? gameState.battle.player2 : gameState.battle.player1;
                waveTarget.takeDamage(itemData.damage || 90);
                console.log(`🌊 TSUNAMI WAVE hits ${waveTarget.char.name} for ${itemData.damage || 90} damage!`);
                break;

            case 'global':
                // Global damage - affects enemy with massive area damage (Earthquake)
                const globalTarget = this === gameState.battle.player1 ? gameState.battle.player2 : gameState.battle.player1;
                const globalDamage = itemData.damage || 80;
                globalTarget.takeDamage(globalDamage);
                console.log(`🌍 GLOBAL EFFECT: ${itemData.name} hits ${globalTarget.char.name} for ${globalDamage} damage!`);

                // Add screen shake for global effects
                if (gameState.battle) {
                    gameState.battle.addScreenShake(15, 500);
                }
                break;

            default:
                console.log(`Unknown item type: ${itemData.type}`);
                break;
        }
        
        // Show visual notification
        showNotification(`${this.char.name} used:\n${itemData.emoji} ${itemData.name}!\n${this.getEffectDescription(itemData)}`);
    }

    tryTeleport() {
        // Check if player has teleport ability
        const hasTeleport = this.activeEffects && this.activeEffects.some(effect => effect.type === 'teleport');
        if (!hasTeleport) {
            console.log(`${this.char.name} has no teleport ability!`);
            return;
        }

        // Get the enemy player
        const enemy = this === gameState.battle.player1 ? gameState.battle.player2 : gameState.battle.player1;

        // Teleport near the enemy (but not exactly on them)
        const teleportDistance = 100; // Distance from enemy
        const direction = Math.random() < 0.5 ? -1 : 1; // Random side

        this.x = enemy.x + (direction * teleportDistance);
        this.y = enemy.y; // Same height

        // Make sure teleport position is within bounds
        this.x = Math.max(50, Math.min(window.innerWidth - 50, this.x));

        console.log(`🌀 ${this.char.name} teleports near ${enemy.char.name}!`);
        showNotification(`🌀 ${this.char.name} TELEPORTED!`);

        // Remove one use of teleport effect (reduce duration)
        const teleportEffect = this.activeEffects.find(effect => effect.type === 'teleport');
        if (teleportEffect) {
            teleportEffect.timeLeft -= 2000; // Reduce by 2 seconds per use
        }
    }

    addTimedEffect(effectType, effectData) {
        // Remove existing effect of same type
        this.activeEffects = this.activeEffects.filter(effect => effect.type !== effectType);
        
        // Add new effect
        this.activeEffects.push({
            type: effectType,
            data: effectData,
            timeLeft: effectData.duration,
            startTime: Date.now()
        });
        
        console.log(`${this.char.name} gains ${effectType} effect for ${effectData.duration/1000}s`);
    }

    updateItemEffects() {
        if (!this.activeEffects) return;

        // Update all timed effects - iterate backwards to safely remove expired effects
        for (let i = this.activeEffects.length - 1; i >= 0; i--) {
            const effect = this.activeEffects[i];
            effect.timeLeft -= 16.67; // Roughly 60fps

            // Apply per-frame effects
            if (effect.type === 'poisoned' && effect.data.tickDamage) {
                // Poison damage every 60 frames (1 second)
                if (Date.now() - effect.lastTick >= 1000) {
                    this.takeDamage(effect.data.tickDamage);
                    console.log(`☢️ ${this.char.name} takes ${effect.data.tickDamage} poison damage!`);
                    effect.lastTick = Date.now();
                }
            }

            // Remove expired effects
            if (effect.timeLeft <= 0) {
                console.log(`${this.char.name}'s ${effect.type} effect expired`);
                this.activeEffects.splice(i, 1);
            }
        }
    }

    getEffectDescription(itemData) {
        switch(itemData.type) {
            case 'weapon':
            case 'ranged':
            case 'legendary':
                return `+${itemData.damage} damage for ${(itemData.duration || 10000)/1000}s`;
            case 'explosive':
            case 'ultimate':
            case 'cosmic':
            case 'omega':
                return `EXPLOSIVE +${itemData.damage} damage!`;
            case 'defense':
                return `+${itemData.defense} defense for ${(itemData.duration || 10000)/1000}s`;
            case 'consumable':
                return `Instantly heals ${itemData.heal} HP`;
            case 'buff':
                if (itemData.speedMultiplier) {
                    return `${itemData.speedMultiplier}x speed for ${(itemData.duration || 10000)/1000}s`;
                }
                if (itemData.powerBoost) {
                    return `${itemData.powerBoost}x power for ${(itemData.duration || 10000)/1000}s`;
                }
                if (itemData.allPowers) {
                    return `ALL POWERS activated for ${(itemData.duration || 15000)/1000}s!`;
                }
                return `Power boost for ${(itemData.duration || 10000)/1000}s`;
            case 'instant':
                return `Instantly deals ${itemData.damage} damage to enemy`;
            case 'debuff':
                if (itemData.freezeDuration) {
                    return `Freezes enemy for ${itemData.freezeDuration/1000}s`;
                }
                if (itemData.poisonDamage) {
                    return `Poison: ${itemData.poisonDamage} damage/sec for ${(itemData.poisonDuration || 5000)/1000}s`;
                }
                return `Weakens enemy for ${(itemData.duration || 10000)/1000}s`;
            case 'area':
            case 'wave':
            case 'global':
                return `Area blast: ${itemData.damage} damage (radius: ${itemData.radius || 80})`;
            case 'magic':
            case 'celestial':
                return `Magical +${itemData.damage} damage for ${(itemData.duration || 12000)/1000}s`;
            case 'heavy':
            case 'projectile':
                return `Heavy weapon: +${itemData.damage} damage for ${(itemData.duration || 8000)/1000}s`;
            case 'alpha':
            case 'beta':
            case 'military':
                return `Military grade: +${itemData.damage} damage for ${(itemData.duration || 10000)/1000}s`;
            case 'radiation':
                return `Radiation: +${itemData.damage} damage + poison effect`;
            case 'chaos':
                return 'Random magical effect!';
            case 'time':
                return `Stops time for ${(itemData.freezeAll || 3000)/1000}s`;
            case 'dimensional':
                return `Teleport ability for ${(itemData.duration || 10000)/1000}s`;
            case 'fate':
                return `Small chance for instant victory!`;
            case 'infinite':
                return `INFINITE POWER for ${(itemData.duration || 15000)/1000}s!`;
            default:
                // Fallback: try to describe based on properties
                if (itemData.damage && itemData.radius) {
                    return `Explosive: ${itemData.damage} damage (radius: ${itemData.radius})`;
                } else if (itemData.damage) {
                    return `Weapon: +${itemData.damage} damage`;
                } else if (itemData.heal) {
                    return `Healing: +${itemData.heal} HP`;
                } else if (itemData.defense) {
                    return `Defense: +${itemData.defense} protection`;
                } else {
                    return 'Special combat effect!';
                }
        }
    }

    createHealEffect(amount) {
        // Visual feedback for healing (can be expanded)
        console.log(`💚 HEAL EFFECT: +${amount} HP`);
    }

    createLightningEffect(target) {
        // Visual feedback for lightning (can be expanded)
        console.log(`⚡ LIGHTNING STRIKES ${target.char.name}!`);
    }

    createExplosionEffect(target) {
        if (!gameState.battle) return;

        const targetCenterX = target.x + target.width / 2;
        const targetCenterY = target.y + target.height / 2;

        // Create massive screen shake
        gameState.battle.addScreenShake(25, 800);

        // Create expanding explosion rings
        for (let ring = 0; ring < 5; ring++) {
            setTimeout(() => {
                // Create explosion ring particles
                const particleCount = 30;
                const ringRadius = 30 + (ring * 20);

                if (gameState.battle && gameState.battle.addVisualEffect) {
                    for (let i = 0; i < particleCount; i++) {
                        const angle = (Math.PI * 2 * i) / particleCount;
                        const startX = targetCenterX + Math.cos(angle) * ringRadius;
                        const startY = targetCenterY + Math.sin(angle) * ringRadius;

                        // Explosion particles
                        gameState.battle.addVisualEffect('explosion_particle',
                            startX,
                            startY,
                            {
                                life: 40 - (ring * 5),
                                velocityX: Math.cos(angle) * (4 + ring),
                                velocityY: Math.sin(angle) * (4 + ring),
                                size: 8 - ring,
                                color: ring % 2 === 0 ? '#FF4500' : '#FFA500'
                            }
                        );
                    }

                    // Create fire particles
                    for (let i = 0; i < 15; i++) {
                        gameState.battle.addVisualEffect('fire_particle',
                            targetCenterX + (Math.random() - 0.5) * 60,
                            targetCenterY + (Math.random() - 0.5) * 60,
                            {
                                life: 30,
                                velocityX: (Math.random() - 0.5) * 6,
                                velocityY: (Math.random() - 0.5) * 6 - 2,
                                size: 6 + Math.random() * 4
                            }
                        );
                    }
                }
            }, ring * 50); // Stagger the rings
        }

        // Create central flash
        if (gameState.battle && gameState.battle.addVisualEffect) {
            gameState.battle.addVisualEffect('explosion_flash',
                targetCenterX,
                targetCenterY,
                {
                    life: 20,
                    maxSize: 150
                }
            );
        }

        console.log(`💥 MASSIVE EXPLOSION at ${target.char.name}!`);
    }

    pickupItem(item) {
        // Store the item for later use
        this.heldItem = item;

        // Initialize rotation immediately
        this.itemRotation = 0;

        console.log(`${this.char.name} picks up ${item.name}! Item will now spin around player.`);

        // Show pickup notification WITH DESCRIPTION
        const description = this.getEffectDescription(item.data);
        showNotification(`${this.char.name} picked up:\n${item.emoji} ${item.name}!\n\n📝 DESCRIPTION:\n${description}\n\nPress ${this === gameState.battle.player1 ? 'Q' : 'Enter'} to use!`);
    }
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { Fighter };
}
