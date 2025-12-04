// Battle4Life - Trophy Road System
// Auto-extracted from script.js

function showTrophyRoad() {
    if (gameState.gameMode === 'multiplayer') {
        showNotification('Trophy Road is only available in Single Player mode!');
        return;
    }
    updateTrophyRoadPlayerInfo();
    updateTrophyRoadDisplay();
    showScreen('trophyRoadScreen');
}

function claimMilestone(milestone, milestoneKey) {
    // Mark as claimed
    gameState.claimedMilestones.push(milestoneKey);
    
    // Give reward
    if (milestone.reward.type === 'coins') {
        if (gameState.gameMode === 'multiplayer') {
            if (gameState.currentShopPlayer === 1) {
                gameState.player1Coins = safeCoins(gameState.player1Coins + milestone.reward.amount);
            } else {
                gameState.player2Coins = safeCoins(gameState.player2Coins + milestone.reward.amount);
            }
            updateMultiplayerCoinsDisplay();
        } else {
            gameState.coins = safeCoins(gameState.coins + milestone.reward.amount);
            updateSinglePlayerCoinsDisplay();
        }
        showNotification(`🏆 MILESTONE CLAIMED!\n${milestone.name}\n💰 +${milestone.reward.amount} coins!`);
    } else if (milestone.reward.type === 'character') {
        const charKey = milestone.reward.character;
        if (gameState.gameMode === 'multiplayer') {
            if (gameState.currentShopPlayer === 1) {
                if (!gameState.player1Characters.includes(charKey)) {
                    gameState.player1Characters.push(charKey);
                }
            } else {
                if (!gameState.player2Characters.includes(charKey)) {
                    gameState.player2Characters.push(charKey);
                }
            }
        } else {
            if (!gameState.unlockedCharacters.includes(charKey)) {
                gameState.unlockedCharacters.push(charKey);
            }
        }
        const char = characters[charKey];
        showNotification(`🏆 MILESTONE CLAIMED!\n${milestone.name}\n${char.emoji} ${char.name} unlocked!`);
    } else if (milestone.reward.type === 'chest') {
        showNotification(`🏆 MILESTONE CLAIMED!\n${milestone.name}\nFree ${milestone.reward.chestType} chest!`);
        // Simulate buying the chest for free
        const originalBuyChest = buyChest;
        buyChest(milestone.reward.chestType);
    }

    // Track trophy road claim
    trackChallengeProgress('trophy_road_claimed');

    // FIXED: Generate new challenge when claiming trophy road reward
    generateNewChallenge();
    
    // Refresh display
    updateTrophyRoadDisplay();
}

