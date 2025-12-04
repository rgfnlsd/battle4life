// Battle4Life - Configuration and Constants
// Version 2024-12-04

// Game configuration
const CONFIG = {
    VERSION: '2024-12-04',
    FPS: 60,
    CANVAS_WIDTH: window.innerWidth,
    CANVAS_HEIGHT: window.innerHeight,
    
    // Physics
    GRAVITY: 0.8,
    JUMP_FORCE: -15,
    MOVE_SPEED: 5,
    
    // Combat
    ATTACK_COOLDOWN: 30, // frames
    SPECIAL_COOLDOWN_BASE: 600, // frames (10 seconds)
    
    // AI
    AI_CHASE_DISTANCE: 300,
    AI_ATTACK_DISTANCE: 100,
    AI_DODGE_CHANCE: 0.05,
    AI_ATTACK_CHANCE: 0.015,
    AI_HEAL_THRESHOLD: 0.3,
    
    // Visual
    PARTICLE_MAX: 100,
    SCREEN_SHAKE_DURATION: 10,
    
    // Rarity colors
    RARITY_COLORS: {
        common: '#9e9e9e',
        rare: '#2196f3',
        epic: '#9c27b0',
        legendary: '#ff9800'
    },
    
    // Character stats by rarity
    RARITY_STATS: {
        common: { hp: [200, 250], reload: [13, 15] },
        rare: { hp: [250, 300], reload: [10, 12] },
        epic: { hp: [300, 350], reload: [8, 10] },
        legendary: { hp: [350, 400], reload: [6, 8] }
    },
    
    // Chest prices
    CHEST_PRICES: {
        common: 100,
        rare: 200,
        epic: 350,
        legendary: 600,
        mega: 750,
        guaranteed: 1200,
        choose: 1500
    },
    
    // Chest rarities
    CHEST_RARITIES: {
        common: { common: 0.70, rare: 0.25, epic: 0.04, legendary: 0.01 },
        rare: { common: 0.45, rare: 0.35, epic: 0.17, legendary: 0.03 },
        epic: { common: 0.35, rare: 0.35, epic: 0.20, legendary: 0.10 },
        legendary: { common: 0.30, rare: 0.25, epic: 0.20, legendary: 0.25 },
        mega: { common: 0.45, rare: 0.35, epic: 0.17, legendary: 0.03 },
        guaranteed: { common: 0.00, rare: 0.00, epic: 0.00, legendary: 1.00 }
    },
    
    // Tournament configuration
    TOURNAMENTS: {
        rookie: { fee: 25, rounds: 3, prize: 100, rarity: 'common' },
        pro: { fee: 50, rounds: 4, prize: 200, rarity: 'rare' },
        champion: { fee: 100, rounds: 5, prize: 500, rarity: 'epic' },
        legendary: { fee: 200, rounds: 6, prize: 1000, rarity: 'legendary' }
    },
    
    // Trophy road milestones
    TROPHY_MILESTONES: [
        0, 10, 25, 50, 100, 150, 200, 300, 400, 500,
        600, 750, 900, 1100, 1300, 1500, 1750, 2000, 2500, 3000
    ]
};

// Game modes
const GAME_MODES = {
    normal: {
        name: 'Normal',
        description: 'Classic battle mode',
        emoji: '⚔️'
    },
    special_drop: {
        name: 'Special Drop',
        description: 'Items drop every 15 seconds',
        emoji: '📦'
    },
    flag_capture: {
        name: 'Flag Capture',
        description: 'Capture and hold the flag!',
        emoji: '🏁'
    },
    boss_battle: {
        name: 'Boss Battle',
        description: '2 players vs 1 powerful boss',
        emoji: '👹'
    }
};

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { CONFIG, GAME_MODES };
}

