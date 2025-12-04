// Battle4Life - Projectile Classes
// Auto-extracted from script.js

class Projectile {
    constructor(x, y, velocity, damage, color, owner) {
        this.x = x;
        this.y = y;
        this.velocity = velocity;
        this.damage = damage;
        this.color = color;
        this.owner = owner;
        // Make normal projectiles smaller for better gameplay
        const screenScale = Math.min(window.innerWidth / 800, window.innerHeight / 600);
        const scaledSize = Math.floor(8 * screenScale); // Smaller normal shots
        this.width = Math.max(8, scaledSize); // Minimum size of 8
        this.height = Math.max(8, scaledSize);
    }

    update() {
        this.x += this.velocity;
    }

    draw(ctx) {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
        
        // Glow effect
        ctx.shadowColor = this.color;
        ctx.shadowBlur = 10;
        ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.shadowBlur = 0;
    }
}

class HeadProjectile extends Projectile {
    constructor(x, y, velocity, damage, color, owner, emoji) {
        super(x, y, velocity, damage, color, owner);
        this.emoji = emoji;
        this.rotation = 0;
        // Make head projectiles much bigger as they're special attacks
        const screenScale = Math.min(window.innerWidth / 800, window.innerHeight / 600);
        const scaledSize = Math.floor(40 * screenScale * 2.2); // Much bigger head projectiles
        this.width = Math.max(45, scaledSize); // Minimum size of 45
        this.height = Math.max(45, scaledSize);
        this.maxDistance = 400; // How far the head can travel before disappearing
        this.startX = x;


    }

    update() {
        // Spinning rotation effect
        this.rotation += 0.3;

        // Normal projectile movement
        this.x += this.velocity;

        // Check if we've traveled max distance or gone out of bounds
        const screenWidth = gameState.battle ? gameState.battle.canvas.width : window.innerWidth;
        if (Math.abs(this.x - this.startX) >= this.maxDistance ||
            this.x < -50 || this.x > screenWidth + 50) {
            // Head disappears and immediately restores to owner
            this.owner.headFlying = false;
            this.shouldBeRemoved = true;
        }
    }

    draw(ctx) {
        ctx.save();
        
        // Translate to projectile center for rotation
        ctx.translate(this.x + this.width / 2, this.y + this.height / 2);
        ctx.rotate(this.rotation);
        
        // Draw spinning head emoji with glow effect
        ctx.shadowColor = this.color;
        ctx.shadowBlur = 15;
        ctx.font = 'bold 24px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillStyle = '#ffffff';
        ctx.fillText(this.emoji, 0, 0);
        
        ctx.restore();
    }

    // Override collision to immediately restore head
    onHit() {
        // FLAG CAPTURE MODE - Special attack stuns the target
        if (gameState.battle && gameState.battle.isFlagCaptureMode) {
            // Determine which player was hit
            const target = this.owner === gameState.battle.player1 ? gameState.battle.player2 : gameState.battle.player1;
            const targetPlayer = target === gameState.battle.player1 ? 'player1' : 'player2';

            // Stun the target
            gameState.battle.stunPlayer(targetPlayer);
        }

        // Head disappears immediately after hit and restores to owner
        this.owner.headFlying = false;
        this.shouldBeRemoved = true;
    }
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { Projectile, HeadProjectile, BombProjectile };
}
