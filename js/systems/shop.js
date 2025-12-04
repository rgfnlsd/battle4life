// Battle4Life - Shop System
// Auto-extracted from script.js

function buyChest(chestType = 'common') {
    const chestPrices = {
        common: 100,
        rare: 200,
        epic: 350,
        legendary: 600,
        mega: 750,  // 3 items!
        guaranteed: 1200,  // Guaranteed legendary
        choose: 1500  // Choose any item
    };

    const chestRarities = {
        common: { common: 0.70, rare: 0.25, epic: 0.04, legendary: 0.01 },
        rare: { common: 0.45, rare: 0.35, epic: 0.17, legendary: 0.03 },
        epic: { common: 0.35, rare: 0.35, epic: 0.20, legendary: 0.10 },
        legendary: { common: 0.30, rare: 0.25, epic: 0.20, legendary: 0.25 },
        mega: { common: 0.45, rare: 0.35, epic: 0.17, legendary: 0.03 },
        guaranteed: { common: 0.00, rare: 0.00, epic: 0.00, legendary: 1.00 }
    };
    
    const price = chestPrices[chestType];

    let playerCoins, playerCharacters, playerBadges;
    if (gameState.gameMode === 'multiplayer') {
        if (gameState.currentShopPlayer === 1) {
            playerCoins = gameState.player1Coins;
            playerCharacters = gameState.player1Characters;
            playerBadges = gameState.player1Badges || [];
        } else {
            playerCoins = gameState.player2Coins;
            playerCharacters = gameState.player2Characters;
            playerBadges = gameState.player2Badges || [];
        }
    } else {
        playerCoins = gameState.coins;
        playerCharacters = gameState.unlockedCharacters;
        playerBadges = gameState.unlockedBadges || [];
    }

    if (playerCoins < price) {
        showNotification('Not enough coins!');
        return;
    }

    // Deduct coins
    if (gameState.gameMode === 'multiplayer') {
        if (gameState.currentShopPlayer === 1) {
            gameState.player1Coins = safeCoins(gameState.player1Coins - price);
        } else {
            gameState.player2Coins = safeCoins(gameState.player2Coins - price);
        }
        updateMultiplayerCoinsDisplay();
    } else {
        gameState.coins = safeCoins(gameState.coins - price);
        updateSinglePlayerCoinsDisplay();
    }

    // Track challenge progress for chest opening
    trackChallengeProgress('chest_opened', { type: 'character' });
    trackChallengeProgress('coins_spent', { amount: price });

    // Special handling for CHOOSE chest
    if (chestType === 'choose') {
        // Get available characters and badges
        const lockedChars = Object.keys(characters).filter(char => !playerCharacters.includes(char));
        const lockedBadges = Object.keys(badges).filter(badge => !playerBadges.includes(badge));

        gameState.chooseChestAvailableChars = lockedChars;
        gameState.chooseChestAvailableBadges = lockedBadges;
        showChooseItemScreen();
        return;
    }

    // Determine number of items (MEGA gives 3)
    const numItems = chestType === 'mega' ? 3 : 1;
    const newItems = [];

    for (let i = 0; i < numItems; i++) {
        // 20% chance for coins, 24% chance for character, 56% chance for badge
        const roll = Math.random();
        const isCoins = roll < 0.20;
        const isCharacter = !isCoins && roll < 0.44; // 0.20 to 0.44 = 24%

        if (isCoins) {
            // Give coins (15-500)
            const coinReward = Math.floor(Math.random() * (500 - 15 + 1)) + 15;
            newItems.push({ type: 'coins', amount: coinReward });

            // Add coins to player
            if (gameState.gameMode === 'multiplayer') {
                if (gameState.currentShopPlayer === 1) {
                    gameState.player1Coins += coinReward;
                } else {
                    gameState.player2Coins += coinReward;
                }
                updateMultiplayerCoinsDisplay();
            } else {
                gameState.coins += coinReward;
                updateSinglePlayerCoinsDisplay();
            }
            trackChallengeProgress('coins_earned', { amount: coinReward });
        } else if (isCharacter) {
            // Get available characters
            const lockedChars = Object.keys(characters).filter(char => !playerCharacters.includes(char));

            if (lockedChars.length > 0) {
                const newChar = selectItemByChestRarity(lockedChars, chestRarities[chestType], 'character');
                newItems.push({ type: 'character', id: newChar });

                // Add to collection
                if (gameState.gameMode === 'multiplayer') {
                    if (gameState.currentShopPlayer === 1) {
                        gameState.player1Characters.push(newChar);
                    } else {
                        gameState.player2Characters.push(newChar);
                    }
                } else {
                    gameState.unlockedCharacters.push(newChar);
                }

                // Track character collection
                trackChallengeProgress('character_collected');
            } else {
                // No characters available, give badge instead
                const lockedBadges = Object.keys(badges).filter(badge => !playerBadges.includes(badge));
                if (lockedBadges.length > 0) {
                    const newBadge = selectItemByChestRarity(lockedBadges, chestRarities[chestType], 'badge');
                    newItems.push({ type: 'badge', id: newBadge });

                    // Add to collection
                    if (gameState.gameMode === 'multiplayer') {
                        if (gameState.currentShopPlayer === 1) {
                            if (!gameState.player1Badges) gameState.player1Badges = [];
                            gameState.player1Badges.push(newBadge);
                        } else {
                            if (!gameState.player2Badges) gameState.player2Badges = [];
                            gameState.player2Badges.push(newBadge);
                        }
                    } else {
                        if (!gameState.unlockedBadges) gameState.unlockedBadges = [];
                        gameState.unlockedBadges.push(newBadge);
                    }

                    // Track badge collection
                    trackChallengeProgress('badge_collected', { rarity: badges[newBadge].rarity });
                }
            }
        } else {
            // Give badge
            const lockedBadges = Object.keys(badges).filter(badge => !playerBadges.includes(badge));

            if (lockedBadges.length > 0) {
                const newBadge = selectItemByChestRarity(lockedBadges, chestRarities[chestType], 'badge');
                newItems.push({ type: 'badge', id: newBadge });

                // Add to collection
                if (gameState.gameMode === 'multiplayer') {
                    if (gameState.currentShopPlayer === 1) {
                        if (!gameState.player1Badges) gameState.player1Badges = [];
                        gameState.player1Badges.push(newBadge);
                    } else {
                        if (!gameState.player2Badges) gameState.player2Badges = [];
                        gameState.player2Badges.push(newBadge);
                    }
                } else {
                    if (!gameState.unlockedBadges) gameState.unlockedBadges = [];
                    gameState.unlockedBadges.push(newBadge);
                }

                // Track badge collection
                trackChallengeProgress('badge_collected', { rarity: badges[newBadge].rarity });
            } else {
                // No badges available, give character instead
                const lockedChars = Object.keys(characters).filter(char => !playerCharacters.includes(char));
                if (lockedChars.length > 0) {
                    const newChar = selectItemByChestRarity(lockedChars, chestRarities[chestType], 'character');
                    newItems.push({ type: 'character', id: newChar });

                    // Add to collection
                    if (gameState.gameMode === 'multiplayer') {
                        if (gameState.currentShopPlayer === 1) {
                            gameState.player1Characters.push(newChar);
                        } else {
                            gameState.player2Characters.push(newChar);
                        }
                    } else {
                        gameState.unlockedCharacters.push(newChar);
                    }

                    // Track character collection
                    trackChallengeProgress('character_collected');
                }
            }
        }
    }

    // Show unified chest opening animation
    showUnifiedChestAnimation(newItems, chestType);
}

