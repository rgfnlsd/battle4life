// Battle4Life - Boss Class
// Auto-extracted from script.js

class Boss {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.width = 120; // Much larger than normal fighters
        this.height = 120;
        this.maxHealth = 2000; // Very high HP
        this.health = this.maxHealth;
        this.damage = 160; // 2x damage (was 80)
        this.specialDamage = 300; // 2x special damage (was 150)
        this.speed = 4; // 2x speed (was 2)
        this.direction = -1; // Start facing left
        this.velocityY = 0;
        this.onGround = false;
        this.jumpPower = -20;

        // Boss appearance
        this.emoji = '🐉'; // Dragon boss
        this.name = 'Ancient Dragon';
        this.color = '#8B0000';

        // Attack cooldowns - 2x faster attacks
        this.canAttack = true;
        this.attackCooldown = 0;
        this.canSpecialAttack = true;
        this.specialAttackCooldown = 0;
        this.reloadTime = 1000; // 1 second normal attack cooldown (was 2000)
        this.specialReloadTime = 2500; // 2.5 second special attack cooldown (was 5000)

        // Boss special abilities
        this.rageMode = false;
        this.rageModeThreshold = 0.3; // Activate rage at 30% HP
        this.shakeMode = false;
        this.shakeModeThreshold = 0.25; // Activate screen shake at 25% HP
        this.lastAttackTime = 0;
        this.attackPattern = 0; // Cycle through different attack patterns

        // Boss phases
        this.phase = 1; // Start in phase 1
        this.phaseTransition = false;

