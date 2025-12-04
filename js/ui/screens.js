// Battle4Life - Screen Navigation
// Auto-extracted from script.js

function showShop() {
    updateShopPlayerInfo();
    showScreen('shopScreen');

    // Track shop visit
    if (typeof trackChallengeProgress === 'function') {
        trackChallengeProgress('shop_visited');
    }
}

function showCollection() {
    updateCollectionPlayerInfo();
    updateCharacterGrid();
    showScreen('collectionScreen');
}

function showMainMenu() {
    showScreen('mainMenu');

    // Update main menu based on game mode
    const topRightBtn = document.getElementById('topRightBtn');
    const topCenterBtn = document.getElementById('topCenterBtn');
    const topLeftBtn = document.getElementById('topLeftBtn');

    if (gameState.gameMode === 'multiplayer') {
        // Hide challenges and trophy road for multiplayer
        if (topRightBtn) topRightBtn.style.display = 'none';
        if (topCenterBtn) {
            topCenterBtn.onclick = () => showShop();
            topCenterBtn.innerHTML = `
                <span class="emoji" style="font-size: 48px; margin-bottom: 10px;">🛒</span>
                <span>Shop</span>
            `;
        }
        if (topLeftBtn) topLeftBtn.style.display = 'none';
    } else {
        // Show all buttons for single player
        if (topRightBtn) topRightBtn.style.display = 'flex';
        if (topCenterBtn) {
            topCenterBtn.onclick = () => showTrophyRoad();
            topCenterBtn.innerHTML = `
                <span class="emoji" style="font-size: 48px; margin-bottom: 10px;">🏆</span>
                <span>Trophy Road</span>
            `;
        }
        if (topLeftBtn) topLeftBtn.style.display = 'flex';
    }
}

function showGameModeSelect() {
    showScreen('gameModeScreen');
}

function showBattleModeSelect() {
    // If in tournament mode, redirect to tournament screen
    if (gameState.tournamentMode && gameState.tournamentData.isActive) {
        if (typeof showNotification === 'function') {
            showNotification('🏆 Tournament in progress!\nYou must complete or forfeit your current tournament before starting new battles.');
        }
        if (typeof showTournamentSelect === 'function') {
            showTournamentSelect();
        }
        return;
    }

    // If in 2-player tournament mode, redirect to 2-player tournament screen
    if (gameState.tournament2PlayerMode && gameState.tournament2PlayerData.isActive) {
        if (typeof showNotification === 'function') {
            showNotification('👥 2-Player Tournament in progress!\nYou must complete or forfeit your current tournament before starting new battles.');
        }
        if (typeof showTournamentSelect2Player === 'function') {
            showTournamentSelect2Player();
        }
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

            if (typeof showNotification === 'function' && typeof characters !== 'undefined') {
                showNotification(`🔒 Series Characters Locked!\n\nYou: ${characters[series.playerCharacter].name}\nOpponent: ${characters[series.opponentCharacter].name}\n\nGame ${series.gamesPlayed + 1} of series starting...`);
            }

            setTimeout(() => {
                if (typeof showMapSelect === 'function') {
                    showMapSelect();
                }
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

            if (typeof showNotification === 'function' && typeof characters !== 'undefined') {
                showNotification(`🔒 Player ${data.currentPlayer} Series Characters Locked!\n\nYou: ${characters[series.playerCharacter].name}\nOpponent: ${characters[series.opponentCharacter].name}\n\nGame ${series.gamesPlayed + 1} of series starting...`);
            }

            setTimeout(() => {
                if (typeof showMapSelect === 'function') {
                    showMapSelect();
                }
            }, 3000);
            return;
        }
    }

    if (typeof updateCharacterSelectPlayerInfo === 'function') {
        updateCharacterSelectPlayerInfo();
    }
    if (typeof updateSelectableCharacters === 'function') {
        updateSelectableCharacters();
    }
    showScreen('characterSelectScreen');
}

function showBadges() {
    if (typeof updateBadgesPlayerInfo === 'function') {
        updateBadgesPlayerInfo();
    }
    if (typeof updateBadgesDisplay === 'function') {
        updateBadgesDisplay();
    }
    showScreen('badgesScreen');
}

// Make functions globally available for onclick handlers
window.showShop = showShop;
window.showCollection = showCollection;
window.showMainMenu = showMainMenu;
window.showGameModeSelect = showGameModeSelect;
window.showBattleModeSelect = showBattleModeSelect;
window.showCharacterSelect = showCharacterSelect;
window.showBadges = showBadges;
window.showTrophyRoad = showTrophyRoad;
window.showChallenges = showChallenges;

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { showShop, showCollection, showMainMenu, showGameModeSelect, showBattleModeSelect, showCharacterSelect, showBadges };
}