function buyBadgeChest(chestType) {
    const chestPrices = {
        'common_badge': 100,
        'rare_badge': 200,
        'epic_badge': 350,
        'legendary_badge': 500,
        'mega_badge': 600,
        'guaranteed_legendary_badge': 1000,
        'choose_badge': 1200
    };

    const chestRarities = {
        'common_badge': { common: 0.80, rare: 0.15, epic: 0.04, legendary: 0.01 },
        'rare_badge': { common: 0.50, rare: 0.35, epic: 0.13, legendary: 0.02 },
        'epic_badge': { common: 0.30, rare: 0.30, epic: 0.30, legendary: 0.10 },
        'legendary_badge': { common: 0.20, rare: 0.20, epic: 0.20, legendary: 0.40 },
        'mega_badge': { common: 0.45, rare: 0.35, epic: 0.17, legendary: 0.03 },
        'guaranteed_legendary_badge': { common: 0.00, rare: 0.00, epic: 0.00, legendary: 1.00 }
    };
    
    const price = chestPrices[chestType];
    
    let playerCoins, currentBadges;
    if (gameState.gameMode === 'multiplayer') {
        if (gameState.currentShopPlayer === 1) {
            playerCoins = gameState.player1Coins;
            currentBadges = gameState.player1Badges || [];
        } else {
            playerCoins = gameState.player2Coins;
            currentBadges = gameState.player2Badges || [];
        }
    } else {
        playerCoins = gameState.coins;
        currentBadges = gameState.unlockedBadges || [];
    }
    
    if (playerCoins < price) {
        showNotification('Not enough coins!');
        return;
    }
    
    // Get available badges
    const lockedBadges = Object.keys(badges).filter(badgeId => 
        !currentBadges.includes(badgeId)
    );
    
    if (lockedBadges.length === 0) {
        showNotification('You already have all badges!');
        return;
    }
    
    // Deduct coins
    if (gameState.gameMode === 'multiplayer') {
        if (gameState.currentShopPlayer === 1) {
            gameState.player1Coins = safeCoins(gameState.player1Coins - price);
        } else {
            gameState.player2Coins = safeCoins(gameState.player2Coins - price);
        }
        updateMultiplayerCoinsDisplay();
    } else {
        gameState.coins = safeCoins(gameState.coins - price);
        updateSinglePlayerCoinsDisplay();
    }
    
    // Special handling for CHOOSE YOUR BADGE chest
    if (chestType === 'choose_badge') {
        gameState.chooseBadgeAvailableBadges = lockedBadges;
        showChooseBadgeScreen();
        return;
    }
    
    // Get badges based on rarity
    const numBadges = chestType === 'mega_badge' ? 3 : 1;
    const newBadges = [];
    
    for (let i = 0; i < numBadges && lockedBadges.length > 0; i++) {
        const newBadge = selectBadgeByChestRarity(lockedBadges, chestRarities[chestType]);
        newBadges.push(newBadge);
        
        // Add to collection
        if (gameState.gameMode === 'multiplayer') {
            if (gameState.currentShopPlayer === 1) {
                if (!gameState.player1Badges) gameState.player1Badges = [];
                gameState.player1Badges.push(newBadge);
            } else {
                if (!gameState.player2Badges) gameState.player2Badges = [];
                gameState.player2Badges.push(newBadge);
            }
        } else {
            if (!gameState.unlockedBadges) gameState.unlockedBadges = [];
            gameState.unlockedBadges.push(newBadge);
        }
        
        // Remove from locked badges for next iteration
        const index = lockedBadges.indexOf(newBadge);
        if (index > -1) {
            lockedBadges.splice(index, 1);
        }
    }

    // Track challenge progress
    trackChallengeProgress('chest_opened', { type: 'badge' });
    // Track all badges collected from this chest
    newBadges.forEach(badgeId => {
        trackChallengeProgress('badge_collected', { rarity: badges[badgeId].rarity });
    });
    trackChallengeProgress('coins_spent', { amount: price });

    // Show badge chest animation (create one for badges)
    showBadgeChestAnimation(newBadges, chestType);
}

