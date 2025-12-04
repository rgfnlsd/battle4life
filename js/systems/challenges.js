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

function trackChallengeProgress(eventType, data = {}) {
    console.log(`🎯 trackChallengeProgress called! Event: ${eventType}`, data);

    if (!gameState.challengeStats) initializeChallengeTracking();

    // Update stats based on event type
    switch(eventType) {
        case 'damage_dealt':
            gameState.challengeStats.totalDamage += data.damage;
            break;
        case 'special_used':
            gameState.challengeStats.specialUses++;
            break;
        case 'battle_won':
            // Win streak tracking
            gameState.challengeStats.currentWinStreak++;
            gameState.challengeStats.maxWinStreak = Math.max(gameState.challengeStats.maxWinStreak, gameState.challengeStats.currentWinStreak);
            gameState.challengeStats.totalWins++;

            // Time-based wins
            if (data.timeRemaining > 60) gameState.challengeStats.quickWins++;
            if (data.timeRemaining > 75) gameState.challengeStats.ultraQuickWins++;

            // HP-based wins
            if (data.playerHP < data.playerMaxHP * 0.25) gameState.challengeStats.lowHpWins++;
            if (data.playerHP < data.playerMaxHP * 0.1) gameState.challengeStats.clutchWins++;
            if (data.playerHP === data.playerMaxHP) gameState.challengeStats.flawlessWins++;

            // Damage-based wins
            if (data.damageTaken <= 50) gameState.challengeStats.lowDamageWins++;
            if (data.damageTaken <= 100) gameState.challengeStats.mediumDamageWins++;
            if (data.damageTaken === 0) gameState.challengeStats.perfectWins++;
            gameState.challengeStats.damageTaken += data.damageTaken;

            // Comeback wins
            if (data.wasComeback) gameState.challengeStats.comebackWins++;

            // Enemy HP-based kills
            if (data.enemyHP >= 300) gameState.challengeStats.tankKills++;
            if (data.enemyHP >= 400) gameState.challengeStats.giantKills++;

            // Trophy-based achievements
            if (data.trophiesEarned >= 50) gameState.challengeStats.highTrophyBattles++;
            if (data.trophiesEarned >= 75) gameState.challengeStats.megaTrophyBattles++;
            if (data.trophiesEarned >= 100) gameState.challengeStats.ultraTrophyBattles++;
            gameState.challengeStats.trophiesEarned += data.trophiesEarned;

            // Character tracking
            if (!(gameState.challengeStats.charactersUsed instanceof Set)) {
                gameState.challengeStats.charactersUsed = new Set(gameState.challengeStats.charactersUsed || []);
            }
            if (!(gameState.challengeStats.raritiesWon instanceof Set)) {
                gameState.challengeStats.raritiesWon = new Set(gameState.challengeStats.raritiesWon || []);
            }
            gameState.challengeStats.charactersUsed.add(data.character);
            gameState.challengeStats.raritiesWon.add(data.rarity);

            // Rarity-specific wins
            if (data.rarity === 'common') gameState.challengeStats.commonWins++;
            if (data.rarity === 'rare') gameState.challengeStats.rareWins++;
            if (data.rarity === 'epic') gameState.challengeStats.epicWins++;
            if (data.rarity === 'legendary') gameState.challengeStats.legendaryWins++;

            // Underdog wins
            if (data.rarity === 'common' && (data.enemyRarity === 'epic' || data.enemyRarity === 'legendary')) {
                gameState.challengeStats.underdogWins++;
            }

            // Map tracking
            if (!(gameState.challengeStats.mapsWon instanceof Set)) {
                gameState.challengeStats.mapsWon = new Set(gameState.challengeStats.mapsWon || []);
            }
            gameState.challengeStats.mapsWon.add(data.map);
            if (data.map === 'volcano') gameState.challengeStats.volcanoWins++;
            if (data.map === 'space') gameState.challengeStats.spaceWins++;
            if (data.map === 'arena') gameState.challengeStats.arenaWins++;
            if (data.map === 'forest') gameState.challengeStats.forestWins++;

            break;
        case 'battle_lost':
            gameState.challengeStats.currentWinStreak = 0;
            break;
        case 'battle_started':
            gameState.challengeStats.battlesPlayed++;
            break;
        case 'badge_collected':
            gameState.challengeStats.badgesCollected++;
            if (data.rarity === 'legendary') gameState.challengeStats.legendaryBadges++;
            if (data.rarity === 'epic') gameState.challengeStats.epicBadges++;
            break;
        case 'coins_spent':
            gameState.challengeStats.coinsSpent += data.amount;
            break;
        case 'coins_earned':
            gameState.challengeStats.coinsEarned += data.amount;
            break;
        case 'chest_opened':
            gameState.challengeStats.chestsOpened++;
            if (data.type === 'addon') gameState.challengeStats.addonChestsOpened++;
            if (data.type === 'badge') gameState.challengeStats.badgeChestsOpened++;
            if (data.type === 'character') gameState.challengeStats.characterChestsOpened++;
            break;
        case 'character_collected':
            gameState.challengeStats.charactersCollected++;
            break;
        case 'addon_collected':
            gameState.challengeStats.addonsCollected++;
            break;
        case 'mode_played':
            if (!(gameState.challengeStats.modesPlayed instanceof Set)) {
                gameState.challengeStats.modesPlayed = new Set(gameState.challengeStats.modesPlayed || []);
            }
            gameState.challengeStats.modesPlayed.add(data.mode);
            break;
        case 'tournament_completed':
            gameState.challengeStats.tournamentsCompleted++;
            break;
        case 'tournament_won':
            gameState.challengeStats.tournamentsWon++;
            break;
        case 'character_customized':
            gameState.challengeStats.charactersCustomized.add(data.character);
            break;
        case 'badges_equipped':
            gameState.challengeStats.badgesEquippedCount++;
            break;
        case 'shop_visited':
            gameState.challengeStats.shopVisits++;
            break;
        case 'trophy_road_claimed':
            gameState.challengeStats.trophyRoadClaimed++;
            break;
    }

    // Check active challenges for completion
    gameState.challenges.forEach((challenge, index) => {
        let progress = 0;

        switch(challenge.type) {
            case 'damage':
                progress = gameState.challengeStats.totalDamage;
                break;
            case 'special_uses':
                progress = gameState.challengeStats.specialUses;
                break;
            case 'quick_wins':
                progress = gameState.challengeStats.quickWins;
                break;
            // Add more cases as needed - keeping it shorter for now
        }

        const validProgress = Number(progress) || 0;
        const validTarget = Number(challenge.target) || 1;
        challenge.progress = Math.min(validProgress, validTarget);

        if (challenge.progress >= challenge.target && !gameState.completedChallenges.includes(challenge.id)) {
            if (typeof completeChallenge === 'function') {
                completeChallenge(challenge, index);
            }
        }
    });
}

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

