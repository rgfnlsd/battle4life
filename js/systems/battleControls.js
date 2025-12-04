// Battle4Life - Battle Control Functions
// Functions for battle mode selection, map selection, and battle flow control

function selectBattleMode(mode) {
    // Boss battle is only available in multiplayer mode
    if (mode === 'boss_battle' && gameState.gameMode !== 'multiplayer') {
        alert('🐉 Boss Battle is only available in 2-Player mode!\n\nPlease select 2-Player mode from the main menu first.');
        return;
    }

    gameState.selectedBattleMode = mode;
    console.log('🏁 Battle mode selected:', mode);
    if (gameState.gameMode === 'multiplayer') {
        showCharacterSelect();
    } else {
        showCharacterSelect();
    }
}

function selectDifficulty(difficulty) {
    gameState.selectedDifficulty = difficulty;
    showMapSelect();
}

function selectMap(mapType) {
    gameState.selectedMap = mapType;
    if (typeof showBattlePreparation === 'function') {
        showBattlePreparation();
    }
}

function showMapSelect() {
    showScreen('mapSelectScreen');
}

function showMapSelectMultiplayer() {
    if (!gameState.selectedPlayer2Character) {
        if (typeof showNotification === 'function') {
            showNotification('Player 2 must select a character first!');
        }
        return;
    }
    showScreen('mapSelectScreen');
}

function showDifficultySelect() {
    if (!gameState.selectedCharacter) {
        if (typeof showNotification === 'function') {
            showNotification('Please select a character first!');
        }
        return;
    }
    showScreen('difficultySelectScreen');
}

function startBattleFromPrep() {
    // Call the actual start battle function
    if (typeof startBattle === 'function') {
        startBattle();
    }
}

function endBattle() {
    if (gameState.battle) {
        gameState.battle.gameRunning = false;
        // Clean up resize event listener
        if (gameState.battle.handleResize) {
            window.removeEventListener('resize', gameState.battle.handleResize);
        }
        gameState.battle = null;
    }
    gameState.selectedCharacter = null;
    gameState.selectedPlayer2Character = null;
    gameState.selectedMap = null;

    // Show loading screen and check for completed challenges
    if (typeof showLoadingScreen === 'function') {
        showLoadingScreen('battle', () => {
            // After loading screen, show appropriate screen
            if (gameState.tournamentMode && gameState.tournamentData.isActive) {
                showTournamentSelect();
            } else {
                showMainMenu();
            }
        });
    } else {
        // Fallback if showLoadingScreen not available
        if (gameState.tournamentMode && gameState.tournamentData.isActive) {
            showTournamentSelect();
        } else {
            showMainMenu();
        }
    }
}

function cancelChooseCharacter() {
    // Refund the coins since they cancelled (1500 for choose chest)
    if (gameState.gameMode === 'multiplayer') {
        if (gameState.currentShopPlayer === 1) {
            gameState.player1Coins = typeof safeCoins === 'function' ? safeCoins(gameState.player1Coins + 1500) : gameState.player1Coins + 1500;
        } else {
            gameState.player2Coins = typeof safeCoins === 'function' ? safeCoins(gameState.player2Coins + 1500) : gameState.player2Coins + 1500;
        }
        if (typeof updateMultiplayerCoinsDisplay === 'function') {
            updateMultiplayerCoinsDisplay();
        }
    } else {
        gameState.coins = typeof safeCoins === 'function' ? safeCoins(gameState.coins + 1500) : gameState.coins + 1500;
        if (typeof updateSinglePlayerCoinsDisplay === 'function') {
            updateSinglePlayerCoinsDisplay();
        }
    }

    // Clean up the choose chest state
    gameState.chooseChestAvailableChars = null;
    gameState.chooseChestAvailableBadges = null;

    // Go back to shop
    showShop();
}

function closeCharacterDetail() {
    // Stop animation
    if (typeof danceAnimationFrame !== 'undefined' && danceAnimationFrame) {
        cancelAnimationFrame(danceAnimationFrame);
        danceAnimationFrame = null;
    }
    showCollection();
}

function toggleFavorite() {
    if (!gameState.currentDetailCharacter) return;

    // Initialize favorites array if it doesn't exist
    if (!gameState.favoriteCharacters) {
        gameState.favoriteCharacters = [];
    }

    const charKey = gameState.currentDetailCharacter;
    const index = gameState.favoriteCharacters.indexOf(charKey);

    if (index > -1) {
        // Remove from favorites
        gameState.favoriteCharacters.splice(index, 1);
        if (typeof showNotification === 'function' && typeof characters !== 'undefined') {
            showNotification(`${characters[charKey].emoji} ${characters[charKey].name} removed from favorites!`);
        }
    } else {
        // Add to favorites
        gameState.favoriteCharacters.push(charKey);
        if (typeof showNotification === 'function' && typeof characters !== 'undefined') {
            showNotification(`${characters[charKey].emoji} ${characters[charKey].name} added to favorites! ⭐`);
        }
    }

    // Update button
    if (typeof updateFavoriteButton === 'function') {
        updateFavoriteButton();
    }

    // Save state
    if (typeof saveGameState === 'function') {
        saveGameState();
    }
}

function handleCharacterNext() {
    if (!gameState.chooseChestAvailableChars || gameState.chooseChestAvailableChars.length === 0) {
        return;
    }

    // Move to next character
    gameState.chooseChestCurrentIndex = (gameState.chooseChestCurrentIndex + 1) % gameState.chooseChestAvailableChars.length;

    // Update display
    if (typeof updateChooseChestDisplay === 'function') {
        updateChooseChestDisplay();
    }
}

function returnToMainMenuWithLoading() {
    if (typeof showLoadingScreen === 'function') {
        showLoadingScreen('menu', () => {
            showMainMenu();
        });
    } else {
        showMainMenu();
    }
}

// Make functions globally available for onclick handlers
window.selectBattleMode = selectBattleMode;
window.selectDifficulty = selectDifficulty;
window.selectMap = selectMap;
window.showMapSelect = showMapSelect;
window.showMapSelectMultiplayer = showMapSelectMultiplayer;
window.showDifficultySelect = showDifficultySelect;
window.startBattleFromPrep = startBattleFromPrep;
window.endBattle = endBattle;
window.cancelChooseCharacter = cancelChooseCharacter;
window.closeCharacterDetail = closeCharacterDetail;
window.toggleFavorite = toggleFavorite;
window.handleCharacterNext = handleCharacterNext;
window.returnToMainMenuWithLoading = returnToMainMenuWithLoading;

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        selectBattleMode,
        selectDifficulty,
        selectMap,
        showMapSelect,
        showMapSelectMultiplayer,
        showDifficultySelect,
        startBattleFromPrep,
        endBattle,
        cancelChooseCharacter,
        closeCharacterDetail,
        toggleFavorite,
        handleCharacterNext,
        returnToMainMenuWithLoading
    };
}