function buyAddonChest(chestType = 'common') {
    const chestPrices = {
        common: 150,
        rare: 300,
        epic: 500,
        legendary: 800
    };

    const chestRarities = {
        common: { common: 0.70, rare: 0.25, epic: 0.04, legendary: 0.01 },
        rare: { common: 0.45, rare: 0.35, epic: 0.17, legendary: 0.03 },
        epic: { common: 0.35, rare: 0.35, epic: 0.20, legendary: 0.10 },
        legendary: { common: 0.30, rare: 0.25, epic: 0.20, legendary: 0.25 }
    };

    const price = chestPrices[chestType];
    let currentCoins, playerAddons;

    if (gameState.gameMode === 'multiplayer') {
        currentCoins = gameState.currentShopPlayer === 1 ? gameState.player1Coins : gameState.player2Coins;
        playerAddons = gameState.currentShopPlayer === 1 ? gameState.player1Addons : gameState.player2Addons;
    } else {
        currentCoins = gameState.coins;
        playerAddons = gameState.unlockedAddons;
    }

    if (currentCoins < price) {
        showNotification(`Not enough coins! Need ${price} coins.`);
        return;
    }

    // Deduct coins
    if (gameState.gameMode === 'multiplayer') {
        if (gameState.currentShopPlayer === 1) {
            gameState.player1Coins = safeCoins(gameState.player1Coins - price);
        } else {
            gameState.player2Coins = safeCoins(gameState.player2Coins - price);
        }
        updateMultiplayerCoinsDisplay();
    } else {
        gameState.coins = safeCoins(gameState.coins - price);
        updateSinglePlayerCoinsDisplay();
    }

    // Get available addons
    const lockedAddons = Object.keys(addons).filter(addon => !playerAddons.includes(addon));

    if (lockedAddons.length === 0) {
        showNotification('You have all addons!');
        return;
    }

    // First, select addon TYPE with equal 25% chance for each
    const addonTypes = ['hat', 'shirt', 'pants', 'shoes'];
    const randomType = addonTypes[Math.floor(Math.random() * addonTypes.length)];

    // Filter locked addons by the selected type
    const lockedAddonsOfType = lockedAddons.filter(key => addons[key].type === randomType);

    // If no locked addons of this type, pick from any available type
    const addonsToChooseFrom = lockedAddonsOfType.length > 0 ? lockedAddonsOfType : lockedAddons;

    // Select addon by rarity from the chosen type
    const newAddon = selectItemByChestRarity(addonsToChooseFrom, chestRarities[chestType], 'addon');

    // Add to collection
    if (gameState.gameMode === 'multiplayer') {
        if (gameState.currentShopPlayer === 1) {
            if (!gameState.player1Addons) gameState.player1Addons = [];
            gameState.player1Addons.push(newAddon);
        } else {
            if (!gameState.player2Addons) gameState.player2Addons = [];
            gameState.player2Addons.push(newAddon);
        }
    } else {
        if (!gameState.unlockedAddons) gameState.unlockedAddons = [];
        gameState.unlockedAddons.push(newAddon);
    }

    // Track addon collection and chest opening
    trackChallengeProgress('addon_collected');
    trackChallengeProgress('chest_opened', { type: 'addon' });
    trackChallengeProgress('coins_spent', { amount: price });

    // Show addon animation
    showAddonChestAnimation(newAddon, chestType);

    // Save game state
    saveGameState();
}

