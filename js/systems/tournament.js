// Battle4Life - Tournament System
// Auto-extracted from script.js

function startTournament(tournamentType) {
    // Tournament configurations with character tiers and reduced rewards
    const tournaments = {
        rookie: {
            name: 'Rookie Tournament',
            entryFee: 25,
            prizePool: 75,
            rounds: 3,
            roundNames: ['Quarterfinal', 'Semifinal', 'Final'],
            characterTier: 'common',
            seriesLength: 3 // First to win 3 games
        },
        pro: {
            name: 'Pro Tournament',
            entryFee: 50,
            prizePool: 200,
            rounds: 4,
            roundNames: ['Round of 16', 'Quarterfinal', 'Semifinal', 'Final'],
            characterTier: 'rare',
            seriesLength: 3
        },
        champion: {
            name: 'Champion Tournament',
            entryFee: 100,
            prizePool: 500,
            rounds: 5,
            roundNames: ['Round of 32', 'Round of 16', 'Quarterfinal', 'Semifinal', 'Final'],
            characterTier: 'epic',
            seriesLength: 3
        },
        legendary: {
            name: 'Legendary Tournament',
            entryFee: 200,
            prizePool: 1000,
            rounds: 6,
            roundNames: ['Round of 64', 'Round of 32', 'Round of 16', 'Quarterfinal', 'Semifinal', 'Final'],
            characterTier: 'legendary',
            seriesLength: 3
        }
    };

    const tournament = tournaments[tournamentType];
    if (!tournament) return;

    // Check if player has enough coins
    let playerCoins;
    if (gameState.gameMode === 'multiplayer') {
        playerCoins = gameState.currentShopPlayer === 1 ? gameState.player1Coins : gameState.player2Coins;
    } else {
        playerCoins = gameState.coins;
    }

    if (playerCoins < tournament.entryFee) {
        showNotification(`❌ Not enough coins!\nYou need ${tournament.entryFee} coins to enter this tournament.\nYou have ${playerCoins} coins.`);
        return;
    }

    // Deduct entry fee
    if (gameState.gameMode === 'multiplayer') {
        if (gameState.currentShopPlayer === 1) {
            gameState.player1Coins = safeCoins(gameState.player1Coins - tournament.entryFee);
        } else {
            gameState.player2Coins = safeCoins(gameState.player2Coins - tournament.entryFee);
        }
        updateMultiplayerCoinsDisplay();
    } else {
        gameState.coins = safeCoins(gameState.coins - tournament.entryFee);
        updateSinglePlayerCoinsDisplay();
    }

    // Initialize tournament
    gameState.tournamentMode = true;
    // Force normal battle mode for tournaments
    gameState.selectedBattleMode = 'normal';
    gameState.tournamentData = {
        type: tournamentType,
        name: tournament.name,
        entryFee: tournament.entryFee,
        currentRound: 0,
        totalRounds: tournament.rounds,
        roundNames: tournament.roundNames,
        prizePool: tournament.prizePool,
        characterTier: tournament.characterTier,
        seriesLength: tournament.seriesLength,
        isActive: true,
        roundsWon: 0,
        currentSeries: {
            playerWins: 0,
            opponentWins: 0,
            gamesPlayed: 0,
            playerCharacter: null,
            opponentCharacter: null
        },
        bracket: generateTournamentBracket(tournament.rounds, tournament.characterTier)
    };

    console.log(`🏆 Tournament started: ${tournament.name}`);
    console.log(`💰 Entry fee deducted: ${tournament.entryFee} coins`);
    console.log(`🎯 Prize pool: ${tournament.prizePool} coins`);

    updateTournamentStatus();
    updateUniversalCoinsDisplay();

    // Show tournament screen with start button
    showNotification(`🏆 ${tournament.name} Started!\n💰 Entry fee: ${tournament.entryFee} coins paid\n🎯 Prize pool: ${tournament.prizePool} coins\n\nClick "Start Round" to begin!`);

    // Stay on tournament screen - user will click "Start Round" button
    showTournamentSelect();
}

