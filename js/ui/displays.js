// Battle4Life - Display Updates
// Auto-extracted from script.js

function updateSinglePlayerCoinsDisplay() {
    document.getElementById('coinCount').textContent = gameState.coins;
    updateUniversalCoinsDisplay(); // Also update universal display
}

function updateMultiplayerCoinsDisplay() {
    document.getElementById('player1CoinCount').textContent = gameState.player1Coins;
    document.getElementById('player2CoinCount').textContent = gameState.player2Coins;
    updateUniversalCoinsDisplay(); // Also update universal display
}

function showNotification(message) {
    const notification = document.getElementById('notification');
    notification.textContent = message;
    notification.style.display = 'block';
    setTimeout(() => {
        notification.style.display = 'none';
    }, 4000);
}

function showLoadingScreen(source, callback) {
    const loadingScreen = document.getElementById('loadingScreen');
    const loadingTitle = document.getElementById('loadingTitle');
    const loadingMessage = document.getElementById('loadingMessage');
    const challengeContainer = document.getElementById('challengeCompletionContainer');

    // Show loading screen
    loadingScreen.style.display = 'flex';
    loadingTitle.textContent = 'Loading...';
    loadingMessage.textContent = 'Checking for completed challenges...';
    challengeContainer.innerHTML = '';

    // Check for completed challenges after a short delay
    setTimeout(() => {
        const completedChallenges = checkCompletedChallenges();

        if (completedChallenges.length > 0) {
            // Show completed challenges
            loadingTitle.textContent = '🎉 CHALLENGES COMPLETED! 🎉';
            loadingMessage.textContent = `You completed ${completedChallenges.length} challenge${completedChallenges.length > 1 ? 's' : ''}!`;

            completedChallenges.forEach((challenge, index) => {
                setTimeout(() => {
                    const card = document.createElement('div');
                    card.className = 'challenge-completion-card';
                    card.innerHTML = `
                        <div style="font-size: 48px; margin-bottom: 10px;">${challenge.emoji}</div>
                        <div style="font-size: 24px; font-weight: bold; color: #FFD700; margin-bottom: 10px;">${challenge.name}</div>
                        <div style="font-size: 18px; color: #FFF; margin-bottom: 15px;">${challenge.description}</div>
                        <div style="font-size: 20px; font-weight: bold; color: #FFD700;">
                            💰 Reward: ${challenge.reward} coins
                        </div>
                    `;
                    challengeContainer.appendChild(card);
                }, index * 300); // Stagger the animations
            });

            // Wait longer before continuing
            setTimeout(() => {
                hideLoadingScreen(callback);
            }, 2000 + (completedChallenges.length * 300));
        } else {
            // No challenges completed
            loadingMessage.textContent = 'No new challenges completed.';
            setTimeout(() => {
                hideLoadingScreen(callback);
            }, 1000);
        }
    }, 500);
}

function hideLoadingScreen(callback) {
    const loadingScreen = document.getElementById('loadingScreen');
    loadingScreen.style.animation = 'fadeOut 0.3s ease-out';

    setTimeout(() => {
        loadingScreen.style.display = 'none';
        loadingScreen.style.animation = '';
        if (callback) callback();
    }, 300);
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { updateSinglePlayerCoinsDisplay, updateMultiplayerCoinsDisplay, showNotification, showLoadingScreen, hideLoadingScreen };
}