function showUnifiedChestAnimation(items, chestType) {
    const chestOpening = document.getElementById('chestOpening');
    const characterReveal = document.getElementById('characterReveal');
    const rarityGlow = document.getElementById('rarityGlow');
    const rarityText = document.getElementById('rarityText');
    const particles = document.getElementById('particles');

    // Reset all classes and content
    characterReveal.className = 'character-reveal emoji';
    rarityGlow.className = 'rarity-glow';
    rarityText.textContent = '';
    characterReveal.textContent = '';
    particles.innerHTML = '';

    // Remove any existing stat reveal elements
    const existingStats = chestOpening.querySelectorAll('.stat-reveal');
    existingStats.forEach(stat => stat.remove());

    // Set chest colors based on chest type
    const chestElement = chestOpening.querySelector('.chest-animation');
    const chestLid = chestOpening.querySelector('.chest-lid');

    if (chestElement && chestLid) {
        let bodyColor, lidColor, glowColor;

        switch(chestType) {
            case 'common':
                bodyColor = '#7d7d7d';
                lidColor = '#bdbdbd';
                glowColor = '#9e9e9e';
                break;
            case 'rare':
                bodyColor = '#1976d2';
                lidColor = '#42a5f5';
                glowColor = '#2196f3';
                break;
            case 'epic':
                bodyColor = '#7b1fa2';
                lidColor = '#ba68c8';
                glowColor = '#9c27b0';
                break;
            case 'legendary':
                bodyColor = '#e65100';
                lidColor = '#ffb74d';
                glowColor = '#ff9800';
                break;
            case 'mega':
                bodyColor = '#FF6B35';
                lidColor = '#FFD700';
                glowColor = '#FFA500';
                break;
            case 'guaranteed':
                bodyColor = '#FF6B35';
                lidColor = '#FFD700';
                glowColor = '#FF9800';
                break;
            case 'choose':
                bodyColor = '#7b1fa2';
                lidColor = '#E91E63';
                glowColor = '#9C27B0';
                break;
            default:
                bodyColor = '#7d7d7d';
                lidColor = '#bdbdbd';
                glowColor = '#9e9e9e';
        }

        chestElement.style.background = bodyColor;
        chestLid.style.background = `linear-gradient(to bottom, ${lidColor}, ${bodyColor})`;
        chestElement.style.boxShadow = `0 0 30px ${glowColor}`;
    }

    chestOpening.style.display = 'flex';

    // Store items for sequential reveal
    let currentItemIndex = 0;
    const timeline = [];

    // Build timeline for sequential item reveals
    timeline.push({ time: 0, action: () => {
        chestElement.classList.add('shake');
    }});

    timeline.push({ time: 800, action: () => {
        chestElement.classList.remove('shake');
        chestLid.classList.add('open');
    }});

    // For each item, show stats sequentially
    let currentTime = 1300;
    items.forEach((item, index) => {
        timeline.push({ time: currentTime, action: () => {
            showItemStats(item, index);
        }});
        currentTime += 2000; // 2 seconds per item
    });

    // Final reveal showing all items together
    timeline.push({ time: currentTime, action: () => {
        showFinalReveal();
    }});

    function showItemStats(item, index) {
        // Clear previous content
        characterReveal.textContent = '';
        rarityText.textContent = '';
        particles.innerHTML = '';

        // Remove old stat reveals
        const oldStats = chestOpening.querySelectorAll('.stat-reveal');
        oldStats.forEach(stat => stat.remove());

        if (item.type === 'character') {
            const char = characters[item.id];

            // Show character emoji
            characterReveal.textContent = char.emoji;
            characterReveal.className = 'character-reveal emoji show';

            // Show rarity with "CHARACTER" label
            rarityGlow.className = `rarity-glow ${char.rarity} show`;
            rarityText.textContent = `${char.rarity.toUpperCase()} CHARACTER`;
            rarityText.style.color = rarityColors[char.rarity];

            // Create stat reveal element
            const statReveal = document.createElement('div');
            statReveal.className = 'stat-reveal';
            statReveal.innerHTML = `
                <div style="font-size: 24px; font-weight: bold; color: ${rarityColors[char.rarity]}; margin-bottom: 10px;">${char.name}</div>
                <div style="font-size: 16px; color: #FFD700;">❤️ HP: ${char.maxHealth}</div>
                <div style="font-size: 16px;">⚔️ Normal: ${char.damage}</div>
                <div style="font-size: 16px; color: #FF4444;">💥 Special: ${char.specialDamage}</div>
                <div style="font-size: 14px; color: ${char.specialType === 'long' ? '#4CAF50' : '#FF9800'};">${char.specialType === 'long' ? '📡 LONG RANGE' : '⚔️ CLOSE RANGE'}</div>
                <div style="font-size: 14px; color: #888;">⏱️ Reload: ${(char.reloadTime/60).toFixed(1)}s</div>
            `;
            chestOpening.appendChild(statReveal);

            createParticles(particles, char.rarity);
        } else if (item.type === 'badge') {
            // Badge
            const badge = badges[item.id];

            // Show badge emoji
            characterReveal.textContent = badge.emoji;
            characterReveal.className = 'character-reveal emoji show';

            // Show rarity with "BADGE" label
            rarityGlow.className = `rarity-glow ${badge.rarity} show`;
            rarityText.textContent = `${badge.rarity.toUpperCase()} BADGE`;
            rarityText.style.color = rarityColors[badge.rarity];

            // Create stat reveal element
            const statReveal = document.createElement('div');
            statReveal.className = 'stat-reveal';
            statReveal.innerHTML = `
                <div style="font-size: 24px; font-weight: bold; color: ${rarityColors[badge.rarity]}; margin-bottom: 10px;">${badge.name}</div>
                <div style="font-size: 16px; color: #888; text-align: center; max-width: 300px;">${badge.description}</div>
            `;
            chestOpening.appendChild(statReveal);

            createParticles(particles, badge.rarity);
        } else if (item.type === 'coins') {
            // Coins
            // Show coin emoji
            characterReveal.textContent = '💰';
            characterReveal.className = 'character-reveal emoji show';

            // Show as "rare" rarity for visual effect
            rarityGlow.className = `rarity-glow rare show`;
            rarityText.textContent = `COINS`;
            rarityText.style.color = rarityColors['rare'];

            // Create stat reveal element
            const statReveal = document.createElement('div');
            statReveal.className = 'stat-reveal';
            statReveal.innerHTML = `
                <div style="font-size: 32px; font-weight: bold; color: ${rarityColors['rare']}; margin-bottom: 10px;">${item.amount} Coins</div>
                <div style="font-size: 16px; color: #888; text-align: center; max-width: 300px;">Use coins to buy more chests!</div>
            `;
            chestOpening.appendChild(statReveal);

            createParticles(particles, 'rare');
        }
    }

    function showFinalReveal() {
        // Clear stat reveals
        const oldStats = chestOpening.querySelectorAll('.stat-reveal');
        oldStats.forEach(stat => stat.remove());

        // Determine highest rarity
        let highestRarity = 'common';
        items.forEach(item => {
            if (item.type === 'coins') {
                // Coins count as "rare" for visual purposes
                if (highestRarity !== 'legendary' && highestRarity !== 'epic') highestRarity = 'rare';
            } else {
                const itemRarity = item.type === 'character' ? characters[item.id].rarity : badges[item.id].rarity;
                if (itemRarity === 'legendary') highestRarity = 'legendary';
                else if (itemRarity === 'epic' && highestRarity !== 'legendary') highestRarity = 'epic';
                else if (itemRarity === 'rare' && highestRarity !== 'legendary' && highestRarity !== 'epic') highestRarity = 'rare';
            }
        });

        // Show all items together
        let displayText = '';
        items.forEach(item => {
            if (item.type === 'character') {
                displayText += characters[item.id].emoji;
            } else if (item.type === 'badge') {
                displayText += badges[item.id].emoji;
            } else if (item.type === 'coins') {
                displayText += '💰';
            }
        });

        characterReveal.textContent = displayText;
        rarityGlow.className = `rarity-glow ${highestRarity} show`;

        if (items.length > 1) {
            rarityText.textContent = `${items.length} ITEMS!`;
        } else {
            const item = items[0];
            if (item.type === 'coins') {
                rarityText.textContent = 'COINS';
            } else {
                const itemRarity = item.type === 'character' ? characters[item.id].rarity : badges[item.id].rarity;
                rarityText.textContent = itemRarity.toUpperCase();
            }
        }

        rarityText.style.color = rarityColors[highestRarity];
        characterReveal.className = 'character-reveal emoji show';
        particles.innerHTML = '';
        createParticles(particles, highestRarity);

        // End animation after 1.5 seconds
        setTimeout(() => {
            endUnifiedChestAnimation(items, chestType);
        }, 1500);
    }

    // Store animation state
    currentUnifiedChestAnimation = {
        timeouts: [],
        items: items,
        chestType: chestType
    };

    // Schedule all timeline events
    timeline.forEach(event => {
        const timeout = setTimeout(event.action, event.time);
        currentUnifiedChestAnimation.timeouts.push(timeout);
    });
}

