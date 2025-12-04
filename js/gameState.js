// Battle4Life - Game State Management
// Handles all persistent game state and localStorage

const gameState = {
    // Game mode
    gameMode: 'singleplayer', // 'singleplayer' or 'multiplayer'
    selectedBattleMode: 'normal',
    
    // Single player data
    coins: 100,
    unlockedCharacters: ['Ninja', 'Samurai', 'Knight'],
    selectedCharacter: 'Ninja',
    unlockedBadges: [],
    equippedBadges: [],
    
    // Multiplayer data
    player1Coins: 75,
    player2Coins: 75,
    player1Characters: ['Ninja', 'Samurai', 'Knight'],
    player2Characters: ['Ninja', 'Samurai', 'Knight'],
    player1SelectedCharacter: 'Ninja',
    player2SelectedCharacter: 'Samurai',
    player1Badges: [],
    player2Badges: [],
    player1EquippedBadges: [],
    player2EquippedBadges: [],
    
    // Battle state
    battle: null,
    currentShopPlayer: 1,
    
    // Tournament state
    tournamentMode: false,
    tournamentData: null,
    tournament2PlayerMode: false,
    tournament2PlayerData: null,
    
    // Trophy road (single player only)
    trophies: 0,
    claimedMilestones: [],
    
    // Challenges
    challenges: [],
    challengeStats: {
        battles_won: 0,
        damage_dealt: 0,
        special_attacks_used: 0,
        items_used: 0,
        perfect_wins: 0,
        coins_earned: 0,
        coins_spent: 0,
        chest_opened: 0,
        character_collected: 0,
        badge_collected: 0,
        shop_visited: 0,
        charactersUsed: new Set(),
        raritiesWon: new Set(),
        mapsWon: new Set(),
        modesPlayed: new Set()
    },
    
    // Addons (cosmetics)
    unlockedAddons: [],
    characterEquippedAddons: {}, // Per-character addon storage
    
    // Flag capture state
    flagCapture: {
        flag: null,
        holder: null,
        holdTime: 0,
        requiredHoldTime: 900 // 15 seconds at 60 FPS
    },
    
    // Choose chest state
    chooseChestAvailableChars: [],
    chooseChestAvailableBadges: []
};

// Helper function to convert arrays to Sets when loading from localStorage
function toSet(arr) {
    return new Set(arr || []);
}

// Save game state to localStorage
function saveGameState() {
    try {
        const stateToSave = {
            ...gameState,
            challengeStats: {
                ...gameState.challengeStats,
                charactersUsed: Array.from(gameState.challengeStats.charactersUsed),
                raritiesWon: Array.from(gameState.challengeStats.raritiesWon),
                mapsWon: Array.from(gameState.challengeStats.mapsWon),
                modesPlayed: Array.from(gameState.challengeStats.modesPlayed)
            },
            battle: null // Don't save battle instance
        };
        localStorage.setItem('battle4life_gameState', JSON.stringify(stateToSave));
    } catch (error) {
        console.error('Error saving game state:', error);
    }
}

// Load game state from localStorage
function loadGameState() {
    try {
        const saved = localStorage.getItem('battle4life_gameState');
        if (saved) {
            const parsed = JSON.parse(saved);
            Object.assign(gameState, parsed);
            
            // Convert arrays back to Sets
            if (gameState.challengeStats) {
                gameState.challengeStats.charactersUsed = toSet(gameState.challengeStats.charactersUsed);
                gameState.challengeStats.raritiesWon = toSet(gameState.challengeStats.raritiesWon);
                gameState.challengeStats.mapsWon = toSet(gameState.challengeStats.mapsWon);
                gameState.challengeStats.modesPlayed = toSet(gameState.challengeStats.modesPlayed);
            }
            
            // Ensure arrays exist
            if (!gameState.unlockedBadges) gameState.unlockedBadges = [];
            if (!gameState.equippedBadges) gameState.equippedBadges = [];
            if (!gameState.player1Badges) gameState.player1Badges = [];
            if (!gameState.player2Badges) gameState.player2Badges = [];
            if (!gameState.player1EquippedBadges) gameState.player1EquippedBadges = [];
            if (!gameState.player2EquippedBadges) gameState.player2EquippedBadges = [];
            if (!gameState.unlockedAddons) gameState.unlockedAddons = [];
            if (!gameState.characterEquippedAddons) gameState.characterEquippedAddons = {};
            if (!gameState.claimedMilestones) gameState.claimedMilestones = [];
            if (!gameState.challenges) gameState.challenges = [];
        }
    } catch (error) {
        console.error('Error loading game state:', error);
    }
}

// Reset game state
function resetGameState() {
    if (confirm('Are you sure you want to reset your account? This will delete all progress!')) {
        localStorage.removeItem('battle4life_gameState');
        location.reload();
    }
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { gameState, saveGameState, loadGameState, resetGameState, toSet };
}

