// Battle4Life - Main Entry Point
// This file initializes the game after all modules are loaded

(function() {
    'use strict';
    
    console.log('Battle4Life - Initializing...');
    
    // Wait for all modules to be loaded
    window.addEventListener('modulesLoaded', function() {
        console.log('All modules loaded successfully!');

        // Initialize game state from localStorage
        if (typeof loadGameState === 'function') {
            loadGameState();
        }

        // Show initial screen first (this sets up the DOM)
        if (typeof showGameModeSelect === 'function') {
            showGameModeSelect();
        }

        // Then update UI based on game mode (after DOM is ready)
        setTimeout(function() {
            if (gameState.gameMode === 'singleplayer') {
                if (typeof updateSinglePlayerCoinsDisplay === 'function') {
                    updateSinglePlayerCoinsDisplay();
                }
            } else {
                if (typeof updateMultiplayerCoinsDisplay === 'function') {
                    updateMultiplayerCoinsDisplay();
                }
            }
        }, 100);

        // Set up keyboard controls
        setupKeyboardControls();

        console.log('Battle4Life - Ready to play! 🎮');
    });
    
    // Keyboard controls setup
    function setupKeyboardControls() {
        let keysPressed = {};
        
        window.addEventListener('keydown', function(e) {
            keysPressed[e.key.toLowerCase()] = true;
            
            // I+O cheat code for coins (works in both modes)
            if (keysPressed['i'] && keysPressed['o']) {
                console.log('💰 Cheat activated! +1500 coins');
                
                if (gameState.gameMode === 'singleplayer') {
                    gameState.coins += 1500;
                    updateSinglePlayerCoinsDisplay();
                } else {
                    gameState.player1Coins += 1500;
                    gameState.player2Coins += 1500;
                    updateMultiplayerCoinsDisplay();
                }
                
                saveGameState();
                showNotification('💰 Cheat Code! +1500 Coins!', 'success');
                
                // Clear keys to prevent repeated activation
                keysPressed = {};
            }
        });
        
        window.addEventListener('keyup', function(e) {
            keysPressed[e.key.toLowerCase()] = false;
        });
        
        // Clear keys when window loses focus
        window.addEventListener('blur', function() {
            keysPressed = {};
        });
    }
    
    // Global error handler
    window.addEventListener('error', function(e) {
        console.error('Game Error:', e.error);
        showNotification('An error occurred. Please refresh the page.', 'error');
    });
    
    // Prevent accidental page navigation
    window.addEventListener('beforeunload', function(e) {
        // Save game state before leaving
        saveGameState();
    });
    
    // Handle visibility change (tab switching)
    document.addEventListener('visibilitychange', function() {
        if (document.hidden) {
            // Save when tab becomes hidden
            saveGameState();
        }
    });
    
    // Auto-save every 30 seconds
    setInterval(function() {
        saveGameState();
        console.log('Auto-saved game state');
    }, 30000);
    
    // Expose version info
    window.BATTLE4LIFE_VERSION = CONFIG.VERSION;
    console.log(`Battle4Life v${CONFIG.VERSION}`);
    
})();

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {};
}