function start2PlayerTournament(tournamentType) {
    // Tournament configurations for 2-player mode
    const tournaments = {
        rookie: {
            name: 'Rookie 2P Tournament',
            entryFee: 25,
            prizePool: 100,
            rounds: 3,
            roundNames: ['Quarterfinal', 'Semifinal', 'Final'],
            characterTier: 'common',
            seriesLength: 3
        },
        pro: {
            name: 'Pro 2P Tournament',
            entryFee: 50,
            prizePool: 300,
            rounds: 4,
            roundNames: ['Round of 16', 'Quarterfinal', 'Semifinal', 'Final'],
            characterTier: 'rare',
            seriesLength: 3
        },
        champion: {
            name: 'Champion 2P Tournament',
            entryFee: 100,
            prizePool: 750,
            rounds: 5,
            roundNames: ['Round of 32', 'Round of 16', 'Quarterfinal', 'Semifinal', 'Final'],
            characterTier: 'epic',
            seriesLength: 3
        },
        legendary: {
            name: 'Legendary 2P Tournament',
            entryFee: 200,
            prizePool: 1500,
            rounds: 6,
            roundNames: ['Round of 64', 'Round of 32', 'Round of 16', 'Quarterfinal', 'Semifinal', 'Final'],
            characterTier: 'legendary',
            seriesLength: 3
        }
    };

    const tournament = tournaments[tournamentType];
    if (!tournament) return;

    // Check if both players have enough coins
    if (gameState.player1Coins < tournament.entryFee) {
        showNotification(`❌ Player 1 doesn't have enough coins!\nNeeds ${tournament.entryFee} coins, has ${gameState.player1Coins} coins.`);
        return;
    }
    if (gameState.player2Coins < tournament.entryFee) {
        showNotification(`❌ Player 2 doesn't have enough coins!\nNeeds ${tournament.entryFee} coins, has ${gameState.player2Coins} coins.`);
        return;
    }

    // Deduct entry fees from both players
    gameState.player1Coins = safeCoins(gameState.player1Coins - tournament.entryFee);
    gameState.player2Coins = safeCoins(gameState.player2Coins - tournament.entryFee);
    updateMultiplayerCoinsDisplay();

    // Initialize 2-player tournament
    gameState.tournament2PlayerMode = true;
    // Force normal battle mode for tournaments
    gameState.selectedBattleMode = 'normal';
    gameState.tournament2PlayerData = {
        type: tournamentType,
        name: tournament.name,
        entryFee: tournament.entryFee,
        currentRound: 0,
        totalRounds: tournament.rounds,
        roundNames: tournament.roundNames,
        prizePool: tournament.prizePool,
        characterTier: tournament.characterTier,
        seriesLength: tournament.seriesLength,
        isActive: true,

        player1: {
            roundsWon: 0,
            isEliminated: false,
            currentSeries: {
                playerWins: 0,
                opponentWins: 0,
                gamesPlayed: 0,
                playerCharacter: null,
                opponentCharacter: null
            }
        },
        player2: {
            roundsWon: 0,
            isEliminated: false,
            currentSeries: {
                playerWins: 0,
                opponentWins: 0,
                gamesPlayed: 0,
                playerCharacter: null,
                opponentCharacter: null
            }
        },

        currentPlayer: 1,
        bracket: generate2PlayerBracket(tournament.rounds),
        finalMatch: false
    };

    console.log(`🏆 2-Player Tournament started: ${tournament.name}`);
    console.log(`💰 Entry fees deducted: ${tournament.entryFee} coins each`);
    console.log(`🎯 Prize pool: ${tournament.prizePool} coins`);

    update2PlayerTournamentStatus();
    updateUniversalCoinsDisplay();

    showNotification(`🏆 ${tournament.name} Started!\n\n💰 Entry fees: ${tournament.entryFee} coins each paid\n🎯 Prize pool: ${tournament.prizePool} coins\n\nPlayer 1 starts first!\nClick "Start Round" to begin!`);

    // Stay on tournament screen - user will click "Start Round" button
    showTournamentSelect2Player();
}

