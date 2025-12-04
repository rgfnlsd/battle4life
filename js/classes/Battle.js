// Battle4Life - Battle Class
// Auto-extracted from script.js

class Battle {
    constructor(playerChar, enemyChar, mapType) {
        console.log('=== BATTLE CONSTRUCTOR START ===');
        console.log('playerChar:', playerChar);
        console.log('enemyChar:', enemyChar);
        console.log('mapType:', mapType);

        this.canvas = document.getElementById('gameCanvas');
        console.log('Canvas element:', this.canvas);

        if (!this.canvas) {
            throw new Error('Canvas element not found!');
        }

        this.ctx = this.canvas.getContext('2d');
        console.log('Canvas context:', this.ctx);

        // Set canvas to full window size
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;

        // Position players based on screen width with higher ground
        const playerStartX = Math.floor(this.canvas.width * 0.1); // 10% from left
        const enemyStartX = Math.floor(this.canvas.width * 0.8);   // 80% from left
        const groundY = this.canvas.height - 120;                  // Use same level as groundLevel

        // Set ground level higher for better gameplay space (BEFORE creating entities)
        this.groundLevel = this.canvas.height - 120; // Raised from 50 to 120

        this.player1 = new Fighter(playerChar, playerStartX, groundY, 'player');

        // Check if this is boss battle mode
        if (gameState.selectedBattleMode === 'boss_battle') {
            this.isBossBattleMode = true;
            this.boss = new Boss(enemyStartX, groundY);
            // In boss battle, player2 is also a player (cooperative mode)
            this.player2 = new Fighter(enemyChar, playerStartX + 100, groundY, 'player');
            console.log('🐉 Boss Battle Mode initialized!');
        } else {
            this.isBossBattleMode = false;
            this.player2 = new Fighter(enemyChar, enemyStartX, groundY, 'enemy');
        }

        // Handle window resize
        this.handleResize = () => {
            this.canvas.width = window.innerWidth;
            this.canvas.height = window.innerHeight;
            this.groundLevel = this.canvas.height - 120; // Keep consistent with new ground level
            this.scalePlatforms();
        };
        window.addEventListener('resize', this.handleResize);
        this.map = mapType;

        // Debug mode for showing circular hitboxes (for testing)
        this.showHitboxes = false; // Hitboxes off by default
        this.mapData = maps[mapType];

        // Scale platforms for current screen size (AFTER mapData is set)
        this.scalePlatforms();

        // Generate obstacles (AFTER mapData is set)
        this.generateObstacles();
        this.projectiles = [];
        this.gameRunning = true;
        this.keys = {};
        // Boss battles get more time (3 minutes), normal battles get 1.5 minutes
        this.timeLeft = this.isBossBattleMode ? 180000 : 90000;
        this.lastTime = Date.now();
        this.mapEffects = [];
        this.hazards = this.mapData.hazards ? [...this.mapData.hazards] : [];
        
        // SPECIAL DROP MODE SYSTEM!
        this.dropItems = [];
        this.dropTimer = 0;
        this.dropInterval = this.getRandomDropInterval(); // Random 15-30 seconds
        this.isSpecialDropMode = gameState.selectedBattleMode === 'special_drop';

        // FLAG CAPTURE MODE SYSTEM!
        this.isFlagCaptureMode = gameState.selectedBattleMode === 'flag_capture';
        console.log('🏁 Flag capture mode check:', this.isFlagCaptureMode, 'Selected mode:', gameState.selectedBattleMode);
        if (this.isFlagCaptureMode) {
            this.initializeFlagCapture();
        }
        
        // BACKGROUND GRID SYSTEM!
        this.backgroundGrid = this.initializeBackgroundGrid();
        this.selectedGridSquare = null;
        this.showColorPicker = false;

        // SCREEN SHAKE SYSTEM!
        this.screenShake = {
            intensity: 0,
            duration: 0,
            offsetX: 0,
            offsetY: 0
        };

        // VISUAL EFFECTS SYSTEM!
        this.visualEffects = [];
        
        this.setupControls();
        console.log('Starting game loop...');
        this.gameLoop();

        // Run initial hitbox test
        setTimeout(() => {
            this.testAllMaps();
            this.testCircularHitboxes();
        }, 1000); // Wait 1 second for everything to initialize
    }

    scalePlatforms() {
        if (!this.mapData) return;

        // Clear old platforms and create my own scattered platforms
        this.mapData.platforms = [];

        // Calculate scaling factors for current screen size
        const originalWidth = 800;
        const originalHeight = 600;
        const scaleX = this.canvas.width / originalWidth;
        const scaleY = this.canvas.height / originalHeight;

        // Create 6 FIXED platforms at consistent positions (much lower)
        const fixedPlatforms = [
            { x: 100, y: 520, width: 100, height: 20 },
            { x: 250, y: 470, width: 90, height: 18 },
            { x: 400, y: 420, width: 110, height: 22 },
            { x: 580, y: 370, width: 95, height: 20 },
            { x: 150, y: 320, width: 85, height: 18 },
            { x: 500, y: 270, width: 100, height: 20 }
        ];

        fixedPlatforms.forEach((platformData, i) => {
            const platform = {
                x: Math.floor(platformData.x * scaleX),
                y: Math.floor(platformData.y * scaleY),
                width: Math.floor(platformData.width * scaleX),
                height: Math.floor(platformData.height * scaleY),
                type: `fixed_platform_${i}`,
                scaled: true
            };

            // Ensure platform stays on screen
            platform.x = Math.max(0, Math.min(platform.x, this.canvas.width - platform.width));
            platform.y = Math.max(50, Math.min(platform.y, this.canvas.height - platform.height - 50));

            this.mapData.platforms.push(platform);
        });
    }

    generateObstacles() {
        // Completely disable all obstacles to remove gray tiny things
        if (this.mapData.obstacles) {
            this.mapData.obstacles = [];
        }
    }

    getRandomDropInterval() {
        // Random interval between 15-30 seconds (900-1800 frames at 60fps)
        return Math.floor(Math.random() * 900 + 900); // 15-30 seconds in frames
    }

    setupControls() {
        document.addEventListener('keydown', (e) => {
            this.keys[e.code] = true;
            
            // Player 1 controls (check for stun in flag capture mode)
            const player1Stunned = this.isFlagCaptureMode && gameState.flagCapture.stunned.player1;
            if (!player1Stunned) {
                if (e.code === 'KeyS') {
                    this.player1.normalAttack();
                }
                if (e.code === 'KeyE') {
                    this.player1.specialAttack();
                }
                if (e.code === 'KeyQ') {
                    this.player1.useItem();
                }
                if (e.code === 'KeyR') {
                    this.player1.tryTeleport();
                }
            }

            // Player 2 controls (multiplayer or boss battle mode, check for stun in flag capture mode)
            const player2Stunned = this.isFlagCaptureMode && gameState.flagCapture.stunned.player2;
            if ((gameState.gameMode === 'multiplayer' || this.isBossBattleMode) && !player2Stunned) {
                if (e.code === 'ArrowDown') {
                    this.player2.normalAttack();
                }
                if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') {
                    this.player2.specialAttack();
                }
                if (e.code === 'Enter') {
                    this.player2.useItem();
                }
                if (e.code === 'Numpad0') {
                    this.player2.tryTeleport();
                }
            }
            
            // Background grid customization controls
            if (e.code === 'KeyC') {
                this.showColorPicker = !this.showColorPicker;
            }

            // Hitbox visualization toggle (H key)
            if (e.code === 'KeyH') {
                this.showHitboxes = !this.showHitboxes;
                console.log(`🎯 Hitbox visualization: ${this.showHitboxes ? 'ENABLED' : 'DISABLED'}`);
            }

            // Test circular hitboxes (T key)
            if (e.code === 'KeyT') {
                this.testCircularHitboxes();
            }

            // Test all maps (M key)
            if (e.code === 'KeyM') {
                this.testAllMaps();
            }

            if (e.code === 'Escape') {
                this.gameRunning = false;
            }
        });

        document.addEventListener('keyup', (e) => {
            this.keys[e.code] = false;
        });
        
