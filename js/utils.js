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
        document.getElementById('universalCoinCount').textContent = gameState.coins;
    } else {
        if (singlePlayerDisplay) singlePlayerDisplay.style.display = 'none';
        if (multiplayerDisplay) multiplayerDisplay.style.display = 'block';
        document.getElementById('universalPlayer1CoinCount').textContent = gameState.player1Coins;
        document.getElementById('universalPlayer2CoinCount').textContent = gameState.player2Coins;
    }
}

// Game mode selection
function selectGameMode(mode) {
    gameState.gameMode = mode;

    if (mode === 'multiplayer') {
        document.getElementById('singlePlayerCoins').style.display = 'none';
        document.getElementById('player1Coins').style.display = 'block';
        document.getElementById('player2Coins').style.display = 'block';
        updateMultiplayerCoinsDisplay();
    } else {
        document.getElementById('singlePlayerCoins').style.display = 'block';
        document.getElementById('player1Coins').style.display = 'none';
        document.getElementById('player2Coins').style.display = 'none';
        updateSinglePlayerCoinsDisplay();
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
        updateCharacterGrid
    };
}