function end2PlayerTournament(winner) {
    const data = gameState.tournament2PlayerData;

    if (winner === 1) {
        gameState.player1Coins = safeCoins(gameState.player1Coins + data.prizePool);
        showNotification(`🏆 PLAYER 1 WINS THE TOURNAMENT! 🏆\n\n${data.name} Champion!\nPrize Pool: ${data.prizePool} coins awarded to Player 1!`);
    } else if (winner === 2) {
        gameState.player2Coins = safeCoins(gameState.player2Coins + data.prizePool);
        showNotification(`🏆 PLAYER 2 WINS THE TOURNAMENT! 🏆\n\n${data.name} Champion!\nPrize Pool: ${data.prizePool} coins awarded to Player 2!`);
    } else {
        showNotification(`💀 TOURNAMENT ENDED! 💀\n\nBoth players eliminated.\nNo prize awarded.\nEntry fees lost.`);
    }

    // Reset tournament
    gameState.tournament2PlayerMode = false;
    gameState.tournament2PlayerData.isActive = false;

    updateMultiplayerCoinsDisplay();
    update2PlayerTournamentStatus();

    setTimeout(() => {
        showMainMenu();
    }, 5000);
}

// Tournament UI functions
function showTournamentSelect() {
    if (typeof updateTournamentStatus === 'function') {
        updateTournamentStatus();
    }
    showScreen('tournamentSelectScreen');
}

function showTournamentSelect2Player() {
    if (typeof update2PlayerTournamentStatus === 'function') {
        update2PlayerTournamentStatus();
    }
    showScreen('tournament2PlayerSelectScreen');
}

function forfeitTournament() {
    if (!gameState.tournamentMode || !gameState.tournamentData.isActive) {
        if (typeof showNotification === 'function') {
            showNotification('No active tournament to forfeit.');
        }
        return;
    }

    const data = gameState.tournamentData;

    // Confirm forfeit
    if (confirm(`Are you sure you want to forfeit the ${data.name}?\n\nYou will lose your entry fee (${data.entryFee} coins) and receive no prize.`)) {
        // Reset tournament
        gameState.tournamentMode = false;
        gameState.tournamentData.isActive = false;

        if (typeof showNotification === 'function') {
            showNotification(`🏳️ Tournament Forfeited!\n\n${data.name} has been abandoned.\nEntry fee (${data.entryFee} coins) lost.\n\nYou can now start new battles.`);
        }

        if (typeof updateTournamentStatus === 'function') {
            updateTournamentStatus();
        }
        if (typeof updateUniversalCoinsDisplay === 'function') {
            updateUniversalCoinsDisplay();
        }

        // Return to main menu
        setTimeout(() => {
            showMainMenu();
        }, 2000);
    }
}

function forfeit2PlayerTournament() {
    if (!gameState.tournament2PlayerMode || !gameState.tournament2PlayerData.isActive) {
        if (typeof showNotification === 'function') {
            showNotification('No active 2-player tournament to forfeit.');
        }
        return;
    }

    const data = gameState.tournament2PlayerData;

    // Confirm forfeit
    if (confirm(`Are you sure you want to forfeit the ${data.name}?\n\nBoth players will lose their entry fees (${data.entryFee} coins each) and receive no prize.`)) {
        // Reset tournament
        gameState.tournament2PlayerMode = false;
        gameState.tournament2PlayerData.isActive = false;

        if (typeof showNotification === 'function') {
            showNotification(`🏳️ Tournament Forfeited!\n\n${data.name} has been abandoned.\nEntry fees (${data.entryFee} coins each) lost.\n\nYou can now start new battles.`);
        }

        if (typeof update2PlayerTournamentStatus === 'function') {
            update2PlayerTournamentStatus();
        }
        if (typeof updateMultiplayerCoinsDisplay === 'function') {
            updateMultiplayerCoinsDisplay();
        }

        // Return to main menu
        setTimeout(() => {
            showMainMenu();
        }, 2000);
    }
}

// Make functions globally available for onclick handlers
window.startTournament = startTournament;
window.endTournament = endTournament;
window.showTournamentBracket = showTournamentBracket;
window.start2PlayerTournament = start2PlayerTournament;
window.end2PlayerTournament = end2PlayerTournament;
window.showTournamentSelect = showTournamentSelect;
window.showTournamentSelect2Player = showTournamentSelect2Player;
window.forfeitTournament = forfeitTournament;
window.forfeit2PlayerTournament = forfeit2PlayerTournament;

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { startTournament, endTournament, showTournamentBracket, start2PlayerTournament, end2PlayerTournament };
}
