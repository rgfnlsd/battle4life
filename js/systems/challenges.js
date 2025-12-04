// Battle4Life - Challenge System
// Auto-extracted from script.js

function generateNewChallenge() {
    if (gameState.challenges.length >= 3) return; // Max 3 active challenges
    
    const availableChallenges = challengeTypes.filter(challenge => 
        !gameState.challenges.find(active => active.id === challenge.id) &&
        !gameState.completedChallenges.includes(challenge.id)
    );
    
    if (availableChallenges.length === 0) return;
    
    const newChallenge = availableChallenges[Math.floor(Math.random() * availableChallenges.length)];

    // Ensure all challenge properties are valid to prevent NaN
    gameState.challenges.push({
        ...newChallenge,
        progress: 0,
        target: Number(newChallenge.target) || 1,
        reward: Number(newChallenge.reward) || 0,
        dateAdded: Date.now()
    });

    console.log(`New challenge added: ${newChallenge.name}`);

    // Save game state
    saveGameState();
}

function trackChallengeProgress(eventType, data = {}

function showChallenges() {
    updateChallengesPlayerInfo();
    updateChallengesDisplay();
    showScreen('challengesScreen');
}

function initializeChallengeTracking() {
    if (!gameState.challengeProgress) {
        gameState.challengeProgress = {};
    }
    if (!gameState.challengeStats) {
        gameState.challengeStats = {
            // Existing stats
            totalDamage: 0,
            specialUses: 0,
            quickWins: 0,
            tankKills: 0,
            lowHpWins: 0,
            lowDamageWins: 0,
            perfectWins: 0,
            comebackWins: 0,
            currentWinStreak: 0,
            maxWinStreak: 0,
            charactersUsed: new Set(),
            raritiesWon: new Set(),
            underdogWins: 0,
            trophiesEarned: 0,
            highTrophyBattles: 0,
            mapsWon: new Set(),
            volcanoWins: 0,
            spaceWins: 0,
            badgesCollected: 0,
            legendaryBadges: 0,
            coinsSpent: 0,
            chestsOpened: 0,
            characterWins: {},

            // NEW STATS FOR 50 NEW CHALLENGES
            ultraQuickWins: 0, // Wins in under 15 seconds
            giantKills: 0, // Enemies with 400+ HP
            clutchWins: 0, // Wins with less than 10% HP
            damageTaken: 0, // Total damage taken
            mediumDamageWins: 0, // Wins taking less than 100 damage
            totalWins: 0, // Total battles won
            commonWins: 0, // Wins with common characters
            rareWins: 0, // Wins with rare characters
            epicWins: 0, // Wins with epic characters
            legendaryWins: 0, // Wins with legendary characters
            megaTrophyBattles: 0, // 75+ trophies in one battle
            ultraTrophyBattles: 0, // 100+ trophies in one battle
            arenaWins: 0, // Wins on Arena map
            forestWins: 0, // Wins on Forest map
            epicBadges: 0, // Epic badges collected
            coinsEarned: 0, // Total coins earned
            battlesPlayed: 0, // Total battles played
            flawlessWins: 0, // Wins with 100% HP

            // OUT-OF-GAME STATS
            charactersCollected: 0, // Total characters unlocked
            addonsCollected: 0, // Total addons unlocked
            modesPlayed: new Set(), // Different game modes played
            tournamentsCompleted: 0, // Tournaments completed
            tournamentsWon: 0, // Tournaments won
            charactersCustomized: new Set(), // Characters with addons equipped
            badgesEquippedCount: 0, // Times equipped 3 badges
            shopVisits: 0, // Times visited shop
            addonChestsOpened: 0, // Addon chests opened
            badgeChestsOpened: 0, // Badge chests opened
            characterChestsOpened: 0, // Character chests opened
            trophyRoadClaimed: 0 // Trophy road rewards claimed
        };
    }
    
    // Initialize challenges as empty - only unlock from trophy road!
    if (!gameState.challenges) {
        gameState.challenges = [];
    }
    if (!gameState.completedChallenges) {
        gameState.completedChallenges = [];
    }
}

// Make functions globally available for onclick handlers
window.generateNewChallenge = generateNewChallenge;
window.trackChallengeProgress = trackChallengeProgress;
window.claimChallengeReward = claimChallengeReward;
window.showChallenges = showChallenges;
window.initializeChallengeTracking = initializeChallengeTracking;

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { generateNewChallenge, trackChallengeProgress, claimChallengeReward, showChallenges, initializeChallengeTracking };
}