function showBadgeChestAnimation(badgeIds, chestType) {
    const chestOpening = document.getElementById('chestOpening');
    const characterReveal = document.getElementById('characterReveal');
    const rarityGlow = document.getElementById('rarityGlow');
    const rarityText = document.getElementById('rarityText');
    const particles = document.getElementById('particles');
    
    // Reset all classes and content
    characterReveal.className = 'character-reveal emoji';
    rarityGlow.className = 'rarity-glow';
    rarityText.textContent = '';
    characterReveal.textContent = '';
    particles.innerHTML = '';
    
    // BADGE CHEST COLORS! - Set special badge chest colors
    const chestElement = chestOpening.querySelector('.chest-animation');
    const chestLid = chestOpening.querySelector('.chest-lid');
    
    if (chestElement && chestLid) {
        let bodyColor, lidColor, glowColor;
        
        switch(chestType) {
            case 'common_badge':
                bodyColor = '#7d7d7d';
                lidColor = '#bdbdbd';
                glowColor = '#9e9e9e';
                chestElement.style.background = `linear-gradient(45deg, ${bodyColor}, ${lidColor})`;
                chestLid.style.background = `linear-gradient(45deg, ${lidColor}, ${glowColor})`;
                break;
            case 'rare_badge':
                bodyColor = '#1976d2';
                lidColor = '#42a5f5';
                glowColor = '#2196f3';
                chestElement.style.background = `linear-gradient(45deg, ${bodyColor}, ${lidColor})`;
                chestLid.style.background = `linear-gradient(45deg, ${lidColor}, ${glowColor})`;
                break;
            case 'epic_badge':
                bodyColor = '#7b1fa2';
                lidColor = '#ba68c8';
                glowColor = '#9c27b0';
                chestElement.style.background = `linear-gradient(45deg, ${bodyColor}, ${lidColor})`;
                chestLid.style.background = `linear-gradient(45deg, ${lidColor}, ${glowColor})`;
                break;
            case 'legendary_badge':
                bodyColor = '#f57c00';
                lidColor = '#ffb74d';
                glowColor = '#ff9800';
                chestElement.style.background = `linear-gradient(45deg, ${bodyColor}, ${lidColor})`;
                chestLid.style.background = `linear-gradient(45deg, ${lidColor}, ${glowColor})`;
                break;
            case 'mega_badge':
                // MEGA BADGE CHEST - Special badge rainbow!
                chestElement.style.background = `linear-gradient(45deg, #FFD700, #FF6B35, #9C27B0, #FFD700)`;
                chestLid.style.background = `linear-gradient(45deg, #FFA500, #FFD700, #9C27B0, #FFA500)`;
                glowColor = '#FFD700';
                break;
            case 'guaranteed_legendary_badge':
                // GUARANTEED LEGENDARY BADGE - Divine badge glow!
                chestElement.style.background = `linear-gradient(45deg, #FF9800, #FFD700, #FFFFFF, #FF9800)`;
                chestLid.style.background = `linear-gradient(45deg, #FFD700, #FFFFFF, #FF9800, #FFD700)`;
                glowColor = '#FF9800';
                break;
            case 'choose_badge':
                // CHOOSE BADGE - Mystical badge selection!
                chestElement.style.background = `linear-gradient(45deg, #9C27B0, #E91E63, #FF6B35, #9C27B0)`;
                chestLid.style.background = `linear-gradient(45deg, #E91E63, #FF6B35, #9C27B0, #E91E63)`;
                glowColor = '#9C27B0';
                break;
            default:
                bodyColor = '#7d7d7d';
                lidColor = '#bdbdbd';
                glowColor = '#9e9e9e';
                chestElement.style.background = `linear-gradient(45deg, ${bodyColor}, ${lidColor})`;
                chestLid.style.background = `linear-gradient(45deg, ${lidColor}, ${glowColor})`;
                break;
        }
        
        // Set border colors for all badge chests
        chestElement.style.borderColor = glowColor;
        chestLid.style.borderColor = glowColor;
        
        // Add special glow for premium badge chests
        if (['legendary_badge', 'mega_badge', 'guaranteed_legendary_badge', 'choose_badge'].includes(chestType)) {
            chestElement.style.boxShadow = `0 0 30px ${glowColor}`;
            chestLid.style.boxShadow = `0 0 20px ${glowColor}`;
            
            if (chestType === 'mega_badge') {
                chestElement.style.boxShadow = `0 0 30px #FFD700, 0 0 60px #9C27B0`;
            } else if (chestType === 'guaranteed_legendary_badge') {
                chestElement.style.boxShadow = `0 0 30px #FF9800, 0 0 60px #FFFFFF`;
            } else if (chestType === 'choose_badge') {
                chestElement.style.boxShadow = `0 0 30px #9C27B0, 0 0 60px #E91E63`;
            }
        }
    }
    
    // Show the chest opening immediately
    chestOpening.style.display = 'block';
    
    // Simple 3-second timeline for badge chests (like old character animation)
    setTimeout(() => {
        // Show badge reveal after chest opens (1.5 seconds)
        revealBadges();
    }, 1500);
    
    setTimeout(() => {
        // End animation after 3 seconds total
        endBadgeChestAnimation(badgeIds, chestType);
    }, 3000);
    
    function revealBadges() {
        const primaryBadge = badges[badgeIds[0]];
        
        if (chestType === 'mega_badge') {
            // Show all 3 badge emojis together
            let badgeDisplay = '';
            let highestRarity = 'common';
            
            badgeIds.forEach(badgeId => {
                const badge = badges[badgeId];
                badgeDisplay += badge.emoji;
                if (badge.rarity === 'legendary' || badge.rarity === 'epic') {
                    highestRarity = badge.rarity;
                } else if (badge.rarity === 'rare' && highestRarity === 'common') {
                    highestRarity = badge.rarity;
                }
            });
            
            characterReveal.textContent = badgeDisplay;
            rarityGlow.className = `rarity-glow ${highestRarity} show`;
            rarityText.textContent = 'MEGA BADGES!';
            rarityText.style.color = rarityColors[highestRarity];
        } else {
            // Show single badge
            characterReveal.textContent = primaryBadge.emoji;
            rarityGlow.className = `rarity-glow ${primaryBadge.rarity} show`;
            rarityText.textContent = `${primaryBadge.rarity.toUpperCase()} BADGE`;
            rarityText.style.color = rarityColors[primaryBadge.rarity];
        }
        
        characterReveal.className = 'character-reveal emoji show';
        createBadgeParticles(particles, primaryBadge.rarity);
    }
}

