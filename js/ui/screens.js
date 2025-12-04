// Battle4Life - Screen Navigation
// Auto-extracted from script.js

function showShop() {
    updateShopPlayerInfo();
    showScreen('shopScreen');

    // Track shop visit
    trackChallengeProgress('shop_visited');
}

function showCollection() {
    updateCollectionPlayerInfo();
    updateCharacterGrid();
    showScreen('collectionScreen');
}

function showMainMenu() {
    showScreen('mainMenu');
    
    // Update main menu based on game mode
    if (gameState.gameMode === 'multiplayer') {
        // Hide challenges and trophy road for multiplayer
        document.getElementById('topRightBtn').style.display = 'none';
        document.getElementById('topCenterBtn').onclick = () => showShop();
        document.getElementById('topCenterBtn').innerHTML = `
            <span class="emoji" style="font-size: 48px; margin-bottom: 10px;">🛒</span>
            <span>Shop</span>
        `;
        document.getElementById('topLeftBtn').style.display = 'none';
    } else {
        // Show all buttons for single player
        document.getElementById('topRightBtn').style.display = 'flex';
        document.getElementById('topCenterBtn').onclick = () => showTrophyRoad();
        document.getElementById('topCenterBtn').innerHTML = `
            <span class="emoji" style="font-size: 48px; margin-bottom: 10px;">🏆</span>
            <span>Trophy Road</span>
        `;
        document.getElementById('topLeftBtn').style.display = 'flex';
    }
}

function showGameModeSelect() {
    showScreen('gameModeScreen');
}

function showBattleModeSelect() {
    // If in tournament mode, redirect to tournament screen
    if (gameState.tournamentMode && gameState.tournamentData.isActive) {
        showNotification('🏆 Tournament in progress!\nYou must complete or forfeit your current tournament before starting new battles.');
        showTournamentSelect();
        return;
    }

    // If in 2-player tournament mode, redirect to 2-player tournament screen
    if (gameState.tournament2PlayerMode && gameState.tournament2PlayerData.isActive) {
        showNotification('👥 2-Player Tournament in progress!\nYou must complete or forfeit your current tournament before starting new battles.');
        showTournamentSelect2Player();
        return;
    }

    updateBattleModeDisplay();
    showScreen('battleModeScreen');
}

function showCharacterSelect() {
    // In tournament mode, check if characters are already locked for the series
    if (gameState.tournamentMode && gameState.tournamentData.isActive) {
        const series = gameState.tournamentData.currentSeries;

        // If characters are already locked for this series, skip character selection
        if (series.playerCharacter && series.opponentCharacter) {
            gameState.selectedCharacter = series.playerCharacter;
            gameState.selectedPlayer2Character = series.opponentCharacter;

            showNotification(`🔒 Series Characters Locked!\n\nYou: ${characters[series.playerCharacter].name}\nOpponent: ${characters[series.opponentCharacter].name}\n\nGame ${series.gamesPlayed + 1} of series starting...`);

            setTimeout(() => {
                showMapSelect();
            }, 3000);
            return;
        }
    }

    // In 2-player tournament mode, check if characters are already locked for the series
    if (gameState.tournament2PlayerMode && gameState.tournament2PlayerData.isActive) {
        const data = gameState.tournament2PlayerData;
        const currentPlayerData = data.currentPlayer === 1 ? data.player1 : data.player2;
        const series = currentPlayerData.currentSeries;

        // If characters are already locked for this series, skip character selection
        if (series.playerCharacter && series.opponentCharacter && !data.finalMatch) {
            gameState.selectedCharacter = series.playerCharacter;
            gameState.selectedPlayer2Character = series.opponentCharacter;

            showNotification(`🔒 Player ${data.currentPlayer} Series Characters Locked!\n\nYou: ${characters[series.playerCharacter].name}\nOpponent: ${characters[series.opponentCharacter].name}\n\nGame ${series.gamesPlayed + 1} of series starting...`);

            setTimeout(() => {
                showMapSelect();
            }, 3000);
            return;
        }
    }

    updateCharacterSelectPlayerInfo();
    updateSelectableCharacters();
    showScreen('characterSelectScreen');
}

function showBadges() {
    updateBadgesPlayerInfo();
    updateBadgesDisplay();
    showScreen('badgesScreen');
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { showShop, showCollection, showMainMenu, showGameModeSelect, showBattleModeSelect, showCharacterSelect, showBadges };
}