        console.log(`🐉 Boss created: ${this.name} with ${this.maxHealth} HP`);
    }

    update() {
        // Apply gravity
        this.velocityY += 0.8;
        this.y += this.velocityY;

        // Platform collision (if battle is initialized)
        if (gameState.battle && gameState.battle.mapData && gameState.battle.mapData.platforms) {
            for (let platform of gameState.battle.mapData.platforms) {
                // Check if boss is falling onto platform
                if (this.velocityY > 0 &&
                    this.x + this.width > platform.x &&
                    this.x < platform.x + platform.width &&
                    this.y + this.height > platform.y &&
                    this.y + this.height < platform.y + platform.height + this.velocityY) {

                    this.y = platform.y - this.height;
                    this.velocityY = 0;
                    this.onGround = true;
                    break;
                }
            }
        }

        // Ground collision
        const groundLevel = gameState.battle ? gameState.battle.groundLevel : (window.innerHeight - 120);
        if (this.y >= groundLevel - this.height) {
            this.y = groundLevel - this.height;
            this.velocityY = 0;
            this.onGround = true;
        } else if (!this.onGround) {
            this.onGround = false;
        }

        // Update attack cooldowns
        if (!this.canAttack && this.attackCooldown > 0) {
            this.attackCooldown -= 16.67;
            if (this.attackCooldown <= 0) {
                this.canAttack = true;
            }
        }

        if (!this.canSpecialAttack && this.specialAttackCooldown > 0) {
            this.specialAttackCooldown -= 16.67;
            if (this.specialAttackCooldown <= 0) {
                this.canSpecialAttack = true;
            }
        }

        // Check for rage mode
        if (!this.rageMode && this.health <= this.maxHealth * this.rageModeThreshold) {
            this.enterRageMode();
        }

        // Check for shake mode (25% HP)
        if (!this.shakeMode && this.health <= this.maxHealth * this.shakeModeThreshold) {
            this.enterShakeMode();
        }

        // Check for phase transitions
        if (this.phase === 1 && this.health <= this.maxHealth * 0.66) {
            this.enterPhase2();
        } else if (this.phase === 2 && this.health <= this.maxHealth * 0.33) {
            this.enterPhase3();
        }

        // AI behavior
        this.updateAI();
    }

    enterRageMode() {
        this.rageMode = true;
        this.damage *= 1.5; // 50% more damage
        this.specialDamage *= 1.5;
        this.speed *= 1.3; // 30% faster
        this.reloadTime *= 0.7; // 30% faster attacks
        this.specialReloadTime *= 0.7;
        console.log(`🔥 ${this.name} enters RAGE MODE!`);
        showNotification(`🔥 BOSS RAGE MODE ACTIVATED!`);
    }

    enterShakeMode() {
        this.shakeMode = true;
        console.log(`💥 ${this.name} is critically wounded! Screen shaking!`);
        showNotification(`💥 BOSS CRITICAL! SCREEN SHAKE!`);
    }

    enterPhase2() {
        this.phase = 2;
        this.phaseTransition = true;
        setTimeout(() => this.phaseTransition = false, 2000);
        console.log(`⚡ ${this.name} enters Phase 2!`);
        showNotification(`⚡ BOSS PHASE 2!`);
    }

    enterPhase3() {
        this.phase = 3;
        this.phaseTransition = true;
        setTimeout(() => this.phaseTransition = false, 2000);
        this.emoji = '🔥'; // Change appearance in final phase
        console.log(`💀 ${this.name} enters FINAL PHASE!`);
        showNotification(`💀 BOSS FINAL PHASE!`);
    }

    updateAI() {
        // Don't move during phase transitions
        if (this.phaseTransition) return;

        // Safety check - make sure battle is initialized
        if (!gameState.battle || !gameState.battle.player1 || !gameState.battle.player2) {
            return;
        }

        // Find closest player
        const player1 = gameState.battle.player1;
        const player2 = gameState.battle.player2;

        const dist1 = Math.abs(this.x - player1.x);
        const dist2 = Math.abs(this.x - player2.x);

        const target = dist1 < dist2 ? player1 : player2;
        const distance = Math.abs(this.x - target.x);

        // Movement AI
        if (distance > 150) {
            // Move toward closest player
            if (target.x > this.x) {
                this.x += this.speed;
                this.direction = 1;
            } else {
                this.x -= this.speed;
                this.direction = -1;
            }
        }

        // Jump if target is above
        if (target.y < this.y - 50 && this.onGround && Math.random() < 0.02) {
            this.jump();
        }

        // Attack patterns based on phase
        if (this.canAttack && distance < 200) {
            if (this.phase === 1) {
                // Phase 1: Basic attacks
                if (Math.random() < 0.015) {
                    this.normalAttack();
                }
            } else if (this.phase === 2) {
                // Phase 2: More aggressive
                if (Math.random() < 0.025) {
                    this.normalAttack();
                }
            } else if (this.phase === 3) {
                // Phase 3: Very aggressive
                if (Math.random() < 0.035) {
                    this.normalAttack();
                }
            }
        }

        // Special attacks
        if (this.canSpecialAttack && distance < 250) {
            const specialChance = this.phase === 1 ? 0.005 : this.phase === 2 ? 0.008 : 0.012;
            if (Math.random() < specialChance) {
                this.specialAttack();
            }
        }
    }

    jump() {
        if (this.onGround) {
            this.velocityY = this.jumpPower;
            this.onGround = false;
        }
    }

    normalAttack() {
        if (!this.canAttack) return;

        // Safety check - make sure battle is initialized
        if (!gameState.battle || !gameState.battle.projectiles) {
            return;
        }

        // Create multiple projectiles for boss
        const projectileCount = this.phase;
        for (let i = 0; i < projectileCount; i++) {
            const angle = (i - (projectileCount - 1) / 2) * 0.3; // Spread projectiles
            const projectile = new Projectile(
                this.x + (this.direction > 0 ? this.width : 0),
                this.y + this.height / 2 + (i * 20),
                this.direction * 6 * Math.cos(angle),
                this.damage,
                this.color,
                this
            );
            projectile.velocityY = -3 * Math.sin(angle); // Add vertical component
            gameState.battle.projectiles.push(projectile);
        }

        this.canAttack = false;
        this.attackCooldown = this.reloadTime;
        console.log(`🐉 Boss normal attack: ${this.damage} damage x${projectileCount}`);
    }

    specialAttack() {
        if (!this.canSpecialAttack) return;

        // Safety check - make sure battle is initialized
        if (!gameState.battle || !gameState.battle.projectiles) {
            return;
        }

        // Boss special: Fire breath in wide arc
        const projectileCount = 5 + this.phase * 2; // More projectiles in later phases
        for (let i = 0; i < projectileCount; i++) {
            const angle = (i / (projectileCount - 1) - 0.5) * Math.PI * 0.6; // 60 degree arc
            const projectile = new Projectile(
                this.x + this.width / 2,
                this.y + this.height / 2,
                8 * Math.cos(angle) * this.direction,
                this.specialDamage,
                '#FF4500', // Orange fire color
                this
            );
            projectile.velocityY = -8 * Math.sin(angle);
            gameState.battle.projectiles.push(projectile);
        }

        this.canSpecialAttack = false;
        this.specialAttackCooldown = this.specialReloadTime;
        console.log(`🔥 Boss FIRE BREATH: ${this.specialDamage} damage x${projectileCount}!`);
        showNotification(`🔥 BOSS FIRE BREATH!`);
    }

    takeDamage(damage, attacker) {
        this.health -= damage;
        console.log(`🐉 Boss takes ${damage} damage! HP: ${this.health}/${this.maxHealth}`);

        if (this.health <= 0) {
            this.health = 0;
            console.log(`💀 Boss defeated!`);
            // Safety check before calling endBossBattle
            if (gameState.battle && gameState.battle.endBossBattle) {
                gameState.battle.endBossBattle(true); // Players win
            }
        }
    }

    draw(ctx) {
        // Boss body (larger rectangle)
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);

        // Boss emoji (much larger)
        ctx.font = '80px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';

        // Phase transition effect
        if (this.phaseTransition) {
            ctx.fillStyle = '#FFFFFF';
            ctx.shadowColor = '#FFFFFF';
            ctx.shadowBlur = 20;
        } else if (this.rageMode) {
            ctx.fillStyle = '#FF0000';
            ctx.shadowColor = '#FF0000';
            ctx.shadowBlur = 10;
        } else {
            ctx.fillStyle = '#FFFFFF';
            ctx.shadowBlur = 0;
        }

        ctx.fillText(this.emoji, this.x + this.width / 2, this.y + this.height / 2);
        ctx.shadowBlur = 0;

        // Boss health bar (large, at top of screen)
        const barWidth = 600;
        const barHeight = 30;
        const barX = (ctx.canvas.width - barWidth) / 2;
        const barY = 50;

        // Background
        ctx.fillStyle = '#333333';
        ctx.fillRect(barX - 5, barY - 5, barWidth + 10, barHeight + 10);

        // Health bar background
        ctx.fillStyle = '#660000';
        ctx.fillRect(barX, barY, barWidth, barHeight);

        // Health bar fill
        const healthPercent = this.health / this.maxHealth;
        let barColor = '#00FF00';
        if (healthPercent < 0.66) barColor = '#FFFF00';
        if (healthPercent < 0.33) barColor = '#FF0000';

        ctx.fillStyle = barColor;
        ctx.fillRect(barX, barY, barWidth * healthPercent, barHeight);

        // Boss name and phase
        ctx.font = '24px Arial';
        ctx.fillStyle = '#FFFFFF';
        ctx.textAlign = 'center';
        ctx.fillText(`${this.name} - Phase ${this.phase}${this.rageMode ? ' (RAGE)' : ''}`,
                    ctx.canvas.width / 2, barY - 15);

        // Health text
        ctx.font = '18px Arial';
        ctx.fillStyle = '#FFFFFF';
        ctx.fillText(`${this.health}/${this.maxHealth} HP`, ctx.canvas.width / 2, barY + barHeight + 25);
    }
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { Boss };
}