function updateTrophyRoadDisplay() {
    const container = document.getElementById('trophyRoadContainer');
    container.innerHTML = '';

    let currentTrophies, claimedMilestones, currentCharacters;
    if (gameState.gameMode === 'multiplayer') {
        if (gameState.currentShopPlayer === 1) {
            currentTrophies = gameState.player1Trophies;
            currentCharacters = gameState.player1Characters;
        } else {
            currentTrophies = gameState.player2Trophies;
            currentCharacters = gameState.player2Characters;
        }
    } else {
        currentTrophies = gameState.trophies;
        currentCharacters = gameState.unlockedCharacters;
    }

    // Update trophy count in header
    const trophyCountElement = document.getElementById('trophyRoadCountNumber');
    if (trophyCountElement) {
        trophyCountElement.textContent = currentTrophies;
    }
    
    // Create progress bar first
    const progressSection = document.createElement('div');
    progressSection.style.cssText = 'margin-bottom: 30px; text-align: center;';
    
    const nextMilestone = trophyMilestones.find(m => m.trophies > currentTrophies);
    const currentProgress = nextMilestone ? 
        Math.min((currentTrophies / nextMilestone.trophies) * 100, 100) : 100;
    
    progressSection.innerHTML = `
        <div style="font-size: 24px; font-weight: bold; color: #000; margin-bottom: 15px;">
            ${nextMilestone ? `Next: ${nextMilestone.name} (${nextMilestone.trophies} 🏆)` : 'ALL MILESTONES COMPLETE! 🎉'}
        </div>
        <div style="width: 100%; height: 20px; background: rgba(0,0,0,0.3); border-radius: 10px; overflow: hidden; border: 2px solid #FFD700;">
            <div style="width: ${currentProgress}%; height: 100%; background: linear-gradient(90deg, #FFD700, #FFA500); transition: width 0.3s;"></div>
        </div>
        <div style="margin-top: 10px; font-size: 18px; color: #000; font-weight: bold;">
            Progress: ${currentTrophies}${nextMilestone ? ` / ${nextMilestone.trophies}` : ''} trophies
        </div>
    `;
    container.appendChild(progressSection);
    
    // Create milestone grid
    const milestonesGrid = document.createElement('div');
    milestonesGrid.style.cssText = 'display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 15px;';
    
    trophyMilestones.forEach((milestone, index) => {
        const isUnlocked = currentTrophies >= milestone.trophies;
        const milestoneKey = `milestone_${milestone.trophies}`;
        const isClaimed = gameState.claimedMilestones.includes(milestoneKey);
        const canClaim = isUnlocked && !isClaimed;
        
        const milestoneCard = document.createElement('div');
        milestoneCard.style.cssText = `
            background: ${isUnlocked ? 'linear-gradient(45deg, #4CAF50, #66BB6A)' : 'linear-gradient(45deg, #666, #888)'};
            border: 3px solid ${canClaim ? '#FFD700' : isUnlocked ? '#4CAF50' : '#999'};
            border-radius: 15px;
            padding: 15px;
            text-align: center;
            color: #FFF;
            position: relative;
            transition: all 0.3s;
            ${canClaim ? 'animation: claimPulse 2s ease-in-out infinite;' : ''}
            ${canClaim ? 'cursor: pointer;' : ''}
        `;
        
        if (canClaim) {
            milestoneCard.onclick = () => claimMilestone(milestone, milestoneKey);
        }
        
        // Milestone content
        let rewardText = '';
        if (milestone.reward.type === 'coins') {
            rewardText = `💰 ${milestone.reward.amount} Coins`;
        } else if (milestone.reward.type === 'character') {
            const char = characters[milestone.reward.character];
            rewardText = `${char.emoji} ${char.name}`;
        } else if (milestone.reward.type === 'chest') {
            const chestNames = {
                rare: '💎 Rare Chest',
                epic: '⚡ Epic Chest', 
                legendary: '🌟 Legendary Chest',
                mega: '🎰 MEGA CHEST',
                guaranteed: '👑 Guaranteed Legendary',
                choose: '🎯 Choose Character'
            };
            rewardText = chestNames[milestone.reward.chestType];
        }
        
        milestoneCard.innerHTML = `
            <div style="font-size: 32px; margin-bottom: 8px;">${milestone.emoji}</div>
            <div style="font-size: 18px; font-weight: bold; margin-bottom: 5px;">${milestone.name}</div>
            <div style="font-size: 16px; color: #FFD700; font-weight: bold; margin-bottom: 8px;">🏆 ${milestone.trophies} Trophies</div>
            <div style="font-size: 14px; margin-bottom: 10px;">${rewardText}</div>
            ${isClaimed ? '<div style="background: #4CAF50; color: white; padding: 5px 10px; border-radius: 20px; font-size: 12px; font-weight: bold;">✓ CLAIMED</div>' : 
                canClaim ? '<div style="background: #FFD700; color: #000; padding: 5px 10px; border-radius: 20px; font-size: 12px; font-weight: bold; animation: pulse 1s infinite;">🎁 CLICK TO CLAIM!</div>' :
                !isUnlocked ? '<div style="background: #666; color: #ccc; padding: 5px 10px; border-radius: 20px; font-size: 12px;">🔒 LOCKED</div>' : ''}
        `;
        
        milestonesGrid.appendChild(milestoneCard);
    });
    
    container.appendChild(milestonesGrid);
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { showTrophyRoad, claimMilestone, updateTrophyDisplay, updateTrophyRoadDisplay };
}