function recalculateAllChallengeProgress() {
    if (!gameState.challengeStats) initializeChallengeTracking();

    gameState.challenges.forEach((challenge, index) => {
        let progress = 0;

        switch(challenge.type) {
            case 'damage':
                progress = gameState.challengeStats.totalDamage;
                break;
            case 'special_uses':
                progress = gameState.challengeStats.specialUses;
                break;
            case 'quick_wins':
                progress = gameState.challengeStats.quickWins;
                break;
            case 'tank_kills':
                progress = gameState.challengeStats.tankKills;
                break;
            case 'low_hp_wins':
                progress = gameState.challengeStats.lowHpWins;
                break;
            case 'total_wins':
                progress = gameState.challengeStats.totalWins;
                break;
            case 'badges_collected':
                const currentBadges = gameState.gameMode === 'multiplayer'
                    ? (gameState.currentShopPlayer === 1 ? gameState.player1Badges : gameState.player2Badges) || []
                    : gameState.unlockedBadges || [];
                progress = currentBadges.length;
                break;
            case 'characters_collected':
                const playerChars = gameState.gameMode === 'multiplayer'
                    ? (gameState.currentShopPlayer === 1 ? gameState.player1Characters : gameState.player2Characters) || []
                    : gameState.unlockedCharacters || [];
                progress = playerChars.length;
                break;
            // Add more cases as needed
        }

        const validProgress = Number(progress) || 0;
        const validTarget = Number(challenge.target) || 1;
        challenge.progress = Math.min(validProgress, validTarget);
    });
}

function checkCompletedChallenges() {
    const completedChallenges = [];

    if (!gameState.challenges) {
        gameState.challenges = [];
    }
    if (!gameState.completedChallenges) {
        gameState.completedChallenges = [];
    }

    recalculateAllChallengeProgress();

    let challenges = gameState.challenges || [];

    challenges.forEach((challenge, index) => {
        if (challenge && challenge.claimed) {
            if (gameState.gameMode === 'multiplayer') {
                gameState.player1Coins = (gameState.player1Coins || 0) + challenge.reward;
                gameState.player2Coins = (gameState.player2Coins || 0) + challenge.reward;
                if (typeof updateMultiplayerCoinsDisplay === 'function') {
                    updateMultiplayerCoinsDisplay();
                }
            } else {
                gameState.coins = (gameState.coins || 0) + challenge.reward;
                if (typeof updateSinglePlayerCoinsDisplay === 'function') {
                    updateSinglePlayerCoinsDisplay();
                }
            }

            completedChallenges.push(challenge);
            console.log(`✅ Challenge completed: ${challenge.name} - Reward: ${challenge.reward} coins`);
        }
    });

    gameState.challenges = gameState.challenges.filter(c => c && !c.claimed);

    if (typeof saveGameState === 'function') {
        saveGameState();
    }

    return completedChallenges;
}

// Make functions globally available for onclick handlers
window.generateNewChallenge = generateNewChallenge;
window.trackChallengeProgress = trackChallengeProgress;
window.claimChallengeReward = claimChallengeReward;
window.showChallenges = showChallenges;
window.initializeChallengeTracking = initializeChallengeTracking;
window.recalculateAllChallengeProgress = recalculateAllChallengeProgress;
window.checkCompletedChallenges = checkCompletedChallenges;

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { generateNewChallenge, trackChallengeProgress, claimChallengeReward, showChallenges, initializeChallengeTracking, recalculateAllChallengeProgress, checkCompletedChallenges };
}
