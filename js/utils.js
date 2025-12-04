// Battle4Life - Utility Functions
// Helper functions used across the application

// Screen management
function showScreen(screenId) {
    // Hide ALL screens first
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
        screen.style.display = 'none';
    });

    // Show the target screen
    const targetScreen = document.getElementById(screenId);
    if (targetScreen) {
        targetScreen.classList.add('active');

        // Main menu needs grid layout, others use flex
        if (screenId === 'mainMenu') {
            targetScreen.style.display = 'grid';
        } else {
            targetScreen.style.display = 'flex';
        }
    }

    // Show universal coin display on all screens except battle and game mode selection
    if (screenId !== 'battleScreen' && screenId !== 'gameModeScreen') {
        showUniversalCoins();
    } else {
        hideUniversalCoins();
    }
}

// Universal coin display management
function showUniversalCoins() {
    const universalCoins = document.getElementById('universalCoins');
    if (universalCoins) {
        universalCoins.style.display = 'block';
        updateUniversalCoinsDisplay();
    }
}

function hideUniversalCoins() {
    const universalCoins = document.getElementById('universalCoins');
    if (universalCoins) {
        universalCoins.style.display = 'none';
    }
}

function updateUniversalCoinsDisplay() {
    const singlePlayerDisplay = document.getElementById('singlePlayerCoinDisplay');
    const multiplayerDisplay = document.getElementById('multiplayerCoinDisplay');

    if (gameState.gameMode === 'singleplayer') {
        if (singlePlayerDisplay) singlePlayerDisplay.style.display = 'block';
        if (multiplayerDisplay) multiplayerDisplay.style.display = 'none';
        const coinCount = document.getElementById('universalCoinCount');
        if (coinCount) coinCount.textContent = gameState.coins;
    } else {
        if (singlePlayerDisplay) singlePlayerDisplay.style.display = 'none';
        if (multiplayerDisplay) multiplayerDisplay.style.display = 'block';
        const p1Count = document.getElementById('universalPlayer1CoinCount');
        const p2Count = document.getElementById('universalPlayer2CoinCount');
        if (p1Count) p1Count.textContent = gameState.player1Coins;
        if (p2Count) p2Count.textContent = gameState.player2Coins;
    }
}

// Game mode selection
function selectGameMode(mode) {
    gameState.gameMode = mode;

    const singlePlayerCoins = document.getElementById('singlePlayerCoins');
    const player1Coins = document.getElementById('player1Coins');
    const player2Coins = document.getElementById('player2Coins');

    if (mode === 'multiplayer') {
        if (singlePlayerCoins) singlePlayerCoins.style.display = 'none';
        if (player1Coins) player1Coins.style.display = 'block';
        if (player2Coins) player2Coins.style.display = 'block';
        if (typeof updateMultiplayerCoinsDisplay === 'function') {
            updateMultiplayerCoinsDisplay();
        }
    } else {
        if (singlePlayerCoins) singlePlayerCoins.style.display = 'block';
        if (player1Coins) player1Coins.style.display = 'none';
        if (player2Coins) player2Coins.style.display = 'none';
        if (typeof updateSinglePlayerCoinsDisplay === 'function') {
            updateSinglePlayerCoinsDisplay();
        }
    }

    // Initialize universal coin display
    updateUniversalCoinsDisplay();

    // Update battle mode display for the selected game mode
    updateBattleModeDisplay();

    showMainMenu();
}

// Battle mode display update
function updateBattleModeDisplay() {
    // This function updates the battle mode selection screen based on game mode
    // Implementation depends on your specific UI structure
}

// Shop player info update
function updateShopPlayerInfo() {
    const shopPlayerInfo = document.getElementById('shopPlayerInfo');
    if (!shopPlayerInfo) return;
    
    if (gameState.gameMode === 'singleplayer') {
        shopPlayerInfo.innerHTML = `<span class="emoji">💰</span> ${gameState.coins} Coins`;
    } else {
        shopPlayerInfo.innerHTML = `
            <div style="display: flex; gap: 20px;">
                <span><span class="emoji">💰</span> P1: ${gameState.player1Coins}</span>
                <span><span class="emoji">💰</span> P2: ${gameState.player2Coins}</span>
            </div>
        `;
    }
}

// Collection player info update
function updateCollectionPlayerInfo() {
    // Similar to shop player info
    updateShopPlayerInfo();
}

// Character grid update
function updateCharacterGrid() {
    const characterGrid = document.getElementById('characterGrid');
    if (!characterGrid) return;
    
    characterGrid.innerHTML = '';
    
    Object.entries(characters).forEach(([charId, char]) => {
        const isUnlocked = gameState.unlockedCharacters.includes(charId);
        const charCard = document.createElement('div');
        charCard.className = 'character-card' + (isUnlocked ? '' : ' locked');
        charCard.innerHTML = `
            <div class="character-emoji">${char.emoji}</div>
            <div class="character-name">${char.name}</div>
            <div class="character-rarity ${char.rarity}">${char.rarity}</div>
            ${!isUnlocked ? '<div class="lock-icon">🔒</div>' : ''}
        `;
        characterGrid.appendChild(charCard);
    });
}

// Reset Account function with confirmation
function confirmResetAccount() {
    const confirmation = confirm('⚠️ WARNING ⚠️\n\nThis will DELETE ALL your progress:\n• All coins\n• All unlocked characters\n• All badges\n• All trophies\n• All challenge progress\n• Everything!\n\nYou will start completely fresh with only 75 coins and 3 starter characters.\n\nAre you ABSOLUTELY SURE?');

    if (confirmation) {
        const doubleCheck = confirm('🔥 FINAL WARNING 🔥\n\nThis action CANNOT be undone!\n\nClick OK to permanently delete everything and restart.');

        if (doubleCheck) {
            localStorage.removeItem('battleArenaGameState');
            if (typeof showNotification === 'function') {
                showNotification('🔥 Account Reset! Starting fresh...');
            }
            setTimeout(() => {
                location.reload();
            }, 1000);
        }
    }
}

// Make functions globally available for onclick handlers
window.showScreen = showScreen;
window.showUniversalCoins = showUniversalCoins;
window.hideUniversalCoins = hideUniversalCoins;
window.updateUniversalCoinsDisplay = updateUniversalCoinsDisplay;
window.selectGameMode = selectGameMode;
window.updateBattleModeDisplay = updateBattleModeDisplay;
window.updateShopPlayerInfo = updateShopPlayerInfo;
window.updateCollectionPlayerInfo = updateCollectionPlayerInfo;
window.updateCharacterGrid = updateCharacterGrid;
window.confirmResetAccount = confirmResetAccount;

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        showScreen,
        showUniversalCoins,
        hideUniversalCoins,
        updateUniversalCoinsDisplay,
        selectGameMode,
        updateBattleModeDisplay,
        updateShopPlayerInfo,
        updateCollectionPlayerInfo,
        updateCharacterGrid,
        confirmResetAccount
    };
}