function showAddonChestAnimation(addonKey, chestType) {
    const chestOpening = document.getElementById('chestOpening');
    const characterReveal = document.getElementById('characterReveal');
    const rarityGlow = document.getElementById('rarityGlow');
    const rarityText = document.getElementById('rarityText');
    const particles = document.getElementById('particles');

    const addon = addons[addonKey];
    const rarityColors = {
        common: '#9e9e9e',
        rare: '#2196f3',
        epic: '#9c27b0',
        legendary: '#ff9800'
    };

    const chestColors = {
        common: '#9e9e9e',
        rare: '#2196f3',
        epic: '#9c27b0',
        legendary: '#ff9800'
    };

    // Show chest opening screen
    chestOpening.style.display = 'flex';
    characterReveal.textContent = '';
    characterReveal.className = 'character-reveal'; // Reset class
    rarityGlow.className = 'rarity-glow';
    rarityText.textContent = '';
    particles.innerHTML = '';

    // Remove any existing stat reveals
    const existingStatReveals = chestOpening.querySelectorAll('.stat-reveal');
    existingStatReveals.forEach(el => el.remove());

    // Set chest color
    chestOpening.style.background = `radial-gradient(circle, ${chestColors[chestType]}, #1a1a1a)`;

    // Animation timeline
    const timeline = [
        { time: 0, action: () => {
            // Chest shake
            chestOpening.style.animation = 'shake 0.8s ease-in-out';
        }},
        { time: 800, action: () => {
            // Lid opens
            chestOpening.style.animation = 'lidOpen 0.5s ease-out';
        }},
        { time: 1300, action: () => {
            // Create canvas to draw addon
            const addonCanvas = document.createElement('canvas');
            addonCanvas.width = 300;
            addonCanvas.height = 300;
            addonCanvas.style.margin = '20px auto';
            const addonCtx = addonCanvas.getContext('2d');

            // Extract country/sport/theme from key
            const getCountrySport = (key) => {
                if (!key) return { country: null, sport: null };
                const country = key.includes('_') ? key.split('_')[1] : null;
                const sports = ['soccer', 'basketball', 'baseball', 'football', 'hockey', 'tennis', 'golf', 'boxing', 'racing', 'cycling'];
                const themes = ['wizard', 'knight', 'ninja', 'chef', 'doctor', 'pilot', 'winter', 'summer', '80s', '90s', 'army', 'navy'];
                const sport = sports.find(s => key.includes(s)) || themes.find(t => key.includes(t));
                return { country, sport };
            };

            const { country, sport } = getCountrySport(addonKey);

            // Draw the addon based on type with proper item rendering
            addonCtx.shadowColor = addon.color;
            addonCtx.shadowBlur = 20;

            if (addon.type === 'hat') {
                drawHat(addonCtx, 150, 150, 60, 50, addon.color, country, sport);
            } else if (addon.type === 'shirt') {
                drawShirt(addonCtx, 150, 80, 220, 90, 80, 210, 80, 60, 180, 240, 180, 50, addon.color, country, sport);
            } else if (addon.type === 'pants') {
                drawPants(addonCtx, 150, 80, 120, 250, 180, 250, 35, addon.color, country, sport);
            } else if (addon.type === 'shoes') {
                drawShoe(addonCtx, 60, 150, 70, 40, addon.color, country, sport);
                drawShoe(addonCtx, 170, 150, 70, 40, addon.color, country, sport);
            }

            characterReveal.innerHTML = '';
            characterReveal.appendChild(addonCanvas);
            characterReveal.className = 'character-reveal show'; // Make canvas visible

            // Show rarity
            rarityGlow.className = `rarity-glow ${addon.rarity} show`;
            rarityText.textContent = `${addon.rarity.toUpperCase()} ${addon.type.toUpperCase()}`;
            rarityText.style.color = rarityColors[addon.rarity];

            // Create stat reveal element
            const statReveal = document.createElement('div');
            statReveal.className = 'stat-reveal';
            statReveal.innerHTML = `
                <div style="font-size: 24px; font-weight: bold; color: ${rarityColors[addon.rarity]}; margin-bottom: 10px;">${addon.name}</div>
                <div style="font-size: 16px; color: #FFD700;">Type: ${addon.type.toUpperCase()}</div>
                <div style="font-size: 16px; color: ${addon.color};">Primary Color: ${addon.color}</div>
                <div style="font-size: 14px; color: #AAA;">Pattern: ${addon.pattern}</div>
            `;
            chestOpening.appendChild(statReveal);

            // Create particles
            createParticles(particles, addon.rarity);
        }},
        { time: 3300, action: () => {
            // Final reveal - show all info
            const playerName = gameState.gameMode === 'multiplayer' ? `Player ${gameState.currentShopPlayer}` : '';
            showNotification(`${playerName ? playerName + ' ' : ''}unlocked ${addon.name}!\n${addon.rarity.toUpperCase()} ${addon.type.toUpperCase()}`);
        }},
        { time: 5300, action: () => {
            // Close chest opening screen
            chestOpening.style.display = 'none';
            chestOpening.style.animation = '';
        }}
    ];

    // Execute timeline
    timeline.forEach(event => {
        setTimeout(event.action, event.time);
    });
}