        // Mouse controls for background grid
        this.canvas.addEventListener('click', (e) => {
            if (this.showColorPicker) {
                const rect = this.canvas.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                this.handleGridClick(x, y);
            }
        });
    }

    update() {
        if (!this.gameRunning) return;

        // Update timer
        const currentTime = Date.now();
        this.timeLeft -= currentTime - this.lastTime;
        this.lastTime = currentTime;

        if (this.timeLeft <= 0) {
            this.endGame();
            return;
        }

        // Player 1 movement (check for stun in flag capture mode)
        const player1Stunned = this.isFlagCaptureMode && gameState.flagCapture.stunned.player1;
        if (!player1Stunned) {
            if (this.keys['KeyW']) {
                this.player1.jump();
            }
            if (this.keys['KeyA']) {
                this.player1.x -= this.player1.getMovementSpeed();
                this.player1.direction = -1;
            }
            if (this.keys['KeyD']) {
                this.player1.x += this.player1.getMovementSpeed();
                this.player1.direction = 1;
            }
        }

        // Player 2 movement (check for stun in flag capture mode)
        const player2Stunned = this.isFlagCaptureMode && gameState.flagCapture.stunned.player2;
        if (gameState.gameMode === 'multiplayer' || this.isBossBattleMode) {
            // In boss battle mode, player 2 is also controlled by human
            if (!player2Stunned) {
                if (this.keys['ArrowUp']) {
                    this.player2.jump();
                }
                if (this.keys['ArrowLeft']) {
                    this.player2.x -= this.player2.getMovementSpeed();
                    this.player2.direction = -1;
                }
                if (this.keys['ArrowRight']) {
                    this.player2.x += this.player2.getMovementSpeed();
                    this.player2.direction = 1;
                }
            }
        } else {
            // SMART AI with dodging and close-range tactics (also check for stun)
            if (!player2Stunned) {
                this.updateAI();
            }
        }

        // Update fighters
        this.player1.update();
        this.player2.update();

        // Update boss if in boss battle mode
        if (this.isBossBattleMode && this.boss) {
            this.boss.update();
        }

        // Update projectiles
        this.projectiles.forEach((projectile, index) => {
            projectile.update();
            
            // Check collision with players
            if (projectile.owner !== this.player1 && this.checkCollision(projectile, this.player1)) {
                this.player1.takeDamage(projectile.damage, projectile.owner);
                // Apply lifesteal to the attacker (projectile owner)
                if (projectile.owner && projectile.owner.applyLifesteal) {
                    projectile.owner.applyLifesteal(projectile.damage);
                }
                // Call onHit for special head projectiles
                if (projectile.onHit) {
                    projectile.onHit();
                }
                this.projectiles.splice(index, 1);
                return;
            }
            if (projectile.owner !== this.player2 && this.checkCollision(projectile, this.player2)) {
                this.player2.takeDamage(projectile.damage, projectile.owner);
                // Apply lifesteal to the attacker (projectile owner)
                if (projectile.owner && projectile.owner.applyLifesteal) {
                    projectile.owner.applyLifesteal(projectile.damage);
                }
                // Call onHit for special head projectiles
                if (projectile.onHit) {
                    projectile.onHit();
                }
                this.projectiles.splice(index, 1);
                return;
            }

            // Check collision with boss (if in boss battle mode)
            if (this.isBossBattleMode && this.boss && projectile.owner !== this.boss && this.checkCollision(projectile, this.boss)) {
                this.boss.takeDamage(projectile.damage, projectile.owner);
                // Apply lifesteal to the attacker (projectile owner)
                if (projectile.owner && projectile.owner.applyLifesteal) {
                    projectile.owner.applyLifesteal(projectile.damage);
                }
                // Call onHit for special head projectiles
                if (projectile.onHit) {
                    projectile.onHit();
                }
                this.projectiles.splice(index, 1);
                return;
            }

            // Remove off-screen projectiles and restore heads
            if (projectile.x < -50 || projectile.x > this.canvas.width + 50) {
                // For head projectiles, restore the head when going off-screen
                if (projectile.onHit) {
                    projectile.onHit();
                }
                this.projectiles.splice(index, 1);
            }
            
            // Check if projectile should be removed (for HeadProjectile's shouldBeRemoved flag)
            if (projectile.shouldBeRemoved) {
                this.projectiles.splice(index, 1);
            }
        });

        // Update map hazards (like volcano geysers)
        this.updateMapHazards();
        
        // Update map effects
        this.updateMapEffects();

        // SPECIAL DROP MODE - Update item dropping system!
        if (this.isSpecialDropMode) {
            this.updateSpecialDrops();
        }

        // FLAG CAPTURE MODE - Update flag capture system!
        if (this.isFlagCaptureMode) {
            this.updateFlagCapture();
            // Debug: Check if game loop is running
            if (Math.random() < 0.01) { // Log occasionally
                console.log('🏁 Flag capture update running, flag exists:', !!gameState.flagCapture.flag);
            }
        }

        // Update UI
        this.updateUI();

        // Check win condition
        if (this.isBossBattleMode) {
            // In boss battle mode, only end if BOTH players are dead
            if (this.player1.health <= 0 && this.player2.health <= 0) {
                this.endGame();
            }
        } else {
            // In normal modes, end if ANY player dies
            if (this.player1.health <= 0 || this.player2.health <= 0) {
                this.endGame();
            }
        }
    }

    updateMapHazards() {
        if (this.map === 'volcano') {
            this.hazards.forEach(hazard => {
                if (hazard.type === 'lava_geyser') {
                    hazard.timer++;
                    if (hazard.timer >= hazard.interval) {
                        // Trigger lava geyser
                        this.createLavaGeyser(hazard.x, hazard.y);
                        hazard.timer = 0;
                        
                        // Check if players are in geyser area
                        const geyserRange = 50;
                        if (Math.abs(this.player1.x - hazard.x) < geyserRange) {
                            this.player1.takeDamage(25);
                        }
                        if (Math.abs(this.player2.x - hazard.x) < geyserRange) {
                            this.player2.takeDamage(25);
                        }
                    }
                }
            });
        }
    }

    createLavaGeyser(x, y) {
        // Create visual effect for lava geyser
        this.mapEffects.push({
            type: 'lava_geyser',
            x: x,
            y: y,
            life: 60,
            height: 0,
            maxHeight: 200
        });
    }

    updateMapEffects() {
        // Update screen shake
        this.updateScreenShake();

        // Update visual effects
        this.updateVisualEffects();

        // Disabled all map effects to prevent flashing gray things
        return;

        // Update existing effects
        this.mapEffects.forEach((effect, index) => {
            effect.life--;
            
            switch(effect.type) {
                case 'lava_geyser':
                    if (effect.life > 45) {
                        effect.height = Math.min(effect.height + 10, effect.maxHeight);
                    } else {
                        effect.height = Math.max(effect.height - 5, 0);
                    }
                    break;
                case 'lava_bubble':
                    effect.y -= 2;
                    effect.size *= 1.02;
                    break;
                case 'snowflake':
                    effect.y += effect.speed;
                    effect.x += Math.sin(Date.now() * 0.005 + index) * 0.5;
                    break;
                case 'bubble':
                    effect.y -= effect.speed;
                    effect.x += Math.sin(Date.now() * 0.003 + index) * 0.3;
                    break;
                case 'star':
                    effect.twinkle = (effect.twinkle + 1) % 120;
                    break;
                case 'code_rain':
                    effect.y += effect.speed;
                    break;
            }
            
            if (effect.life <= 0 || effect.y > this.canvas.height + 50 || effect.y < -50) {
                this.mapEffects.splice(index, 1);
            }
        });
    }

    // SCREEN SHAKE SYSTEM
    addScreenShake(intensity, duration) {
        this.screenShake.intensity = Math.max(this.screenShake.intensity, intensity);
        this.screenShake.duration = Math.max(this.screenShake.duration, duration);
    }

    updateScreenShake() {
        // Boss shake mode - intense continuous shaking
        if (this.isBossBattleMode && this.boss && this.boss.shakeMode) {
            const bossShakeIntensity = 15; // Very intense shaking
            this.screenShake.offsetX = (Math.random() - 0.5) * bossShakeIntensity;
            this.screenShake.offsetY = (Math.random() - 0.5) * bossShakeIntensity;
            return; // Skip normal shake logic
        }

        if (this.screenShake.duration > 0) {
            // Generate random shake offset
            const shakeAmount = this.screenShake.intensity * (this.screenShake.duration / 60);
            this.screenShake.offsetX = (Math.random() - 0.5) * shakeAmount;
            this.screenShake.offsetY = (Math.random() - 0.5) * shakeAmount;

            // Reduce shake over time
            this.screenShake.duration--;
            if (this.screenShake.duration <= 0) {
                this.screenShake.intensity = 0;
                this.screenShake.offsetX = 0;
                this.screenShake.offsetY = 0;
            }
        } else {
            this.screenShake.offsetX = 0;
            this.screenShake.offsetY = 0;
        }
    }

    // VISUAL EFFECTS SYSTEM
    addVisualEffect(type, x, y, options = {}) {
        const effect = {
            type: type,
            x: x,
            y: y,
            life: options.life || 30,
            maxLife: options.life || 30,
            ...options
        };
        this.visualEffects.push(effect);
    }

    updateVisualEffects() {
        for (let i = this.visualEffects.length - 1; i >= 0; i--) {
            const effect = this.visualEffects[i];
            effect.life--;

            // Update effect based on type
            switch(effect.type) {
                case 'hit_spark':
                    effect.x += effect.velocityX || 0;
                    effect.y += effect.velocityY || 0;
                    break;
                case 'dust_cloud':
                    effect.y -= 0.5; // Rise slower
                    effect.x += (effect.velocityX || 0); // Horizontal drift
                    effect.size = (effect.size || 3) * 0.96; // Shrink faster
                    break;
                case 'damage_number':
                    effect.y -= 2;
                    effect.x += (Math.random() - 0.5) * 0.5;
                    break;
                case 'explosion_particle':
                    // Move particles outward
                    effect.x += effect.velocityX || 0;
                    effect.y += effect.velocityY || 0;
                    // Slow down over time
                    effect.velocityX *= 0.95;
                    effect.velocityY *= 0.95;
                    // Shrink
                    effect.size = (effect.size || 6) * 0.96;
                    break;
                case 'fire_particle':
                    // Fire rises and spreads
                    effect.x += effect.velocityX || 0;
                    effect.y += effect.velocityY || 0;
                    effect.velocityY -= 0.1; // Rise up
                    effect.velocityX *= 0.98;
                    effect.size = (effect.size || 5) * 0.95;
                    break;
                case 'explosion_flash':
                    // Flash just fades, no movement
                    break;
            }

            // Remove expired effects
            if (effect.life <= 0) {
                this.visualEffects.splice(i, 1);
            }
        }
    }

    checkCollision(a, b) {
        // Use circular collision detection for more precise hitboxes
        // Calculate center points and radii for both objects
        const aCenterX = a.x + a.width / 2;
        const aCenterY = a.y + a.height / 2;
        const aRadius = Math.min(a.width, a.height) / 3; // Smaller hitboxes (1/3 instead of 1/2)

        const bCenterX = b.x + b.width / 2;
        const bCenterY = b.y + b.height / 2;
        const bRadius = Math.min(b.width, b.height) / 3; // Smaller hitboxes (1/3 instead of 1/2)

        // Calculate distance between centers
        const dx = aCenterX - bCenterX;
        const dy = aCenterY - bCenterY;
        const distance = Math.sqrt(dx * dx + dy * dy);

        // Collision occurs if distance is less than sum of radii
        return distance < (aRadius + bRadius);
    }

    drawHitbox(obj, color = 'rgba(255, 0, 0, 0.3)') {
        // Draw circular hitbox for debugging
        const centerX = obj.x + obj.width / 2;
        const centerY = obj.y + obj.height / 2;
        const radius = Math.min(obj.width, obj.height) / 3; // Smaller hitboxes (1/3 instead of 1/2)

        this.ctx.save();
        this.ctx.strokeStyle = color;
        this.ctx.fillStyle = color;
        this.ctx.lineWidth = 2;
        this.ctx.beginPath();
        this.ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
        this.ctx.stroke();
        this.ctx.fill();
        this.ctx.restore();
    }

    testCircularHitboxes() {
        // Comprehensive test function for circular hitboxes
        console.log('🎯 Testing Circular Hitboxes System');
        console.log('=====================================');

        // Test 1: Character vs Character collision
        const originalP1X = this.player1.x;
        const originalP1Y = this.player1.y;
        const originalP2X = this.player2.x;
        const originalP2Y = this.player2.y;

        // Move players close together
        this.player1.x = 400;
        this.player1.y = 300;
        this.player2.x = 450;
        this.player2.y = 300;

        const charCollision = this.checkCollision(this.player1, this.player2);
        console.log(`✅ Character collision test: ${charCollision ? 'COLLISION DETECTED' : 'NO COLLISION'}`);

        // Test 2: Projectile collision simulation
        const testProjectile = {
            x: this.player1.x + 10,
            y: this.player1.y + 10,
            width: 15,
            height: 15
        };

        const projCollision = this.checkCollision(testProjectile, this.player2);
        console.log(`✅ Projectile collision test: ${projCollision ? 'COLLISION DETECTED' : 'NO COLLISION'}`);

        // Test 3: Drop item collision simulation
        if (this.isSpecialDropMode && this.dropItems.length > 0) {
            const itemCollision = this.checkCollision(this.dropItems[0], this.player1);
            console.log(`✅ Drop item collision test: ${itemCollision ? 'COLLISION DETECTED' : 'NO COLLISION'}`);
        } else {
            console.log(`✅ Drop item collision test: NO ITEMS TO TEST`);
        }

        // Restore original positions
        this.player1.x = originalP1X;
        this.player1.y = originalP1Y;
        this.player2.x = originalP2X;
        this.player2.y = originalP2Y;

        console.log('=====================================');
        console.log(`🗺️ Current map: ${this.mapData.name}`);
        console.log(`🎮 Hitbox visualization: ${this.showHitboxes ? 'ENABLED' : 'DISABLED'}`);
        console.log('=====================================');
    }

    testAllMaps() {
        // Test circular hitboxes on all available maps
        console.log('🌍 TESTING ALL MAPS FOR CIRCULAR HITBOXES');
        console.log('==========================================');

        const allMaps = Object.keys(maps);
        console.log(`📋 Found ${allMaps.length} maps to test:`);
        allMaps.forEach((mapName, index) => {
            console.log(`${index + 1}. ${maps[mapName].name} (${mapName})`);
        });

        console.log('\n🎯 Circular hitbox system is active on ALL maps!');
        console.log('✅ All maps use the same collision detection system');
        console.log('✅ Character vs Character collisions: CIRCULAR (SMALLER)');
        console.log('✅ Projectile vs Character collisions: CIRCULAR (SMALLER)');
        console.log('✅ Drop Item vs Character collisions: CIRCULAR (SMALLER)');
        console.log('✅ Hitbox size: 1/3 of character size (more precise)');

        console.log('\n🎮 Controls for testing:');
        console.log('• Press H to toggle hitbox visualization');
        console.log('• Press T to run collision tests');
        console.log('• Hitboxes are shown as colored circles when enabled');
        console.log('  - Green: Player 1');
        console.log('  - Red: Player 2 / CPU');
        console.log('  - Yellow: Projectiles');
        console.log('  - Cyan: Drop Items');

        console.log('\n==========================================');
    }

    render() {
        // Apply screen shake by translating the canvas
        this.ctx.save();
        this.ctx.translate(this.screenShake.offsetX, this.screenShake.offsetY);

        // Clear canvas with map background
        this.ctx.fillStyle = this.mapData ? this.mapData.bg : '#87CEEB';
        this.ctx.fillRect(-this.screenShake.offsetX, -this.screenShake.offsetY, this.canvas.width, this.canvas.height);

        // Draw map background features
        this.drawMapBackground();

        // Draw my custom scattered platforms
        this.ctx.fillStyle = '#8B4513'; // Brown color for platforms
        if (this.mapData && this.mapData.platforms) {
            this.mapData.platforms.forEach(platform => {
                this.ctx.fillRect(platform.x, platform.y, platform.width, platform.height);

                // Platform border
                this.ctx.strokeStyle = '#654321';
                this.ctx.lineWidth = 2;
                this.ctx.strokeRect(platform.x, platform.y, platform.width, platform.height);
            });
        }

        // Draw 20 scattered obstacles (no labels)
        if (this.mapData.obstacles) {
            this.mapData.obstacles.forEach(obstacle => {
                // Different colors for jumpable vs scattered obstacles
                if (obstacle.jumpable) {
                    this.ctx.fillStyle = '#8B4513'; // Brown for jumpable obstacles
                } else {
                    this.ctx.fillStyle = '#666666'; // Gray for scattered obstacles
                }

                // Draw obstacle
                this.ctx.fillRect(obstacle.x, obstacle.y, obstacle.width, obstacle.height);

                // Subtle border
                this.ctx.strokeStyle = '#000000';
                this.ctx.lineWidth = 1;
                this.ctx.strokeRect(obstacle.x, obstacle.y, obstacle.width, obstacle.height);
            });
        }

        // Map effects disabled to prevent flashing
        // this.drawMapEffects();

        // FIXED: Draw special drop items (like Super Smash Bros!)
        if (this.isSpecialDropMode) {
            this.drawDropItems();
        }

        // Draw special volcano feature
        if (this.map === 'volcano') {
            this.drawVolcano();
        }

        // Draw timer with scaled font size
        const screenScale = Math.min(this.canvas.width / 800, this.canvas.height / 600);
        const timerFontSize = Math.floor(24 * screenScale * 1.5); // 1.5x bigger
        const minTimerFontSize = 30; // Minimum font size for visibility
        const finalTimerFontSize = Math.max(minTimerFontSize, timerFontSize);

        this.ctx.fillStyle = '#FFD700';
        this.ctx.font = `bold ${finalTimerFontSize}px Arial`;
        const timeSeconds = Math.max(0, Math.ceil(this.timeLeft / 1000));

        if (this.isBossBattleMode) {
            // Boss battle: timer in bottom right
            this.ctx.textAlign = 'right';
            this.ctx.fillText(`Time: ${timeSeconds}s`, this.canvas.width - 20, this.canvas.height - 20);
        } else {
            // Normal battles: timer at top center
            this.ctx.textAlign = 'center';
            this.ctx.fillText(`Time: ${timeSeconds}s`, this.canvas.width / 2, finalTimerFontSize + 20);
        }

        // Draw hitbox status indicator
        this.ctx.fillStyle = this.showHitboxes ? '#00FF00' : '#FF0000';
        this.ctx.font = 'bold 16px Arial';
        this.ctx.textAlign = 'right';
        this.ctx.fillText(`Hitboxes: ${this.showHitboxes ? 'ON' : 'OFF'}`, this.canvas.width - 10, 25);
        this.ctx.fillStyle = '#FFFFFF';
        this.ctx.font = 'bold 12px Arial';
        this.ctx.fillText('Press H to toggle', this.canvas.width - 10, 45);

        this.ctx.textAlign = 'left';

        // Draw fighters
        this.player1.draw(this.ctx);
        this.player2.draw(this.ctx);

        // Draw boss (if in boss battle mode)
        if (this.isBossBattleMode && this.boss) {
            this.boss.draw(this.ctx);

            // Draw boss health bar at top of screen
            const barWidth = this.canvas.width * 0.6;
            const barHeight = 30;
            const barX = (this.canvas.width - barWidth) / 2;
            const barY = 20;

            // Background
            this.ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
            this.ctx.fillRect(barX - 5, barY - 5, barWidth + 10, barHeight + 10);

            // Health bar background
            this.ctx.fillStyle = '#333';
            this.ctx.fillRect(barX, barY, barWidth, barHeight);

            // Health bar fill - darker, less bright colors
            const healthPercent = this.boss.health / this.boss.maxHealth;
            const healthColor = healthPercent > 0.6 ? '#8B0000' : healthPercent > 0.3 ? '#B8860B' : '#8B0000'; // Dark red, dark gold, dark red
            this.ctx.fillStyle = healthColor;
            this.ctx.fillRect(barX, barY, barWidth * healthPercent, barHeight);

            // Boss name and phase
            this.ctx.fillStyle = '#FFFFFF';
            this.ctx.font = 'bold 16px Arial';
            this.ctx.textAlign = 'center';
            const phaseText = this.boss.rageMode ? 'RAGE' : `Phase ${this.boss.phase}`;
            this.ctx.fillText(`${this.boss.name} - ${phaseText}`, this.canvas.width / 2, barY + 18);

            // Health numbers
            this.ctx.font = 'bold 12px Arial';
            this.ctx.fillText(`${Math.max(0, Math.floor(this.boss.health))} / ${this.boss.maxHealth}`, this.canvas.width / 2, barY + 45);
        }

        // Draw circular hitboxes for testing (debug mode)
        if (this.showHitboxes) {
            this.drawHitbox(this.player1, 'rgba(0, 255, 0, 0.3)'); // Green for player 1
            this.drawHitbox(this.player2, 'rgba(0, 255, 0, 0.3)'); // Green for player 2 (both are players in boss mode)
            if (this.isBossBattleMode && this.boss) {
                this.drawHitbox(this.boss, 'rgba(255, 0, 0, 0.3)'); // Red for boss
            }
        }

        // Draw projectiles
        this.projectiles.forEach(projectile => {
            projectile.draw(this.ctx);
            // Draw projectile hitboxes too
            if (this.showHitboxes) {
                this.drawHitbox(projectile, 'rgba(255, 255, 0, 0.3)'); // Yellow for projectiles
            }
        });

        // Draw flag (flag capture mode)
        if (this.isFlagCaptureMode) {
            this.drawFlag();
        }

        // Draw visual effects
        this.drawVisualEffects();

        // Restore canvas context (remove screen shake)
        this.ctx.restore();
    }

    drawVisualEffects() {
        this.visualEffects.forEach(effect => {
            const alpha = effect.life / effect.maxLife;

            switch(effect.type) {
                case 'hit_spark':
                    this.ctx.fillStyle = `rgba(255, 255, 0, ${alpha})`;
                    this.ctx.fillRect(effect.x - 2, effect.y - 2, 4, 4);
                    this.ctx.fillStyle = `rgba(255, 200, 0, ${alpha})`;
                    this.ctx.fillRect(effect.x - 1, effect.y - 1, 2, 2);
                    break;

                case 'dust_cloud':
                    this.ctx.fillStyle = `rgba(139, 69, 19, ${alpha * 0.4})`;
                    this.ctx.beginPath();
                    this.ctx.arc(effect.x, effect.y, effect.size || 5, 0, Math.PI * 2);
                    this.ctx.fill();
                    break;

                case 'damage_number':
                    this.ctx.fillStyle = `rgba(255, 0, 0, ${alpha})`;
                    this.ctx.font = 'bold 16px Arial';
                    this.ctx.textAlign = 'center';
                    this.ctx.fillText(effect.damage, effect.x, effect.y);
                    break;

                case 'explosion_particle':
                    // Explosion particles with color
                    const color = effect.color || '#FF4500';
                    this.ctx.fillStyle = color.replace(')', `, ${alpha})`).replace('rgb', 'rgba');
                    this.ctx.shadowColor = color;
                    this.ctx.shadowBlur = 10;
                    this.ctx.beginPath();
                    this.ctx.arc(effect.x, effect.y, effect.size || 6, 0, Math.PI * 2);
                    this.ctx.fill();
                    this.ctx.shadowBlur = 0;
                    break;

                case 'fire_particle':
                    // Fire particles (orange/yellow)
                    const fireAlpha = alpha * 0.8;
                    this.ctx.fillStyle = `rgba(255, ${100 + Math.random() * 100}, 0, ${fireAlpha})`;
                    this.ctx.shadowColor = '#FF4500';
                    this.ctx.shadowBlur = 8;
                    this.ctx.beginPath();
                    this.ctx.arc(effect.x, effect.y, effect.size || 5, 0, Math.PI * 2);
                    this.ctx.fill();
                    this.ctx.shadowBlur = 0;
                    break;

                case 'explosion_flash':
                    // Central explosion flash
                    const flashSize = (1 - alpha) * (effect.maxSize || 100);
                    const flashAlpha = alpha * 0.6;

                    // Outer ring
                    this.ctx.fillStyle = `rgba(255, 100, 0, ${flashAlpha * 0.3})`;
                    this.ctx.beginPath();
                    this.ctx.arc(effect.x, effect.y, flashSize, 0, Math.PI * 2);
                    this.ctx.fill();

                    // Middle ring
                    this.ctx.fillStyle = `rgba(255, 150, 0, ${flashAlpha * 0.5})`;
                    this.ctx.beginPath();
                    this.ctx.arc(effect.x, effect.y, flashSize * 0.7, 0, Math.PI * 2);
                    this.ctx.fill();

                    // Inner core
                    this.ctx.fillStyle = `rgba(255, 255, 255, ${flashAlpha})`;
                    this.ctx.shadowColor = '#FFFFFF';
                    this.ctx.shadowBlur = 20;
                    this.ctx.beginPath();
                    this.ctx.arc(effect.x, effect.y, flashSize * 0.4, 0, Math.PI * 2);
                    this.ctx.fill();
                    this.ctx.shadowBlur = 0;
                    break;
            }
        });
    }

    drawFlag() {
        try {
            // Draw flag if it exists in the world
            if (gameState.flagCapture.flag) {
                // Flag rendering (debug logging removed)
                gameState.flagCapture.flag.render(this.ctx);
            }
        } catch (error) {
            console.error('🏁 Error in drawFlag:', error);
            // Reset flag if there's a rendering error
            gameState.flagCapture.flag = null;
        }

        // Draw flag holder timer
        if (gameState.flagCapture.flagHolder) {
            const holder = gameState.flagCapture.flagHolder === 'player1' ? this.player1 : this.player2;

            // Draw hold timer
            const currentTime = Date.now();
            const holdTime = currentTime - gameState.flagCapture.holdStartTime;
            const remainingTime = Math.max(0, gameState.flagCapture.holdDuration - holdTime);
            const seconds = Math.ceil(remainingTime / 1000);

            // Progress bar background
            const barWidth = 100;
            const barHeight = 8;
            const barX = holder.x + holder.width/2 - barWidth/2;
            const barY = holder.y - 50;

            this.ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
            this.ctx.fillRect(barX, barY, barWidth, barHeight);

            // Progress bar fill
            const progress = holdTime / gameState.flagCapture.holdDuration;
            const fillWidth = barWidth * progress;
            this.ctx.fillStyle = progress > 0.8 ? '#00FF00' : progress > 0.5 ? '#FFFF00' : '#FF6600';
            this.ctx.fillRect(barX, barY, fillWidth, barHeight);

            // Timer text
            this.ctx.fillStyle = '#FFFFFF';
            this.ctx.font = 'bold 14px Arial';
            this.ctx.strokeStyle = '#000000';
            this.ctx.lineWidth = 2;
            this.ctx.strokeText(`${seconds}s`, holder.x + holder.width/2, barY - 5);
            this.ctx.fillText(`${seconds}s`, holder.x + holder.width/2, barY - 5);
        }

        // Draw stun indicators
        if (gameState.flagCapture.stunned.player1) {
            this.ctx.font = '25px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('💫', this.player1.x + this.player1.width/2, this.player1.y - 10);
        }
        if (gameState.flagCapture.stunned.player2) {
            this.ctx.font = '25px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('💫', this.player2.x + this.player2.width/2, this.player2.y - 10);
        }
    }

    drawMapBackground() {
        // Enhanced visual backgrounds for each map
        switch(this.map) {
            case 'city':
                this.drawCityBackground();
                break;
            case 'forest':
                this.drawForestBackground();
                break;
            case 'space':
                this.drawSpaceBackground();
                break;
            case 'castle':
                this.drawCastleBackground();
                break;
            case 'volcano':
                this.drawVolcanoBackground();
                break;
            case 'underwater':
                this.drawUnderwaterBackground();
                break;
            case 'ice':
                this.drawIceBackground();
                break;
            case 'desert':
                this.drawDesertBackground();
                break;
            default:
                // Gradient background for other maps
                this.drawGradientBackground();
                break;
        }
    }

    drawVolcano() {
        // Draw the volcano mountain with lava
        this.ctx.fillStyle = '#654321';
        this.ctx.beginPath();
        this.ctx.moveTo(400, 100);
        this.ctx.lineTo(300, 300);
        this.ctx.lineTo(500, 300);
        this.ctx.closePath();
        this.ctx.fill();
        
        // Lava crater
        this.ctx.fillStyle = '#ff4500';
        this.ctx.fillRect(380, 100, 40, 20);
        
        // Volcanic glow
        this.ctx.fillStyle = '#ff6600';
        this.ctx.shadowColor = '#ff4500';
        this.ctx.shadowBlur = 20;
        this.ctx.fillRect(385, 105, 30, 10);
        this.ctx.shadowBlur = 0;
    }

    drawBuildings() {
        const buildings = [
            {x: 50, y: 400, w: 80, h: 200},
            {x: 150, y: 350, w: 100, h: 250},
            {x: 270, y: 380, w: 90, h: 220},
            {x: 380, y: 320, w: 110, h: 280},
            {x: 510, y: 360, w: 85, h: 240},
            {x: 620, y: 340, w: 95, h: 260}
        ];

        buildings.forEach(building => {
            // Building body - INVISIBLE (transparent)
            this.ctx.fillStyle = 'rgba(0,0,0,0)'; // Completely transparent
            this.ctx.fillRect(building.x, building.y, building.w, building.h);

            // Windows - INVISIBLE (transparent)
            this.ctx.fillStyle = 'rgba(0,0,0,0)'; // Completely transparent
            for (let row = 0; row < Math.floor(building.h / 40); row++) {
                for (let col = 0; col < Math.floor(building.w / 25); col++) {
                    if (Math.random() > 0.3) {
                        this.ctx.fillRect(
                            building.x + 5 + col * 25,
                            building.y + 10 + row * 40,
                            15, 20
                        );
                    }
                }
            }
        });
    }

    drawCityBackground() {
        // City skyline with gradient sky
        const gradient = this.ctx.createLinearGradient(0, 0, 0, this.canvas.height);
        gradient.addColorStop(0, '#87CEEB');
        gradient.addColorStop(1, '#4682B4');
        this.ctx.fillStyle = gradient;
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        // Distant buildings silhouette
        this.ctx.fillStyle = '#2F4F4F';
        for (let i = 0; i < 15; i++) {
            const x = (i * this.canvas.width / 15);
            const height = Math.random() * 200 + 100;
            this.ctx.fillRect(x, this.canvas.height - height, this.canvas.width / 15, height);
        }
    }

    drawForestBackground() {
        // Forest with gradient sky
        const gradient = this.ctx.createLinearGradient(0, 0, 0, this.canvas.height);
        gradient.addColorStop(0, '#98FB98');
        gradient.addColorStop(1, '#228B22');
        this.ctx.fillStyle = gradient;
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        // Distant tree silhouettes
        this.ctx.fillStyle = '#006400';
        for (let i = 0; i < 20; i++) {
            const x = Math.random() * this.canvas.width;
            const y = this.canvas.height - Math.random() * 150 - 50;
            this.ctx.beginPath();
            this.ctx.arc(x, y, Math.random() * 30 + 20, 0, Math.PI * 2);
            this.ctx.fill();
        }
    }

    drawSpaceBackground() {
        // Space with stars and nebula
        const gradient = this.ctx.createRadialGradient(
            this.canvas.width/2, this.canvas.height/2, 0,
            this.canvas.width/2, this.canvas.height/2, this.canvas.width
        );
        gradient.addColorStop(0, '#191970');
        gradient.addColorStop(1, '#000000');
        this.ctx.fillStyle = gradient;
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        // Stars
        this.ctx.fillStyle = '#ffffff';
        for (let i = 0; i < 200; i++) {
            const x = (i * 73) % this.canvas.width;
            const y = (i * 59) % this.canvas.height;
            const size = Math.random() * 3 + 1;
            this.ctx.fillRect(x, y, size, size);
        }
    }

    drawCastleBackground() {
        // Medieval castle with stone texture
        const gradient = this.ctx.createLinearGradient(0, 0, 0, this.canvas.height);
        gradient.addColorStop(0, '#D2B48C');
        gradient.addColorStop(1, '#8B7355');
        this.ctx.fillStyle = gradient;
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        // Castle wall texture
        this.ctx.fillStyle = '#696969';
        for (let i = 0; i < 50; i++) {
            const x = Math.random() * this.canvas.width;
            const y = Math.random() * this.canvas.height;
            this.ctx.fillRect(x, y, Math.random() * 20 + 5, Math.random() * 20 + 5);
        }
    }

    drawVolcanoBackground() {
        // Volcanic with lava glow
        const gradient = this.ctx.createLinearGradient(0, 0, 0, this.canvas.height);
        gradient.addColorStop(0, '#FF4500');
        gradient.addColorStop(0.5, '#8B0000');
        gradient.addColorStop(1, '#2F1B14');
        this.ctx.fillStyle = gradient;
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        // Lava particles
        this.ctx.fillStyle = '#FF6347';
        for (let i = 0; i < 30; i++) {
            const x = Math.random() * this.canvas.width;
            const y = Math.random() * this.canvas.height;
            this.ctx.beginPath();
            this.ctx.arc(x, y, Math.random() * 5 + 2, 0, Math.PI * 2);
            this.ctx.fill();
        }
    }

    drawUnderwaterBackground() {
        // Underwater with bubbles
        const gradient = this.ctx.createLinearGradient(0, 0, 0, this.canvas.height);
        gradient.addColorStop(0, '#00CED1');
        gradient.addColorStop(1, '#008B8B');
        this.ctx.fillStyle = gradient;
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        // Bubbles
        this.ctx.fillStyle = 'rgba(255,255,255,0.3)';
        for (let i = 0; i < 40; i++) {
            const x = Math.random() * this.canvas.width;
            const y = Math.random() * this.canvas.height;
            this.ctx.beginPath();
            this.ctx.arc(x, y, Math.random() * 10 + 3, 0, Math.PI * 2);
            this.ctx.fill();
        }
    }

    drawIceBackground() {
        // Icy with snowflakes
        const gradient = this.ctx.createLinearGradient(0, 0, 0, this.canvas.height);
        gradient.addColorStop(0, '#E0FFFF');
        gradient.addColorStop(1, '#B0E0E6');
        this.ctx.fillStyle = gradient;
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        // Snowflakes
        this.ctx.fillStyle = '#FFFFFF';
        for (let i = 0; i < 60; i++) {
            const x = Math.random() * this.canvas.width;
            const y = Math.random() * this.canvas.height;
            this.ctx.fillRect(x, y, 3, 3);
        }
    }

    drawDesertBackground() {
        // Desert with sand dunes
        const gradient = this.ctx.createLinearGradient(0, 0, 0, this.canvas.height);
        gradient.addColorStop(0, '#FFE4B5');
        gradient.addColorStop(1, '#DEB887');
        this.ctx.fillStyle = gradient;
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        // Sand dunes
        this.ctx.fillStyle = '#F4A460';
        for (let i = 0; i < 8; i++) {
            const x = i * this.canvas.width / 8;
            const height = Math.random() * 100 + 50;
            this.ctx.beginPath();
            this.ctx.ellipse(x, this.canvas.height - height/2, this.canvas.width/8, height/2, 0, 0, Math.PI * 2);
            this.ctx.fill();
        }
    }

    drawGradientBackground() {
        // Generic gradient background
        const gradient = this.ctx.createLinearGradient(0, 0, 0, this.canvas.height);
        gradient.addColorStop(0, '#87CEEB');
        gradient.addColorStop(1, '#4682B4');
        this.ctx.fillStyle = gradient;
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }

    drawMapEffects() {
        this.mapEffects.forEach(effect => {
            switch(effect.type) {
                case 'lava_geyser':
                    // Draw lava geyser
                    this.ctx.fillStyle = '#ff4500';
                    this.ctx.fillRect(effect.x - 10, effect.y - effect.height, 20, effect.height);
                    
                    // Glow effect
                    this.ctx.shadowColor = '#ff4500';
                    this.ctx.shadowBlur = 15;
                    this.ctx.fillRect(effect.x - 5, effect.y - effect.height, 10, effect.height);
                    this.ctx.shadowBlur = 0;
                    break;
                    
                case 'lava_bubble':
                    this.ctx.fillStyle = `rgba(255, 69, 0, ${effect.life / 60})`;
                    this.ctx.beginPath();
                    this.ctx.arc(effect.x, effect.y, effect.size, 0, Math.PI * 2);
                    this.ctx.fill();
                    break;
                    
                case 'snowflake':
                    this.ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
                    this.ctx.font = '12px Arial';
                    this.ctx.fillText('❄', effect.x, effect.y);
                    break;
                    
                case 'bubble':
                    this.ctx.strokeStyle = `rgba(173, 216, 230, ${effect.life / 100})`;
                    this.ctx.lineWidth = 2;
                    this.ctx.beginPath();
                    this.ctx.arc(effect.x, effect.y, effect.size, 0, Math.PI * 2);
                    this.ctx.stroke();
                    break;
                    
                case 'star':
                    const alpha = 0.5 + Math.sin(effect.twinkle * 0.1) * 0.5;
                    this.ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
                    this.ctx.fillRect(effect.x, effect.y, 3, 3);
                    break;
                    
                case 'code_rain':
                    this.ctx.fillStyle = `rgba(0, 255, 0, ${effect.life / 150})`;
                    this.ctx.font = '12px monospace';
                    this.ctx.fillText(effect.char, effect.x, effect.y);
                    break;
            }
        });
    }

    drawDropItems() {
        // Draw all special drop items with enhanced visual effects!
        this.dropItems.forEach(item => {
            const ctx = this.ctx;
            
            // Calculate item position with bobbing animation when on ground
            let renderY = item.y;
            if (item.onGround && item.bobOffset !== undefined) {
                renderY += item.bobOffset;
            }
            
            // ENHANCED GLOW EFFECT based on item type!
            let glowColor = '#FFD700'; // Default gold glow
            let glowIntensity = item.glowPulse || 1;
            
            // Determine glow color by item type
            switch(item.data.type) {
                case 'weapon':
                case 'ranged':
                case 'legendary':
                    glowColor = '#FF4444'; // Red for weapons
                    break;
                case 'explosive':
                case 'ultimate':
                case 'cosmic':
                    glowColor = '#FF6600'; // Orange for explosives
                    break;
                case 'defense':
                    glowColor = '#4444FF'; // Blue for defense
                    break;
                case 'consumable':
                case 'buff':
                    glowColor = '#44FF44'; // Green for health/buffs
                    break;
                case 'magic':
                case 'celestial':
                    glowColor = '#AA44FF'; // Purple for magic
                    break;
                case 'debuff':
                    glowColor = '#FF44AA'; // Pink for debuffs
                    break;
                default:
                    glowColor = '#FFD700'; // Gold for everything else
            }
            
            // ROTATION EFFECT while falling
            if (!item.onGround && item.rotation !== undefined) {
                ctx.save();
                ctx.translate(item.x + item.width/2, renderY + item.height/2);
                ctx.rotate(item.rotation);
                
                // Draw rotating glow with scaled font
                const screenScale = Math.min(this.canvas.width / 800, this.canvas.height / 600);
                const itemFontSize = Math.floor(24 * screenScale * 1.8); // 1.8x bigger
                const minItemFontSize = 35; // Minimum font size for visibility
                const finalItemFontSize = Math.max(minItemFontSize, itemFontSize);

                ctx.shadowColor = glowColor;
                ctx.shadowBlur = 15 * glowIntensity;
                ctx.font = `bold ${finalItemFontSize}px Arial`;
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillStyle = '#FFFFFF';
                ctx.fillText(item.emoji, 0, 0);
                
                ctx.restore();
            } else {
                // Draw stationary item with pulsing glow and scaled font
                const screenScale = Math.min(this.canvas.width / 800, this.canvas.height / 600);
                const itemFontSize = Math.floor(24 * screenScale * 1.8); // 1.8x bigger
                const minItemFontSize = 35; // Minimum font size for visibility
                const finalItemFontSize = Math.max(minItemFontSize, itemFontSize);

                ctx.shadowColor = glowColor;
                ctx.shadowBlur = 20 * glowIntensity;
                ctx.font = `bold ${finalItemFontSize}px Arial`;
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillStyle = '#FFFFFF';
                ctx.fillText(item.emoji, item.x + item.width/2, renderY + item.height/2);
            }
            
            // Clear shadow for next draw
            ctx.shadowBlur = 0;
            
            // ENHANCED ITEM INFO DISPLAY when landed
            if (item.onGround) {
                // Draw item name above the item
                ctx.fillStyle = '#FFFFFF';
                ctx.strokeStyle = '#000000';
                ctx.lineWidth = 2;
                ctx.font = 'bold 12px Arial';
                ctx.textAlign = 'center';
                
                const textX = item.x + item.width/2;
                const textY = renderY - 10;
                
                // Item name with outline
                ctx.strokeText(item.name, textX, textY);
                ctx.fillText(item.name, textX, textY);
                
                // DAMAGE/EFFECT INDICATOR
                if (item.data.damage) {
                    ctx.fillStyle = '#FF4444';
                    ctx.strokeText(`💥${item.data.damage}`, textX, textY - 15);
                    ctx.fillText(`💥${item.data.damage}`, textX, textY - 15);
                } else if (item.data.heal) {
                    ctx.fillStyle = '#44FF44';
                    ctx.strokeText(`💚+${item.data.heal}`, textX, textY - 15);
                    ctx.fillText(`💚+${item.data.heal}`, textX, textY - 15);
                } else if (item.data.defense) {
                    ctx.fillStyle = '#4444FF';
                    ctx.strokeText(`🛡️+${item.data.defense}`, textX, textY - 15);
                    ctx.fillText(`🛡️+${item.data.defense}`, textX, textY - 15);
                }
                
                // PICKUP INSTRUCTION
                ctx.fillStyle = '#FFD700';
                ctx.font = 'bold 10px Arial';
                ctx.strokeText('Walk over to pick up!', textX, renderY + item.height + 15);
                ctx.fillText('Walk over to pick up!', textX, renderY + item.height + 15);
            }
            
            // SPECIAL EFFECTS for premium items
            if (['ultimate', 'cosmic', 'legendary', 'celestial'].includes(item.data.type)) {
                // Draw sparkle particles around legendary items
                for (let i = 0; i < 3; i++) {
                    const sparkleX = item.x + Math.random() * item.width;
                    const sparkleY = renderY + Math.random() * item.height;
                    ctx.fillStyle = `rgba(255, 255, 255, ${Math.random()})`;
                    ctx.fillRect(sparkleX, sparkleY, 2, 2);
                }
            }
            
            // Reset text alignment for other drawing operations
            ctx.textAlign = 'left';
            ctx.textBaseline = 'alphabetic';

            // Draw hitbox for drop items (debug mode)
            if (this.showHitboxes) {
                this.drawHitbox(item, 'rgba(0, 255, 255, 0.3)'); // Cyan for drop items
            }
        });
    }

    updateSpecialDrops() {
        // Increment drop timer
        this.dropTimer++;
        
        // Check if it's time to drop an item
        if (this.dropTimer >= this.dropInterval) {
            this.spawnDropItem();
            this.dropTimer = 0; // Reset timer
        }
        
        // Update existing drop items
        this.dropItems.forEach((item, index) => {
            // ENHANCED FALLING ANIMATION with rotation and bounce!
            if (!item.onGround) {
                item.velocityY += 0.8; // Stronger gravity for more realistic fall
                item.y += item.velocityY;
                item.rotation += 0.2; // Spinning while falling!
                
                // Add some horizontal drift for more realistic physics
                if (!item.initialDrift) {
                    item.drift = (Math.random() - 0.5) * 2; // Random left/right drift
                    item.initialDrift = true;
                }
                item.x += item.drift;
                
                // Check ground collision with BOUNCE!
                const groundLevel = this.canvas.height - 120;
                if (item.y + item.height >= groundLevel) {
                    item.y = groundLevel - item.height;
                    if (item.velocityY > 5) {
                        item.velocityY = -item.velocityY * 0.4; // Bounce with dampening
                        item.bounces = (item.bounces || 0) + 1;
                    } else {
                        item.velocityY = 0;
                        item.onGround = true;
                        item.landTime = Date.now(); // Track when it landed
                    }
                }
                
                // Check platform collision with BOUNCE!
                if (this.mapData && this.mapData.platforms) {
                    this.mapData.platforms.forEach(platform => {
                        if (item.x < platform.x + platform.width &&
                            item.x + item.width > platform.x &&
                            item.y + item.height >= platform.y &&
                            item.y + item.height <= platform.y + 20 && // Tolerance for landing
                            item.velocityY > 0) { // Must be falling down

                            item.y = platform.y - item.height;
                            if (item.velocityY > 5) {
                                item.velocityY = -item.velocityY * 0.4; // Bounce
                                item.bounces = (item.bounces || 0) + 1;
                            } else {
                                item.velocityY = 0;
                                item.onGround = true;
                                item.landTime = Date.now();
                            }
                        }
                    });
                }

                // Check obstacle collision with BOUNCE!
                if (this.mapData && this.mapData.obstacles) {
                    this.mapData.obstacles.forEach(obstacle => {
                        if (item.x < obstacle.x + obstacle.width &&
                            item.x + item.width > obstacle.x &&
                            item.y + item.height >= obstacle.y &&
                            item.y + item.height <= obstacle.y + 20 && // Tolerance for landing
                            item.velocityY > 0) { // Must be falling down

                            item.y = obstacle.y - item.height;
                            if (item.velocityY > 5) {
                                item.velocityY = -item.velocityY * 0.4; // Bounce
                                item.bounces = (item.bounces || 0) + 1;
                            } else {
                                item.velocityY = 0;
                                item.onGround = true;
                                item.landTime = Date.now();
                            }
                        }
                    });
                }
            } else {
                // LANDED ANIMATION - Gentle bobbing and glowing
                const timeSinceLand = Date.now() - (item.landTime || 0);
                item.bobOffset = Math.sin(timeSinceLand * 0.005) * 3; // Gentle up/down movement
                item.glowPulse = Math.sin(timeSinceLand * 0.008) * 0.3 + 0.7; // Glow pulse
            }
            
            // Check pickup collision with players
            if (this.checkCollision(item, this.player1)) {
                this.player1.pickupItem(item);
                this.dropItems.splice(index, 1);
                return;
            }
            if (this.checkCollision(item, this.player2)) {
                this.player2.pickupItem(item);
                this.dropItems.splice(index, 1);
                return;
            }
            
            // Remove items after 30 seconds
            item.lifetime--;
            if (item.lifetime <= 0) {
                this.dropItems.splice(index, 1);
            }
        });
    }
    
    spawnDropItem() {
        // Pick random item from special drop items
        const itemKeys = Object.keys(specialDropItems);
        const randomItem = itemKeys[Math.floor(Math.random() * itemKeys.length)];
        const itemData = specialDropItems[randomItem];
        
        // Create drop item with scaled size
        const screenScale = Math.min(this.canvas.width / 800, this.canvas.height / 600);
        const itemSize = Math.floor(30 * screenScale * 1.8); // 1.8x bigger than before
        const minSize = 40; // Minimum size for visibility
        const finalSize = Math.max(minSize, itemSize);

        const dropItem = {
            type: randomItem,
            name: itemData.name,
            emoji: itemData.emoji,
            x: Math.random() * (this.canvas.width - finalSize * 2) + finalSize, // Random X position with padding
            y: -finalSize, // Start above screen
            width: finalSize,
            height: finalSize,
            velocityY: 0,
            onGround: false,
            lifetime: 1800, // 30 seconds at 60fps
            data: itemData
        };
        
        this.dropItems.push(dropItem);
        console.log(`Item dropped: ${itemData.name} ${itemData.emoji}`);
    }
    
    applyItemEffect(item, player) {
        const itemData = item.data;
        console.log(`${player.char.name} picked up ${itemData.name}!`);
        
        // Apply item effects based on type
        switch(itemData.type) {
            case 'weapon':
            case 'explosive':
            case 'ranged':
            case 'magic':
            case 'projectile':
            case 'heavy':
            case 'legendary':
            case 'celestial':
            case 'cosmic':
            case 'ultimate':
            case 'alpha':
            case 'beta':
            case 'radiation':
            case 'military':
            case 'omega':
                // Temporary damage boost
                if (!player.itemEffects) player.itemEffects = {};
                player.itemEffects.damageBoost = {
                    amount: itemData.damage || 50,
                    duration: itemData.duration
                };
                break;
                
            case 'defense':
                // Temporary defense boost
                if (!player.itemEffects) player.itemEffects = {};
                player.itemEffects.defenseBoost = {
                    amount: itemData.defense || 20,
                    duration: itemData.duration
                };
                break;
                
            case 'consumable':
                // Instant heal
                if (itemData.heal) {
                    player.health = Math.min(player.maxHealth, player.health + itemData.heal);
                    console.log(`${player.char.name} healed for ${itemData.heal} HP!`);
                }
                break;
                
            case 'buff':
                // Speed boost
                if (itemData.speedMultiplier) {
                    if (!player.itemEffects) player.itemEffects = {};
                    player.itemEffects.speedBoost = {
                        multiplier: itemData.speedMultiplier,
                        duration: itemData.duration
                    };
                }
                // Power boost
                if (itemData.powerBoost) {
                    if (!player.itemEffects) player.itemEffects = {};
                    player.itemEffects.powerBoost = {
                        multiplier: itemData.powerBoost,
                        duration: itemData.duration
                    };
                }
                break;
                
            case 'instant':
                // Instant damage to enemy
                const enemy = player === this.player1 ? this.player2 : this.player1;
                enemy.takeDamage(itemData.damage || 80);
                console.log(`Lightning strikes ${enemy.char.name} for ${itemData.damage} damage!`);
                break;
                
            // Removed old debuff and time implementations - now handled in Fighter.applyItemEffect()
                
            case 'chaos':
                // Random effect
                if (itemData.randomEffect) {
                    const effects = ['heal', 'damage', 'speed', 'freeze'];
                    const randomEffect = effects[Math.floor(Math.random() * effects.length)];
                    console.log(`Chaos effect: ${randomEffect}!`);
                    // Apply random effect
                }
                break;
        }
        
        // Show pickup notification
        showNotification(`${player.char.name} picked up:\n${itemData.emoji} ${itemData.name}!`);
    }

    // FLAG CAPTURE MODE METHODS
    initializeFlagCapture() {
        gameState.flagCapture.flag = null;
        gameState.flagCapture.flagHolder = null;
        gameState.flagCapture.holdStartTime = 0;
        gameState.flagCapture.flagDropped = false;
        gameState.flagCapture.nextFlagDropTime = Date.now() + 1000; // Spawn flag after 1 second

        // Reset stun states
        gameState.flagCapture.stunned.player1 = false;
        gameState.flagCapture.stunned.player2 = false;
        gameState.flagCapture.stunned.player1StunTime = 0;
        gameState.flagCapture.stunned.player2StunTime = 0;

        console.log('🏁 Flag Capture Mode initialized!');
    }

    updateFlagCapture() {
        try {
            const currentTime = Date.now();

            // Update stun states
            if (gameState.flagCapture.stunned.player1 && currentTime > gameState.flagCapture.stunned.player1StunTime) {
                gameState.flagCapture.stunned.player1 = false;
                console.log('Player 1 stun ended');
            }
            if (gameState.flagCapture.stunned.player2 && currentTime > gameState.flagCapture.stunned.player2StunTime) {
                gameState.flagCapture.stunned.player2 = false;
                console.log('Player 2 stun ended');
            }

            // Spawn flag ONLY if none exists and no one is holding it
            if (!gameState.flagCapture.flag && !gameState.flagCapture.flagHolder && currentTime >= gameState.flagCapture.nextFlagDropTime) {
                this.spawnFlag();
            }

            // Update flag physics
            if (gameState.flagCapture.flag && !gameState.flagCapture.flagHolder) {
                gameState.flagCapture.flag.update();

                // Check flag pickup
                if (gameState.flagCapture.flag.checkCollision(this.player1) && !gameState.flagCapture.stunned.player1) {
                    this.pickupFlag('player1');
                } else if (gameState.flagCapture.flag.checkCollision(this.player2) && !gameState.flagCapture.stunned.player2) {
                    this.pickupFlag('player2');
                }
            }

            // Check flag hold duration
            if (gameState.flagCapture.flagHolder) {
                const holdTime = currentTime - gameState.flagCapture.holdStartTime;
                if (holdTime >= gameState.flagCapture.holdDuration) {
                    // Flag holder wins!
                    this.endFlagCaptureGame(gameState.flagCapture.flagHolder);
                }
            }
        } catch (error) {
            console.error('🏁 Error in updateFlagCapture:', error);
            // Reset flag capture state if there's an error
            gameState.flagCapture.flag = null;
            gameState.flagCapture.flagHolder = null;
        }
    }

    spawnFlag() {
        const x = Math.random() * (this.canvas.width - 100) + 50;
        const y = 50; // Drop from top

        gameState.flagCapture.flag = new Flag(x, y);
        gameState.flagCapture.flagDropped = true;

        console.log('🏁 Flag dropped at', x, y);
        showNotification('🏁 FLAG DROPPED!\nFirst to hold for 15 seconds wins!');
    }

    pickupFlag(player) {
        gameState.flagCapture.flagHolder = player;
        gameState.flagCapture.holdStartTime = Date.now();
        gameState.flagCapture.flag = null; // Remove flag from world

        // Initialize AI flag running state when AI picks up flag
        if (player === 'player2') {
            this.aiFlagRunning = null; // Will be initialized in updateAI
        }

        const playerName = player === 'player1' ? 'Player 1' : 'Player 2';
        console.log(`${playerName} picked up the flag!`);
        showNotification(`🏁 ${playerName} has the FLAG!\nHold for 15 seconds to win!`);
    }

    stealFlag(fromPlayer, toPlayer) {
        // Transfer flag from one player to another
        gameState.flagCapture.flagHolder = toPlayer;
        gameState.flagCapture.holdStartTime = Date.now(); // Reset timer for new holder

        // Reset AI flag running state when flag changes hands
        if (fromPlayer === 'player2') {
            this.aiFlagRunning = null;
        }
        if (toPlayer === 'player2') {
            this.aiFlagRunning = null; // Will be reinitialized in updateAI
        }

        const fromPlayerName = fromPlayer === 'player1' ? 'Player 1' : 'Player 2';
        const toPlayerName = toPlayer === 'player1' ? 'Player 1' : 'Player 2';
        console.log(`${toPlayerName} stole the flag from ${fromPlayerName}!`);
        showNotification(`🏁 ${toPlayerName} STOLE the FLAG!\nHold for 15 seconds to win!`);
    }

    dropFlag(fromPlayer) {
        if (!gameState.flagCapture.flagHolder) return;

        const player = fromPlayer === 'player1' ? this.player1 : this.player2;

        // Drop flag at player's position
        gameState.flagCapture.flag = new Flag(player.x, player.y - 20);
        gameState.flagCapture.flagHolder = null;
        gameState.flagCapture.holdStartTime = 0;

        // Reset AI flag running state when flag is dropped
        if (fromPlayer === 'player2') {
            this.aiFlagRunning = null;
        }

        const playerName = fromPlayer === 'player1' ? 'Player 1' : 'Player 2';
        console.log(`${playerName} dropped the flag!`);
        showNotification(`🏁 ${playerName} dropped the FLAG!`);
    }

    stunPlayer(player) {
        const currentTime = Date.now();
        if (player === 'player1') {
            gameState.flagCapture.stunned.player1 = true;
            gameState.flagCapture.stunned.player1StunTime = currentTime + gameState.flagCapture.stunned.stunDuration;
        } else {
            gameState.flagCapture.stunned.player2 = true;
            gameState.flagCapture.stunned.player2StunTime = currentTime + gameState.flagCapture.stunned.stunDuration;
        }

        // Drop flag if stunned player was holding it
        if (gameState.flagCapture.flagHolder === player) {
            this.dropFlag(player);
        }

        const playerName = player === 'player1' ? 'Player 1' : 'Player 2';
        console.log(`${playerName} is stunned!`);
        showNotification(`💫 ${playerName} is STUNNED!`);
    }

    endFlagCaptureGame(winner) {
        this.gameRunning = false;
        const winnerName = winner === 'player1' ? 'Player 1' : 'Player 2';

        // Award coins and trophies based on flag capture victory
        const timeRemainingSeconds = Math.ceil(this.timeLeft / 1000);
        let player1Coins = 0, player2Coins = 0;
        let player1Trophies = 0, player2Trophies = 0;

        if (winner === 'player1') {
            player1Coins = 50; // 50 coins for flag capture victory
            player1Trophies = timeRemainingSeconds; // Trophies = time remaining in seconds
        } else {
            player2Coins = 50; // 50 coins for flag capture victory
            player2Trophies = timeRemainingSeconds; // Trophies = time remaining in seconds
        }

        this.handleGameEnd(`🏁 ${winnerName} Wins!\nFlag Capture Victory!\n⏰ Time remaining: ${timeRemainingSeconds}s`, player1Coins, player2Coins, player1Trophies, player2Trophies);
    }

    updateUI() {
        const p1HealthPercent = (this.player1.health / this.player1.maxHealth) * 100;
        const p2HealthPercent = (this.player2.health / this.player2.maxHealth) * 100;

        document.getElementById('player1Health').style.width = `${Math.max(0, p1HealthPercent)}%`;
        document.getElementById('player2Health').style.width = `${Math.max(0, p2HealthPercent)}%`;

        // Update flag capture status
        if (this.isFlagCaptureMode) {
            let statusText = '';
            if (gameState.flagCapture.flagHolder) {
                const holderName = gameState.flagCapture.flagHolder === 'player1' ? 'Player 1' : 'Player 2';
                const currentTime = Date.now();
                const holdTime = currentTime - gameState.flagCapture.holdStartTime;
                const remainingTime = Math.max(0, gameState.flagCapture.holdDuration - holdTime);
                const seconds = Math.ceil(remainingTime / 1000);
                statusText = `🏁 ${holderName} has the flag! ${seconds}s to win!`;
            } else if (gameState.flagCapture.flag) {
                statusText = '🏁 Flag is available! First to hold for 15s wins!';
            } else {
                statusText = '🏁 Flag will drop soon...';
            }

            // Update or create flag status element
            let flagStatus = document.getElementById('flagStatus');
            if (!flagStatus) {
                flagStatus = document.createElement('div');
                flagStatus.id = 'flagStatus';
                flagStatus.style.cssText = `
                    position: fixed;
                    top: 10px;
                    left: 50%;
                    transform: translateX(-50%);
                    background: rgba(0, 0, 0, 0.8);
                    color: white;
                    padding: 10px 20px;
                    border-radius: 10px;
                    font-size: 16px;
                    font-weight: bold;
                    z-index: 1000;
                    text-align: center;
                `;
                document.body.appendChild(flagStatus);
            }
            flagStatus.textContent = statusText;
        } else {
            // Remove flag status if not in flag capture mode
            const flagStatus = document.getElementById('flagStatus');
            if (flagStatus) {
                flagStatus.remove();
            }
        }
    }

    endBossBattle(playersWin) {
        this.gameRunning = false;

        if (playersWin) {
            // Players defeated the boss!
            console.log('🎉 Players defeated the boss!');
            showNotification('🎉 BOSS DEFEATED! VICTORY!');

            // Reward both players
            const baseReward = 200; // Large coin reward for defeating boss
            const bossPhaseBonus = (this.boss ? this.boss.phase : 1) * 50; // Bonus based on how far boss got
            const timeBonus = Math.max(0, Math.ceil(this.timeLeft / 1000)); // Coins = seconds remaining
            const totalReward = baseReward + bossPhaseBonus + timeBonus;

            // Award coins to both players
            if (gameState.gameMode === 'multiplayer') {
                gameState.player1Coins = safeCoins(gameState.player1Coins + totalReward);
                gameState.player2Coins = safeCoins(gameState.player2Coins + totalReward);
                console.log(`💰 Both players earn ${totalReward} coins!`);
            } else {
                gameState.coins = safeCoins(gameState.coins + totalReward);
                console.log(`💰 Player earns ${totalReward} coins!`);
            }

            // Award trophies based on remaining HP
            const player1HP = Math.max(0, Math.floor(this.player1.health));
            const player2HP = Math.max(0, Math.floor(this.player2.health));
            const totalHP = player1HP + player2HP;
            const trophyReward = Math.floor(totalHP / 10); // 1 trophy per 10 HP remaining

            if (gameState.gameMode === 'multiplayer') {
                gameState.player1Trophies += trophyReward;
                gameState.player2Trophies += trophyReward;
            } else {
                gameState.trophies += trophyReward;
            }

            // Show victory screen
            setTimeout(() => {
                alert(`🎉 BOSS DEFEATED!\n\n💰 Base Reward: ${baseReward}\n🎯 Phase Bonus: ${bossPhaseBonus}\n⏰ Time Bonus: ${timeBonus}\n💰 Total Coins: ${totalReward}\n🏆 Trophies Earned: ${trophyReward}\n\nCongratulations on your teamwork!`);
                endBattle();
            }, 2000);

        } else {
            // Boss defeated the players
            console.log('💀 Boss defeated the players!');
            showNotification('💀 BOSS VICTORY! DEFEAT!');

            // Small penalty for losing
            const penalty = 25;
            if (gameState.gameMode === 'multiplayer') {
                gameState.player1Coins = safeCoins(gameState.player1Coins - penalty);
                gameState.player2Coins = safeCoins(gameState.player2Coins - penalty);
            } else {
                gameState.coins = safeCoins(gameState.coins - penalty);
            }

            setTimeout(() => {
                alert(`💀 BOSS VICTORY!\n\n💸 Coins Lost: ${penalty}\n\nBetter luck next time!`);
                endBattle();
            }, 2000);
        }
    }

    endGame() {
        // BOSS BATTLE MODE - Special handling for player deaths
        if (this.isBossBattleMode) {
            const player1Dead = this.player1.health <= 0;
            const player2Dead = this.player2.health <= 0;

            if (player1Dead && player2Dead) {
                // Both players died - boss wins
                this.gameRunning = false;
                this.endBossBattle(false);
                return;
            } else if (player1Dead || player2Dead) {
                // One player died - continue with remaining player
                console.log('One player down, but the fight continues!');
                showNotification('💀 TEAMMATE DOWN! FIGHT ON!');
                return; // Don't end the game yet - keep running!
            }
            // If we reach here, time ran out but players are alive - boss wins by timeout
            this.gameRunning = false;
            this.endBossBattle(false);
            return;
        }

        // Normal game modes - stop the game
        this.gameRunning = false;

        let winner;
        let player1HP = Math.max(0, Math.floor(this.player1.health));
        let player2HP = Math.max(0, Math.floor(this.player2.health));

        // FLAG CAPTURE MODE - Special death penalty handling
        if (this.isFlagCaptureMode) {
            let player1Coins = 0, player2Coins = 0;
            let player1Trophies = 0, player2Trophies = 0;

            if (this.player1.health <= 0) {
                // Player 1 died - loses 25 coins
                player1Coins = -25;
                winner = 'Player 2 Wins!\nPlayer 1 died in flag capture!';
                player2Trophies = Math.ceil(this.timeLeft / 1000); // Winner gets time remaining as trophies
            } else if (this.player2.health <= 0) {
                // Player 2 died - loses 25 coins (in single player, this affects AI but we track it)
                player2Coins = -25;
                winner = 'Player 1 Wins!\nPlayer 2 died in flag capture!';
                player1Trophies = Math.ceil(this.timeLeft / 1000); // Winner gets time remaining as trophies
            } else if (this.timeLeft <= 0) {
                // Time up in flag capture mode
                if (this.player1.health > this.player2.health) {
                    winner = 'Time Up - Player 1 Wins!';
                    player1Trophies = 1;
                } else if (this.player2.health > this.player1.health) {
                    winner = 'Time Up - Player 2 Wins!';
                    player2Trophies = 1;
                } else {
                    winner = 'Time Up - Draw!';
                }
            }

            this.handleGameEnd(winner, player1Coins, player2Coins, player1Trophies, player2Trophies);
            return;
        }

        // NORMAL MODE - Calculate coins as 50% of remaining health (rounded down)
        let player1Coins = Math.floor(player1HP * 0.5);
        let player2Coins = Math.floor(player2HP * 0.5);

        // TROPHY SYSTEM - Calculate trophies based on time remaining!
        const timeRemainingSeconds = Math.ceil(this.timeLeft / 1000);
        let player1Trophies = 0;
        let player2Trophies = 0;

        if (this.timeLeft <= 0) {
            if (this.player1.health > this.player2.health) {
                winner = 'Time Up - Player 1 Wins!';
                player1Trophies = 1; // Minimal trophies for time-up wins
            } else if (this.player2.health > this.player1.health) {
                winner = 'Time Up - Player 2 Wins!';
                player2Trophies = 1;
            } else {
                winner = 'Time Up - Draw!';
                player1Coins = 0; // No coins for draws
                player2Coins = 0;
                // No trophies for draws
            }
        } else {
            if (this.player1.health > 0) {
                winner = 'Player 1 Wins!';
                player1Trophies = timeRemainingSeconds; // Win by time = trophies gained
            } else {
                winner = 'Player 2 Wins!';
                player2Trophies = timeRemainingSeconds;
                player1Coins = 0; // No coins if you lose
            }
            if (this.player2.health > 0) {
                winner = 'Player 2 Wins!';
                player2Trophies = timeRemainingSeconds;
            } else {
                player2Coins = 0; // No coins if you lose
            }
        }

        // Use handleGameEnd for all modes to ensure stats tracking
        this.handleGameEnd(winner, player1Coins, player2Coins, player1Trophies, player2Trophies);
    }

    handleGameEnd(winner, player1Coins, player2Coins, player1Trophies, player2Trophies) {
        this.gameRunning = false;

        // Track character-specific stats
        const charKey = gameState.selectedCharacter;
        console.log('🔍 Tracking stats for character:', charKey);
        console.log('🔍 Winner:', winner);
        console.log('🔍 Current characterStats object:', gameState.characterStats);

        if (charKey) {
            if (!gameState.characterStats) {
                console.log('⚠️ characterStats object does not exist! Creating it...');
                gameState.characterStats = {};
            }

            if (!gameState.characterStats[charKey]) {
                console.log('⚠️ Stats for', charKey, 'do not exist! Creating them...');
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

            const stats = gameState.characterStats[charKey];
            const damageTaken = this.player1.maxHealth - this.player1.health;
            const timeElapsed = (90000 - this.timeLeft) / 1000; // Battle time in seconds

            console.log('📊 Before update - Stats:', JSON.stringify(stats));
            console.log('📊 Damage taken:', damageTaken);
            console.log('📊 Time elapsed:', timeElapsed);

            // Track damage
            stats.totalDamageTaken += damageTaken;

            if (winner.includes('Player 1')) {
                // Win tracking
                stats.wins++;
                console.log('✅ Player 1 won! Incrementing wins to:', stats.wins);

                // Fastest win
                if (!stats.fastestWin || timeElapsed < stats.fastestWin) {
                    stats.fastestWin = timeElapsed;
                    console.log('⚡ New fastest win:', stats.fastestWin);
                }

                // Perfect win (no damage taken)
                if (damageTaken === 0) {
                    stats.perfectWins++;
                    console.log('✨ Perfect win! Total:', stats.perfectWins);
                }

                // Comeback win
                if (this.player1.health < this.player1.maxHealth * 0.3 && this.player2.health > this.player2.maxHealth * 0.7) {
                    stats.comebackWins++;
                    console.log('🔥 Comeback win! Total:', stats.comebackWins);
                }
            } else if (winner.includes('Player 2')) {
                // Loss tracking
                stats.losses++;
                console.log('❌ Player 2 won! Incrementing losses to:', stats.losses);
            }

            console.log('📊 After update - Stats:', JSON.stringify(stats));

            // Save character stats immediately
            saveGameState();
            console.log('💾 Character stats updated and saved for:', charKey);
            console.log('💾 Full characterStats object:', JSON.stringify(gameState.characterStats));
        } else {
            console.log('⚠️ No selectedCharacter found! Cannot track stats.');
        }

        // Track challenge progress for battle outcome
        if (winner.includes('Player 1')) {
            // Player 1 won - track the win
            trackChallengeProgress('battle_won', {
                timeRemaining: Math.ceil(this.timeLeft / 1000),
                playerHP: this.player1.health,
                playerMaxHP: this.player1.maxHealth,
                damageTaken: this.player1.maxHealth - this.player1.health,
                enemyHP: this.player2.maxHealth,
                trophiesEarned: player1Trophies,
                character: gameState.selectedCharacter,
                rarity: characters[gameState.selectedCharacter]?.rarity || 'common',
                enemyRarity: characters[gameState.selectedPlayer2Character]?.rarity || 'common',
                map: gameState.selectedMap,
                wasComeback: this.player1.health < this.player1.maxHealth * 0.3 && this.player2.health > this.player2.maxHealth * 0.7
            });
        } else if (winner.includes('Player 2')) {
            // Player 2 won (or CPU won) - track the loss
            trackChallengeProgress('battle_lost');
        }

        // Award coins and trophies
        if (gameState.gameMode === 'multiplayer') {
            // Multiplayer mode
            gameState.player1Coins = safeCoins(gameState.player1Coins + player1Coins);
            gameState.player2Coins = safeCoins(gameState.player2Coins + player2Coins);
            gameState.player1Trophies += player1Trophies;
            gameState.player2Trophies += player2Trophies;

            // Track coins earned for challenges (only positive amounts for Player 1)
            if (player1Coins > 0) {
                trackChallengeProgress('coins_earned', { amount: player1Coins });
            }

            // Format coin messages to show gains/losses
            const p1CoinMsg = player1Coins >= 0 ? `+${player1Coins}` : `${player1Coins}`;
            const p2CoinMsg = player2Coins >= 0 ? `+${player2Coins}` : `${player2Coins}`;
            const coinsMessage = `P1: ${p1CoinMsg} coins | P2: ${p2CoinMsg} coins`;
            const trophyMessage = `🏆 P1: +${player1Trophies} | P2: +${player2Trophies} trophies`;

            updateMultiplayerCoinsDisplay();
            updateMultiplayerTrophyDisplay();

            showNotification(`${winner}\n${coinsMessage}\n${trophyMessage}`);
        } else {
            // Single player mode
            gameState.coins = safeCoins(gameState.coins + player1Coins);
            gameState.trophies += player1Trophies;

            // Track coins earned for challenges (only positive amounts)
            if (player1Coins > 0) {
                trackChallengeProgress('coins_earned', { amount: player1Coins });
            }

            // Format coin message to show gains/losses
            const coinMsg = player1Coins >= 0 ? `+${player1Coins} coins earned!` : `${player1Coins} coins lost!`;
            const trophyMessage = `🏆 +${player1Trophies} trophies earned!`;

            updateSinglePlayerCoinsDisplay();
            updateSinglePlayerTrophyDisplay();

            showNotification(`${winner}\n${coinMsg}\n${trophyMessage}`);
        }

        setTimeout(() => endBattle(), 5000);
    }

    handleTournamentResult(winner) {
        const data = gameState.tournamentData;
        const currentRoundName = data.roundNames[data.currentRound];
        const series = data.currentSeries;

        // Track challenge progress for tournament battles
        if (winner.includes('Player 1')) {
            // Player won - track the win
            trackChallengeProgress('battle_won', {
                timeRemaining: Math.ceil(this.timeLeft / 1000),
                playerHP: this.player1.health,
                playerMaxHP: this.player1.maxHealth,
                damageTaken: this.player1.maxHealth - this.player1.health,
                enemyHP: this.player2.maxHealth,
                trophiesEarned: 0, // Tournaments don't award trophies per battle
                character: gameState.selectedCharacter,
                rarity: characters[gameState.selectedCharacter]?.rarity || 'common',
                enemyRarity: characters[gameState.selectedPlayer2Character]?.rarity || 'common',
                map: gameState.selectedMap,
                wasComeback: this.player1.health < this.player1.maxHealth * 0.3 && this.player2.health > this.player2.maxHealth * 0.7
            });
        } else {
            // Player lost - track the loss
            trackChallengeProgress('battle_lost');
        }

        // Update series score
        if (winner.includes('Player 1')) {
            series.playerWins++;
        } else {
            series.opponentWins++;
        }
        series.gamesPlayed++;

        // Check if series is complete (first to 3 wins)
        if (series.playerWins >= data.seriesLength) {
            // Player won the series - advance to next round
            data.roundsWon++;
            data.currentRound++;

            // Reset series for next round
            series.playerWins = 0;
            series.opponentWins = 0;
            series.gamesPlayed = 0;
            series.playerCharacter = null;
            series.opponentCharacter = null;

            if (data.currentRound >= data.totalRounds) {
                // Tournament completed! Award prize
                if (gameState.gameMode === 'multiplayer') {
                    if (gameState.currentShopPlayer === 1) {
                        gameState.player1Coins = safeCoins(gameState.player1Coins + data.prizePool);
                    } else {
                        gameState.player2Coins = safeCoins(gameState.player2Coins + data.prizePool);
                    }
                    updateMultiplayerCoinsDisplay();
                } else {
                    gameState.coins = safeCoins(gameState.coins + data.prizePool);
                    updateSinglePlayerCoinsDisplay();
                }

                // Reset tournament
                gameState.tournamentMode = false;
                gameState.tournamentData.isActive = false;

                showNotification(`🏆 TOURNAMENT CHAMPION! 🏆\n${data.name} COMPLETED!\n\n💰 Prize Pool Awarded: ${data.prizePool} coins!\n🎉 Congratulations on your victory!`);
                setTimeout(() => {
                    endBattle();
                    updateTournamentStatus();
                }, 6000);
            } else {
                // Advance to next round
                const nextRoundName = data.roundNames[data.currentRound];
                showNotification(`🏆 ${currentRoundName} SERIES WON! 🏆\n\nAdvancing to: ${nextRoundName}\nRounds Won: ${data.roundsWon}/${data.totalRounds}\n\nPrize Pool: ${data.prizePool} coins\n(Only awarded if you win ALL rounds!)`);
                setTimeout(() => {
                    endBattle();
                    updateTournamentStatus();
                    // Auto-continue to next round
                    setTimeout(() => {
                        showCharacterSelect();
                    }, 2000);
                }, 4000);
            }
        } else if (series.opponentWins >= data.seriesLength) {
            // Player lost the series - tournament over
            gameState.tournamentMode = false;
            gameState.tournamentData.isActive = false;

            showNotification(`💀 TOURNAMENT ELIMINATED! 💀\n\nLost series in: ${currentRoundName}\nFinal Series Score: ${series.playerWins}-${series.opponentWins}\nRounds Won: ${data.roundsWon}/${data.totalRounds}\n\n❌ No prize awarded\n💰 Entry fee (${data.entryFee} coins) lost\n\nBetter luck next time!`);
            setTimeout(() => {
                endBattle();
                updateTournamentStatus();
            }, 6000);
        } else {
            // Series continues - show current score and continue
            const seriesStatus = winner.includes('Player 1') ? 'GAME WON!' : 'GAME LOST!';
            showNotification(`${seriesStatus}\n\n${currentRoundName} Series Score:\nYou: ${series.playerWins} | Opponent: ${series.opponentWins}\n\nFirst to ${data.seriesLength} wins advances!\n\nNext game starting...`);
            setTimeout(() => {
                endBattle();
                updateTournamentStatus();
                // Continue series - auto-start next game
                setTimeout(() => {
                    showCharacterSelect();
                }, 2000);
            }, 3000);
        }

        updateUniversalCoinsDisplay();
    }

    handle2PlayerTournamentResult(winner) {
        const data = gameState.tournament2PlayerData;
        const currentPlayerData = data.currentPlayer === 1 ? data.player1 : data.player2;
        const series = currentPlayerData.currentSeries;
        const currentRoundName = data.roundNames[data.currentRound];

        // Track challenge progress for 2-player tournament battles
        if (winner.includes('Player 1')) {
            // Player won - track the win
            trackChallengeProgress('battle_won', {
                timeRemaining: Math.ceil(this.timeLeft / 1000),
                playerHP: this.player1.health,
                playerMaxHP: this.player1.maxHealth,
                damageTaken: this.player1.maxHealth - this.player1.health,
                enemyHP: this.player2.maxHealth,
                trophiesEarned: 0,
                character: gameState.selectedCharacter,
                rarity: characters[gameState.selectedCharacter]?.rarity || 'common',
                enemyRarity: characters[gameState.selectedPlayer2Character]?.rarity || 'common',
                map: gameState.selectedMap,
                wasComeback: this.player1.health < this.player1.maxHealth * 0.3 && this.player2.health > this.player2.maxHealth * 0.7
            });
        } else {
            // Player lost - track the loss
            trackChallengeProgress('battle_lost');
        }

        // Handle final match (Player vs Player)
        if (data.finalMatch) {
            if (winner.includes('Player 1')) {
                end2PlayerTournament(1);
            } else {
                end2PlayerTournament(2);
            }
            return;
        }

        // Update series score for current player
        if (winner.includes('Player 1')) {
            series.playerWins++;
        } else {
            series.opponentWins++;
        }
        series.gamesPlayed++;

        // Check if series is complete (first to 3 wins)
        if (series.playerWins >= data.seriesLength) {
            // Current player won the series - advance to next round
            currentPlayerData.roundsWon++;

            // Reset series for next round
            series.playerWins = 0;
            series.opponentWins = 0;
            series.gamesPlayed = 0;
            series.playerCharacter = null;
            series.opponentCharacter = null;

            if (currentPlayerData.roundsWon >= data.totalRounds) {
                // Player completed all rounds - check if other player also completed
                const otherPlayerData = data.currentPlayer === 1 ? data.player2 : data.player1;
                if (otherPlayerData.roundsWon >= data.totalRounds) {
                    // Both players made it to finals
                    showNotification(`🏆 Player ${data.currentPlayer} ADVANCES TO FINALS! 🏆\n\n${currentRoundName} series won!\nBoth players will meet in the finals!`);
                } else {
                    // Current player finished, wait for other player
                    showNotification(`🏆 Player ${data.currentPlayer} COMPLETED TOURNAMENT! 🏆\n\nWaiting for Player ${data.currentPlayer === 1 ? 2 : 1} to finish...`);
                }
            } else {
                // Advance to next round
                const nextRoundName = data.roundNames[currentPlayerData.roundsWon];
                showNotification(`🏆 Player ${data.currentPlayer} ADVANCES! 🏆\n\n${currentRoundName} series won!\nAdvancing to: ${nextRoundName}\n\nPlayer ${data.currentPlayer === 1 ? 2 : 1}'s turn next!`);
            }

            setTimeout(() => {
                endBattle();
                update2PlayerTournamentStatus();
                setTimeout(() => {
                    switchTo2PlayerNextPlayer();
                }, 2000);
            }, 4000);

        } else if (series.opponentWins >= data.seriesLength) {
            // Current player lost the series - eliminated
            currentPlayerData.isEliminated = true;

            showNotification(`💀 Player ${data.currentPlayer} ELIMINATED! 💀\n\nLost series in: ${currentRoundName}\nFinal Series Score: ${series.playerWins}-${series.opponentWins}\n\nPlayer ${data.currentPlayer === 1 ? 2 : 1} continues alone!`);

            setTimeout(() => {
                endBattle();
                update2PlayerTournamentStatus();
                setTimeout(() => {
                    switchTo2PlayerNextPlayer();
                }, 2000);
            }, 4000);

        } else {
            // Series continues - show current score and continue
            const seriesStatus = winner.includes('Player 1') ? 'GAME WON!' : 'GAME LOST!';
            showNotification(`Player ${data.currentPlayer}: ${seriesStatus}\n\n${currentRoundName} Series Score:\nYou: ${series.playerWins} | Opponent: ${series.opponentWins}\n\nFirst to ${data.seriesLength} wins advances!\n\nNext game starting...`);

            setTimeout(() => {
                endBattle();
                update2PlayerTournamentStatus();
                setTimeout(() => {
                    showCharacterSelect();
                }, 2000);
            }, 3000);
        }

        updateUniversalCoinsDisplay();
    }

    // ADVANCED AI SYSTEM with smart pathfinding, item prioritization, and tactical intelligence!
    updateAI() {
        const dx = this.player1.x - this.player2.x;
        const dy = this.player1.y - this.player2.y;
        const distance = Math.abs(dx);
        const verticalDistance = Math.abs(dy);

        // FLAG CAPTURE MODE AI - Prioritize flag-related actions!
        if (this.isFlagCaptureMode) {
            // If player has the flag, chase them while maintaining safe distance!
            if (gameState.flagCapture.flagHolder === 'player1') {
                // AI chasing flag holder - KEEP DISTANCE, DON'T CROSS HITBOX

                // Calculate safe attack distance (outside player's hitbox)
                const playerHitboxRadius = Math.min(this.player1.width, this.player1.height) / 3;
                const aiHitboxRadius = Math.min(this.player2.width, this.player2.height) / 3;
                const safeDistance = playerHitboxRadius + aiHitboxRadius + 30; // Extra 30px buffer
                const attackRange = safeDistance + 50; // Attack from 50px beyond safe distance

                // Move towards player but stop at safe distance
                if (distance > attackRange) {
                    // Too far - move closer
                    if (dx > 0) {
                        this.player2.x += this.player2.getMovementSpeed() * 1.2; // 20% faster when chasing flag
                        this.player2.direction = 1;
                    } else {
                        this.player2.x -= this.player2.getMovementSpeed() * 1.2;
                        this.player2.direction = -1;
                    }
                } else if (distance < safeDistance) {
                    // Too close - back away to avoid crossing hitbox
                    if (dx > 0) {
                        this.player2.x -= this.player2.getMovementSpeed() * 1.5; // Back away faster
                        this.player2.direction = 1; // Still face the player
                    } else {
                        this.player2.x += this.player2.getMovementSpeed() * 1.5;
                        this.player2.direction = -1;
                    }
                    console.log('🛡️ AI backing away to maintain distance');
                } else {
                    // Perfect distance - circle around player
                    // Face the player
                    this.player2.direction = dx > 0 ? 1 : -1;

                    // Strafe/circle movement
                    if (Math.random() < 0.5) {
                        // Move slightly to maintain optimal attack position
                        const strafeDirection = Math.random() < 0.5 ? 1 : -1;
                        this.player2.x += this.player2.getMovementSpeed() * 0.5 * strafeDirection;
                    }
                }

                // Jump to reach player if they're above
                if (dy < -50 && this.player2.onGround) {
                    this.player2.jump();
                }

                // Attack from safe distance to steal flag
                if (distance >= safeDistance && distance <= attackRange + 30) {
                    if (Math.random() < 0.7) { // 70% chance to attack when in range
                        this.player2.normalAttack();
                    }
                }

                // Use special attack from safe distance to stun
                if (distance >= safeDistance && distance <= attackRange + 50 && Math.random() < 0.25) { // 25% chance for special attack
                    this.player2.specialAttack();
                }

                return; // Skip normal AI behavior when chasing flag holder
            }

            // If AI has the flag, RUN AROUND THE MAP!
            if (gameState.flagCapture.flagHolder === 'player2') {
                // Initialize AI flag running state if not exists
                if (!this.aiFlagRunning) {
                    this.aiFlagRunning = {
                        targetX: null,
                        lastChangeTime: Date.now(),
                        changeInterval: 2000, // Change direction every 2 seconds
                        runSpeed: 1.3 // 30% faster when running with flag
                    };
                }

                const currentTime = Date.now();
                const timeSinceLastChange = currentTime - this.aiFlagRunning.lastChangeTime;

                // Change target position every 2 seconds or if reached target
                if (timeSinceLastChange >= this.aiFlagRunning.changeInterval ||
                    this.aiFlagRunning.targetX === null ||
                    Math.abs(this.player2.x - this.aiFlagRunning.targetX) < 30) {

                    // Pick a random position on the map to run to
                    const mapWidth = this.canvas.width;
                    const minX = 50;
                    const maxX = mapWidth - 50;

                    // Generate new random target far from current position
                    let newTargetX;
                    do {
                        newTargetX = Math.random() * (maxX - minX) + minX;
                    } while (Math.abs(newTargetX - this.player2.x) < 200); // Ensure it's far enough

                    this.aiFlagRunning.targetX = newTargetX;
                    this.aiFlagRunning.lastChangeTime = currentTime;

                    console.log(`🏃 AI running to new position: ${Math.round(newTargetX)}`);
                }

                // Run towards target position
                const targetDx = this.aiFlagRunning.targetX - this.player2.x;

                if (targetDx > 20) {
                    this.player2.x += this.player2.getMovementSpeed() * this.aiFlagRunning.runSpeed;
                    this.player2.direction = 1;
                } else if (targetDx < -20) {
                    this.player2.x -= this.player2.getMovementSpeed() * this.aiFlagRunning.runSpeed;
                    this.player2.direction = -1;
                }

                // Jump frequently while running to be harder to catch
                if (this.player2.onGround && Math.random() < 0.15) { // 15% chance to jump each frame
                    this.player2.jump();
                }

                // Also jump if player is getting close
                if (distance < 150 && this.player2.onGround && Math.random() < 0.3) {
                    this.player2.jump();
                }

                return; // Skip normal AI behavior when holding flag
            }

            // If flag is available, GO FOR IT AGGRESSIVELY!
            if (gameState.flagCapture.flag && !gameState.flagCapture.flagHolder) {
                const flagDx = gameState.flagCapture.flag.x - this.player2.x;
                const flagDistance = Math.abs(flagDx);

                // AI going for flag - PRIORITIZE THIS!

                // Move towards flag at full speed
                if (flagDx > 20) {
                    this.player2.x += this.player2.getMovementSpeed() * 1.2; // 20% faster when going for flag
                    this.player2.direction = 1;
                } else if (flagDx < -20) {
                    this.player2.x -= this.player2.getMovementSpeed() * 1.2;
                    this.player2.direction = -1;
                }

                // Jump to reach flag if needed
                const flagDy = gameState.flagCapture.flag.y - this.player2.y;
                if (flagDy < -30 && this.player2.onGround) {
                    this.player2.jump();
                }

                // Jump more frequently when close to flag
                if (flagDistance < 100 && this.player2.onGround && Math.random() < 0.2) {
                    this.player2.jump();
                }

                // Always prioritize flag over everything else
                return; // Skip normal AI behavior when flag is available
            }
        }

        // IMMEDIATE PATHFINDING - Find best path to player and execute it
        const pathResult = this.findOptimalPathToPlayer();

        // Check if player has a dangerous item and AI should flee
        let shouldFlee = false;
        if (this.player1.heldItem) {
            const item = this.player1.heldItem;
            // Flee from powerful items
            if (item.data.type === 'legendary' ||
                item.data.type === 'explosive' ||
                item.data.type === 'instant' ||
                item.data.type === 'area' ||
                item.data.type === 'chaos' ||
                item.data.type === 'alpha' ||
                item.data.type === 'beta' ||
                item.name.includes('All Powers') ||
                item.name.includes('Nuclear') ||
                item.name.includes('Lightning') ||
                item.name.includes('Meteor')) {
                shouldFlee = true;
                console.log(`🏃 ${this.player2.char.name} is fleeing from ${item.name}!`);
            }
        }

        // Check for incoming projectiles and dodge them!
        let shouldDodge = false;
        this.projectiles.forEach(projectile => {
            if (projectile.owner === this.player1) {
                const projDistance = Math.abs(projectile.x - this.player2.x);
                const projApproaching = (projectile.velocity > 0 && projectile.x < this.player2.x) ||
                                        (projectile.velocity < 0 && projectile.x > this.player2.x);

                // Dodge if projectile is close and approaching (75% chance to dodge)
                if (projDistance < 150 && projApproaching && Math.random() < 0.75) {
                    shouldDodge = true;
                }
            }
        });
        
        // SMART ITEM COLLECTION AI - Prioritizes special dropped items!
        let targetItem = null;
        let closestItemDistance = Infinity;
        let itemPriority = 0;

        if (this.isSpecialDropMode && this.dropItems.length > 0) {
            this.dropItems.forEach(item => {
                if (item.onGround) { // Only go for items that have landed
                    const itemDistance = Math.abs(item.x - this.player2.x);

                    // Calculate item priority based on type and AI needs
                    let priority = this.calculateItemPriority(item);

                    // Prefer closer items, but prioritize by value
                    const adjustedScore = priority - (itemDistance / 100);

                    if (adjustedScore > itemPriority || (priority >= itemPriority && itemDistance < closestItemDistance)) {
                        closestItemDistance = itemDistance;
                        targetItem = item;
                        itemPriority = priority;
                    }
                }
            });
        }

        // ENHANCED PRIORITY SYSTEM: Items vs Combat
        let shouldGoForItem = false;
        if (targetItem && closestItemDistance < 300) {
            // Go for item based on priority and situation
            const playerFarAway = distance > 200;
            const lowHealth = (this.player2.health / this.player2.maxHealth) < 0.5;
            const highPriorityItem = itemPriority >= 8; // Special/legendary items
            const mediumPriorityItem = itemPriority >= 5; // Useful items
            const itemClose = closestItemDistance < 120;

            if (highPriorityItem || // Always go for high priority items
                (mediumPriorityItem && (playerFarAway || lowHealth)) ||
                (itemClose && playerFarAway)) {
                shouldGoForItem = true;
                console.log(`🎯 ${this.player2.char.name} prioritizing ${targetItem.name} (priority: ${itemPriority})`);
            }
        }
        
        // SMART PATHFINDING DECISION - AI uses pathfinding when needed
        let needsPathfinding = false;
        let pathfindingTarget = null;
        let useDirectMovement = false;

        if (!shouldFlee && !shouldGoForItem) {
            // Check if AI can reach player directly (no obstacles)
            const canReachDirectly = this.canReachPlayerDirectly();

            if (!canReachDirectly && pathResult) {
                needsPathfinding = true;
                pathfindingTarget = pathResult;
                console.log(`🧠 ${this.player2.char.name} using pathfinding to navigate around obstacles`);
            } else if (canReachDirectly) {
                useDirectMovement = true;
            } else {
                // No path found, try alternative movement
                useDirectMovement = true;
            }
        }

        // DODGING BEHAVIOR - Jump to avoid attacks!
        if (shouldDodge && this.player2.onGround) {
            this.player2.jump();
            console.log(`${this.player2.char.name} dodges attack!`);
        }
        
        // SMART ITEM COLLECTION MOVEMENT
        if (shouldGoForItem && targetItem) {
            const itemDx = targetItem.x - this.player2.x;
            const itemDy = targetItem.y - this.player2.y;
            const moveSpeed = this.player2.getMovementSpeed() + 1; // Move faster toward items

            if (Math.abs(itemDx) > 15) { // More precise movement
                if (itemDx > 0) {
                    this.player2.x += moveSpeed;
                    this.player2.direction = 1;
                } else {
                    this.player2.x -= moveSpeed;
                    this.player2.direction = -1;
                }
            }

            // Smart jumping for items on platforms or elevated positions
            if (itemDy < -30 && this.player2.onGround) {
                // Item is above, jump to reach it
                this.player2.jump();
                console.log(`🦘 ${this.player2.char.name} jumps to reach ${targetItem.name}!`);
            } else if (Math.abs(itemDx) < 50 && itemDy < -10 && this.player2.onGround && Math.random() < 0.4) {
                // Item is slightly above and close, jump with higher chance
                this.player2.jump();
            }
        } else if (shouldFlee) {
            // FLEEING BEHAVIOR - Run away from dangerous items!
            const fleeSpeed = this.player2.getMovementSpeed() + 1; // Move faster when fleeing
            const fleeDistance = 300; // Try to get this far away

            if (distance < fleeDistance) {
                // Run away from player
                if (dx > 0) {
                    // Player is to the right, flee left
                    this.player2.x -= fleeSpeed;
                    this.player2.direction = -1;
                } else {
                    // Player is to the left, flee right
                    this.player2.x += fleeSpeed;
                    this.player2.direction = 1;
                }

                // Jump to escape faster or reach higher platforms
                if (this.player2.onGround && Math.random() < 0.2) {
                    this.player2.jump();
                }

                // Try to find a platform to hide behind
                const escapePlatform = this.findEscapePlatform();
                if (escapePlatform && Math.random() < 0.1) {
                    const platformDx = escapePlatform.x - this.player2.x;
                    if (Math.abs(platformDx) > 20) {
                        if (platformDx > 0) {
                            this.player2.x += fleeSpeed;
                            this.player2.direction = 1;
                        } else {
                            this.player2.x -= fleeSpeed;
                            this.player2.direction = -1;
                        }
                    }
                }
            }
        } else if (needsPathfinding && pathfindingTarget) {
            // OPTIMAL PATHFINDING MOVEMENT - Execute calculated path immediately
            const targetDx = pathfindingTarget.x - this.player2.x;
            const targetDy = pathfindingTarget.y - this.player2.y;
            const moveSpeed = this.player2.getMovementSpeed() + 0.5; // Slightly faster pathfinding

            // Move toward the pathfinding target with precision
            if (Math.abs(targetDx) > 10) {
                if (targetDx > 0) {
                    this.player2.x += moveSpeed;
                    this.player2.direction = 1;
                } else {
                    this.player2.x -= moveSpeed;
                    this.player2.direction = -1;
                }
            }

            // Smart jumping based on path requirements
            if (this.player2.onGround) {
                // Jump if target is above and we're close horizontally
                if (Math.abs(targetDx) < 40 && targetDy < -20) {
                    this.player2.jump();
                    console.log(`🦘 ${this.player2.char.name} executes pathfinding jump!`);
                }
                // Also jump if we're very close to target platform
                else if (Math.abs(targetDx) < 25 && pathfindingTarget.type === 'platform') {
                    this.player2.jump();
                }
            }
        } else if (useDirectMovement) {
            // DIRECT MOVEMENT - AI moves directly toward player when path is clear
            const isCloseRange = this.player2.char.specialType === 'close';
            const preferredDistance = isCloseRange ? 80 : 200;
            const moveSpeed = this.player2.getMovementSpeed();

            // Always move toward player if too far
            if (distance > preferredDistance) {
                if (dx > 0) {
                    this.player2.x += moveSpeed;
                    this.player2.direction = 1;
                } else {
                    this.player2.x -= moveSpeed;
                    this.player2.direction = -1;
                }

                // Jump if player is above and AI is close horizontally
                if (verticalDistance > 50 && dy < 0 && distance < 100 && this.player2.onGround) {
                    this.player2.jump();
                    console.log(`🦘 ${this.player2.char.name} jumps to reach player above!`);
                }
            } else if (distance < (preferredDistance - 50) && !isCloseRange) {
                // Long-range fighters maintain distance
                if (dx > 0) {
                    this.player2.x -= Math.max(1, Math.floor(moveSpeed / 2));
                    this.player2.direction = 1;
                } else {
                    this.player2.x += Math.max(1, Math.floor(moveSpeed / 2));
                    this.player2.direction = -1;
                }
            }
        } else {
            // ALTERNATIVE MOVEMENT - When no clear path, try to get around obstacles
            const moveSpeed = this.player2.getMovementSpeed();

            // Try moving in the direction of the player
            if (Math.abs(dx) > 50) {
                if (dx > 0) {
                    this.player2.x += moveSpeed;
                    this.player2.direction = 1;
                } else {
                    this.player2.x -= moveSpeed;
                    this.player2.direction = -1;
                }
            }

            // Jump periodically to try to get over obstacles
            if (this.player2.onGround && Math.random() < 0.1) {
                this.player2.jump();
                console.log(`🦘 ${this.player2.char.name} jumps to navigate around obstacles!`);
            }
        }
        
        // ENHANCED ATTACK PATTERNS - More aggressive and intelligent
        // Don't attack when fleeing from dangerous items
        if (!shouldFlee) {
            const isCloseRange = this.player2.char.specialType === 'close';
            if (isCloseRange) {
                // Close-range fighters: Attack aggressively when close
                if (distance < 140) {
                    if (Math.random() < 0.025 && this.player2.canAttack) { // Increased from 0.015
                        this.player2.normalAttack();
                    }
                    if (Math.random() < 0.012 && this.player2.canSpecialAttack) { // Increased from 0.008
                        this.player2.specialAttack();
                    }
                }
            } else {
                // Long-range fighters: Attack from optimal distance
                if (distance > 80 && distance < 350) { // Wider range
                    if (Math.random() < 0.018 && this.player2.canAttack) { // Increased from 0.012
                        this.player2.normalAttack();
                    }
                    if (Math.random() < 0.009 && this.player2.canSpecialAttack) { // Increased from 0.006
                        this.player2.specialAttack();
                    }
                }
            }
        }

        // AGGRESSIVE MODE - When health is low, attack much more frequently
        const healthPercent = this.player2.health / this.player2.maxHealth;
        if (!shouldFlee && healthPercent < 0.4) { // Trigger earlier at 40% health
            if (Math.random() < 0.035 && this.player2.canAttack) { // Much more aggressive
                this.player2.normalAttack();
            }
            if (Math.random() < 0.018 && this.player2.canSpecialAttack) { // Much more aggressive
                this.player2.specialAttack();
            }
        }
        
        // INTELLIGENT AI ITEM USAGE - Uses items with perfect timing and strategy!
        if (this.player2.heldItem) {
            const item = this.player2.heldItem;
            const shouldUseItem = this.shouldAIUseItem(item, distance, healthPercent);

            if (shouldUseItem) {
                this.player2.useItem();
                console.log(`🧠 ${this.player2.char.name} strategically uses ${item.name}!`);
            }
        }
        
        // ANTI-STUCK SYSTEM - Prevent AI from getting stuck in one spot
        this.handleAIStuckPrevention(distance, verticalDistance);

        // PLATFORM JUMPING - AI tries to use platforms tactically
        if (!shouldFlee && !needsPathfinding && Math.random() < 0.008 && this.player2.onGround && distance > 120) {
            this.player2.jump();
            console.log(`🦘 ${this.player2.char.name} tactical platform jump!`);
        }
    }

    // PATHFINDING SYSTEM - Find the best platform to reach the player above
    findPathToReachPlayer() {
        if (!this.mapData || !this.mapData.platforms) return null;

        const playerX = this.player1.x;
        const playerY = this.player1.y;
        const aiX = this.player2.x;
        const aiY = this.player2.y;

        // Find platforms that could help reach the player
        let bestPlatform = null;
        let bestScore = -1;

        this.mapData.platforms.forEach(platform => {
            // Platform must be above AI and reachable
            if (platform.y < aiY - 20) {
                const platformCenterX = platform.x + platform.width / 2;
                const platformCenterY = platform.y;

                // Calculate if this platform gets us closer to the player
                const distanceToPlayer = Math.sqrt(
                    Math.pow(platformCenterX - playerX, 2) +
                    Math.pow(platformCenterY - playerY, 2)
                );

                const distanceFromAI = Math.abs(platformCenterX - aiX);
                const heightAdvantage = aiY - platformCenterY;

                // Score based on: closer to player, reachable from AI position, height advantage
                let score = 0;

                // Prefer platforms closer to player
                score += Math.max(0, 500 - distanceToPlayer);

                // Prefer platforms not too far from AI (reachable)
                if (distanceFromAI < 200) {
                    score += Math.max(0, 200 - distanceFromAI);
                } else {
                    score -= 100; // Penalty for unreachable platforms
                }

                // Prefer higher platforms (more height advantage)
                score += heightAdvantage * 2;

                // Bonus if platform is roughly between AI and player
                const playerDirection = playerX > aiX ? 1 : -1;
                const platformDirection = platformCenterX > aiX ? 1 : -1;
                if (playerDirection === platformDirection) {
                    score += 100;
                }

                if (score > bestScore) {
                    bestScore = score;
                    bestPlatform = {
                        x: platformCenterX,
                        y: platformCenterY,
                        platform: platform
                    };
                }
            }
        });

        return bestPlatform;
    }

    // ESCAPE PLATFORM FINDER - Find platforms to hide behind when fleeing
    findEscapePlatform() {
        if (!this.mapData || !this.mapData.platforms) return null;

        const playerX = this.player1.x;
        const aiX = this.player2.x;

        // Find platforms that are away from the player
        let bestEscape = null;
        let bestDistance = 0;

        this.mapData.platforms.forEach(platform => {
            const platformCenterX = platform.x + platform.width / 2;
            const distanceFromPlayer = Math.abs(platformCenterX - playerX);
            const distanceFromAI = Math.abs(platformCenterX - aiX);

            // Prefer platforms far from player but reachable from AI
            if (distanceFromPlayer > bestDistance && distanceFromAI < 150) {
                bestDistance = distanceFromPlayer;
                bestEscape = {
                    x: platformCenterX,
                    y: platform.y,
                    platform: platform
                };
            }
        });

        return bestEscape;
    }

    // OPTIMAL PATHFINDING - Finds the absolute best path to reach the player
    findOptimalPathToPlayer() {
        const dx = this.player1.x - this.player2.x;
        const dy = this.player1.y - this.player2.y;
        const distance = Math.abs(dx);
        const verticalDistance = Math.abs(dy);

        // Always try to find a path if player is not easily reachable
        if (distance < 80 && verticalDistance < 40) {
            return null; // Player is very close, no pathfinding needed
        }

        // Check if we need to go around obstacles or reach higher ground
        const needsPathfinding = verticalDistance > 60 || !this.canReachPlayerDirectly();

        if (!needsPathfinding) {
            return null; // Direct movement is sufficient
        }

        // Find best platform path - enhanced algorithm
        if (this.mapData && this.mapData.platforms) {
            let bestPath = null;
            let bestScore = -1;

            this.mapData.platforms.forEach(platform => {
                const platformCenterX = platform.x + platform.width / 2;
                const platformY = platform.y;

                // Calculate distances
                const distanceToPlayer = Math.sqrt(
                    Math.pow(platformCenterX - this.player1.x, 2) +
                    Math.pow(platformY - this.player1.y, 2)
                );
                const distanceFromAI = Math.abs(platformCenterX - this.player2.x);
                const heightAdvantage = this.player2.y - platformY;

                // Enhanced scoring system
                let score = 0;

                // Primary: Getting closer to player
                score += Math.max(0, 800 - distanceToPlayer);

                // Secondary: Reachability from AI position
                if (distanceFromAI < 100) {
                    score += 400; // Very reachable
                } else if (distanceFromAI < 200) {
                    score += 200; // Moderately reachable
                } else if (distanceFromAI < 300) {
                    score += 50; // Barely reachable
                }

                // Height advantage (prefer platforms that get us higher)
                if (heightAdvantage > 0) {
                    score += heightAdvantage * 4;
                }

                // Direction bonus - prefer platforms toward the player
                const playerDirection = this.player1.x > this.player2.x ? 1 : -1;
                const platformDirection = platformCenterX > this.player2.x ? 1 : -1;
                if (playerDirection === platformDirection) {
                    score += 300; // Big bonus for correct direction
                }

                // Bonus for platforms that help reach elevated players
                if (this.player1.y < this.player2.y - 50 && platformY < this.player2.y) {
                    score += 250; // Bonus for platforms that get us higher
                }

                // Only consider reachable platforms
                if (score > bestScore && distanceFromAI < 350) {
                    bestScore = score;
                    bestPath = {
                        x: platformCenterX,
                        y: platformY,
                        type: 'platform',
                        priority: Math.min(10, Math.floor(score / 100)),
                        platform: platform,
                        score: score
                    };
                }
            });

            if (bestPath) {
                console.log(`🎯 AI found optimal path via platform (score: ${bestPath.score})`);
            }

            return bestPath;
        }

        return null;
    }

    // DIRECT PATH CHECKER - Determines if AI can reach player without obstacles
    canReachPlayerDirectly() {
        const dx = this.player1.x - this.player2.x;
        const dy = this.player1.y - this.player2.y;
        const distance = Math.abs(dx);
        const verticalDistance = Math.abs(dy);

        // If player is on roughly the same level, direct movement should work
        if (verticalDistance < 60) {
            return true;
        }

        // If player is above but not too far, AI can try jumping
        if (dy < 0 && verticalDistance < 120 && distance < 150) {
            return true;
        }

        // Check if there are platforms blocking the direct path
        if (this.mapData && this.mapData.platforms) {
            const aiX = this.player2.x;
            const aiY = this.player2.y;
            const playerX = this.player1.x;
            const playerY = this.player1.y;

            // Check if any platform blocks the direct line between AI and player
            for (let platform of this.mapData.platforms) {
                // Simple line intersection check
                const platformLeft = platform.x;
                const platformRight = platform.x + platform.width;
                const platformTop = platform.y;
                const platformBottom = platform.y + platform.height;

                // Check if platform is between AI and player
                const minX = Math.min(aiX, playerX);
                const maxX = Math.max(aiX, playerX);
                const minY = Math.min(aiY, playerY);
                const maxY = Math.max(aiY, playerY);

                if (platformLeft < maxX && platformRight > minX &&
                    platformTop < maxY && platformBottom > minY) {
                    // Platform might be blocking, need pathfinding
                    return false;
                }
            }
        }

        return true; // No obstacles detected
    }

    // ITEM PRIORITY CALCULATOR - Determines how valuable an item is to the AI
    calculateItemPriority(item) {
        const healthPercent = this.player2.health / this.player2.maxHealth;
        let priority = 1;

        // Base priority by rarity
        switch(item.data.rarity) {
            case 'legendary': priority = 10; break;
            case 'epic': priority = 8; break;
            case 'rare': priority = 6; break;
            case 'uncommon': priority = 4; break;
            case 'common': priority = 2; break;
        }

        // Adjust based on item type and AI needs
        if (item.data.type === 'consumable' && healthPercent < 0.4) {
            priority += 5; // Healing is critical when low health
        } else if (item.data.type === 'weapon' || item.data.type === 'explosive') {
            priority += 3; // Weapons are always useful
        } else if (item.data.type === 'buff') {
            priority += 2; // Buffs are good
        } else if (item.data.type === 'instant' || item.data.type === 'area') {
            priority += 4; // Instant damage is valuable
        }

        // Special items get maximum priority
        if (item.name.includes('All Powers') ||
            item.name.includes('Nuclear') ||
            item.name.includes('Lightning') ||
            item.name.includes('Meteor') ||
            item.data.type === 'alpha' ||
            item.data.type === 'beta' ||
            item.data.type === 'chaos') {
            priority = 15; // Maximum priority for special items
        }

        return priority;
    }

    // INTELLIGENT ITEM USAGE - Determines optimal timing for item usage
    shouldAIUseItem(item, distance, healthPercent) {
        const itemData = item.data;
        const itemName = item.name.toLowerCase();

        // Healing items - use when health is low
        if (itemData.type === 'consumable' || itemName.includes('heal') || itemName.includes('health')) {
            return healthPercent < 0.6; // Use healing when below 60% health
        }

        // Buff items - use immediately for advantage
        if (itemData.type === 'buff' || itemName.includes('boost') || itemName.includes('power')) {
            return Math.random() < 0.15; // 15% chance per frame to use buffs
        }

        // Weapon/explosive items - use when in optimal range
        if (itemData.type === 'weapon' || itemData.type === 'explosive' || itemName.includes('bomb')) {
            return distance < 180 && Math.random() < 0.12; // Use weapons when close
        }

        // Instant damage items - use when player is in range
        if (itemData.type === 'instant' || itemName.includes('lightning') || itemName.includes('meteor')) {
            return distance < 200 && Math.random() < 0.1; // Use instant damage in range
        }

        // Area effect items - use when player is close
        if (itemData.type === 'area' || itemName.includes('nuclear') || itemName.includes('explosion')) {
            return distance < 150 && Math.random() < 0.08; // Use area effects when close
        }

        // Debuff items - use when close enough to affect player
        if (itemData.type === 'debuff' || itemName.includes('poison') || itemName.includes('slow')) {
            return distance < 160 && Math.random() < 0.1; // Use debuffs in range
        }

        // Special/legendary items - use strategically
        if (itemData.type === 'legendary' || itemData.type === 'alpha' || itemData.type === 'beta') {
            // Use when health is low OR when close to player
            return (healthPercent < 0.5 || distance < 120) && Math.random() < 0.05;
        }

        // Chaos items - use when desperate or when player is close
        if (itemData.type === 'chaos' || itemName.includes('chaos')) {
            return (healthPercent < 0.3 || distance < 100) && Math.random() < 0.03;
        }

        // Default - small chance to use any item
        return Math.random() < 0.02;
    }

    // ANTI-STUCK PREVENTION SYSTEM - Prevents AI from getting stuck in one spot
    handleAIStuckPrevention(distance, verticalDistance) {
        // Initialize stuck tracking if not exists
        if (!this.aiStuckTracker) {
            this.aiStuckTracker = {
                lastPosition: { x: this.player2.x, y: this.player2.y },
                stuckCounter: 0,
                lastMoveTime: Date.now()
            };
        }

        const currentTime = Date.now();
        const timeSinceLastMove = currentTime - this.aiStuckTracker.lastMoveTime;
        const positionChange = Math.abs(this.player2.x - this.aiStuckTracker.lastPosition.x) +
                                Math.abs(this.player2.y - this.aiStuckTracker.lastPosition.y);

        // Check if AI hasn't moved much in the last second
        if (timeSinceLastMove > 1000) {
            if (positionChange < 20 && distance > 100) {
                this.aiStuckTracker.stuckCounter++;
                console.log(`⚠️ AI might be stuck (counter: ${this.aiStuckTracker.stuckCounter})`);

                // Take action if stuck for too long
                if (this.aiStuckTracker.stuckCounter >= 3) {
                    this.executeUnstuckBehavior(distance, verticalDistance);
                    this.aiStuckTracker.stuckCounter = 0; // Reset counter
                }
            } else {
                this.aiStuckTracker.stuckCounter = Math.max(0, this.aiStuckTracker.stuckCounter - 1);
            }

            // Update tracking
            this.aiStuckTracker.lastPosition = { x: this.player2.x, y: this.player2.y };
            this.aiStuckTracker.lastMoveTime = currentTime;
        }
    }

    // UNSTUCK BEHAVIOR - Aggressive actions to get AI moving
    executeUnstuckBehavior(distance, verticalDistance) {
        console.log(`🚨 ${this.player2.char.name} executing unstuck behavior!`);

        const moveSpeed = this.player2.getMovementSpeed() + 2; // Move faster
        const dx = this.player1.x - this.player2.x;

        // Try multiple unstuck strategies
        const strategy = Math.floor(Math.random() * 4);

        switch(strategy) {
            case 0: // Aggressive jump toward player
                if (this.player2.onGround) {
                    this.player2.jump();
                    console.log(`🦘 Unstuck: Aggressive jump!`);
                }
                break;

            case 1: // Move in opposite direction then back
                if (dx > 0) {
                    this.player2.x -= moveSpeed * 2;
                    this.player2.direction = -1;
                } else {
                    this.player2.x += moveSpeed * 2;
                    this.player2.direction = 1;
                }
                console.log(`↔️ Unstuck: Reverse movement!`);
                break;

            case 2: // Try to find alternative platform
                const altPlatform = this.findAlternativePlatform();
                if (altPlatform) {
                    const platformDx = altPlatform.x - this.player2.x;
                    if (Math.abs(platformDx) > 20) {
                        if (platformDx > 0) {
                            this.player2.x += moveSpeed;
                            this.player2.direction = 1;
                        } else {
                            this.player2.x -= moveSpeed;
                            this.player2.direction = -1;
                        }
                    }
                    if (this.player2.onGround && altPlatform.y < this.player2.y) {
                        this.player2.jump();
                    }
                }
                console.log(`🎯 Unstuck: Alternative platform!`);
                break;

            case 3: // Direct aggressive movement toward player
                if (dx > 0) {
                    this.player2.x += moveSpeed * 1.5;
                    this.player2.direction = 1;
                } else {
                    this.player2.x -= moveSpeed * 1.5;
                    this.player2.direction = -1;
                }
                if (this.player2.onGround && Math.random() < 0.7) {
                    this.player2.jump();
                }
                console.log(`⚡ Unstuck: Direct aggressive movement!`);
                break;
        }
    }

    // ALTERNATIVE PLATFORM FINDER - Finds different platforms when stuck
    findAlternativePlatform() {
        if (!this.mapData || !this.mapData.platforms) return null;

        const aiX = this.player2.x;
        const aiY = this.player2.y;

        // Find any reachable platform that's different from current position
        for (let platform of this.mapData.platforms) {
            const platformCenterX = platform.x + platform.width / 2;
            const distanceFromAI = Math.abs(platformCenterX - aiX);

            // Look for platforms that are reachable but not too close to current position
            if (distanceFromAI > 50 && distanceFromAI < 200 && platform.y < aiY) {
                return {
                    x: platformCenterX,
                    y: platform.y,
                    platform: platform
                };
            }
        }

        return null;
    }

    initializeBackgroundGrid() {
        // Initialize a basic grid system
        const grid = [];
        const gridWidth = 20;
        const gridHeight = 15;
        
        for (let y = 0; y < gridHeight; y++) {
            grid[y] = [];
            for (let x = 0; x < gridWidth; x++) {
                grid[y][x] = {
                    color: this.mapData.bg,
                    customColor: false
                };
            }
        }
        
        return grid;
    }

    handleGridClick(x, y) {
        if (!this.showColorPicker) return;
        
        // Convert canvas coordinates to grid coordinates
        const gridX = Math.floor(x / (this.canvas.width / 20));
        const gridY = Math.floor(y / (this.canvas.height / 15));
        
        if (gridX >= 0 && gridX < 20 && gridY >= 0 && gridY < 15) {
            this.selectedGridSquare = { x: gridX, y: gridY };
            
            // Cycle through some basic colors
            const colors = ['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF', '#00FFFF', this.mapData.bg];
            const currentColorIndex = colors.indexOf(this.backgroundGrid[gridY][gridX].color);
            const nextColorIndex = (currentColorIndex + 1) % colors.length;
            
            this.backgroundGrid[gridY][gridX].color = colors[nextColorIndex];
            this.backgroundGrid[gridY][gridX].customColor = true;
        }
    }

    gameLoop() {
        if (this.gameRunning) {
            console.log('Game loop running - updating and rendering');
            this.update();
            this.render();
            requestAnimationFrame(() => this.gameLoop());
        } else {
            console.log('Game loop stopped - gameRunning is false');
        }
    }
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { Battle };
}