function endChestAnimation(characterKeys, chestType) {
    const chestOpening = document.getElementById('chestOpening');
    
    // Cleanup
    if (currentChestAnimation) {
        currentChestAnimation.cleanup();
        currentChestAnimation = null;
    }
    
    chestOpening.style.display = 'none';
    
    let playerName = '';
    if (gameState.gameMode === 'multiplayer') {
        playerName = gameState.currentShopPlayer === 1 ? 'Player 1' : 'Player 2';
    }
    
    if (chestType === 'mega') {
        let message = `${playerName ? playerName + ' ' : ''}MEGA CHEST UNLOCKED!\n`;
        characterKeys.forEach((charKey, index) => {
            const character = characters[charKey];
            message += `${index + 1}. ${character.name} ${character.emoji} (${character.rarity.toUpperCase()})\n`;
        });
        showNotification(message);
    } else {
        const character = characters[characterKeys[0]];
        showNotification(`${playerName ? playerName + ' ' : ''}unlocked ${character.name}! ${character.emoji}\n${character.rarity.toUpperCase()} • HP: ${character.maxHealth} • Normal: ${character.damage} • Special: ${character.specialDamage}`);
    }
}

function endBadgeChestAnimation(badgeIds, chestType) {
    const chestOpening = document.getElementById('chestOpening');
    chestOpening.style.display = 'none';

    let playerName = '';
    if (gameState.gameMode === 'multiplayer') {
        playerName = gameState.currentShopPlayer === 1 ? 'Player 1' : 'Player 2';
    }

    if (chestType === 'mega_badge') {
        let message = `${playerName ? playerName + ' ' : ''}MEGA BADGE CHEST!\n`;
        badgeIds.forEach((badgeId, index) => {
            const badge = badges[badgeId];
            message += `🏅 ${badge.name} ${badge.emoji} (${badge.rarity.toUpperCase()})\n`;
        });
        message += `\nTotal: ${badgeIds.length} badges unlocked!`;
        showNotification(message);
    } else {
        const badge = badges[badgeIds[0]];
        showNotification(`${playerName ? playerName + ' ' : ''}Badge Unlocked!\n🏅 ${badge.emoji} ${badge.name}\n${badge.rarity.toUpperCase()} • ${badge.description}`);
    }
}

// Make functions globally available for onclick handlers
window.buyChest = buyChest;
window.buyBadgeChest = buyBadgeChest;
window.buyAddonChest = buyAddonChest;
window.showUnifiedChestAnimation = showUnifiedChestAnimation;
window.showBadgeChestAnimation = showBadgeChestAnimation;
window.showAddonChestAnimation = showAddonChestAnimation;
window.endChestAnimation = endChestAnimation;
window.endBadgeChestAnimation = endBadgeChestAnimation;
window.endAddonChestAnimation = endAddonChestAnimation;

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { buyChest, buyBadgeChest, buyAddonChest, showUnifiedChestAnimation, showBadgeChestAnimation, showAddonChestAnimation, endChestAnimation, endBadgeChestAnimation, endAddonChestAnimation };
}
