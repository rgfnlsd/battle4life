
    // Enhanced Game State with CHALLENGES and BADGES!
    // Game Mode Selection Screen
    const gameModes = {
        normal: {
            name: 'Normal',
            description: 'Classic battle mode',
            emoji: '⚔️'
        },
        special_drop: {
            name: 'Special Drop',
            description: 'Items drop every 15 seconds',
            emoji: '📦'
        }
    };

    // Special Drop Items
    const specialDropItems = {
        sword: { name: 'Sword', emoji: '⚔️', damage: 50, type: 'weapon', duration: 10000 },
        nuke: { name: 'Nuke', emoji: '💣', damage: 100, type: 'explosive', radius: 100, duration: 10000 },
        knife: { name: 'Knife', emoji: '🔪', damage: 30, type: 'weapon', duration: 10000 },
        shield: { name: 'Shield', emoji: '🛡️', defense: 20, type: 'defense', duration: 10000 },
        heal: { name: 'Health Potion', emoji: '🧪', heal: 75, type: 'consumable', duration: 0 },
        speed: { name: 'Speed Boost', emoji: '💨', speedMultiplier: 2, type: 'buff', duration: 10000 },
        lightning: { name: 'Lightning', emoji: '⚡', damage: 80, type: 'instant', duration: 0 },
        freeze: { name: 'Freeze Ray', emoji: '❄️', freezeDuration: 3000, type: 'debuff', duration: 10000 },
        fire: { name: 'Fire Bomb', emoji: '🔥', damage: 60, type: 'area', radius: 80, duration: 10000 },
        poison: { name: 'Poison Gas', emoji: '☠️', poisonDamage: 10, poisonDuration: 5000, type: 'debuff', duration: 10000 },
        rocket: { name: 'Rocket', emoji: '🚀', damage: 90, type: 'projectile', duration: 10000 },
        laser: { name: 'Laser Gun', emoji: '🔫', damage: 40, type: 'weapon', duration: 10000 },
        bomb: { name: 'Bomb', emoji: '💥', damage: 70, type: 'explosive', radius: 60, duration: 10000 },
        hammer: { name: 'War Hammer', emoji: '🔨', damage: 55, type: 'weapon', duration: 10000 },
        bow: { name: 'Bow', emoji: '🏹', damage: 45, type: 'ranged', duration: 10000 },
        magic: { name: 'Magic Wand', emoji: '🪄', damage: 65, type: 'magic', duration: 10000 },
        spear: { name: 'Spear', emoji: '🔱', damage: 48, type: 'weapon', duration: 10000 },
        axe: { name: 'Battle Axe', emoji: '🪓', damage: 58, type: 'weapon', duration: 10000 },
        mace: { name: 'Mace', emoji: '⚒️', damage: 52, type: 'weapon', duration: 10000 },
        whip: { name: 'Whip', emoji: '🪢', damage: 35, type: 'weapon', duration: 10000 },
        chain: { name: 'Chain', emoji: '⛓️', damage: 40, type: 'weapon', duration: 10000 },
        boomerang: { name: 'Boomerang', emoji: '🪃', damage: 42, type: 'ranged', duration: 10000 },
        dynamite: { name: 'Dynamite', emoji: '🧨', damage: 85, type: 'explosive', radius: 90, duration: 10000 },
        trident: { name: 'Trident', emoji: '🔱', damage: 53, type: 'weapon', duration: 10000 },
        crystal: { name: 'Power Crystal', emoji: '💎', powerBoost: 1.5, type: 'buff', duration: 10000 },
        anchor: { name: 'Anchor', emoji: '⚓', damage: 60, type: 'heavy', duration: 10000 },
        cannon: { name: 'Cannon', emoji: '💣', damage: 95, type: 'heavy', duration: 10000 },
        meteor: { name: 'Meteor', emoji: '☄️', damage: 120, type: 'ultimate', radius: 120, duration: 10000 },
        tornado: { name: 'Tornado', emoji: '🌪️', damage: 75, type: 'area', radius: 100, duration: 10000 },
        earthquake: { name: 'Earthquake', emoji: '🌍', damage: 80, type: 'global', duration: 10000 },
        tsunami: { name: 'Tsunami', emoji: '🌊', damage: 90, type: 'wave', duration: 10000 },
        volcano: { name: 'Volcano', emoji: '🌋', damage: 100, type: 'area', radius: 110, duration: 10000 },
        blackhole: { name: 'Black Hole', emoji: '🕳️', damage: 150, type: 'ultimate', radius: 150, duration: 10000 },
        diamond: { name: 'Diamond Sword', emoji: '💠', damage: 75, type: 'legendary', duration: 10000 },
        star: { name: 'Shooting Star', emoji: '⭐', damage: 85, type: 'celestial', duration: 10000 },
        moon: { name: 'Moon Beam', emoji: '🌙', damage: 70, type: 'celestial', duration: 10000 },
        sun: { name: 'Solar Flare', emoji: '☀️', damage: 110, type: 'celestial', duration: 10000 },
        comet: { name: 'Comet Strike', emoji: '☄️', damage: 95, type: 'celestial', duration: 10000 },
        galaxy: { name: 'Galaxy Crusher', emoji: '🌌', damage: 200, type: 'cosmic', radius: 200, duration: 10000 },
        time: { name: 'Time Stop', emoji: '⏰', freezeAll: 5000, type: 'time', duration: 0 },
        space: { name: 'Space Rift', emoji: '🌀', teleport: true, type: 'dimensional', duration: 10000 },
        void: { name: 'Void', emoji: '⬛', damage: 250, type: 'ultimate', duration: 10000 },
        chaos: { name: 'Chaos Orb', emoji: '🔮', randomEffect: true, type: 'chaos', duration: 10000 },
        destiny: { name: 'Destiny', emoji: '✨', guaranteedWin: 0.1, type: 'fate', duration: 10000 },
        infinity: { name: 'Infinity Stone', emoji: '♾️', allPowers: true, type: 'infinite', duration: 15000 },
        omega: { name: 'Omega Weapon', emoji: '🌟', damage: 300, type: 'omega', radius: 250, duration: 10000 },
        alpha: { name: 'Alpha Strike', emoji: '🔺', damage: 180, type: 'alpha', duration: 10000 },
        beta: { name: 'Beta Blast', emoji: '🔹', damage: 140, type: 'beta', duration: 10000 },
        gamma: { name: 'Gamma Ray', emoji: '☢️', damage: 160, poisonDamage: 20, type: 'radiation', duration: 10000 },
        delta: { name: 'Delta Force', emoji: '🔻', damage: 120, type: 'military', duration: 10000 }
    };

    // Helper function to ensure coins are always valid numbers (prevent NaN)
    function safeCoins(value) {
        const num = Number(value);
        return isNaN(num) || !isFinite(num) ? 0 : Math.max(0, Math.floor(num));
    }

    let gameState = {
        gameMode: null, // 'singleplayer' or 'multiplayer' - selected first
        selectedBattleMode: 'normal', // 'normal', 'special_drop', or 'flag_capture'
        currentShopPlayer: 1, // For multiplayer: which player is shopping (1 or 2)

        // Single Player Data
        coins: 75,
        unlockedCharacters: ['Spider', 'Fire', 'Ice'],
        trophies: 0, // Trophy count for single player ONLY

        // Multiplayer Data - Separate inventories
        player1Coins: 75,
        player2Coins: 75,
        player1Characters: ['Spider', 'Fire', 'Ice'],
        player2Characters: ['Cat', 'Dog', 'Boxer'],
        // NO trophies in multiplayer mode

        // Tournament System
        tournamentMode: false,
        tournamentData: {
            entryFee: 0,
            currentRound: 0,
            totalRounds: 0,
            roundNames: [],
            prizePool: 0,
            isActive: false,
            roundsWon: 0
        },

        // 2-Player Tournament System
        tournament2PlayerMode: false,
        tournament2PlayerData: {
            entryFee: 0,
            currentRound: 0,
            totalRounds: 0,
            roundNames: [],
            prizePool: 0,
            characterTier: 'common',
            seriesLength: 3,
            isActive: false,

            // Player states
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

            // Tournament flow
            currentPlayer: 1, // Which player is currently playing
            bracket: null,
            finalMatch: false // True when both players meet in finals
        },

        // Flag Capture Mode State
        flagCapture: {
            flag: null, // Flag object
            flagHolder: null, // 'player1', 'player2', or null
            holdStartTime: 0, // When the flag was picked up
            holdDuration: 15000, // 15 seconds to win
            flagDropped: false,
            nextFlagDropTime: 0,
            flagDropInterval: 8000, // Flag drops every 8 seconds if not held
            stunned: {
                player1: false,
                player2: false,
                player1StunTime: 0,
                player2StunTime: 0,
                stunDuration: 2000 // 2 seconds stun
            }
        },

        // Trophy Road Progress (SINGLE PLAYER ONLY)
        claimedMilestones: [], // Track which milestones have been claimed
        
        // NEW: CHALLENGES SYSTEM (like Frag Pro Shooter!)
        challenges: [], // Current active challenges
        completedChallenges: [], // Completed challenge IDs
        
        // NEW: BADGES SYSTEM with stat boosts!
        unlockedBadges: [], // Single player badges
        player1Badges: [], // Multiplayer badges for P1
        player2Badges: [], // Multiplayer badges for P2
        equippedBadges: [], // Currently equipped badges (3 max)
        player1EquippedBadges: [], // P1 equipped badges
        player2EquippedBadges: [], // P2 equipped badges

        // ADDONS SYSTEM - Cosmetic items!
        unlockedAddons: [], // Single player addons
        player1Addons: [], // Multiplayer addons for P1
        player2Addons: [], // Multiplayer addons for P2
        equippedAddons: { hat: null, shirt: null, pants: null, shoes: null }, // Currently equipped addons
        player1EquippedAddons: { hat: null, shirt: null, pants: null, shoes: null }, // P1 equipped addons
        player2EquippedAddons: { hat: null, shirt: null, pants: null, shoes: null }, // P2 equipped addons

        // Battle Data
        selectedCharacter: null,
        selectedPlayer2Character: null,
        selectedMap: null,
        selectedDifficulty: 'beginner',
        battle: null,

        // Character Detail
        currentDetailCharacter: null,
        favoriteCharacters: [],

        // Character-specific stats
        characterStats: {}
    };

    // MASSIVE Character Database - 160+ CHARACTERS with ALL stats!
    const characters = {
        // Common Characters (60 total) - 200-250 HP - Special Reload: 13-15s
        'Spider': { name: 'Spider Hero', emoji: '🕷️', color: '#ff0000', special: 'Web Shot', damage: 25, specialDamage: 45, specialType: 'long', maxHealth: 210, rarity: 'common', reloadTime: 45, specialReloadTime: 840 },
        'Fire': { name: 'Flame Master', emoji: '🔥', color: '#ff4500', special: 'Fire Blast', damage: 30, specialDamage: 55, specialType: 'long', maxHealth: 220, rarity: 'common', reloadTime: 50, specialReloadTime: 870 },
        'Ice': { name: 'Frost Guardian', emoji: '❄️', color: '#00ffff', special: 'Ice Shard', damage: 20, specialDamage: 40, specialType: 'long', maxHealth: 205, rarity: 'common', reloadTime: 40, specialReloadTime: 780 },
        'Soccer': { name: 'Soccer Star', emoji: '⚽', color: '#ff8c00', special: 'Power Kick', damage: 24, specialDamage: 42, specialType: 'close', maxHealth: 225, rarity: 'common', reloadTime: 35, specialReloadTime: 810 },
        'Basketball': { name: 'Slam Dunk', emoji: '🏀', color: '#ff6347', special: 'Court Slam', damage: 26, specialDamage: 44, specialType: 'close', maxHealth: 230, rarity: 'common', reloadTime: 42, specialReloadTime: 900 },
        'Boxer': { name: 'Punch Master', emoji: '🥊', color: '#8b0000', special: 'Haymaker', damage: 28, specialDamage: 48, specialType: 'close', maxHealth: 235, rarity: 'common', reloadTime: 38, specialReloadTime: 825 },
        'Cat': { name: 'Ninja Cat', emoji: '🐱', color: '#ffa500', special: 'Claw Strike', damage: 22, specialDamage: 38, specialType: 'close', maxHealth: 215, rarity: 'common', reloadTime: 30, specialReloadTime: 855 },
        'Dog': { name: 'Loyal Hound', emoji: '🐶', color: '#8b4513', special: 'Bark Blast', damage: 24, specialDamage: 40, specialType: 'long', maxHealth: 220, rarity: 'common', reloadTime: 35, specialReloadTime: 795 },
        'Monkey': { name: 'Banana Thrower', emoji: '🐵', color: '#ff8c00', special: 'Banana Bomb', damage: 20, specialDamage: 35, specialType: 'long', maxHealth: 208, rarity: 'common', reloadTime: 28, specialReloadTime: 780 },
        'Eagle': { name: 'Sky Hunter', emoji: '🦅', color: '#4682b4', special: 'Dive Bomb', damage: 27, specialDamage: 46, specialType: 'close', maxHealth: 218, rarity: 'common', reloadTime: 40, specialReloadTime: 870 },
        'Bear': { name: 'Forest Guard', emoji: '🐻', color: '#8b4513', special: 'Bear Hug', damage: 32, specialDamage: 54, specialType: 'close', maxHealth: 248, rarity: 'common', reloadTime: 50, specialReloadTime: 885 },
        'Penguin': { name: 'Ice Slider', emoji: '🐧', color: '#000080', special: 'Ice Slide', damage: 18, specialDamage: 32, specialType: 'close', maxHealth: 203, rarity: 'common', reloadTime: 32, specialReloadTime: 810 },
        'Shark': { name: 'Ocean Predator', emoji: '🦈', color: '#4682b4', special: 'Bite Rush', damage: 30, specialDamage: 52, specialType: 'close', maxHealth: 240, rarity: 'common', reloadTime: 45, specialReloadTime: 840 },
        'Lion': { name: 'King of Beasts', emoji: '🦁', color: '#daa520', special: 'Roar Wave', damage: 29, specialDamage: 50, specialType: 'long', maxHealth: 238, rarity: 'common', reloadTime: 48, specialReloadTime: 825 },
        'Turtle': { name: 'Shell Defender', emoji: '🐢', color: '#228b22', special: 'Shell Spin', damage: 21, specialDamage: 36, specialType: 'close', maxHealth: 248, rarity: 'common', reloadTime: 55, specialReloadTime: 900 },
        'Butterfly': { name: 'Wind Dancer', emoji: '🦋', color: '#ff69b4', special: 'Pollen Dust', damage: 16, specialDamage: 28, specialType: 'long', maxHealth: 201, rarity: 'common', reloadTime: 22, specialReloadTime: 795 },
        'Crab': { name: 'Pinch Master', emoji: '🦀', color: '#ff4500', special: 'Claw Snap', damage: 25, specialDamage: 43, specialType: 'close', maxHealth: 224, rarity: 'common', reloadTime: 40, specialReloadTime: 840 },
        'Frog': { name: 'Lily Hopper', emoji: '🐸', color: '#32cd32', special: 'Tongue Lash', damage: 20, specialDamage: 34, specialType: 'close', maxHealth: 212, rarity: 'common', reloadTime: 30, specialReloadTime: 810 },
        'Rabbit': { name: 'Speed Bunny', emoji: '🐰', color: '#dda0dd', special: 'Carrot Throw', damage: 18, specialDamage: 31, specialType: 'long', maxHealth: 206, rarity: 'common', reloadTime: 20, specialReloadTime: 780 },
        'Snake': { name: 'Serpent Strike', emoji: '🐍', color: '#228b22', special: 'Venom Spit', damage: 26, specialDamage: 45, specialType: 'long', maxHealth: 227, rarity: 'common', reloadTime: 42, specialReloadTime: 870 },
        'Wolf': { name: 'Pack Leader', emoji: '🐺', color: '#696969', special: 'Howl Blast', damage: 28, specialDamage: 48, specialType: 'long', maxHealth: 232, rarity: 'common', reloadTime: 45, specialReloadTime: 855 },
        'Fox': { name: 'Clever Trickster', emoji: '🦊', color: '#ff8c00', special: 'Fire Tail', damage: 24, specialDamage: 41, specialType: 'close', maxHealth: 222, rarity: 'common', reloadTime: 38, specialReloadTime: 810 },
        'Panda': { name: 'Bamboo Fighter', emoji: '🐼', color: '#000000', special: 'Bamboo Shoot', damage: 22, specialDamage: 38, specialType: 'long', maxHealth: 216, rarity: 'common', reloadTime: 35, specialReloadTime: 825 },
        'Elephant': { name: 'Mighty Tusks', emoji: '🐘', color: '#808080', special: 'Trumpet Blast', damage: 33, specialDamage: 57, specialType: 'long', maxHealth: 249, rarity: 'common', reloadTime: 55, specialReloadTime: 900 },
        'Giraffe': { name: 'Tall Striker', emoji: '🦒', color: '#daa520', special: 'Neck Slam', damage: 26, specialDamage: 44, specialType: 'close', maxHealth: 236, rarity: 'common', reloadTime: 45, specialReloadTime: 870 },
        'Zebra': { name: 'Stripe Runner', emoji: '🦓', color: '#000000', special: 'Kick Combo', damage: 25, specialDamage: 43, specialType: 'close', maxHealth: 226, rarity: 'common', reloadTime: 40, specialReloadTime: 840 },
        'Hippo': { name: 'River Beast', emoji: '🦛', color: '#696969', special: 'Chomp Attack', damage: 31, specialDamage: 53, specialType: 'close', maxHealth: 244, rarity: 'common', reloadTime: 50, specialReloadTime: 885 },
        'Rhino': { name: 'Horn Charger', emoji: '🦏', color: '#808080', special: 'Horn Rush', damage: 34, specialDamage: 58, specialType: 'close', maxHealth: 250, rarity: 'common', reloadTime: 55, specialReloadTime: 900 },
        'Octopus': { name: 'Tentacle Master', emoji: '🐙', color: '#8a2be2', special: 'Ink Splash', damage: 23, specialDamage: 39, specialType: 'long', maxHealth: 219, rarity: 'common', reloadTime: 38, specialReloadTime: 825 },
        'Bee': { name: 'Honey Warrior', emoji: '🐝', color: '#ffd700', special: 'Sting Attack', damage: 19, specialDamage: 33, specialType: 'close', maxHealth: 209, rarity: 'common', reloadTime: 25, specialReloadTime: 795 },
        'Mouse': { name: 'Tiny Fighter', emoji: '🐭', color: '#c0c0c0', special: 'Cheese Bomb', damage: 15, specialDamage: 26, specialType: 'long', maxHealth: 200, rarity: 'common', reloadTime: 20, specialReloadTime: 780 },
        'Hamster': { name: 'Wheel Spinner', emoji: '🐹', color: '#daa520', special: 'Spin Attack', damage: 17, specialDamage: 29, specialType: 'close', maxHealth: 202, rarity: 'common', reloadTime: 25, specialReloadTime: 810 },
        'Hedgehog': { name: 'Spiky Roller', emoji: '🦔', color: '#8b4513', special: 'Needle Shot', damage: 23, specialDamage: 39, specialType: 'long', maxHealth: 219, rarity: 'common', reloadTime: 38, specialReloadTime: 855 },
        'Bat': { name: 'Night Flyer', emoji: '🦇', color: '#2f4f4f', special: 'Sonic Screech', damage: 21, specialDamage: 36, specialType: 'long', maxHealth: 212, rarity: 'common', reloadTime: 32, specialReloadTime: 825 },
        'Raccoon': { name: 'Trash Bandit', emoji: '🦝', color: '#696969', special: 'Garbage Throw', damage: 19, specialDamage: 33, specialType: 'long', maxHealth: 207, rarity: 'common', reloadTime: 28, specialReloadTime: 795 },
        'Skunk': { name: 'Stink Bomber', emoji: '🦨', color: '#000000', special: 'Stink Cloud', damage: 16, specialDamage: 28, specialType: 'close', maxHealth: 201, rarity: 'common', reloadTime: 40, specialReloadTime: 840 },
        'Squirrel': { name: 'Nut Collector', emoji: '🐿️', color: '#8b4513', special: 'Acorn Shot', damage: 18, specialDamage: 31, specialType: 'long', maxHealth: 204, rarity: 'common', reloadTime: 25, specialReloadTime: 810 },
        'Otter': { name: 'River Dancer', emoji: '🦦', color: '#4682b4', special: 'Water Splash', damage: 22, specialDamage: 38, specialType: 'long', maxHealth: 215, rarity: 'common', reloadTime: 35, specialReloadTime: 825 },
        'Sloth': { name: 'Slow Motion', emoji: '🦥', color: '#8b7355', special: 'Time Drag', damage: 14, specialDamage: 24, specialType: 'close', maxHealth: 250, rarity: 'common', reloadTime: 60, specialReloadTime: 900 },
        'Kangaroo': { name: 'Jump Boxer', emoji: '🦘', color: '#daa520', special: 'Power Hop', damage: 27, specialDamage: 46, specialType: 'close', maxHealth: 236, rarity: 'common', reloadTime: 42, specialReloadTime: 870 },
        'Koala': { name: 'Eucalyptus Warrior', emoji: '🐨', color: '#808080', special: 'Leaf Storm', damage: 19, specialDamage: 33, specialType: 'long', maxHealth: 207, rarity: 'common', reloadTime: 33, specialReloadTime: 810 },
        'Llama': { name: 'Spit Master', emoji: '🦙', color: '#dda0dd', special: 'Spit Shot', damage: 21, specialDamage: 36, specialType: 'long', maxHealth: 213, rarity: 'common', reloadTime: 35, specialReloadTime: 825 },
        'Camel': { name: 'Desert Walker', emoji: '🐪', color: '#daa520', special: 'Sand Kick', damage: 25, specialDamage: 43, specialType: 'close', maxHealth: 224, rarity: 'common', reloadTime: 45, specialReloadTime: 870 },
        'Pig': { name: 'Mud Roller', emoji: '🐷', color: '#ffb6c1', special: 'Mud Splash', damage: 20, specialDamage: 34, specialType: 'long', maxHealth: 210, rarity: 'common', reloadTime: 38, specialReloadTime: 840 },
        'Cow': { name: 'Milk Squirter', emoji: '🐄', color: '#000000', special: 'Milk Blast', damage: 23, specialDamage: 39, specialType: 'long', maxHealth: 219, rarity: 'common', reloadTime: 42, specialReloadTime: 855 },
        'Sheep': { name: 'Wool Bomber', emoji: '🐑', color: '#ffffff', special: 'Wool Ball', damage: 18, specialDamage: 31, specialType: 'long', maxHealth: 204, rarity: 'common', reloadTime: 30, specialReloadTime: 810 },
        'Goat': { name: 'Horn Buster', emoji: '🐐', color: '#8b7355', special: 'Head Butt', damage: 26, specialDamage: 44, specialType: 'close', maxHealth: 226, rarity: 'common', reloadTime: 40, specialReloadTime: 840 },
        'Chicken': { name: 'Feather Fighter', emoji: '🐔', color: '#ffff00', special: 'Peck Attack', damage: 17, specialDamage: 29, specialType: 'close', maxHealth: 202, rarity: 'common', reloadTime: 25, specialReloadTime: 780 },
        'Duck': { name: 'Pond Swimmer', emoji: '🦆', color: '#ffff00', special: 'Water Gun', damage: 19, specialDamage: 33, specialType: 'long', maxHealth: 207, rarity: 'common', reloadTime: 30, specialReloadTime: 825 },
        'Turkey': { name: 'Gobble Fighter', emoji: '🦃', color: '#8b4513', special: 'Wing Flap', damage: 24, specialDamage: 41, specialType: 'close', maxHealth: 222, rarity: 'common', reloadTime: 38, specialReloadTime: 855 },
        'Peacock': { name: 'Feather Display', emoji: '🦚', color: '#00ff7f', special: 'Tail Fan', damage: 22, specialDamage: 38, specialType: 'long', maxHealth: 216, rarity: 'common', reloadTime: 40, specialReloadTime: 840 },
        'Flamingo': { name: 'Pink Kicker', emoji: '🦩', color: '#ff69b4', special: 'Leg Sweep', damage: 20, specialDamage: 34, specialType: 'close', maxHealth: 210, rarity: 'common', reloadTime: 32, specialReloadTime: 810 },
        'Owl': { name: 'Night Watcher', emoji: '🦉', color: '#8b4513', special: 'Hoot Blast', damage: 21, specialDamage: 36, specialType: 'long', maxHealth: 213, rarity: 'common', reloadTime: 35, specialReloadTime: 825 },
        'Parrot': { name: 'Colorful Talker', emoji: '🦜', color: '#32cd32', special: 'Squawk Attack', damage: 19, specialDamage: 33, specialType: 'long', maxHealth: 207, rarity: 'common', reloadTime: 30, specialReloadTime: 795 },
        'Dove': { name: 'Peace Bringer', emoji: '🕊️', color: '#ffffff', special: 'Gentle Gust', damage: 16, specialDamage: 28, specialType: 'long', maxHealth: 201, rarity: 'common', reloadTime: 25, specialReloadTime: 810 },
        'Swan': { name: 'Graceful Fighter', emoji: '🦢', color: '#ffffff', special: 'Wing Strike', damage: 23, specialDamage: 39, specialType: 'close', maxHealth: 219, rarity: 'common', reloadTime: 38, specialReloadTime: 855 },
        'Dolphin': { name: 'Smart Swimmer', emoji: '🐬', color: '#4682b4', special: 'Sonar Pulse', damage: 25, specialDamage: 43, specialType: 'long', maxHealth: 224, rarity: 'common', reloadTime: 40, specialReloadTime: 840 },
        'Whale': { name: 'Ocean Giant', emoji: '🐋', color: '#4169e1', special: 'Water Spout', damage: 35, specialDamage: 60, specialType: 'long', maxHealth: 250, rarity: 'common', reloadTime: 60, specialReloadTime: 900 },
        'Fish': { name: 'Scale Swimmer', emoji: '🐟', color: '#4682b4', special: 'Bubble Shot', damage: 15, specialDamage: 26, specialType: 'long', maxHealth: 200, rarity: 'common', reloadTime: 20, specialReloadTime: 780 },
        'Jellyfish': { name: 'Electric Drifter', emoji: '🪼', color: '#ff69b4', special: 'Shock Touch', damage: 21, specialDamage: 36, specialType: 'close', maxHealth: 213, rarity: 'common', reloadTime: 35, specialReloadTime: 825 },
        'Starfish': { name: 'Star Thrower', emoji: '⭐', color: '#ffd700', special: 'Star Rain', damage: 18, specialDamage: 31, specialType: 'long', maxHealth: 204, rarity: 'common', reloadTime: 30, specialReloadTime: 810 },
        'Ant': { name: 'Colony Worker', emoji: '🐜', color: '#8b0000', special: 'Swarm Rush', damage: 12, specialDamage: 20, specialType: 'close', maxHealth: 200, rarity: 'common', reloadTime: 15, specialReloadTime: 780 },
        'Ladybug': { name: 'Lucky Fighter', emoji: '🐞', color: '#ff0000', special: 'Luck Burst', damage: 16, specialDamage: 28, specialType: 'long', maxHealth: 201, rarity: 'common', reloadTime: 25, specialReloadTime: 795 },
        'Spider2': { name: 'Web Weaver', emoji: '🕸️', color: '#696969', special: 'Web Trap', damage: 19, specialDamage: 33, specialType: 'long', maxHealth: 207, rarity: 'common', reloadTime: 32, specialReloadTime: 825 },
        
        // NEW COMMON CHARACTERS (50 additional) - Expanding the roster!
        'Unicorn': { name: 'Magic Horn', emoji: '🦄', color: '#ff69b4', special: 'Rainbow Beam', damage: 24, specialDamage: 42, specialType: 'long', maxHealth: 222, rarity: 'common', reloadTime: 40, specialReloadTime: 840 },
        'Dragon2': { name: 'Baby Dragon', emoji: '🐲', color: '#ff4500', special: 'Fire Puff', damage: 26, specialDamage: 44, specialType: 'long', maxHealth: 228, rarity: 'common', reloadTime: 42, specialReloadTime: 855 },
        'T-Rex': { name: 'Prehistoric King', emoji: '🦖', color: '#228b22', special: 'Roar Stomp', damage: 35, specialDamage: 58, specialType: 'close', maxHealth: 248, rarity: 'common', reloadTime: 60, specialReloadTime: 900 },
        'Sauropod': { name: 'Long Neck', emoji: '🦕', color: '#9acd32', special: 'Tail Whip', damage: 28, specialDamage: 48, specialType: 'close', maxHealth: 240, rarity: 'common', reloadTime: 50, specialReloadTime: 870 },
        'Robot': { name: 'Metal Worker', emoji: '🤖', color: '#c0c0c0', special: 'Laser Beam', damage: 30, specialDamage: 52, specialType: 'long', maxHealth: 235, rarity: 'common', reloadTime: 48, specialReloadTime: 825 },
        'Alien': { name: 'Space Visitor', emoji: '👽', color: '#32cd32', special: 'Mind Blast', damage: 25, specialDamage: 43, specialType: 'long', maxHealth: 225, rarity: 'common', reloadTime: 40, specialReloadTime: 810 },
        'Ghost': { name: 'Spooky Spirit', emoji: '👻', color: '#e6e6fa', special: 'Haunt Touch', damage: 22, specialDamage: 38, specialType: 'close', maxHealth: 218, rarity: 'common', reloadTime: 35, specialReloadTime: 795 },
        'Zombie': { name: 'Undead Walker', emoji: '🧟', color: '#556b2f', special: 'Bite Infection', damage: 27, specialDamage: 46, specialType: 'close', maxHealth: 232, rarity: 'common', reloadTime: 45, specialReloadTime: 860 },
        'Vampire': { name: 'Blood Drinker', emoji: '🧛', color: '#8b0000', special: 'Blood Drain', damage: 26, specialDamage: 44, specialType: 'close', maxHealth: 230, rarity: 'common', reloadTime: 42, specialReloadTime: 840 },
        'Mummy': { name: 'Wrapped Ancient', emoji: '🧟‍♂️', color: '#daa520', special: 'Bandage Wrap', damage: 24, specialDamage: 41, specialType: 'close', maxHealth: 224, rarity: 'common', reloadTime: 38, specialReloadTime: 825 },
        'Wizard': { name: 'Staff Wielder', emoji: '🧙', color: '#9370db', special: 'Magic Bolt', damage: 29, specialDamage: 50, specialType: 'long', maxHealth: 234, rarity: 'common', reloadTime: 46, specialReloadTime: 850 },
        'Fairy': { name: 'Tiny Magic', emoji: '🧚', color: '#ff69b4', special: 'Fairy Dust', damage: 18, specialDamage: 31, specialType: 'long', maxHealth: 205, rarity: 'common', reloadTime: 28, specialReloadTime: 785 },
        'Genie': { name: 'Wish Maker', emoji: '🧞‍♂️', color: '#4169e1', special: 'Wish Blast', damage: 31, specialDamage: 53, specialType: 'long', maxHealth: 238, rarity: 'common', reloadTime: 50, specialReloadTime: 875 },
        'Elf': { name: 'Forest Helper', emoji: '🧝', color: '#228b22', special: 'Nature Call', damage: 23, specialDamage: 39, specialType: 'long', maxHealth: 220, rarity: 'common', reloadTime: 36, specialReloadTime: 815 },
        'Dwarf': { name: 'Mountain Miner', emoji: '👨‍🦳', color: '#8b4513', special: 'Hammer Strike', damage: 32, specialDamage: 55, specialType: 'close', maxHealth: 242, rarity: 'common', reloadTime: 52, specialReloadTime: 880 },
        'Troll': { name: 'Bridge Guardian', emoji: '🧌', color: '#556b2f', special: 'Club Smash', damage: 34, specialDamage: 57, specialType: 'close', maxHealth: 246, rarity: 'common', reloadTime: 55, specialReloadTime: 890 },
        'Goblin': { name: 'Sneaky Thief', emoji: '👺', color: '#8b0000', special: 'Poison Dagger', damage: 25, specialDamage: 43, specialType: 'close', maxHealth: 226, rarity: 'common', reloadTime: 40, specialReloadTime: 830 },
        'Ogre': { name: 'Big Brute', emoji: '👹', color: '#ff4500', special: 'Ground Pound', damage: 36, specialDamage: 60, specialType: 'close', maxHealth: 250, rarity: 'common', reloadTime: 58, specialReloadTime: 895 },
        'Pirate': { name: 'Sea Thief', emoji: '🏴‍☠️', color: '#000000', special: 'Cannon Blast', damage: 28, specialDamage: 48, specialType: 'long', maxHealth: 230, rarity: 'common', reloadTime: 45, specialReloadTime: 850 },
        'Knight': { name: 'Armor Warrior', emoji: '⚔️', color: '#c0c0c0', special: 'Sword Slash', damage: 30, specialDamage: 52, specialType: 'close', maxHealth: 235, rarity: 'common', reloadTime: 48, specialReloadTime: 865 },
        'Princess': { name: 'Royal Fighter', emoji: '👸', color: '#ff69b4', special: 'Royal Command', damage: 24, specialDamage: 42, specialType: 'long', maxHealth: 222, rarity: 'common', reloadTime: 38, specialReloadTime: 820 },
        'Prince': { name: 'Noble Warrior', emoji: '🤴', color: '#ffd700', special: 'Noble Strike', damage: 27, specialDamage: 46, specialType: 'close', maxHealth: 228, rarity: 'common', reloadTime: 43, specialReloadTime: 845 },
        'King': { name: 'Crown Ruler', emoji: '👑', color: '#daa520', special: 'Royal Decree', damage: 29, specialDamage: 50, specialType: 'long', maxHealth: 234, rarity: 'common', reloadTime: 46, specialReloadTime: 860 },
        'Queen': { name: 'Royal Majesty', emoji: '👸🏻', color: '#9370db', special: 'Regal Power', damage: 28, specialDamage: 48, specialType: 'long', maxHealth: 232, rarity: 'common', reloadTime: 44, specialReloadTime: 855 },
        'Jester': { name: 'Court Fool', emoji: '🃏', color: '#ff1493', special: 'Trick Shot', damage: 21, specialDamage: 36, specialType: 'long', maxHealth: 215, rarity: 'common', reloadTime: 32, specialReloadTime: 800 },
        'Superhero': { name: 'Cape Crusader', emoji: '🦸', color: '#0000ff', special: 'Super Punch', damage: 33, specialDamage: 56, specialType: 'close', maxHealth: 244, rarity: 'common', reloadTime: 53, specialReloadTime: 885 },
        'Supervillain': { name: 'Evil Mastermind', emoji: '🦹', color: '#8b0000', special: 'Evil Scheme', damage: 31, specialDamage: 53, specialType: 'long', maxHealth: 238, rarity: 'common', reloadTime: 50, specialReloadTime: 870 },
        'Police': { name: 'Law Enforcer', emoji: '👮', color: '#000080', special: 'Arrest Shot', damage: 26, specialDamage: 44, specialType: 'long', maxHealth: 228, rarity: 'common', reloadTime: 42, specialReloadTime: 835 },
        'Firefighter2': { name: 'Flame Stopper', emoji: '👨‍🚒', color: '#ff0000', special: 'Water Blast', damage: 25, specialDamage: 43, specialType: 'long', maxHealth: 225, rarity: 'common', reloadTime: 40, specialReloadTime: 830 },
        'Paramedic': { name: 'Life Saver', emoji: '👨‍⚕️', color: '#ffffff', special: 'First Aid', damage: 20, specialDamage: 34, specialType: 'long', maxHealth: 210, rarity: 'common', reloadTime: 35, specialReloadTime: 805 },
        'Student': { name: 'Knowledge Seeker', emoji: '👨‍🎓', color: '#4b0082', special: 'Book Throw', damage: 18, specialDamage: 31, specialType: 'long', maxHealth: 205, rarity: 'common', reloadTime: 30, specialReloadTime: 795 },
        'Graduate': { name: 'Degree Holder', emoji: '🎓', color: '#000000', special: 'Smart Strike', damage: 22, specialDamage: 38, specialType: 'long', maxHealth: 218, rarity: 'common', reloadTime: 35, specialReloadTime: 815 },
        'Office': { name: 'Desk Worker', emoji: '👨‍💼', color: '#708090', special: 'Paper Cut', damage: 16, specialDamage: 28, specialType: 'long', maxHealth: 202, rarity: 'common', reloadTime: 25, specialReloadTime: 785 },
        'Secretary': { name: 'Office Helper', emoji: '👩‍💼', color: '#9370db', special: 'File Throw', damage: 17, specialDamage: 29, specialType: 'long', maxHealth: 203, rarity: 'common', reloadTime: 26, specialReloadTime: 790 },
        'Musician': { name: 'Sound Maker', emoji: '👨‍🎤', color: '#ff6347', special: 'Sound Wave', damage: 23, specialDamage: 39, specialType: 'long', maxHealth: 220, rarity: 'common', reloadTime: 36, specialReloadTime: 820 },
        'Singer': { name: 'Voice Artist', emoji: '👩‍🎤', color: '#ff69b4', special: 'High Note', damage: 21, specialDamage: 36, specialType: 'long', maxHealth: 215, rarity: 'common', reloadTime: 33, specialReloadTime: 810 },
        'Actor': { name: 'Stage Performer', emoji: '🎭', color: '#9370db', special: 'Drama Strike', damage: 24, specialDamage: 41, specialType: 'close', maxHealth: 222, rarity: 'common', reloadTime: 38, specialReloadTime: 825 },
        'Director': { name: 'Film Maker', emoji: '🎬', color: '#000000', special: 'Action Shot', damage: 26, specialDamage: 44, specialType: 'long', maxHealth: 228, rarity: 'common', reloadTime: 42, specialReloadTime: 840 },
        'Runner': { name: 'Speed Racer', emoji: '🏃', color: '#32cd32', special: 'Speed Burst', damage: 19, specialDamage: 33, specialType: 'close', maxHealth: 208, rarity: 'common', reloadTime: 28, specialReloadTime: 800 },
        'Swimmer': { name: 'Water Athlete', emoji: '🏊', color: '#4682b4', special: 'Water Strike', damage: 22, specialDamage: 38, specialType: 'long', maxHealth: 218, rarity: 'common', reloadTime: 35, specialReloadTime: 815 },
        'Cyclist': { name: 'Bike Rider', emoji: '🚴', color: '#ffff00', special: 'Wheel Spin', damage: 20, specialDamage: 34, specialType: 'close', maxHealth: 212, rarity: 'common', reloadTime: 32, specialReloadTime: 805 },
        'Gymnast': { name: 'Flexible Fighter', emoji: '🤸', color: '#ff69b4', special: 'Flip Kick', damage: 25, specialDamage: 43, specialType: 'close', maxHealth: 225, rarity: 'common', reloadTime: 40, specialReloadTime: 830 },
        'Weightlifter': { name: 'Strong Lifter', emoji: '🏋️', color: '#8b4513', special: 'Weight Slam', damage: 34, specialDamage: 57, specialType: 'close', maxHealth: 246, rarity: 'common', reloadTime: 55, specialReloadTime: 885 },
        'Golfer': { name: 'Club Swinger', emoji: '🏌️', color: '#228b22', special: 'Golf Drive', damage: 27, specialDamage: 46, specialType: 'long', maxHealth: 230, rarity: 'common', reloadTime: 43, specialReloadTime: 845 },
        'Tennis': { name: 'Racket Master', emoji: '🎾', color: '#ffff00', special: 'Power Serve', damage: 24, specialDamage: 41, specialType: 'long', maxHealth: 222, rarity: 'common', reloadTime: 38, specialReloadTime: 825 },
        'Volleyball': { name: 'Net Jumper', emoji: '🏐', color: '#ffffff', special: 'Spike Attack', damage: 26, specialDamage: 44, specialType: 'close', maxHealth: 228, rarity: 'common', reloadTime: 42, specialReloadTime: 840 },
        'Baseball': { name: 'Home Runner', emoji: '⚾', color: '#ffffff', special: 'Grand Slam', damage: 29, specialDamage: 50, specialType: 'long', maxHealth: 234, rarity: 'common', reloadTime: 46, specialReloadTime: 860 },
        'Football': { name: 'Field Goal', emoji: '🏈', color: '#8b4513', special: 'Touchdown', damage: 31, specialDamage: 53, specialType: 'close', maxHealth: 238, rarity: 'common', reloadTime: 50, specialReloadTime: 870 },
        'Hockey': { name: 'Ice Striker', emoji: '🏒', color: '#000000', special: 'Slap Shot', damage: 28, specialDamage: 48, specialType: 'long', maxHealth: 232, rarity: 'common', reloadTime: 44, specialReloadTime: 850 },
        'Rugby': { name: 'Tough Tackler', emoji: '🏉', color: '#8b4513', special: 'Rugby Charge', damage: 33, specialDamage: 56, specialType: 'close', maxHealth: 244, rarity: 'common', reloadTime: 53, specialReloadTime: 880 },

        // Rare Characters (50 total) - 250-300 HP - Special Reload: 10-12s (600-720 frames)
        'Thunder': { name: 'Thunder God', emoji: '⚡', color: '#ffff00', special: 'Lightning Strike', damage: 35, specialDamage: 70, specialType: 'long', maxHealth: 270, rarity: 'rare', reloadTime: 60, specialReloadTime: 720 },
        'Shadow': { name: 'Shadow Ninja', emoji: '🥷', color: '#800080', special: 'Shadow Clone', damage: 25, specialDamage: 50, specialType: 'close', maxHealth: 260, rarity: 'rare', reloadTime: 30, specialReloadTime: 600 },
        'Shield': { name: 'Captain Shield', emoji: '🛡️', color: '#0000ff', special: 'Shield Throw', damage: 28, specialDamage: 56, specialType: 'long', maxHealth: 265, rarity: 'rare', reloadTime: 55, specialReloadTime: 660 },
        'Archer': { name: 'Eagle Eye', emoji: '🏹', color: '#8b4513', special: 'Arrow Volley', damage: 22, specialDamage: 44, specialType: 'long', maxHealth: 255, rarity: 'rare', reloadTime: 25, specialReloadTime: 630 },
        'Samurai': { name: 'Blade Master', emoji: '🗾', color: '#8b0000', special: 'Katana Slash', damage: 36, specialDamage: 72, specialType: 'close', maxHealth: 280, rarity: 'rare', reloadTime: 65, specialReloadTime: 690 },
        'Viking': { name: 'Norse Warrior', emoji: '⚔️', color: '#4682b4', special: 'Hammer Throw', damage: 38, specialDamage: 76, specialType: 'close', maxHealth: 285, rarity: 'rare', reloadTime: 70, specialReloadTime: 710 },
        'Assassin': { name: 'Silent Death', emoji: '🔪', color: '#2f4f4f', special: 'Hidden Blade', damage: 32, specialDamage: 64, specialType: 'close', maxHealth: 275, rarity: 'rare', reloadTime: 40, specialReloadTime: 640 },
        'Gladiator': { name: 'Arena Champion', emoji: '🏟️', color: '#cd853f', special: 'Net Trap', damage: 34, specialDamage: 68, specialType: 'close', maxHealth: 278, rarity: 'rare', reloadTime: 55, specialReloadTime: 665 },
        'Cyborg': { name: 'Half Machine', emoji: '🦾', color: '#696969', special: 'Cyber Punch', damage: 37, specialDamage: 74, specialType: 'close', maxHealth: 282, rarity: 'rare', reloadTime: 50, specialReloadTime: 650 },
        'Angel': { name: 'Divine Warrior', emoji: '👼', color: '#fff8dc', special: 'Holy Light', damage: 33, specialDamage: 66, specialType: 'long', maxHealth: 277, rarity: 'rare', reloadTime: 60, specialReloadTime: 680 },
        'Demon': { name: 'Infernal Beast', emoji: '😈', color: '#8b0000', special: 'Hell Fire', damage: 39, specialDamage: 78, specialType: 'long', maxHealth: 288, rarity: 'rare', reloadTime: 65, specialReloadTime: 690 },
        'Pharaoh': { name: 'Desert King', emoji: '🏺', color: '#daa520', special: 'Sand Storm', damage: 35, specialDamage: 70, specialType: 'long', maxHealth: 280, rarity: 'rare', reloadTime: 58, specialReloadTime: 675 },
        'Witch': { name: 'Spell Caster', emoji: '🧙‍♀️', color: '#9370db', special: 'Hex Curse', damage: 31, specialDamage: 62, specialType: 'long', maxHealth: 275, rarity: 'rare', reloadTime: 45, specialReloadTime: 645 },
        'Barbarian': { name: 'Wild Fighter', emoji: '🪓', color: '#8b4513', special: 'Rage Strike', damage: 40, specialDamage: 80, specialType: 'close', maxHealth: 290, rarity: 'rare', reloadTime: 75, specialReloadTime: 720 },
        'Paladin': { name: 'Holy Knight', emoji: '⚔️', color: '#ffd700', special: 'Divine Strike', damage: 36, specialDamage: 72, specialType: 'close', maxHealth: 285, rarity: 'rare', reloadTime: 62, specialReloadTime: 685 },
        'Warlock': { name: 'Dark Mage', emoji: '🔮', color: '#4b0082', special: 'Soul Burn', damage: 34, specialDamage: 68, specialType: 'long', maxHealth: 278, rarity: 'rare', reloadTime: 55, specialReloadTime: 670 },
        'Gunslinger': { name: 'Quick Draw', emoji: '🔫', color: '#a0522d', special: 'Rapid Fire', damage: 33, specialDamage: 66, specialType: 'long', maxHealth: 275, rarity: 'rare', reloadTime: 48, specialReloadTime: 655 },
        'Medic': { name: 'Battle Healer', emoji: '⚕️', color: '#dc143c', special: 'Heal Bomb', damage: 20, specialDamage: 40, specialType: 'long', maxHealth: 250, rarity: 'rare', reloadTime: 35, specialReloadTime: 620 },
        'Engineer': { name: 'Tech Builder', emoji: '🔧', color: '#808080', special: 'Turret Deploy', damage: 30, specialDamage: 60, specialType: 'long', maxHealth: 265, rarity: 'rare', reloadTime: 80, specialReloadTime: 720 },
        'Pilot': { name: 'Sky Ace', emoji: '✈️', color: '#4169e1', special: 'Air Strike', damage: 38, specialDamage: 76, specialType: 'long', maxHealth: 285, rarity: 'rare', reloadTime: 70, specialReloadTime: 705 },
        'Detective': { name: 'Crime Solver', emoji: '🔍', color: '#8b4513', special: 'Evidence Shot', damage: 29, specialDamage: 58, specialType: 'long', maxHealth: 270, rarity: 'rare', reloadTime: 45, specialReloadTime: 650 },
        'Scientist': { name: 'Lab Expert', emoji: '🧪', color: '#32cd32', special: 'Chemical Blast', damage: 31, specialDamage: 62, specialType: 'long', maxHealth: 275, rarity: 'rare', reloadTime: 50, specialReloadTime: 665 },
        'Astronaut': { name: 'Space Explorer', emoji: '👨‍🚀', color: '#ffffff', special: 'Zero-G Push', damage: 34, specialDamage: 68, specialType: 'long', maxHealth: 280, rarity: 'rare', reloadTime: 55, specialReloadTime: 680 },
        'Firefighter': { name: 'Flame Fighter', emoji: '🧑‍🚒', color: '#ff0000', special: 'Water Cannon', damage: 32, specialDamage: 64, specialType: 'long', maxHealth: 275, rarity: 'rare', reloadTime: 52, specialReloadTime: 670 },
        'Dancer': { name: 'Rhythm Master', emoji: '💃', color: '#ff69b4', special: 'Dance Spin', damage: 26, specialDamage: 52, specialType: 'close', maxHealth: 265, rarity: 'rare', reloadTime: 40, specialReloadTime: 635 },
        'Farmer': { name: 'Crop Guardian', emoji: '👨‍🌾', color: '#228b22', special: 'Hay Bale', damage: 28, specialDamage: 56, specialType: 'long', maxHealth: 270, rarity: 'rare', reloadTime: 45, specialReloadTime: 645 },
        'Artist': { name: 'Paint Warrior', emoji: '🎨', color: '#ff6347', special: 'Color Splash', damage: 27, specialDamage: 54, specialType: 'long', maxHealth: 268, rarity: 'rare', reloadTime: 42, specialReloadTime: 640 },
        'Teacher': { name: 'Knowledge Keeper', emoji: '👩‍🏫', color: '#4b0082', special: 'Book Throw', damage: 25, specialDamage: 50, specialType: 'long', maxHealth: 262, rarity: 'rare', reloadTime: 38, specialReloadTime: 625 },
        'Builder': { name: 'Brick Master', emoji: '👷', color: '#daa520', special: 'Hammer Time', damage: 35, specialDamage: 70, specialType: 'close', maxHealth: 282, rarity: 'rare', reloadTime: 60, specialReloadTime: 680 },
        'Clown': { name: 'Chaos Bringer', emoji: '🤡', color: '#ff1493', special: 'Pie Throw', damage: 24, specialDamage: 48, specialType: 'long', maxHealth: 255, rarity: 'rare', reloadTime: 35, specialReloadTime: 615 },
        'Lumberjack': { name: 'Tree Cutter', emoji: '🪓', color: '#8b4513', special: 'Axe Throw', damage: 37, specialDamage: 74, specialType: 'long', maxHealth: 285, rarity: 'rare', reloadTime: 65, specialReloadTime: 685 },
        'Miner': { name: 'Gem Digger', emoji: '⛏️', color: '#696969', special: 'Rock Blast', damage: 35, specialDamage: 70, specialType: 'close', maxHealth: 280, rarity: 'rare', reloadTime: 62, specialReloadTime: 680 },
        'Sailor': { name: 'Sea Wolf', emoji: '⚓', color: '#4682b4', special: 'Anchor Drop', damage: 33, specialDamage: 66, specialType: 'close', maxHealth: 275, rarity: 'rare', reloadTime: 58, specialReloadTime: 675 },
        'Electrician': { name: 'Spark Master', emoji: '⚡', color: '#ffff00', special: 'Lightning Wire', damage: 36, specialDamage: 72, specialType: 'long', maxHealth: 285, rarity: 'rare', reloadTime: 60, specialReloadTime: 680 },
        'Photographer': { name: 'Flash Shooter', emoji: '📸', color: '#ffffff', special: 'Blinding Flash', damage: 24, specialDamage: 48, specialType: 'close', maxHealth: 255, rarity: 'rare', reloadTime: 35, specialReloadTime: 615 },
        'Magician': { name: 'Trick Master', emoji: '🎩', color: '#800080', special: 'Magic Trick', damage: 30, specialDamage: 60, specialType: 'close', maxHealth: 270, rarity: 'rare', reloadTime: 50, specialReloadTime: 650 },
        'Mechanic': { name: 'Gear Head', emoji: '🔧', color: '#2f4f4f', special: 'Wrench Throw', damage: 32, specialDamage: 64, specialType: 'long', maxHealth: 275, rarity: 'rare', reloadTime: 55, specialReloadTime: 675 },
        'Librarian': { name: 'Book Keeper', emoji: '📚', color: '#4b0082', special: 'Knowledge Blast', damage: 28, specialDamage: 56, specialType: 'long', maxHealth: 268, rarity: 'rare', reloadTime: 45, specialReloadTime: 645 },
        'Gardener': { name: 'Plant Whisperer', emoji: '🌱', color: '#228b22', special: 'Thorn Shot', damage: 26, specialDamage: 52, specialType: 'long', maxHealth: 265, rarity: 'rare', reloadTime: 42, specialReloadTime: 640 },
        'Baker': { name: 'Dough Master', emoji: '🥖', color: '#daa520', special: 'Bread Bomb', damage: 29, specialDamage: 58, specialType: 'long', maxHealth: 270, rarity: 'rare', reloadTime: 48, specialReloadTime: 648 },
        'Chef2': { name: 'Master Cook', emoji: '👨‍🍳', color: '#ff6347', special: 'Spice Blast', damage: 31, specialDamage: 62, specialType: 'long', maxHealth: 275, rarity: 'rare', reloadTime: 50, specialReloadTime: 650 },
        'Waiter': { name: 'Plate Spinner', emoji: '🍽️', color: '#c0c0c0', special: 'Dish Throw', damage: 27, specialDamage: 54, specialType: 'long', maxHealth: 268, rarity: 'rare', reloadTime: 42, specialReloadTime: 642 },
        'Barista': { name: 'Coffee Master', emoji: '☕', color: '#8b4513', special: 'Steam Shot', damage: 25, specialDamage: 50, specialType: 'long', maxHealth: 262, rarity: 'rare', reloadTime: 40, specialReloadTime: 640 },
        'Bartender': { name: 'Drink Mixer', emoji: '🍸', color: '#ff69b4', special: 'Cocktail Toss', damage: 26, specialDamage: 52, specialType: 'long', maxHealth: 265, rarity: 'rare', reloadTime: 38, specialReloadTime: 638 },
        'Judge': { name: 'Law Enforcer', emoji: '⚖️', color: '#696969', special: 'Gavel Slam', damage: 33, specialDamage: 66, specialType: 'close', maxHealth: 275, rarity: 'rare', reloadTime: 55, specialReloadTime: 675 },
        'Lawyer': { name: 'Legal Eagle', emoji: '🧑‍⚖️', color: '#000080', special: 'Objection!', damage: 29, specialDamage: 58, specialType: 'long', maxHealth: 270, rarity: 'rare', reloadTime: 45, specialReloadTime: 645 },
        'Doctor': { name: 'Life Saver', emoji: '👨‍⚕️', color: '#ffffff', special: 'Syringe Shot', damage: 28, specialDamage: 56, specialType: 'long', maxHealth: 268, rarity: 'rare', reloadTime: 48, specialReloadTime: 648 },
        'Nurse': { name: 'Care Giver', emoji: '👩‍⚕️', color: '#ff69b4', special: 'Band-Aid Bomb', damage: 24, specialDamage: 48, specialType: 'long', maxHealth: 255, rarity: 'rare', reloadTime: 35, specialReloadTime: 615 },
        'Surgeon': { name: 'Precise Cutter', emoji: '🔬', color: '#00ff00', special: 'Scalpel Slice', damage: 32, specialDamage: 64, specialType: 'close', maxHealth: 275, rarity: 'rare', reloadTime: 50, specialReloadTime: 650 },
        'Dentist': { name: 'Tooth Puller', emoji: '🦷', color: '#ffffff', special: 'Drill Attack', damage: 30, specialDamage: 60, specialType: 'close', maxHealth: 270, rarity: 'rare', reloadTime: 52, specialReloadTime: 652 },
        
        // NEW RARE CHARACTERS (10 additional)
        'Ninja2': { name: 'Shadow Strike', emoji: '🥷🏻', color: '#2f4f4f', special: 'Smoke Bomb', damage: 35, specialDamage: 70, specialType: 'close', maxHealth: 285, rarity: 'rare', reloadTime: 60, specialReloadTime: 690 },
        'Rockstar': { name: 'Stage Legend', emoji: '🎸', color: '#ff6347', special: 'Sound Blast', damage: 32, specialDamage: 64, specialType: 'long', maxHealth: 275, rarity: 'rare', reloadTime: 55, specialReloadTime: 675 },
        'Vampire2': { name: 'Count Dracula', emoji: '🧛‍♂️', color: '#8b0000', special: 'Blood Moon', damage: 38, specialDamage: 76, specialType: 'long', maxHealth: 288, rarity: 'rare', reloadTime: 68, specialReloadTime: 700 },
        'Werewolf': { name: 'Moon Beast', emoji: '🐺', color: '#8b4513', special: 'Howl Fury', damage: 40, specialDamage: 80, specialType: 'close', maxHealth: 290, rarity: 'rare', reloadTime: 75, specialReloadTime: 720 },
        'Phantom': { name: 'Spectral Hunter', emoji: '👻', color: '#e6e6fa', special: 'Phase Walk', damage: 33, specialDamage: 66, specialType: 'close', maxHealth: 275, rarity: 'rare', reloadTime: 58, specialReloadTime: 678 },
        'Reaper': { name: 'Soul Harvester', emoji: '💀', color: '#000000', special: 'Death Scythe', damage: 42, specialDamage: 84, specialType: 'close', maxHealth: 295, rarity: 'rare', reloadTime: 80, specialReloadTime: 720 },
        'Templar': { name: 'Holy Crusader', emoji: '⛪', color: '#ffd700', special: 'Divine Wrath', damage: 37, specialDamage: 74, specialType: 'long', maxHealth: 285, rarity: 'rare', reloadTime: 65, specialReloadTime: 690 },
        'Sage': { name: 'Ancient Wisdom', emoji: '🧙‍♂️', color: '#9370db', special: 'Time Wisdom', damage: 29, specialDamage: 58, specialType: 'long', maxHealth: 270, rarity: 'rare', reloadTime: 48, specialReloadTime: 648 },
        'Ronin': { name: 'Masterless Warrior', emoji: '🗡️', color: '#8b0000', special: 'Blade Dance', damage: 41, specialDamage: 82, specialType: 'close', maxHealth: 292, rarity: 'rare', reloadTime: 78, specialReloadTime: 710 },
        'Oracle': { name: 'Future Seer', emoji: '🔮', color: '#4b0082', special: 'Prophecy Strike', damage: 31, specialDamage: 62, specialType: 'long', maxHealth: 275, rarity: 'rare', reloadTime: 52, specialReloadTime: 665 },

        // Epic Characters (30 total) - 300-350 HP - Special Reload: 8-10s (480-600 frames)
        'Hulk': { name: 'Green Giant', emoji: '💚', color: '#00ff00', special: 'Smash Attack', damage: 40, specialDamage: 90, specialType: 'close', maxHealth: 325, rarity: 'epic', reloadTime: 90, specialReloadTime: 540 },
        'Iron': { name: 'Iron Warrior', emoji: '🤖', color: '#c0c0c0', special: 'Repulsor Ray', damage: 32, specialDamage: 75, specialType: 'long', maxHealth: 310, rarity: 'epic', reloadTime: 70, specialReloadTime: 520 },
        'Magic': { name: 'Mystic Sorcerer', emoji: '🔮', color: '#9932cc', special: 'Magic Missile', damage: 27, specialDamage: 65, specialType: 'long', maxHealth: 305, rarity: 'epic', reloadTime: 65, specialReloadTime: 510 },
        'Titan': { name: 'Mountain Golem', emoji: '🗻', color: '#708090', special: 'Earth Quake', damage: 48, specialDamage: 110, specialType: 'close', maxHealth: 350, rarity: 'epic', reloadTime: 100, specialReloadTime: 600 },
        'Storm': { name: 'Weather Master', emoji: '🌪️', color: '#87ceeb', special: 'Tornado', damage: 45, specialDamage: 105, specialType: 'long', maxHealth: 340, rarity: 'epic', reloadTime: 85, specialReloadTime: 570 },
        'Void': { name: 'Space Destroyer', emoji: '🌌', color: '#191970', special: 'Black Hole', damage: 42, specialDamage: 95, specialType: 'long', maxHealth: 330, rarity: 'epic', reloadTime: 95, specialReloadTime: 580 },
        'Phoenix2': { name: 'Fire Bird', emoji: '🦅', color: '#ff4500', special: 'Flame Wing', damage: 44, specialDamage: 100, specialType: 'long', maxHealth: 335, rarity: 'epic', reloadTime: 88, specialReloadTime: 550 },
        'Kraken': { name: 'Sea Monster', emoji: '🐙', color: '#008080', special: 'Tentacle Slam', damage: 46, specialDamage: 105, specialType: 'close', maxHealth: 340, rarity: 'epic', reloadTime: 92, specialReloadTime: 560 },
        'Lich': { name: 'Undead King', emoji: '💀', color: '#2f4f4f', special: 'Death Ray', damage: 43, specialDamage: 98, specialType: 'long', maxHealth: 332, rarity: 'epic', reloadTime: 85, specialReloadTime: 540 },
        'Behemoth': { name: 'Ancient Beast', emoji: '🦕', color: '#556b2f', special: 'Primal Roar', damage: 47, specialDamage: 108, specialType: 'close', maxHealth: 345, rarity: 'epic', reloadTime: 98, specialReloadTime: 590 },
        'Archon': { name: 'Light Bearer', emoji: '✨', color: '#ffd700', special: 'Divine Beam', damage: 41, specialDamage: 92, specialType: 'long', maxHealth: 328, rarity: 'epic', reloadTime: 80, specialReloadTime: 530 },
        'Hydra': { name: 'Multi-Head', emoji: '🐲', color: '#006400', special: 'Triple Strike', damage: 49, specialDamage: 112, specialType: 'close', maxHealth: 348, rarity: 'epic', reloadTime: 105, specialReloadTime: 600 },
        'Golem': { name: 'Stone Guardian', emoji: '🗿', color: '#696969', special: 'Boulder Crush', damage: 50, specialDamage: 115, specialType: 'close', maxHealth: 350, rarity: 'epic', reloadTime: 110, specialReloadTime: 600 },
        'Djinn': { name: 'Wish Granter', emoji: '🧞', color: '#4169e1', special: 'Reality Bend', damage: 39, specialDamage: 88, specialType: 'long', maxHealth: 322, rarity: 'epic', reloadTime: 75, specialReloadTime: 500 },
        'Sphinx': { name: 'Riddle Master', emoji: '🐈‍⬛', color: '#daa520', special: 'Mind Puzzle', damage: 38, specialDamage: 86, specialType: 'long', maxHealth: 320, rarity: 'epic', reloadTime: 78, specialReloadTime: 510 },
        'Valkyrie': { name: 'Battle Maiden', emoji: '⚡', color: '#4682b4', special: 'Thunder Spear', damage: 45, specialDamage: 102, specialType: 'close', maxHealth: 340, rarity: 'epic', reloadTime: 90, specialReloadTime: 570 },
        'Necromancer': { name: 'Death Caller', emoji: '💀', color: '#800080', special: 'Soul Steal', damage: 43, specialDamage: 98, specialType: 'long', maxHealth: 332, rarity: 'epic', reloadTime: 88, specialReloadTime: 550 },
        'Basilisk': { name: 'Stone Gaze', emoji: '🐍', color: '#228b22', special: 'Petrify Beam', damage: 41, specialDamage: 92, specialType: 'long', maxHealth: 328, rarity: 'epic', reloadTime: 82, specialReloadTime: 520 },
        'Minotaur': { name: 'Maze Guardian', emoji: '🐂', color: '#8b4513', special: 'Charge Rush', damage: 46, specialDamage: 105, specialType: 'close', maxHealth: 340, rarity: 'epic', reloadTime: 95, specialReloadTime: 580 },
        'Banshee': { name: 'Wailing Spirit', emoji: '👻', color: '#e6e6fa', special: 'Scream Wave', damage: 40, specialDamage: 90, specialType: 'long', maxHealth: 325, rarity: 'epic', reloadTime: 85, specialReloadTime: 540 },
        'Wendigo': { name: 'Frost Demon', emoji: '👹', color: '#87ceeb', special: 'Ice Curse', damage: 44, specialDamage: 100, specialType: 'close', maxHealth: 335, rarity: 'epic', reloadTime: 92, specialReloadTime: 560 },
        'Chimera': { name: 'Triple Beast', emoji: '🦁', color: '#ff6b35', special: 'Multi Strike', damage: 47, specialDamage: 108, specialType: 'close', maxHealth: 345, rarity: 'epic', reloadTime: 98, specialReloadTime: 590 },
        'Cerberus': { name: 'Hell Hound', emoji: '🐕‍🦺', color: '#8b0000', special: 'Triple Bite', damage: 45, specialDamage: 102, specialType: 'close', maxHealth: 340, rarity: 'epic', reloadTime: 90, specialReloadTime: 570 },
        'Gargoyle': { name: 'Stone Sentinel', emoji: '🗿', color: '#2f4f4f', special: 'Stone Rain', damage: 42, specialDamage: 95, specialType: 'long', maxHealth: 330, rarity: 'epic', reloadTime: 86, specialReloadTime: 545 },
        'Seraph': { name: 'Six-Winged Angel', emoji: '👼', color: '#ffd700', special: 'Heaven Strike', damage: 48, specialDamage: 110, specialType: 'long', maxHealth: 350, rarity: 'epic', reloadTime: 102, specialReloadTime: 600 },
        'Ifrit': { name: 'Fire Djinn', emoji: '🔥', color: '#ff4500', special: 'Inferno Blast', damage: 46, specialDamage: 105, specialType: 'long', maxHealth: 340, rarity: 'epic', reloadTime: 94, specialReloadTime: 575 },
        'Roc': { name: 'Giant Eagle', emoji: '🦅', color: '#4682b4', special: 'Wind Cutter', damage: 43, specialDamage: 98, specialType: 'long', maxHealth: 332, rarity: 'epic', reloadTime: 88, specialReloadTime: 550 },
        'Manticore': { name: 'Spike Tail', emoji: '🦁', color: '#8b4513', special: 'Poison Spike', damage: 41, specialDamage: 92, specialType: 'close', maxHealth: 328, rarity: 'epic', reloadTime: 84, specialReloadTime: 525 },
        'Wyvern': { name: 'Lesser Dragon', emoji: '🐲', color: '#228b22', special: 'Acid Breath', damage: 44, specialDamage: 100, specialType: 'long', maxHealth: 335, rarity: 'epic', reloadTime: 91, specialReloadTime: 555 },
        'Revenant': { name: 'Undead Knight', emoji: '💀', color: '#800080', special: 'Soul Drain', damage: 40, specialDamage: 90, specialType: 'close', maxHealth: 325, rarity: 'epic', reloadTime: 82, specialReloadTime: 520 },
        
        // NEW EPIC CHARACTERS (5 additional) - The ultimate power!
        'Frostmourne': { name: 'Ice Death', emoji: '🗡️', color: '#87ceeb', special: 'Frozen Soul', damage: 46, specialDamage: 105, specialType: 'close', maxHealth: 340, rarity: 'epic', reloadTime: 95, specialReloadTime: 575 },
        'Shadowflame': { name: 'Dark Fire', emoji: '🔥', color: '#4b0082', special: 'Shadow Burn', damage: 44, specialDamage: 100, specialType: 'long', maxHealth: 335, rarity: 'epic', reloadTime: 90, specialReloadTime: 555 },
        'Voidwalker': { name: 'Dimension Ripper', emoji: '🌀', color: '#191970', special: 'Reality Tear', damage: 48, specialDamage: 110, specialType: 'long', maxHealth: 345, rarity: 'epic', reloadTime: 100, specialReloadTime: 585 },
        'Stormbreaker': { name: 'Thunder Hammer', emoji: '⚡', color: '#ffd700', special: 'Lightning Storm', damage: 50, specialDamage: 115, specialType: 'close', maxHealth: 350, rarity: 'epic', reloadTime: 110, specialReloadTime: 600 },
        'Doomslayer': { name: 'Hell Breaker', emoji: '👹', color: '#8b0000', special: 'Doom Eternal', damage: 52, specialDamage: 120, specialType: 'close', maxHealth: 350, rarity: 'epic', reloadTime: 115, specialReloadTime: 600 },

        // Legendary Characters (20 total) - 350-400 HP - Special Reload: 6-8s (360-480 frames)
        'Dragon': { name: 'Dragon Lord', emoji: '🐉', color: '#ff6b35', special: 'Dragon Breath', damage: 45, specialDamage: 120, specialType: 'long', maxHealth: 375, rarity: 'legendary', reloadTime: 120, specialReloadTime: 420 },
        'Phoenix': { name: 'Phoenix Rider', emoji: '🔥', color: '#ff1744', special: 'Phoenix Fire', damage: 42, specialDamage: 115, specialType: 'long', maxHealth: 370, rarity: 'legendary', reloadTime: 110, specialReloadTime: 390 },
        'Leviathan': { name: 'Ocean Ruler', emoji: '🌊', color: '#1e90ff', special: 'Tsunami', damage: 58, specialDamage: 140, specialType: 'long', maxHealth: 390, rarity: 'legendary', reloadTime: 140, specialReloadTime: 450 },
        'Bahamut': { name: 'King Dragon', emoji: '🐲', color: '#b8860b', special: 'Mega Flare', damage: 62, specialDamage: 150, specialType: 'long', maxHealth: 395, rarity: 'legendary', reloadTime: 150, specialReloadTime: 480 },
        'Odin': { name: 'All-Father', emoji: '👴', color: '#4682b4', special: 'Gungnir Spear', damage: 55, specialDamage: 130, specialType: 'close', maxHealth: 385, rarity: 'legendary', reloadTime: 130, specialReloadTime: 420 },
        'Zeus': { name: 'Sky God', emoji: '⚡', color: '#ffd700', special: 'Thunder Bolt', damage: 60, specialDamage: 145, specialType: 'long', maxHealth: 392, rarity: 'legendary', reloadTime: 145, specialReloadTime: 450 },
        'Shiva': { name: 'Destroyer', emoji: '🔱', color: '#8a2be2', special: 'Cosmic Dance', damage: 57, specialDamage: 135, specialType: 'close', maxHealth: 387, rarity: 'legendary', reloadTime: 135, specialReloadTime: 435 },
        'Ragnarok': { name: 'World Ender', emoji: '🌋', color: '#ff0000', special: 'Apocalypse', damage: 65, specialDamage: 160, specialType: 'long', maxHealth: 398, rarity: 'legendary', reloadTime: 160, specialReloadTime: 480 },
        'Chronos': { name: 'Time Lord', emoji: '⏰', color: '#708090', special: 'Time Stop', damage: 52, specialDamage: 125, specialType: 'long', maxHealth: 378, rarity: 'legendary', reloadTime: 125, specialReloadTime: 405 },
        'Cosmos': { name: 'Universe Creator', emoji: '🌌', color: '#4b0082', special: 'Big Bang', damage: 70, specialDamage: 170, specialType: 'long', maxHealth: 400, rarity: 'legendary', reloadTime: 180, specialReloadTime: 480 },
        'Gaia': { name: 'Earth Mother', emoji: '🌍', color: '#228b22', special: 'World Shake', damage: 63, specialDamage: 152, specialType: 'close', maxHealth: 393, rarity: 'legendary', reloadTime: 155, specialReloadTime: 465 },
        'Ares': { name: 'War God', emoji: '⚔️', color: '#8b0000', special: 'War Cry', damage: 61, specialDamage: 148, specialType: 'close', maxHealth: 391, rarity: 'legendary', reloadTime: 148, specialReloadTime: 450 },
        'Anubis': { name: 'Death Judge', emoji: '🐺', color: '#000000', special: 'Soul Judge', damage: 59, specialDamage: 142, specialType: 'long', maxHealth: 389, rarity: 'legendary', reloadTime: 142, specialReloadTime: 435 },
        'Quetzal': { name: 'Feathered Serpent', emoji: '🐲', color: '#32cd32', special: 'Wind Storm', damage: 56, specialDamage: 138, specialType: 'long', maxHealth: 386, rarity: 'legendary', reloadTime: 138, specialReloadTime: 420 },
        'Apophis': { name: 'Chaos Serpent', emoji: '🐍', color: '#2f4f4f', special: 'Void Devour', damage: 72, specialDamage: 175, specialType: 'close', maxHealth: 400, rarity: 'legendary', reloadTime: 175, specialReloadTime: 360 },
        'Tiamat': { name: 'Primordial Dragon', emoji: '🐲', color: '#8a2be2', special: 'Chaos Storm', damage: 74, specialDamage: 180, specialType: 'long', maxHealth: 400, rarity: 'legendary', reloadTime: 185, specialReloadTime: 375 },
        'Lucifer': { name: 'Fallen Angel', emoji: '👹', color: '#8b0000', special: 'Hell Gate', damage: 69, specialDamage: 165, specialType: 'long', maxHealth: 399, rarity: 'legendary', reloadTime: 165, specialReloadTime: 465 },
        'Azathoth': { name: 'Outer God', emoji: '👁️', color: '#191970', special: 'Madness Wave', damage: 76, specialDamage: 185, specialType: 'long', maxHealth: 400, rarity: 'legendary', reloadTime: 190, specialReloadTime: 480 },
        'Yggdrasil': { name: 'World Tree', emoji: '🌳', color: '#228b22', special: 'Life Drain', damage: 67, specialDamage: 162, specialType: 'close', maxHealth: 397, rarity: 'legendary', reloadTime: 158, specialReloadTime: 450 },
        'Infinity': { name: 'Eternal One', emoji: '♾️', color: '#9370db', special: 'Reality Warp', damage: 68, specialDamage: 170, specialType: 'long', maxHealth: 398, rarity: 'legendary', reloadTime: 170, specialReloadTime: 465 }
    };

    const rarityColors = {
        common: '#9e9e9e',
        rare: '#2196f3', 
        epic: '#9c27b0',
        legendary: '#ff9800'
    };

    // MASSIVE Enhanced Arena/Map System - Every Arena Unique with Special Obstacles!
    const maps = {
        city: { 
            name: 'City Rooftop', 
            bg: '#2c3e50', 
            platforms: [
                {x: 100, y: 480, width: 120, height: 25, type: 'building_roof'}, // Low building roof
                {x: 280, y: 380, width: 100, height: 25, type: 'fire_escape'}, // Fire escape platform
                {x: 450, y: 300, width: 80, height: 25, type: 'water_tower'}, // Water tower platform
                {x: 600, y: 420, width: 90, height: 25, type: 'air_conditioner'}, // AC unit
                {x: 200, y: 250, width: 60, height: 20, type: 'billboard'}, // Billboard platform
                {x: 500, y: 180, width: 70, height: 15, type: 'antenna'} // Radio antenna
            ],
            specialFeatures: ['neon_signs', 'traffic_lights', 'helicopter_sounds'],
            obstacles: [],
            hazards: [
                {type: 'falling_glass', x: 400, y: 0, timer: 0, interval: 240} // Glass falls from broken windows
            ]
        },
        forest: { 
            name: 'Mystic Forest', 
            bg: '#1a5d1a', 
            platforms: [
                {x: 80, y: 450, width: 90, height: 30, type: 'tree_stump'}, // Tree stump
                {x: 220, y: 380, width: 100, height: 20, type: 'tree_branch'}, // Large branch
                {x: 380, y: 320, width: 80, height: 25, type: 'rock_formation'}, // Rock outcrop
                {x: 520, y: 250, width: 70, height: 20, type: 'vine_platform'}, // Thick vines
                {x: 650, y: 400, width: 85, height: 35, type: 'mushroom'}, // Giant mushroom
                {x: 300, y: 200, width: 60, height: 15, type: 'bird_nest'} // Bird nest in tree
            ],
            specialFeatures: ['magical_sparkles', 'owl_hoots', 'rustling_leaves'],
            obstacles: [],
            hazards: [
                {type: 'poison_spores', x: 350, y: 500, timer: 0, interval: 300} // Toxic mushroom spores
            ]
        },
        arena: { 
            name: 'Gladiator Arena', 
            bg: '#8b4513', 
            platforms: [
                {x: 150, y: 450, width: 120, height: 30, type: 'stone_block'}, // Stone obstacle
                {x: 450, y: 450, width: 120, height: 30, type: 'stone_block'}, // Stone obstacle
                {x: 320, y: 350, width: 80, height: 25, type: 'pillar'}, // Central pillar
                {x: 100, y: 300, width: 60, height: 20, type: 'weapon_rack'}, // Weapon display
                {x: 600, y: 300, width: 60, height: 20, type: 'shield_wall'}, // Shield wall
                {x: 350, y: 200, width: 100, height: 40, type: 'throne'} // Emperor's viewing throne
            ],
            specialFeatures: ['crowd_roars', 'sand_storms', 'gladiator_horns'],
            obstacles: [],
            hazards: [
                {type: 'spike_trap', x: 400, y: 520, timer: 0, interval: 200} // Spikes emerge from sand
            ]
        },
        space: { 
            name: 'Space Station', 
            bg: '#000011', 
            platforms: [
                {x: 100, y: 480, width: 80, height: 20, type: 'airlock'}, // Airlock entrance
                {x: 250, y: 400, width: 90, height: 15, type: 'solar_panel'}, // Solar panel
                {x: 400, y: 320, width: 100, height: 20, type: 'satellite_dish'}, // Satellite array
                {x: 580, y: 280, width: 70, height: 15, type: 'antenna_array'}, // Communications
                {x: 300, y: 200, width: 80, height: 25, type: 'observation_deck'}, // Viewing platform
                {x: 500, y: 450, width: 60, height: 30, type: 'fuel_tank'} // Fuel storage
            ],
            specialFeatures: ['zero_gravity_fields', 'laser_barriers', 'radio_static'],
            obstacles: [],
            hazards: [
                {type: 'laser_sweep', x: 0, y: 300, timer: 0, interval: 180}, // Horizontal laser
                {type: 'gravity_field', x: 350, y: 250, timer: 0, interval: 360} // Gravity anomaly
            ]
        },
        underwater: { 
            name: 'Ocean Depths', 
            bg: '#003366', 
            platforms: [
                {x: 120, y: 470, width: 110, height: 35, type: 'coral_reef'}, // Living coral
                {x: 300, y: 400, width: 90, height: 30, type: 'shipwreck'}, // Sunken ship deck
                {x: 480, y: 330, width: 100, height: 25, type: 'whale_skeleton'}, // Whale bones
                {x: 650, y: 450, width: 80, height: 40, type: 'treasure_chest'}, // Pirate treasure
                {x: 200, y: 250, width: 70, height: 20, type: 'submarine'}, // Abandoned sub
                {x: 500, y: 180, width: 60, height: 25, type: 'kelp_forest'} // Kelp tangle
            ],
            specialFeatures: ['bubble_streams', 'bioluminescence', 'whale_songs'],
            obstacles: [],
            hazards: [
                {type: 'electric_eel', x: 400, y: 500, timer: 0, interval: 220}, // Electric shock
                {type: 'whirlpool', x: 300, y: 350, timer: 0, interval: 400} // Pulls players down
            ]
        },
        volcano: { 
            name: 'Lava Cavern', 
            bg: '#4a0e0e', 
            platforms: [
                {x: 80, y: 480, width: 100, height: 25, type: 'obsidian_ledge'}, // Volcanic glass
                {x: 240, y: 420, width: 90, height: 30, type: 'lava_tube'}, // Hardened lava
                {x: 390, y: 350, width: 80, height: 20, type: 'crystal_formation'}, // Fire crystals
                {x: 540, y: 280, width: 70, height: 25, type: 'steam_vent'}, // Geyser platform
                {x: 650, y: 450, width: 90, height: 35, type: 'magma_chamber'}, // Chamber edge
                {x: 300, y: 200, width: 60, height: 20, type: 'dragon_bone'} // Ancient remains
            ],
            specialFeatures: ['molten_lava', 'volcanic_rumbles', 'fire_geysers'],
            obstacles: [],
            hazards: [
                {type: 'lava_geyser', x: 250, y: 550, timer: 0, interval: 180},
                {type: 'falling_rocks', x: 450, y: 0, timer: 0, interval: 240},
                {type: 'fire_burst', x: 600, y: 400, timer: 0, interval: 200}
            ]
        },
        ice: { 
            name: 'Frozen Wasteland', 
            bg: '#1e3a5f', 
            platforms: [
                {x: 100, y: 460, width: 110, height: 30, type: 'ice_block'}, // Solid ice chunk
                {x: 270, y: 390, width: 90, height: 25, type: 'frozen_lake'}, // Ice surface
                {x: 420, y: 320, width: 80, height: 20, type: 'icicle_cave'}, // Ice cave entrance
                {x: 580, y: 280, width: 70, height: 35, type: 'snow_drift'}, // Packed snow
                {x: 200, y: 220, width: 60, height: 25, type: 'ice_sculpture'}, // Frozen statue
                {x: 500, y: 150, width: 85, height: 20, type: 'glacier_shelf'} // Glacier edge
            ],
            specialFeatures: ['blizzard_winds', 'ice_crackling', 'aurora_lights'],
            obstacles: [],
            hazards: [
                {type: 'ice_spikes', x: 350, y: 550, timer: 0, interval: 250}, // Spikes shoot up
                {type: 'blizzard', x: 0, y: 0, timer: 0, interval: 300}, // Reduces visibility
                {type: 'avalanche', x: 600, y: 100, timer: 0, interval: 400} // Snow slides down
            ]
        },
        desert: { 
            name: 'Sand Dunes', 
            bg: '#8b4500', 
            platforms: [
                {x: 120, y: 470, width: 120, height: 35, type: 'sand_dune'}, // Large dune
                {x: 320, y: 400, width: 100, height: 30, type: 'cactus_grove'}, // Cactus cluster
                {x: 500, y: 330, width: 90, height: 25, type: 'rock_outcrop'}, // Desert rock
                {x: 650, y: 450, width: 80, height: 40, type: 'oasis_palm'}, // Palm tree
                {x: 200, y: 250, width: 70, height: 20, type: 'ancient_ruins'}, // Pyramid remains
                {x: 450, y: 180, width: 60, height: 25, type: 'sun_temple'} // Temple platform
            ],
            specialFeatures: ['sandstorm_swirls', 'mirage_effects', 'desert_winds'],
            obstacles: [],
            hazards: [
                {type: 'sandstorm', x: 0, y: 0, timer: 0, interval: 350}, // Reduces movement
                {type: 'quicksand', x: 400, y: 520, timer: 0, interval: 280}, // Slows players
                {type: 'scorpion_sting', x: 300, y: 500, timer: 0, interval: 320} // Poison damage
            ]
        },
        jungle: { 
            name: 'Amazon Temple', 
            bg: '#0d2818', 
            platforms: [
                {x: 90, y: 470, width: 100, height: 35, type: 'temple_steps'}, // Stone steps
                {x: 250, y: 400, width: 90, height: 25, type: 'vine_bridge'}, // Rope bridge
                {x: 410, y: 330, width: 80, height: 30, type: 'statue_head'}, // Ancient statue
                {x: 560, y: 280, width: 70, height: 20, type: 'tree_platform'}, // Wooden platform
                {x: 680, y: 420, width: 85, height: 40, type: 'altar_stone'}, // Sacrificial altar
                {x: 300, y: 200, width: 60, height: 25, type: 'idol_platform'} // Golden idol
            ],
            specialFeatures: ['temple_mechanisms', 'jungle_sounds', 'ancient_magic'],
            obstacles: [],
            hazards: [
                {type: 'poison_dart', x: 200, y: 350, timer: 0, interval: 200}, // Wall traps
                {type: 'rolling_boulder', x: 0, y: 300, timer: 0, interval: 450}, // Temple trap
                {type: 'snake_pit', x: 500, y: 550, timer: 0, interval: 300} // Venomous snakes
            ]
        },
        castle: { 
            name: 'Medieval Keep', 
            bg: '#2c2416', 
            platforms: [
                {x: 200, y: 450, width: 120, height: 40, type: 'stone_rampart'}, // Main platform
                {x: 500, y: 350, width: 100, height: 35, type: 'watchtower'} // Upper platform
            ],
            specialFeatures: ['knight_armor', 'torch_flames', 'medieval_banners'],
            obstacles: [],
            hazards: [
                {type: 'arrow_volley', x: 300, y: 200, timer: 0, interval: 250}, // Archer fire
                {type: 'catapult_stone', x: 450, y: 0, timer: 0, interval: 400}, // Siege weapons
                {type: 'boiling_oil', x: 150, y: 200, timer: 0, interval: 350} // Defensive trap
            ]
        },
        laboratory: { 
            name: 'Cyber Lab', 
            bg: '#0a0a2e', 
            platforms: [
                {x: 80, y: 480, width: 100, height: 20, type: 'server_rack'}, // Computer server
                {x: 240, y: 420, width: 90, height: 15, type: 'control_panel'}, // Control station
                {x: 390, y: 360, width: 80, height: 18, type: 'experiment_table'}, // Lab bench
                {x: 540, y: 300, width: 70, height: 20, type: 'generator'}, // Power source
                {x: 650, y: 450, width: 85, height: 25, type: 'cryo_chamber'}, // Freezing pod
                {x: 300, y: 200, width: 60, height: 15, type: 'hologram'} // Projection platform
            ],
            specialFeatures: ['electric_arcs', 'computer_beeps', 'laser_grids'],
            obstacles: [],
            hazards: [
                {type: 'laser_beam', x: 200, y: 300, timer: 0, interval: 180}, // Laser sweep
                {type: 'electric_field', x: 400, y: 400, timer: 0, interval: 220}, // Shock trap
                {type: 'toxic_gas', x: 600, y: 500, timer: 0, interval: 300} // Chemical leak
            ]
        },
        heaven: { 
            name: 'Cloud Kingdom', 
            bg: '#87ceeb', 
            platforms: [
                {x: 100, y: 470, width: 120, height: 40, type: 'cloud_platform'}, // Solid cloud
                {x: 280, y: 410, width: 100, height: 35, type: 'angel_pillar'}, // Divine column
                {x: 440, y: 350, width: 90, height: 30, type: 'star_platform'}, // Starlight base
                {x: 590, y: 290, width: 80, height: 25, type: 'heaven_gate'}, // Pearly gates
                {x: 200, y: 220, width: 70, height: 30, type: 'halo_ring'}, // Floating halo
                {x: 500, y: 150, width: 85, height: 40, type: 'throne_cloud'} // Divine throne
            ],
            specialFeatures: ['divine_light', 'angel_chorus', 'golden_particles'],
            obstacles: [],
            hazards: [
                {type: 'divine_lightning', x: 350, y: 0, timer: 0, interval: 250}, // Holy strike
                {type: 'wind_gust', x: 0, y: 300, timer: 0, interval: 200}, // Pushes players
                {type: 'blinding_light', x: 400, y: 200, timer: 0, interval: 350} // Temporary blindness
            ]
        },
        hell: { 
            name: 'Inferno Realm', 
            bg: '#2d0a0a', 
            platforms: [
                {x: 90, y: 480, width: 110, height: 35, type: 'brimstone_ledge'}, // Sulfur platform
                {x: 260, y: 420, width: 100, height: 30, type: 'demon_throne'}, // Evil seat
                {x: 420, y: 360, width: 90, height: 25, type: 'fire_altar'}, // Sacrificial stone
                {x: 570, y: 300, width: 80, height: 20, type: 'lava_bridge'}, // Molten crossing
                {x: 680, y: 450, width: 85, height: 40, type: 'torture_rack'}, // Torture device
                {x: 300, y: 200, width: 60, height: 25, type: 'hellgate'} // Portal platform
            ],
            specialFeatures: ['demon_roars', 'soul_screams', 'infernal_flames'],
            obstacles: [],
            hazards: [
                {type: 'hellfire', x: 200, y: 550, timer: 0, interval: 180}, // Fire eruption
                {type: 'demon_claw', x: 450, y: 300, timer: 0, interval: 220}, // Claw swipe
                {type: 'soul_drain', x: 600, y: 400, timer: 0, interval: 400} // Energy drain
            ]
        },
        moon: { 
            name: 'Lunar Surface', 
            bg: '#2c2c2c', 
            platforms: [
                {x: 120, y: 470, width: 110, height: 35, type: 'moon_rock'}, // Lunar boulder
                {x: 290, y: 410, width: 100, height: 30, type: 'crater_rim'}, // Crater edge
                {x: 450, y: 350, width: 90, height: 25, type: 'space_module'}, // Landing pod
                {x: 600, y: 290, width: 80, height: 20, type: 'satellite'}, // Moon satellite
                {x: 200, y: 220, width: 70, height: 30, type: 'mineral_deposit'}, // Moon crystals
                {x: 520, y: 150, width: 85, height: 35, type: 'observatory'} // Lunar base
            ],
            specialFeatures: ['low_gravity', 'earth_view', 'space_silence'],
            obstacles: [],
            hazards: [
                {type: 'meteor_shower', x: 350, y: 0, timer: 0, interval: 200}, // Falling meteors
                {type: 'solar_flare', x: 0, y: 0, timer: 0, interval: 450}, // Radiation burst
                {type: 'gravity_shift', x: 400, y: 300, timer: 0, interval: 300} // Gravity change
            ]
        },
        matrix: { 
            name: 'Digital World', 
            bg: '#001a00', 
            platforms: [
                {x: 100, y: 480, width: 100, height: 20, type: 'data_block'}, // Code platform
                {x: 260, y: 420, width: 90, height: 15, type: 'firewall'}, // Security barrier
                {x: 410, y: 360, width: 80, height: 18, type: 'server_node'}, // Network node
                {x: 550, y: 300, width: 70, height: 20, type: 'virus_scanner'}, // Antivirus
                {x: 650, y: 450, width: 85, height: 25, type: 'mainframe'}, // Central computer
                {x: 300, y: 200, width: 60, height: 15, type: 'exit_portal'} // Way out
            ],
            specialFeatures: ['code_rain', 'digital_glitches', 'system_sounds'],
            obstacles: [],
            hazards: [
                {type: 'virus_attack', x: 250, y: 400, timer: 0, interval: 220}, // Corrupts controls
                {type: 'system_crash', x: 0, y: 0, timer: 0, interval: 400}, // Screen flickers
                {type: 'firewall_scan', x: 450, y: 300, timer: 0, interval: 180} // Slows movement
            ]
        }
    };

    // Boss Class for Boss Battle Mode
    class Boss {
        constructor(x, y) {
            this.x = x;
            this.y = y;
            this.width = 120; // Much larger than normal fighters
            this.height = 120;
            this.maxHealth = 2000; // Very high HP
            this.health = this.maxHealth;
            this.damage = 160; // 2x damage (was 80)
            this.specialDamage = 300; // 2x special damage (was 150)
            this.speed = 4; // 2x speed (was 2)
            this.direction = -1; // Start facing left
            this.velocityY = 0;
            this.onGround = false;
            this.jumpPower = -20;

            // Boss appearance
            this.emoji = '🐉'; // Dragon boss
            this.name = 'Ancient Dragon';
            this.color = '#8B0000';

            // Attack cooldowns - 2x faster attacks
            this.canAttack = true;
            this.attackCooldown = 0;
            this.canSpecialAttack = true;
            this.specialAttackCooldown = 0;
            this.reloadTime = 1000; // 1 second normal attack cooldown (was 2000)
            this.specialReloadTime = 2500; // 2.5 second special attack cooldown (was 5000)

            // Boss special abilities
            this.rageMode = false;
            this.rageModeThreshold = 0.3; // Activate rage at 30% HP
            this.shakeMode = false;
            this.shakeModeThreshold = 0.25; // Activate screen shake at 25% HP
            this.lastAttackTime = 0;
            this.attackPattern = 0; // Cycle through different attack patterns

            // Boss phases
            this.phase = 1; // Start in phase 1
            this.phaseTransition = false;

            console.log(`🐉 Boss created: ${this.name} with ${this.maxHealth} HP`);
        }

        update() {
            // Apply gravity
            this.velocityY += 0.8;
            this.y += this.velocityY;

            // Platform collision (if battle is initialized)
            if (gameState.battle && gameState.battle.mapData && gameState.battle.mapData.platforms) {
                for (let platform of gameState.battle.mapData.platforms) {
                    // Check if boss is falling onto platform
                    if (this.velocityY > 0 &&
                        this.x + this.width > platform.x &&
                        this.x < platform.x + platform.width &&
                        this.y + this.height > platform.y &&
                        this.y + this.height < platform.y + platform.height + this.velocityY) {

                        this.y = platform.y - this.height;
                        this.velocityY = 0;
                        this.onGround = true;
                        break;
                    }
                }
            }

            // Ground collision
            const groundLevel = gameState.battle ? gameState.battle.groundLevel : (window.innerHeight - 120);
            if (this.y >= groundLevel - this.height) {
                this.y = groundLevel - this.height;
                this.velocityY = 0;
                this.onGround = true;
            } else if (!this.onGround) {
                this.onGround = false;
            }

            // Update attack cooldowns
            if (!this.canAttack && this.attackCooldown > 0) {
                this.attackCooldown -= 16.67;
                if (this.attackCooldown <= 0) {
                    this.canAttack = true;
                }
            }

            if (!this.canSpecialAttack && this.specialAttackCooldown > 0) {
                this.specialAttackCooldown -= 16.67;
                if (this.specialAttackCooldown <= 0) {
                    this.canSpecialAttack = true;
                }
            }

            // Check for rage mode
            if (!this.rageMode && this.health <= this.maxHealth * this.rageModeThreshold) {
                this.enterRageMode();
            }

            // Check for shake mode (25% HP)
            if (!this.shakeMode && this.health <= this.maxHealth * this.shakeModeThreshold) {
                this.enterShakeMode();
            }

            // Check for phase transitions
            if (this.phase === 1 && this.health <= this.maxHealth * 0.66) {
                this.enterPhase2();
            } else if (this.phase === 2 && this.health <= this.maxHealth * 0.33) {
                this.enterPhase3();
            }

            // AI behavior
            this.updateAI();
        }

        enterRageMode() {
            this.rageMode = true;
            this.damage *= 1.5; // 50% more damage
            this.specialDamage *= 1.5;
            this.speed *= 1.3; // 30% faster
            this.reloadTime *= 0.7; // 30% faster attacks
            this.specialReloadTime *= 0.7;
            console.log(`🔥 ${this.name} enters RAGE MODE!`);
            showNotification(`🔥 BOSS RAGE MODE ACTIVATED!`);
        }

        enterShakeMode() {
            this.shakeMode = true;
            console.log(`💥 ${this.name} is critically wounded! Screen shaking!`);
            showNotification(`💥 BOSS CRITICAL! SCREEN SHAKE!`);
        }

        enterPhase2() {
            this.phase = 2;
            this.phaseTransition = true;
            setTimeout(() => this.phaseTransition = false, 2000);
            console.log(`⚡ ${this.name} enters Phase 2!`);
            showNotification(`⚡ BOSS PHASE 2!`);
        }

        enterPhase3() {
            this.phase = 3;
            this.phaseTransition = true;
            setTimeout(() => this.phaseTransition = false, 2000);
            this.emoji = '🔥'; // Change appearance in final phase
            console.log(`💀 ${this.name} enters FINAL PHASE!`);
            showNotification(`💀 BOSS FINAL PHASE!`);
        }

        updateAI() {
            // Don't move during phase transitions
            if (this.phaseTransition) return;

            // Safety check - make sure battle is initialized
            if (!gameState.battle || !gameState.battle.player1 || !gameState.battle.player2) {
                return;
            }

            // Find closest player
            const player1 = gameState.battle.player1;
            const player2 = gameState.battle.player2;

            const dist1 = Math.abs(this.x - player1.x);
            const dist2 = Math.abs(this.x - player2.x);

            const target = dist1 < dist2 ? player1 : player2;
            const distance = Math.abs(this.x - target.x);

            // Movement AI
            if (distance > 150) {
                // Move toward closest player
                if (target.x > this.x) {
                    this.x += this.speed;
                    this.direction = 1;
                } else {
                    this.x -= this.speed;
                    this.direction = -1;
                }
            }

            // Jump if target is above
            if (target.y < this.y - 50 && this.onGround && Math.random() < 0.02) {
                this.jump();
            }

            // Attack patterns based on phase
            if (this.canAttack && distance < 200) {
                if (this.phase === 1) {
                    // Phase 1: Basic attacks
                    if (Math.random() < 0.015) {
                        this.normalAttack();
                    }
                } else if (this.phase === 2) {
                    // Phase 2: More aggressive
                    if (Math.random() < 0.025) {
                        this.normalAttack();
                    }
                } else if (this.phase === 3) {
                    // Phase 3: Very aggressive
                    if (Math.random() < 0.035) {
                        this.normalAttack();
                    }
                }
            }

            // Special attacks
            if (this.canSpecialAttack && distance < 250) {
                const specialChance = this.phase === 1 ? 0.005 : this.phase === 2 ? 0.008 : 0.012;
                if (Math.random() < specialChance) {
                    this.specialAttack();
                }
            }
        }

        jump() {
            if (this.onGround) {
                this.velocityY = this.jumpPower;
                this.onGround = false;
            }
        }

        normalAttack() {
            if (!this.canAttack) return;

            // Safety check - make sure battle is initialized
            if (!gameState.battle || !gameState.battle.projectiles) {
                return;
            }

            // Create multiple projectiles for boss
            const projectileCount = this.phase;
            for (let i = 0; i < projectileCount; i++) {
                const angle = (i - (projectileCount - 1) / 2) * 0.3; // Spread projectiles
                const projectile = new Projectile(
                    this.x + (this.direction > 0 ? this.width : 0),
                    this.y + this.height / 2 + (i * 20),
                    this.direction * 6 * Math.cos(angle),
                    this.damage,
                    this.color,
                    this
                );
                projectile.velocityY = -3 * Math.sin(angle); // Add vertical component
                gameState.battle.projectiles.push(projectile);
            }

            this.canAttack = false;
            this.attackCooldown = this.reloadTime;
            console.log(`🐉 Boss normal attack: ${this.damage} damage x${projectileCount}`);
        }

        specialAttack() {
            if (!this.canSpecialAttack) return;

            // Safety check - make sure battle is initialized
            if (!gameState.battle || !gameState.battle.projectiles) {
                return;
            }

            // Boss special: Fire breath in wide arc
            const projectileCount = 5 + this.phase * 2; // More projectiles in later phases
            for (let i = 0; i < projectileCount; i++) {
                const angle = (i / (projectileCount - 1) - 0.5) * Math.PI * 0.6; // 60 degree arc
                const projectile = new Projectile(
                    this.x + this.width / 2,
                    this.y + this.height / 2,
                    8 * Math.cos(angle) * this.direction,
                    this.specialDamage,
                    '#FF4500', // Orange fire color
                    this
                );
                projectile.velocityY = -8 * Math.sin(angle);
                gameState.battle.projectiles.push(projectile);
            }

            this.canSpecialAttack = false;
            this.specialAttackCooldown = this.specialReloadTime;
            console.log(`🔥 Boss FIRE BREATH: ${this.specialDamage} damage x${projectileCount}!`);
            showNotification(`🔥 BOSS FIRE BREATH!`);
        }

        takeDamage(damage, attacker) {
            this.health -= damage;
            console.log(`🐉 Boss takes ${damage} damage! HP: ${this.health}/${this.maxHealth}`);

            if (this.health <= 0) {
                this.health = 0;
                console.log(`💀 Boss defeated!`);
                // Safety check before calling endBossBattle
                if (gameState.battle && gameState.battle.endBossBattle) {
                    gameState.battle.endBossBattle(true); // Players win
                }
            }
        }

        draw(ctx) {
            // Boss body (larger rectangle)
            ctx.fillStyle = this.color;
            ctx.fillRect(this.x, this.y, this.width, this.height);

            // Boss emoji (much larger)
            ctx.font = '80px Arial';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';

            // Phase transition effect
            if (this.phaseTransition) {
                ctx.fillStyle = '#FFFFFF';
                ctx.shadowColor = '#FFFFFF';
                ctx.shadowBlur = 20;
            } else if (this.rageMode) {
                ctx.fillStyle = '#FF0000';
                ctx.shadowColor = '#FF0000';
                ctx.shadowBlur = 10;
            } else {
                ctx.fillStyle = '#FFFFFF';
                ctx.shadowBlur = 0;
            }

            ctx.fillText(this.emoji, this.x + this.width / 2, this.y + this.height / 2);
            ctx.shadowBlur = 0;

            // Boss health bar (large, at top of screen)
            const barWidth = 600;
            const barHeight = 30;
            const barX = (ctx.canvas.width - barWidth) / 2;
            const barY = 50;

            // Background
            ctx.fillStyle = '#333333';
            ctx.fillRect(barX - 5, barY - 5, barWidth + 10, barHeight + 10);

            // Health bar background
            ctx.fillStyle = '#660000';
            ctx.fillRect(barX, barY, barWidth, barHeight);

            // Health bar fill
            const healthPercent = this.health / this.maxHealth;
            let barColor = '#00FF00';
            if (healthPercent < 0.66) barColor = '#FFFF00';
            if (healthPercent < 0.33) barColor = '#FF0000';

            ctx.fillStyle = barColor;
            ctx.fillRect(barX, barY, barWidth * healthPercent, barHeight);

            // Boss name and phase
            ctx.font = '24px Arial';
            ctx.fillStyle = '#FFFFFF';
            ctx.textAlign = 'center';
            ctx.fillText(`${this.name} - Phase ${this.phase}${this.rageMode ? ' (RAGE)' : ''}`,
                        ctx.canvas.width / 2, barY - 15);

            // Health text
            ctx.font = '18px Arial';
            ctx.fillStyle = '#FFFFFF';
            ctx.fillText(`${this.health}/${this.maxHealth} HP`, ctx.canvas.width / 2, barY + barHeight + 25);
        }
    }

    // Battle System with Arena Obstacles and Special Features
    class Battle {
        constructor(playerChar, enemyChar, mapType) {
            console.log('=== BATTLE CONSTRUCTOR START ===');
            console.log('playerChar:', playerChar);
            console.log('enemyChar:', enemyChar);
            console.log('mapType:', mapType);

            this.canvas = document.getElementById('gameCanvas');
            console.log('Canvas element:', this.canvas);

            if (!this.canvas) {
                throw new Error('Canvas element not found!');
            }

            this.ctx = this.canvas.getContext('2d');
            console.log('Canvas context:', this.ctx);

            // Set canvas to full window size
            this.canvas.width = window.innerWidth;
            this.canvas.height = window.innerHeight;

            // Position players based on screen width with higher ground
            const playerStartX = Math.floor(this.canvas.width * 0.1); // 10% from left
            const enemyStartX = Math.floor(this.canvas.width * 0.8);   // 80% from left
            const groundY = this.canvas.height - 120;                  // Use same level as groundLevel

            // Set ground level higher for better gameplay space (BEFORE creating entities)
            this.groundLevel = this.canvas.height - 120; // Raised from 50 to 120

            this.player1 = new Fighter(playerChar, playerStartX, groundY, 'player');

            // Check if this is boss battle mode
            if (gameState.selectedBattleMode === 'boss_battle') {
                this.isBossBattleMode = true;
                this.boss = new Boss(enemyStartX, groundY);
                // In boss battle, player2 is also a player (cooperative mode)
                this.player2 = new Fighter(enemyChar, playerStartX + 100, groundY, 'player');
                console.log('🐉 Boss Battle Mode initialized!');
            } else {
                this.isBossBattleMode = false;
                this.player2 = new Fighter(enemyChar, enemyStartX, groundY, 'enemy');
            }

            // Handle window resize
            this.handleResize = () => {
                this.canvas.width = window.innerWidth;
                this.canvas.height = window.innerHeight;
                this.groundLevel = this.canvas.height - 120; // Keep consistent with new ground level
                this.scalePlatforms();
            };
            window.addEventListener('resize', this.handleResize);
            this.map = mapType;

            // Debug mode for showing circular hitboxes (for testing)
            this.showHitboxes = false; // Hitboxes off by default
            this.mapData = maps[mapType];

            // Scale platforms for current screen size (AFTER mapData is set)
            this.scalePlatforms();

            // Generate obstacles (AFTER mapData is set)
            this.generateObstacles();
            this.projectiles = [];
            this.gameRunning = true;
            this.keys = {};
            // Boss battles get more time (3 minutes), normal battles get 1.5 minutes
            this.timeLeft = this.isBossBattleMode ? 180000 : 90000;
            this.lastTime = Date.now();
            this.mapEffects = [];
            this.hazards = this.mapData.hazards ? [...this.mapData.hazards] : [];
            
            // SPECIAL DROP MODE SYSTEM!
            this.dropItems = [];
            this.dropTimer = 0;
            this.dropInterval = this.getRandomDropInterval(); // Random 15-30 seconds
            this.isSpecialDropMode = gameState.selectedBattleMode === 'special_drop';

            // FLAG CAPTURE MODE SYSTEM!
            this.isFlagCaptureMode = gameState.selectedBattleMode === 'flag_capture';
            console.log('🏁 Flag capture mode check:', this.isFlagCaptureMode, 'Selected mode:', gameState.selectedBattleMode);
            if (this.isFlagCaptureMode) {
                this.initializeFlagCapture();
            }
            
            // BACKGROUND GRID SYSTEM!
            this.backgroundGrid = this.initializeBackgroundGrid();
            this.selectedGridSquare = null;
            this.showColorPicker = false;

            // SCREEN SHAKE SYSTEM!
            this.screenShake = {
                intensity: 0,
                duration: 0,
                offsetX: 0,
                offsetY: 0
            };

            // VISUAL EFFECTS SYSTEM!
            this.visualEffects = [];
            
            this.setupControls();
            console.log('Starting game loop...');
            this.gameLoop();

            // Run initial hitbox test
            setTimeout(() => {
                this.testAllMaps();
                this.testCircularHitboxes();
            }, 1000); // Wait 1 second for everything to initialize
        }

        scalePlatforms() {
            if (!this.mapData) return;

            // Clear old platforms and create my own scattered platforms
            this.mapData.platforms = [];

            // Calculate scaling factors for current screen size
            const originalWidth = 800;
            const originalHeight = 600;
            const scaleX = this.canvas.width / originalWidth;
            const scaleY = this.canvas.height / originalHeight;

            // Create 6 FIXED platforms at consistent positions (much lower)
            const fixedPlatforms = [
                { x: 100, y: 520, width: 100, height: 20 },
                { x: 250, y: 470, width: 90, height: 18 },
                { x: 400, y: 420, width: 110, height: 22 },
                { x: 580, y: 370, width: 95, height: 20 },
                { x: 150, y: 320, width: 85, height: 18 },
                { x: 500, y: 270, width: 100, height: 20 }
            ];

            fixedPlatforms.forEach((platformData, i) => {
                const platform = {
                    x: Math.floor(platformData.x * scaleX),
                    y: Math.floor(platformData.y * scaleY),
                    width: Math.floor(platformData.width * scaleX),
                    height: Math.floor(platformData.height * scaleY),
                    type: `fixed_platform_${i}`,
                    scaled: true
                };

                // Ensure platform stays on screen
                platform.x = Math.max(0, Math.min(platform.x, this.canvas.width - platform.width));
                platform.y = Math.max(50, Math.min(platform.y, this.canvas.height - platform.height - 50));

                this.mapData.platforms.push(platform);
            });
        }

        generateObstacles() {
            // Completely disable all obstacles to remove gray tiny things
            if (this.mapData.obstacles) {
                this.mapData.obstacles = [];
            }
        }

        getRandomDropInterval() {
            // Random interval between 15-30 seconds (900-1800 frames at 60fps)
            return Math.floor(Math.random() * 900 + 900); // 15-30 seconds in frames
        }

        setupControls() {
            document.addEventListener('keydown', (e) => {
                this.keys[e.code] = true;
                
                // Player 1 controls (check for stun in flag capture mode)
                const player1Stunned = this.isFlagCaptureMode && gameState.flagCapture.stunned.player1;
                if (!player1Stunned) {
                    if (e.code === 'KeyS') {
                        this.player1.normalAttack();
                    }
                    if (e.code === 'KeyE') {
                        this.player1.specialAttack();
                    }
                    if (e.code === 'KeyQ') {
                        this.player1.useItem();
                    }
                    if (e.code === 'KeyR') {
                        this.player1.tryTeleport();
                    }
                }

                // Player 2 controls (multiplayer or boss battle mode, check for stun in flag capture mode)
                const player2Stunned = this.isFlagCaptureMode && gameState.flagCapture.stunned.player2;
                if ((gameState.gameMode === 'multiplayer' || this.isBossBattleMode) && !player2Stunned) {
                    if (e.code === 'ArrowDown') {
                        this.player2.normalAttack();
                    }
                    if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') {
                        this.player2.specialAttack();
                    }
                    if (e.code === 'Enter') {
                        this.player2.useItem();
                    }
                    if (e.code === 'Numpad0') {
                        this.player2.tryTeleport();
                    }
                }
                
                // Background grid customization controls
                if (e.code === 'KeyC') {
                    this.showColorPicker = !this.showColorPicker;
                }

                // Hitbox visualization toggle (H key)
                if (e.code === 'KeyH') {
                    this.showHitboxes = !this.showHitboxes;
                    console.log(`🎯 Hitbox visualization: ${this.showHitboxes ? 'ENABLED' : 'DISABLED'}`);
                }

                // Test circular hitboxes (T key)
                if (e.code === 'KeyT') {
                    this.testCircularHitboxes();
                }

                // Test all maps (M key)
                if (e.code === 'KeyM') {
                    this.testAllMaps();
                }

                if (e.code === 'Escape') {
                    this.gameRunning = false;
                }
            });

            document.addEventListener('keyup', (e) => {
                this.keys[e.code] = false;
            });
            
            // Mouse controls for background grid
            this.canvas.addEventListener('click', (e) => {
                if (this.showColorPicker) {
                    const rect = this.canvas.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    this.handleGridClick(x, y);
                }
            });
        }

        update() {
            if (!this.gameRunning) return;

            // Update timer
            const currentTime = Date.now();
            this.timeLeft -= currentTime - this.lastTime;
            this.lastTime = currentTime;

            if (this.timeLeft <= 0) {
                this.endGame();
                return;
            }

            // Player 1 movement (check for stun in flag capture mode)
            const player1Stunned = this.isFlagCaptureMode && gameState.flagCapture.stunned.player1;
            if (!player1Stunned) {
                if (this.keys['KeyW']) {
                    this.player1.jump();
                }
                if (this.keys['KeyA']) {
                    this.player1.x -= this.player1.getMovementSpeed();
                    this.player1.direction = -1;
                }
                if (this.keys['KeyD']) {
                    this.player1.x += this.player1.getMovementSpeed();
                    this.player1.direction = 1;
                }
            }

            // Player 2 movement (check for stun in flag capture mode)
            const player2Stunned = this.isFlagCaptureMode && gameState.flagCapture.stunned.player2;
            if (gameState.gameMode === 'multiplayer' || this.isBossBattleMode) {
                // In boss battle mode, player 2 is also controlled by human
                if (!player2Stunned) {
                    if (this.keys['ArrowUp']) {
                        this.player2.jump();
                    }
                    if (this.keys['ArrowLeft']) {
                        this.player2.x -= this.player2.getMovementSpeed();
                        this.player2.direction = -1;
                    }
                    if (this.keys['ArrowRight']) {
                        this.player2.x += this.player2.getMovementSpeed();
                        this.player2.direction = 1;
                    }
                }
            } else {
                // SMART AI with dodging and close-range tactics (also check for stun)
                if (!player2Stunned) {
                    this.updateAI();
                }
            }

            // Update fighters
            this.player1.update();
            this.player2.update();

            // Update boss if in boss battle mode
            if (this.isBossBattleMode && this.boss) {
                this.boss.update();
            }

            // Update projectiles
            this.projectiles.forEach((projectile, index) => {
                projectile.update();
                
                // Check collision with players
                if (projectile.owner !== this.player1 && this.checkCollision(projectile, this.player1)) {
                    this.player1.takeDamage(projectile.damage, projectile.owner);
                    // Apply lifesteal to the attacker (projectile owner)
                    if (projectile.owner && projectile.owner.applyLifesteal) {
                        projectile.owner.applyLifesteal(projectile.damage);
                    }
                    // Call onHit for special head projectiles
                    if (projectile.onHit) {
                        projectile.onHit();
                    }
                    this.projectiles.splice(index, 1);
                    return;
                }
                if (projectile.owner !== this.player2 && this.checkCollision(projectile, this.player2)) {
                    this.player2.takeDamage(projectile.damage, projectile.owner);
                    // Apply lifesteal to the attacker (projectile owner)
                    if (projectile.owner && projectile.owner.applyLifesteal) {
                        projectile.owner.applyLifesteal(projectile.damage);
                    }
                    // Call onHit for special head projectiles
                    if (projectile.onHit) {
                        projectile.onHit();
                    }
                    this.projectiles.splice(index, 1);
                    return;
                }

                // Check collision with boss (if in boss battle mode)
                if (this.isBossBattleMode && this.boss && projectile.owner !== this.boss && this.checkCollision(projectile, this.boss)) {
                    this.boss.takeDamage(projectile.damage, projectile.owner);
                    // Apply lifesteal to the attacker (projectile owner)
                    if (projectile.owner && projectile.owner.applyLifesteal) {
                        projectile.owner.applyLifesteal(projectile.damage);
                    }
                    // Call onHit for special head projectiles
                    if (projectile.onHit) {
                        projectile.onHit();
                    }
                    this.projectiles.splice(index, 1);
                    return;
                }

                // Remove off-screen projectiles and restore heads
                if (projectile.x < -50 || projectile.x > this.canvas.width + 50) {
                    // For head projectiles, restore the head when going off-screen
                    if (projectile.onHit) {
                        projectile.onHit();
                    }
                    this.projectiles.splice(index, 1);
                }
                
                // Check if projectile should be removed (for HeadProjectile's shouldBeRemoved flag)
                if (projectile.shouldBeRemoved) {
                    this.projectiles.splice(index, 1);
                }
            });

            // Update map hazards (like volcano geysers)
            this.updateMapHazards();
            
            // Update map effects
            this.updateMapEffects();

            // SPECIAL DROP MODE - Update item dropping system!
            if (this.isSpecialDropMode) {
                this.updateSpecialDrops();
            }

            // FLAG CAPTURE MODE - Update flag capture system!
            if (this.isFlagCaptureMode) {
                this.updateFlagCapture();
                // Debug: Check if game loop is running
                if (Math.random() < 0.01) { // Log occasionally
                    console.log('🏁 Flag capture update running, flag exists:', !!gameState.flagCapture.flag);
                }
            }

            // Update UI
            this.updateUI();

            // Check win condition
            if (this.isBossBattleMode) {
                // In boss battle mode, only end if BOTH players are dead
                if (this.player1.health <= 0 && this.player2.health <= 0) {
                    this.endGame();
                }
            } else {
                // In normal modes, end if ANY player dies
                if (this.player1.health <= 0 || this.player2.health <= 0) {
                    this.endGame();
                }
            }
        }

        updateMapHazards() {
            if (this.map === 'volcano') {
                this.hazards.forEach(hazard => {
                    if (hazard.type === 'lava_geyser') {
                        hazard.timer++;
                        if (hazard.timer >= hazard.interval) {
                            // Trigger lava geyser
                            this.createLavaGeyser(hazard.x, hazard.y);
                            hazard.timer = 0;
                            
                            // Check if players are in geyser area
                            const geyserRange = 50;
                            if (Math.abs(this.player1.x - hazard.x) < geyserRange) {
                                this.player1.takeDamage(25);
                            }
                            if (Math.abs(this.player2.x - hazard.x) < geyserRange) {
                                this.player2.takeDamage(25);
                            }
                        }
                    }
                });
            }
        }

        createLavaGeyser(x, y) {
            // Create visual effect for lava geyser
            this.mapEffects.push({
                type: 'lava_geyser',
                x: x,
                y: y,
                life: 60,
                height: 0,
                maxHeight: 200
            });
        }

        updateMapEffects() {
            // Update screen shake
            this.updateScreenShake();

            // Update visual effects
            this.updateVisualEffects();

            // Disabled all map effects to prevent flashing gray things
            return;

            // Update existing effects
            this.mapEffects.forEach((effect, index) => {
                effect.life--;
                
                switch(effect.type) {
                    case 'lava_geyser':
                        if (effect.life > 45) {
                            effect.height = Math.min(effect.height + 10, effect.maxHeight);
                        } else {
                            effect.height = Math.max(effect.height - 5, 0);
                        }
                        break;
                    case 'lava_bubble':
                        effect.y -= 2;
                        effect.size *= 1.02;
                        break;
                    case 'snowflake':
                        effect.y += effect.speed;
                        effect.x += Math.sin(Date.now() * 0.005 + index) * 0.5;
                        break;
                    case 'bubble':
                        effect.y -= effect.speed;
                        effect.x += Math.sin(Date.now() * 0.003 + index) * 0.3;
                        break;
                    case 'star':
                        effect.twinkle = (effect.twinkle + 1) % 120;
                        break;
                    case 'code_rain':
                        effect.y += effect.speed;
                        break;
                }
                
                if (effect.life <= 0 || effect.y > this.canvas.height + 50 || effect.y < -50) {
                    this.mapEffects.splice(index, 1);
                }
            });
        }

        // SCREEN SHAKE SYSTEM
        addScreenShake(intensity, duration) {
            this.screenShake.intensity = Math.max(this.screenShake.intensity, intensity);
            this.screenShake.duration = Math.max(this.screenShake.duration, duration);
        }

        updateScreenShake() {
            // Boss shake mode - intense continuous shaking
            if (this.isBossBattleMode && this.boss && this.boss.shakeMode) {
                const bossShakeIntensity = 15; // Very intense shaking
                this.screenShake.offsetX = (Math.random() - 0.5) * bossShakeIntensity;
                this.screenShake.offsetY = (Math.random() - 0.5) * bossShakeIntensity;
                return; // Skip normal shake logic
            }

            if (this.screenShake.duration > 0) {
                // Generate random shake offset
                const shakeAmount = this.screenShake.intensity * (this.screenShake.duration / 60);
                this.screenShake.offsetX = (Math.random() - 0.5) * shakeAmount;
                this.screenShake.offsetY = (Math.random() - 0.5) * shakeAmount;

                // Reduce shake over time
                this.screenShake.duration--;
                if (this.screenShake.duration <= 0) {
                    this.screenShake.intensity = 0;
                    this.screenShake.offsetX = 0;
                    this.screenShake.offsetY = 0;
                }
            } else {
                this.screenShake.offsetX = 0;
                this.screenShake.offsetY = 0;
            }
        }

        // VISUAL EFFECTS SYSTEM
        addVisualEffect(type, x, y, options = {}) {
            const effect = {
                type: type,
                x: x,
                y: y,
                life: options.life || 30,
                maxLife: options.life || 30,
                ...options
            };
            this.visualEffects.push(effect);
        }

        updateVisualEffects() {
            for (let i = this.visualEffects.length - 1; i >= 0; i--) {
                const effect = this.visualEffects[i];
                effect.life--;

                // Update effect based on type
                switch(effect.type) {
                    case 'hit_spark':
                        effect.x += effect.velocityX || 0;
                        effect.y += effect.velocityY || 0;
                        break;
                    case 'dust_cloud':
                        effect.y -= 0.5; // Rise slower
                        effect.x += (effect.velocityX || 0); // Horizontal drift
                        effect.size = (effect.size || 3) * 0.96; // Shrink faster
                        break;
                    case 'damage_number':
                        effect.y -= 2;
                        effect.x += (Math.random() - 0.5) * 0.5;
                        break;
                    case 'explosion_particle':
                        // Move particles outward
                        effect.x += effect.velocityX || 0;
                        effect.y += effect.velocityY || 0;
                        // Slow down over time
                        effect.velocityX *= 0.95;
                        effect.velocityY *= 0.95;
                        // Shrink
                        effect.size = (effect.size || 6) * 0.96;
                        break;
                    case 'fire_particle':
                        // Fire rises and spreads
                        effect.x += effect.velocityX || 0;
                        effect.y += effect.velocityY || 0;
                        effect.velocityY -= 0.1; // Rise up
                        effect.velocityX *= 0.98;
                        effect.size = (effect.size || 5) * 0.95;
                        break;
                    case 'explosion_flash':
                        // Flash just fades, no movement
                        break;
                }

                // Remove expired effects
                if (effect.life <= 0) {
                    this.visualEffects.splice(i, 1);
                }
            }
        }

        checkCollision(a, b) {
            // Use circular collision detection for more precise hitboxes
            // Calculate center points and radii for both objects
            const aCenterX = a.x + a.width / 2;
            const aCenterY = a.y + a.height / 2;
            const aRadius = Math.min(a.width, a.height) / 3; // Smaller hitboxes (1/3 instead of 1/2)

            const bCenterX = b.x + b.width / 2;
            const bCenterY = b.y + b.height / 2;
            const bRadius = Math.min(b.width, b.height) / 3; // Smaller hitboxes (1/3 instead of 1/2)

            // Calculate distance between centers
            const dx = aCenterX - bCenterX;
            const dy = aCenterY - bCenterY;
            const distance = Math.sqrt(dx * dx + dy * dy);

            // Collision occurs if distance is less than sum of radii
            return distance < (aRadius + bRadius);
        }

        drawHitbox(obj, color = 'rgba(255, 0, 0, 0.3)') {
            // Draw circular hitbox for debugging
            const centerX = obj.x + obj.width / 2;
            const centerY = obj.y + obj.height / 2;
            const radius = Math.min(obj.width, obj.height) / 3; // Smaller hitboxes (1/3 instead of 1/2)

            this.ctx.save();
            this.ctx.strokeStyle = color;
            this.ctx.fillStyle = color;
            this.ctx.lineWidth = 2;
            this.ctx.beginPath();
            this.ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
            this.ctx.stroke();
            this.ctx.fill();
            this.ctx.restore();
        }

        testCircularHitboxes() {
            // Comprehensive test function for circular hitboxes
            console.log('🎯 Testing Circular Hitboxes System');
            console.log('=====================================');

            // Test 1: Character vs Character collision
            const originalP1X = this.player1.x;
            const originalP1Y = this.player1.y;
            const originalP2X = this.player2.x;
            const originalP2Y = this.player2.y;

            // Move players close together
            this.player1.x = 400;
            this.player1.y = 300;
            this.player2.x = 450;
            this.player2.y = 300;

            const charCollision = this.checkCollision(this.player1, this.player2);
            console.log(`✅ Character collision test: ${charCollision ? 'COLLISION DETECTED' : 'NO COLLISION'}`);

            // Test 2: Projectile collision simulation
            const testProjectile = {
                x: this.player1.x + 10,
                y: this.player1.y + 10,
                width: 15,
                height: 15
            };

            const projCollision = this.checkCollision(testProjectile, this.player2);
            console.log(`✅ Projectile collision test: ${projCollision ? 'COLLISION DETECTED' : 'NO COLLISION'}`);

            // Test 3: Drop item collision simulation
            if (this.isSpecialDropMode && this.dropItems.length > 0) {
                const itemCollision = this.checkCollision(this.dropItems[0], this.player1);
                console.log(`✅ Drop item collision test: ${itemCollision ? 'COLLISION DETECTED' : 'NO COLLISION'}`);
            } else {
                console.log(`✅ Drop item collision test: NO ITEMS TO TEST`);
            }

            // Restore original positions
            this.player1.x = originalP1X;
            this.player1.y = originalP1Y;
            this.player2.x = originalP2X;
            this.player2.y = originalP2Y;

            console.log('=====================================');
            console.log(`🗺️ Current map: ${this.mapData.name}`);
            console.log(`🎮 Hitbox visualization: ${this.showHitboxes ? 'ENABLED' : 'DISABLED'}`);
            console.log('=====================================');
        }

        testAllMaps() {
            // Test circular hitboxes on all available maps
            console.log('🌍 TESTING ALL MAPS FOR CIRCULAR HITBOXES');
            console.log('==========================================');

            const allMaps = Object.keys(maps);
            console.log(`📋 Found ${allMaps.length} maps to test:`);
            allMaps.forEach((mapName, index) => {
                console.log(`${index + 1}. ${maps[mapName].name} (${mapName})`);
            });

            console.log('\n🎯 Circular hitbox system is active on ALL maps!');
            console.log('✅ All maps use the same collision detection system');
            console.log('✅ Character vs Character collisions: CIRCULAR (SMALLER)');
            console.log('✅ Projectile vs Character collisions: CIRCULAR (SMALLER)');
            console.log('✅ Drop Item vs Character collisions: CIRCULAR (SMALLER)');
            console.log('✅ Hitbox size: 1/3 of character size (more precise)');

            console.log('\n🎮 Controls for testing:');
            console.log('• Press H to toggle hitbox visualization');
            console.log('• Press T to run collision tests');
            console.log('• Hitboxes are shown as colored circles when enabled');
            console.log('  - Green: Player 1');
            console.log('  - Red: Player 2 / CPU');
            console.log('  - Yellow: Projectiles');
            console.log('  - Cyan: Drop Items');

            console.log('\n==========================================');
        }

        render() {
            // Apply screen shake by translating the canvas
            this.ctx.save();
            this.ctx.translate(this.screenShake.offsetX, this.screenShake.offsetY);

            // Clear canvas with map background
            this.ctx.fillStyle = this.mapData ? this.mapData.bg : '#87CEEB';
            this.ctx.fillRect(-this.screenShake.offsetX, -this.screenShake.offsetY, this.canvas.width, this.canvas.height);

            // Draw map background features
            this.drawMapBackground();

            // Draw my custom scattered platforms
            this.ctx.fillStyle = '#8B4513'; // Brown color for platforms
            if (this.mapData && this.mapData.platforms) {
                this.mapData.platforms.forEach(platform => {
                    this.ctx.fillRect(platform.x, platform.y, platform.width, platform.height);

                    // Platform border
                    this.ctx.strokeStyle = '#654321';
                    this.ctx.lineWidth = 2;
                    this.ctx.strokeRect(platform.x, platform.y, platform.width, platform.height);
                });
            }

            // Draw 20 scattered obstacles (no labels)
            if (this.mapData.obstacles) {
                this.mapData.obstacles.forEach(obstacle => {
                    // Different colors for jumpable vs scattered obstacles
                    if (obstacle.jumpable) {
                        this.ctx.fillStyle = '#8B4513'; // Brown for jumpable obstacles
                    } else {
                        this.ctx.fillStyle = '#666666'; // Gray for scattered obstacles
                    }

                    // Draw obstacle
                    this.ctx.fillRect(obstacle.x, obstacle.y, obstacle.width, obstacle.height);

                    // Subtle border
                    this.ctx.strokeStyle = '#000000';
                    this.ctx.lineWidth = 1;
                    this.ctx.strokeRect(obstacle.x, obstacle.y, obstacle.width, obstacle.height);
                });
            }

            // Map effects disabled to prevent flashing
            // this.drawMapEffects();

            // FIXED: Draw special drop items (like Super Smash Bros!)
            if (this.isSpecialDropMode) {
                this.drawDropItems();
            }

            // Draw special volcano feature
            if (this.map === 'volcano') {
                this.drawVolcano();
            }

            // Draw timer with scaled font size
            const screenScale = Math.min(this.canvas.width / 800, this.canvas.height / 600);
            const timerFontSize = Math.floor(24 * screenScale * 1.5); // 1.5x bigger
            const minTimerFontSize = 30; // Minimum font size for visibility
            const finalTimerFontSize = Math.max(minTimerFontSize, timerFontSize);

            this.ctx.fillStyle = '#FFD700';
            this.ctx.font = `bold ${finalTimerFontSize}px Arial`;
            const timeSeconds = Math.max(0, Math.ceil(this.timeLeft / 1000));

            if (this.isBossBattleMode) {
                // Boss battle: timer in bottom right
                this.ctx.textAlign = 'right';
                this.ctx.fillText(`Time: ${timeSeconds}s`, this.canvas.width - 20, this.canvas.height - 20);
            } else {
                // Normal battles: timer at top center
                this.ctx.textAlign = 'center';
                this.ctx.fillText(`Time: ${timeSeconds}s`, this.canvas.width / 2, finalTimerFontSize + 20);
            }

            // Draw hitbox status indicator
            this.ctx.fillStyle = this.showHitboxes ? '#00FF00' : '#FF0000';
            this.ctx.font = 'bold 16px Arial';
            this.ctx.textAlign = 'right';
            this.ctx.fillText(`Hitboxes: ${this.showHitboxes ? 'ON' : 'OFF'}`, this.canvas.width - 10, 25);
            this.ctx.fillStyle = '#FFFFFF';
            this.ctx.font = 'bold 12px Arial';
            this.ctx.fillText('Press H to toggle', this.canvas.width - 10, 45);

            this.ctx.textAlign = 'left';

            // Draw fighters
            this.player1.draw(this.ctx);
            this.player2.draw(this.ctx);

            // Draw boss (if in boss battle mode)
            if (this.isBossBattleMode && this.boss) {
                this.boss.draw(this.ctx);

                // Draw boss health bar at top of screen
                const barWidth = this.canvas.width * 0.6;
                const barHeight = 30;
                const barX = (this.canvas.width - barWidth) / 2;
                const barY = 20;

                // Background
                this.ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
                this.ctx.fillRect(barX - 5, barY - 5, barWidth + 10, barHeight + 10);

                // Health bar background
                this.ctx.fillStyle = '#333';
                this.ctx.fillRect(barX, barY, barWidth, barHeight);

                // Health bar fill - darker, less bright colors
                const healthPercent = this.boss.health / this.boss.maxHealth;
                const healthColor = healthPercent > 0.6 ? '#8B0000' : healthPercent > 0.3 ? '#B8860B' : '#8B0000'; // Dark red, dark gold, dark red
                this.ctx.fillStyle = healthColor;
                this.ctx.fillRect(barX, barY, barWidth * healthPercent, barHeight);

                // Boss name and phase
                this.ctx.fillStyle = '#FFFFFF';
                this.ctx.font = 'bold 16px Arial';
                this.ctx.textAlign = 'center';
                const phaseText = this.boss.rageMode ? 'RAGE' : `Phase ${this.boss.phase}`;
                this.ctx.fillText(`${this.boss.name} - ${phaseText}`, this.canvas.width / 2, barY + 18);

                // Health numbers
                this.ctx.font = 'bold 12px Arial';
                this.ctx.fillText(`${Math.max(0, Math.floor(this.boss.health))} / ${this.boss.maxHealth}`, this.canvas.width / 2, barY + 45);
            }

            // Draw circular hitboxes for testing (debug mode)
            if (this.showHitboxes) {
                this.drawHitbox(this.player1, 'rgba(0, 255, 0, 0.3)'); // Green for player 1
                this.drawHitbox(this.player2, 'rgba(0, 255, 0, 0.3)'); // Green for player 2 (both are players in boss mode)
                if (this.isBossBattleMode && this.boss) {
                    this.drawHitbox(this.boss, 'rgba(255, 0, 0, 0.3)'); // Red for boss
                }
            }

            // Draw projectiles
            this.projectiles.forEach(projectile => {
                projectile.draw(this.ctx);
                // Draw projectile hitboxes too
                if (this.showHitboxes) {
                    this.drawHitbox(projectile, 'rgba(255, 255, 0, 0.3)'); // Yellow for projectiles
                }
            });

            // Draw flag (flag capture mode)
            if (this.isFlagCaptureMode) {
                this.drawFlag();
            }

            // Draw visual effects
            this.drawVisualEffects();

            // Restore canvas context (remove screen shake)
            this.ctx.restore();
        }

        drawVisualEffects() {
            this.visualEffects.forEach(effect => {
                const alpha = effect.life / effect.maxLife;

                switch(effect.type) {
                    case 'hit_spark':
                        this.ctx.fillStyle = `rgba(255, 255, 0, ${alpha})`;
                        this.ctx.fillRect(effect.x - 2, effect.y - 2, 4, 4);
                        this.ctx.fillStyle = `rgba(255, 200, 0, ${alpha})`;
                        this.ctx.fillRect(effect.x - 1, effect.y - 1, 2, 2);
                        break;

                    case 'dust_cloud':
                        this.ctx.fillStyle = `rgba(139, 69, 19, ${alpha * 0.4})`;
                        this.ctx.beginPath();
                        this.ctx.arc(effect.x, effect.y, effect.size || 5, 0, Math.PI * 2);
                        this.ctx.fill();
                        break;

                    case 'damage_number':
                        this.ctx.fillStyle = `rgba(255, 0, 0, ${alpha})`;
                        this.ctx.font = 'bold 16px Arial';
                        this.ctx.textAlign = 'center';
                        this.ctx.fillText(effect.damage, effect.x, effect.y);
                        break;

                    case 'explosion_particle':
                        // Explosion particles with color
                        const color = effect.color || '#FF4500';
                        this.ctx.fillStyle = color.replace(')', `, ${alpha})`).replace('rgb', 'rgba');
                        this.ctx.shadowColor = color;
                        this.ctx.shadowBlur = 10;
                        this.ctx.beginPath();
                        this.ctx.arc(effect.x, effect.y, effect.size || 6, 0, Math.PI * 2);
                        this.ctx.fill();
                        this.ctx.shadowBlur = 0;
                        break;

                    case 'fire_particle':
                        // Fire particles (orange/yellow)
                        const fireAlpha = alpha * 0.8;
                        this.ctx.fillStyle = `rgba(255, ${100 + Math.random() * 100}, 0, ${fireAlpha})`;
                        this.ctx.shadowColor = '#FF4500';
                        this.ctx.shadowBlur = 8;
                        this.ctx.beginPath();
                        this.ctx.arc(effect.x, effect.y, effect.size || 5, 0, Math.PI * 2);
                        this.ctx.fill();
                        this.ctx.shadowBlur = 0;
                        break;

                    case 'explosion_flash':
                        // Central explosion flash
                        const flashSize = (1 - alpha) * (effect.maxSize || 100);
                        const flashAlpha = alpha * 0.6;

                        // Outer ring
                        this.ctx.fillStyle = `rgba(255, 100, 0, ${flashAlpha * 0.3})`;
                        this.ctx.beginPath();
                        this.ctx.arc(effect.x, effect.y, flashSize, 0, Math.PI * 2);
                        this.ctx.fill();

                        // Middle ring
                        this.ctx.fillStyle = `rgba(255, 150, 0, ${flashAlpha * 0.5})`;
                        this.ctx.beginPath();
                        this.ctx.arc(effect.x, effect.y, flashSize * 0.7, 0, Math.PI * 2);
                        this.ctx.fill();

                        // Inner core
                        this.ctx.fillStyle = `rgba(255, 255, 255, ${flashAlpha})`;
                        this.ctx.shadowColor = '#FFFFFF';
                        this.ctx.shadowBlur = 20;
                        this.ctx.beginPath();
                        this.ctx.arc(effect.x, effect.y, flashSize * 0.4, 0, Math.PI * 2);
                        this.ctx.fill();
                        this.ctx.shadowBlur = 0;
                        break;
                }
            });
        }

        drawFlag() {
            try {
                // Draw flag if it exists in the world
                if (gameState.flagCapture.flag) {
                    // Flag rendering (debug logging removed)
                    gameState.flagCapture.flag.render(this.ctx);
                }
            } catch (error) {
                console.error('🏁 Error in drawFlag:', error);
                // Reset flag if there's a rendering error
                gameState.flagCapture.flag = null;
            }

            // Draw flag holder timer
            if (gameState.flagCapture.flagHolder) {
                const holder = gameState.flagCapture.flagHolder === 'player1' ? this.player1 : this.player2;

                // Draw hold timer
                const currentTime = Date.now();
                const holdTime = currentTime - gameState.flagCapture.holdStartTime;
                const remainingTime = Math.max(0, gameState.flagCapture.holdDuration - holdTime);
                const seconds = Math.ceil(remainingTime / 1000);

                // Progress bar background
                const barWidth = 100;
                const barHeight = 8;
                const barX = holder.x + holder.width/2 - barWidth/2;
                const barY = holder.y - 50;

                this.ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
                this.ctx.fillRect(barX, barY, barWidth, barHeight);

                // Progress bar fill
                const progress = holdTime / gameState.flagCapture.holdDuration;
                const fillWidth = barWidth * progress;
                this.ctx.fillStyle = progress > 0.8 ? '#00FF00' : progress > 0.5 ? '#FFFF00' : '#FF6600';
                this.ctx.fillRect(barX, barY, fillWidth, barHeight);

                // Timer text
                this.ctx.fillStyle = '#FFFFFF';
                this.ctx.font = 'bold 14px Arial';
                this.ctx.strokeStyle = '#000000';
                this.ctx.lineWidth = 2;
                this.ctx.strokeText(`${seconds}s`, holder.x + holder.width/2, barY - 5);
                this.ctx.fillText(`${seconds}s`, holder.x + holder.width/2, barY - 5);
            }

            // Draw stun indicators
            if (gameState.flagCapture.stunned.player1) {
                this.ctx.font = '25px Arial';
                this.ctx.textAlign = 'center';
                this.ctx.fillText('💫', this.player1.x + this.player1.width/2, this.player1.y - 10);
            }
            if (gameState.flagCapture.stunned.player2) {
                this.ctx.font = '25px Arial';
                this.ctx.textAlign = 'center';
                this.ctx.fillText('💫', this.player2.x + this.player2.width/2, this.player2.y - 10);
            }
        }

        drawMapBackground() {
            // Enhanced visual backgrounds for each map
            switch(this.map) {
                case 'city':
                    this.drawCityBackground();
                    break;
                case 'forest':
                    this.drawForestBackground();
                    break;
                case 'space':
                    this.drawSpaceBackground();
                    break;
                case 'castle':
                    this.drawCastleBackground();
                    break;
                case 'volcano':
                    this.drawVolcanoBackground();
                    break;
                case 'underwater':
                    this.drawUnderwaterBackground();
                    break;
                case 'ice':
                    this.drawIceBackground();
                    break;
                case 'desert':
                    this.drawDesertBackground();
                    break;
                default:
                    // Gradient background for other maps
                    this.drawGradientBackground();
                    break;
            }
        }

        drawVolcano() {
            // Draw the volcano mountain with lava
            this.ctx.fillStyle = '#654321';
            this.ctx.beginPath();
            this.ctx.moveTo(400, 100);
            this.ctx.lineTo(300, 300);
            this.ctx.lineTo(500, 300);
            this.ctx.closePath();
            this.ctx.fill();
            
            // Lava crater
            this.ctx.fillStyle = '#ff4500';
            this.ctx.fillRect(380, 100, 40, 20);
            
            // Volcanic glow
            this.ctx.fillStyle = '#ff6600';
            this.ctx.shadowColor = '#ff4500';
            this.ctx.shadowBlur = 20;
            this.ctx.fillRect(385, 105, 30, 10);
            this.ctx.shadowBlur = 0;
        }

        drawBuildings() {
            const buildings = [
                {x: 50, y: 400, w: 80, h: 200},
                {x: 150, y: 350, w: 100, h: 250},
                {x: 270, y: 380, w: 90, h: 220},
                {x: 380, y: 320, w: 110, h: 280},
                {x: 510, y: 360, w: 85, h: 240},
                {x: 620, y: 340, w: 95, h: 260}
            ];

            buildings.forEach(building => {
                // Building body - INVISIBLE (transparent)
                this.ctx.fillStyle = 'rgba(0,0,0,0)'; // Completely transparent
                this.ctx.fillRect(building.x, building.y, building.w, building.h);

                // Windows - INVISIBLE (transparent)
                this.ctx.fillStyle = 'rgba(0,0,0,0)'; // Completely transparent
                for (let row = 0; row < Math.floor(building.h / 40); row++) {
                    for (let col = 0; col < Math.floor(building.w / 25); col++) {
                        if (Math.random() > 0.3) {
                            this.ctx.fillRect(
                                building.x + 5 + col * 25,
                                building.y + 10 + row * 40,
                                15, 20
                            );
                        }
                    }
                }
            });
        }

        drawCityBackground() {
            // City skyline with gradient sky
            const gradient = this.ctx.createLinearGradient(0, 0, 0, this.canvas.height);
            gradient.addColorStop(0, '#87CEEB');
            gradient.addColorStop(1, '#4682B4');
            this.ctx.fillStyle = gradient;
            this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

            // Distant buildings silhouette
            this.ctx.fillStyle = '#2F4F4F';
            for (let i = 0; i < 15; i++) {
                const x = (i * this.canvas.width / 15);
                const height = Math.random() * 200 + 100;
                this.ctx.fillRect(x, this.canvas.height - height, this.canvas.width / 15, height);
            }
        }

        drawForestBackground() {
            // Forest with gradient sky
            const gradient = this.ctx.createLinearGradient(0, 0, 0, this.canvas.height);
            gradient.addColorStop(0, '#98FB98');
            gradient.addColorStop(1, '#228B22');
            this.ctx.fillStyle = gradient;
            this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

            // Distant tree silhouettes
            this.ctx.fillStyle = '#006400';
            for (let i = 0; i < 20; i++) {
                const x = Math.random() * this.canvas.width;
                const y = this.canvas.height - Math.random() * 150 - 50;
                this.ctx.beginPath();
                this.ctx.arc(x, y, Math.random() * 30 + 20, 0, Math.PI * 2);
                this.ctx.fill();
            }
        }

        drawSpaceBackground() {
            // Space with stars and nebula
            const gradient = this.ctx.createRadialGradient(
                this.canvas.width/2, this.canvas.height/2, 0,
                this.canvas.width/2, this.canvas.height/2, this.canvas.width
            );
            gradient.addColorStop(0, '#191970');
            gradient.addColorStop(1, '#000000');
            this.ctx.fillStyle = gradient;
            this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

            // Stars
            this.ctx.fillStyle = '#ffffff';
            for (let i = 0; i < 200; i++) {
                const x = (i * 73) % this.canvas.width;
                const y = (i * 59) % this.canvas.height;
                const size = Math.random() * 3 + 1;
                this.ctx.fillRect(x, y, size, size);
            }
        }

        drawCastleBackground() {
            // Medieval castle with stone texture
            const gradient = this.ctx.createLinearGradient(0, 0, 0, this.canvas.height);
            gradient.addColorStop(0, '#D2B48C');
            gradient.addColorStop(1, '#8B7355');
            this.ctx.fillStyle = gradient;
            this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

            // Castle wall texture
            this.ctx.fillStyle = '#696969';
            for (let i = 0; i < 50; i++) {
                const x = Math.random() * this.canvas.width;
                const y = Math.random() * this.canvas.height;
                this.ctx.fillRect(x, y, Math.random() * 20 + 5, Math.random() * 20 + 5);
            }
        }

        drawVolcanoBackground() {
            // Volcanic with lava glow
            const gradient = this.ctx.createLinearGradient(0, 0, 0, this.canvas.height);
            gradient.addColorStop(0, '#FF4500');
            gradient.addColorStop(0.5, '#8B0000');
            gradient.addColorStop(1, '#2F1B14');
            this.ctx.fillStyle = gradient;
            this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

            // Lava particles
            this.ctx.fillStyle = '#FF6347';
            for (let i = 0; i < 30; i++) {
                const x = Math.random() * this.canvas.width;
                const y = Math.random() * this.canvas.height;
                this.ctx.beginPath();
                this.ctx.arc(x, y, Math.random() * 5 + 2, 0, Math.PI * 2);
                this.ctx.fill();
            }
        }

        drawUnderwaterBackground() {
            // Underwater with bubbles
            const gradient = this.ctx.createLinearGradient(0, 0, 0, this.canvas.height);
            gradient.addColorStop(0, '#00CED1');
            gradient.addColorStop(1, '#008B8B');
            this.ctx.fillStyle = gradient;
            this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

            // Bubbles
            this.ctx.fillStyle = 'rgba(255,255,255,0.3)';
            for (let i = 0; i < 40; i++) {
                const x = Math.random() * this.canvas.width;
                const y = Math.random() * this.canvas.height;
                this.ctx.beginPath();
                this.ctx.arc(x, y, Math.random() * 10 + 3, 0, Math.PI * 2);
                this.ctx.fill();
            }
        }

        drawIceBackground() {
            // Icy with snowflakes
            const gradient = this.ctx.createLinearGradient(0, 0, 0, this.canvas.height);
            gradient.addColorStop(0, '#E0FFFF');
            gradient.addColorStop(1, '#B0E0E6');
            this.ctx.fillStyle = gradient;
            this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

            // Snowflakes
            this.ctx.fillStyle = '#FFFFFF';
            for (let i = 0; i < 60; i++) {
                const x = Math.random() * this.canvas.width;
                const y = Math.random() * this.canvas.height;
                this.ctx.fillRect(x, y, 3, 3);
            }
        }

        drawDesertBackground() {
            // Desert with sand dunes
            const gradient = this.ctx.createLinearGradient(0, 0, 0, this.canvas.height);
            gradient.addColorStop(0, '#FFE4B5');
            gradient.addColorStop(1, '#DEB887');
            this.ctx.fillStyle = gradient;
            this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

            // Sand dunes
            this.ctx.fillStyle = '#F4A460';
            for (let i = 0; i < 8; i++) {
                const x = i * this.canvas.width / 8;
                const height = Math.random() * 100 + 50;
                this.ctx.beginPath();
                this.ctx.ellipse(x, this.canvas.height - height/2, this.canvas.width/8, height/2, 0, 0, Math.PI * 2);
                this.ctx.fill();
            }
        }

        drawGradientBackground() {
            // Generic gradient background
            const gradient = this.ctx.createLinearGradient(0, 0, 0, this.canvas.height);
            gradient.addColorStop(0, '#87CEEB');
            gradient.addColorStop(1, '#4682B4');
            this.ctx.fillStyle = gradient;
            this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        }

        drawMapEffects() {
            this.mapEffects.forEach(effect => {
                switch(effect.type) {
                    case 'lava_geyser':
                        // Draw lava geyser
                        this.ctx.fillStyle = '#ff4500';
                        this.ctx.fillRect(effect.x - 10, effect.y - effect.height, 20, effect.height);
                        
                        // Glow effect
                        this.ctx.shadowColor = '#ff4500';
                        this.ctx.shadowBlur = 15;
                        this.ctx.fillRect(effect.x - 5, effect.y - effect.height, 10, effect.height);
                        this.ctx.shadowBlur = 0;
                        break;
                        
                    case 'lava_bubble':
                        this.ctx.fillStyle = `rgba(255, 69, 0, ${effect.life / 60})`;
                        this.ctx.beginPath();
                        this.ctx.arc(effect.x, effect.y, effect.size, 0, Math.PI * 2);
                        this.ctx.fill();
                        break;
                        
                    case 'snowflake':
                        this.ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
                        this.ctx.font = '12px Arial';
                        this.ctx.fillText('❄', effect.x, effect.y);
                        break;
                        
                    case 'bubble':
                        this.ctx.strokeStyle = `rgba(173, 216, 230, ${effect.life / 100})`;
                        this.ctx.lineWidth = 2;
                        this.ctx.beginPath();
                        this.ctx.arc(effect.x, effect.y, effect.size, 0, Math.PI * 2);
                        this.ctx.stroke();
                        break;
                        
                    case 'star':
                        const alpha = 0.5 + Math.sin(effect.twinkle * 0.1) * 0.5;
                        this.ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
                        this.ctx.fillRect(effect.x, effect.y, 3, 3);
                        break;
                        
                    case 'code_rain':
                        this.ctx.fillStyle = `rgba(0, 255, 0, ${effect.life / 150})`;
                        this.ctx.font = '12px monospace';
                        this.ctx.fillText(effect.char, effect.x, effect.y);
                        break;
                }
            });
        }

        drawDropItems() {
            // Draw all special drop items with enhanced visual effects!
            this.dropItems.forEach(item => {
                const ctx = this.ctx;
                
                // Calculate item position with bobbing animation when on ground
                let renderY = item.y;
                if (item.onGround && item.bobOffset !== undefined) {
                    renderY += item.bobOffset;
                }
                
                // ENHANCED GLOW EFFECT based on item type!
                let glowColor = '#FFD700'; // Default gold glow
                let glowIntensity = item.glowPulse || 1;
                
                // Determine glow color by item type
                switch(item.data.type) {
                    case 'weapon':
                    case 'ranged':
                    case 'legendary':
                        glowColor = '#FF4444'; // Red for weapons
                        break;
                    case 'explosive':
                    case 'ultimate':
                    case 'cosmic':
                        glowColor = '#FF6600'; // Orange for explosives
                        break;
                    case 'defense':
                        glowColor = '#4444FF'; // Blue for defense
                        break;
                    case 'consumable':
                    case 'buff':
                        glowColor = '#44FF44'; // Green for health/buffs
                        break;
                    case 'magic':
                    case 'celestial':
                        glowColor = '#AA44FF'; // Purple for magic
                        break;
                    case 'debuff':
                        glowColor = '#FF44AA'; // Pink for debuffs
                        break;
                    default:
                        glowColor = '#FFD700'; // Gold for everything else
                }
                
                // ROTATION EFFECT while falling
                if (!item.onGround && item.rotation !== undefined) {
                    ctx.save();
                    ctx.translate(item.x + item.width/2, renderY + item.height/2);
                    ctx.rotate(item.rotation);
                    
                    // Draw rotating glow with scaled font
                    const screenScale = Math.min(this.canvas.width / 800, this.canvas.height / 600);
                    const itemFontSize = Math.floor(24 * screenScale * 1.8); // 1.8x bigger
                    const minItemFontSize = 35; // Minimum font size for visibility
                    const finalItemFontSize = Math.max(minItemFontSize, itemFontSize);

                    ctx.shadowColor = glowColor;
                    ctx.shadowBlur = 15 * glowIntensity;
                    ctx.font = `bold ${finalItemFontSize}px Arial`;
                    ctx.textAlign = 'center';
                    ctx.textBaseline = 'middle';
                    ctx.fillStyle = '#FFFFFF';
                    ctx.fillText(item.emoji, 0, 0);
                    
                    ctx.restore();
                } else {
                    // Draw stationary item with pulsing glow and scaled font
                    const screenScale = Math.min(this.canvas.width / 800, this.canvas.height / 600);
                    const itemFontSize = Math.floor(24 * screenScale * 1.8); // 1.8x bigger
                    const minItemFontSize = 35; // Minimum font size for visibility
                    const finalItemFontSize = Math.max(minItemFontSize, itemFontSize);

                    ctx.shadowColor = glowColor;
                    ctx.shadowBlur = 20 * glowIntensity;
                    ctx.font = `bold ${finalItemFontSize}px Arial`;
                    ctx.textAlign = 'center';
                    ctx.textBaseline = 'middle';
                    ctx.fillStyle = '#FFFFFF';
                    ctx.fillText(item.emoji, item.x + item.width/2, renderY + item.height/2);
                }
                
                // Clear shadow for next draw
                ctx.shadowBlur = 0;
                
                // ENHANCED ITEM INFO DISPLAY when landed
                if (item.onGround) {
                    // Draw item name above the item
                    ctx.fillStyle = '#FFFFFF';
                    ctx.strokeStyle = '#000000';
                    ctx.lineWidth = 2;
                    ctx.font = 'bold 12px Arial';
                    ctx.textAlign = 'center';
                    
                    const textX = item.x + item.width/2;
                    const textY = renderY - 10;
                    
                    // Item name with outline
                    ctx.strokeText(item.name, textX, textY);
                    ctx.fillText(item.name, textX, textY);
                    
                    // DAMAGE/EFFECT INDICATOR
                    if (item.data.damage) {
                        ctx.fillStyle = '#FF4444';
                        ctx.strokeText(`💥${item.data.damage}`, textX, textY - 15);
                        ctx.fillText(`💥${item.data.damage}`, textX, textY - 15);
                    } else if (item.data.heal) {
                        ctx.fillStyle = '#44FF44';
                        ctx.strokeText(`💚+${item.data.heal}`, textX, textY - 15);
                        ctx.fillText(`💚+${item.data.heal}`, textX, textY - 15);
                    } else if (item.data.defense) {
                        ctx.fillStyle = '#4444FF';
                        ctx.strokeText(`🛡️+${item.data.defense}`, textX, textY - 15);
                        ctx.fillText(`🛡️+${item.data.defense}`, textX, textY - 15);
                    }
                    
                    // PICKUP INSTRUCTION
                    ctx.fillStyle = '#FFD700';
                    ctx.font = 'bold 10px Arial';
                    ctx.strokeText('Walk over to pick up!', textX, renderY + item.height + 15);
                    ctx.fillText('Walk over to pick up!', textX, renderY + item.height + 15);
                }
                
                // SPECIAL EFFECTS for premium items
                if (['ultimate', 'cosmic', 'legendary', 'celestial'].includes(item.data.type)) {
                    // Draw sparkle particles around legendary items
                    for (let i = 0; i < 3; i++) {
                        const sparkleX = item.x + Math.random() * item.width;
                        const sparkleY = renderY + Math.random() * item.height;
                        ctx.fillStyle = `rgba(255, 255, 255, ${Math.random()})`;
                        ctx.fillRect(sparkleX, sparkleY, 2, 2);
                    }
                }
                
                // Reset text alignment for other drawing operations
                ctx.textAlign = 'left';
                ctx.textBaseline = 'alphabetic';

                // Draw hitbox for drop items (debug mode)
                if (this.showHitboxes) {
                    this.drawHitbox(item, 'rgba(0, 255, 255, 0.3)'); // Cyan for drop items
                }
            });
        }

        updateSpecialDrops() {
            // Increment drop timer
            this.dropTimer++;
            
            // Check if it's time to drop an item
            if (this.dropTimer >= this.dropInterval) {
                this.spawnDropItem();
                this.dropTimer = 0; // Reset timer
            }
            
            // Update existing drop items
            this.dropItems.forEach((item, index) => {
                // ENHANCED FALLING ANIMATION with rotation and bounce!
                if (!item.onGround) {
                    item.velocityY += 0.8; // Stronger gravity for more realistic fall
                    item.y += item.velocityY;
                    item.rotation += 0.2; // Spinning while falling!
                    
                    // Add some horizontal drift for more realistic physics
                    if (!item.initialDrift) {
                        item.drift = (Math.random() - 0.5) * 2; // Random left/right drift
                        item.initialDrift = true;
                    }
                    item.x += item.drift;
                    
                    // Check ground collision with BOUNCE!
                    const groundLevel = this.canvas.height - 120;
                    if (item.y + item.height >= groundLevel) {
                        item.y = groundLevel - item.height;
                        if (item.velocityY > 5) {
                            item.velocityY = -item.velocityY * 0.4; // Bounce with dampening
                            item.bounces = (item.bounces || 0) + 1;
                        } else {
                            item.velocityY = 0;
                            item.onGround = true;
                            item.landTime = Date.now(); // Track when it landed
                        }
                    }
                    
                    // Check platform collision with BOUNCE!
                    if (this.mapData && this.mapData.platforms) {
                        this.mapData.platforms.forEach(platform => {
                            if (item.x < platform.x + platform.width &&
                                item.x + item.width > platform.x &&
                                item.y + item.height >= platform.y &&
                                item.y + item.height <= platform.y + 20 && // Tolerance for landing
                                item.velocityY > 0) { // Must be falling down

                                item.y = platform.y - item.height;
                                if (item.velocityY > 5) {
                                    item.velocityY = -item.velocityY * 0.4; // Bounce
                                    item.bounces = (item.bounces || 0) + 1;
                                } else {
                                    item.velocityY = 0;
                                    item.onGround = true;
                                    item.landTime = Date.now();
                                }
                            }
                        });
                    }

                    // Check obstacle collision with BOUNCE!
                    if (this.mapData && this.mapData.obstacles) {
                        this.mapData.obstacles.forEach(obstacle => {
                            if (item.x < obstacle.x + obstacle.width &&
                                item.x + item.width > obstacle.x &&
                                item.y + item.height >= obstacle.y &&
                                item.y + item.height <= obstacle.y + 20 && // Tolerance for landing
                                item.velocityY > 0) { // Must be falling down

                                item.y = obstacle.y - item.height;
                                if (item.velocityY > 5) {
                                    item.velocityY = -item.velocityY * 0.4; // Bounce
                                    item.bounces = (item.bounces || 0) + 1;
                                } else {
                                    item.velocityY = 0;
                                    item.onGround = true;
                                    item.landTime = Date.now();
                                }
                            }
                        });
                    }
                } else {
                    // LANDED ANIMATION - Gentle bobbing and glowing
                    const timeSinceLand = Date.now() - (item.landTime || 0);
                    item.bobOffset = Math.sin(timeSinceLand * 0.005) * 3; // Gentle up/down movement
                    item.glowPulse = Math.sin(timeSinceLand * 0.008) * 0.3 + 0.7; // Glow pulse
                }
                
                // Check pickup collision with players
                if (this.checkCollision(item, this.player1)) {
                    this.player1.pickupItem(item);
                    this.dropItems.splice(index, 1);
                    return;
                }
                if (this.checkCollision(item, this.player2)) {
                    this.player2.pickupItem(item);
                    this.dropItems.splice(index, 1);
                    return;
                }
                
                // Remove items after 30 seconds
                item.lifetime--;
                if (item.lifetime <= 0) {
                    this.dropItems.splice(index, 1);
                }
            });
        }
        
        spawnDropItem() {
            // Pick random item from special drop items
            const itemKeys = Object.keys(specialDropItems);
            const randomItem = itemKeys[Math.floor(Math.random() * itemKeys.length)];
            const itemData = specialDropItems[randomItem];
            
            // Create drop item with scaled size
            const screenScale = Math.min(this.canvas.width / 800, this.canvas.height / 600);
            const itemSize = Math.floor(30 * screenScale * 1.8); // 1.8x bigger than before
            const minSize = 40; // Minimum size for visibility
            const finalSize = Math.max(minSize, itemSize);

            const dropItem = {
                type: randomItem,
                name: itemData.name,
                emoji: itemData.emoji,
                x: Math.random() * (this.canvas.width - finalSize * 2) + finalSize, // Random X position with padding
                y: -finalSize, // Start above screen
                width: finalSize,
                height: finalSize,
                velocityY: 0,
                onGround: false,
                lifetime: 1800, // 30 seconds at 60fps
                data: itemData
            };
            
            this.dropItems.push(dropItem);
            console.log(`Item dropped: ${itemData.name} ${itemData.emoji}`);
        }
        
        applyItemEffect(item, player) {
            const itemData = item.data;
            console.log(`${player.char.name} picked up ${itemData.name}!`);
            
            // Apply item effects based on type
            switch(itemData.type) {
                case 'weapon':
                case 'explosive':
                case 'ranged':
                case 'magic':
                case 'projectile':
                case 'heavy':
                case 'legendary':
                case 'celestial':
                case 'cosmic':
                case 'ultimate':
                case 'alpha':
                case 'beta':
                case 'radiation':
                case 'military':
                case 'omega':
                    // Temporary damage boost
                    if (!player.itemEffects) player.itemEffects = {};
                    player.itemEffects.damageBoost = {
                        amount: itemData.damage || 50,
                        duration: itemData.duration
                    };
                    break;
                    
                case 'defense':
                    // Temporary defense boost
                    if (!player.itemEffects) player.itemEffects = {};
                    player.itemEffects.defenseBoost = {
                        amount: itemData.defense || 20,
                        duration: itemData.duration
                    };
                    break;
                    
                case 'consumable':
                    // Instant heal
                    if (itemData.heal) {
                        player.health = Math.min(player.maxHealth, player.health + itemData.heal);
                        console.log(`${player.char.name} healed for ${itemData.heal} HP!`);
                    }
                    break;
                    
                case 'buff':
                    // Speed boost
                    if (itemData.speedMultiplier) {
                        if (!player.itemEffects) player.itemEffects = {};
                        player.itemEffects.speedBoost = {
                            multiplier: itemData.speedMultiplier,
                            duration: itemData.duration
                        };
                    }
                    // Power boost
                    if (itemData.powerBoost) {
                        if (!player.itemEffects) player.itemEffects = {};
                        player.itemEffects.powerBoost = {
                            multiplier: itemData.powerBoost,
                            duration: itemData.duration
                        };
                    }
                    break;
                    
                case 'instant':
                    // Instant damage to enemy
                    const enemy = player === this.player1 ? this.player2 : this.player1;
                    enemy.takeDamage(itemData.damage || 80);
                    console.log(`Lightning strikes ${enemy.char.name} for ${itemData.damage} damage!`);
                    break;
                    
                // Removed old debuff and time implementations - now handled in Fighter.applyItemEffect()
                    
                case 'chaos':
                    // Random effect
                    if (itemData.randomEffect) {
                        const effects = ['heal', 'damage', 'speed', 'freeze'];
                        const randomEffect = effects[Math.floor(Math.random() * effects.length)];
                        console.log(`Chaos effect: ${randomEffect}!`);
                        // Apply random effect
                    }
                    break;
            }
            
            // Show pickup notification
            showNotification(`${player.char.name} picked up:\n${itemData.emoji} ${itemData.name}!`);
        }

        // FLAG CAPTURE MODE METHODS
        initializeFlagCapture() {
            gameState.flagCapture.flag = null;
            gameState.flagCapture.flagHolder = null;
            gameState.flagCapture.holdStartTime = 0;
            gameState.flagCapture.flagDropped = false;
            gameState.flagCapture.nextFlagDropTime = Date.now() + 1000; // Spawn flag after 1 second

            // Reset stun states
            gameState.flagCapture.stunned.player1 = false;
            gameState.flagCapture.stunned.player2 = false;
            gameState.flagCapture.stunned.player1StunTime = 0;
            gameState.flagCapture.stunned.player2StunTime = 0;

            console.log('🏁 Flag Capture Mode initialized!');
        }

        updateFlagCapture() {
            try {
                const currentTime = Date.now();

                // Update stun states
                if (gameState.flagCapture.stunned.player1 && currentTime > gameState.flagCapture.stunned.player1StunTime) {
                    gameState.flagCapture.stunned.player1 = false;
                    console.log('Player 1 stun ended');
                }
                if (gameState.flagCapture.stunned.player2 && currentTime > gameState.flagCapture.stunned.player2StunTime) {
                    gameState.flagCapture.stunned.player2 = false;
                    console.log('Player 2 stun ended');
                }

                // Spawn flag ONLY if none exists and no one is holding it
                if (!gameState.flagCapture.flag && !gameState.flagCapture.flagHolder && currentTime >= gameState.flagCapture.nextFlagDropTime) {
                    this.spawnFlag();
                }

                // Update flag physics
                if (gameState.flagCapture.flag && !gameState.flagCapture.flagHolder) {
                    gameState.flagCapture.flag.update();

                    // Check flag pickup
                    if (gameState.flagCapture.flag.checkCollision(this.player1) && !gameState.flagCapture.stunned.player1) {
                        this.pickupFlag('player1');
                    } else if (gameState.flagCapture.flag.checkCollision(this.player2) && !gameState.flagCapture.stunned.player2) {
                        this.pickupFlag('player2');
                    }
                }

                // Check flag hold duration
                if (gameState.flagCapture.flagHolder) {
                    const holdTime = currentTime - gameState.flagCapture.holdStartTime;
                    if (holdTime >= gameState.flagCapture.holdDuration) {
                        // Flag holder wins!
                        this.endFlagCaptureGame(gameState.flagCapture.flagHolder);
                    }
                }
            } catch (error) {
                console.error('🏁 Error in updateFlagCapture:', error);
                // Reset flag capture state if there's an error
                gameState.flagCapture.flag = null;
                gameState.flagCapture.flagHolder = null;
            }
        }

        spawnFlag() {
            const x = Math.random() * (this.canvas.width - 100) + 50;
            const y = 50; // Drop from top

            gameState.flagCapture.flag = new Flag(x, y);
            gameState.flagCapture.flagDropped = true;

            console.log('🏁 Flag dropped at', x, y);
            showNotification('🏁 FLAG DROPPED!\nFirst to hold for 15 seconds wins!');
        }

        pickupFlag(player) {
            gameState.flagCapture.flagHolder = player;
            gameState.flagCapture.holdStartTime = Date.now();
            gameState.flagCapture.flag = null; // Remove flag from world

            // Initialize AI flag running state when AI picks up flag
            if (player === 'player2') {
                this.aiFlagRunning = null; // Will be initialized in updateAI
            }

            const playerName = player === 'player1' ? 'Player 1' : 'Player 2';
            console.log(`${playerName} picked up the flag!`);
            showNotification(`🏁 ${playerName} has the FLAG!\nHold for 15 seconds to win!`);
        }

        stealFlag(fromPlayer, toPlayer) {
            // Transfer flag from one player to another
            gameState.flagCapture.flagHolder = toPlayer;
            gameState.flagCapture.holdStartTime = Date.now(); // Reset timer for new holder

            // Reset AI flag running state when flag changes hands
            if (fromPlayer === 'player2') {
                this.aiFlagRunning = null;
            }
            if (toPlayer === 'player2') {
                this.aiFlagRunning = null; // Will be reinitialized in updateAI
            }

            const fromPlayerName = fromPlayer === 'player1' ? 'Player 1' : 'Player 2';
            const toPlayerName = toPlayer === 'player1' ? 'Player 1' : 'Player 2';
            console.log(`${toPlayerName} stole the flag from ${fromPlayerName}!`);
            showNotification(`🏁 ${toPlayerName} STOLE the FLAG!\nHold for 15 seconds to win!`);
        }

        dropFlag(fromPlayer) {
            if (!gameState.flagCapture.flagHolder) return;

            const player = fromPlayer === 'player1' ? this.player1 : this.player2;

            // Drop flag at player's position
            gameState.flagCapture.flag = new Flag(player.x, player.y - 20);
            gameState.flagCapture.flagHolder = null;
            gameState.flagCapture.holdStartTime = 0;

            // Reset AI flag running state when flag is dropped
            if (fromPlayer === 'player2') {
                this.aiFlagRunning = null;
            }

            const playerName = fromPlayer === 'player1' ? 'Player 1' : 'Player 2';
            console.log(`${playerName} dropped the flag!`);
            showNotification(`🏁 ${playerName} dropped the FLAG!`);
        }

        stunPlayer(player) {
            const currentTime = Date.now();
            if (player === 'player1') {
                gameState.flagCapture.stunned.player1 = true;
                gameState.flagCapture.stunned.player1StunTime = currentTime + gameState.flagCapture.stunned.stunDuration;
            } else {
                gameState.flagCapture.stunned.player2 = true;
                gameState.flagCapture.stunned.player2StunTime = currentTime + gameState.flagCapture.stunned.stunDuration;
            }

            // Drop flag if stunned player was holding it
            if (gameState.flagCapture.flagHolder === player) {
                this.dropFlag(player);
            }

            const playerName = player === 'player1' ? 'Player 1' : 'Player 2';
            console.log(`${playerName} is stunned!`);
            showNotification(`💫 ${playerName} is STUNNED!`);
        }

        endFlagCaptureGame(winner) {
            this.gameRunning = false;
            const winnerName = winner === 'player1' ? 'Player 1' : 'Player 2';

            // Award coins and trophies based on flag capture victory
            const timeRemainingSeconds = Math.ceil(this.timeLeft / 1000);
            let player1Coins = 0, player2Coins = 0;
            let player1Trophies = 0, player2Trophies = 0;

            if (winner === 'player1') {
                player1Coins = 50; // 50 coins for flag capture victory
                player1Trophies = timeRemainingSeconds; // Trophies = time remaining in seconds
            } else {
                player2Coins = 50; // 50 coins for flag capture victory
                player2Trophies = timeRemainingSeconds; // Trophies = time remaining in seconds
            }

            this.handleGameEnd(`🏁 ${winnerName} Wins!\nFlag Capture Victory!\n⏰ Time remaining: ${timeRemainingSeconds}s`, player1Coins, player2Coins, player1Trophies, player2Trophies);
        }

        updateUI() {
            const p1HealthPercent = (this.player1.health / this.player1.maxHealth) * 100;
            const p2HealthPercent = (this.player2.health / this.player2.maxHealth) * 100;

            document.getElementById('player1Health').style.width = `${Math.max(0, p1HealthPercent)}%`;
            document.getElementById('player2Health').style.width = `${Math.max(0, p2HealthPercent)}%`;

            // Update flag capture status
            if (this.isFlagCaptureMode) {
                let statusText = '';
                if (gameState.flagCapture.flagHolder) {
                    const holderName = gameState.flagCapture.flagHolder === 'player1' ? 'Player 1' : 'Player 2';
                    const currentTime = Date.now();
                    const holdTime = currentTime - gameState.flagCapture.holdStartTime;
                    const remainingTime = Math.max(0, gameState.flagCapture.holdDuration - holdTime);
                    const seconds = Math.ceil(remainingTime / 1000);
                    statusText = `🏁 ${holderName} has the flag! ${seconds}s to win!`;
                } else if (gameState.flagCapture.flag) {
                    statusText = '🏁 Flag is available! First to hold for 15s wins!';
                } else {
                    statusText = '🏁 Flag will drop soon...';
                }

                // Update or create flag status element
                let flagStatus = document.getElementById('flagStatus');
                if (!flagStatus) {
                    flagStatus = document.createElement('div');
                    flagStatus.id = 'flagStatus';
                    flagStatus.style.cssText = `
                        position: fixed;
                        top: 10px;
                        left: 50%;
                        transform: translateX(-50%);
                        background: rgba(0, 0, 0, 0.8);
                        color: white;
                        padding: 10px 20px;
                        border-radius: 10px;
                        font-size: 16px;
                        font-weight: bold;
                        z-index: 1000;
                        text-align: center;
                    `;
                    document.body.appendChild(flagStatus);
                }
                flagStatus.textContent = statusText;
            } else {
                // Remove flag status if not in flag capture mode
                const flagStatus = document.getElementById('flagStatus');
                if (flagStatus) {
                    flagStatus.remove();
                }
            }
        }

        endBossBattle(playersWin) {
            this.gameRunning = false;

            if (playersWin) {
                // Players defeated the boss!
                console.log('🎉 Players defeated the boss!');
                showNotification('🎉 BOSS DEFEATED! VICTORY!');

                // Reward both players
                const baseReward = 200; // Large coin reward for defeating boss
                const bossPhaseBonus = (this.boss ? this.boss.phase : 1) * 50; // Bonus based on how far boss got
                const timeBonus = Math.max(0, Math.ceil(this.timeLeft / 1000)); // Coins = seconds remaining
                const totalReward = baseReward + bossPhaseBonus + timeBonus;

                // Award coins to both players
                if (gameState.gameMode === 'multiplayer') {
                    gameState.player1Coins = safeCoins(gameState.player1Coins + totalReward);
                    gameState.player2Coins = safeCoins(gameState.player2Coins + totalReward);
                    console.log(`💰 Both players earn ${totalReward} coins!`);
                } else {
                    gameState.coins = safeCoins(gameState.coins + totalReward);
                    console.log(`💰 Player earns ${totalReward} coins!`);
                }

                // Award trophies based on remaining HP
                const player1HP = Math.max(0, Math.floor(this.player1.health));
                const player2HP = Math.max(0, Math.floor(this.player2.health));
                const totalHP = player1HP + player2HP;
                const trophyReward = Math.floor(totalHP / 10); // 1 trophy per 10 HP remaining

                if (gameState.gameMode === 'multiplayer') {
                    gameState.player1Trophies += trophyReward;
                    gameState.player2Trophies += trophyReward;
                } else {
                    gameState.trophies += trophyReward;
                }

                // Show victory screen
                setTimeout(() => {
                    alert(`🎉 BOSS DEFEATED!\n\n💰 Base Reward: ${baseReward}\n🎯 Phase Bonus: ${bossPhaseBonus}\n⏰ Time Bonus: ${timeBonus}\n💰 Total Coins: ${totalReward}\n🏆 Trophies Earned: ${trophyReward}\n\nCongratulations on your teamwork!`);
                    endBattle();
                }, 2000);

            } else {
                // Boss defeated the players
                console.log('💀 Boss defeated the players!');
                showNotification('💀 BOSS VICTORY! DEFEAT!');

                // Small penalty for losing
                const penalty = 25;
                if (gameState.gameMode === 'multiplayer') {
                    gameState.player1Coins = safeCoins(gameState.player1Coins - penalty);
                    gameState.player2Coins = safeCoins(gameState.player2Coins - penalty);
                } else {
                    gameState.coins = safeCoins(gameState.coins - penalty);
                }

                setTimeout(() => {
                    alert(`💀 BOSS VICTORY!\n\n💸 Coins Lost: ${penalty}\n\nBetter luck next time!`);
                    endBattle();
                }, 2000);
            }
        }

        endGame() {
            // BOSS BATTLE MODE - Special handling for player deaths
            if (this.isBossBattleMode) {
                const player1Dead = this.player1.health <= 0;
                const player2Dead = this.player2.health <= 0;

                if (player1Dead && player2Dead) {
                    // Both players died - boss wins
                    this.gameRunning = false;
                    this.endBossBattle(false);
                    return;
                } else if (player1Dead || player2Dead) {
                    // One player died - continue with remaining player
                    console.log('One player down, but the fight continues!');
                    showNotification('💀 TEAMMATE DOWN! FIGHT ON!');
                    return; // Don't end the game yet - keep running!
                }
                // If we reach here, time ran out but players are alive - boss wins by timeout
                this.gameRunning = false;
                this.endBossBattle(false);
                return;
            }

            // Normal game modes - stop the game
            this.gameRunning = false;

            let winner;
            let player1HP = Math.max(0, Math.floor(this.player1.health));
            let player2HP = Math.max(0, Math.floor(this.player2.health));

            // FLAG CAPTURE MODE - Special death penalty handling
            if (this.isFlagCaptureMode) {
                let player1Coins = 0, player2Coins = 0;
                let player1Trophies = 0, player2Trophies = 0;

                if (this.player1.health <= 0) {
                    // Player 1 died - loses 25 coins
                    player1Coins = -25;
                    winner = 'Player 2 Wins!\nPlayer 1 died in flag capture!';
                    player2Trophies = Math.ceil(this.timeLeft / 1000); // Winner gets time remaining as trophies
                } else if (this.player2.health <= 0) {
                    // Player 2 died - loses 25 coins (in single player, this affects AI but we track it)
                    player2Coins = -25;
                    winner = 'Player 1 Wins!\nPlayer 2 died in flag capture!';
                    player1Trophies = Math.ceil(this.timeLeft / 1000); // Winner gets time remaining as trophies
                } else if (this.timeLeft <= 0) {
                    // Time up in flag capture mode
                    if (this.player1.health > this.player2.health) {
                        winner = 'Time Up - Player 1 Wins!';
                        player1Trophies = 1;
                    } else if (this.player2.health > this.player1.health) {
                        winner = 'Time Up - Player 2 Wins!';
                        player2Trophies = 1;
                    } else {
                        winner = 'Time Up - Draw!';
                    }
                }

                this.handleGameEnd(winner, player1Coins, player2Coins, player1Trophies, player2Trophies);
                return;
            }

            // NORMAL MODE - Calculate coins as 50% of remaining health (rounded down)
            let player1Coins = Math.floor(player1HP * 0.5);
            let player2Coins = Math.floor(player2HP * 0.5);

            // TROPHY SYSTEM - Calculate trophies based on time remaining!
            const timeRemainingSeconds = Math.ceil(this.timeLeft / 1000);
            let player1Trophies = 0;
            let player2Trophies = 0;

            if (this.timeLeft <= 0) {
                if (this.player1.health > this.player2.health) {
                    winner = 'Time Up - Player 1 Wins!';
                    player1Trophies = 1; // Minimal trophies for time-up wins
                } else if (this.player2.health > this.player1.health) {
                    winner = 'Time Up - Player 2 Wins!';
                    player2Trophies = 1;
                } else {
                    winner = 'Time Up - Draw!';
                    player1Coins = 0; // No coins for draws
                    player2Coins = 0;
                    // No trophies for draws
                }
            } else {
                if (this.player1.health > 0) {
                    winner = 'Player 1 Wins!';
                    player1Trophies = timeRemainingSeconds; // Win by time = trophies gained
                } else {
                    winner = 'Player 2 Wins!';
                    player2Trophies = timeRemainingSeconds;
                    player1Coins = 0; // No coins if you lose
                }
                if (this.player2.health > 0) {
                    winner = 'Player 2 Wins!';
                    player2Trophies = timeRemainingSeconds;
                } else {
                    player2Coins = 0; // No coins if you lose
                }
            }

            // Use handleGameEnd for all modes to ensure stats tracking
            this.handleGameEnd(winner, player1Coins, player2Coins, player1Trophies, player2Trophies);
        }

        handleGameEnd(winner, player1Coins, player2Coins, player1Trophies, player2Trophies) {
            this.gameRunning = false;

            // Track character-specific stats
            const charKey = gameState.selectedCharacter;
            console.log('🔍 Tracking stats for character:', charKey);
            console.log('🔍 Winner:', winner);
            console.log('🔍 Current characterStats object:', gameState.characterStats);

            if (charKey) {
                if (!gameState.characterStats) {
                    console.log('⚠️ characterStats object does not exist! Creating it...');
                    gameState.characterStats = {};
                }

                if (!gameState.characterStats[charKey]) {
                    console.log('⚠️ Stats for', charKey, 'do not exist! Creating them...');
                    gameState.characterStats[charKey] = {
                        wins: 0,
                        losses: 0,
                        totalDamageDealt: 0,
                        totalDamageTaken: 0,
                        fastestWin: null,
                        specialsUsed: 0,
                        perfectWins: 0,
                        comebackWins: 0
                    };
                }

                const stats = gameState.characterStats[charKey];
                const damageTaken = this.player1.maxHealth - this.player1.health;
                const timeElapsed = (90000 - this.timeLeft) / 1000; // Battle time in seconds

                console.log('📊 Before update - Stats:', JSON.stringify(stats));
                console.log('📊 Damage taken:', damageTaken);
                console.log('📊 Time elapsed:', timeElapsed);

                // Track damage
                stats.totalDamageTaken += damageTaken;

                if (winner.includes('Player 1')) {
                    // Win tracking
                    stats.wins++;
                    console.log('✅ Player 1 won! Incrementing wins to:', stats.wins);

                    // Fastest win
                    if (!stats.fastestWin || timeElapsed < stats.fastestWin) {
                        stats.fastestWin = timeElapsed;
                        console.log('⚡ New fastest win:', stats.fastestWin);
                    }

                    // Perfect win (no damage taken)
                    if (damageTaken === 0) {
                        stats.perfectWins++;
                        console.log('✨ Perfect win! Total:', stats.perfectWins);
                    }

                    // Comeback win
                    if (this.player1.health < this.player1.maxHealth * 0.3 && this.player2.health > this.player2.maxHealth * 0.7) {
                        stats.comebackWins++;
                        console.log('🔥 Comeback win! Total:', stats.comebackWins);
                    }
                } else if (winner.includes('Player 2')) {
                    // Loss tracking
                    stats.losses++;
                    console.log('❌ Player 2 won! Incrementing losses to:', stats.losses);
                }

                console.log('📊 After update - Stats:', JSON.stringify(stats));

                // Save character stats immediately
                saveGameState();
                console.log('💾 Character stats updated and saved for:', charKey);
                console.log('💾 Full characterStats object:', JSON.stringify(gameState.characterStats));
            } else {
                console.log('⚠️ No selectedCharacter found! Cannot track stats.');
            }

            // Track challenge progress for battle outcome
            if (winner.includes('Player 1')) {
                // Player 1 won - track the win
                trackChallengeProgress('battle_won', {
                    timeRemaining: Math.ceil(this.timeLeft / 1000),
                    playerHP: this.player1.health,
                    playerMaxHP: this.player1.maxHealth,
                    damageTaken: this.player1.maxHealth - this.player1.health,
                    enemyHP: this.player2.maxHealth,
                    trophiesEarned: player1Trophies,
                    character: gameState.selectedCharacter,
                    rarity: characters[gameState.selectedCharacter]?.rarity || 'common',
                    enemyRarity: characters[gameState.selectedPlayer2Character]?.rarity || 'common',
                    map: gameState.selectedMap,
                    wasComeback: this.player1.health < this.player1.maxHealth * 0.3 && this.player2.health > this.player2.maxHealth * 0.7
                });
            } else if (winner.includes('Player 2')) {
                // Player 2 won (or CPU won) - track the loss
                trackChallengeProgress('battle_lost');
            }

            // Award coins and trophies
            if (gameState.gameMode === 'multiplayer') {
                // Multiplayer mode
                gameState.player1Coins = safeCoins(gameState.player1Coins + player1Coins);
                gameState.player2Coins = safeCoins(gameState.player2Coins + player2Coins);
                gameState.player1Trophies += player1Trophies;
                gameState.player2Trophies += player2Trophies;

                // Track coins earned for challenges (only positive amounts for Player 1)
                if (player1Coins > 0) {
                    trackChallengeProgress('coins_earned', { amount: player1Coins });
                }

                // Format coin messages to show gains/losses
                const p1CoinMsg = player1Coins >= 0 ? `+${player1Coins}` : `${player1Coins}`;
                const p2CoinMsg = player2Coins >= 0 ? `+${player2Coins}` : `${player2Coins}`;
                const coinsMessage = `P1: ${p1CoinMsg} coins | P2: ${p2CoinMsg} coins`;
                const trophyMessage = `🏆 P1: +${player1Trophies} | P2: +${player2Trophies} trophies`;

                updateMultiplayerCoinsDisplay();
                updateMultiplayerTrophyDisplay();

                showNotification(`${winner}\n${coinsMessage}\n${trophyMessage}`);
            } else {
                // Single player mode
                gameState.coins = safeCoins(gameState.coins + player1Coins);
                gameState.trophies += player1Trophies;

                // Track coins earned for challenges (only positive amounts)
                if (player1Coins > 0) {
                    trackChallengeProgress('coins_earned', { amount: player1Coins });
                }

                // Format coin message to show gains/losses
                const coinMsg = player1Coins >= 0 ? `+${player1Coins} coins earned!` : `${player1Coins} coins lost!`;
                const trophyMessage = `🏆 +${player1Trophies} trophies earned!`;

                updateSinglePlayerCoinsDisplay();
                updateSinglePlayerTrophyDisplay();

                showNotification(`${winner}\n${coinMsg}\n${trophyMessage}`);
            }

            setTimeout(() => endBattle(), 5000);
        }

        handleTournamentResult(winner) {
            const data = gameState.tournamentData;
            const currentRoundName = data.roundNames[data.currentRound];
            const series = data.currentSeries;

            // Track challenge progress for tournament battles
            if (winner.includes('Player 1')) {
                // Player won - track the win
                trackChallengeProgress('battle_won', {
                    timeRemaining: Math.ceil(this.timeLeft / 1000),
                    playerHP: this.player1.health,
                    playerMaxHP: this.player1.maxHealth,
                    damageTaken: this.player1.maxHealth - this.player1.health,
                    enemyHP: this.player2.maxHealth,
                    trophiesEarned: 0, // Tournaments don't award trophies per battle
                    character: gameState.selectedCharacter,
                    rarity: characters[gameState.selectedCharacter]?.rarity || 'common',
                    enemyRarity: characters[gameState.selectedPlayer2Character]?.rarity || 'common',
                    map: gameState.selectedMap,
                    wasComeback: this.player1.health < this.player1.maxHealth * 0.3 && this.player2.health > this.player2.maxHealth * 0.7
                });
            } else {
                // Player lost - track the loss
                trackChallengeProgress('battle_lost');
            }

            // Update series score
            if (winner.includes('Player 1')) {
                series.playerWins++;
            } else {
                series.opponentWins++;
            }
            series.gamesPlayed++;

            // Check if series is complete (first to 3 wins)
            if (series.playerWins >= data.seriesLength) {
                // Player won the series - advance to next round
                data.roundsWon++;
                data.currentRound++;

                // Reset series for next round
                series.playerWins = 0;
                series.opponentWins = 0;
                series.gamesPlayed = 0;
                series.playerCharacter = null;
                series.opponentCharacter = null;

                if (data.currentRound >= data.totalRounds) {
                    // Tournament completed! Award prize
                    if (gameState.gameMode === 'multiplayer') {
                        if (gameState.currentShopPlayer === 1) {
                            gameState.player1Coins = safeCoins(gameState.player1Coins + data.prizePool);
                        } else {
                            gameState.player2Coins = safeCoins(gameState.player2Coins + data.prizePool);
                        }
                        updateMultiplayerCoinsDisplay();
                    } else {
                        gameState.coins = safeCoins(gameState.coins + data.prizePool);
                        updateSinglePlayerCoinsDisplay();
                    }

                    // Reset tournament
                    gameState.tournamentMode = false;
                    gameState.tournamentData.isActive = false;

                    showNotification(`🏆 TOURNAMENT CHAMPION! 🏆\n${data.name} COMPLETED!\n\n💰 Prize Pool Awarded: ${data.prizePool} coins!\n🎉 Congratulations on your victory!`);
                    setTimeout(() => {
                        endBattle();
                        updateTournamentStatus();
                    }, 6000);
                } else {
                    // Advance to next round
                    const nextRoundName = data.roundNames[data.currentRound];
                    showNotification(`🏆 ${currentRoundName} SERIES WON! 🏆\n\nAdvancing to: ${nextRoundName}\nRounds Won: ${data.roundsWon}/${data.totalRounds}\n\nPrize Pool: ${data.prizePool} coins\n(Only awarded if you win ALL rounds!)`);
                    setTimeout(() => {
                        endBattle();
                        updateTournamentStatus();
                        // Auto-continue to next round
                        setTimeout(() => {
                            showCharacterSelect();
                        }, 2000);
                    }, 4000);
                }
            } else if (series.opponentWins >= data.seriesLength) {
                // Player lost the series - tournament over
                gameState.tournamentMode = false;
                gameState.tournamentData.isActive = false;

                showNotification(`💀 TOURNAMENT ELIMINATED! 💀\n\nLost series in: ${currentRoundName}\nFinal Series Score: ${series.playerWins}-${series.opponentWins}\nRounds Won: ${data.roundsWon}/${data.totalRounds}\n\n❌ No prize awarded\n💰 Entry fee (${data.entryFee} coins) lost\n\nBetter luck next time!`);
                setTimeout(() => {
                    endBattle();
                    updateTournamentStatus();
                }, 6000);
            } else {
                // Series continues - show current score and continue
                const seriesStatus = winner.includes('Player 1') ? 'GAME WON!' : 'GAME LOST!';
                showNotification(`${seriesStatus}\n\n${currentRoundName} Series Score:\nYou: ${series.playerWins} | Opponent: ${series.opponentWins}\n\nFirst to ${data.seriesLength} wins advances!\n\nNext game starting...`);
                setTimeout(() => {
                    endBattle();
                    updateTournamentStatus();
                    // Continue series - auto-start next game
                    setTimeout(() => {
                        showCharacterSelect();
                    }, 2000);
                }, 3000);
            }

            updateUniversalCoinsDisplay();
        }

        handle2PlayerTournamentResult(winner) {
            const data = gameState.tournament2PlayerData;
            const currentPlayerData = data.currentPlayer === 1 ? data.player1 : data.player2;
            const series = currentPlayerData.currentSeries;
            const currentRoundName = data.roundNames[data.currentRound];

            // Track challenge progress for 2-player tournament battles
            if (winner.includes('Player 1')) {
                // Player won - track the win
                trackChallengeProgress('battle_won', {
                    timeRemaining: Math.ceil(this.timeLeft / 1000),
                    playerHP: this.player1.health,
                    playerMaxHP: this.player1.maxHealth,
                    damageTaken: this.player1.maxHealth - this.player1.health,
                    enemyHP: this.player2.maxHealth,
                    trophiesEarned: 0,
                    character: gameState.selectedCharacter,
                    rarity: characters[gameState.selectedCharacter]?.rarity || 'common',
                    enemyRarity: characters[gameState.selectedPlayer2Character]?.rarity || 'common',
                    map: gameState.selectedMap,
                    wasComeback: this.player1.health < this.player1.maxHealth * 0.3 && this.player2.health > this.player2.maxHealth * 0.7
                });
            } else {
                // Player lost - track the loss
                trackChallengeProgress('battle_lost');
            }

            // Handle final match (Player vs Player)
            if (data.finalMatch) {
                if (winner.includes('Player 1')) {
                    end2PlayerTournament(1);
                } else {
                    end2PlayerTournament(2);
                }
                return;
            }

            // Update series score for current player
            if (winner.includes('Player 1')) {
                series.playerWins++;
            } else {
                series.opponentWins++;
            }
            series.gamesPlayed++;

            // Check if series is complete (first to 3 wins)
            if (series.playerWins >= data.seriesLength) {
                // Current player won the series - advance to next round
                currentPlayerData.roundsWon++;

                // Reset series for next round
                series.playerWins = 0;
                series.opponentWins = 0;
                series.gamesPlayed = 0;
                series.playerCharacter = null;
                series.opponentCharacter = null;

                if (currentPlayerData.roundsWon >= data.totalRounds) {
                    // Player completed all rounds - check if other player also completed
                    const otherPlayerData = data.currentPlayer === 1 ? data.player2 : data.player1;
                    if (otherPlayerData.roundsWon >= data.totalRounds) {
                        // Both players made it to finals
                        showNotification(`🏆 Player ${data.currentPlayer} ADVANCES TO FINALS! 🏆\n\n${currentRoundName} series won!\nBoth players will meet in the finals!`);
                    } else {
                        // Current player finished, wait for other player
                        showNotification(`🏆 Player ${data.currentPlayer} COMPLETED TOURNAMENT! 🏆\n\nWaiting for Player ${data.currentPlayer === 1 ? 2 : 1} to finish...`);
                    }
                } else {
                    // Advance to next round
                    const nextRoundName = data.roundNames[currentPlayerData.roundsWon];
                    showNotification(`🏆 Player ${data.currentPlayer} ADVANCES! 🏆\n\n${currentRoundName} series won!\nAdvancing to: ${nextRoundName}\n\nPlayer ${data.currentPlayer === 1 ? 2 : 1}'s turn next!`);
                }

                setTimeout(() => {
                    endBattle();
                    update2PlayerTournamentStatus();
                    setTimeout(() => {
                        switchTo2PlayerNextPlayer();
                    }, 2000);
                }, 4000);

            } else if (series.opponentWins >= data.seriesLength) {
                // Current player lost the series - eliminated
                currentPlayerData.isEliminated = true;

                showNotification(`💀 Player ${data.currentPlayer} ELIMINATED! 💀\n\nLost series in: ${currentRoundName}\nFinal Series Score: ${series.playerWins}-${series.opponentWins}\n\nPlayer ${data.currentPlayer === 1 ? 2 : 1} continues alone!`);

                setTimeout(() => {
                    endBattle();
                    update2PlayerTournamentStatus();
                    setTimeout(() => {
                        switchTo2PlayerNextPlayer();
                    }, 2000);
                }, 4000);

            } else {
                // Series continues - show current score and continue
                const seriesStatus = winner.includes('Player 1') ? 'GAME WON!' : 'GAME LOST!';
                showNotification(`Player ${data.currentPlayer}: ${seriesStatus}\n\n${currentRoundName} Series Score:\nYou: ${series.playerWins} | Opponent: ${series.opponentWins}\n\nFirst to ${data.seriesLength} wins advances!\n\nNext game starting...`);

                setTimeout(() => {
                    endBattle();
                    update2PlayerTournamentStatus();
                    setTimeout(() => {
                        showCharacterSelect();
                    }, 2000);
                }, 3000);
            }

            updateUniversalCoinsDisplay();
        }

        // ADVANCED AI SYSTEM with smart pathfinding, item prioritization, and tactical intelligence!
        updateAI() {
            const dx = this.player1.x - this.player2.x;
            const dy = this.player1.y - this.player2.y;
            const distance = Math.abs(dx);
            const verticalDistance = Math.abs(dy);

            // FLAG CAPTURE MODE AI - Prioritize flag-related actions!
            if (this.isFlagCaptureMode) {
                // If player has the flag, chase them while maintaining safe distance!
                if (gameState.flagCapture.flagHolder === 'player1') {
                    // AI chasing flag holder - KEEP DISTANCE, DON'T CROSS HITBOX

                    // Calculate safe attack distance (outside player's hitbox)
                    const playerHitboxRadius = Math.min(this.player1.width, this.player1.height) / 3;
                    const aiHitboxRadius = Math.min(this.player2.width, this.player2.height) / 3;
                    const safeDistance = playerHitboxRadius + aiHitboxRadius + 30; // Extra 30px buffer
                    const attackRange = safeDistance + 50; // Attack from 50px beyond safe distance

                    // Move towards player but stop at safe distance
                    if (distance > attackRange) {
                        // Too far - move closer
                        if (dx > 0) {
                            this.player2.x += this.player2.getMovementSpeed() * 1.2; // 20% faster when chasing flag
                            this.player2.direction = 1;
                        } else {
                            this.player2.x -= this.player2.getMovementSpeed() * 1.2;
                            this.player2.direction = -1;
                        }
                    } else if (distance < safeDistance) {
                        // Too close - back away to avoid crossing hitbox
                        if (dx > 0) {
                            this.player2.x -= this.player2.getMovementSpeed() * 1.5; // Back away faster
                            this.player2.direction = 1; // Still face the player
                        } else {
                            this.player2.x += this.player2.getMovementSpeed() * 1.5;
                            this.player2.direction = -1;
                        }
                        console.log('🛡️ AI backing away to maintain distance');
                    } else {
                        // Perfect distance - circle around player
                        // Face the player
                        this.player2.direction = dx > 0 ? 1 : -1;

                        // Strafe/circle movement
                        if (Math.random() < 0.5) {
                            // Move slightly to maintain optimal attack position
                            const strafeDirection = Math.random() < 0.5 ? 1 : -1;
                            this.player2.x += this.player2.getMovementSpeed() * 0.5 * strafeDirection;
                        }
                    }

                    // Jump to reach player if they're above
                    if (dy < -50 && this.player2.onGround) {
                        this.player2.jump();
                    }

                    // Attack from safe distance to steal flag
                    if (distance >= safeDistance && distance <= attackRange + 30) {
                        if (Math.random() < 0.7) { // 70% chance to attack when in range
                            this.player2.normalAttack();
                        }
                    }

                    // Use special attack from safe distance to stun
                    if (distance >= safeDistance && distance <= attackRange + 50 && Math.random() < 0.25) { // 25% chance for special attack
                        this.player2.specialAttack();
                    }

                    return; // Skip normal AI behavior when chasing flag holder
                }

                // If AI has the flag, RUN AROUND THE MAP!
                if (gameState.flagCapture.flagHolder === 'player2') {
                    // Initialize AI flag running state if not exists
                    if (!this.aiFlagRunning) {
                        this.aiFlagRunning = {
                            targetX: null,
                            lastChangeTime: Date.now(),
                            changeInterval: 2000, // Change direction every 2 seconds
                            runSpeed: 1.3 // 30% faster when running with flag
                        };
                    }

                    const currentTime = Date.now();
                    const timeSinceLastChange = currentTime - this.aiFlagRunning.lastChangeTime;

                    // Change target position every 2 seconds or if reached target
                    if (timeSinceLastChange >= this.aiFlagRunning.changeInterval ||
                        this.aiFlagRunning.targetX === null ||
                        Math.abs(this.player2.x - this.aiFlagRunning.targetX) < 30) {

                        // Pick a random position on the map to run to
                        const mapWidth = this.canvas.width;
                        const minX = 50;
                        const maxX = mapWidth - 50;

                        // Generate new random target far from current position
                        let newTargetX;
                        do {
                            newTargetX = Math.random() * (maxX - minX) + minX;
                        } while (Math.abs(newTargetX - this.player2.x) < 200); // Ensure it's far enough

                        this.aiFlagRunning.targetX = newTargetX;
                        this.aiFlagRunning.lastChangeTime = currentTime;

                        console.log(`🏃 AI running to new position: ${Math.round(newTargetX)}`);
                    }

                    // Run towards target position
                    const targetDx = this.aiFlagRunning.targetX - this.player2.x;

                    if (targetDx > 20) {
                        this.player2.x += this.player2.getMovementSpeed() * this.aiFlagRunning.runSpeed;
                        this.player2.direction = 1;
                    } else if (targetDx < -20) {
                        this.player2.x -= this.player2.getMovementSpeed() * this.aiFlagRunning.runSpeed;
                        this.player2.direction = -1;
                    }

                    // Jump frequently while running to be harder to catch
                    if (this.player2.onGround && Math.random() < 0.15) { // 15% chance to jump each frame
                        this.player2.jump();
                    }

                    // Also jump if player is getting close
                    if (distance < 150 && this.player2.onGround && Math.random() < 0.3) {
                        this.player2.jump();
                    }

                    return; // Skip normal AI behavior when holding flag
                }

                // If flag is available, GO FOR IT AGGRESSIVELY!
                if (gameState.flagCapture.flag && !gameState.flagCapture.flagHolder) {
                    const flagDx = gameState.flagCapture.flag.x - this.player2.x;
                    const flagDistance = Math.abs(flagDx);

                    // AI going for flag - PRIORITIZE THIS!

                    // Move towards flag at full speed
                    if (flagDx > 20) {
                        this.player2.x += this.player2.getMovementSpeed() * 1.2; // 20% faster when going for flag
                        this.player2.direction = 1;
                    } else if (flagDx < -20) {
                        this.player2.x -= this.player2.getMovementSpeed() * 1.2;
                        this.player2.direction = -1;
                    }

                    // Jump to reach flag if needed
                    const flagDy = gameState.flagCapture.flag.y - this.player2.y;
                    if (flagDy < -30 && this.player2.onGround) {
                        this.player2.jump();
                    }

                    // Jump more frequently when close to flag
                    if (flagDistance < 100 && this.player2.onGround && Math.random() < 0.2) {
                        this.player2.jump();
                    }

                    // Always prioritize flag over everything else
                    return; // Skip normal AI behavior when flag is available
                }
            }

            // IMMEDIATE PATHFINDING - Find best path to player and execute it
            const pathResult = this.findOptimalPathToPlayer();

            // Check if player has a dangerous item and AI should flee
            let shouldFlee = false;
            if (this.player1.heldItem) {
                const item = this.player1.heldItem;
                // Flee from powerful items
                if (item.data.type === 'legendary' ||
                    item.data.type === 'explosive' ||
                    item.data.type === 'instant' ||
                    item.data.type === 'area' ||
                    item.data.type === 'chaos' ||
                    item.data.type === 'alpha' ||
                    item.data.type === 'beta' ||
                    item.name.includes('All Powers') ||
                    item.name.includes('Nuclear') ||
                    item.name.includes('Lightning') ||
                    item.name.includes('Meteor')) {
                    shouldFlee = true;
                    console.log(`🏃 ${this.player2.char.name} is fleeing from ${item.name}!`);
                }
            }

            // Check for incoming projectiles and dodge them!
            let shouldDodge = false;
            this.projectiles.forEach(projectile => {
                if (projectile.owner === this.player1) {
                    const projDistance = Math.abs(projectile.x - this.player2.x);
                    const projApproaching = (projectile.velocity > 0 && projectile.x < this.player2.x) ||
                                            (projectile.velocity < 0 && projectile.x > this.player2.x);

                    // Dodge if projectile is close and approaching (75% chance to dodge)
                    if (projDistance < 150 && projApproaching && Math.random() < 0.75) {
                        shouldDodge = true;
                    }
                }
            });
            
            // SMART ITEM COLLECTION AI - Prioritizes special dropped items!
            let targetItem = null;
            let closestItemDistance = Infinity;
            let itemPriority = 0;

            if (this.isSpecialDropMode && this.dropItems.length > 0) {
                this.dropItems.forEach(item => {
                    if (item.onGround) { // Only go for items that have landed
                        const itemDistance = Math.abs(item.x - this.player2.x);

                        // Calculate item priority based on type and AI needs
                        let priority = this.calculateItemPriority(item);

                        // Prefer closer items, but prioritize by value
                        const adjustedScore = priority - (itemDistance / 100);

                        if (adjustedScore > itemPriority || (priority >= itemPriority && itemDistance < closestItemDistance)) {
                            closestItemDistance = itemDistance;
                            targetItem = item;
                            itemPriority = priority;
                        }
                    }
                });
            }

            // ENHANCED PRIORITY SYSTEM: Items vs Combat
            let shouldGoForItem = false;
            if (targetItem && closestItemDistance < 300) {
                // Go for item based on priority and situation
                const playerFarAway = distance > 200;
                const lowHealth = (this.player2.health / this.player2.maxHealth) < 0.5;
                const highPriorityItem = itemPriority >= 8; // Special/legendary items
                const mediumPriorityItem = itemPriority >= 5; // Useful items
                const itemClose = closestItemDistance < 120;

                if (highPriorityItem || // Always go for high priority items
                    (mediumPriorityItem && (playerFarAway || lowHealth)) ||
                    (itemClose && playerFarAway)) {
                    shouldGoForItem = true;
                    console.log(`🎯 ${this.player2.char.name} prioritizing ${targetItem.name} (priority: ${itemPriority})`);
                }
            }
            
            // SMART PATHFINDING DECISION - AI uses pathfinding when needed
            let needsPathfinding = false;
            let pathfindingTarget = null;
            let useDirectMovement = false;

            if (!shouldFlee && !shouldGoForItem) {
                // Check if AI can reach player directly (no obstacles)
                const canReachDirectly = this.canReachPlayerDirectly();

                if (!canReachDirectly && pathResult) {
                    needsPathfinding = true;
                    pathfindingTarget = pathResult;
                    console.log(`🧠 ${this.player2.char.name} using pathfinding to navigate around obstacles`);
                } else if (canReachDirectly) {
                    useDirectMovement = true;
                } else {
                    // No path found, try alternative movement
                    useDirectMovement = true;
                }
            }

            // DODGING BEHAVIOR - Jump to avoid attacks!
            if (shouldDodge && this.player2.onGround) {
                this.player2.jump();
                console.log(`${this.player2.char.name} dodges attack!`);
            }
            
            // SMART ITEM COLLECTION MOVEMENT
            if (shouldGoForItem && targetItem) {
                const itemDx = targetItem.x - this.player2.x;
                const itemDy = targetItem.y - this.player2.y;
                const moveSpeed = this.player2.getMovementSpeed() + 1; // Move faster toward items

                if (Math.abs(itemDx) > 15) { // More precise movement
                    if (itemDx > 0) {
                        this.player2.x += moveSpeed;
                        this.player2.direction = 1;
                    } else {
                        this.player2.x -= moveSpeed;
                        this.player2.direction = -1;
                    }
                }

                // Smart jumping for items on platforms or elevated positions
                if (itemDy < -30 && this.player2.onGround) {
                    // Item is above, jump to reach it
                    this.player2.jump();
                    console.log(`🦘 ${this.player2.char.name} jumps to reach ${targetItem.name}!`);
                } else if (Math.abs(itemDx) < 50 && itemDy < -10 && this.player2.onGround && Math.random() < 0.4) {
                    // Item is slightly above and close, jump with higher chance
                    this.player2.jump();
                }
            } else if (shouldFlee) {
                // FLEEING BEHAVIOR - Run away from dangerous items!
                const fleeSpeed = this.player2.getMovementSpeed() + 1; // Move faster when fleeing
                const fleeDistance = 300; // Try to get this far away

                if (distance < fleeDistance) {
                    // Run away from player
                    if (dx > 0) {
                        // Player is to the right, flee left
                        this.player2.x -= fleeSpeed;
                        this.player2.direction = -1;
                    } else {
                        // Player is to the left, flee right
                        this.player2.x += fleeSpeed;
                        this.player2.direction = 1;
                    }

                    // Jump to escape faster or reach higher platforms
                    if (this.player2.onGround && Math.random() < 0.2) {
                        this.player2.jump();
                    }

                    // Try to find a platform to hide behind
                    const escapePlatform = this.findEscapePlatform();
                    if (escapePlatform && Math.random() < 0.1) {
                        const platformDx = escapePlatform.x - this.player2.x;
                        if (Math.abs(platformDx) > 20) {
                            if (platformDx > 0) {
                                this.player2.x += fleeSpeed;
                                this.player2.direction = 1;
                            } else {
                                this.player2.x -= fleeSpeed;
                                this.player2.direction = -1;
                            }
                        }
                    }
                }
            } else if (needsPathfinding && pathfindingTarget) {
                // OPTIMAL PATHFINDING MOVEMENT - Execute calculated path immediately
                const targetDx = pathfindingTarget.x - this.player2.x;
                const targetDy = pathfindingTarget.y - this.player2.y;
                const moveSpeed = this.player2.getMovementSpeed() + 0.5; // Slightly faster pathfinding

                // Move toward the pathfinding target with precision
                if (Math.abs(targetDx) > 10) {
                    if (targetDx > 0) {
                        this.player2.x += moveSpeed;
                        this.player2.direction = 1;
                    } else {
                        this.player2.x -= moveSpeed;
                        this.player2.direction = -1;
                    }
                }

                // Smart jumping based on path requirements
                if (this.player2.onGround) {
                    // Jump if target is above and we're close horizontally
                    if (Math.abs(targetDx) < 40 && targetDy < -20) {
                        this.player2.jump();
                        console.log(`🦘 ${this.player2.char.name} executes pathfinding jump!`);
                    }
                    // Also jump if we're very close to target platform
                    else if (Math.abs(targetDx) < 25 && pathfindingTarget.type === 'platform') {
                        this.player2.jump();
                    }
                }
            } else if (useDirectMovement) {
                // DIRECT MOVEMENT - AI moves directly toward player when path is clear
                const isCloseRange = this.player2.char.specialType === 'close';
                const preferredDistance = isCloseRange ? 80 : 200;
                const moveSpeed = this.player2.getMovementSpeed();

                // Always move toward player if too far
                if (distance > preferredDistance) {
                    if (dx > 0) {
                        this.player2.x += moveSpeed;
                        this.player2.direction = 1;
                    } else {
                        this.player2.x -= moveSpeed;
                        this.player2.direction = -1;
                    }

                    // Jump if player is above and AI is close horizontally
                    if (verticalDistance > 50 && dy < 0 && distance < 100 && this.player2.onGround) {
                        this.player2.jump();
                        console.log(`🦘 ${this.player2.char.name} jumps to reach player above!`);
                    }
                } else if (distance < (preferredDistance - 50) && !isCloseRange) {
                    // Long-range fighters maintain distance
                    if (dx > 0) {
                        this.player2.x -= Math.max(1, Math.floor(moveSpeed / 2));
                        this.player2.direction = 1;
                    } else {
                        this.player2.x += Math.max(1, Math.floor(moveSpeed / 2));
                        this.player2.direction = -1;
                    }
                }
            } else {
                // ALTERNATIVE MOVEMENT - When no clear path, try to get around obstacles
                const moveSpeed = this.player2.getMovementSpeed();

                // Try moving in the direction of the player
                if (Math.abs(dx) > 50) {
                    if (dx > 0) {
                        this.player2.x += moveSpeed;
                        this.player2.direction = 1;
                    } else {
                        this.player2.x -= moveSpeed;
                        this.player2.direction = -1;
                    }
                }

                // Jump periodically to try to get over obstacles
                if (this.player2.onGround && Math.random() < 0.1) {
                    this.player2.jump();
                    console.log(`🦘 ${this.player2.char.name} jumps to navigate around obstacles!`);
                }
            }
            
            // ENHANCED ATTACK PATTERNS - More aggressive and intelligent
            // Don't attack when fleeing from dangerous items
            if (!shouldFlee) {
                const isCloseRange = this.player2.char.specialType === 'close';
                if (isCloseRange) {
                    // Close-range fighters: Attack aggressively when close
                    if (distance < 140) {
                        if (Math.random() < 0.025 && this.player2.canAttack) { // Increased from 0.015
                            this.player2.normalAttack();
                        }
                        if (Math.random() < 0.012 && this.player2.canSpecialAttack) { // Increased from 0.008
                            this.player2.specialAttack();
                        }
                    }
                } else {
                    // Long-range fighters: Attack from optimal distance
                    if (distance > 80 && distance < 350) { // Wider range
                        if (Math.random() < 0.018 && this.player2.canAttack) { // Increased from 0.012
                            this.player2.normalAttack();
                        }
                        if (Math.random() < 0.009 && this.player2.canSpecialAttack) { // Increased from 0.006
                            this.player2.specialAttack();
                        }
                    }
                }
            }

            // AGGRESSIVE MODE - When health is low, attack much more frequently
            const healthPercent = this.player2.health / this.player2.maxHealth;
            if (!shouldFlee && healthPercent < 0.4) { // Trigger earlier at 40% health
                if (Math.random() < 0.035 && this.player2.canAttack) { // Much more aggressive
                    this.player2.normalAttack();
                }
                if (Math.random() < 0.018 && this.player2.canSpecialAttack) { // Much more aggressive
                    this.player2.specialAttack();
                }
            }
            
            // INTELLIGENT AI ITEM USAGE - Uses items with perfect timing and strategy!
            if (this.player2.heldItem) {
                const item = this.player2.heldItem;
                const shouldUseItem = this.shouldAIUseItem(item, distance, healthPercent);

                if (shouldUseItem) {
                    this.player2.useItem();
                    console.log(`🧠 ${this.player2.char.name} strategically uses ${item.name}!`);
                }
            }
            
            // ANTI-STUCK SYSTEM - Prevent AI from getting stuck in one spot
            this.handleAIStuckPrevention(distance, verticalDistance);

            // PLATFORM JUMPING - AI tries to use platforms tactically
            if (!shouldFlee && !needsPathfinding && Math.random() < 0.008 && this.player2.onGround && distance > 120) {
                this.player2.jump();
                console.log(`🦘 ${this.player2.char.name} tactical platform jump!`);
            }
        }

        // PATHFINDING SYSTEM - Find the best platform to reach the player above
        findPathToReachPlayer() {
            if (!this.mapData || !this.mapData.platforms) return null;

            const playerX = this.player1.x;
            const playerY = this.player1.y;
            const aiX = this.player2.x;
            const aiY = this.player2.y;

            // Find platforms that could help reach the player
            let bestPlatform = null;
            let bestScore = -1;

            this.mapData.platforms.forEach(platform => {
                // Platform must be above AI and reachable
                if (platform.y < aiY - 20) {
                    const platformCenterX = platform.x + platform.width / 2;
                    const platformCenterY = platform.y;

                    // Calculate if this platform gets us closer to the player
                    const distanceToPlayer = Math.sqrt(
                        Math.pow(platformCenterX - playerX, 2) +
                        Math.pow(platformCenterY - playerY, 2)
                    );

                    const distanceFromAI = Math.abs(platformCenterX - aiX);
                    const heightAdvantage = aiY - platformCenterY;

                    // Score based on: closer to player, reachable from AI position, height advantage
                    let score = 0;

                    // Prefer platforms closer to player
                    score += Math.max(0, 500 - distanceToPlayer);

                    // Prefer platforms not too far from AI (reachable)
                    if (distanceFromAI < 200) {
                        score += Math.max(0, 200 - distanceFromAI);
                    } else {
                        score -= 100; // Penalty for unreachable platforms
                    }

                    // Prefer higher platforms (more height advantage)
                    score += heightAdvantage * 2;

                    // Bonus if platform is roughly between AI and player
                    const playerDirection = playerX > aiX ? 1 : -1;
                    const platformDirection = platformCenterX > aiX ? 1 : -1;
                    if (playerDirection === platformDirection) {
                        score += 100;
                    }

                    if (score > bestScore) {
                        bestScore = score;
                        bestPlatform = {
                            x: platformCenterX,
                            y: platformCenterY,
                            platform: platform
                        };
                    }
                }
            });

            return bestPlatform;
        }

        // ESCAPE PLATFORM FINDER - Find platforms to hide behind when fleeing
        findEscapePlatform() {
            if (!this.mapData || !this.mapData.platforms) return null;

            const playerX = this.player1.x;
            const aiX = this.player2.x;

            // Find platforms that are away from the player
            let bestEscape = null;
            let bestDistance = 0;

            this.mapData.platforms.forEach(platform => {
                const platformCenterX = platform.x + platform.width / 2;
                const distanceFromPlayer = Math.abs(platformCenterX - playerX);
                const distanceFromAI = Math.abs(platformCenterX - aiX);

                // Prefer platforms far from player but reachable from AI
                if (distanceFromPlayer > bestDistance && distanceFromAI < 150) {
                    bestDistance = distanceFromPlayer;
                    bestEscape = {
                        x: platformCenterX,
                        y: platform.y,
                        platform: platform
                    };
                }
            });

            return bestEscape;
        }

        // OPTIMAL PATHFINDING - Finds the absolute best path to reach the player
        findOptimalPathToPlayer() {
            const dx = this.player1.x - this.player2.x;
            const dy = this.player1.y - this.player2.y;
            const distance = Math.abs(dx);
            const verticalDistance = Math.abs(dy);

            // Always try to find a path if player is not easily reachable
            if (distance < 80 && verticalDistance < 40) {
                return null; // Player is very close, no pathfinding needed
            }

            // Check if we need to go around obstacles or reach higher ground
            const needsPathfinding = verticalDistance > 60 || !this.canReachPlayerDirectly();

            if (!needsPathfinding) {
                return null; // Direct movement is sufficient
            }

            // Find best platform path - enhanced algorithm
            if (this.mapData && this.mapData.platforms) {
                let bestPath = null;
                let bestScore = -1;

                this.mapData.platforms.forEach(platform => {
                    const platformCenterX = platform.x + platform.width / 2;
                    const platformY = platform.y;

                    // Calculate distances
                    const distanceToPlayer = Math.sqrt(
                        Math.pow(platformCenterX - this.player1.x, 2) +
                        Math.pow(platformY - this.player1.y, 2)
                    );
                    const distanceFromAI = Math.abs(platformCenterX - this.player2.x);
                    const heightAdvantage = this.player2.y - platformY;

                    // Enhanced scoring system
                    let score = 0;

                    // Primary: Getting closer to player
                    score += Math.max(0, 800 - distanceToPlayer);

                    // Secondary: Reachability from AI position
                    if (distanceFromAI < 100) {
                        score += 400; // Very reachable
                    } else if (distanceFromAI < 200) {
                        score += 200; // Moderately reachable
                    } else if (distanceFromAI < 300) {
                        score += 50; // Barely reachable
                    }

                    // Height advantage (prefer platforms that get us higher)
                    if (heightAdvantage > 0) {
                        score += heightAdvantage * 4;
                    }

                    // Direction bonus - prefer platforms toward the player
                    const playerDirection = this.player1.x > this.player2.x ? 1 : -1;
                    const platformDirection = platformCenterX > this.player2.x ? 1 : -1;
                    if (playerDirection === platformDirection) {
                        score += 300; // Big bonus for correct direction
                    }

                    // Bonus for platforms that help reach elevated players
                    if (this.player1.y < this.player2.y - 50 && platformY < this.player2.y) {
                        score += 250; // Bonus for platforms that get us higher
                    }

                    // Only consider reachable platforms
                    if (score > bestScore && distanceFromAI < 350) {
                        bestScore = score;
                        bestPath = {
                            x: platformCenterX,
                            y: platformY,
                            type: 'platform',
                            priority: Math.min(10, Math.floor(score / 100)),
                            platform: platform,
                            score: score
                        };
                    }
                });

                if (bestPath) {
                    console.log(`🎯 AI found optimal path via platform (score: ${bestPath.score})`);
                }

                return bestPath;
            }

            return null;
        }

        // DIRECT PATH CHECKER - Determines if AI can reach player without obstacles
        canReachPlayerDirectly() {
            const dx = this.player1.x - this.player2.x;
            const dy = this.player1.y - this.player2.y;
            const distance = Math.abs(dx);
            const verticalDistance = Math.abs(dy);

            // If player is on roughly the same level, direct movement should work
            if (verticalDistance < 60) {
                return true;
            }

            // If player is above but not too far, AI can try jumping
            if (dy < 0 && verticalDistance < 120 && distance < 150) {
                return true;
            }

            // Check if there are platforms blocking the direct path
            if (this.mapData && this.mapData.platforms) {
                const aiX = this.player2.x;
                const aiY = this.player2.y;
                const playerX = this.player1.x;
                const playerY = this.player1.y;

                // Check if any platform blocks the direct line between AI and player
                for (let platform of this.mapData.platforms) {
                    // Simple line intersection check
                    const platformLeft = platform.x;
                    const platformRight = platform.x + platform.width;
                    const platformTop = platform.y;
                    const platformBottom = platform.y + platform.height;

                    // Check if platform is between AI and player
                    const minX = Math.min(aiX, playerX);
                    const maxX = Math.max(aiX, playerX);
                    const minY = Math.min(aiY, playerY);
                    const maxY = Math.max(aiY, playerY);

                    if (platformLeft < maxX && platformRight > minX &&
                        platformTop < maxY && platformBottom > minY) {
                        // Platform might be blocking, need pathfinding
                        return false;
                    }
                }
            }

            return true; // No obstacles detected
        }

        // ITEM PRIORITY CALCULATOR - Determines how valuable an item is to the AI
        calculateItemPriority(item) {
            const healthPercent = this.player2.health / this.player2.maxHealth;
            let priority = 1;

            // Base priority by rarity
            switch(item.data.rarity) {
                case 'legendary': priority = 10; break;
                case 'epic': priority = 8; break;
                case 'rare': priority = 6; break;
                case 'uncommon': priority = 4; break;
                case 'common': priority = 2; break;
            }

            // Adjust based on item type and AI needs
            if (item.data.type === 'consumable' && healthPercent < 0.4) {
                priority += 5; // Healing is critical when low health
            } else if (item.data.type === 'weapon' || item.data.type === 'explosive') {
                priority += 3; // Weapons are always useful
            } else if (item.data.type === 'buff') {
                priority += 2; // Buffs are good
            } else if (item.data.type === 'instant' || item.data.type === 'area') {
                priority += 4; // Instant damage is valuable
            }

            // Special items get maximum priority
            if (item.name.includes('All Powers') ||
                item.name.includes('Nuclear') ||
                item.name.includes('Lightning') ||
                item.name.includes('Meteor') ||
                item.data.type === 'alpha' ||
                item.data.type === 'beta' ||
                item.data.type === 'chaos') {
                priority = 15; // Maximum priority for special items
            }

            return priority;
        }

        // INTELLIGENT ITEM USAGE - Determines optimal timing for item usage
        shouldAIUseItem(item, distance, healthPercent) {
            const itemData = item.data;
            const itemName = item.name.toLowerCase();

            // Healing items - use when health is low
            if (itemData.type === 'consumable' || itemName.includes('heal') || itemName.includes('health')) {
                return healthPercent < 0.6; // Use healing when below 60% health
            }

            // Buff items - use immediately for advantage
            if (itemData.type === 'buff' || itemName.includes('boost') || itemName.includes('power')) {
                return Math.random() < 0.15; // 15% chance per frame to use buffs
            }

            // Weapon/explosive items - use when in optimal range
            if (itemData.type === 'weapon' || itemData.type === 'explosive' || itemName.includes('bomb')) {
                return distance < 180 && Math.random() < 0.12; // Use weapons when close
            }

            // Instant damage items - use when player is in range
            if (itemData.type === 'instant' || itemName.includes('lightning') || itemName.includes('meteor')) {
                return distance < 200 && Math.random() < 0.1; // Use instant damage in range
            }

            // Area effect items - use when player is close
            if (itemData.type === 'area' || itemName.includes('nuclear') || itemName.includes('explosion')) {
                return distance < 150 && Math.random() < 0.08; // Use area effects when close
            }

            // Debuff items - use when close enough to affect player
            if (itemData.type === 'debuff' || itemName.includes('poison') || itemName.includes('slow')) {
                return distance < 160 && Math.random() < 0.1; // Use debuffs in range
            }

            // Special/legendary items - use strategically
            if (itemData.type === 'legendary' || itemData.type === 'alpha' || itemData.type === 'beta') {
                // Use when health is low OR when close to player
                return (healthPercent < 0.5 || distance < 120) && Math.random() < 0.05;
            }

            // Chaos items - use when desperate or when player is close
            if (itemData.type === 'chaos' || itemName.includes('chaos')) {
                return (healthPercent < 0.3 || distance < 100) && Math.random() < 0.03;
            }

            // Default - small chance to use any item
            return Math.random() < 0.02;
        }

        // ANTI-STUCK PREVENTION SYSTEM - Prevents AI from getting stuck in one spot
        handleAIStuckPrevention(distance, verticalDistance) {
            // Initialize stuck tracking if not exists
            if (!this.aiStuckTracker) {
                this.aiStuckTracker = {
                    lastPosition: { x: this.player2.x, y: this.player2.y },
                    stuckCounter: 0,
                    lastMoveTime: Date.now()
                };
            }

            const currentTime = Date.now();
            const timeSinceLastMove = currentTime - this.aiStuckTracker.lastMoveTime;
            const positionChange = Math.abs(this.player2.x - this.aiStuckTracker.lastPosition.x) +
                                    Math.abs(this.player2.y - this.aiStuckTracker.lastPosition.y);

            // Check if AI hasn't moved much in the last second
            if (timeSinceLastMove > 1000) {
                if (positionChange < 20 && distance > 100) {
                    this.aiStuckTracker.stuckCounter++;
                    console.log(`⚠️ AI might be stuck (counter: ${this.aiStuckTracker.stuckCounter})`);

                    // Take action if stuck for too long
                    if (this.aiStuckTracker.stuckCounter >= 3) {
                        this.executeUnstuckBehavior(distance, verticalDistance);
                        this.aiStuckTracker.stuckCounter = 0; // Reset counter
                    }
                } else {
                    this.aiStuckTracker.stuckCounter = Math.max(0, this.aiStuckTracker.stuckCounter - 1);
                }

                // Update tracking
                this.aiStuckTracker.lastPosition = { x: this.player2.x, y: this.player2.y };
                this.aiStuckTracker.lastMoveTime = currentTime;
            }
        }

        // UNSTUCK BEHAVIOR - Aggressive actions to get AI moving
        executeUnstuckBehavior(distance, verticalDistance) {
            console.log(`🚨 ${this.player2.char.name} executing unstuck behavior!`);

            const moveSpeed = this.player2.getMovementSpeed() + 2; // Move faster
            const dx = this.player1.x - this.player2.x;

            // Try multiple unstuck strategies
            const strategy = Math.floor(Math.random() * 4);

            switch(strategy) {
                case 0: // Aggressive jump toward player
                    if (this.player2.onGround) {
                        this.player2.jump();
                        console.log(`🦘 Unstuck: Aggressive jump!`);
                    }
                    break;

                case 1: // Move in opposite direction then back
                    if (dx > 0) {
                        this.player2.x -= moveSpeed * 2;
                        this.player2.direction = -1;
                    } else {
                        this.player2.x += moveSpeed * 2;
                        this.player2.direction = 1;
                    }
                    console.log(`↔️ Unstuck: Reverse movement!`);
                    break;

                case 2: // Try to find alternative platform
                    const altPlatform = this.findAlternativePlatform();
                    if (altPlatform) {
                        const platformDx = altPlatform.x - this.player2.x;
                        if (Math.abs(platformDx) > 20) {
                            if (platformDx > 0) {
                                this.player2.x += moveSpeed;
                                this.player2.direction = 1;
                            } else {
                                this.player2.x -= moveSpeed;
                                this.player2.direction = -1;
                            }
                        }
                        if (this.player2.onGround && altPlatform.y < this.player2.y) {
                            this.player2.jump();
                        }
                    }
                    console.log(`🎯 Unstuck: Alternative platform!`);
                    break;

                case 3: // Direct aggressive movement toward player
                    if (dx > 0) {
                        this.player2.x += moveSpeed * 1.5;
                        this.player2.direction = 1;
                    } else {
                        this.player2.x -= moveSpeed * 1.5;
                        this.player2.direction = -1;
                    }
                    if (this.player2.onGround && Math.random() < 0.7) {
                        this.player2.jump();
                    }
                    console.log(`⚡ Unstuck: Direct aggressive movement!`);
                    break;
            }
        }

        // ALTERNATIVE PLATFORM FINDER - Finds different platforms when stuck
        findAlternativePlatform() {
            if (!this.mapData || !this.mapData.platforms) return null;

            const aiX = this.player2.x;
            const aiY = this.player2.y;

            // Find any reachable platform that's different from current position
            for (let platform of this.mapData.platforms) {
                const platformCenterX = platform.x + platform.width / 2;
                const distanceFromAI = Math.abs(platformCenterX - aiX);

                // Look for platforms that are reachable but not too close to current position
                if (distanceFromAI > 50 && distanceFromAI < 200 && platform.y < aiY) {
                    return {
                        x: platformCenterX,
                        y: platform.y,
                        platform: platform
                    };
                }
            }

            return null;
        }

        initializeBackgroundGrid() {
            // Initialize a basic grid system
            const grid = [];
            const gridWidth = 20;
            const gridHeight = 15;
            
            for (let y = 0; y < gridHeight; y++) {
                grid[y] = [];
                for (let x = 0; x < gridWidth; x++) {
                    grid[y][x] = {
                        color: this.mapData.bg,
                        customColor: false
                    };
                }
            }
            
            return grid;
        }

        handleGridClick(x, y) {
            if (!this.showColorPicker) return;
            
            // Convert canvas coordinates to grid coordinates
            const gridX = Math.floor(x / (this.canvas.width / 20));
            const gridY = Math.floor(y / (this.canvas.height / 15));
            
            if (gridX >= 0 && gridX < 20 && gridY >= 0 && gridY < 15) {
                this.selectedGridSquare = { x: gridX, y: gridY };
                
                // Cycle through some basic colors
                const colors = ['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF', '#00FFFF', this.mapData.bg];
                const currentColorIndex = colors.indexOf(this.backgroundGrid[gridY][gridX].color);
                const nextColorIndex = (currentColorIndex + 1) % colors.length;
                
                this.backgroundGrid[gridY][gridX].color = colors[nextColorIndex];
                this.backgroundGrid[gridY][gridX].customColor = true;
            }
        }

        gameLoop() {
            if (this.gameRunning) {
                console.log('Game loop running - updating and rendering');
                this.update();
                this.render();
                requestAnimationFrame(() => this.gameLoop());
            } else {
                console.log('Game loop stopped - gameRunning is false');
            }
        }
    }

    // Fighter class with platform collision detection
    class Fighter {
        constructor(charKey, x, y, type) {
            this.char = characters[charKey];
            this.x = x;
            this.y = y;
            // Scale character size based on screen size
            const baseSize = 50;
            const screenScale = Math.min(window.innerWidth / 800, window.innerHeight / 600);
            const scaledSize = Math.floor(baseSize * screenScale * 1.5); // 1.5x bigger than before
            this.width = Math.max(60, scaledSize); // Minimum size of 60
            this.height = Math.max(60, scaledSize);
            this.health = this.char.maxHealth;
            this.maxHealth = this.char.maxHealth;
            this.direction = type === 'player' ? 1 : -1;
            this.type = type;
            
            // Attack systems
            this.canAttack = true;
            this.attackCooldown = 0;
            this.canSpecialAttack = true;
            this.specialCooldown = 0;
            this.specialMaxCooldown = this.char.specialReloadTime || 780; // Use character's individual special reload time
            
            // Physics
            this.velocityY = 0;
            this.onGround = false;
            this.gravity = 0.8;
            this.jumpPower = -19; // Increased to -19 for even higher jumps
            
            // Animation system for walking
            this.animationFrame = 0;
            this.isMoving = false;
            this.lastX = x;

            // Item rotation animation
            this.itemRotation = 0;

            // Apply badge bonuses to base stats
            this.applyBadgeBonuses();
        }

        applyBadgeBonuses() {
            // Get equipped badges for this player
            let equippedBadges = [];
            if (gameState.gameMode === 'multiplayer') {
                if (this.type === 'player') {
                    equippedBadges = gameState.player1EquippedBadges || [];
                } else {
                    equippedBadges = gameState.player2EquippedBadges || [];
                }
            } else {
                equippedBadges = gameState.equippedBadges || [];
            }

            // Apply badge effects to base stats
            equippedBadges.forEach(badgeId => {
                const badge = badges[badgeId];
                if (!badge) return;

                switch(badge.effect) {
                    case 'health':
                        this.maxHealth += badge.value;
                        this.health += badge.value; // Also increase current health
                        break;
                    case 'speed':
                        // Speed will be applied during movement (not stored as a stat)
                        break;
                    case 'reload':
                        // Reduce reload time by percentage
                        this.char.reloadTime = Math.round(this.char.reloadTime * (1 - badge.value));
                        this.specialMaxCooldown = Math.round(this.specialMaxCooldown * (1 - badge.value));
                        break;
                    case 'warrior':
                        // Warrior badges: +damage, -health
                        this.char.damage += badge.value;
                        this.char.specialDamage += badge.value;
                        const healthLoss = badge.value * 2.5; // Lose 2.5 HP per damage point
                        this.maxHealth = Math.max(50, this.maxHealth - healthLoss);
                        this.health = Math.max(50, this.health - healthLoss);
                        break;
                    case 'tank':
                        // Tank badges: +health, -speed (speed handled in movement)
                        this.maxHealth += badge.value;
                        this.health += badge.value;
                        break;
                    case 'focus':
                        // Focus badges: faster special reload
                        const specialReduction = badge.value / 100;
                        this.specialMaxCooldown = Math.round(this.specialMaxCooldown * (1 - specialReduction));
                        break;
                }
            });

            console.log(`${this.char.name} badge bonuses applied - HP: ${this.health}/${this.maxHealth}, Reload: ${this.char.reloadTime}, Special Reload: ${this.specialMaxCooldown}`);
        }

        getMovementSpeed() {
            let baseSpeed = 4; // Base movement speed
            let speedBonus = 0;

            // Get equipped badges for speed calculation
            let equippedBadges = [];
            if (gameState.gameMode === 'multiplayer') {
                if (this.type === 'player') {
                    equippedBadges = gameState.player1EquippedBadges || [];
                } else {
                    equippedBadges = gameState.player2EquippedBadges || [];
                }
            } else {
                equippedBadges = gameState.equippedBadges || [];
            }

            // Apply badge speed bonuses
            equippedBadges.forEach(badgeId => {
                const badge = badges[badgeId];
                if (!badge) return;

                switch(badge.effect) {
                    case 'speed':
                        speedBonus += badge.value;
                        break;
                    case 'tank':
                        // Tank badges reduce speed
                        speedBonus -= Math.floor(badge.value / 20); // Lose 1 speed per 20 HP
                        break;
                }
            });

            // Apply item speed bonuses and check for frozen status
            if (this.activeEffects && this.activeEffects.length > 0) {
                this.activeEffects.forEach(effect => {
                    if (effect.type === 'speedBoost') {
                        speedBonus += (effect.data.multiplier - 1) * baseSpeed;
                    } else if (effect.type === 'frozen') {
                        // Frozen characters cannot move
                        return 0;
                    }
                });
            }

            // Check if frozen - return 0 speed if frozen
            const isFrozen = this.activeEffects && this.activeEffects.some(effect => effect.type === 'frozen');
            if (isFrozen) {
                return 0; // Cannot move when frozen
            }

            return Math.max(1, baseSpeed + speedBonus); // Minimum speed of 1
        }

        update() {
            // Don't update if dead (in boss battle mode, dead players should not move)
            if (this.health <= 0) {
                return;
            }

            // Check if character is moving for animation
            this.isMoving = Math.abs(this.x - this.lastX) > 0.1;
            if (this.isMoving && this.onGround) {
                this.animationFrame += 0.3; // Walking speed
                if (this.animationFrame >= Math.PI * 2) {
                    this.animationFrame = 0;
                }
            } else {
                this.animationFrame = 0; // Reset to idle pose when not moving
            }
            this.lastX = this.x;
            
            // Apply gravity
            this.velocityY += this.gravity;
            this.y += this.velocityY;

            // Check platform collisions
            this.checkPlatformCollisions();

            // Ground collision - only if not already on a platform
            const groundLevel = gameState.battle ? gameState.battle.groundLevel : (window.innerHeight - 120);
            if (this.y >= groundLevel && !this.onGround) {
                this.y = groundLevel;
                this.velocityY = 0;
                this.onGround = true;

                // Add dust cloud effect when landing on ground
                if (gameState.battle && gameState.battle.addVisualEffect) {
                    for (let i = 0; i < 4; i++) {
                        gameState.battle.addVisualEffect('dust_cloud',
                            this.x + this.width/2 + (Math.random() - 0.5) * this.width,
                            this.y + this.height, // At character's feet level
                            {
                                life: 30,
                                size: 6 + Math.random() * 4, // Thicker dust clouds
                                velocityX: (Math.random() - 0.5) * 2 // Horizontal spread
                            }
                        );
                    }
                }
            }

            // Keep in bounds - use dynamic screen width
            const maxX = gameState.battle ? (gameState.battle.canvas.width - this.width) : (window.innerWidth - this.width);
            this.x = Math.max(0, Math.min(this.x, maxX));

            // Update cooldowns
            if (this.attackCooldown > 0) {
                this.attackCooldown--;
            } else {
                this.canAttack = true;
            }

            if (this.specialCooldown > 0) {
                this.specialCooldown--;
                // Log every 60 frames (once per second)
                if (this.specialCooldown % 60 === 0) {
                    console.log(`⏱️ ${this.char.name} special cooldown: ${this.specialCooldown} / ${this.specialMaxCooldown} (${(this.specialCooldown/60).toFixed(1)}s remaining)`);
                }
            } else {
                if (!this.canSpecialAttack) {
                    console.log(`✅ ${this.char.name} special attack ready!`);
                }
                this.canSpecialAttack = true;
            }

            // CRITICAL FIX: Update item effects every frame!
            this.updateItemEffects();

            // Update item rotation animation
            if (this.heldItem) {
                // Initialize itemRotation if not set
                if (this.itemRotation === undefined || isNaN(this.itemRotation)) {
                    this.itemRotation = 0;
                    console.log(`${this.char.name} initialized item rotation for ${this.heldItem.name}`);
                }
                this.itemRotation += 0.15; // Rotate at constant speed (faster for visibility)
                if (this.itemRotation >= Math.PI * 2) {
                    this.itemRotation -= Math.PI * 2; // Keep it in range
                }
            } else {
                // Reset rotation when no item
                this.itemRotation = 0;
            }
        }

        checkPlatformCollisions() {
            // Reset ground state first
            this.onGround = false;

            // Check platform collisions - only from above, allow horizontal movement
            if (gameState && gameState.battle && gameState.battle.mapData && gameState.battle.mapData.platforms) {
                gameState.battle.mapData.platforms.forEach(platform => {
                    // Precise platform collision - character must overlap platform horizontally
                    if (this.x < platform.x + platform.width && // Character left edge before platform right edge
                        this.x + this.width > platform.x && // Character right edge after platform left edge
                        this.y + this.height >= platform.y && // Character bottom at or below platform top
                        this.y + this.height <= platform.y + platform.height + 5 && // Character bottom within platform (small tolerance)
                        this.velocityY >= 0) { // Must be falling down or stationary

                        // Land with feet exactly on the platform surface
                        this.y = platform.y - this.height;
                        this.velocityY = 0;
                        this.onGround = true;

                        // Add dust cloud effect when landing
                        if (gameState.battle && gameState.battle.addVisualEffect) {
                            for (let i = 0; i < 3; i++) {
                                gameState.battle.addVisualEffect('dust_cloud',
                                    this.x + this.width/2 + (Math.random() - 0.5) * this.width,
                                    this.y + this.height, // At character's feet level
                                    {
                                        life: 25,
                                        size: 5 + Math.random() * 3, // Thicker dust clouds
                                        velocityX: (Math.random() - 0.5) * 1.5 // Horizontal spread
                                    }
                                );
                            }
                        }
                    }
                });
            }

            // Check obstacle collisions - only if not already on a platform
            if (!this.onGround && gameState && gameState.battle && gameState.battle.mapData && gameState.battle.mapData.obstacles) {
                gameState.battle.mapData.obstacles.forEach(obstacle => {
                    // Very forgiving collision detection for obstacles
                    if (this.x + this.width > obstacle.x - 10 && // Extra horizontal tolerance
                        this.x < obstacle.x + obstacle.width + 10 && // Extra horizontal tolerance
                        this.y + this.height >= obstacle.y - 5 && // Small upward tolerance
                        this.y + this.height <= obstacle.y + obstacle.height + 40 && // Large downward tolerance
                        this.velocityY >= -2) { // Allow slight upward velocity

                        // Land on top of the obstacle
                        this.y = obstacle.y - this.height;
                        this.velocityY = 0;
                        this.onGround = true;
                    }
                });
            }
        }

        jump() {
            // Check if frozen - cannot jump when frozen
            const isFrozen = this.activeEffects && this.activeEffects.some(effect => effect.type === 'frozen');
            if (isFrozen) {
                return; // Cannot jump when frozen
            }

            if (this.onGround) {
                this.velocityY = this.jumpPower;
                this.onGround = false;
            }
        }

        draw(ctx) {
            // Don't draw if dead (in boss battle mode, show dead players as transparent)
            if (this.health <= 0) {
                // Draw dead player as semi-transparent
                ctx.globalAlpha = 0.3;
            }

            const centerX = this.x + this.width / 2;
            const centerY = this.y + this.height / 2;
            
            // Draw special attack circle around character body - NEW FEATURE!
            const circleRadius = 35;
            ctx.lineWidth = 3;
            ctx.strokeStyle = this.canSpecialAttack ? '#00FF00' : '#FF4444'; // Green when ready, red when loading
            ctx.shadowColor = this.canSpecialAttack ? '#00FF00' : '#FF4444';
            ctx.shadowBlur = 10;
            ctx.beginPath();
            ctx.arc(centerX, centerY, circleRadius, 0, Math.PI * 2);
            ctx.stroke();
            ctx.shadowBlur = 0;
            
            // Draw stick figure
            ctx.strokeStyle = this.char.color;
            ctx.lineWidth = 4;
            ctx.lineCap = 'round';
            
            // Body
            ctx.beginPath();
            ctx.moveTo(centerX, centerY - 10);
            ctx.lineTo(centerX, centerY + 20);
            ctx.stroke();
            
            // ANIMATED ARMS - Walking, Jumping, and Falling!
            this.drawAnimatedArms(ctx, centerX, centerY);
            
            // ANIMATED LEGS - Walking and Jumping!
            this.drawAnimatedLegs(ctx, centerX, centerY);
            
            // Draw emoji head (only if not flying as special attack projectile)
            this.drawCharacterHead(ctx, centerX, centerY);
            
            // FIXED: Draw health bars and reload bars!
            this.drawHealthAndBars(ctx, centerX, centerY);

            // Draw status effect indicators
            this.drawStatusEffects(ctx, centerX, centerY);

            // Draw held item rotating around player
            this.drawHeldItem(ctx, centerX, centerY);
        }

        drawHeldItem(ctx, centerX, centerY) {
            if (!this.heldItem) {
                return;
            }

            // Initialize itemRotation if not set
            if (this.itemRotation === undefined || isNaN(this.itemRotation)) {
                this.itemRotation = 0;
            }

            // Debug: Log once per second
            if (!this.lastDrawLog || Date.now() - this.lastDrawLog > 1000) {
                console.log(`Drawing ${this.char.name}'s held item: ${this.heldItem.name} ${this.heldItem.emoji}, rotation: ${this.itemRotation.toFixed(2)}`);
                this.lastDrawLog = Date.now();
            }

            // Calculate hand position based on current animation state
            let handX, handY;

            if (!this.onGround) {
                // JUMPING/FALLING HAND POSITIONS
                if (this.velocityY < 0) {
                    // GOING UP (jumping) - Hand follows arm going down
                    const jumpProgress = Math.abs(this.velocityY) / 19;
                    const armDownAmount = Math.min(jumpProgress * 20, 20);
                    handX = centerX + (this.direction > 0 ? 15 : -15);
                    handY = centerY + 15 + armDownAmount;
                } else {
                    // FALLING - Hand follows wiggling arms that are up
                    const wiggleTime = Date.now() * 0.01;
                    const armWiggle = this.direction > 0 ? Math.sin(wiggleTime + 1) * 5 : Math.sin(wiggleTime) * 5;
                    handX = centerX + (this.direction > 0 ? 20 : -20) + armWiggle;
                    handY = centerY - 25;
                }
            } else if (this.isMoving) {
                // WALKING ANIMATION - Hand follows pumping arm motion
                const armPump = this.direction > 0 ?
                    Math.sin(this.animationFrame + Math.PI) * 10 :
                    Math.sin(this.animationFrame) * 10;
                handX = centerX + (this.direction > 0 ? 12 : -12) + armPump;
                handY = centerY + 12;
            } else {
                // IDLE - Hand at T-pose position
                handX = centerX + (this.direction > 0 ? 20 : -20);
                handY = centerY;
            }

            ctx.save();

            // Draw item at edge of hand (offset beyond hand position)
            // Offset by 15 pixels in the direction the character is facing
            const itemOffsetX = this.direction > 0 ? 15 : -15;
            const itemX = handX + itemOffsetX;
            const itemY = handY;

            ctx.shadowColor = '#FFD700';
            ctx.shadowBlur = 15;
            ctx.font = 'bold 28px Arial';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillStyle = '#FFFFFF';
            ctx.fillText(this.heldItem.emoji, itemX, itemY);

            ctx.restore();
        }

        drawStatusEffects(ctx, centerX, centerY) {
            if (!this.activeEffects || this.activeEffects.length === 0) return;

            // Draw status effect icons above the character
            let iconX = centerX - (this.activeEffects.length * 15) / 2;
            const iconY = this.y - 80;

            this.activeEffects.forEach((effect, index) => {
                // Background circle for effect icon
                ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
                ctx.beginPath();
                ctx.arc(iconX, iconY, 12, 0, Math.PI * 2);
                ctx.fill();

                // Effect icon based on type
                ctx.font = '16px Arial';
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';

                let icon = '?';
                let color = '#FFFFFF';

                switch(effect.type) {
                    case 'damageBoost':
                        icon = '⚔️';
                        color = '#FF4444';
                        break;
                    case 'defenseBoost':
                        icon = '🛡️';
                        color = '#4444FF';
                        break;
                    case 'speedBoost':
                        icon = '💨';
                        color = '#44FF44';
                        break;
                    case 'poisoned':
                        icon = '☢️';
                        color = '#44FF44';
                        break;
                    case 'frozen':
                        icon = '❄️';
                        color = '#00FFFF';
                        break;
                    case 'teleport':
                        icon = '🌀';
                        color = '#9932CC';
                        break;
                    case 'timeStop':
                        icon = '⏰';
                        color = '#FFFF44';
                        break;
                    case 'heal':
                        icon = '💚';
                        color = '#44FF44';
                        break;
                }

                ctx.fillStyle = color;
                ctx.fillText(icon, iconX, iconY);

                // Duration indicator (small bar below icon)
                const durationPercent = effect.timeLeft / (effect.duration || 1000);
                ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
                ctx.fillRect(iconX - 8, iconY + 15, 16 * durationPercent, 2);

                iconX += 30;
            });
        }

        drawAnimatedArms(ctx, centerX, centerY) {
            ctx.strokeStyle = this.char.color;
            ctx.lineWidth = 4;
            ctx.lineCap = 'round';

            if (!this.onGround) {
                // JUMPING/FALLING ARM ANIMATIONS
                if (this.velocityY < 0) {
                    // GOING UP (jumping) - Elbows bend slightly, arms go all the way down then straighten
                    const jumpProgress = Math.abs(this.velocityY) / 19; // Updated for new jump power
                    const armDownAmount = Math.min(jumpProgress * 20, 20);
                    
                    ctx.beginPath();
                    // Left arm - bent elbow, going down
                    ctx.moveTo(centerX, centerY);
                    ctx.lineTo(centerX - 8, centerY + 5 + armDownAmount);
                    ctx.lineTo(centerX - 15, centerY + 15 + armDownAmount);
                    
                    // Right arm - bent elbow, going down
                    ctx.moveTo(centerX, centerY);
                    ctx.lineTo(centerX + 8, centerY + 5 + armDownAmount);
                    ctx.lineTo(centerX + 15, centerY + 15 + armDownAmount);
                    ctx.stroke();
                } else {
                    // FALLING - Arms go up and wiggle until hitting ground
                    const wiggleTime = Date.now() * 0.01;
                    const leftWiggle = Math.sin(wiggleTime) * 5;
                    const rightWiggle = Math.sin(wiggleTime + 1) * 5;
                    
                    ctx.beginPath();
                    // Left arm - up and wiggling
                    ctx.moveTo(centerX, centerY);
                    ctx.lineTo(centerX - 12 + leftWiggle, centerY - 15);
                    ctx.lineTo(centerX - 20 + leftWiggle, centerY - 25);
                    
                    // Right arm - up and wiggling
                    ctx.moveTo(centerX, centerY);
                    ctx.lineTo(centerX + 12 + rightWiggle, centerY - 15);
                    ctx.lineTo(centerX + 20 + rightWiggle, centerY - 25);
                    ctx.stroke();
                }
            } else if (this.isMoving) {
                // WALKING ANIMATION - Elbow bends and straightens in pumping motion
                const leftArmPump = Math.sin(this.animationFrame) * 10;
                const rightArmPump = Math.sin(this.animationFrame + Math.PI) * 10;
                
                ctx.beginPath();
                // Left arm - pumping motion (opposite to legs)
                ctx.moveTo(centerX, centerY);
                ctx.lineTo(centerX - 8, centerY + 5);
                ctx.lineTo(centerX - 12 + leftArmPump, centerY + 12);
                
                // Right arm - pumping opposite to left
                ctx.moveTo(centerX, centerY);
                ctx.lineTo(centerX + 8, centerY + 5);
                ctx.lineTo(centerX + 12 + rightArmPump, centerY + 12);
                ctx.stroke();
            } else {
                // IDLE ANIMATION - Classic stickman T-pose with arms straight out at 90 degrees
                ctx.beginPath();
                ctx.moveTo(centerX, centerY);
                ctx.lineTo(centerX - 20, centerY);
                ctx.moveTo(centerX, centerY);
                ctx.lineTo(centerX + 20, centerY);
                ctx.stroke();
            }
            
            // ITEM IN HAND SYSTEM! - Show held item instead of mini emoji when holding an item
            let handX, handY;
            
            // Calculate actual hand position based on current animation state
            if (!this.onGround) {
                // JUMPING/FALLING HAND POSITIONS
                if (this.velocityY < 0) {
                    // GOING UP (jumping) - Hand follows arm going down
                    const jumpProgress = Math.abs(this.velocityY) / 19; // Updated for new jump power
                    const armDownAmount = Math.min(jumpProgress * 20, 20);
                    
                    // Hand is at the end of the extended arm
                    handX = centerX + (this.direction > 0 ? 15 : -15);
                    handY = centerY + 15 + armDownAmount;
                } else {
                    // FALLING - Hand follows wiggling arms that are up
                    const wiggleTime = Date.now() * 0.01;
                    const armWiggle = this.direction > 0 ? Math.sin(wiggleTime + 1) * 5 : Math.sin(wiggleTime) * 5;
                    
                    // Hand is at the end of the raised, wiggling arm
                    handX = centerX + (this.direction > 0 ? 20 : -20) + armWiggle;
                    handY = centerY - 25;
                }
            } else if (this.isMoving) {
                // WALKING ANIMATION - Hand follows pumping arm motion
                const armPump = this.direction > 0 ? 
                    Math.sin(this.animationFrame + Math.PI) * 10 : // Right arm (opposite phase)
                    Math.sin(this.animationFrame) * 10; // Left arm
                
                // Hand is at the end of the pumping arm
                handX = centerX + (this.direction > 0 ? 12 : -12) + armPump;
                handY = centerY + 12;
            } else {
                // IDLE ANIMATION - Hand at normal straight arm position
                handX = centerX + (this.direction > 0 ? 12 : -12);
                handY = centerY;
            }
            
            // Draw what's in the hand
            ctx.font = 'bold 12px Arial';
            ctx.fillStyle = '#ffffff';
            ctx.textAlign = 'center';
            
            if (this.heldItem) {
                // HOLDING AN ITEM - Show item emoji instead of character emoji
                ctx.shadowColor = '#FFD700'; // Golden glow for held items
                ctx.shadowBlur = 8;
                ctx.fillText(this.heldItem.emoji, handX, handY + 3);
                ctx.shadowBlur = 0;
            } else if (this.canAttack) {
                // NOT HOLDING ITEM BUT CAN ATTACK - Show mini character emoji (normal "bullet")
                ctx.shadowColor = this.char.color;
                ctx.shadowBlur = 5;
                ctx.fillText(this.char.emoji, handX, handY + 3);
                ctx.shadowBlur = 0;
            }
            // If can't attack and no item, show nothing in hand
            
            ctx.textAlign = 'left';
        }

        drawAnimatedLegs(ctx, centerX, centerY) {
            ctx.strokeStyle = this.char.color;
            ctx.lineWidth = 4;
            ctx.lineCap = 'round';
            
            if (!this.onGround) {
                // JUMPING ANIMATION - Both legs bend then push down
                const jumpProgress = Math.abs(this.velocityY) / 19; // Updated for new jump power
                
                if (this.velocityY < 0) {
                    // Going up - legs bend and push down
                    const bendAmount = Math.min(jumpProgress * 15, 15);
                    ctx.beginPath();
                    // Left leg - bent up
                    ctx.moveTo(centerX, centerY + 20);
                    ctx.lineTo(centerX - 8, centerY + 20 + bendAmount);
                    ctx.lineTo(centerX - 12, centerY + 30 - bendAmount);
                    // Right leg - bent up  
                    ctx.moveTo(centerX, centerY + 20);
                    ctx.lineTo(centerX + 8, centerY + 20 + bendAmount);
                    ctx.lineTo(centerX + 12, centerY + 30 - bendAmount);
                    ctx.stroke();
                } else {
                    // Falling down - legs extend down
                    ctx.beginPath();
                    ctx.moveTo(centerX, centerY + 20);
                    ctx.lineTo(centerX - 10, centerY + 35);
                    ctx.moveTo(centerX, centerY + 20);
                    ctx.lineTo(centerX + 10, centerY + 35);
                    ctx.stroke();
                }
            } else if (this.isMoving) {
                // WALKING ANIMATION - Alternating leg positions
                const leftLegOffset = Math.sin(this.animationFrame) * 8;
                const rightLegOffset = Math.sin(this.animationFrame + Math.PI) * 8;
                
                ctx.beginPath();
                // Left leg - moves back and forth
                ctx.moveTo(centerX, centerY + 20);
                ctx.lineTo(centerX - 10 + leftLegOffset, centerY + 35);
                // Right leg - moves opposite to left leg
                ctx.moveTo(centerX, centerY + 20);
                ctx.lineTo(centerX + 10 + rightLegOffset, centerY + 35);
                ctx.stroke();
            } else {
                // IDLE ANIMATION - Normal standing legs
                ctx.beginPath();
                ctx.moveTo(centerX, centerY + 20);
                ctx.lineTo(centerX - 10, centerY + 35);
                ctx.moveTo(centerX, centerY + 20);
                ctx.lineTo(centerX + 10, centerY + 35);
                ctx.stroke();
            }
        }

        drawCharacterHead(ctx, centerX, centerY) {
            // Draw emoji head (only if not flying as special attack projectile)
            if (!this.headFlying) {
                // Scale font size based on character size
                const screenScale = Math.min(window.innerWidth / 800, window.innerHeight / 600);
                const fontSize = Math.floor(24 * screenScale * 1.5); // 1.5x bigger
                const minFontSize = 30; // Minimum font size for visibility
                const finalFontSize = Math.max(minFontSize, fontSize);

                ctx.font = `bold ${finalFontSize}px Arial`;
                ctx.fillStyle = '#ffffff';
                ctx.textAlign = 'center';
                ctx.fillText(this.char.emoji, centerX, centerY - 15);
                ctx.textAlign = 'left';
            }

            // DRAW EQUIPPED ADDONS IN BATTLE
            const playerName = this === gameState.battle?.player1 ? 'player1' : 'player2';

            // Get character key for this player
            const charKey = playerName === 'player1' ? gameState.selectedCharacter : gameState.selectedPlayer2Character;

            // Initialize character equipped addons storage if it doesn't exist
            if (!gameState.characterEquippedAddons) {
                gameState.characterEquippedAddons = {};
            }

            // Get equipped addons for this specific character
            const equippedAddons = charKey && gameState.characterEquippedAddons[charKey]
                ? gameState.characterEquippedAddons[charKey]
                : null;

            if (equippedAddons) {
                const shoeKey = equippedAddons.shoes;
                const pantsKey = equippedAddons.pants;
                const shirtKey = equippedAddons.shirt;
                const hatKey = equippedAddons.hat;

                // Extract country/sport/theme from keys
                const getCountrySport = (key) => {
                    if (!key) return { country: null, sport: null };
                    const country = key.includes('_') ? key.split('_')[1] : null;
                    const sports = ['soccer', 'basketball', 'baseball', 'football', 'hockey', 'tennis', 'golf', 'boxing', 'racing', 'cycling'];
                    const themes = ['wizard', 'knight', 'ninja', 'chef', 'doctor', 'pilot', 'winter', 'summer', '80s', '90s', 'army', 'navy'];
                    const sport = sports.find(s => key.includes(s)) || themes.find(t => key.includes(t));
                    return { country, sport };
                };

                // Calculate animated limb positions based on character state
                let leftFootX, leftFootY, rightFootX, rightFootY;
                let leftHandX, leftHandY, rightHandX, rightHandY;
                let leftShoulderX, leftShoulderY, rightShoulderX, rightShoulderY;

                if (!this.onGround) {
                    // JUMPING/FALLING
                    const jumpProgress = Math.abs(this.velocityY) / 19;

                    if (this.velocityY < 0) {
                        // Going up - legs bent
                        const bendAmount = Math.min(jumpProgress * 15, 15);
                        leftFootX = centerX - 12;
                        leftFootY = centerY + 30 - bendAmount;
                        rightFootX = centerX + 12;
                        rightFootY = centerY + 30 - bendAmount;

                        // Arms down
                        const armDownAmount = Math.min(jumpProgress * 20, 20);
                        leftHandX = centerX - 15;
                        leftHandY = centerY + 15 + armDownAmount;
                        rightHandX = centerX + 15;
                        rightHandY = centerY + 15 + armDownAmount;
                    } else {
                        // Falling - legs extended
                        leftFootX = centerX - 10;
                        leftFootY = centerY + 35;
                        rightFootX = centerX + 10;
                        rightFootY = centerY + 35;

                        // Arms up and wiggling
                        const wiggleTime = Date.now() * 0.01;
                        leftHandX = centerX - 20 + Math.sin(wiggleTime) * 5;
                        leftHandY = centerY - 25;
                        rightHandX = centerX + 20 + Math.sin(wiggleTime + 1) * 5;
                        rightHandY = centerY - 25;
                    }
                } else if (this.isMoving) {
                    // WALKING - alternating legs and pumping arms
                    const leftLegOffset = Math.sin(this.animationFrame) * 8;
                    const rightLegOffset = Math.sin(this.animationFrame + Math.PI) * 8;

                    leftFootX = centerX - 10 + leftLegOffset;
                    leftFootY = centerY + 35;
                    rightFootX = centerX + 10 + rightLegOffset;
                    rightFootY = centerY + 35;

                    // Arms pump opposite to legs
                    const leftArmPump = Math.sin(this.animationFrame) * 10;
                    const rightArmPump = Math.sin(this.animationFrame + Math.PI) * 10;

                    leftHandX = centerX - 12 + leftArmPump;
                    leftHandY = centerY + 12;
                    rightHandX = centerX + 12 + rightArmPump;
                    rightHandY = centerY + 12;
                } else {
                    // IDLE - standing still with classic T-pose
                    leftFootX = centerX - 10;
                    leftFootY = centerY + 35;
                    rightFootX = centerX + 10;
                    rightFootY = centerY + 35;

                    // Arms straight out at 90 degrees (classic stickman)
                    leftHandX = centerX - 20;
                    leftHandY = centerY;
                    rightHandX = centerX + 20;
                    rightHandY = centerY;
                }

                // Shoulders - adjust based on animation state for better shirt rendering
                if (this.isMoving || !this.onGround) {
                    // Moving/jumping - shoulders at normal position
                    leftShoulderX = centerX - 15;
                    leftShoulderY = centerY - 10;
                    rightShoulderX = centerX + 15;
                    rightShoulderY = centerY - 10;
                } else {
                    // Idle T-pose - shoulders at body center for proper sleeve rendering
                    leftShoulderX = centerX - 5;
                    leftShoulderY = centerY - 5;
                    rightShoulderX = centerX + 5;
                    rightShoulderY = centerY - 5;
                }

                // Draw SHOES on animated feet
                if (shoeKey && addons[shoeKey]) {
                    const { country, sport } = getCountrySport(shoeKey);
                    // Left shoe follows left foot
                    drawShoe(ctx, leftFootX - 5, leftFootY - 3, 10, 6, addons[shoeKey].color, country, sport);
                    // Right shoe follows right foot
                    drawShoe(ctx, rightFootX - 5, rightFootY - 3, 10, 6, addons[shoeKey].color, country, sport);
                }

                // Draw PANTS on animated legs
                if (pantsKey && addons[pantsKey]) {
                    const { country, sport } = getCountrySport(pantsKey);
                    drawPants(ctx, centerX, centerY + 20, leftFootX, leftFootY - 3, rightFootX, rightFootY - 3, 8, addons[pantsKey].color, country, sport);
                }

                // Draw SHIRT on animated body and arms (shirt will cover the arms) - thinner
                if (shirtKey && addons[shirtKey]) {
                    const { country, sport } = getCountrySport(shirtKey);
                    drawShirt(ctx, centerX, centerY - 20, centerY + 20, leftShoulderX, leftShoulderY, rightShoulderX, rightShoulderY, leftHandX, leftHandY, rightHandX, rightHandY, 9, addons[shirtKey].color, country, sport);
                }

                // Draw HAT on top of head (not inside it) - lower in battle
                if (hatKey && addons[hatKey]) {
                    const { country, sport } = getCountrySport(hatKey);
                    drawHat(ctx, centerX, centerY - 45, 15, 12, addons[hatKey].color, country, sport);
                }
            }

            // FLAG CAPTURE MODE - Draw flag in hand if holding it
            if (gameState.battle && gameState.battle.isFlagCaptureMode) {
                const flagPlayerName = this === gameState.battle.player1 ? 'player1' : 'player2';
                if (gameState.flagCapture.flagHolder === flagPlayerName) {
                    // Draw flag in player's hand
                    ctx.font = '25px Arial';
                    ctx.textAlign = 'center';
                    const flagX = centerX + (this.direction > 0 ? 25 : -25); // Flag in front of player
                    const flagY = centerY + 5; // Slightly below center
                    ctx.fillText('🏁', flagX, flagY);
                    ctx.textAlign = 'left';
                }
            }
        }

        drawHealthAndBars(ctx, centerX, centerY) {
            // Draw health bar with HP numbers - WORKING!
            const healthBarY = this.y - 50; // Moved up to make room for circle
            
            // Health bar background
            ctx.fillStyle = '#333';
            ctx.fillRect(this.x, healthBarY, this.width, 8);
            
            // Health bar fill
            const healthPercent = this.health / this.maxHealth;
            ctx.fillStyle = healthPercent > 0.5 ? '#4caf50' : healthPercent > 0.25 ? '#ff9800' : '#f44336';
            ctx.fillRect(this.x, healthBarY, this.width * healthPercent, 8);
            
            // HP numbers - WORKING AND VISIBLE! Scale with screen size
            const screenScale = Math.min(window.innerWidth / 800, window.innerHeight / 600);
            const hpFontSize = Math.floor(14 * screenScale * 1.5); // 1.5x bigger
            const minHpFontSize = 18; // Minimum font size for visibility
            const finalHpFontSize = Math.max(minHpFontSize, hpFontSize);

            ctx.fillStyle = '#FFFFFF';
            ctx.font = `bold ${finalHpFontSize}px Arial`;
            ctx.textAlign = 'center';
            ctx.strokeStyle = '#000000';
            ctx.lineWidth = 2;
            ctx.strokeText(`${Math.max(0, Math.floor(this.health))}/${this.maxHealth}`, centerX, healthBarY - 5);
            ctx.fillText(`${Math.max(0, Math.floor(this.health))}/${this.maxHealth}`, centerX, healthBarY - 5);
            ctx.textAlign = 'left';
            
            // Normal attack cooldown bar
            if (!this.canAttack) {
                const attackBarY = this.y + this.height + 8;
                ctx.fillStyle = '#333';
                ctx.fillRect(this.x, attackBarY, this.width, 4);
                ctx.fillStyle = '#FFD700';
                const attackProgress = 1 - (this.attackCooldown / this.char.reloadTime);
                ctx.fillRect(this.x, attackBarY, this.width * attackProgress, 4);
            }
            
            // No special attack info displayed at bottom - only circle shows status

            // Reset alpha if it was changed for dead players
            ctx.globalAlpha = 1.0;
        }

        calculateActualDamage(baseDamage, attackType = 'normal') {
            let finalDamage = baseDamage;
            let damageMultiplier = 1.0;
            let flatDamageBonus = 0;
            let isCritical = false;

            // 1. ITEM EFFECTS - Apply temporary item bonuses
            if (this.activeEffects && this.activeEffects.length > 0) {
                this.activeEffects.forEach(effect => {
                    switch(effect.type) {
                        case 'damageBoost':
                            flatDamageBonus += effect.data.amount || 0;
                            break;
                        case 'powerBoost':
                            damageMultiplier *= effect.data.multiplier || 1.0;
                            break;
                        case 'magicBoost':
                            // Magic damage boost
                            flatDamageBonus += effect.data.amount || 0;
                            break;
                        case 'heavyWeapon':
                            // Heavy weapon damage boost
                            flatDamageBonus += effect.data.damage || 0;
                            break;
                        case 'allPowers':
                            // All powers activated - massive boost
                            damageMultiplier *= 2.0;
                            flatDamageBonus += 25;
                            break;
                        case 'berserk':
                            // Berserk mode when low health
                            if (this.health / this.maxHealth < 0.5) {
                                damageMultiplier *= 1.5;
                            }
                            break;
                    }
                });
            }

            // 2. BADGE EFFECTS - Apply equipped badge bonuses
            let equippedBadges = [];
            if (gameState.gameMode === 'multiplayer') {
                if (this.type === 'player') {
                    equippedBadges = gameState.player1EquippedBadges || [];
                } else {
                    equippedBadges = gameState.player2EquippedBadges || [];
                }
            } else {
                equippedBadges = gameState.equippedBadges || [];
            }

            let criticalChance = 0;
            let criticalMultiplier = 1.5; // Base critical multiplier

            equippedBadges.forEach(badgeId => {
                const badge = badges[badgeId];
                if (!badge) return;

                switch(badge.effect) {
                    case 'damage':
                        if (attackType === 'normal') {
                            flatDamageBonus += badge.value;
                        }
                        break;
                    case 'special_damage':
                        if (attackType === 'special') {
                            flatDamageBonus += badge.value;
                        }
                        break;
                    case 'critical':
                        criticalChance += badge.value;
                        break;
                    case 'assassin':
                        criticalMultiplier += (badge.value / 100); // Convert percentage to multiplier
                        break;
                    case 'berserk':
                        if (this.health / this.maxHealth < 0.5) {
                            damageMultiplier *= (1 + badge.value / 100);
                        }
                        break;
                    case 'hunter':
                        // Bonus damage vs high HP enemies
                        const enemy = this.type === 'player' ? gameState.battle.player2 : gameState.battle.player1;
                        if (enemy && enemy.health / enemy.maxHealth > 0.75) {
                            damageMultiplier *= (1 + badge.value / 100);
                        }
                        break;
                    case 'warrior':
                        flatDamageBonus += badge.value;
                        break;
                    case 'elementalist':
                        if (attackType === 'special') {
                            flatDamageBonus += badge.value;
                        }
                        break;
                }
            });

            // 3. CRITICAL HIT CALCULATION
            if (criticalChance > 0 && Math.random() * 100 < criticalChance) {
                isCritical = true;
                damageMultiplier *= criticalMultiplier;
            }

            // 4. APPLY ALL MODIFIERS
            finalDamage = (baseDamage + flatDamageBonus) * damageMultiplier;

            // 5. ROUND TO NEAREST INTEGER
            finalDamage = Math.round(finalDamage);

            // 6. LOG DAMAGE CALCULATION FOR DEBUGGING
            if (flatDamageBonus > 0 || damageMultiplier !== 1.0 || isCritical) {
                console.log(`${this.char.name} ${attackType} damage calculation:
                    Base: ${baseDamage}
                    Flat Bonus: +${flatDamageBonus}
                    Multiplier: x${damageMultiplier.toFixed(2)}
                    Critical: ${isCritical ? 'YES' : 'NO'}
                    Final: ${finalDamage}`);
            }

            return finalDamage;
        }

        normalAttack() {
            if (!this.canAttack) return;

            // Don't attack if dead
            if (this.health <= 0) return;

            // Check if frozen - cannot attack when frozen
            const isFrozen = this.activeEffects && this.activeEffects.some(effect => effect.type === 'frozen');
            if (isFrozen) {
                console.log(`${this.char.name} cannot attack while frozen!`);
                return;
            }

            // FLAG CAPTURE MODE - Cannot attack while holding flag
            if (gameState.battle && gameState.battle.isFlagCaptureMode) {
                const playerName = this === gameState.battle.player1 ? 'player1' : 'player2';
                if (gameState.flagCapture.flagHolder === playerName) {
                    console.log(`${this.char.name} cannot attack while holding the flag!`);
                    return;
                }
            }

            // Calculate actual damage including item effects
            const baseDamage = this.char.damage;
            const actualDamage = this.calculateActualDamage(baseDamage, 'normal');

            const projectile = new Projectile(
                this.x + (this.direction > 0 ? this.width : 0),
                this.y + this.height / 2,
                this.direction * 8,
                actualDamage,
                this.char.color,
                this
            );

            gameState.battle.projectiles.push(projectile);
            this.canAttack = false;
            this.attackCooldown = this.char.reloadTime;

            // Add screen shake for attack
            if (gameState.battle) {
                gameState.battle.addScreenShake(3, 10);
            }

            console.log(`${this.char.name} normal attack: ${actualDamage} damage (base: ${baseDamage})`);
        }

        // Method to handle lifesteal healing when this player deals damage
        applyLifesteal(damageDealt) {
            let totalLifesteal = 0;

            // Get equipped badges for lifesteal calculation
            let equippedBadges = [];
            if (gameState.gameMode === 'multiplayer') {
                if (this.type === 'player') {
                    equippedBadges = gameState.player1EquippedBadges || [];
                } else {
                    equippedBadges = gameState.player2EquippedBadges || [];
                }
            } else {
                equippedBadges = gameState.equippedBadges || [];
            }

            // Calculate lifesteal percentage from badges
            equippedBadges.forEach(badgeId => {
                const badge = badges[badgeId];
                if (badge && badge.effect === 'lifesteal') {
                    totalLifesteal += badge.value;
                }
            });

            // Apply lifesteal healing
            if (totalLifesteal > 0) {
                const healAmount = Math.round(damageDealt * (totalLifesteal / 100));
                const actualHeal = Math.min(healAmount, this.maxHealth - this.health);

                if (actualHeal > 0) {
                    this.health += actualHeal;
                    console.log(`🩸 ${this.char.name} lifesteal: +${actualHeal} HP (${totalLifesteal}% of ${damageDealt} damage)`);
                }
            }
        }

        specialAttack() {
            console.log(`🎯 specialAttack called for ${this.char.name}`);
            console.log(`   canSpecialAttack: ${this.canSpecialAttack}`);
            console.log(`   specialCooldown: ${this.specialCooldown}`);
            console.log(`   specialMaxCooldown: ${this.specialMaxCooldown}`);
            console.log(`   headFlying: ${this.headFlying}`);

            if (!this.canSpecialAttack) {
                console.log(`   ❌ Cannot special attack - on cooldown`);
                return;
            }
            if (this.headFlying) {
                console.log(`   ❌ Cannot special attack - head is flying`);
                return; // Prevent multiple head projectiles
            }

            // Don't attack if dead
            if (this.health <= 0) return;

            // Check if frozen - cannot attack when frozen
            const isFrozen = this.activeEffects && this.activeEffects.some(effect => effect.type === 'frozen');
            if (isFrozen) {
                console.log(`${this.char.name} cannot special attack while frozen!`);
                return;
            }

            // FLAG CAPTURE MODE - Cannot attack while holding flag
            if (gameState.battle && gameState.battle.isFlagCaptureMode) {
                const playerName = this === gameState.battle.player1 ? 'player1' : 'player2';
                if (gameState.flagCapture.flagHolder === playerName) {
                    console.log(`${this.char.name} cannot special attack while holding the flag!`);
                    return;
                }
            }

            // HEAD EMOJI SPECIAL ATTACK! - The head flies off as a spinning projectile
            this.headFlying = true; // Flag to hide head emoji while it's flying

            // Calculate actual special damage including item effects and badges
            const baseDamage = this.char.specialDamage;
            const actualDamage = this.calculateActualDamage(baseDamage, 'special');

            // Determine target and direction
            const target = this === gameState.battle.player1 ? gameState.battle.player2 : gameState.battle.player1;
            const directionToTarget = target.x > this.x ? 1 : -1;

            // Calculate head starting position (exactly from character's head)
            const centerX = this.x + this.width / 2;
            const centerY = this.y + this.height / 2;
            const headStartX = centerX;
            const headStartY = centerY - 15; // Exact same position as drawCharacterHead

            // Create head projectile that spins toward target
            const headProjectile = new HeadProjectile(
                headStartX,
                headStartY,
                directionToTarget * 12, // Faster than normal projectiles, aimed at target
                actualDamage,
                this.char.color,
                this,
                this.char.emoji // Pass the head emoji
            );

            gameState.battle.projectiles.push(headProjectile);

            this.canSpecialAttack = false;
            this.specialCooldown = this.specialMaxCooldown;

            // Track special attack usage for challenges (only for Player 1)
            if (this === gameState.battle?.player1) {
                trackChallengeProgress('special_used');

                // Track character-specific special uses
                const charKey = gameState.selectedCharacter;
                if (charKey) {
                    // Initialize stats if they don't exist
                    if (!gameState.characterStats) {
                        gameState.characterStats = {};
                    }
                    if (!gameState.characterStats[charKey]) {
                        gameState.characterStats[charKey] = {
                            wins: 0,
                            losses: 0,
                            totalDamageDealt: 0,
                            totalDamageTaken: 0,
                            fastestWin: null,
                            specialsUsed: 0,
                            perfectWins: 0,
                            comebackWins: 0
                        };
                    }
                    gameState.characterStats[charKey].specialsUsed++;
                    console.log(`🌟 Special used! Total: ${gameState.characterStats[charKey].specialsUsed}`);
                }
            }

            // Add stronger screen shake for special attack
            if (gameState.battle) {
                gameState.battle.addScreenShake(8, 25);
            }

            console.log(`${this.char.name} HEAD SPECIAL ATTACK: ${actualDamage} damage (base: ${baseDamage}) - HEAD FLIES OFF!`);
        }

        takeDamage(incomingDamage, attacker = null) {
            let finalDamage = incomingDamage;
            let flatReduction = 0;
            let percentageReduction = 0;
            let dodged = false;

            // 1. DODGE CALCULATION - Check if attack is dodged
            let dodgeChance = 0;

            // Get equipped badges for dodge calculation
            let equippedBadges = [];
            if (gameState.gameMode === 'multiplayer') {
                if (this.type === 'player') {
                    equippedBadges = gameState.player1EquippedBadges || [];
                } else {
                    equippedBadges = gameState.player2EquippedBadges || [];
                }
            } else {
                equippedBadges = gameState.equippedBadges || [];
            }

            // Calculate dodge chance from badges
            equippedBadges.forEach(badgeId => {
                const badge = badges[badgeId];
                if (badge && badge.effect === 'dodge') {
                    dodgeChance += badge.value;
                }
            });

            // Check for dodge
            if (dodgeChance > 0 && Math.random() * 100 < dodgeChance) {
                dodged = true;
                console.log(`💨 ${this.char.name} DODGED the attack! (${dodgeChance}% chance)`);
                return; // No damage taken
            }

            // 2. DEFENSE CALCULATION - Apply damage reduction

            // Badge-based defense
            equippedBadges.forEach(badgeId => {
                const badge = badges[badgeId];
                if (!badge) return;

                switch(badge.effect) {
                    case 'defense':
                        // Defense badges now use percentage reduction
                        percentageReduction += badge.value;
                        break;
                    case 'guardian':
                        percentageReduction += badge.value;
                        break;
                    case 'survivor':
                        // Extra defense when low health
                        if (this.health / this.maxHealth < 0.25) {
                            percentageReduction += badge.value;
                        }
                        break;
                    case 'tank':
                        // Tank badges provide percentage reduction based on HP bonus
                        percentageReduction += Math.floor(badge.value / 20); // 20 HP = 1% defense
                        break;
                }
            });

            // Item-based defense
            if (this.activeEffects && this.activeEffects.length > 0) {
                this.activeEffects.forEach(effect => {
                    switch(effect.type) {
                        case 'defenseBoost':
                            // Defense items provide percentage reduction
                            percentageReduction += effect.data.amount || 0;
                            break;
                        case 'shielded':
                            percentageReduction += effect.data.reduction || 0;
                            break;
                    }
                });
            }

            // 3. APPLY DAMAGE REDUCTION

            // Apply flat reduction first
            finalDamage = Math.max(1, finalDamage - flatReduction); // Minimum 1 damage

            // Apply percentage reduction
            if (percentageReduction > 0) {
                const reductionMultiplier = Math.max(0.1, 1 - (percentageReduction / 100)); // Minimum 10% damage taken
                finalDamage = finalDamage * reductionMultiplier;
            }

            // Round to nearest integer
            finalDamage = Math.round(finalDamage);

            // 4. TRACK DAMAGE FOR CHALLENGES (only for Player 1 dealing damage)
            if (attacker && attacker === gameState.battle?.player1 && this !== gameState.battle?.player1) {
                trackChallengeProgress('damage_dealt', { damage: finalDamage });

                // Track character-specific damage dealt
                const charKey = gameState.selectedCharacter;
                if (charKey) {
                    // Initialize stats if they don't exist
                    if (!gameState.characterStats) {
                        gameState.characterStats = {};
                    }
                    if (!gameState.characterStats[charKey]) {
                        gameState.characterStats[charKey] = {
                            wins: 0,
                            losses: 0,
                            totalDamageDealt: 0,
                            totalDamageTaken: 0,
                            fastestWin: null,
                            specialsUsed: 0,
                            perfectWins: 0,
                            comebackWins: 0
                        };
                    }
                    gameState.characterStats[charKey].totalDamageDealt += finalDamage;
                    console.log(`💥 Damage dealt tracked: +${finalDamage} (Total: ${gameState.characterStats[charKey].totalDamageDealt})`);
                    // Note: We don't save here to avoid too many saves, it will save at battle end
                }
            }

            // 5. LIFESTEAL CALCULATION (for the attacker)
            // Note: This would need to be called from the attacker's side, but we'll track it here for logging

            // 6. FLAG CAPTURE MODE - Handle flag stealing
            if (gameState.battle && gameState.battle.isFlagCaptureMode && !dodged && attacker) {
                const attackedPlayer = this === gameState.battle.player1 ? 'player1' : 'player2';
                const attackingPlayer = attacker === gameState.battle.player1 ? 'player1' : 'player2';

                // If this player has the flag, steal it to the attacker
                if (gameState.flagCapture.flagHolder === attackedPlayer) {
                    gameState.battle.stealFlag(attackedPlayer, attackingPlayer);
                }
            }

            // 6. APPLY FINAL DAMAGE
            this.health = Math.max(0, this.health - finalDamage);

            // 6. ADD VISUAL EFFECTS
            if (gameState.battle) {
                // Screen shake based on damage amount
                const shakeIntensity = Math.min(finalDamage / 10, 15);
                gameState.battle.addScreenShake(shakeIntensity, 20);

                // Hit sparks
                if (gameState.battle && gameState.battle.addVisualEffect) {
                    for (let i = 0; i < 5; i++) {
                        gameState.battle.addVisualEffect('hit_spark',
                            this.x + this.width/2 + (Math.random() - 0.5) * 30,
                            this.y + this.height/2 + (Math.random() - 0.5) * 30,
                            {
                                life: 15,
                                velocityX: (Math.random() - 0.5) * 4,
                                velocityY: (Math.random() - 0.5) * 4
                            }
                        );
                    }

                    // Damage number
                    gameState.battle.addVisualEffect('damage_number',
                        this.x + this.width/2,
                        this.y + this.height/2 - 20,
                        {
                            life: 60,
                            damage: finalDamage
                        }
                    );
                }
            }

            // 7. LOG DAMAGE CALCULATION
            if (flatReduction > 0 || percentageReduction > 0) {
                console.log(`🛡️ ${this.char.name} damage reduction:
                    Incoming: ${incomingDamage}
                    Flat Reduction: -${flatReduction}
                    Percentage Reduction: -${percentageReduction}%
                    Final Damage: ${finalDamage}
                    HP: ${Math.floor(this.health)}/${this.maxHealth}`);
            } else {
                console.log(`${this.char.name} takes ${finalDamage} damage! HP: ${Math.floor(this.health)}/${this.maxHealth}`);
            }
        }

        useItem() {
            if (!this.heldItem) {
                console.log(`${this.char.name} has no item to use!`);
                return;
            }
            
            // Use the held item
            console.log(`${this.char.name} uses ${this.heldItem.name}!`);
            this.applyItemEffect(this.heldItem);
            
            // Clear the held item after use
            this.heldItem = null;
        }

        applyItemEffect(item) {
            const itemData = item.data;
            console.log(`${this.char.name} uses ${itemData.name}! Effect: ${itemData.type}`);
            
            // Initialize item effects tracking if needed
            if (!this.itemEffects) this.itemEffects = {};
            if (!this.activeEffects) this.activeEffects = [];
            
            // Apply item effects based on type
            switch(itemData.type) {
                case 'weapon':
                case 'ranged':
                case 'legendary':
                case 'alpha':
                case 'beta':
                case 'military':
                    // Weapon damage boost
                    this.addTimedEffect('damageBoost', {
                        amount: itemData.damage || 50,
                        duration: itemData.duration || 10000,
                        name: itemData.name
                    });
                    console.log(`${this.char.name} gains +${itemData.damage || 50} damage for ${(itemData.duration || 10000)/1000}s!`);
                    break;
                    
                case 'explosive':
                case 'ultimate':
                case 'cosmic':
                case 'omega':
                    // EXPLOSIVE DAMAGE - Instant explosion damage to enemy!
                    const explosiveTarget = this === gameState.battle.player1 ? gameState.battle.player2 : gameState.battle.player1;
                    const explosiveDamage = itemData.damage || 80;

                    // Deal instant damage
                    explosiveTarget.takeDamage(explosiveDamage, this);

                    // Create massive explosion animation
                    this.createExplosionEffect(explosiveTarget);

                    console.log(`💥 EXPLOSION! ${itemData.name} deals ${explosiveDamage} damage to ${explosiveTarget.char.name}!`);
                    break;
                    
                case 'defense':
                    // Defense boost
                    this.addTimedEffect('defenseBoost', {
                        amount: itemData.defense || 20,
                        duration: itemData.duration || 10000,
                        name: itemData.name
                    });
                    console.log(`${this.char.name} gains +${itemData.defense || 20} defense!`);
                    break;
                    
                case 'consumable':
                    // INSTANT HEAL
                    if (itemData.heal) {
                        const healAmount = itemData.heal;
                        const oldHealth = this.health;
                        this.health = Math.min(this.maxHealth, this.health + healAmount);
                        const actualHeal = this.health - oldHealth;
                        console.log(`${this.char.name} heals for ${actualHeal} HP! (${oldHealth} -> ${this.health})`);
                        
                        // Visual heal effect
                        this.createHealEffect(actualHeal);
                    }
                    break;
                    
                case 'buff':
                    // Speed boost
                    if (itemData.speedMultiplier) {
                        this.addTimedEffect('speedBoost', {
                            multiplier: itemData.speedMultiplier,
                            duration: itemData.duration || 10000,
                            name: itemData.name
                        });
                        console.log(`${this.char.name} gains ${itemData.speedMultiplier}x speed!`);
                    }
                    // Power boost
                    if (itemData.powerBoost) {
                        this.addTimedEffect('powerBoost', {
                            multiplier: itemData.powerBoost,
                            duration: itemData.duration || 10000,
                            name: itemData.name
                        });
                        console.log(`${this.char.name} gains ${itemData.powerBoost}x power!`);
                    }
                    break;
                    
                case 'instant':
                    // INSTANT DAMAGE to enemy
                    const enemy = this === gameState.battle.player1 ? gameState.battle.player2 : gameState.battle.player1;
                    const instantDamage = itemData.damage || 80;
                    enemy.takeDamage(instantDamage);
                    console.log(`⚡ INSTANT EFFECT: ${itemData.name} strikes ${enemy.char.name} for ${instantDamage} damage!`);
                    
                    // Visual lightning effect
                    this.createLightningEffect(enemy);
                    break;
                    
                case 'debuff':
                    const target = this === gameState.battle.player1 ? gameState.battle.player2 : gameState.battle.player1;

                    // Freeze enemy
                    if (itemData.freezeDuration) {
                        target.addTimedEffect('frozen', {
                            duration: itemData.freezeDuration,
                            name: itemData.name
                        });
                        console.log(`❄️ ${target.char.name} is FROZEN for ${itemData.freezeDuration/1000} seconds!`);
                    }

                    // Poison enemy
                    if (itemData.poisonDamage && itemData.poisonDuration) {
                        target.addTimedEffect('poisoned', {
                            tickDamage: itemData.poisonDamage,
                            duration: itemData.poisonDuration,
                            name: itemData.name,
                            lastTick: Date.now()
                        });
                        console.log(`☠️ ${target.char.name} is POISONED! Taking ${itemData.poisonDamage} damage/sec for ${itemData.poisonDuration/1000}s!`);
                    }
                    break;
                    
                case 'area':
                    // Area damage around enemy
                    const areaTarget = this === gameState.battle.player1 ? gameState.battle.player2 : gameState.battle.player1;
                    const areaDamage = itemData.damage || 60;
                    areaTarget.takeDamage(areaDamage);
                    console.log(`💥 AREA BLAST: ${itemData.name} hits ${areaTarget.char.name} for ${areaDamage} damage!`);
                    break;
                    
                case 'magic':
                case 'celestial':
                    // Magic damage boost with special effects
                    this.addTimedEffect('magicBoost', {
                        amount: itemData.damage || 65,
                        duration: itemData.duration || 12000,
                        name: itemData.name
                    });
                    console.log(`✨ ${this.char.name} gains MAGICAL +${itemData.damage || 65} damage!`);
                    break;
                    
                case 'projectile':
                case 'heavy':
                    // Heavy weapons - more damage, slower reload
                    this.addTimedEffect('heavyWeapon', {
                        damage: itemData.damage || 90,
                        duration: itemData.duration || 8000,
                        name: itemData.name
                    });
                    console.log(`🔨 ${this.char.name} wields HEAVY WEAPON: +${itemData.damage || 90} damage!`);
                    break;
                    
                case 'radiation':
                    // Poison damage over time to enemy
                    const radTarget = this === gameState.battle.player1 ? gameState.battle.player2 : gameState.battle.player1;
                    radTarget.addTimedEffect('poisoned', {
                        damage: itemData.damage || 10,
                        tickDamage: 10,
                        duration: itemData.duration || 8000,
                        name: itemData.name
                    });
                    console.log(`☢️ ${radTarget.char.name} is IRRADIATED! Taking poison damage!`);
                    break;
                    
                case 'time':
                    // Time stop effect - freeze enemy temporarily
                    if (itemData.freezeAll) {
                        const timeTarget = this === gameState.battle.player1 ? gameState.battle.player2 : gameState.battle.player1;
                        timeTarget.addTimedEffect('timeStop', {
                            duration: itemData.freezeAll || 3000,
                            name: itemData.name
                        });
                        console.log(`⏰ TIME STOP! ${timeTarget.char.name} is frozen in time!`);
                    }
                    break;
                    
                case 'chaos':
                    // Random effect!
                    if (itemData.randomEffect) {
                        const chaosEffects = [
                            { type: 'heal', amount: 75 },
                            { type: 'damage_boost', amount: 50, duration: 8000 },
                            { type: 'speed', multiplier: 2, duration: 6000 },
                            { type: 'enemy_damage', amount: 60 }
                        ];
                        const randomEffect = chaosEffects[Math.floor(Math.random() * chaosEffects.length)];

                        switch(randomEffect.type) {
                            case 'heal':
                                this.health = Math.min(this.maxHealth, this.health + randomEffect.amount);
                                console.log(`🔮 CHAOS HEAL: +${randomEffect.amount} HP!`);
                                break;
                            case 'damage_boost':
                                this.addTimedEffect('damageBoost', {
                                    amount: randomEffect.amount,
                                    duration: randomEffect.duration,
                                    name: 'Chaos Boost'
                                });
                                console.log(`🔮 CHAOS BOOST: +${randomEffect.amount} damage!`);
                                break;
                            case 'speed':
                                this.addTimedEffect('speedBoost', {
                                    multiplier: randomEffect.multiplier,
                                    duration: randomEffect.duration,
                                    name: 'Chaos Speed'
                                });
                                console.log(`🔮 CHAOS SPEED: ${randomEffect.multiplier}x speed!`);
                                break;
                            case 'enemy_damage':
                                const chaosTarget = this === gameState.battle.player1 ? gameState.battle.player2 : gameState.battle.player1;
                                chaosTarget.takeDamage(randomEffect.amount);
                                console.log(`🔮 CHAOS STRIKE: ${randomEffect.amount} damage to enemy!`);
                                break;
                        }
                    }
                    break;

                case 'dimensional':
                    // Space Rift - teleport ability
                    if (itemData.teleport) {
                        this.addTimedEffect('teleport', {
                            duration: itemData.duration || 10000,
                            name: itemData.name
                        });
                        console.log(`🌀 ${this.char.name} gains teleport ability!`);
                    }
                    break;

                case 'fate':
                    // Destiny - small chance for instant victory
                    if (itemData.guaranteedWin && Math.random() < itemData.guaranteedWin) {
                        const enemy = this === gameState.battle.player1 ? gameState.battle.player2 : gameState.battle.player1;
                        enemy.health = 0;
                        console.log(`✨ DESTINY ACTIVATED! ${enemy.char.name} is defeated by fate!`);
                    } else {
                        // If destiny doesn't trigger, give a powerful damage boost
                        this.addTimedEffect('damageBoost', {
                            amount: 100,
                            duration: itemData.duration || 10000,
                            name: itemData.name
                        });
                        console.log(`✨ Destiny grants +100 damage boost!`);
                    }
                    break;

                case 'infinite':
                    // Infinity Stone - ALL POWERS
                    if (itemData.allPowers) {
                        this.addTimedEffect('damageBoost', { amount: 150, duration: itemData.duration || 15000, name: 'Infinity Damage' });
                        this.addTimedEffect('speedBoost', { multiplier: 3, duration: itemData.duration || 15000, name: 'Infinity Speed' });
                        this.addTimedEffect('defenseBoost', { amount: 50, duration: itemData.duration || 15000, name: 'Infinity Defense' });
                        this.health = this.maxHealth; // Full heal
                        console.log(`♾️ INFINITY STONE ACTIVATED! ALL POWERS GRANTED!`);
                    }
                    break;

                case 'wave':
                    // Tsunami - wave damage
                    const waveTarget = this === gameState.battle.player1 ? gameState.battle.player2 : gameState.battle.player1;
                    waveTarget.takeDamage(itemData.damage || 90);
                    console.log(`🌊 TSUNAMI WAVE hits ${waveTarget.char.name} for ${itemData.damage || 90} damage!`);
                    break;

                case 'global':
                    // Global damage - affects enemy with massive area damage (Earthquake)
                    const globalTarget = this === gameState.battle.player1 ? gameState.battle.player2 : gameState.battle.player1;
                    const globalDamage = itemData.damage || 80;
                    globalTarget.takeDamage(globalDamage);
                    console.log(`🌍 GLOBAL EFFECT: ${itemData.name} hits ${globalTarget.char.name} for ${globalDamage} damage!`);

                    // Add screen shake for global effects
                    if (gameState.battle) {
                        gameState.battle.addScreenShake(15, 500);
                    }
                    break;

                default:
                    console.log(`Unknown item type: ${itemData.type}`);
                    break;
            }
            
            // Show visual notification
            showNotification(`${this.char.name} used:\n${itemData.emoji} ${itemData.name}!\n${this.getEffectDescription(itemData)}`);
        }

        tryTeleport() {
            // Check if player has teleport ability
            const hasTeleport = this.activeEffects && this.activeEffects.some(effect => effect.type === 'teleport');
            if (!hasTeleport) {
                console.log(`${this.char.name} has no teleport ability!`);
                return;
            }

            // Get the enemy player
            const enemy = this === gameState.battle.player1 ? gameState.battle.player2 : gameState.battle.player1;

            // Teleport near the enemy (but not exactly on them)
            const teleportDistance = 100; // Distance from enemy
            const direction = Math.random() < 0.5 ? -1 : 1; // Random side

            this.x = enemy.x + (direction * teleportDistance);
            this.y = enemy.y; // Same height

            // Make sure teleport position is within bounds
            this.x = Math.max(50, Math.min(window.innerWidth - 50, this.x));

            console.log(`🌀 ${this.char.name} teleports near ${enemy.char.name}!`);
            showNotification(`🌀 ${this.char.name} TELEPORTED!`);

            // Remove one use of teleport effect (reduce duration)
            const teleportEffect = this.activeEffects.find(effect => effect.type === 'teleport');
            if (teleportEffect) {
                teleportEffect.timeLeft -= 2000; // Reduce by 2 seconds per use
            }
        }

        addTimedEffect(effectType, effectData) {
            // Remove existing effect of same type
            this.activeEffects = this.activeEffects.filter(effect => effect.type !== effectType);
            
            // Add new effect
            this.activeEffects.push({
                type: effectType,
                data: effectData,
                timeLeft: effectData.duration,
                startTime: Date.now()
            });
            
            console.log(`${this.char.name} gains ${effectType} effect for ${effectData.duration/1000}s`);
        }

        updateItemEffects() {
            if (!this.activeEffects) return;

            // Update all timed effects - iterate backwards to safely remove expired effects
            for (let i = this.activeEffects.length - 1; i >= 0; i--) {
                const effect = this.activeEffects[i];
                effect.timeLeft -= 16.67; // Roughly 60fps

                // Apply per-frame effects
                if (effect.type === 'poisoned' && effect.data.tickDamage) {
                    // Poison damage every 60 frames (1 second)
                    if (Date.now() - effect.lastTick >= 1000) {
                        this.takeDamage(effect.data.tickDamage);
                        console.log(`☢️ ${this.char.name} takes ${effect.data.tickDamage} poison damage!`);
                        effect.lastTick = Date.now();
                    }
                }

                // Remove expired effects
                if (effect.timeLeft <= 0) {
                    console.log(`${this.char.name}'s ${effect.type} effect expired`);
                    this.activeEffects.splice(i, 1);
                }
            }
        }

        getEffectDescription(itemData) {
            switch(itemData.type) {
                case 'weapon':
                case 'ranged':
                case 'legendary':
                    return `+${itemData.damage} damage for ${(itemData.duration || 10000)/1000}s`;
                case 'explosive':
                case 'ultimate':
                case 'cosmic':
                case 'omega':
                    return `EXPLOSIVE +${itemData.damage} damage!`;
                case 'defense':
                    return `+${itemData.defense} defense for ${(itemData.duration || 10000)/1000}s`;
                case 'consumable':
                    return `Instantly heals ${itemData.heal} HP`;
                case 'buff':
                    if (itemData.speedMultiplier) {
                        return `${itemData.speedMultiplier}x speed for ${(itemData.duration || 10000)/1000}s`;
                    }
                    if (itemData.powerBoost) {
                        return `${itemData.powerBoost}x power for ${(itemData.duration || 10000)/1000}s`;
                    }
                    if (itemData.allPowers) {
                        return `ALL POWERS activated for ${(itemData.duration || 15000)/1000}s!`;
                    }
                    return `Power boost for ${(itemData.duration || 10000)/1000}s`;
                case 'instant':
                    return `Instantly deals ${itemData.damage} damage to enemy`;
                case 'debuff':
                    if (itemData.freezeDuration) {
                        return `Freezes enemy for ${itemData.freezeDuration/1000}s`;
                    }
                    if (itemData.poisonDamage) {
                        return `Poison: ${itemData.poisonDamage} damage/sec for ${(itemData.poisonDuration || 5000)/1000}s`;
                    }
                    return `Weakens enemy for ${(itemData.duration || 10000)/1000}s`;
                case 'area':
                case 'wave':
                case 'global':
                    return `Area blast: ${itemData.damage} damage (radius: ${itemData.radius || 80})`;
                case 'magic':
                case 'celestial':
                    return `Magical +${itemData.damage} damage for ${(itemData.duration || 12000)/1000}s`;
                case 'heavy':
                case 'projectile':
                    return `Heavy weapon: +${itemData.damage} damage for ${(itemData.duration || 8000)/1000}s`;
                case 'alpha':
                case 'beta':
                case 'military':
                    return `Military grade: +${itemData.damage} damage for ${(itemData.duration || 10000)/1000}s`;
                case 'radiation':
                    return `Radiation: +${itemData.damage} damage + poison effect`;
                case 'chaos':
                    return 'Random magical effect!';
                case 'time':
                    return `Stops time for ${(itemData.freezeAll || 3000)/1000}s`;
                case 'dimensional':
                    return `Teleport ability for ${(itemData.duration || 10000)/1000}s`;
                case 'fate':
                    return `Small chance for instant victory!`;
                case 'infinite':
                    return `INFINITE POWER for ${(itemData.duration || 15000)/1000}s!`;
                default:
                    // Fallback: try to describe based on properties
                    if (itemData.damage && itemData.radius) {
                        return `Explosive: ${itemData.damage} damage (radius: ${itemData.radius})`;
                    } else if (itemData.damage) {
                        return `Weapon: +${itemData.damage} damage`;
                    } else if (itemData.heal) {
                        return `Healing: +${itemData.heal} HP`;
                    } else if (itemData.defense) {
                        return `Defense: +${itemData.defense} protection`;
                    } else {
                        return 'Special combat effect!';
                    }
            }
        }

        createHealEffect(amount) {
            // Visual feedback for healing (can be expanded)
            console.log(`💚 HEAL EFFECT: +${amount} HP`);
        }

        createLightningEffect(target) {
            // Visual feedback for lightning (can be expanded)
            console.log(`⚡ LIGHTNING STRIKES ${target.char.name}!`);
        }

        createExplosionEffect(target) {
            if (!gameState.battle) return;

            const targetCenterX = target.x + target.width / 2;
            const targetCenterY = target.y + target.height / 2;

            // Create massive screen shake
            gameState.battle.addScreenShake(25, 800);

            // Create expanding explosion rings
            for (let ring = 0; ring < 5; ring++) {
                setTimeout(() => {
                    // Create explosion ring particles
                    const particleCount = 30;
                    const ringRadius = 30 + (ring * 20);

                    if (gameState.battle && gameState.battle.addVisualEffect) {
                        for (let i = 0; i < particleCount; i++) {
                            const angle = (Math.PI * 2 * i) / particleCount;
                            const startX = targetCenterX + Math.cos(angle) * ringRadius;
                            const startY = targetCenterY + Math.sin(angle) * ringRadius;

                            // Explosion particles
                            gameState.battle.addVisualEffect('explosion_particle',
                                startX,
                                startY,
                                {
                                    life: 40 - (ring * 5),
                                    velocityX: Math.cos(angle) * (4 + ring),
                                    velocityY: Math.sin(angle) * (4 + ring),
                                    size: 8 - ring,
                                    color: ring % 2 === 0 ? '#FF4500' : '#FFA500'
                                }
                            );
                        }

                        // Create fire particles
                        for (let i = 0; i < 15; i++) {
                            gameState.battle.addVisualEffect('fire_particle',
                                targetCenterX + (Math.random() - 0.5) * 60,
                                targetCenterY + (Math.random() - 0.5) * 60,
                                {
                                    life: 30,
                                    velocityX: (Math.random() - 0.5) * 6,
                                    velocityY: (Math.random() - 0.5) * 6 - 2,
                                    size: 6 + Math.random() * 4
                                }
                            );
                        }
                    }
                }, ring * 50); // Stagger the rings
            }

            // Create central flash
            if (gameState.battle && gameState.battle.addVisualEffect) {
                gameState.battle.addVisualEffect('explosion_flash',
                    targetCenterX,
                    targetCenterY,
                    {
                        life: 20,
                        maxSize: 150
                    }
                );
            }

            console.log(`💥 MASSIVE EXPLOSION at ${target.char.name}!`);
        }

        pickupItem(item) {
            // Store the item for later use
            this.heldItem = item;

            // Initialize rotation immediately
            this.itemRotation = 0;

            console.log(`${this.char.name} picks up ${item.name}! Item will now spin around player.`);

            // Show pickup notification WITH DESCRIPTION
            const description = this.getEffectDescription(item.data);
            showNotification(`${this.char.name} picked up:\n${item.emoji} ${item.name}!\n\n📝 DESCRIPTION:\n${description}\n\nPress ${this === gameState.battle.player1 ? 'Q' : 'Enter'} to use!`);
        }
    }

    // FLAG CLASS
    class Flag {
        constructor(x, y) {
            this.x = x;
            this.y = y;
            this.width = 40;
            this.height = 40;
            this.velocityY = 0;
            this.gravity = 0.8;
            this.onGround = false;
            this.bounceCount = 0;
            this.maxBounces = 3;
            this.emoji = '🏁';
            this.glowIntensity = 0;
            this.glowDirection = 1;
        }

        update() {
            // Apply gravity if not on ground
            if (!this.onGround) {
                this.velocityY += this.gravity;
                this.y += this.velocityY;
            }

            // Check ground collision
            const groundLevel = window.innerHeight - 100; // Use window height as ground level
            if (this.y >= groundLevel && !this.onGround) {
                this.y = groundLevel;
                if (this.bounceCount < this.maxBounces) {
                    this.velocityY = -this.velocityY * 0.6; // Bounce with energy loss
                    this.bounceCount++;
                } else {
                    this.velocityY = 0;
                    this.onGround = true;
                }
            }

            // Update glow effect
            this.glowIntensity += this.glowDirection * 0.05;
            if (this.glowIntensity >= 1) {
                this.glowIntensity = 1;
                this.glowDirection = -1;
            } else if (this.glowIntensity <= 0) {
                this.glowIntensity = 0;
                this.glowDirection = 1;
            }
        }

        render(ctx) {
            // Draw glow effect
            ctx.save();
            ctx.shadowColor = '#FFD700';
            ctx.shadowBlur = 20 + (this.glowIntensity * 20);
            ctx.shadowOffsetX = 0;
            ctx.shadowOffsetY = 0;

            // Draw flag emoji - make it bigger and more visible
            ctx.font = `${Math.max(40, this.width)}px Arial`;
            ctx.fillStyle = '#FFFFFF'; // White color for visibility
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(this.emoji, this.x + this.width/2, this.y + this.height/2);

            ctx.restore();

            // Draw flag pole
            ctx.strokeStyle = '#8B4513';
            ctx.lineWidth = 3;
            ctx.beginPath();
            ctx.moveTo(this.x + this.width/2, this.y + this.height);
            ctx.lineTo(this.x + this.width/2, this.y + this.height + 20);
            ctx.stroke();

            // Debug rectangle removed - flag should be visible now
        }

        checkCollision(fighter) {
            return fighter.x < this.x + this.width &&
                    fighter.x + fighter.width > this.x &&
                    fighter.y < this.y + this.height &&
                    fighter.y + fighter.height > this.y;
        }
    }

    // Projectile classes
    class Projectile {
        constructor(x, y, velocity, damage, color, owner) {
            this.x = x;
            this.y = y;
            this.velocity = velocity;
            this.damage = damage;
            this.color = color;
            this.owner = owner;
            // Make normal projectiles smaller for better gameplay
            const screenScale = Math.min(window.innerWidth / 800, window.innerHeight / 600);
            const scaledSize = Math.floor(8 * screenScale); // Smaller normal shots
            this.width = Math.max(8, scaledSize); // Minimum size of 8
            this.height = Math.max(8, scaledSize);
        }

        update() {
            this.x += this.velocity;
        }

        draw(ctx) {
            ctx.fillStyle = this.color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
            
            // Glow effect
            ctx.shadowColor = this.color;
            ctx.shadowBlur = 10;
            ctx.fillRect(this.x, this.y, this.width, this.height);
            ctx.shadowBlur = 0;
        }
    }

    class SpecialProjectile extends Projectile {
        constructor(x, y, velocity, damage, color, owner, type) {
            super(x, y, velocity, damage, color, owner);
            this.specialType = type;
            this.frame = 0;
            
            // Make special projectiles much bigger and more impactful
            const screenScale = Math.min(window.innerWidth / 800, window.innerHeight / 600);
            if (type === 'long') {
                const scaledSize = Math.floor(25 * screenScale * 2.0); // Much bigger for long range
                this.width = Math.max(30, scaledSize);
                this.height = Math.max(30, scaledSize);
            } else {
                const scaledSize = Math.floor(20 * screenScale * 2.0); // Much bigger for close range
                this.width = Math.max(25, scaledSize);
                this.height = Math.max(25, scaledSize);
            }
        }

        update() {
            super.update();
            this.frame++;
        }

        draw(ctx) {
            if (this.specialType === 'long') {
                // Long range - pulsing effect
                const pulseSize = 1 + Math.sin(this.frame * 0.3) * 0.2;
                ctx.fillStyle = this.color;
                ctx.shadowColor = this.color;
                ctx.shadowBlur = 20;
                
                ctx.fillRect(
                    this.x - (this.width * pulseSize - this.width) / 2,
                    this.y - (this.height * pulseSize - this.height) / 2,
                    this.width * pulseSize,
                    this.height * pulseSize
                );
            } else {
                // Close range - sparkling effect
                ctx.fillStyle = this.color;
                ctx.shadowColor = this.color;
                ctx.shadowBlur = 15;
                ctx.fillRect(this.x, this.y, this.width, this.height);
            }
            
            ctx.shadowBlur = 0;
        }
    }

    // NEW: HeadProjectile class for special attacks where the head emoji flies off!
    class HeadProjectile extends Projectile {
        constructor(x, y, velocity, damage, color, owner, emoji) {
            super(x, y, velocity, damage, color, owner);
            this.emoji = emoji;
            this.rotation = 0;
            // Make head projectiles much bigger as they're special attacks
            const screenScale = Math.min(window.innerWidth / 800, window.innerHeight / 600);
            const scaledSize = Math.floor(40 * screenScale * 2.2); // Much bigger head projectiles
            this.width = Math.max(45, scaledSize); // Minimum size of 45
            this.height = Math.max(45, scaledSize);
            this.maxDistance = 400; // How far the head can travel before disappearing
            this.startX = x;


        }

        update() {
            // Spinning rotation effect
            this.rotation += 0.3;

            // Normal projectile movement
            this.x += this.velocity;

            // Check if we've traveled max distance or gone out of bounds
            const screenWidth = gameState.battle ? gameState.battle.canvas.width : window.innerWidth;
            if (Math.abs(this.x - this.startX) >= this.maxDistance ||
                this.x < -50 || this.x > screenWidth + 50) {
                // Head disappears and immediately restores to owner
                this.owner.headFlying = false;
                this.shouldBeRemoved = true;
            }
        }

        draw(ctx) {
            ctx.save();
            
            // Translate to projectile center for rotation
            ctx.translate(this.x + this.width / 2, this.y + this.height / 2);
            ctx.rotate(this.rotation);
            
            // Draw spinning head emoji with glow effect
            ctx.shadowColor = this.color;
            ctx.shadowBlur = 15;
            ctx.font = 'bold 24px Arial';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillStyle = '#ffffff';
            ctx.fillText(this.emoji, 0, 0);
            
            ctx.restore();
        }

        // Override collision to immediately restore head
        onHit() {
            // FLAG CAPTURE MODE - Special attack stuns the target
            if (gameState.battle && gameState.battle.isFlagCaptureMode) {
                // Determine which player was hit
                const target = this.owner === gameState.battle.player1 ? gameState.battle.player2 : gameState.battle.player1;
                const targetPlayer = target === gameState.battle.player1 ? 'player1' : 'player2';

                // Stun the target
                gameState.battle.stunPlayer(targetPlayer);
            }

            // Head disappears immediately after hit and restores to owner
            this.owner.headFlying = false;
            this.shouldBeRemoved = true;
        }
    }

    // UI Functions
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

    function showGameModeSelect() {
        showScreen('gameModeScreen');
    }

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

    function showChallenges() {
        updateChallengesPlayerInfo();
        updateChallengesDisplay();
        showScreen('challengesScreen');
    }

    function updateChallengesPlayerInfo() {
        const info = document.getElementById('challengesPlayerInfo');
        if (gameState.gameMode === 'multiplayer') {
            info.style.display = 'block';
            info.innerHTML = `
                <span style="cursor: pointer; ${gameState.currentShopPlayer === 1 ? 'text-decoration: underline;' : ''}" onclick="gameState.currentShopPlayer = 1; updateChallengesPlayerInfo(); updateChallengesDisplay();">🎯 Player 1 Challenges</span>
                |
                <span style="cursor: pointer; ${gameState.currentShopPlayer === 2 ? 'text-decoration: underline;' : ''}" onclick="gameState.currentShopPlayer = 2; updateChallengesPlayerInfo(); updateChallengesDisplay();">🎯 Player 2 Challenges</span>
            `;
        } else {
            info.style.display = 'block';
            info.innerHTML = `🎯 Active Challenges: ${gameState.challenges.length}/3 | Completed: ${gameState.completedChallenges.length}`;
        }
    }

    function updateChallengesDisplay() {
        const container = document.getElementById('challengesContainer');
        container.innerHTML = '';

        // Recalculate all challenge progress before displaying
        recalculateAllChallengeProgress();

        if (gameState.challenges.length === 0) {
            container.innerHTML = `
                <div style="text-align: center; padding: 40px; color: #FFD700; font-size: 18px;">
                    <div style="font-size: 48px; margin-bottom: 20px;">🎯</div>
                    <div style="font-weight: bold; margin-bottom: 10px;">No Active Challenges</div>
                    <div>Complete battles to unlock new challenges!</div>
                </div>
            `;
            return;
        }
        
        // Create challenges grid
        const challengesGrid = document.createElement('div');
        challengesGrid.style.cssText = 'display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px;';
        
        gameState.challenges.forEach((challenge, index) => {
            // Ensure all values are valid numbers to prevent NaN
            const progress = Number(challenge.progress) || 0;
            const target = Number(challenge.target) || 1;
            const reward = Number(challenge.reward) || 0;

            const progressPercent = Math.min(100, Math.max(0, (progress / target) * 100));
            const isComplete = progress >= target;

            const challengeCard = document.createElement('div');
            challengeCard.style.cssText = `
                background: linear-gradient(45deg, #9C27B0, #E91E63);
                border: 3px solid ${isComplete ? '#4CAF50' : '#FFD700'};
                border-radius: 15px;
                padding: 20px;
                text-align: center;
                color: #FFF;
                position: relative;
                transition: all 0.3s;
                ${isComplete ? 'box-shadow: 0 0 20px #4CAF50;' : ''}
            `;

            challengeCard.innerHTML = `
                <div style="font-size: 32px; margin-bottom: 10px;">${challenge.emoji || '🎯'}</div>
                <div style="font-size: 20px; font-weight: bold; margin-bottom: 8px;">${challenge.name || 'Challenge'}</div>
                <div style="font-size: 14px; margin-bottom: 15px; color: #FFD700;">${challenge.description || 'Complete this challenge'}</div>

                <!-- Progress Bar -->
                <div style="width: 100%; height: 12px; background: rgba(0,0,0,0.3); border-radius: 6px; overflow: hidden; margin-bottom: 10px;">
                    <div style="width: ${progressPercent.toFixed(1)}%; height: 100%; background: linear-gradient(90deg, #4CAF50, #8BC34A); transition: width 0.3s;"></div>
                </div>

                <div style="font-size: 16px; font-weight: bold; margin-bottom: 10px;">
                    Progress: ${progress} / ${target}
                </div>

                <div style="font-size: 14px; color: #4CAF50; font-weight: bold;">
                    💰 Reward: ${reward} coins
                </div>

                ${isComplete ? '<div style="background: #4CAF50; color: white; padding: 8px 15px; border-radius: 20px; font-size: 14px; font-weight: bold; margin-top: 10px;">✅ COMPLETE!</div>' : ''}
            `;
            
            challengesGrid.appendChild(challengeCard);
        });
        
        container.appendChild(challengesGrid);

        // Challenge statistics section removed per user request
    }

    function showBadges() {
        updateBadgesPlayerInfo();
        updateBadgesDisplay();
        showScreen('badgesScreen');
    }

    function updateBadgesPlayerInfo() {
        const info = document.getElementById('badgesPlayerInfo');
        if (gameState.gameMode === 'multiplayer') {
            info.style.display = 'block';
            info.innerHTML = `
                <span style="cursor: pointer; ${gameState.currentShopPlayer === 1 ? 'text-decoration: underline;' : ''}" onclick="gameState.currentShopPlayer = 1; updateBadgesPlayerInfo(); updateBadgesDisplay();">🏅 Player 1 Badges</span>
                |
                <span style="cursor: pointer; ${gameState.currentShopPlayer === 2 ? 'text-decoration: underline;' : ''}" onclick="gameState.currentShopPlayer = 2; updateBadgesPlayerInfo(); updateBadgesDisplay();">🏅 Player 2 Badges</span>
            `;
        } else {
            const unlockedBadges = gameState.unlockedBadges?.length || 0;
            const equippedBadges = gameState.equippedBadges?.length || 0;
            info.style.display = 'block';
            info.innerHTML = `🏅 Badges: ${unlockedBadges} unlocked | ${equippedBadges}/3 equipped`;
        }
    }

    function updateBadgesDisplay() {
        const container = document.getElementById('badgesContainer');
        container.innerHTML = '';
        
        let currentBadges, currentEquippedBadges;
        if (gameState.gameMode === 'multiplayer') {
            if (gameState.currentShopPlayer === 1) {
                currentBadges = gameState.player1Badges || [];
                currentEquippedBadges = gameState.player1EquippedBadges || [];
            } else {
                currentBadges = gameState.player2Badges || [];
                currentEquippedBadges = gameState.player2EquippedBadges || [];
            }
        } else {
            currentBadges = gameState.unlockedBadges || [];
            currentEquippedBadges = gameState.equippedBadges || [];
        }
        
        // Equipped badges section
        const equippedSection = document.createElement('div');
        equippedSection.style.cssText = 'margin-bottom: 30px; padding: 20px; background: rgba(0,0,0,0.2); border-radius: 15px;';
        equippedSection.innerHTML = `
            <div style="text-align: center; color: #FFD700; font-size: 20px; font-weight: bold; margin-bottom: 15px;">
                ⚡ EQUIPPED BADGES (${currentEquippedBadges.length}/3)
            </div>
            <div id="equippedBadgesGrid" style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 15px; min-height: 120px;">
                ${currentEquippedBadges.length === 0 ? '<div style="grid-column: 1/-1; text-align: center; color: #888; padding: 40px;">No badges equipped</div>' : ''}
            </div>
        `;
        
        // Add equipped badges
        currentEquippedBadges.forEach((badgeId, index) => {
            const badge = badges[badgeId];
            if (!badge) return;
            
            const badgeSlot = document.createElement('div');
            badgeSlot.style.cssText = `
                background: linear-gradient(45deg, ${rarityColors[badge.rarity]}, #FFD700);
                border: 3px solid #FFD700;
                border-radius: 15px;
                padding: 15px;
                text-align: center;
                color: #000;
                font-weight: bold;
                cursor: pointer;
            `;
            badgeSlot.onclick = () => unequipBadge(badgeId, index);
            
            badgeSlot.innerHTML = `
                <div style="font-size: 24px; margin-bottom: 5px;">${badge.emoji}</div>
                <div style="font-size: 12px; margin-bottom: 3px;">${badge.name}</div>
                <div style="font-size: 10px;">${badge.description}</div>
                <div style="font-size: 10px; color: #666; margin-top: 5px;">Click to unequip</div>
            `;
            
            const equippedGrid = equippedSection.querySelector('#equippedBadgesGrid');
            equippedGrid.appendChild(badgeSlot);
        });
        
        container.appendChild(equippedSection);
        
        if (currentBadges.length === 0) {
            container.innerHTML += `
                <div style="text-align: center; padding: 40px; color: #FFD700; font-size: 18px;">
                    <div style="font-size: 48px; margin-bottom: 20px;">🏅</div>
                    <div style="font-weight: bold; margin-bottom: 10px;">No Badges Unlocked</div>
                    <div>Open badge chests to unlock powerful badges!</div>
                </div>
            `;
            return;
        }
        
        // Available badges section
        const availableSection = document.createElement('div');
        availableSection.innerHTML = `
            <div style="text-align: center; color: #FFD700; font-size: 18px; font-weight: bold; margin-bottom: 15px;">
                🏅 AVAILABLE BADGES
            </div>
        `;
        
        // Create badges grid
        const badgesGrid = document.createElement('div');
        badgesGrid.style.cssText = 'display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 15px;';
        
        currentBadges.forEach(badgeId => {
            const badge = badges[badgeId];
            if (!badge) return;
            
            const isEquipped = currentEquippedBadges.includes(badgeId);
            const canEquip = currentEquippedBadges.length < 3 && !isEquipped;
            
            const badgeCard = document.createElement('div');
            badgeCard.style.cssText = `
                background: linear-gradient(45deg, ${rarityColors[badge.rarity]}, #FFD700);
                border: 3px solid ${isEquipped ? '#4CAF50' : rarityColors[badge.rarity]};
                border-radius: 15px;
                padding: 15px;
                text-align: center;
                color: #000;
                font-weight: bold;
                transition: all 0.3s;
                ${canEquip ? 'cursor: pointer;' : ''}
                ${isEquipped ? 'opacity: 0.6;' : ''}
            `;
            
            if (canEquip) {
                badgeCard.onclick = () => equipBadge(badgeId);
            }
            
            badgeCard.innerHTML = `
                <div style="font-size: 32px; margin-bottom: 8px;">${badge.emoji}</div>
                <div style="font-size: 16px; font-weight: bold; margin-bottom: 5px;">${badge.name}</div>
                <div style="font-size: 12px; text-transform: uppercase; margin-bottom: 8px; color: ${rarityColors[badge.rarity]};">${badge.rarity}</div>
                <div style="font-size: 12px; margin-bottom: 10px;">${badge.description}</div>
                
                ${isEquipped ? '<div style="background: #4CAF50; color: white; padding: 5px 10px; border-radius: 20px; font-size: 11px;">✓ EQUIPPED</div>' : 
                    canEquip ? '<div style="background: #5D5CDE; color: white; padding: 5px 10px; border-radius: 20px; font-size: 11px;">Click to Equip</div>' :
                    '<div style="background: #666; color: white; padding: 5px 10px; border-radius: 20px; font-size: 11px;">Badge Slots Full</div>'}
            `;
            
            badgesGrid.appendChild(badgeCard);
        });
        
        availableSection.appendChild(badgesGrid);
        container.appendChild(availableSection);
    }

    function equipBadge(badgeId) {
        let currentEquippedBadges;
        if (gameState.gameMode === 'multiplayer') {
            if (gameState.currentShopPlayer === 1) {
                if (!gameState.player1EquippedBadges) gameState.player1EquippedBadges = [];
                currentEquippedBadges = gameState.player1EquippedBadges;
            } else {
                if (!gameState.player2EquippedBadges) gameState.player2EquippedBadges = [];
                currentEquippedBadges = gameState.player2EquippedBadges;
            }
        } else {
            if (!gameState.equippedBadges) gameState.equippedBadges = [];
            currentEquippedBadges = gameState.equippedBadges;
        }
        
        if (currentEquippedBadges.length >= 3) {
            showNotification('Maximum 3 badges can be equipped! Unequip a badge first.');
            return;
        }
        
        if (currentEquippedBadges.includes(badgeId)) {
            showNotification('Badge already equipped!');
            return;
        }
        
        currentEquippedBadges.push(badgeId);
        const badge = badges[badgeId];
        showNotification(`🏅 Badge Equipped!\n${badge.emoji} ${badge.name}\n${badge.description}`);

        // Track if 3 badges are equipped
        if (currentEquippedBadges.length === 3) {
            trackChallengeProgress('badges_equipped');
        }

        updateBadgesDisplay();
    }

    function unequipBadge(badgeId, index) {
        let currentEquippedBadges;
        if (gameState.gameMode === 'multiplayer') {
            if (gameState.currentShopPlayer === 1) {
                currentEquippedBadges = gameState.player1EquippedBadges;
            } else {
                currentEquippedBadges = gameState.player2EquippedBadges;
            }
        } else {
            currentEquippedBadges = gameState.equippedBadges;
        }
        
        currentEquippedBadges.splice(index, 1);
        const badge = badges[badgeId];
        showNotification(`Badge Unequipped!\n${badge.emoji} ${badge.name}`);
        updateBadgesDisplay();
    }

    // Badge chest buying function
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

    function selectBadgeByChestRarity(availableBadges, rarityChances) {
        // Group badges by rarity
        const rarityGroups = {
            common: [],
            rare: [],
            epic: [],
            legendary: []
        };
        
        availableBadges.forEach(badgeId => {
            const rarity = badges[badgeId].rarity;
            rarityGroups[rarity].push(badgeId);
        });
        
        // Roll for rarity
        const roll = Math.random();
        let selectedRarity;
        
        if (roll < rarityChances.legendary && rarityGroups.legendary.length > 0) {
            selectedRarity = 'legendary';
        } else if (roll < rarityChances.legendary + rarityChances.epic && rarityGroups.epic.length > 0) {
            selectedRarity = 'epic';
        } else if (roll < rarityChances.legendary + rarityChances.epic + rarityChances.rare && rarityGroups.rare.length > 0) {
            selectedRarity = 'rare';
        } else {
            selectedRarity = 'common';
        }
        
        // If selected rarity has no available badges, fall back
        const selectedGroup = rarityGroups[selectedRarity];
        if (selectedGroup.length === 0) {
            for (const rarity of ['common', 'rare', 'epic', 'legendary']) {
                if (rarityGroups[rarity].length > 0) {
                    return rarityGroups[rarity][Math.floor(Math.random() * rarityGroups[rarity].length)];
                }
            }
        }
        
        return selectedGroup[Math.floor(Math.random() * selectedGroup.length)];
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
    
    function createBadgeParticles(container, rarity) {
        const numParticles = rarity === 'legendary' ? 15 : rarity === 'epic' ? 12 : rarity === 'rare' ? 8 : 6;
        
        for (let i = 0; i < numParticles; i++) {
            const particle = document.createElement('div');
            particle.className = `particle ${rarity}`;
            particle.textContent = '🏅'; // Badge particles are medal emojis!
            particle.style.fontSize = '8px';
            
            // Random position around center
            const angle = (Math.PI * 2 * i) / numParticles;
            const distance = 40 + Math.random() * 80;
            const x = Math.cos(angle) * distance;
            const y = Math.sin(angle) * distance;
            
            particle.style.setProperty('--particle-x', `${x}px`);
            particle.style.setProperty('--particle-y', `${y}px`);
            particle.style.left = '0px';
            particle.style.top = '0px';
            
            container.appendChild(particle);
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

    function showChooseBadgeScreen() {
        // TODO: Implement choose badge screen similar to choose character
        showNotification('Choose Badge feature coming soon!');
    }

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

    // Show character detail screen
    function showCharacterDetail(charKey) {
        const char = characters[charKey];
        if (!char) return;

        // Store current character for favorite toggle
        gameState.currentDetailCharacter = charKey;

        // Update character display
        document.getElementById('characterDetailName').textContent = char.name;
        document.getElementById('characterDetailRarity').textContent = char.rarity.toUpperCase();
        document.getElementById('characterDetailRarity').style.color = rarityColors[char.rarity];

        // Update stats
        const statsHTML = `
            <div style="margin-bottom: 15px; padding: 15px; background: rgba(255,215,0,0.1); border-radius: 10px; border-left: 4px solid #FFD700;">
                <div style="color: #FFD700; font-weight: bold;">❤️ MAX HEALTH</div>
                <div style="font-size: 24px; color: #FFF;">${char.maxHealth}</div>
            </div>
            <div style="margin-bottom: 15px; padding: 15px; background: rgba(76,175,80,0.1); border-radius: 10px; border-left: 4px solid #4CAF50;">
                <div style="color: #4CAF50; font-weight: bold;">⚔️ NORMAL DAMAGE</div>
                <div style="font-size: 24px; color: #FFF;">${char.damage}</div>
            </div>
            <div style="margin-bottom: 15px; padding: 15px; background: rgba(255,68,68,0.1); border-radius: 10px; border-left: 4px solid #FF4444;">
                <div style="color: #FF4444; font-weight: bold;">💥 SPECIAL DAMAGE</div>
                <div style="font-size: 24px; color: #FFF;">${char.specialDamage}</div>
            </div>
            <div style="margin-bottom: 15px; padding: 15px; background: rgba(33,150,243,0.1); border-radius: 10px; border-left: 4px solid #2196F3;">
                <div style="color: #2196F3; font-weight: bold;">🎯 SPECIAL TYPE</div>
                <div style="font-size: 18px; color: #FFF;">${char.specialType === 'long' ? '📡 LONG RANGE' : '⚔️ CLOSE RANGE'}</div>
            </div>
            <div style="margin-bottom: 15px; padding: 15px; background: rgba(156,39,176,0.1); border-radius: 10px; border-left: 4px solid #9C27B0;">
                <div style="color: #9C27B0; font-weight: bold;">⏱️ RELOAD TIME</div>
                <div style="font-size: 24px; color: #FFF;">${(char.reloadTime/60).toFixed(1)}s</div>
            </div>
            <div style="margin-bottom: 15px; padding: 15px; background: rgba(255,152,0,0.1); border-radius: 10px; border-left: 4px solid #FF9800;">
                <div style="color: #FF9800; font-weight: bold;">⚡ SPECIAL RELOAD</div>
                <div style="font-size: 24px; color: #FFF;">${(char.specialReloadTime/60).toFixed(1)}s</div>
            </div>
        `;
        document.getElementById('characterDetailStats').innerHTML = statsHTML;

        // Update in-game stats
        console.log('📊 Loading character stats for:', charKey);
        console.log('📊 All character stats:', gameState.characterStats);
        console.log('📊 Stats for this character:', gameState.characterStats[charKey]);

        const charStats = gameState.characterStats[charKey] || {
            wins: 0,
            losses: 0,
            totalDamageDealt: 0,
            totalDamageTaken: 0,
            fastestWin: null,
            specialsUsed: 0,
            perfectWins: 0,
            comebackWins: 0
        };

        const winRate = charStats.wins + charStats.losses > 0
            ? ((charStats.wins / (charStats.wins + charStats.losses)) * 100).toFixed(1)
            : 0;

        const inGameStatsHTML = `
            <div style="margin-bottom: 12px; padding: 12px; background: rgba(76,175,80,0.15); border-radius: 8px; border-left: 3px solid #4CAF50;">
                <div style="color: #4CAF50; font-weight: bold; font-size: 14px;">🏆 WINS</div>
                <div style="font-size: 22px; color: #FFF;">${charStats.wins}</div>
            </div>
            <div style="margin-bottom: 12px; padding: 12px; background: rgba(255,68,68,0.15); border-radius: 8px; border-left: 3px solid #FF4444;">
                <div style="color: #FF4444; font-weight: bold; font-size: 14px;">💀 LOSSES</div>
                <div style="font-size: 22px; color: #FFF;">${charStats.losses}</div>
            </div>
            <div style="margin-bottom: 12px; padding: 12px; background: rgba(255,215,0,0.15); border-radius: 8px; border-left: 3px solid #FFD700;">
                <div style="color: #FFD700; font-weight: bold; font-size: 14px;">📊 WIN RATE</div>
                <div style="font-size: 22px; color: #FFF;">${winRate}%</div>
            </div>
            <div style="margin-bottom: 12px; padding: 12px; background: rgba(33,150,243,0.15); border-radius: 8px; border-left: 3px solid #2196F3;">
                <div style="color: #2196F3; font-weight: bold; font-size: 14px;">⚡ FASTEST WIN</div>
                <div style="font-size: 22px; color: #FFF;">${charStats.fastestWin ? charStats.fastestWin.toFixed(1) + 's' : 'N/A'}</div>
            </div>
            <div style="margin-bottom: 12px; padding: 12px; background: rgba(156,39,176,0.15); border-radius: 8px; border-left: 3px solid #9C27B0;">
                <div style="color: #9C27B0; font-weight: bold; font-size: 14px;">💥 DAMAGE DEALT</div>
                <div style="font-size: 22px; color: #FFF;">${charStats.totalDamageDealt.toLocaleString()}</div>
            </div>
            <div style="margin-bottom: 12px; padding: 12px; background: rgba(255,152,0,0.15); border-radius: 8px; border-left: 3px solid #FF9800;">
                <div style="color: #FF9800; font-weight: bold; font-size: 14px;">🛡️ DAMAGE TAKEN</div>
                <div style="font-size: 22px; color: #FFF;">${charStats.totalDamageTaken.toLocaleString()}</div>
            </div>
            <div style="margin-bottom: 12px; padding: 12px; background: rgba(233,30,99,0.15); border-radius: 8px; border-left: 3px solid #E91E63;">
                <div style="color: #E91E63; font-weight: bold; font-size: 14px;">🌟 SPECIALS USED</div>
                <div style="font-size: 22px; color: #FFF;">${charStats.specialsUsed}</div>
            </div>
            <div style="margin-bottom: 12px; padding: 12px; background: rgba(0,188,212,0.15); border-radius: 8px; border-left: 3px solid #00BCD4;">
                <div style="color: #00BCD4; font-weight: bold; font-size: 14px;">✨ PERFECT WINS</div>
                <div style="font-size: 22px; color: #FFF;">${charStats.perfectWins}</div>
            </div>
        `;
        document.getElementById('characterInGameStats').innerHTML = inGameStatsHTML;

        // Update favorite button
        updateFavoriteButton();

        // Update addon dropdowns
        updateAddonDropdowns();

        // Show the screen
        showScreen('characterDetailScreen');

        // Start dancing animation
        startCharacterDanceAnimation(charKey);
    }

    // Update addon dropdown menus with unlocked addons
    function updateAddonDropdowns() {
        const playerAddons = gameState.gameMode === 'multiplayer'
            ? (gameState.currentShopPlayer === 1 ? gameState.player1Addons : gameState.player2Addons)
            : gameState.unlockedAddons;

        // Initialize character equipped addons storage if it doesn't exist
        if (!gameState.characterEquippedAddons) {
            gameState.characterEquippedAddons = {};
        }

        // Get current character key
        const currentCharKey = gameState.currentDetailCharacter;
        if (!currentCharKey) return;

        // Initialize this character's equipped addons if needed
        if (!gameState.characterEquippedAddons[currentCharKey]) {
            gameState.characterEquippedAddons[currentCharKey] = { hat: null, shirt: null, pants: null, shoes: null };
        }

        // Get all equipped addons from all characters to filter them out
        const getAllEquippedAddons = () => {
            const equipped = new Set();

            // Add from all characters
            if (gameState.characterEquippedAddons) {
                Object.values(gameState.characterEquippedAddons).forEach(charAddons => {
                    Object.values(charAddons).forEach(addonKey => {
                        if (addonKey) equipped.add(addonKey);
                    });
                });
            }

            return equipped;
        };

        const allEquippedAddons = getAllEquippedAddons();

        // Get current character's equipped addons
        const currentEquipped = gameState.characterEquippedAddons[currentCharKey];

        // Update each dropdown
        ['hat', 'shirt', 'pants', 'shoes'].forEach(type => {
            const select = document.getElementById(`addon${type.charAt(0).toUpperCase() + type.slice(1)}Select`);
            if (!select) return;

            // Clear existing options except "None"
            select.innerHTML = '<option value="">None</option>';

            // Add unlocked addons of this type
            if (playerAddons && playerAddons.length > 0) {
                playerAddons.forEach(addonKey => {
                    const addon = addons[addonKey];
                    if (addon && addon.type === type) {
                        // Only show addon if it's not equipped on another character
                        // OR if it's equipped on THIS character (so they can see what they have equipped)
                        const isEquippedOnThisCharacter = currentEquipped && currentEquipped[type] === addonKey;
                        const isEquippedOnOtherCharacter = allEquippedAddons.has(addonKey) && !isEquippedOnThisCharacter;

                        if (!isEquippedOnOtherCharacter) {
                            const option = document.createElement('option');
                            option.value = addonKey;
                            option.textContent = `${addon.name} (${addon.rarity})`;
                            option.style.color = addon.color;
                            option.style.fontWeight = 'bold';
                            select.appendChild(option);
                        }
                    }
                });
            }

            // Set current selection
            if (currentEquipped && currentEquipped[type]) {
                select.value = currentEquipped[type];
            }
        });
    }

    // Equip an addon
    window.equipAddon = function(type, addonKey) {
        // Initialize character equipped addons storage if it doesn't exist
        if (!gameState.characterEquippedAddons) {
            gameState.characterEquippedAddons = {};
        }

        // Get current character key
        const currentCharKey = gameState.currentDetailCharacter;
        if (!currentCharKey) {
            showNotification('No character selected!');
            return;
        }

        // Initialize this character's equipped addons if needed
        if (!gameState.characterEquippedAddons[currentCharKey]) {
            gameState.characterEquippedAddons[currentCharKey] = { hat: null, shirt: null, pants: null, shoes: null };
        }

        const equippedAddons = gameState.characterEquippedAddons[currentCharKey];

        if (addonKey === '') {
            // Unequip
            equippedAddons[type] = null;
            showNotification(`${type.toUpperCase()} unequipped from ${characters[currentCharKey].name}!`);
        } else {
            // UNEQUIP THIS ADDON FROM ALL OTHER CHARACTERS FIRST
            Object.keys(gameState.characterEquippedAddons).forEach(charKey => {
                if (charKey !== currentCharKey) {
                    const otherCharAddons = gameState.characterEquippedAddons[charKey];
                    Object.keys(otherCharAddons).forEach(addonType => {
                        if (otherCharAddons[addonType] === addonKey) {
                            otherCharAddons[addonType] = null;
                        }
                    });
                }
            });

            // Now equip to current character
            const addon = addons[addonKey];
            equippedAddons[type] = addonKey;
            showNotification(`Equipped ${addon.name} on ${characters[currentCharKey].name}!`);

            // Track character customization
            trackChallengeProgress('character_customized', { character: currentCharKey });
        }

        // Save game state
        saveGameState();

        // Refresh the dropdown to update available addons
        updateAddonDropdowns();

        // The character will automatically update on the next animation frame
        // No need to restart the animation
    };

    // Animate the character dancing with multiple dance moves
    let danceAnimationFrame = null;
    let currentDanceMove = 0;
    let danceMoveTimer = 0;
    const DANCE_MOVE_DURATION = 180; // frames per dance move (3 seconds at 60fps)

    function startCharacterDanceAnimation(charKey) {
        const char = characters[charKey];
        const canvas = document.getElementById('characterDetailCanvas');
        const ctx = canvas.getContext('2d');

        let time = 0;
        currentDanceMove = Math.floor(Math.random() * 8); // Start with random dance
        danceMoveTimer = 0;

        // Dance move functions
        const danceMoves = [
            // 1. Wave Dance
            (t) => ({
                bounce: Math.sin(t * 0.1) * 30,
                sway: Math.sin(t * 0.08) * 15,
                leftArmX: -60 - Math.sin(t * 0.12) * 20,
                leftArmY: -20 + Math.sin(t * 0.12) * 20,
                leftHandX: -80 - Math.sin(t * 0.12) * 20,
                leftHandY: 10 + Math.sin(t * 0.12) * 20,
                rightArmX: 60 + Math.sin(t * 0.12) * 20,
                rightArmY: -20 - Math.sin(t * 0.12) * 20,
                rightHandX: 80 + Math.sin(t * 0.12) * 20,
                rightHandY: 10 - Math.sin(t * 0.12) * 20,
                leftLegX: -40 - Math.sin(t * 0.15) * 25,
                leftLegY: 150,
                leftFootX: -50 - Math.sin(t * 0.15) * 25,
                leftFootY: 220,
                rightLegX: 40 + Math.sin(t * 0.15) * 25,
                rightLegY: 150,
                rightFootX: 50 + Math.sin(t * 0.15) * 25,
                rightFootY: 220,
                rotation: 0
            }),

            // 2. Jump Dance
            (t) => ({
                bounce: Math.abs(Math.sin(t * 0.15)) * 80,
                sway: 0,
                leftArmX: -70,
                leftArmY: -80 - Math.abs(Math.sin(t * 0.15)) * 30,
                leftHandX: -80,
                leftHandY: -120 - Math.abs(Math.sin(t * 0.15)) * 30,
                rightArmX: 70,
                rightArmY: -80 - Math.abs(Math.sin(t * 0.15)) * 30,
                rightHandX: 80,
                rightHandY: -120 - Math.abs(Math.sin(t * 0.15)) * 30,
                leftLegX: -30,
                leftLegY: 140,
                leftFootX: -35,
                leftFootY: 200,
                rightLegX: 30,
                rightLegY: 140,
                rightFootX: 35,
                rightFootY: 200,
                rotation: 0
            }),

            // 3. Spin Dance
            (t) => ({
                bounce: 20,
                sway: 0,
                leftArmX: -70 * Math.cos(t * 0.08),
                leftArmY: -70 * Math.sin(t * 0.08),
                leftHandX: -90 * Math.cos(t * 0.08),
                leftHandY: -90 * Math.sin(t * 0.08),
                rightArmX: 70 * Math.cos(t * 0.08),
                rightArmY: 70 * Math.sin(t * 0.08),
                rightHandX: 90 * Math.cos(t * 0.08),
                rightHandY: 90 * Math.sin(t * 0.08),
                leftLegX: -35,
                leftLegY: 150,
                leftFootX: -40,
                leftFootY: 220,
                rightLegX: 35,
                rightLegY: 150,
                rightFootX: 40,
                rightFootY: 220,
                rotation: (t * 0.08) % (Math.PI * 2)
            }),

            // 4. Robot Dance
            (t) => {
                const step = Math.floor(t / 20) % 4;
                return {
                    bounce: 0,
                    sway: step % 2 === 0 ? -20 : 20,
                    leftArmX: step === 0 || step === 2 ? -70 : -40,
                    leftArmY: step === 0 || step === 2 ? -40 : 0,
                    leftHandX: step === 0 || step === 2 ? -90 : -40,
                    leftHandY: step === 0 || step === 2 ? -40 : 30,
                    rightArmX: step === 1 || step === 3 ? 70 : 40,
                    rightArmY: step === 1 || step === 3 ? -40 : 0,
                    rightHandX: step === 1 || step === 3 ? 90 : 40,
                    rightHandY: step === 1 || step === 3 ? -40 : 30,
                    leftLegX: step % 2 === 0 ? -50 : -30,
                    leftLegY: 150,
                    leftFootX: step % 2 === 0 ? -60 : -30,
                    leftFootY: 220,
                    rightLegX: step % 2 === 1 ? 50 : 30,
                    rightLegY: 150,
                    rightFootX: step % 2 === 1 ? 60 : 30,
                    rightFootY: 220,
                    rotation: 0
                };
            },

            // 5. Floss Dance
            (t) => {
                const swing = Math.sin(t * 0.2);
                return {
                    bounce: Math.abs(Math.sin(t * 0.1)) * 15,
                    sway: swing * 25,
                    leftArmX: swing > 0 ? -30 : -80,
                    leftArmY: swing > 0 ? 40 : -20,
                    leftHandX: swing > 0 ? -30 : -100,
                    leftHandY: swing > 0 ? 80 : -20,
                    rightArmX: swing < 0 ? 30 : 80,
                    rightArmY: swing < 0 ? 40 : -20,
                    rightHandX: swing < 0 ? 30 : 100,
                    rightHandY: swing < 0 ? 80 : -20,
                    leftLegX: -35,
                    leftLegY: 150,
                    leftFootX: -40,
                    leftFootY: 220,
                    rightLegX: 35,
                    rightLegY: 150,
                    rightFootX: 40,
                    rightFootY: 220,
                    rotation: 0
                };
            },

            // 6. Dab
            (t) => {
                const dab = Math.sin(t * 0.1) > 0;
                return {
                    bounce: Math.abs(Math.sin(t * 0.1)) * 20,
                    sway: 0,
                    leftArmX: dab ? -90 : -50,
                    leftArmY: dab ? -100 : -30,
                    leftHandX: dab ? -110 : -60,
                    leftHandY: dab ? -120 : -10,
                    rightArmX: dab ? 40 : 50,
                    rightArmY: dab ? -60 : -30,
                    rightHandX: dab ? 50 : 60,
                    rightHandY: dab ? -80 : -10,
                    leftLegX: -35,
                    leftLegY: 150,
                    leftFootX: -40,
                    leftFootY: 220,
                    rightLegX: 35,
                    rightLegY: 150,
                    rightFootX: 40,
                    rightFootY: 220,
                    rotation: dab ? -0.3 : 0
                };
            },

            // 7. Running Man
            (t) => {
                const step = Math.sin(t * 0.2);
                return {
                    bounce: Math.abs(step) * 25,
                    sway: 0,
                    leftArmX: -50 - step * 30,
                    leftArmY: -20 + step * 40,
                    leftHandX: -60 - step * 40,
                    leftHandY: 20 + step * 60,
                    rightArmX: 50 + step * 30,
                    rightArmY: -20 - step * 40,
                    rightHandX: 60 + step * 40,
                    rightHandY: 20 - step * 60,
                    leftLegX: -40 + step * 30,
                    leftLegY: 150 - step * 30,
                    leftFootX: -50 + step * 40,
                    leftFootY: 220 - step * 50,
                    rightLegX: 40 - step * 30,
                    rightLegY: 150 + step * 30,
                    rightFootX: 50 - step * 40,
                    rightFootY: 220 + step * 50,
                    rotation: 0
                };
            },

            // 8. Disco Point
            (t) => {
                const point = Math.floor(t / 30) % 4;
                return {
                    bounce: Math.sin(t * 0.15) * 20,
                    sway: Math.sin(t * 0.1) * 10,
                    leftArmX: point === 0 ? -80 : point === 2 ? -50 : -40,
                    leftArmY: point === 0 ? -80 : point === 2 ? -30 : 0,
                    leftHandX: point === 0 ? -100 : point === 2 ? -60 : -40,
                    leftHandY: point === 0 ? -100 : point === 2 ? -10 : 30,
                    rightArmX: point === 1 ? 80 : point === 3 ? 50 : 40,
                    rightArmY: point === 1 ? -80 : point === 3 ? -30 : 0,
                    rightHandX: point === 1 ? 100 : point === 3 ? 60 : 40,
                    rightHandY: point === 1 ? -100 : point === 3 ? -10 : 30,
                    leftLegX: -35 - Math.sin(t * 0.2) * 15,
                    leftLegY: 150,
                    leftFootX: -40 - Math.sin(t * 0.2) * 20,
                    leftFootY: 220,
                    rightLegX: 35 + Math.sin(t * 0.2) * 15,
                    rightLegY: 150,
                    rightFootX: 40 + Math.sin(t * 0.2) * 20,
                    rightFootY: 220,
                    rotation: 0
                };
            }
        ];

        function animate() {
            // Clear canvas
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Change dance move periodically
            danceMoveTimer++;
            if (danceMoveTimer >= DANCE_MOVE_DURATION) {
                danceMoveTimer = 0;
                currentDanceMove = (currentDanceMove + 1) % danceMoves.length;
            }

            // Get current dance pose
            const pose = danceMoves[currentDanceMove](time);

            // Center position
            const centerX = canvas.width / 2;
            const centerY = canvas.height / 2;

            // Draw stickman character
            ctx.save();
            ctx.translate(centerX + pose.sway, centerY - pose.bounce);
            ctx.rotate(pose.rotation);

            // Set character color
            ctx.strokeStyle = char.color;
            ctx.fillStyle = char.color;
            ctx.lineWidth = 8;
            ctx.lineCap = 'round';
            ctx.lineJoin = 'round';

            // Add glow effect
            ctx.shadowBlur = 30;
            ctx.shadowColor = char.color;

            // Head (emoji) - moved down to align better with body
            ctx.font = '120px Arial';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(char.emoji, 0, -120);

            // Body
            ctx.beginPath();
            ctx.moveTo(0, -80);
            ctx.lineTo(0, 80);
            ctx.stroke();

            // DRAW EQUIPPED ADDONS - Check first to conditionally draw limbs
            // Initialize character equipped addons storage if it doesn't exist
            if (!gameState.characterEquippedAddons) {
                gameState.characterEquippedAddons = {};
            }

            // Get equipped addons for this specific character
            const equippedAddons = charKey && gameState.characterEquippedAddons[charKey]
                ? gameState.characterEquippedAddons[charKey]
                : null;

            // Check if shirt and shoes are equipped
            const hasShirt = equippedAddons && equippedAddons.shirt && addons[equippedAddons.shirt];
            const hasShoes = equippedAddons && equippedAddons.shoes && addons[equippedAddons.shoes];

            // Left arm - only draw if no shirt equipped
            if (!hasShirt) {
                ctx.beginPath();
                ctx.moveTo(0, -40);
                ctx.lineTo(pose.leftArmX, pose.leftArmY);
                ctx.lineTo(pose.leftHandX, pose.leftHandY);
                ctx.stroke();
            }

            // Right arm - only draw if no shirt equipped
            if (!hasShirt) {
                ctx.beginPath();
                ctx.moveTo(0, -40);
                ctx.lineTo(pose.rightArmX, pose.rightArmY);
                ctx.lineTo(pose.rightHandX, pose.rightHandY);
                ctx.stroke();
            }

            // Left leg
            ctx.beginPath();
            ctx.moveTo(0, 80);
            ctx.lineTo(pose.leftLegX, pose.leftLegY);
            ctx.lineTo(pose.leftFootX, pose.leftFootY);
            ctx.stroke();

            // Right leg
            ctx.beginPath();
            ctx.moveTo(0, 80);
            ctx.lineTo(pose.rightLegX, pose.rightLegY);
            ctx.lineTo(pose.rightFootX, pose.rightFootY);
            ctx.stroke();

            // Draw hands (circles) - only if no shirt equipped
            if (!hasShirt) {
                ctx.beginPath();
                ctx.arc(pose.leftHandX, pose.leftHandY, 12, 0, Math.PI * 2);
                ctx.fill();

                ctx.beginPath();
                ctx.arc(pose.rightHandX, pose.rightHandY, 12, 0, Math.PI * 2);
                ctx.fill();
            }

            // Draw feet (circles) - only if no shoes equipped
            if (!hasShoes) {
                ctx.beginPath();
                ctx.arc(pose.leftFootX, pose.leftFootY, 15, 0, Math.PI * 2);
                ctx.fill();

                ctx.beginPath();
                ctx.arc(pose.rightFootX, pose.rightFootY, 15, 0, Math.PI * 2);
                ctx.fill();
            }

            if (equippedAddons) {
                const shoeKey = equippedAddons.shoes;
                const pantsKey = equippedAddons.pants;
                const shirtKey = equippedAddons.shirt;
                const hatKey = equippedAddons.hat;

                // Extract country/sport/theme from keys
                const getCountrySport = (key) => {
                    if (!key) return { country: null, sport: null };
                    const country = key.includes('_') ? key.split('_')[1] : null;
                    const sports = ['soccer', 'basketball', 'baseball', 'football', 'hockey', 'tennis', 'golf', 'boxing', 'racing', 'cycling'];
                    const themes = ['wizard', 'knight', 'ninja', 'chef', 'doctor', 'pilot', 'winter', 'summer', '80s', '90s', 'army', 'navy'];
                    const sport = sports.find(s => key.includes(s)) || themes.find(t => key.includes(t));
                    return { country, sport };
                };

                // Draw SHOES on animated feet (bigger to replace foot circles)
                if (shoeKey && addons[shoeKey]) {
                    const { country, sport } = getCountrySport(shoeKey);
                    // Left shoe - follows foot animation (bigger size: 60x30 instead of 50x20)
                    drawShoe(ctx, pose.leftFootX - 30, pose.leftFootY - 15, 60, 30, addons[shoeKey].color, country, sport);
                    // Right shoe - follows foot animation (bigger size: 60x30 instead of 50x20)
                    drawShoe(ctx, pose.rightFootX - 30, pose.rightFootY - 15, 60, 30, addons[shoeKey].color, country, sport);
                }

                // Draw PANTS on animated legs
                if (pantsKey && addons[pantsKey]) {
                    const { country, sport } = getCountrySport(pantsKey);
                    drawPants(ctx, 0, 80, pose.leftFootX, pose.leftFootY - 15, pose.rightFootX, pose.rightFootY - 15, 30, addons[pantsKey].color, country, sport);
                }

                // Draw SHIRT on animated body and arms
                if (shirtKey && addons[shirtKey]) {
                    const { country, sport } = getCountrySport(shirtKey);
                    drawShirt(ctx, 0, -80, 80, -60, -40, 60, -40, pose.leftHandX, pose.leftHandY, pose.rightHandX, pose.rightHandY, 40, addons[shirtKey].color, country, sport);
                }

                // Draw HAT on top of animated head (not inside it)
                if (hatKey && addons[hatKey]) {
                    const { country, sport } = getCountrySport(hatKey);
                    drawHat(ctx, 0, -175, 50, 40, addons[hatKey].color, country, sport);
                }

                ctx.shadowBlur = 0;
            }

            ctx.restore();

            time++;
            danceAnimationFrame = requestAnimationFrame(animate);
        }

        // Stop previous animation if any
        if (danceAnimationFrame) {
            cancelAnimationFrame(danceAnimationFrame);
        }

        animate();
    }

    // Close character detail screen
    function closeCharacterDetail() {
        // Stop animation
        if (danceAnimationFrame) {
            cancelAnimationFrame(danceAnimationFrame);
            danceAnimationFrame = null;
        }
        showCollection();
    }

    // Toggle favorite status
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
            showNotification(`${characters[charKey].emoji} ${characters[charKey].name} removed from favorites!`);
        } else {
            // Add to favorites
            gameState.favoriteCharacters.push(charKey);
            showNotification(`${characters[charKey].emoji} ${characters[charKey].name} added to favorites! ⭐`);
        }

        // Update button
        updateFavoriteButton();

        // Save game state
        saveGameState();
    }

    // Update favorite button appearance
    function updateFavoriteButton() {
        if (!gameState.currentDetailCharacter) return;

        if (!gameState.favoriteCharacters) {
            gameState.favoriteCharacters = [];
        }

        const charKey = gameState.currentDetailCharacter;
        const isFavorite = gameState.favoriteCharacters.includes(charKey);
        const btn = document.getElementById('favoriteBtn');

        if (isFavorite) {
            btn.textContent = '⭐ FAVORITED!';
            btn.style.background = 'linear-gradient(45deg, #4CAF50, #45a049)';
            btn.style.borderColor = '#4CAF50';
        } else {
            btn.textContent = '⭐ Favorite';
            btn.style.background = 'linear-gradient(45deg, #FFD700, #FFA500)';
            btn.style.borderColor = '#FFD700';
        }
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

    function showDifficultySelect() {
        if (!gameState.selectedCharacter) {
            showNotification('Please select a character first!');
            return;
        }
        showScreen('difficultySelectScreen');
    }

    function showMapSelect() {
        showScreen('mapSelectScreen');
    }

    function selectDifficulty(difficulty) {
        gameState.selectedDifficulty = difficulty;
        showMapSelect();
    }

    function selectMap(mapType) {
        gameState.selectedMap = mapType;
        showBattlePreparation();
    }

    // DIFFICULTY-BASED ENEMY SELECTION SYSTEM - MUCH HARDER!
    function getEnemiesByDifficulty(difficulty) {
        const enemiesByRarity = {
            common: [],
            rare: [],
            epic: [],
            legendary: []
        };
        
        // Group all characters by rarity
        Object.keys(characters).forEach(charKey => {
            const char = characters[charKey];
            enemiesByRarity[char.rarity].push(charKey);
        });
        
        // Select enemies based on difficulty
        switch(difficulty) {
            case 'beginner':
                return enemiesByRarity.common; // Only Common enemies
            case 'intermediate':
                return enemiesByRarity.rare; // Only Rare enemies
            case 'hard':
                return enemiesByRarity.epic; // Only Epic enemies
            case 'impossible':
                return enemiesByRarity.legendary; // Only Legendary enemies
            default:
                return enemiesByRarity.common;
        }
    }

    function startBattle() {
        console.log('🎮 startBattle called');
        console.log('selectedCharacter:', gameState.selectedCharacter);
        console.log('selectedMap:', gameState.selectedMap);
        console.log('selectedPlayer2Character:', gameState.selectedPlayer2Character);

        if (!gameState.selectedCharacter || !gameState.selectedMap || !gameState.selectedPlayer2Character) {
            console.error('❌ Missing required data for battle!');
            showNotification('Error: Missing character or map selection!');
            return;
        }

        // Use the enemy character that was already selected in the preparation screen
        const enemyChar = gameState.selectedPlayer2Character;

        if (gameState.selectedBattleMode === 'boss_battle') {
            document.getElementById('player1Name').textContent = `P1: ${characters[gameState.selectedCharacter].name}`;
            document.getElementById('player2Name').textContent = `P2: ${characters[enemyChar].name}`;
        } else if (gameState.gameMode === 'multiplayer') {
            document.getElementById('player1Name').textContent = `P1: ${characters[gameState.selectedCharacter].name}`;
            document.getElementById('player2Name').textContent = `P2: ${characters[enemyChar].name}`;
        } else {
            document.getElementById('player1Name').textContent = characters[gameState.selectedCharacter].name;
            document.getElementById('player2Name').textContent = `CPU: ${characters[enemyChar].name} (${gameState.selectedDifficulty.toUpperCase()})`;
        }

        // Generate random addons for CPU (single player only)
        if (gameState.gameMode !== 'multiplayer') {
            // Get player's equipped addons from their selected character
            const player1CharKey = gameState.selectedCharacter;
            const player1Addons = (gameState.characterEquippedAddons && gameState.characterEquippedAddons[player1CharKey])
                ? gameState.characterEquippedAddons[player1CharKey]
                : {};
            const cpuAddons = {};

            // Get all addon keys by type
            const allAddonKeys = Object.keys(addons);
            const hatKeys = allAddonKeys.filter(key => addons[key].type === 'hat');
            const shirtKeys = allAddonKeys.filter(key => addons[key].type === 'shirt');
            const pantsKeys = allAddonKeys.filter(key => addons[key].type === 'pants');
            const shoesKeys = allAddonKeys.filter(key => addons[key].type === 'shoes');

            // Helper function to get random addon different from player's
            const getRandomAddon = (addonKeys, playerAddon) => {
                const availableAddons = addonKeys.filter(key => key !== playerAddon);
                if (availableAddons.length === 0) return null;
                return availableAddons[Math.floor(Math.random() * availableAddons.length)];
            };

            // Assign random addons to CPU (different from player's)
            cpuAddons.hat = getRandomAddon(hatKeys, player1Addons.hat);
            cpuAddons.shirt = getRandomAddon(shirtKeys, player1Addons.shirt);
            cpuAddons.pants = getRandomAddon(pantsKeys, player1Addons.pants);
            cpuAddons.shoes = getRandomAddon(shoesKeys, player1Addons.shoes);

            // Store CPU addons temporarily for this battle
            // Also store them in characterEquippedAddons for the CPU character
            const cpuCharKey = enemyChar;
            if (!gameState.characterEquippedAddons) {
                gameState.characterEquippedAddons = {};
            }
            gameState.characterEquippedAddons[cpuCharKey] = cpuAddons;
        }

        // Display equipped addons
        const player1AddonsDiv = document.getElementById('player1Addons');
        const player2AddonsDiv = document.getElementById('player2Addons');

        // Get addons from characterEquippedAddons based on selected characters
        const player1CharKey = gameState.selectedCharacter;
        const player2CharKey = enemyChar;

        const player1Addons = (gameState.characterEquippedAddons && gameState.characterEquippedAddons[player1CharKey])
            ? gameState.characterEquippedAddons[player1CharKey]
            : {};
        const player2Addons = (gameState.characterEquippedAddons && gameState.characterEquippedAddons[player2CharKey])
            ? gameState.characterEquippedAddons[player2CharKey]
            : {};

        // Don't display addon text during battle - addons are visible on characters
        player1AddonsDiv.innerHTML = '';
        player2AddonsDiv.innerHTML = '';
        
        console.log('=== STARTING BATTLE ===');
        console.log('Selected character:', gameState.selectedCharacter);
        console.log('Enemy character:', enemyChar);
        console.log('Selected map:', gameState.selectedMap);

        // Track battle started for challenges
        trackChallengeProgress('battle_started');

        // Track game mode played
        if (gameState.selectedBattleMode) {
            trackChallengeProgress('mode_played', { mode: gameState.selectedBattleMode });
        }

        showScreen('battleScreen');
        console.log('Battle screen shown');

        try {
            gameState.battle = new Battle(gameState.selectedCharacter, enemyChar, gameState.selectedMap);
            console.log('Battle created successfully');
        } catch (error) {
            console.error('Error creating battle:', error);
            alert('Error starting battle: ' + error.message);
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
        showLoadingScreen('battle', () => {
            // After loading screen, show appropriate screen
            if (gameState.tournamentMode && gameState.tournamentData.isActive) {
                showTournamentSelect();
            } else {
                showMainMenu();
            }
        });
    }

    // LOADING SCREEN WITH CHALLENGE CHECK
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

    function checkCompletedChallenges() {
        const completedChallenges = [];

        // Initialize challenges if not exists
        if (!gameState.challenges) {
            gameState.challenges = [];
        }
        if (!gameState.completedChallenges) {
            gameState.completedChallenges = [];
        }

        // Recalculate all challenge progress before checking
        recalculateAllChallengeProgress();

        // Get current challenges based on game mode
        let challenges = gameState.challenges || [];

        challenges.forEach((challenge, index) => {
            // Check if challenge is completed and claimed (ready to show in loading screen)
            if (challenge && challenge.claimed) {
                // Award coins
                if (gameState.gameMode === 'multiplayer') {
                    // Award to both players in multiplayer
                    gameState.player1Coins = safeCoins(gameState.player1Coins + challenge.reward);
                    gameState.player2Coins = safeCoins(gameState.player2Coins + challenge.reward);
                    updateMultiplayerCoinsDisplay();
                } else {
                    gameState.coins = safeCoins(gameState.coins + challenge.reward);
                    updateSinglePlayerCoinsDisplay();
                }

                completedChallenges.push(challenge);

                console.log(`✅ Challenge completed: ${challenge.name} - Reward: ${challenge.reward} coins`);
            }
        });

        // Remove completed challenges from active list
        gameState.challenges = gameState.challenges.filter(c => c && !c.claimed);

        // NOTE: New challenges are ONLY generated from trophy road rewards, not automatically

        // Save game state after processing completed challenges
        saveGameState();

        return completedChallenges;
    }

    // Return to main menu with loading screen and challenge check
    function returnToMainMenuWithLoading(source) {
        showLoadingScreen(source, () => {
            showMainMenu();
        });
    }

    // BADGES SYSTEM - Define badge types and effects
    const badges = {
        // COMMON BADGES (30 types)
        'damage_boost_1': { name: 'Sharp Edge', emoji: '⚔️', rarity: 'common', effect: 'damage', value: 3, description: '+3 Normal Damage' },
        'health_boost_1': { name: 'Tough Skin', emoji: '💚', rarity: 'common', effect: 'health', value: 15, description: '+15 Max HP' },
        'speed_boost_1': { name: 'Quick Feet', emoji: '👟', rarity: 'common', effect: 'speed', value: 1, description: '+1 Movement Speed' },
        'reload_boost_1': { name: 'Fast Hands', emoji: '⚡', rarity: 'common', effect: 'reload', value: 0.1, description: '-10% Reload Time' },
        'special_boost_1': { name: 'Power Focus', emoji: '💥', rarity: 'common', effect: 'special_damage', value: 5, description: '+5 Special Damage' },
        'defense_1': { name: 'Armor Plate', emoji: '🛡️', rarity: 'common', effect: 'defense', value: 3, description: '-3% Damage Taken' },
        'critical_1': { name: 'Lucky Strike', emoji: '🎯', rarity: 'common', effect: 'critical', value: 5, description: '+5% Critical Chance' },
        'lifesteal_1': { name: 'Vampire Touch', emoji: '🩸', rarity: 'common', effect: 'lifesteal', value: 3, description: '+3% Lifesteal' },
        'dodge_1': { name: 'Nimble Step', emoji: '💨', rarity: 'common', effect: 'dodge', value: 5, description: '+5% Dodge Chance' },
        'accuracy_1': { name: 'Eagle Eye', emoji: '👁️', rarity: 'common', effect: 'accuracy', value: 5, description: '+5% Accuracy' },
        // More common badges
        'damage_boost_2': { name: 'Steel Edge', emoji: '⚔️', rarity: 'common', effect: 'damage', value: 5, description: '+5 Normal Damage' },
        'health_boost_2': { name: 'Iron Body', emoji: '💚', rarity: 'common', effect: 'health', value: 25, description: '+25 Max HP' },
        'speed_boost_2': { name: 'Swift Legs', emoji: '👟', rarity: 'common', effect: 'speed', value: 2, description: '+2 Movement Speed' },
        'reload_boost_2': { name: 'Quick Draw', emoji: '⚡', rarity: 'common', effect: 'reload', value: 0.15, description: '-15% Reload Time' },
        'special_boost_2': { name: 'Power Surge', emoji: '💥', rarity: 'common', effect: 'special_damage', value: 8, description: '+8 Special Damage' },
        'defense_2': { name: 'Chain Mail', emoji: '🛡️', rarity: 'common', effect: 'defense', value: 5, description: '-5% Damage Taken' },
        'critical_2': { name: 'Sharp Eye', emoji: '🎯', rarity: 'common', effect: 'critical', value: 8, description: '+8% Critical Chance' },
        'lifesteal_2': { name: 'Blood Drain', emoji: '🩸', rarity: 'common', effect: 'lifesteal', value: 5, description: '+5% Lifesteal' },
        'dodge_2': { name: 'Shadow Step', emoji: '💨', rarity: 'common', effect: 'dodge', value: 8, description: '+8% Dodge Chance' },
        'accuracy_2': { name: 'Hawk Vision', emoji: '👁️', rarity: 'common', effect: 'accuracy', value: 8, description: '+8% Accuracy' },
        // Additional unique common badges
        'berserk_1': { name: 'Wild Fury', emoji: '😡', rarity: 'common', effect: 'berserk', value: 5, description: '+5% Damage when below 50% HP' },
        'guardian_1': { name: 'Protective Spirit', emoji: '🛡️', rarity: 'common', effect: 'guardian', value: 3, description: '+3% Damage Reduction' },
        'focus_1': { name: 'Mental Clarity', emoji: '🧠', rarity: 'common', effect: 'focus', value: 10, description: '+10% Special Reload Speed' },
        'warrior_1': { name: 'Battle Stance', emoji: '⚔️', rarity: 'common', effect: 'warrior', value: 2, description: '+2 Damage, -5 HP' },
        'survivor_1': { name: 'Last Stand', emoji: '💀', rarity: 'common', effect: 'survivor', value: 10, description: '+10% Defense when below 25% HP' },
        'hunter_1': { name: 'Predator Instinct', emoji: '🏹', rarity: 'common', effect: 'hunter', value: 5, description: '+5% Damage vs High HP enemies' },
        'medic_1': { name: 'Field Medicine', emoji: '⚕️', rarity: 'common', effect: 'medic', value: 1, description: '+1 HP per second regeneration' },
        'assassin_1': { name: 'Silent Strike', emoji: '🔪', rarity: 'common', effect: 'assassin', value: 10, description: '+10% Critical Damage' },
        'tank_1': { name: 'Fortress Body', emoji: '🏰', rarity: 'common', effect: 'tank', value: 20, description: '+20 HP, -1 Speed' },
        'elementalist_1': { name: 'Elemental Touch', emoji: '🌟', rarity: 'common', effect: 'elementalist', value: 3, description: '+3 Special Damage' },

        // RARE BADGES (20 types)
        'legendary_strike': { name: 'Legendary Strike', emoji: '⚡', rarity: 'rare', effect: 'damage', value: 10, description: '+10 Normal Damage' },
        'titan_health': { name: 'Titan Health', emoji: '💚', rarity: 'rare', effect: 'health', value: 50, description: '+50 Max HP' },
        'lightning_speed': { name: 'Lightning Speed', emoji: '⚡', rarity: 'rare', effect: 'speed', value: 3, description: '+3 Movement Speed' },
        'master_reload': { name: 'Master Reload', emoji: '🔄', rarity: 'rare', effect: 'reload', value: 0.25, description: '-25% Reload Time' },
        'devastation': { name: 'Devastation', emoji: '💥', rarity: 'rare', effect: 'special_damage', value: 15, description: '+15 Special Damage' },
        'fortress_armor': { name: 'Fortress Armor', emoji: '🛡️', rarity: 'rare', effect: 'defense', value: 10, description: '-10% Damage Taken' },
        'death_strike': { name: 'Death Strike', emoji: '💀', rarity: 'rare', effect: 'critical', value: 15, description: '+15% Critical Chance' },
        'vampire_lord': { name: 'Vampire Lord', emoji: '🩸', rarity: 'rare', effect: 'lifesteal', value: 10, description: '+10% Lifesteal' },
        'phantom_dodge': { name: 'Phantom Dodge', emoji: '👻', rarity: 'rare', effect: 'dodge', value: 15, description: '+15% Dodge Chance' },
        'sniper_scope': { name: 'Sniper Scope', emoji: '🎯', rarity: 'rare', effect: 'accuracy', value: 15, description: '+15% Accuracy' },
        // More rare badges
        'berserker_rage': { name: 'Berserker Rage', emoji: '😡', rarity: 'rare', effect: 'berserk', value: 15, description: '+15% Damage when below 50% HP' },
        'divine_protection': { name: 'Divine Protection', emoji: '✨', rarity: 'rare', effect: 'guardian', value: 8, description: '+8% Damage Reduction' },
        'mind_focus': { name: 'Mind Focus', emoji: '🧠', rarity: 'rare', effect: 'focus', value: 20, description: '+20% Special Reload Speed' },
        'warlord': { name: 'Warlord', emoji: '👑', rarity: 'rare', effect: 'warrior', value: 8, description: '+8 Damage, -10 HP' },
        'immortal_will': { name: 'Immortal Will', emoji: '♾️', rarity: 'rare', effect: 'survivor', value: 20, description: '+20% Defense when below 25% HP' },
        'apex_predator': { name: 'Apex Predator', emoji: '🦅', rarity: 'rare', effect: 'hunter', value: 12, description: '+12% Damage vs High HP enemies' },
        'battle_medic': { name: 'Battle Medic', emoji: '⚕️', rarity: 'rare', effect: 'medic', value: 2, description: '+2 HP per second regeneration' },
        'shadow_assassin': { name: 'Shadow Assassin', emoji: '🥷', rarity: 'rare', effect: 'assassin', value: 20, description: '+20% Critical Damage' },
        'immovable_object': { name: 'Immovable Object', emoji: '🗿', rarity: 'rare', effect: 'tank', value: 40, description: '+40 HP, -2 Speed' },
        'arcane_master': { name: 'Arcane Master', emoji: '🔮', rarity: 'rare', effect: 'elementalist', value: 12, description: '+12 Special Damage' },

        // EPIC BADGES (15 types)
        'god_slayer': { name: 'God Slayer', emoji: '⚔️', rarity: 'epic', effect: 'damage', value: 20, description: '+20 Normal Damage' },
        'eternal_vigor': { name: 'Eternal Vigor', emoji: '💚', rarity: 'epic', effect: 'health', value: 100, description: '+100 Max HP' },
        'supersonic': { name: 'Supersonic', emoji: '💨', rarity: 'epic', effect: 'speed', value: 5, description: '+5 Movement Speed' },
        'instant_reload': { name: 'Instant Reload', emoji: '⚡', rarity: 'epic', effect: 'reload', value: 0.40, description: '-40% Reload Time' },
        'apocalypse': { name: 'Apocalypse', emoji: '💥', rarity: 'epic', effect: 'special_damage', value: 25, description: '+25 Special Damage' },
        'invincible_shield': { name: 'Invincible Shield', emoji: '🛡️', rarity: 'epic', effect: 'defense', value: 18, description: '-18% Damage Taken' },
        'perfect_strike': { name: 'Perfect Strike', emoji: '🎯', rarity: 'epic', effect: 'critical', value: 25, description: '+25% Critical Chance' },
        'soul_reaper': { name: 'Soul Reaper', emoji: '💀', rarity: 'epic', effect: 'lifesteal', value: 18, description: '+18% Lifesteal' },
        'untouchable': { name: 'Untouchable', emoji: '👻', rarity: 'epic', effect: 'dodge', value: 25, description: '+25% Dodge Chance' },
        'eagle_precision': { name: 'Eagle Precision', emoji: '🦅', rarity: 'epic', effect: 'accuracy', value: 25, description: '+25% Accuracy' },
        // More epic badges
        'infinite_rage': { name: 'Infinite Rage', emoji: '🔥', rarity: 'epic', effect: 'berserk', value: 30, description: '+30% Damage when below 50% HP' },
        'celestial_ward': { name: 'Celestial Ward', emoji: '⭐', rarity: 'epic', effect: 'guardian', value: 15, description: '+15% Damage Reduction' },
        'time_mastery': { name: 'Time Mastery', emoji: '⏰', rarity: 'epic', effect: 'focus', value: 35, description: '+35% Special Reload Speed' },
        'destroyer_king': { name: 'Destroyer King', emoji: '👑', rarity: 'epic', effect: 'warrior', value: 15, description: '+15 Damage, -20 HP' },
        'phoenix_rebirth': { name: 'Phoenix Rebirth', emoji: '🔥', rarity: 'epic', effect: 'survivor', value: 35, description: '+35% Defense when below 25% HP' },

        // LEGENDARY BADGES (10 types) - The ultimate power!
        'omnislash': { name: 'Omnislash', emoji: '⚔️', rarity: 'legendary', effect: 'damage', value: 35, description: '+35 Normal Damage' },
        'immortal_essence': { name: 'Immortal Essence', emoji: '♾️', rarity: 'legendary', effect: 'health', value: 150, description: '+150 Max HP' },
        'reality_speed': { name: 'Reality Speed', emoji: '🌟', rarity: 'legendary', effect: 'speed', value: 8, description: '+8 Movement Speed' },
        'time_stop': { name: 'Time Stop', emoji: '⏸️', rarity: 'legendary', effect: 'reload', value: 0.60, description: '-60% Reload Time' },
        'universe_destroyer': { name: 'Universe Destroyer', emoji: '🌌', rarity: 'legendary', effect: 'special_damage', value: 40, description: '+40 Special Damage' },
        'absolute_defense': { name: 'Absolute Defense', emoji: '🛡️', rarity: 'legendary', effect: 'defense', value: 25, description: '-25% Damage Taken' },
        'divine_judgment': { name: 'Divine Judgment', emoji: '⚖️', rarity: 'legendary', effect: 'critical', value: 40, description: '+40% Critical Chance' },
        'life_dominion': { name: 'Life Dominion', emoji: '💀', rarity: 'legendary', effect: 'lifesteal', value: 25, description: '+25% Lifesteal' },
        'phase_walker': { name: 'Phase Walker', emoji: '👻', rarity: 'legendary', effect: 'dodge', value: 40, description: '+40% Dodge Chance' },
        'omniscience': { name: 'Omniscience', emoji: '👁️', rarity: 'legendary', effect: 'accuracy', value: 50, description: '+50% Accuracy & Never Miss' }
    };

    // ADDON DRAWING HELPER FUNCTIONS

    // Draw a complete shoe item with logo
    function drawShoe(ctx, x, y, width, height, color, country, sport) {
        ctx.save();

        // Shoe base (rounded toe)
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.roundRect(x, y, width, height, height * 0.3);
        ctx.fill();

        // Shoe sole (darker)
        ctx.fillStyle = '#333';
        ctx.fillRect(x, y + height * 0.7, width, height * 0.3);

        // Shoe laces area (lighter)
        ctx.fillStyle = 'rgba(255,255,255,0.3)';
        ctx.fillRect(x + width * 0.2, y + height * 0.1, width * 0.6, height * 0.4);

        // Draw logo on side of shoe
        if (country) {
            drawCountryFlag(ctx, x + width * 0.1, y + height * 0.2, width * 0.3, height * 0.4, country);
        } else if (sport) {
            drawSportLogo(ctx, x + width * 0.25, y + height * 0.4, height * 0.3, sport);
        }

        ctx.restore();
    }

    // Draw complete pants item with logo
    function drawPants(ctx, waistX, waistY, leftFootX, leftFootY, rightFootX, rightFootY, width, color, country, sport) {
        ctx.save();

        // Left leg
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.moveTo(waistX - width/2, waistY);
        ctx.lineTo(waistX - width/2 - 2, waistY);
        ctx.lineTo(leftFootX - width/2, leftFootY);
        ctx.lineTo(leftFootX + width/2, leftFootY);
        ctx.lineTo(waistX + 2, waistY);
        ctx.lineTo(waistX, waistY);
        ctx.closePath();
        ctx.fill();

        // Right leg
        ctx.beginPath();
        ctx.moveTo(waistX, waistY);
        ctx.lineTo(waistX + width/2 + 2, waistY);
        ctx.lineTo(rightFootX + width/2, rightFootY);
        ctx.lineTo(rightFootX - width/2, rightFootY);
        ctx.lineTo(waistX - 2, waistY);
        ctx.lineTo(waistX, waistY);
        ctx.closePath();
        ctx.fill();

        // Waistband (darker)
        ctx.fillStyle = 'rgba(0,0,0,0.3)';
        ctx.fillRect(waistX - width, waistY - width * 0.15, width * 2, width * 0.15);

        // Belt loops
        ctx.fillStyle = 'rgba(0,0,0,0.5)';
        for (let i = -1; i <= 1; i++) {
            ctx.fillRect(waistX + i * width * 0.4, waistY - width * 0.15, width * 0.1, width * 0.2);
        }

        // Draw logo on thigh area
        if (country) {
            drawCountryFlag(ctx, waistX - width * 0.6, waistY + width * 0.5, width * 1.2, width * 0.8, country);
        } else if (sport) {
            drawSportLogo(ctx, waistX, waistY + width, width * 0.4, sport);
        }

        ctx.restore();
    }

    // Draw complete shirt item with logo
    function drawShirt(ctx, neckX, neckY, waistY, leftShoulderX, leftShoulderY, rightShoulderX, rightShoulderY, leftHandX, leftHandY, rightHandX, rightHandY, width, color, country, sport) {
        ctx.save();

        // Torso
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.moveTo(leftShoulderX, leftShoulderY);
        ctx.lineTo(rightShoulderX, rightShoulderY);
        ctx.lineTo(neckX + width, waistY);
        ctx.lineTo(neckX - width, waistY);
        ctx.closePath();
        ctx.fill();

        // Left sleeve - extra wide to fully cover arm at all angles
        ctx.beginPath();
        ctx.moveTo(leftShoulderX, leftShoulderY);
        ctx.lineTo(leftShoulderX - width * 0.8, leftShoulderY);
        ctx.lineTo(leftHandX - width * 0.7, leftHandY);
        ctx.lineTo(leftHandX + width * 0.7, leftHandY);
        ctx.closePath();
        ctx.fill();

        // Right sleeve - extra wide to fully cover arm at all angles
        ctx.beginPath();
        ctx.moveTo(rightShoulderX, rightShoulderY);
        ctx.lineTo(rightShoulderX + width * 0.8, rightShoulderY);
        ctx.lineTo(rightHandX + width * 0.7, rightHandY);
        ctx.lineTo(rightHandX - width * 0.7, rightHandY);
        ctx.closePath();
        ctx.fill();

        // Collar
        ctx.fillStyle = 'rgba(0,0,0,0.3)';
        ctx.beginPath();
        ctx.arc(neckX, neckY, width * 0.4, 0, Math.PI * 2);
        ctx.fill();

        // Draw logo on chest - ALWAYS draw something!
        const chestY = neckY + (waistY - neckY) * 0.4;
        if (country) {
            drawCountryFlag(ctx, neckX - width * 0.8, chestY - width * 0.4, width * 1.6, width * 0.8, country);
        } else if (sport) {
            drawSportLogo(ctx, neckX, chestY, width * 0.5, sport);
        } else {
            // Default design: Draw a number or simple pattern
            ctx.fillStyle = 'rgba(255,255,255,0.8)';
            ctx.font = `bold ${width * 1.5}px Arial`;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            // Generate a random-ish number based on color (so it's consistent)
            const colorHash = color.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
            const number = (colorHash % 99) + 1;
            ctx.fillText(number.toString(), neckX, chestY);
            ctx.textAlign = 'left';
        }

        ctx.restore();
    }

    // Draw complete hat item with logo
    function drawHat(ctx, x, y, width, height, color, country, sport) {
        ctx.save();

        // Hat brim (wider)
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.ellipse(x, y, width * 1.2, height * 0.3, 0, 0, Math.PI * 2);
        ctx.fill();

        // Hat crown (rounded top)
        ctx.beginPath();
        ctx.ellipse(x, y - height * 0.3, width * 0.8, height * 0.5, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillRect(x - width * 0.8, y - height * 0.3, width * 1.6, height * 0.3);

        // Hat band (darker)
        ctx.fillStyle = 'rgba(0,0,0,0.4)';
        ctx.fillRect(x - width * 0.85, y - height * 0.1, width * 1.7, height * 0.15);

        // Draw logo on front of hat
        if (country) {
            drawCountryFlag(ctx, x - width * 0.6, y - height * 0.5, width * 1.2, height * 0.3, country);
        } else if (sport) {
            drawSportLogo(ctx, x, y - height * 0.35, height * 0.25, sport);
        }

        ctx.restore();
    }

    // Draw country flag pattern on addon
    function drawCountryFlag(ctx, x, y, width, height, country) {
        ctx.save();
        const flags = {
            'usa': () => {
                // Red and white stripes with blue canton
                for (let i = 0; i < 7; i++) {
                    ctx.fillStyle = i % 2 === 0 ? '#B22234' : '#FFFFFF';
                    ctx.fillRect(x, y + (i * height / 7), width, height / 7);
                }
                ctx.fillStyle = '#3C3B6E';
                ctx.fillRect(x, y, width * 0.4, height * 0.5);
            },
            'canada': () => {
                // Red-White-Red with maple leaf
                ctx.fillStyle = '#FF0000';
                ctx.fillRect(x, y, width * 0.25, height);
                ctx.fillRect(x + width * 0.75, y, width * 0.25, height);
                ctx.fillStyle = '#FFFFFF';
                ctx.fillRect(x + width * 0.25, y, width * 0.5, height);
                ctx.fillStyle = '#FF0000';
                ctx.fillRect(x + width * 0.45, y + height * 0.35, width * 0.1, height * 0.3);
            },
            'mexico': () => {
                // Green-White-Red vertical stripes
                ctx.fillStyle = '#006847';
                ctx.fillRect(x, y, width / 3, height);
                ctx.fillStyle = '#FFFFFF';
                ctx.fillRect(x + width / 3, y, width / 3, height);
                ctx.fillStyle = '#CE1126';
                ctx.fillRect(x + 2 * width / 3, y, width / 3, height);
            },
            'brazil': () => {
                // Green background with yellow diamond
                ctx.fillStyle = '#009C3B';
                ctx.fillRect(x, y, width, height);
                ctx.fillStyle = '#FFDF00';
                ctx.beginPath();
                ctx.moveTo(x + width / 2, y + height * 0.2);
                ctx.lineTo(x + width * 0.8, y + height / 2);
                ctx.lineTo(x + width / 2, y + height * 0.8);
                ctx.lineTo(x + width * 0.2, y + height / 2);
                ctx.closePath();
                ctx.fill();
            },
            'uk': () => {
                // Union Jack simplified
                ctx.fillStyle = '#012169';
                ctx.fillRect(x, y, width, height);
                ctx.fillStyle = '#FFFFFF';
                ctx.fillRect(x, y + height * 0.4, width, height * 0.2);
                ctx.fillRect(x + width * 0.4, y, width * 0.2, height);
            },
            'france': () => {
                // Blue-White-Red vertical stripes
                ctx.fillStyle = '#0055A4';
                ctx.fillRect(x, y, width / 3, height);
                ctx.fillStyle = '#FFFFFF';
                ctx.fillRect(x + width / 3, y, width / 3, height);
                ctx.fillStyle = '#EF4135';
                ctx.fillRect(x + 2 * width / 3, y, width / 3, height);
            },
            'germany': () => {
                // Black-Red-Gold horizontal stripes
                ctx.fillStyle = '#000000';
                ctx.fillRect(x, y, width, height / 3);
                ctx.fillStyle = '#DD0000';
                ctx.fillRect(x, y + height / 3, width, height / 3);
                ctx.fillStyle = '#FFCE00';
                ctx.fillRect(x, y + 2 * height / 3, width, height / 3);
            },
            'italy': () => {
                // Green-White-Red vertical stripes
                ctx.fillStyle = '#009246';
                ctx.fillRect(x, y, width / 3, height);
                ctx.fillStyle = '#FFFFFF';
                ctx.fillRect(x + width / 3, y, width / 3, height);
                ctx.fillStyle = '#CE2B37';
                ctx.fillRect(x + 2 * width / 3, y, width / 3, height);
            },
            'spain': () => {
                // Red-Yellow-Red horizontal stripes
                ctx.fillStyle = '#AA151B';
                ctx.fillRect(x, y, width, height * 0.25);
                ctx.fillStyle = '#F1BF00';
                ctx.fillRect(x, y + height * 0.25, width, height * 0.5);
                ctx.fillStyle = '#AA151B';
                ctx.fillRect(x, y + height * 0.75, width, height * 0.25);
            },
            'japan': () => {
                // White with red circle
                ctx.fillStyle = '#FFFFFF';
                ctx.fillRect(x, y, width, height);
                ctx.fillStyle = '#BC002D';
                ctx.beginPath();
                ctx.arc(x + width / 2, y + height / 2, Math.min(width, height) * 0.3, 0, Math.PI * 2);
                ctx.fill();
            },
            'china': () => {
                // Red with yellow stars
                ctx.fillStyle = '#DE2910';
                ctx.fillRect(x, y, width, height);
                ctx.fillStyle = '#FFDE00';
                ctx.beginPath();
                ctx.arc(x + width * 0.3, y + height * 0.3, Math.min(width, height) * 0.15, 0, Math.PI * 2);
                ctx.fill();
            },
            'india': () => {
                // Orange-White-Green horizontal stripes
                ctx.fillStyle = '#FF9933';
                ctx.fillRect(x, y, width, height / 3);
                ctx.fillStyle = '#FFFFFF';
                ctx.fillRect(x, y + height / 3, width, height / 3);
                ctx.fillStyle = '#138808';
                ctx.fillRect(x, y + 2 * height / 3, width, height / 3);
            },
            'australia': () => {
                // Blue with Union Jack and stars
                ctx.fillStyle = '#012169';
                ctx.fillRect(x, y, width, height);
                ctx.fillStyle = '#FFFFFF';
                ctx.beginPath();
                ctx.arc(x + width * 0.7, y + height * 0.7, Math.min(width, height) * 0.1, 0, Math.PI * 2);
                ctx.fill();
            },
            'russia': () => {
                // White-Blue-Red horizontal stripes
                ctx.fillStyle = '#FFFFFF';
                ctx.fillRect(x, y, width, height / 3);
                ctx.fillStyle = '#0039A6';
                ctx.fillRect(x, y + height / 3, width, height / 3);
                ctx.fillStyle = '#D52B1E';
                ctx.fillRect(x, y + 2 * height / 3, width, height / 3);
            },
            'south_korea': () => {
                // White with red/blue circle
                ctx.fillStyle = '#FFFFFF';
                ctx.fillRect(x, y, width, height);
                ctx.fillStyle = '#CD2E3A';
                ctx.beginPath();
                ctx.arc(x + width / 2, y + height / 2, Math.min(width, height) * 0.25, 0, Math.PI);
                ctx.fill();
                ctx.fillStyle = '#0047A0';
                ctx.beginPath();
                ctx.arc(x + width / 2, y + height / 2, Math.min(width, height) * 0.25, Math.PI, Math.PI * 2);
                ctx.fill();
            }
        };

        if (flags[country]) {
            flags[country]();
        }
        ctx.restore();
    }

    // Draw sport logo on addon
    function drawSportLogo(ctx, x, y, size, sport) {
        ctx.save();
        const logos = {
            'soccer': () => {
                // Soccer ball pattern
                ctx.fillStyle = '#FFFFFF';
                ctx.beginPath();
                ctx.arc(x, y, size, 0, Math.PI * 2);
                ctx.fill();
                ctx.strokeStyle = '#000000';
                ctx.lineWidth = size * 0.1;
                ctx.stroke();
                // Pentagon pattern
                ctx.fillStyle = '#000000';
                for (let i = 0; i < 5; i++) {
                    const angle = (i * Math.PI * 2 / 5) - Math.PI / 2;
                    ctx.beginPath();
                    ctx.arc(x + Math.cos(angle) * size * 0.5, y + Math.sin(angle) * size * 0.5, size * 0.15, 0, Math.PI * 2);
                    ctx.fill();
                }
            },
            'basketball': () => {
                // Basketball with lines
                ctx.fillStyle = '#FF6600';
                ctx.beginPath();
                ctx.arc(x, y, size, 0, Math.PI * 2);
                ctx.fill();
                ctx.strokeStyle = '#000000';
                ctx.lineWidth = size * 0.05;
                ctx.beginPath();
                ctx.arc(x, y, size, 0, Math.PI * 2);
                ctx.stroke();
                ctx.beginPath();
                ctx.moveTo(x - size, y);
                ctx.lineTo(x + size, y);
                ctx.stroke();
            },
            'baseball': () => {
                // Baseball with stitches
                ctx.fillStyle = '#FFFFFF';
                ctx.beginPath();
                ctx.arc(x, y, size, 0, Math.PI * 2);
                ctx.fill();
                ctx.strokeStyle = '#FF0000';
                ctx.lineWidth = size * 0.08;
                ctx.setLineDash([size * 0.1, size * 0.1]);
                ctx.beginPath();
                ctx.arc(x, y, size * 0.7, Math.PI * 0.3, Math.PI * 0.7);
                ctx.stroke();
                ctx.beginPath();
                ctx.arc(x, y, size * 0.7, Math.PI * 1.3, Math.PI * 1.7);
                ctx.stroke();
                ctx.setLineDash([]);
            },
            'football': () => {
                // American football
                ctx.fillStyle = '#8B4513';
                ctx.beginPath();
                ctx.ellipse(x, y, size, size * 0.6, 0, 0, Math.PI * 2);
                ctx.fill();
                ctx.strokeStyle = '#FFFFFF';
                ctx.lineWidth = size * 0.08;
                ctx.beginPath();
                ctx.moveTo(x - size * 0.5, y);
                ctx.lineTo(x + size * 0.5, y);
                ctx.stroke();
            },
            'hockey': () => {
                // Hockey puck
                ctx.fillStyle = '#000000';
                ctx.beginPath();
                ctx.ellipse(x, y, size, size * 0.3, 0, 0, Math.PI * 2);
                ctx.fill();
                ctx.strokeStyle = '#FFFFFF';
                ctx.lineWidth = size * 0.05;
                ctx.stroke();
            },
            'tennis': () => {
                // Tennis ball
                ctx.fillStyle = '#CCFF00';
                ctx.beginPath();
                ctx.arc(x, y, size, 0, Math.PI * 2);
                ctx.fill();
                ctx.strokeStyle = '#FFFFFF';
                ctx.lineWidth = size * 0.1;
                ctx.beginPath();
                ctx.arc(x - size * 0.3, y, size * 0.8, -Math.PI * 0.3, Math.PI * 0.3);
                ctx.stroke();
                ctx.beginPath();
                ctx.arc(x + size * 0.3, y, size * 0.8, Math.PI * 0.7, Math.PI * 1.3);
                ctx.stroke();
            },
            'golf': () => {
                // Golf ball with dimples
                ctx.fillStyle = '#FFFFFF';
                ctx.beginPath();
                ctx.arc(x, y, size, 0, Math.PI * 2);
                ctx.fill();
                ctx.fillStyle = '#CCCCCC';
                for (let i = 0; i < 8; i++) {
                    const angle = i * Math.PI / 4;
                    ctx.beginPath();
                    ctx.arc(x + Math.cos(angle) * size * 0.5, y + Math.sin(angle) * size * 0.5, size * 0.1, 0, Math.PI * 2);
                    ctx.fill();
                }
            },
            'boxing': () => {
                // Boxing glove shape
                ctx.fillStyle = '#FF0000';
                ctx.beginPath();
                ctx.arc(x, y, size, 0, Math.PI * 2);
                ctx.fill();
                ctx.fillStyle = '#8B0000';
                ctx.fillRect(x - size * 0.3, y + size * 0.5, size * 0.6, size * 0.5);
            },
            'racing': () => {
                // Checkered flag pattern
                const squares = 4;
                const squareSize = size / squares;
                for (let i = 0; i < squares; i++) {
                    for (let j = 0; j < squares; j++) {
                        ctx.fillStyle = (i + j) % 2 === 0 ? '#000000' : '#FFFFFF';
                        ctx.fillRect(x - size + i * squareSize, y - size + j * squareSize, squareSize, squareSize);
                    }
                }
            },
            'cycling': () => {
                // Bicycle wheel
                ctx.strokeStyle = '#000000';
                ctx.lineWidth = size * 0.1;
                ctx.beginPath();
                ctx.arc(x, y, size, 0, Math.PI * 2);
                ctx.stroke();
                for (let i = 0; i < 8; i++) {
                    const angle = i * Math.PI / 4;
                    ctx.beginPath();
                    ctx.moveTo(x, y);
                    ctx.lineTo(x + Math.cos(angle) * size, y + Math.sin(angle) * size);
                    ctx.stroke();
                }
            },
            'wizard': () => {
                // Star and moon
                ctx.fillStyle = '#FFD700';
                ctx.beginPath();
                for (let i = 0; i < 5; i++) {
                    const angle = (i * Math.PI * 2 / 5) - Math.PI / 2;
                    const outerRadius = i % 2 === 0 ? size : size * 0.4;
                    ctx.lineTo(x + Math.cos(angle) * outerRadius, y + Math.sin(angle) * outerRadius);
                }
                ctx.closePath();
                ctx.fill();
            },
            'knight': () => {
                // Shield
                ctx.fillStyle = '#C0C0C0';
                ctx.beginPath();
                ctx.moveTo(x, y - size);
                ctx.lineTo(x + size * 0.7, y - size * 0.5);
                ctx.lineTo(x + size * 0.7, y + size * 0.5);
                ctx.lineTo(x, y + size);
                ctx.lineTo(x - size * 0.7, y + size * 0.5);
                ctx.lineTo(x - size * 0.7, y - size * 0.5);
                ctx.closePath();
                ctx.fill();
                ctx.strokeStyle = '#FFD700';
                ctx.lineWidth = size * 0.1;
                ctx.stroke();
            },
            'ninja': () => {
                // Shuriken (ninja star)
                ctx.fillStyle = '#808080';
                ctx.beginPath();
                for (let i = 0; i < 4; i++) {
                    const angle = (i * Math.PI / 2);
                    ctx.moveTo(x, y);
                    ctx.lineTo(x + Math.cos(angle) * size, y + Math.sin(angle) * size);
                    ctx.lineTo(x + Math.cos(angle + Math.PI / 4) * size * 0.5, y + Math.sin(angle + Math.PI / 4) * size * 0.5);
                }
                ctx.closePath();
                ctx.fill();
            },
            'chef': () => {
                // Chef hat outline
                ctx.strokeStyle = '#000000';
                ctx.lineWidth = size * 0.15;
                ctx.beginPath();
                ctx.arc(x, y - size * 0.3, size * 0.7, 0, Math.PI * 2);
                ctx.stroke();
                ctx.fillRect(x - size * 0.8, y + size * 0.3, size * 1.6, size * 0.3);
            },
            'doctor': () => {
                // Medical cross
                ctx.fillStyle = '#FF0000';
                ctx.fillRect(x - size * 0.3, y - size, size * 0.6, size * 2);
                ctx.fillRect(x - size, y - size * 0.3, size * 2, size * 0.6);
            },
            'pilot': () => {
                // Wings
                ctx.fillStyle = '#FFD700';
                ctx.beginPath();
                ctx.ellipse(x - size * 0.5, y, size * 0.8, size * 0.4, -Math.PI / 6, 0, Math.PI * 2);
                ctx.fill();
                ctx.beginPath();
                ctx.ellipse(x + size * 0.5, y, size * 0.8, size * 0.4, Math.PI / 6, 0, Math.PI * 2);
                ctx.fill();
            },
            'winter': () => {
                // Snowflake
                ctx.strokeStyle = '#FFFFFF';
                ctx.lineWidth = size * 0.15;
                for (let i = 0; i < 6; i++) {
                    const angle = i * Math.PI / 3;
                    ctx.beginPath();
                    ctx.moveTo(x, y);
                    ctx.lineTo(x + Math.cos(angle) * size, y + Math.sin(angle) * size);
                    ctx.stroke();
                }
            },
            'summer': () => {
                // Sun
                ctx.fillStyle = '#FFD700';
                ctx.beginPath();
                ctx.arc(x, y, size * 0.5, 0, Math.PI * 2);
                ctx.fill();
                for (let i = 0; i < 8; i++) {
                    const angle = i * Math.PI / 4;
                    ctx.beginPath();
                    ctx.moveTo(x + Math.cos(angle) * size * 0.6, y + Math.sin(angle) * size * 0.6);
                    ctx.lineTo(x + Math.cos(angle) * size, y + Math.sin(angle) * size);
                    ctx.stroke();
                }
            },
            '80s': () => {
                // Cassette tape
                ctx.fillStyle = '#FF1493';
                ctx.fillRect(x - size, y - size * 0.6, size * 2, size * 1.2);
                ctx.fillStyle = '#000000';
                ctx.beginPath();
                ctx.arc(x - size * 0.4, y, size * 0.3, 0, Math.PI * 2);
                ctx.arc(x + size * 0.4, y, size * 0.3, 0, Math.PI * 2);
                ctx.fill();
            },
            '90s': () => {
                // CD disc
                ctx.fillStyle = '#C0C0C0';
                ctx.beginPath();
                ctx.arc(x, y, size, 0, Math.PI * 2);
                ctx.fill();
                ctx.fillStyle = '#000000';
                ctx.beginPath();
                ctx.arc(x, y, size * 0.3, 0, Math.PI * 2);
                ctx.fill();
            },
            'army': () => {
                // Camo pattern
                ctx.fillStyle = '#4B5320';
                ctx.fillRect(x - size, y - size, size * 2, size * 2);
                ctx.fillStyle = '#3D3D3D';
                ctx.beginPath();
                ctx.arc(x - size * 0.3, y - size * 0.3, size * 0.4, 0, Math.PI * 2);
                ctx.arc(x + size * 0.4, y + size * 0.2, size * 0.3, 0, Math.PI * 2);
                ctx.fill();
            },
            'navy': () => {
                // Anchor
                ctx.strokeStyle = '#FFFFFF';
                ctx.lineWidth = size * 0.15;
                ctx.beginPath();
                ctx.moveTo(x, y - size);
                ctx.lineTo(x, y + size * 0.5);
                ctx.stroke();
                ctx.beginPath();
                ctx.arc(x - size * 0.5, y + size * 0.7, size * 0.3, 0, Math.PI);
                ctx.arc(x + size * 0.5, y + size * 0.7, size * 0.3, 0, Math.PI);
                ctx.stroke();
            }
        };

        if (logos[sport]) {
            logos[sport]();
        }
        ctx.restore();
    }

    // ADDONS SYSTEM - Cosmetic items (Hats, Shirts, Pants, Shoes)
    const addons = {
        // COUNTRY HATS (Common)
        'hat_usa': { name: 'USA Cap', type: 'hat', rarity: 'common', color: '#B22234', pattern: 'stars', emoji: '🧢', icon: '🇺🇸' },
        'hat_canada': { name: 'Canada Toque', type: 'hat', rarity: 'common', color: '#FF0000', pattern: 'maple', emoji: '🎩', icon: '🇨🇦' },
        'hat_mexico': { name: 'Sombrero', type: 'hat', rarity: 'common', color: '#006847', pattern: 'stripes', emoji: '🤠', icon: '🇲🇽' },
        'hat_brazil': { name: 'Brazil Cap', type: 'hat', rarity: 'common', color: '#009C3B', pattern: 'stars', emoji: '🧢', icon: '🇧🇷' },
        'hat_uk': { name: 'British Bowler', type: 'hat', rarity: 'common', color: '#012169', pattern: 'union', emoji: '🎩', icon: '🇬🇧' },
        'hat_france': { name: 'French Beret', type: 'hat', rarity: 'common', color: '#0055A4', pattern: 'tricolor', emoji: '🎨', icon: '🇫🇷' },
        'hat_germany': { name: 'German Cap', type: 'hat', rarity: 'common', color: '#000000', pattern: 'tricolor', emoji: '🧢', icon: '🇩🇪' },
        'hat_italy': { name: 'Italian Cap', type: 'hat', rarity: 'common', color: '#009246', pattern: 'tricolor', emoji: '🧢', icon: '🇮🇹' },
        'hat_spain': { name: 'Spanish Hat', type: 'hat', rarity: 'common', color: '#AA151B', pattern: 'stripes', emoji: '🎩', icon: '🇪🇸' },
        'hat_japan': { name: 'Rising Sun Bandana', type: 'hat', rarity: 'common', color: '#BC002D', pattern: 'circle', emoji: '🥋', icon: '🇯🇵' },
        'hat_china': { name: 'Chinese Hat', type: 'hat', rarity: 'common', color: '#DE2910', pattern: 'stars', emoji: '🎩', icon: '🇨🇳' },
        'hat_india': { name: 'Indian Turban', type: 'hat', rarity: 'common', color: '#FF9933', pattern: 'tricolor', emoji: '👳', icon: '🇮🇳' },
        'hat_australia': { name: 'Aussie Hat', type: 'hat', rarity: 'common', color: '#012169', pattern: 'stars', emoji: '🤠', icon: '🇦🇺' },
        'hat_russia': { name: 'Ushanka', type: 'hat', rarity: 'common', color: '#FFFFFF', pattern: 'tricolor', emoji: '🧣', icon: '🇷🇺' },
        'hat_south_korea': { name: 'Korean Cap', type: 'hat', rarity: 'common', color: '#003478', pattern: 'taeguk', emoji: '🧢', icon: '🇰🇷' },

        // COUNTRY SHIRTS (Rare)
        'shirt_usa': { name: 'USA Jersey', type: 'shirt', rarity: 'rare', color: '#B22234', pattern: 'stars_stripes', emoji: '👕', icon: '🇺🇸' },
        'shirt_canada': { name: 'Canada Jersey', type: 'shirt', rarity: 'rare', color: '#FF0000', pattern: 'maple_leaf', emoji: '👕', icon: '🇨🇦' },
        'shirt_mexico': { name: 'Mexico Jersey', type: 'shirt', rarity: 'rare', color: '#006847', pattern: 'eagle', emoji: '👕', icon: '🇲🇽' },
        'shirt_brazil': { name: 'Brazil Jersey', type: 'shirt', rarity: 'rare', color: '#009C3B', pattern: 'yellow_green', emoji: '👕', icon: '🇧🇷' },
        'shirt_uk': { name: 'UK Jersey', type: 'shirt', rarity: 'rare', color: '#012169', pattern: 'union_jack', emoji: '👕', icon: '🇬🇧' },
        'shirt_france': { name: 'France Jersey', type: 'shirt', rarity: 'rare', color: '#0055A4', pattern: 'tricolor_v', emoji: '👕', icon: '🇫🇷' },
        'shirt_germany': { name: 'Germany Jersey', type: 'shirt', rarity: 'rare', color: '#000000', pattern: 'tricolor_h', emoji: '👕', icon: '🇩🇪' },
        'shirt_italy': { name: 'Italy Jersey', type: 'shirt', rarity: 'rare', color: '#009246', pattern: 'azzurri', emoji: '👕', icon: '🇮🇹' },
        'shirt_spain': { name: 'Spain Jersey', type: 'shirt', rarity: 'rare', color: '#AA151B', pattern: 'red_yellow', emoji: '👕', icon: '🇪🇸' },
        'shirt_japan': { name: 'Japan Jersey', type: 'shirt', rarity: 'rare', color: '#FFFFFF', pattern: 'red_circle', emoji: '👕', icon: '🇯🇵' },
        'shirt_china': { name: 'China Jersey', type: 'shirt', rarity: 'rare', color: '#DE2910', pattern: 'red_stars', emoji: '👕', icon: '🇨🇳' },
        'shirt_india': { name: 'India Jersey', type: 'shirt', rarity: 'rare', color: '#FF9933', pattern: 'tricolor_chakra', emoji: '👕', icon: '🇮🇳' },
        'shirt_australia': { name: 'Australia Jersey', type: 'shirt', rarity: 'rare', color: '#FFCD00', pattern: 'green_gold', emoji: '👕', icon: '🇦🇺' },
        'shirt_russia': { name: 'Russia Jersey', type: 'shirt', rarity: 'rare', color: '#FFFFFF', pattern: 'tricolor_bear', emoji: '👕', icon: '🇷🇺' },
        'shirt_south_korea': { name: 'Korea Jersey', type: 'shirt', rarity: 'rare', color: '#003478', pattern: 'taeguk_red', emoji: '👕', icon: '🇰🇷' },

        // COUNTRY PANTS (Rare)
        'pants_usa': { name: 'USA Pants', type: 'pants', rarity: 'rare', color: '#002868', pattern: 'stars', emoji: '👖', icon: '🇺🇸' },
        'pants_canada': { name: 'Canada Pants', type: 'pants', rarity: 'rare', color: '#FF0000', pattern: 'solid', emoji: '👖', icon: '🇨🇦' },
        'pants_mexico': { name: 'Mexico Pants', type: 'pants', rarity: 'rare', color: '#CE1126', pattern: 'solid', emoji: '👖', icon: '🇲🇽' },
        'pants_brazil': { name: 'Brazil Pants', type: 'pants', rarity: 'rare', color: '#002776', pattern: 'solid', emoji: '👖', icon: '🇧🇷' },
        'pants_uk': { name: 'UK Pants', type: 'pants', rarity: 'rare', color: '#012169', pattern: 'solid', emoji: '👖', icon: '🇬🇧' },
        'pants_france': { name: 'France Pants', type: 'pants', rarity: 'rare', color: '#0055A4', pattern: 'solid', emoji: '👖', icon: '🇫🇷' },
        'pants_germany': { name: 'Germany Pants', type: 'pants', rarity: 'rare', color: '#000000', pattern: 'solid', emoji: '👖', icon: '🇩🇪' },
        'pants_italy': { name: 'Italy Pants', type: 'pants', rarity: 'rare', color: '#009246', pattern: 'solid', emoji: '👖', icon: '🇮🇹' },
        'pants_spain': { name: 'Spain Pants', type: 'pants', rarity: 'rare', color: '#AA151B', pattern: 'solid', emoji: '👖', icon: '🇪🇸' },
        'pants_japan': { name: 'Japan Pants', type: 'pants', rarity: 'rare', color: '#000080', pattern: 'solid', emoji: '👖', icon: '🇯🇵' },
        'pants_china': { name: 'China Pants', type: 'pants', rarity: 'rare', color: '#DE2910', pattern: 'solid', emoji: '👖', icon: '🇨🇳' },
        'pants_india': { name: 'India Pants', type: 'pants', rarity: 'rare', color: '#138808', pattern: 'solid', emoji: '👖', icon: '🇮🇳' },
        'pants_australia': { name: 'Australia Pants', type: 'pants', rarity: 'rare', color: '#008751', pattern: 'solid', emoji: '👖', icon: '🇦🇺' },
        'pants_russia': { name: 'Russia Pants', type: 'pants', rarity: 'rare', color: '#0039A6', pattern: 'solid', emoji: '👖', icon: '🇷🇺' },
        'pants_south_korea': { name: 'Korea Pants', type: 'pants', rarity: 'rare', color: '#003478', pattern: 'solid', emoji: '👖', icon: '🇰🇷' },

        // COUNTRY SHOES (Common)
        'shoes_usa': { name: 'USA Sneakers', type: 'shoes', rarity: 'common', color: '#B22234', pattern: 'stripes', emoji: '👟', icon: '🇺🇸' },
        'shoes_canada': { name: 'Canada Boots', type: 'shoes', rarity: 'common', color: '#FF0000', pattern: 'solid', emoji: '🥾', icon: '🇨🇦' },
        'shoes_mexico': { name: 'Mexico Shoes', type: 'shoes', rarity: 'common', color: '#006847', pattern: 'solid', emoji: '👞', icon: '🇲🇽' },
        'shoes_brazil': { name: 'Brazil Cleats', type: 'shoes', rarity: 'common', color: '#FFDF00', pattern: 'solid', emoji: '⚽', icon: '🇧🇷' },
        'shoes_uk': { name: 'UK Boots', type: 'shoes', rarity: 'common', color: '#012169', pattern: 'solid', emoji: '🥾', icon: '🇬🇧' },
        'shoes_france': { name: 'France Shoes', type: 'shoes', rarity: 'common', color: '#0055A4', pattern: 'solid', emoji: '👞', icon: '🇫🇷' },
        'shoes_germany': { name: 'Germany Boots', type: 'shoes', rarity: 'common', color: '#000000', pattern: 'solid', emoji: '🥾', icon: '🇩🇪' },
        'shoes_italy': { name: 'Italy Shoes', type: 'shoes', rarity: 'common', color: '#009246', pattern: 'solid', emoji: '👞', icon: '🇮🇹' },
        'shoes_spain': { name: 'Spain Shoes', type: 'shoes', rarity: 'common', color: '#AA151B', pattern: 'solid', emoji: '👞', icon: '🇪🇸' },
        'shoes_japan': { name: 'Japan Shoes', type: 'shoes', rarity: 'common', color: '#BC002D', pattern: 'solid', emoji: '👞', icon: '🇯🇵' },
        'shoes_china': { name: 'China Shoes', type: 'shoes', rarity: 'common', color: '#DE2910', pattern: 'solid', emoji: '👞', icon: '🇨🇳' },
        'shoes_india': { name: 'India Sandals', type: 'shoes', rarity: 'common', color: '#FF9933', pattern: 'solid', emoji: '🩴', icon: '🇮🇳' },
        'shoes_australia': { name: 'Australia Boots', type: 'shoes', rarity: 'common', color: '#FFCD00', pattern: 'solid', emoji: '🥾', icon: '🇦🇺' },
        'shoes_russia': { name: 'Russia Boots', type: 'shoes', rarity: 'common', color: '#FFFFFF', pattern: 'solid', emoji: '🥾', icon: '🇷🇺' },
        'shoes_south_korea': { name: 'Korea Shoes', type: 'shoes', rarity: 'common', color: '#003478', pattern: 'solid', emoji: '👞', icon: '🇰🇷' },

        // SPORT HATS (Epic)
        'hat_soccer': { name: 'Soccer Headband', type: 'hat', rarity: 'epic', color: '#000000', pattern: 'sweat', emoji: '🎽', icon: '⚽' },
        'hat_basketball': { name: 'Basketball Cap', type: 'hat', rarity: 'epic', color: '#FF6600', pattern: 'ball', emoji: '🧢', icon: '🏀' },
        'hat_baseball': { name: 'Baseball Cap', type: 'hat', rarity: 'epic', color: '#003087', pattern: 'team', emoji: '🧢', icon: '⚾' },
        'hat_football': { name: 'Football Helmet', type: 'hat', rarity: 'epic', color: '#002244', pattern: 'helmet', emoji: '🪖', icon: '🏈' },
        'hat_hockey': { name: 'Hockey Helmet', type: 'hat', rarity: 'epic', color: '#000000', pattern: 'cage', emoji: '🪖', icon: '🏒' },
        'hat_tennis': { name: 'Tennis Visor', type: 'hat', rarity: 'epic', color: '#FFFFFF', pattern: 'visor', emoji: '🎩', icon: '🎾' },
        'hat_golf': { name: 'Golf Cap', type: 'hat', rarity: 'epic', color: '#228B22', pattern: 'classic', emoji: '🧢', icon: '⛳' },
        'hat_boxing': { name: 'Boxing Headgear', type: 'hat', rarity: 'epic', color: '#FF0000', pattern: 'protective', emoji: '🪖', icon: '🥊' },
        'hat_racing': { name: 'Racing Helmet', type: 'hat', rarity: 'epic', color: '#FF0000', pattern: 'speed', emoji: '🪖', icon: '🏎️' },
        'hat_cycling': { name: 'Cycling Helmet', type: 'hat', rarity: 'epic', color: '#FFFF00', pattern: 'aero', emoji: '🪖', icon: '🚴' },

        // SPORT SHIRTS (Legendary)
        'shirt_soccer': { name: 'Soccer Jersey #10', type: 'shirt', rarity: 'legendary', color: '#FFFFFF', pattern: 'number_10', emoji: '👕', icon: '⚽' },
        'shirt_basketball': { name: 'Basketball Jersey #23', type: 'shirt', rarity: 'legendary', color: '#FF6600', pattern: 'number_23', emoji: '🎽', icon: '🏀' },
        'shirt_baseball': { name: 'Baseball Jersey', type: 'shirt', rarity: 'legendary', color: '#FFFFFF', pattern: 'pinstripes', emoji: '👕', icon: '⚾' },
        'shirt_football': { name: 'Football Jersey #12', type: 'shirt', rarity: 'legendary', color: '#002244', pattern: 'number_12', emoji: '👕', icon: '🏈' },
        'shirt_hockey': { name: 'Hockey Jersey #99', type: 'shirt', rarity: 'legendary', color: '#000000', pattern: 'number_99', emoji: '👕', icon: '🏒' },
        'shirt_tennis': { name: 'Tennis Polo', type: 'shirt', rarity: 'legendary', color: '#FFFFFF', pattern: 'collar', emoji: '👕', icon: '🎾' },
        'shirt_golf': { name: 'Golf Polo', type: 'shirt', rarity: 'legendary', color: '#228B22', pattern: 'classic_polo', emoji: '👕', icon: '⛳' },
        'shirt_boxing': { name: 'Boxing Tank', type: 'shirt', rarity: 'legendary', color: '#FF0000', pattern: 'champion', emoji: '🎽', icon: '🥊' },
        'shirt_racing': { name: 'Racing Suit', type: 'shirt', rarity: 'legendary', color: '#FF0000', pattern: 'sponsor', emoji: '🦺', icon: '🏎️' },
        'shirt_cycling': { name: 'Cycling Jersey', type: 'shirt', rarity: 'legendary', color: '#FFFF00', pattern: 'leader', emoji: '👕', icon: '🚴' },

        // SPORT PANTS (Epic)
        'pants_soccer': { name: 'Soccer Shorts', type: 'pants', rarity: 'epic', color: '#000000', pattern: 'athletic', emoji: '🩳', icon: '⚽' },
        'pants_basketball': { name: 'Basketball Shorts', type: 'pants', rarity: 'epic', color: '#FF6600', pattern: 'baggy', emoji: '🩳', icon: '🏀' },
        'pants_baseball': { name: 'Baseball Pants', type: 'pants', rarity: 'epic', color: '#FFFFFF', pattern: 'pinstripe', emoji: '👖', icon: '⚾' },
        'pants_football': { name: 'Football Pants', type: 'pants', rarity: 'epic', color: '#002244', pattern: 'padded', emoji: '👖', icon: '🏈' },
        'pants_hockey': { name: 'Hockey Pants', type: 'pants', rarity: 'epic', color: '#000000', pattern: 'padded', emoji: '👖', icon: '🏒' },
        'pants_tennis': { name: 'Tennis Shorts', type: 'pants', rarity: 'epic', color: '#FFFFFF', pattern: 'athletic', emoji: '🩳', icon: '🎾' },
        'pants_golf': { name: 'Golf Pants', type: 'pants', rarity: 'epic', color: '#8B4513', pattern: 'khaki', emoji: '👖', icon: '⛳' },
        'pants_boxing': { name: 'Boxing Shorts', type: 'pants', rarity: 'epic', color: '#FF0000', pattern: 'satin', emoji: '🩳', icon: '🥊' },
        'pants_racing': { name: 'Racing Pants', type: 'pants', rarity: 'epic', color: '#FF0000', pattern: 'fireproof', emoji: '👖', icon: '🏎️' },
        'pants_cycling': { name: 'Cycling Shorts', type: 'pants', rarity: 'epic', color: '#000000', pattern: 'padded', emoji: '🩳', icon: '🚴' },

        // SPORT SHOES (Epic)
        'shoes_soccer': { name: 'Soccer Cleats', type: 'shoes', rarity: 'epic', color: '#000000', pattern: 'cleats', emoji: '👟', icon: '⚽' },
        'shoes_basketball': { name: 'Basketball Shoes', type: 'shoes', rarity: 'epic', color: '#FF6600', pattern: 'high_top', emoji: '👟', icon: '🏀' },
        'shoes_baseball': { name: 'Baseball Cleats', type: 'shoes', rarity: 'epic', color: '#FFFFFF', pattern: 'metal_cleats', emoji: '👟', icon: '⚾' },
        'shoes_football': { name: 'Football Cleats', type: 'shoes', rarity: 'epic', color: '#002244', pattern: 'cleats', emoji: '👟', icon: '🏈' },
        'shoes_hockey': { name: 'Hockey Skates', type: 'shoes', rarity: 'epic', color: '#000000', pattern: 'blades', emoji: '⛸️', icon: '🏒' },
        'shoes_tennis': { name: 'Tennis Shoes', type: 'shoes', rarity: 'epic', color: '#FFFFFF', pattern: 'court', emoji: '👟', icon: '🎾' },
        'shoes_golf': { name: 'Golf Shoes', type: 'shoes', rarity: 'epic', color: '#FFFFFF', pattern: 'spikes', emoji: '👞', icon: '⛳' },
        'shoes_boxing': { name: 'Boxing Boots', type: 'shoes', rarity: 'epic', color: '#FF0000', pattern: 'high_ankle', emoji: '🥾', icon: '🥊' },
        'shoes_racing': { name: 'Racing Boots', type: 'shoes', rarity: 'epic', color: '#FF0000', pattern: 'fireproof', emoji: '🥾', icon: '🏎️' },
        'shoes_cycling': { name: 'Cycling Shoes', type: 'shoes', rarity: 'epic', color: '#000000', pattern: 'clip_in', emoji: '👟', icon: '🚴' },

        // FANTASY COLLECTION (Legendary)
        'hat_wizard': { name: 'Wizard Hat', type: 'hat', rarity: 'legendary', color: '#4B0082', pattern: 'stars_moon', emoji: '🧙', icon: '✨' },
        'shirt_wizard': { name: 'Wizard Robe', type: 'shirt', rarity: 'legendary', color: '#4B0082', pattern: 'mystical', emoji: '🧙', icon: '✨' },
        'pants_wizard': { name: 'Wizard Pants', type: 'pants', rarity: 'legendary', color: '#2F1B3C', pattern: 'mystical', emoji: '🧙', icon: '✨' },
        'shoes_wizard': { name: 'Wizard Boots', type: 'shoes', rarity: 'legendary', color: '#4B0082', pattern: 'curled_toe', emoji: '🥾', icon: '✨' },

        'hat_knight': { name: 'Knight Helmet', type: 'hat', rarity: 'legendary', color: '#C0C0C0', pattern: 'metal', emoji: '⚔️', icon: '🛡️' },
        'shirt_knight': { name: 'Knight Armor', type: 'shirt', rarity: 'legendary', color: '#C0C0C0', pattern: 'chainmail', emoji: '⚔️', icon: '🛡️' },
        'pants_knight': { name: 'Knight Greaves', type: 'pants', rarity: 'legendary', color: '#808080', pattern: 'plated', emoji: '⚔️', icon: '🛡️' },
        'shoes_knight': { name: 'Knight Boots', type: 'shoes', rarity: 'legendary', color: '#696969', pattern: 'armored', emoji: '🥾', icon: '🛡️' },

        'hat_ninja': { name: 'Ninja Mask', type: 'hat', rarity: 'legendary', color: '#000000', pattern: 'stealth', emoji: '🥷', icon: '⚔️' },
        'shirt_ninja': { name: 'Ninja Gi', type: 'shirt', rarity: 'legendary', color: '#1C1C1C', pattern: 'stealth', emoji: '🥷', icon: '⚔️' },
        'pants_ninja': { name: 'Ninja Pants', type: 'pants', rarity: 'legendary', color: '#000000', pattern: 'stealth', emoji: '🥷', icon: '⚔️' },
        'shoes_ninja': { name: 'Ninja Tabi', type: 'shoes', rarity: 'legendary', color: '#000000', pattern: 'split_toe', emoji: '🥾', icon: '⚔️' },

        // PROFESSIONAL COLLECTION (Rare)
        'hat_chef': { name: 'Chef Hat', type: 'hat', rarity: 'rare', color: '#FFFFFF', pattern: 'tall', emoji: '👨‍🍳', icon: '🍳' },
        'shirt_chef': { name: 'Chef Coat', type: 'shirt', rarity: 'rare', color: '#FFFFFF', pattern: 'double_breasted', emoji: '👨‍🍳', icon: '🍳' },
        'pants_chef': { name: 'Chef Pants', type: 'pants', rarity: 'rare', color: '#000000', pattern: 'checkered', emoji: '👨‍🍳', icon: '🍳' },
        'shoes_chef': { name: 'Chef Clogs', type: 'shoes', rarity: 'rare', color: '#FFFFFF', pattern: 'slip_resistant', emoji: '👞', icon: '🍳' },

        'hat_doctor': { name: 'Doctor Cap', type: 'hat', rarity: 'rare', color: '#00A8E8', pattern: 'surgical', emoji: '👨‍⚕️', icon: '⚕️' },
        'shirt_doctor': { name: 'Doctor Coat', type: 'shirt', rarity: 'rare', color: '#FFFFFF', pattern: 'lab_coat', emoji: '👨‍⚕️', icon: '⚕️' },
        'pants_doctor': { name: 'Doctor Scrubs', type: 'pants', rarity: 'rare', color: '#00A8E8', pattern: 'medical', emoji: '👨‍⚕️', icon: '⚕️' },
        'shoes_doctor': { name: 'Doctor Shoes', type: 'shoes', rarity: 'rare', color: '#FFFFFF', pattern: 'comfortable', emoji: '👞', icon: '⚕️' },

        'hat_pilot': { name: 'Pilot Cap', type: 'hat', rarity: 'rare', color: '#000080', pattern: 'aviator', emoji: '👨‍✈️', icon: '✈️' },
        'shirt_pilot': { name: 'Pilot Uniform', type: 'shirt', rarity: 'rare', color: '#000080', pattern: 'wings', emoji: '👨‍✈️', icon: '✈️' },
        'pants_pilot': { name: 'Pilot Pants', type: 'pants', rarity: 'rare', color: '#000080', pattern: 'formal', emoji: '👨‍✈️', icon: '✈️' },
        'shoes_pilot': { name: 'Pilot Shoes', type: 'shoes', rarity: 'rare', color: '#000000', pattern: 'polished', emoji: '👞', icon: '✈️' },

        // SEASONAL COLLECTION (Epic)
        'hat_winter': { name: 'Winter Beanie', type: 'hat', rarity: 'epic', color: '#FF0000', pattern: 'knit', emoji: '🧣', icon: '❄️' },
        'shirt_winter': { name: 'Winter Sweater', type: 'shirt', rarity: 'epic', color: '#006400', pattern: 'snowflake', emoji: '🧥', icon: '❄️' },
        'pants_winter': { name: 'Winter Pants', type: 'pants', rarity: 'epic', color: '#2F4F4F', pattern: 'insulated', emoji: '👖', icon: '❄️' },
        'shoes_winter': { name: 'Snow Boots', type: 'shoes', rarity: 'epic', color: '#8B4513', pattern: 'fur_lined', emoji: '🥾', icon: '❄️' },

        'hat_summer': { name: 'Beach Hat', type: 'hat', rarity: 'epic', color: '#F4E4C1', pattern: 'straw', emoji: '🏖️', icon: '☀️' },
        'shirt_summer': { name: 'Hawaiian Shirt', type: 'shirt', rarity: 'epic', color: '#FF6B9D', pattern: 'floral', emoji: '🌺', icon: '☀️' },
        'pants_summer': { name: 'Beach Shorts', type: 'pants', rarity: 'epic', color: '#00CED1', pattern: 'tropical', emoji: '🩳', icon: '☀️' },
        'shoes_summer': { name: 'Flip Flops', type: 'shoes', rarity: 'epic', color: '#FFD700', pattern: 'casual', emoji: '🩴', icon: '☀️' },

        // RETRO COLLECTION (Rare)
        'hat_80s': { name: '80s Headband', type: 'hat', rarity: 'rare', color: '#FF1493', pattern: 'neon', emoji: '🎧', icon: '📼' },
        'shirt_80s': { name: '80s Windbreaker', type: 'shirt', rarity: 'rare', color: '#00FFFF', pattern: 'geometric', emoji: '👕', icon: '📼' },
        'pants_80s': { name: '80s Track Pants', type: 'pants', rarity: 'rare', color: '#9400D3', pattern: 'stripes', emoji: '👖', icon: '📼' },
        'shoes_80s': { name: '80s Sneakers', type: 'shoes', rarity: 'rare', color: '#FF1493', pattern: 'high_top', emoji: '👟', icon: '📼' },

        'hat_90s': { name: '90s Snapback', type: 'hat', rarity: 'rare', color: '#000000', pattern: 'flat_brim', emoji: '🧢', icon: '💿' },
        'shirt_90s': { name: '90s Jersey', type: 'shirt', rarity: 'rare', color: '#FF4500', pattern: 'oversized', emoji: '👕', icon: '💿' },
        'pants_90s': { name: '90s Baggy Jeans', type: 'pants', rarity: 'rare', color: '#4169E1', pattern: 'baggy', emoji: '👖', icon: '💿' },
        'shoes_90s': { name: '90s Platforms', type: 'shoes', rarity: 'rare', color: '#000000', pattern: 'chunky', emoji: '👟', icon: '💿' },

        // MILITARY COLLECTION (Epic)
        'hat_army': { name: 'Army Helmet', type: 'hat', rarity: 'epic', color: '#4B5320', pattern: 'camo', emoji: '🪖', icon: '🎖️' },
        'shirt_army': { name: 'Army Uniform', type: 'shirt', rarity: 'epic', color: '#4B5320', pattern: 'camo', emoji: '🎖️', icon: '🎖️' },
        'pants_army': { name: 'Army Cargo Pants', type: 'pants', rarity: 'epic', color: '#4B5320', pattern: 'camo', emoji: '🎖️', icon: '🎖️' },
        'shoes_army': { name: 'Combat Boots', type: 'shoes', rarity: 'epic', color: '#3D3D3D', pattern: 'tactical', emoji: '🥾', icon: '🎖️' },

        'hat_navy': { name: 'Navy Cap', type: 'hat', rarity: 'epic', color: '#000080', pattern: 'sailor', emoji: '⚓', icon: '⚓' },
        'shirt_navy': { name: 'Navy Uniform', type: 'shirt', rarity: 'epic', color: '#FFFFFF', pattern: 'sailor', emoji: '⚓', icon: '⚓' },
        'pants_navy': { name: 'Navy Pants', type: 'pants', rarity: 'epic', color: '#000080', pattern: 'formal', emoji: '⚓', icon: '⚓' },
        'shoes_navy': { name: 'Navy Boots', type: 'shoes', rarity: 'epic', color: '#000000', pattern: 'polished', emoji: '🥾', icon: '⚓' }
    };

    // Enhanced Unified Chest System - Can give Characters OR Badges!
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
            // 30% chance for character, 70% chance for badge
            const isCharacter = Math.random() < 0.3;

            if (isCharacter) {
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

    function selectItemByChestRarity(availableItems, rarityChances, itemType) {
        // Group items by rarity
        const rarityGroups = {
            common: [],
            rare: [],
            epic: [],
            legendary: []
        };

        availableItems.forEach(itemKey => {
            const rarity = itemType === 'character' ? characters[itemKey].rarity : badges[itemKey].rarity;
            rarityGroups[rarity].push(itemKey);
        });

        // Roll for rarity based on chest type
        const roll = Math.random();
        let selectedRarity;

        if (roll < rarityChances.legendary && rarityGroups.legendary.length > 0) {
            selectedRarity = 'legendary';
        } else if (roll < rarityChances.legendary + rarityChances.epic && rarityGroups.epic.length > 0) {
            selectedRarity = 'epic';
        } else if (roll < rarityChances.legendary + rarityChances.epic + rarityChances.rare && rarityGroups.rare.length > 0) {
            selectedRarity = 'rare';
        } else {
            selectedRarity = 'common';
        }

        // If selected rarity has no available items, fall back to available ones
        const selectedGroup = rarityGroups[selectedRarity];
        if (selectedGroup.length === 0) {
            // Find first available rarity group
            for (const rarity of ['common', 'rare', 'epic', 'legendary']) {
                if (rarityGroups[rarity].length > 0) {
                    return rarityGroups[rarity][Math.floor(Math.random() * rarityGroups[rarity].length)];
                }
            }
        }

        return selectedGroup[Math.floor(Math.random() * selectedGroup.length)];
    }

    // ADDON CHEST SYSTEM - Buy cosmetic items!
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

    function selectItemByChestRarity(availableItems, rarityChances, itemType) {
        // Group items by rarity
        const rarityGroups = {
            common: [],
            rare: [],
            epic: [],
            legendary: []
        };

        availableItems.forEach(itemKey => {
            let rarity;
            if (itemType === 'character') {
                rarity = characters[itemKey].rarity;
            } else if (itemType === 'badge') {
                rarity = badges[itemKey].rarity;
            } else if (itemType === 'addon') {
                rarity = addons[itemKey].rarity;
            }
            rarityGroups[rarity].push(itemKey);
        });

        // Roll for rarity based on chest type
        const roll = Math.random();
        let selectedRarity;

        if (roll < rarityChances.legendary && rarityGroups.legendary.length > 0) {
            selectedRarity = 'legendary';
        } else if (roll < rarityChances.legendary + rarityChances.epic && rarityGroups.epic.length > 0) {
            selectedRarity = 'epic';
        } else if (roll < rarityChances.legendary + rarityChances.epic + rarityChances.rare && rarityGroups.rare.length > 0) {
            selectedRarity = 'rare';
        } else {
            selectedRarity = 'common';
        }

        // If selected rarity has no available items, fall back to available ones
        const selectedGroup = rarityGroups[selectedRarity];
        if (selectedGroup.length === 0) {
            // Find first available rarity group
            for (const rarity of ['common', 'rare', 'epic', 'legendary']) {
                if (rarityGroups[rarity].length > 0) {
                    return rarityGroups[rarity][Math.floor(Math.random() * rarityGroups[rarity].length)];
                }
            }
        }

        return selectedGroup[Math.floor(Math.random() * selectedGroup.length)];
    }

    function updateCharacterGrid() {
        const grid = document.getElementById('characterGrid');
        grid.innerHTML = '';
        
        let currentCharacters;
        if (gameState.gameMode === 'multiplayer') {
            currentCharacters = gameState.currentShopPlayer === 1 ? gameState.player1Characters : gameState.player2Characters;
        } else {
            currentCharacters = gameState.unlockedCharacters;
        }
        
        Object.keys(characters).forEach(charKey => {
            const char = characters[charKey];
            const isUnlocked = currentCharacters.includes(charKey);
            
            const card = document.createElement('div');
            card.className = `character-card ${!isUnlocked ? 'locked' : ''}`;
            
            if (isUnlocked) {
                card.style.borderColor = rarityColors[char.rarity];
            }
            
            card.innerHTML = `
                <div class="character-avatar" style="background: ${isUnlocked ? char.color : '#666'};">
                    <span class="emoji">${isUnlocked ? char.emoji : '🔒'}</span>
                </div>
                <div style="font-weight: bold; ${isUnlocked ? `color: ${rarityColors[char.rarity]};` : ''}">${isUnlocked ? char.name : 'Locked'}</div>
                ${isUnlocked ? `
                    <div style="color: ${rarityColors[char.rarity]}; font-size: 12px; text-transform: uppercase;">${char.rarity}</div>
                    <div style="font-size: 11px; color: #FFD700;">HP: ${char.maxHealth}</div>
                    <div style="font-size: 11px;">Normal: ${char.damage}</div>
                    <div style="font-size: 11px; color: #FF4444;">Special: ${char.specialDamage}</div>
                    <div style="font-size: 10px; color: ${char.specialType === 'long' ? '#4CAF50' : '#FF9800'};">${char.specialType === 'long' ? '📡 LONG RANGE' : '⚔️ CLOSE RANGE'}</div>
                    <div style="font-size: 11px; color: #888;">Reload: ${(char.reloadTime/60).toFixed(1)}s</div>
                ` : ''}
            `;

            // Make unlocked cards clickable to show detail screen
            if (isUnlocked) {
                card.style.cursor = 'pointer';
                card.onclick = () => showCharacterDetail(charKey);
            }

            grid.appendChild(card);
        });
    }

    function updateSelectableCharacters() {
        const grid = document.getElementById('selectableCharacters');
        grid.innerHTML = '';
        
        let currentCharacters;
        if (gameState.gameMode === 'multiplayer') {
            currentCharacters = gameState.player1Characters;
        } else {
            currentCharacters = gameState.unlockedCharacters;
        }

        // Filter characters by tournament tier if in tournament mode
        if (gameState.tournamentMode && gameState.tournamentData.isActive) {
            const tournamentTier = gameState.tournamentData.characterTier;
            const tierCharacters = getCharactersByTier(tournamentTier);

            // Only show characters that match the tournament tier
            currentCharacters = currentCharacters.filter(charKey => {
                return tierCharacters.includes(charKey);
            });

            // Add tournament tier info
            const tierInfo = document.createElement('div');
            tierInfo.style.cssText = 'text-align: center; margin-bottom: 20px; padding: 15px; background: rgba(255, 215, 0, 0.2); border: 2px solid #FFD700; border-radius: 10px; color: #FFD700; font-weight: bold;';
            tierInfo.innerHTML = `🏆 Tournament Mode: ${tournamentTier.toUpperCase()} Characters Only 🏆`;
            grid.appendChild(tierInfo);
        }

        // Filter characters by tournament tier if in 2-player tournament mode
        if (gameState.tournament2PlayerMode && gameState.tournament2PlayerData.isActive) {
            const tournamentTier = gameState.tournament2PlayerData.characterTier;
            const tierCharacters = getCharactersByTier(tournamentTier);
            const currentPlayer = gameState.tournament2PlayerData.currentPlayer;

            // Only show characters that match the tournament tier
            currentCharacters = currentCharacters.filter(charKey => {
                return tierCharacters.includes(charKey);
            });

            // Add tournament tier info
            const tierInfo = document.createElement('div');
            tierInfo.style.cssText = 'text-align: center; margin-bottom: 20px; padding: 15px; background: rgba(233, 30, 99, 0.2); border: 2px solid #E91E63; border-radius: 10px; color: #E91E63; font-weight: bold;';
            tierInfo.innerHTML = `👥 2P Tournament - Player ${currentPlayer}: ${tournamentTier.toUpperCase()} Characters Only 👥`;
            grid.appendChild(tierInfo);
        }

        currentCharacters.forEach(charKey => {
            const char = characters[charKey];
            const card = document.createElement('div');
            card.className = `character-card ${gameState.selectedCharacter === charKey ? 'selected' : ''}`;
            card.style.borderColor = rarityColors[char.rarity];
            card.innerHTML = `
                <div class="character-avatar" style="background: ${char.color}">
                    <span class="emoji">${char.emoji}</span>
                </div>
                <div>${char.name}</div>
                <div style="color: ${rarityColors[char.rarity]}">${char.rarity.toUpperCase()}</div>
                <div>HP: ${char.maxHealth}</div>
                <div>Normal: ${char.damage}</div>
                <div>Special: ${char.specialDamage}</div>
                <div style="font-size: 14px; color: #4CAF50; font-weight: bold;">Normal Reload: ${(char.reloadTime/60).toFixed(1)}s</div>
                <div style="font-size: 14px; color: #FF6666; font-weight: bold;">Special Reload: ${char.specialReloadTime ? (char.specialReloadTime/60).toFixed(1) : '13.0'}s</div>
            `;
            
            card.onclick = () => {
                gameState.selectedCharacter = charKey;
                updateSelectableCharacters();
            };
            
            grid.appendChild(card);
        });
    }

    function handleCharacterNext() {
        if (!gameState.selectedCharacter) {
            showNotification('Please select a character first!');
            return;
        }

        // In tournament mode, lock in the player's character for the series
        if (gameState.tournamentMode && gameState.tournamentData.isActive) {
            const series = gameState.tournamentData.currentSeries;
            if (!series.playerCharacter) {
                series.playerCharacter = gameState.selectedCharacter;
                console.log(`🔒 Player character locked for series: ${characters[gameState.selectedCharacter].name}`);
            }
        }

        // In 2-player tournament mode, lock in the current player's character for the series
        if (gameState.tournament2PlayerMode && gameState.tournament2PlayerData.isActive) {
            const data = gameState.tournament2PlayerData;
            const currentPlayerData = data.currentPlayer === 1 ? data.player1 : data.player2;
            const series = currentPlayerData.currentSeries;

            if (!series.playerCharacter && !data.finalMatch) {
                series.playerCharacter = gameState.selectedCharacter;
                console.log(`🔒 Player ${data.currentPlayer} character locked for series: ${characters[gameState.selectedCharacter].name}`);
            }
        }

        if (gameState.gameMode === 'multiplayer') {
            showPlayer2Select();
        } else {
            showDifficultySelect();
        }
    }

    function showPlayer2Select() {
        updatePlayer2Characters();
        showScreen('player2SelectScreen');
    }

    function showMapSelectMultiplayer() {
        if (!gameState.selectedPlayer2Character) {
            showNotification('Player 2 must select a character first!');
            return;
        }
        showScreen('mapSelectScreen');
    }

    function updatePlayer2Characters() {
        const grid = document.getElementById('player2Characters');
        grid.innerHTML = '';
        
        gameState.player2Characters.forEach(charKey => {
            const char = characters[charKey];
            const card = document.createElement('div');
            card.className = `character-card ${gameState.selectedPlayer2Character === charKey ? 'selected' : ''}`;
            card.style.borderColor = rarityColors[char.rarity];
            card.innerHTML = `
                <div class="character-avatar" style="background: ${char.color}">
                    <span class="emoji">${char.emoji}</span>
                </div>
                <div>${char.name}</div>
                <div style="color: ${rarityColors[char.rarity]}">${char.rarity.toUpperCase()}</div>
                <div>HP: ${char.maxHealth}</div>
                <div>Normal: ${char.damage}</div>
                <div>Special: ${char.specialDamage}</div>
                <div style="font-size: 14px; color: #4CAF50; font-weight: bold;">Normal Reload: ${(char.reloadTime/60).toFixed(1)}s</div>
                <div style="font-size: 14px; color: #FF6666; font-weight: bold;">Special Reload: ${char.specialReloadTime ? (char.specialReloadTime/60).toFixed(1) : '13.0'}s</div>
            `;
            
            card.onclick = () => {
                gameState.selectedPlayer2Character = charKey;
                updatePlayer2Characters();
            };
            
            grid.appendChild(card);
        });
    }

    function updateShopPlayerInfo() {
        const info = document.getElementById('shopPlayerInfo');
        if (gameState.gameMode === 'multiplayer') {
            info.style.display = 'block';
            info.innerHTML = `
                <span style="color: #4CAF50; cursor: pointer; ${gameState.currentShopPlayer === 1 ? 'text-decoration: underline;' : ''}" onclick="gameState.currentShopPlayer = 1; updateShopPlayerInfo(); updateCharacterGrid();">Player 1 Shop (${gameState.player1Coins} coins)</span>
                |
                <span style="color: #FF9800; cursor: pointer; ${gameState.currentShopPlayer === 2 ? 'text-decoration: underline;' : ''}" onclick="gameState.currentShopPlayer = 2; updateShopPlayerInfo(); updateCharacterGrid();">Player 2 Shop (${gameState.player2Coins} coins)</span>
            `;
        } else {
            info.style.display = 'none';
        }
    }

    function updateCollectionPlayerInfo() {
        const info = document.getElementById('collectionPlayerInfo');
        if (gameState.gameMode === 'multiplayer') {
            info.style.display = 'block';
            info.innerHTML = `
                <span style="color: #4CAF50; cursor: pointer; ${gameState.currentShopPlayer === 1 ? 'text-decoration: underline;' : ''}" onclick="gameState.currentShopPlayer = 1; updateCollectionPlayerInfo(); updateCharacterGrid();">Player 1 Collection</span>
                |
                <span style="color: #FF9800; cursor: pointer; ${gameState.currentShopPlayer === 2 ? 'text-decoration: underline;' : ''}" onclick="gameState.currentShopPlayer = 2; updateCollectionPlayerInfo(); updateCharacterGrid();">Player 2 Collection</span>
            `;
        } else {
            info.style.display = 'none';
        }
    }

    function updateCharacterSelectPlayerInfo() {
        const info = document.getElementById('characterSelectPlayerInfo');
        if (gameState.gameMode === 'multiplayer') {
            info.style.display = 'block';
            info.textContent = 'Player 1\'s Characters';
        } else {
            info.style.display = 'none';
        }
    }

    function updateSinglePlayerCoinsDisplay() {
        document.getElementById('coinCount').textContent = gameState.coins;
        updateUniversalCoinsDisplay(); // Also update universal display
    }

    function updateMultiplayerCoinsDisplay() {
        document.getElementById('player1CoinCount').textContent = gameState.player1Coins;
        document.getElementById('player2CoinCount').textContent = gameState.player2Coins;
        updateUniversalCoinsDisplay(); // Also update universal display
    }

    // Universal coin display functions
    function showUniversalCoins() {
        const universalCoins = document.getElementById('universalCoins');
        const singleDisplay = document.getElementById('singlePlayerCoinDisplay');
        const multiDisplay = document.getElementById('multiplayerCoinDisplay');

        universalCoins.style.display = 'block';

        if (gameState.gameMode === 'multiplayer') {
            singleDisplay.style.display = 'none';
            multiDisplay.style.display = 'block';
            universalCoins.classList.add('multiplayer');
            updateUniversalCoinsDisplay();
        } else {
            singleDisplay.style.display = 'block';
            multiDisplay.style.display = 'none';
            universalCoins.classList.remove('multiplayer');
            updateUniversalCoinsDisplay();
        }
    }

    function hideUniversalCoins() {
        document.getElementById('universalCoins').style.display = 'none';
    }

    function updateUniversalCoinsDisplay() {
        if (gameState.gameMode === 'multiplayer') {
            document.getElementById('universalPlayer1Coins').textContent = gameState.player1Coins;
            document.getElementById('universalPlayer2Coins').textContent = gameState.player2Coins;
        } else {
            document.getElementById('universalCoinCount').textContent = gameState.coins;
        }
    }

    // NEW: Trophy Display Functions
    function updateSinglePlayerTrophyDisplay() {
        // Trophy display will be added to UI shortly
    }

    function updateMultiplayerTrophyDisplay() {
        // Trophy display will be added to UI shortly
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

    function updateBattleModeDisplay() {
        const singlePlayerTournamentCard = document.getElementById('singlePlayerTournamentCard');
        const multiPlayerTournamentCard = document.getElementById('multiPlayerTournamentCard');
        const bossBattleCard = document.getElementById('bossBattleCard');

        if (gameState.gameMode === 'multiplayer') {
            // Hide single player tournament, show 2-player tournament and boss battle
            singlePlayerTournamentCard.style.display = 'none';
            multiPlayerTournamentCard.style.display = 'block';
            bossBattleCard.style.display = 'block';
        } else {
            // Show single player tournament, hide 2-player tournament and boss battle
            singlePlayerTournamentCard.style.display = 'block';
            multiPlayerTournamentCard.style.display = 'none';
            bossBattleCard.style.display = 'none';
        }
    }

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

    // TOURNAMENT SYSTEM FUNCTIONS
    function showTournamentSelect() {
        updateTournamentStatus();
        showScreen('tournamentSelectScreen');
    }

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

    // Character tier system for tournaments
    function getCharactersByTier(tier) {
        // Get all character keys and filter by rarity
        const allCharacterKeys = Object.keys(characters);
        return allCharacterKeys.filter(key => {
            const character = characters[key];
            return character.rarity === tier;
        });
    }

    function generateTournamentBracket(rounds, characterTier) {
        // Simple bracket - we don't need complex opponent tracking since we generate enemies dynamically
        return {
            rounds: rounds,
            characterTier: characterTier,
            generated: true
        };
    }

    function startTournamentRound() {
        if (!gameState.tournamentMode || !gameState.tournamentData.isActive) {
            showNotification('No active tournament!');
            return;
        }

        // Proceed to character selection
        showCharacterSelect();
    }

    function updateTournamentStatus() {
        const statusDiv = document.getElementById('tournamentStatus');
        const forfeitButton = document.getElementById('forfeitButton');

        if (gameState.tournamentMode && gameState.tournamentData.isActive) {
            statusDiv.style.display = 'block';
            if (forfeitButton) forfeitButton.style.display = 'block';

            const data = gameState.tournamentData;
            const currentRoundName = data.roundNames[data.currentRound] || 'Unknown Round';
            const series = data.currentSeries;

            // Generate series characters display
            let seriesCharactersHTML = '';
            if (series.playerCharacter && series.opponentCharacter) {
                const playerChar = characters[series.playerCharacter];
                const opponentChar = characters[series.opponentCharacter];
                seriesCharactersHTML = `
                    <div style="margin: 15px 0; padding: 15px; background: rgba(255, 215, 0, 0.1); border: 2px solid #FFD700; border-radius: 10px;">
                        <h4 style="margin: 0 0 10px 0; color: #FFD700; text-align: center;">🔒 Series Characters Locked</h4>
                        <div style="display: flex; justify-content: space-around; align-items: center;">
                            <div style="text-align: center;">
                                <div style="font-size: 32px;">${playerChar.emoji}</div>
                                <div style="color: #4CAF50; font-weight: bold;">YOU</div>
                                <div style="color: #FFF;">${playerChar.name}</div>
                            </div>
                            <div style="color: #FFD700; font-size: 24px; font-weight: bold;">VS</div>
                            <div style="text-align: center;">
                                <div style="font-size: 32px;">${opponentChar.emoji}</div>
                                <div style="color: #FF6B35; font-weight: bold;">OPPONENT</div>
                                <div style="color: #FFF;">${opponentChar.name}</div>
                            </div>
                        </div>
                    </div>
                `;
            }

            // Add Start Round button if series hasn't started yet (no games played)
            let startRoundButton = '';
            if (series.gamesPlayed === 0 && !series.playerCharacter) {
                startRoundButton = `
                    <button class="button" onclick="startTournamentRound()" style="margin-top: 20px; padding: 15px 30px; font-size: 18px; background: #4CAF50; animation: claimPulse 1.5s ease-in-out infinite;">
                        🎮 START ROUND - Choose Character
                    </button>
                `;
            }

            statusDiv.innerHTML = `
                <div style="background: rgba(0,0,0,0.2); border-radius: 15px; padding: 20px; border: 3px solid #FFD700;">
                    <h3 style="margin: 0 0 10px 0; color: #FFD700;">🏆 ${data.name} - IN PROGRESS 🏆</h3>
                    <p style="margin: 5px 0; font-size: 16px;">Current Round: <strong>${currentRoundName}</strong> (${data.currentRound + 1}/${data.totalRounds})</p>
                    <p style="margin: 5px 0; font-size: 16px;">Series Score: <strong>You ${series.playerWins} - ${series.opponentWins} Opponent</strong></p>
                    <p style="margin: 5px 0; font-size: 14px;">First to ${data.seriesLength} wins advances!</p>
                    ${seriesCharactersHTML}
                    <p style="margin: 5px 0; font-size: 16px;">Rounds Won: <strong>${data.roundsWon}/${data.totalRounds}</strong></p>
                    <p style="margin: 5px 0; font-size: 16px;">Prize Pool: <strong>${data.prizePool} coins</strong></p>
                    <p style="margin: 5px 0; font-size: 14px; color: #4CAF50;">Character Tier: <strong>${data.characterTier.toUpperCase()}</strong></p>
                    <p style="margin: 10px 0 0 0; color: #FF6B35; font-size: 14px;">⚠️ You must win ALL rounds to claim the prize!</p>
                    ${startRoundButton}
                    ${generateBracketDisplay(data)}
                </div>
            `;
        } else {
            statusDiv.style.display = 'none';
            if (forfeitButton) forfeitButton.style.display = 'none';
        }
    }

    function generateBracketDisplay(data) {
        if (!data.bracket) return '';

        let bracketHTML = '<div style="margin-top: 20px; border-top: 3px solid #FFD700; padding-top: 20px; background: rgba(0,0,0,0.3); border-radius: 10px; padding: 20px;"><h4 style="color: #FFD700; margin: 0 0 15px 0; text-align: center; font-size: 18px;">🏆 TOURNAMENT BRACKET 🏆</h4>';

        data.roundNames.forEach((roundName, index) => {
            const isCurrentRound = index === data.currentRound;
            const isPastRound = index < data.currentRound;
            const series = data.currentSeries;

            let statusText = '';
            let statusColor = '';
            let bgColor = '';
            let borderColor = '';

            if (isPastRound) {
                statusText = '✅ WON';
                statusColor = '#4CAF50';
                bgColor = 'rgba(76, 175, 80, 0.3)';
                borderColor = '#4CAF50';
            } else if (isCurrentRound) {
                statusText = `🔥 IN PROGRESS (${series.playerWins}-${series.opponentWins})`;
                statusColor = '#FFD700';
                bgColor = 'rgba(255, 215, 0, 0.3)';
                borderColor = '#FFD700';
            } else {
                statusText = '⏳ UPCOMING';
                statusColor = '#999';
                bgColor = 'rgba(128, 128, 128, 0.2)';
                borderColor = '#666';
            }

            bracketHTML += `
                <div style="margin: 12px 0; padding: 15px; border-radius: 10px; background: ${bgColor}; border: 2px solid ${borderColor}; display: flex; justify-content: space-between; align-items: center;">
                    <div style="display: flex; align-items: center;">
                        <span style="font-size: 24px; margin-right: 10px;">${isPastRound ? '🏆' : isCurrentRound ? '⚔️' : '🔒'}</span>
                        <strong style="color: ${statusColor}; font-size: 16px;">${roundName}</strong>
                    </div>
                    <span style="color: ${statusColor}; font-weight: bold; font-size: 14px;">
                        ${statusText}
                    </span>
                </div>
            `;
        });

        bracketHTML += '</div>';
        return bracketHTML;
    }

    function forfeitTournament() {
        if (!gameState.tournamentMode || !gameState.tournamentData.isActive) {
            showNotification('No active tournament to forfeit.');
            return;
        }

        const data = gameState.tournamentData;

        // Confirm forfeit
        if (confirm(`Are you sure you want to forfeit the ${data.name}?\n\nYou will lose your entry fee (${data.entryFee} coins) and receive no prize.`)) {
            // Reset tournament
            gameState.tournamentMode = false;
            gameState.tournamentData.isActive = false;

            showNotification(`🏳️ Tournament Forfeited!\n\n${data.name} has been abandoned.\nEntry fee (${data.entryFee} coins) lost.\n\nYou can now start new battles.`);

            updateTournamentStatus();
            updateUniversalCoinsDisplay();

            // Return to main menu
            setTimeout(() => {
                showMainMenu();
            }, 3000);
        }
    }

    // 2-PLAYER TOURNAMENT SYSTEM
    function showTournamentSelect2Player() {
        update2PlayerTournamentStatus();
        showScreen('tournament2PlayerScreen');
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

    function generate2PlayerBracket(rounds) {
        return {
            rounds: rounds,
            player1Side: 'left',  // Player 1 starts on left side of bracket
            player2Side: 'right', // Player 2 starts on right side of bracket
            generated: true
        };
    }

    function start2PlayerRound() {
        const data = gameState.tournament2PlayerData;
        const currentPlayerData = data.currentPlayer === 1 ? data.player1 : data.player2;

        // Check if current player is eliminated
        if (currentPlayerData.isEliminated) {
            // Switch to other player or end tournament
            switchTo2PlayerNextPlayer();
            return;
        }

        // Set game mode and current shop player for character selection
        gameState.gameMode = 'singleplayer'; // Each player plays against CPU
        gameState.currentShopPlayer = data.currentPlayer;

        showNotification(`🎮 Player ${data.currentPlayer}'s Turn!\n\n${data.roundNames[data.currentRound]} Round\nSeries Score: ${currentPlayerData.currentSeries.playerWins}-${currentPlayerData.currentSeries.opponentWins}\n\nSelect your character!`);

        setTimeout(() => {
            showCharacterSelect();
        }, 3000);
    }

    function switchTo2PlayerNextPlayer() {
        const data = gameState.tournament2PlayerData;

        // Check if both players completed their rounds or one is eliminated
        const player1Data = data.player1;
        const player2Data = data.player2;

        // If current player just finished and other player hasn't played this round
        if (data.currentPlayer === 1 && !player2Data.isEliminated && player2Data.roundsWon === player1Data.roundsWon - 1) {
            // Switch to Player 2
            data.currentPlayer = 2;
            start2PlayerRound();
        } else if (data.currentPlayer === 2 && !player1Data.isEliminated && player1Data.roundsWon === player2Data.roundsWon - 1) {
            // Switch to Player 1
            data.currentPlayer = 1;
            start2PlayerRound();
        } else {
            // Both players completed this round or one is eliminated
            check2PlayerTournamentProgress();
        }
    }

    function check2PlayerTournamentProgress() {
        const data = gameState.tournament2PlayerData;
        const player1Data = data.player1;
        const player2Data = data.player2;

        // Check if we're at the finals and both players made it
        if (data.currentRound === data.totalRounds - 1 && !player1Data.isEliminated && !player2Data.isEliminated) {
            // FINALS: Player vs Player!
            data.finalMatch = true;
            showNotification(`🏆 FINALS: PLAYER VS PLAYER! 🏆\n\nBoth players made it to the finals!\nNow you face each other for the championship!\n\nPrize Pool: ${data.prizePool} coins`);

            setTimeout(() => {
                start2PlayerFinalMatch();
            }, 4000);
        } else if (player1Data.isEliminated && player2Data.isEliminated) {
            // Both eliminated - tournament over
            end2PlayerTournament(null);
        } else if (player1Data.isEliminated) {
            // Player 1 eliminated, Player 2 continues alone
            continueWith2PlayerSolo(2);
        } else if (player2Data.isEliminated) {
            // Player 2 eliminated, Player 1 continues alone
            continueWith2PlayerSolo(1);
        } else {
            // Both players advance to next round
            data.currentRound++;
            data.currentPlayer = 1; // Start next round with Player 1

            // Reset series for both players
            player1Data.currentSeries = {
                playerWins: 0,
                opponentWins: 0,
                gamesPlayed: 0,
                playerCharacter: null,
                opponentCharacter: null
            };
            player2Data.currentSeries = {
                playerWins: 0,
                opponentWins: 0,
                gamesPlayed: 0,
                playerCharacter: null,
                opponentCharacter: null
            };

            update2PlayerTournamentStatus();
            start2PlayerRound();
        }
    }

    function continueWith2PlayerSolo(survivingPlayer) {
        const data = gameState.tournament2PlayerData;

        showNotification(`💀 Player ${survivingPlayer === 1 ? 2 : 1} Eliminated!\n\nPlayer ${survivingPlayer} continues the tournament alone against CPU opponents.\n\nComplete the remaining rounds to win the prize pool!`);

        // Convert to single player tournament for the surviving player
        gameState.tournamentMode = true;
        gameState.tournament2PlayerMode = false;

        const survivingPlayerData = survivingPlayer === 1 ? data.player1 : data.player2;
        gameState.tournamentData = {
            type: data.type,
            name: data.name + ` (Player ${survivingPlayer} Solo)`,
            entryFee: data.entryFee,
            currentRound: data.currentRound,
            totalRounds: data.totalRounds,
            roundNames: data.roundNames,
            prizePool: data.prizePool,
            characterTier: data.characterTier,
            seriesLength: data.seriesLength,
            isActive: true,
            roundsWon: survivingPlayerData.roundsWon,
            currentSeries: survivingPlayerData.currentSeries
        };

        gameState.gameMode = 'singleplayer';

        setTimeout(() => {
            updateTournamentStatus();
            showCharacterSelect();
        }, 4000);
    }

    function start2PlayerFinalMatch() {
        const data = gameState.tournament2PlayerData;

        // Set up multiplayer final match
        gameState.gameMode = 'multiplayer';
        gameState.selectedBattleMode = 'normal';

        showNotification(`🏆 CHAMPIONSHIP FINALS! 🏆\n\nPlayer 1 vs Player 2\nWinner takes ${data.prizePool} coins!\n\nSelect your characters!`);

        setTimeout(() => {
            showCharacterSelect();
        }, 3000);
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

    function update2PlayerTournamentStatus() {
        const statusDiv = document.getElementById('tournament2PlayerStatus');
        const forfeitButton = document.getElementById('forfeit2PlayerButton');

        if (gameState.tournament2PlayerMode && gameState.tournament2PlayerData.isActive) {
            statusDiv.style.display = 'block';
            if (forfeitButton) forfeitButton.style.display = 'block';

            const data = gameState.tournament2PlayerData;
            const currentRoundName = data.roundNames[data.currentRound] || 'Unknown Round';
            const currentPlayerData = data.currentPlayer === 1 ? data.player1 : data.player2;

            // Add Start Round button if current player's series hasn't started yet
            let startRoundButton = '';
            if (currentPlayerData.currentSeries.gamesPlayed === 0 && !currentPlayerData.currentSeries.playerCharacter) {
                startRoundButton = `
                    <button class="button" onclick="start2PlayerRound()" style="margin-top: 20px; padding: 15px 30px; font-size: 18px; background: #4CAF50; animation: claimPulse 1.5s ease-in-out infinite;">
                        🎮 START ROUND - Player ${data.currentPlayer} Choose Character
                    </button>
                `;
            }

            statusDiv.innerHTML = `
                <div style="background: rgba(0,0,0,0.3); border-radius: 15px; padding: 20px; border: 3px solid #E91E63;">
                    <h3 style="margin: 0 0 15px 0; color: #E91E63;">👥 ${data.name} - IN PROGRESS 👥</h3>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 15px;">
                        <div style="background: rgba(76, 175, 80, 0.2); border: 2px solid #4CAF50; border-radius: 10px; padding: 15px;">
                            <h4 style="margin: 0 0 10px 0; color: #4CAF50;">🎮 PLAYER 1</h4>
                            <p style="margin: 5px 0;">Rounds Won: <strong>${data.player1.roundsWon}/${data.totalRounds}</strong></p>
                            <p style="margin: 5px 0;">Status: <strong>${data.player1.isEliminated ? '💀 ELIMINATED' : '✅ ACTIVE'}</strong></p>
                            <p style="margin: 5px 0;">Series: <strong>${data.player1.currentSeries.playerWins}-${data.player1.currentSeries.opponentWins}</strong></p>
                        </div>
                        <div style="background: rgba(33, 150, 243, 0.2); border: 2px solid #2196F3; border-radius: 10px; padding: 15px;">
                            <h4 style="margin: 0 0 10px 0; color: #2196F3;">🎮 PLAYER 2</h4>
                            <p style="margin: 5px 0;">Rounds Won: <strong>${data.player2.roundsWon}/${data.totalRounds}</strong></p>
                            <p style="margin: 5px 0;">Status: <strong>${data.player2.isEliminated ? '💀 ELIMINATED' : '✅ ACTIVE'}</strong></p>
                            <p style="margin: 5px 0;">Series: <strong>${data.player2.currentSeries.playerWins}-${data.player2.currentSeries.opponentWins}</strong></p>
                        </div>
                    </div>
                    <p style="margin: 5px 0; font-size: 16px; text-align: center;">Current Round: <strong>${currentRoundName}</strong> (${data.currentRound + 1}/${data.totalRounds})</p>
                    <p style="margin: 5px 0; font-size: 16px; text-align: center;">Current Turn: <strong>Player ${data.currentPlayer}</strong></p>
                    <p style="margin: 5px 0; font-size: 16px; text-align: center;">Prize Pool: <strong>${data.prizePool} coins</strong></p>
                    <p style="margin: 5px 0; font-size: 14px; color: #4CAF50; text-align: center;">Character Tier: <strong>${data.characterTier.toUpperCase()}</strong></p>
                    ${data.finalMatch ? '<p style="margin: 10px 0; color: #FFD700; font-size: 18px; text-align: center; font-weight: bold;">🏆 FINALS: PLAYER VS PLAYER! 🏆</p>' : ''}
                    ${startRoundButton}
                </div>
            `;
        } else {
            statusDiv.style.display = 'none';
            if (forfeitButton) forfeitButton.style.display = 'none';
        }
    }

    function forfeit2PlayerTournament() {
        if (!gameState.tournament2PlayerMode || !gameState.tournament2PlayerData.isActive) {
            showNotification('No active 2-player tournament to forfeit.');
            return;
        }

        const data = gameState.tournament2PlayerData;

        if (confirm(`Are you sure you want to forfeit the ${data.name}?\n\nBoth players will lose their entry fees (${data.entryFee} coins each) and receive no prize.`)) {
            gameState.tournament2PlayerMode = false;
            gameState.tournament2PlayerData.isActive = false;

            showNotification(`🏳️ 2-Player Tournament Forfeited!\n\n${data.name} has been abandoned.\nEntry fees (${data.entryFee} coins each) lost.\n\nYou can now start new battles.`);

            update2PlayerTournamentStatus();
            updateUniversalCoinsDisplay();

            setTimeout(() => {
                showMainMenu();
            }, 3000);
        }
    }



    function showNotification(message) {
        const notification = document.getElementById('notification');
        notification.textContent = message;
        notification.style.display = 'block';
        setTimeout(() => {
            notification.style.display = 'none';
        }, 4000);
    }

    // Enhanced Sequential Chest Animation Function with Click-to-Skip
    let currentChestAnimation = null;
    
    function showChestAnimation(characterKeys, chestType) {
        const chestOpening = document.getElementById('chestOpening');
        const characterReveal = document.getElementById('characterReveal');
        const rarityGlow = document.getElementById('rarityGlow');
        const rarityText = document.getElementById('rarityText');
        const particles = document.getElementById('particles');
        
        // DEBUGGING - Track what we receive
        console.log('=== CHEST ANIMATION DEBUG ===');
        console.log('Received characterKeys:', characterKeys);
        console.log('Received chestType:', chestType);
        console.log('characterKeys[0]:', characterKeys[0]);
        console.log('Character name:', characters[characterKeys[0]].name);
        console.log('===========================');
        
        // Reset all classes and content
        characterReveal.className = 'character-reveal emoji';
        rarityGlow.className = 'rarity-glow';
        rarityText.textContent = '';
        characterReveal.textContent = '';
        particles.innerHTML = '';
        
        // Remove any existing stat reveal elements
        const existingStats = chestOpening.querySelectorAll('.stat-reveal');
        existingStats.forEach(stat => stat.remove());
        
        // DYNAMIC CHEST COLORS! - Set chest colors based on chest type
        const chestElement = chestOpening.querySelector('.chest-animation');
        const chestLid = chestOpening.querySelector('.chest-lid');
        
        // Apply dynamic colors to chest
        if (chestElement && chestLid) {
            let bodyColor, lidColor, glowColor;
            
            // Custom colors for each chest type
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
                    bodyColor = '#f57c00';
                    lidColor = '#ffb74d';
                    glowColor = '#ff9800';
                    break;
                case 'mega':
                    // MEGA CHEST - Gold and Blue gradient with rainbow shimmer!
                    bodyColor = '#FFD700';
                    lidColor = '#FFA500';
                    glowColor = '#FFD700';
                    chestElement.style.background = `linear-gradient(45deg, #FFD700, #FF6B35, #42a5f5, #FFD700)`;
                    chestLid.style.background = `linear-gradient(45deg, #FFA500, #FFD700, #ff6b35, #FFA500)`;
                    break;
                case 'guaranteed':
                    // GUARANTEED LEGENDARY - Bright orange with divine white shimmer!
                    bodyColor = '#FF9800';
                    lidColor = '#FFD700';
                    glowColor = '#FF9800';
                    chestElement.style.background = `linear-gradient(45deg, #FF9800, #FFD700, #FFFFFF, #FF9800)`;
                    chestLid.style.background = `linear-gradient(45deg, #FFD700, #FFFFFF, #FF9800, #FFD700)`;
                    break;
                case 'choose':
                    // CHOOSE CHARACTER - Purple with pink and rainbow highlights!
                    bodyColor = '#9C27B0';
                    lidColor = '#E91E63';
                    glowColor = '#9C27B0';
                    chestElement.style.background = `linear-gradient(45deg, #9C27B0, #E91E63, #FF6B35, #9C27B0)`;
                    chestLid.style.background = `linear-gradient(45deg, #E91E63, #FF6B35, #9C27B0, #E91E63)`;
                    break;
                default:
                    bodyColor = '#7d7d7d';
                    lidColor = '#bdbdbd';
                    glowColor = '#9e9e9e';
                    break;
            }
            
            // Apply basic colors (if not already set by special gradients above)
            if (!['mega', 'guaranteed', 'choose'].includes(chestType)) {
                chestElement.style.background = `linear-gradient(45deg, ${bodyColor}, ${lidColor})`;
                chestLid.style.background = `linear-gradient(45deg, ${lidColor}, ${glowColor})`;
            }
            
            // Set border colors for all chests
            chestElement.style.borderColor = glowColor;
            chestLid.style.borderColor = glowColor;
            
            // Add extra glow for legendary and ALL special chests
            if (['legendary', 'mega', 'guaranteed', 'choose'].includes(chestType)) {
                chestElement.style.boxShadow = `0 0 30px ${glowColor}`;
                chestLid.style.boxShadow = `0 0 20px ${glowColor}`;
                
                // EXTRA SPECIAL EFFECTS for premium chests!
                if (chestType === 'mega') {
                    // Mega chest gets animated rainbow glow
                    chestElement.style.boxShadow = `0 0 30px #FFD700, 0 0 60px #FF6B35, 0 0 90px #42a5f5`;
                    chestLid.style.boxShadow = `0 0 20px #FFD700, 0 0 40px #FF6B35`;
                } else if (chestType === 'guaranteed') {
                    // Guaranteed gets divine white glow
                    chestElement.style.boxShadow = `0 0 30px #FF9800, 0 0 60px #FFD700, 0 0 90px #FFFFFF`;
                    chestLid.style.boxShadow = `0 0 20px #FF9800, 0 0 40px #FFFFFF`;
                } else if (chestType === 'choose') {
                    // Choose gets mystical purple-pink glow
                    chestElement.style.boxShadow = `0 0 30px #9C27B0, 0 0 60px #E91E63, 0 0 90px #FF6B35`;
                    chestLid.style.boxShadow = `0 0 20px #9C27B0, 0 0 40px #E91E63`;
                }
            }
        }
        
        // Show the chest opening
        chestOpening.style.display = 'block';
        
        // Create stat reveal element
        const statReveal = document.createElement('div');
        statReveal.className = 'stat-reveal';
        chestOpening.appendChild(statReveal);
        
        // Add skip hint
        const skipHint = document.createElement('div');
        skipHint.className = 'skip-hint';
        skipHint.textContent = 'Click to skip to final reveal!';
        chestOpening.appendChild(skipHint);
        
        // Get the primary character - FIX: Always use characterKeys[0] to avoid scope issues
        const primaryChar = characters[characterKeys[0]];
        
        // Animation timeline (15 seconds total)
        const timeline = [
            { time: 2000, action: () => showStat('💚 HP', primaryChar.maxHealth) },
            { time: 4000, action: () => showStat('⚔️ Normal Attack', primaryChar.damage) },
            { time: 6000, action: () => showStat('💥 Special Attack', primaryChar.specialDamage) },
            { time: 8000, action: () => showStat('🔄 Normal Reload', `${(primaryChar.reloadTime/60).toFixed(1)}s`) },
            { time: 10000, action: () => showStat('⚡ Special Reload', `${primaryChar.specialReloadTime ? (primaryChar.specialReloadTime/60).toFixed(1) : '13.0'}s`) },
            { time: 12000, action: () => showStat('📝 Character', primaryChar.name, primaryChar.rarity.toUpperCase()) },
            { time: 13500, action: () => showFinalReveal() }
        ];
        
        function showStat(label, value, extraInfo = '') {
            if (!currentChestAnimation) return; // Animation was skipped
            
            const displayText = extraInfo ? `${label}: ${value}\n${extraInfo}` : `${label}: ${value}`;
            statReveal.textContent = displayText;
            statReveal.className = 'stat-reveal show';
            
            // Add color based on stat type
            if (label.includes('HP')) {
                statReveal.style.color = '#4CAF50';
            } else if (label.includes('Attack')) {
                statReveal.style.color = '#FF6B6B';
            } else if (label.includes('Reload')) {
                statReveal.style.color = '#FFD700';
            } else if (label.includes('Character')) {
                statReveal.style.color = rarityColors[primaryChar.rarity];
            }
            
            // Keep showing for 1.5 seconds, then hide for only 0.3 seconds before next stat
            setTimeout(() => {
                if (currentChestAnimation) {
                    statReveal.className = 'stat-reveal';
                }
            }, 1500);
        }
        
        function showFinalReveal() {
            if (!currentChestAnimation) return; // Animation was skipped
            
            // Hide stat reveal
            statReveal.style.display = 'none';
            
            console.log('=== FINAL REVEAL DEBUG ===');
            console.log('Original characterKeys:', characterKeys);
            console.log('Original chestType:', chestType);
            
            // FINAL FIX: Use the STORED values from currentChestAnimation to avoid ALL scope issues
            const correctCharKeys = currentChestAnimation.characterKeys;
            const correctChestType = currentChestAnimation.chestType;
            const currentChar = characters[correctCharKeys[0]];
            
            console.log('STORED characterKeys:', correctCharKeys);
            console.log('STORED chestType:', correctChestType);
            console.log('FINAL currentChar:', currentChar);
            console.log('CHARACTER NAME:', currentChar.name);
            console.log('================================');
            
            // Show character and effects
            if (correctChestType === 'mega') {
                let characterDisplay = '';
                let rarityForDisplay = 'common';
                
                correctCharKeys.forEach((charKey, index) => {
                    const character = characters[charKey];
                    characterDisplay += character.emoji;
                    if (character.rarity === 'legendary' || character.rarity === 'epic') {
                        rarityForDisplay = character.rarity;
                    }
                });
                
                characterReveal.textContent = characterDisplay;
                rarityGlow.className = `rarity-glow ${rarityForDisplay} show`;
                rarityText.textContent = `MEGA CHEST!`;
                rarityText.style.color = rarityColors[rarityForDisplay];
            } else {
                // Use the STORED character data
                characterReveal.textContent = currentChar.emoji;
                rarityGlow.className = `rarity-glow ${currentChar.rarity} show`;
                rarityText.textContent = currentChar.rarity.toUpperCase();
                rarityText.style.color = rarityColors[currentChar.rarity];
            }
            
            characterReveal.className = 'character-reveal emoji show';
            createParticles(particles, currentChar.rarity);
            
            // End animation after 1.5 seconds
            setTimeout(() => {
                endChestAnimation(correctCharKeys, correctChestType);
            }, 1500);
        }
        
        function skipToFinal() {
            if (!currentChestAnimation) return;
            
            // Clear all timeouts
            currentChestAnimation.timeouts.forEach(timeout => clearTimeout(timeout));
            
            // Jump straight to final reveal BEFORE setting currentChestAnimation to null
            showFinalReveal();
            
            // Now set to null to prevent further timeline events
            currentChestAnimation = null;
        }
        
        // Set up click-to-skip
        const clickHandler = () => skipToFinal();
        chestOpening.addEventListener('click', clickHandler);
        
        // Store animation state WITH the correct character data to prevent scope corruption
        currentChestAnimation = {
            timeouts: [],
            characterKeys: [...characterKeys], // STORE a copy of the character keys
            chestType: chestType, // STORE the chest type
            cleanup: () => {
                chestOpening.removeEventListener('click', clickHandler);
                const skipHintEl = chestOpening.querySelector('.skip-hint');
                if (skipHintEl) skipHintEl.remove();
                const statRevealEl = chestOpening.querySelector('.stat-reveal');
                if (statRevealEl) statRevealEl.remove();
            }
        };
        
        // Schedule all timeline events
        timeline.forEach(event => {
            const timeout = setTimeout(event.action, event.time);
            currentChestAnimation.timeouts.push(timeout);
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

    // Unified Chest Animation for Characters AND Badges - Sequential Stat Reveal!
    let currentUnifiedChestAnimation = null;

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
            } else {
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
            }
        }

        function showFinalReveal() {
            // Clear stat reveals
            const oldStats = chestOpening.querySelectorAll('.stat-reveal');
            oldStats.forEach(stat => stat.remove());

            // Determine highest rarity
            let highestRarity = 'common';
            items.forEach(item => {
                const itemRarity = item.type === 'character' ? characters[item.id].rarity : badges[item.id].rarity;
                if (itemRarity === 'legendary') highestRarity = 'legendary';
                else if (itemRarity === 'epic' && highestRarity !== 'legendary') highestRarity = 'epic';
                else if (itemRarity === 'rare' && highestRarity !== 'legendary' && highestRarity !== 'epic') highestRarity = 'rare';
            });

            // Show all items together
            let displayText = '';
            items.forEach(item => {
                if (item.type === 'character') {
                    displayText += characters[item.id].emoji;
                } else {
                    displayText += badges[item.id].emoji;
                }
            });

            characterReveal.textContent = displayText;
            rarityGlow.className = `rarity-glow ${highestRarity} show`;

            if (items.length > 1) {
                rarityText.textContent = `${items.length} ITEMS!`;
            } else {
                const item = items[0];
                const itemRarity = item.type === 'character' ? characters[item.id].rarity : badges[item.id].rarity;
                rarityText.textContent = itemRarity.toUpperCase();
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

    function endUnifiedChestAnimation(items, chestType) {
        const chestOpening = document.getElementById('chestOpening');

        // Cleanup
        if (currentUnifiedChestAnimation) {
            currentUnifiedChestAnimation = null;
        }

        chestOpening.style.display = 'none';

        let playerName = '';
        if (gameState.gameMode === 'multiplayer') {
            playerName = gameState.currentShopPlayer === 1 ? 'Player 1' : 'Player 2';
        }

        if (items.length > 1) {
            let message = `${playerName ? playerName + ' ' : ''}${chestType.toUpperCase()} CHEST OPENED!\n`;
            items.forEach((item, index) => {
                if (item.type === 'character') {
                    const char = characters[item.id];
                    message += `${index + 1}. ${char.name} ${char.emoji} (${char.rarity.toUpperCase()})\n`;
                } else {
                    const badge = badges[item.id];
                    message += `${index + 1}. ${badge.name} ${badge.emoji} (${badge.rarity.toUpperCase()})\n`;
                }
            });
            showNotification(message);
        } else {
            const item = items[0];
            if (item.type === 'character') {
                const char = characters[item.id];
                showNotification(`${playerName ? playerName + ' ' : ''}unlocked ${char.name}! ${char.emoji}\n${char.rarity.toUpperCase()} • HP: ${char.maxHealth} • Normal: ${char.damage} • Special: ${char.specialDamage}`);
            } else {
                const badge = badges[item.id];
                showNotification(`${playerName ? playerName + ' ' : ''}unlocked ${badge.name}! ${badge.emoji}\n${badge.rarity.toUpperCase()} • ${badge.description}`);
            }
        }
    }

    function createParticles(container, rarity) {
        const numParticles = rarity === 'legendary' ? 20 : rarity === 'epic' ? 15 : rarity === 'rare' ? 10 : 8;
        
        for (let i = 0; i < numParticles; i++) {
            const particle = document.createElement('div');
            particle.className = `particle ${rarity}`;
            
            // Random position around center
            const angle = (Math.PI * 2 * i) / numParticles;
            const distance = 50 + Math.random() * 100;
            const x = Math.cos(angle) * distance;
            const y = Math.sin(angle) * distance;
            
            particle.style.setProperty('--particle-x', `${x}px`);
            particle.style.setProperty('--particle-y', `${y}px`);
            particle.style.left = '0px';
            particle.style.top = '0px';
            
            container.appendChild(particle);
        }
    }

    // ADDON CHEST ANIMATION
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

    // Battle Preparation Screen Functions
    function showBattlePreparation() {
        if (!gameState.selectedCharacter || !gameState.selectedMap) return;
        
        let enemyChar;
        if (gameState.gameMode === 'multiplayer') {
            if (!gameState.selectedPlayer2Character) return;
            enemyChar = gameState.selectedPlayer2Character;
        } else {
            // TOURNAMENT MODE: Use tournament tier characters
            if (gameState.tournamentMode && gameState.tournamentData.isActive) {
                const series = gameState.tournamentData.currentSeries;

                // If opponent character is already locked for this series, use it
                if (series.opponentCharacter) {
                    enemyChar = series.opponentCharacter;
                    console.log(`🔒 Using locked opponent character: ${characters[enemyChar].name}`);
                } else {
                    // First game of series - select and lock opponent character
                    const tournamentTier = gameState.tournamentData.characterTier;
                    const possibleEnemies = getCharactersByTier(tournamentTier);
                    if (possibleEnemies.length > 0) {
                        enemyChar = possibleEnemies[Math.floor(Math.random() * possibleEnemies.length)];
                        series.opponentCharacter = enemyChar;
                        console.log(`🔒 Opponent character locked for series: ${characters[enemyChar].name}`);
                    } else {
                        // Fallback to common characters
                        const commonEnemies = getCharactersByTier('common');
                        enemyChar = commonEnemies[Math.floor(Math.random() * commonEnemies.length)];
                        series.opponentCharacter = enemyChar;
                    }
                }
            } else if (gameState.tournament2PlayerMode && gameState.tournament2PlayerData.isActive) {
                // 2-PLAYER TOURNAMENT MODE: Use tournament tier characters
                const data = gameState.tournament2PlayerData;
                const currentPlayerData = data.currentPlayer === 1 ? data.player1 : data.player2;
                const series = currentPlayerData.currentSeries;

                // If opponent character is already locked for this series, use it
                if (series.opponentCharacter && !data.finalMatch) {
                    enemyChar = series.opponentCharacter;
                    console.log(`🔒 Using locked opponent character for Player ${data.currentPlayer}: ${characters[enemyChar].name}`);
                } else if (!data.finalMatch) {
                    // First game of series - select and lock opponent character
                    const tournamentTier = data.characterTier;
                    const possibleEnemies = getCharactersByTier(tournamentTier);
                    if (possibleEnemies.length > 0) {
                        enemyChar = possibleEnemies[Math.floor(Math.random() * possibleEnemies.length)];
                        series.opponentCharacter = enemyChar;
                        console.log(`🔒 Opponent character locked for Player ${data.currentPlayer} series: ${characters[enemyChar].name}`);
                    } else {
                        // Fallback to common characters
                        const commonEnemies = getCharactersByTier('common');
                        enemyChar = commonEnemies[Math.floor(Math.random() * commonEnemies.length)];
                        series.opponentCharacter = enemyChar;
                    }
                } else {
                    // Final match - this is handled in multiplayer mode, shouldn't reach here
                    const allEnemies = Object.keys(characters);
                    enemyChar = allEnemies[Math.floor(Math.random() * allEnemies.length)];
                }
            } else {
                // SMART DIFFICULTY-BASED ENEMY SELECTION!
                const possibleEnemies = getEnemiesByDifficulty(gameState.selectedDifficulty);
                if (possibleEnemies.length > 0) {
                    enemyChar = possibleEnemies[Math.floor(Math.random() * possibleEnemies.length)];
                } else {
                    // Fallback to any character if no enemies of that rarity exist
                    const allEnemies = Object.keys(characters);
                    enemyChar = allEnemies[Math.floor(Math.random() * allEnemies.length)];
                }
            }
        }
        
        // Store enemy character for battle
        gameState.selectedPlayer2Character = enemyChar;
        
        // Populate Player 1 character info
        const player1Char = characters[gameState.selectedCharacter];
        document.getElementById('player1PrepEmoji').textContent = player1Char.emoji;
        document.getElementById('player1PrepName').textContent = player1Char.name;
        document.getElementById('player1PrepRarity').textContent = player1Char.rarity.toUpperCase();
        document.getElementById('player1PrepRarity').style.color = rarityColors[player1Char.rarity];
        document.getElementById('player1PrepAvatar').style.background = player1Char.color;
        document.getElementById('player1PrepCard').style.borderColor = rarityColors[player1Char.rarity];
        
        document.getElementById('player1PrepHP').textContent = player1Char.maxHealth;
        document.getElementById('player1PrepNormal').textContent = player1Char.damage;
        document.getElementById('player1PrepSpecial').textContent = player1Char.specialDamage;
        document.getElementById('player1PrepNormalReload').textContent = `${(player1Char.reloadTime/60).toFixed(1)}s`;
        document.getElementById('player1PrepSpecialReload').textContent = `${player1Char.specialReloadTime ? (player1Char.specialReloadTime/60).toFixed(1) : '13.0'}s`;
        
        // Populate Player 2 character info
        const player2Char = characters[enemyChar];
        document.getElementById('player2PrepEmoji').textContent = player2Char.emoji;
        document.getElementById('player2PrepName').textContent = player2Char.name;
        document.getElementById('player2PrepRarity').textContent = player2Char.rarity.toUpperCase();
        document.getElementById('player2PrepRarity').style.color = rarityColors[player2Char.rarity];
        document.getElementById('player2PrepAvatar').style.background = player2Char.color;
        document.getElementById('player2PrepCard').style.borderColor = rarityColors[player2Char.rarity];
        
        document.getElementById('player2PrepHP').textContent = player2Char.maxHealth;
        document.getElementById('player2PrepNormal').textContent = player2Char.damage;
        document.getElementById('player2PrepSpecial').textContent = player2Char.specialDamage;
        document.getElementById('player2PrepNormalReload').textContent = `${(player2Char.reloadTime/60).toFixed(1)}s`;
        document.getElementById('player2PrepSpecialReload').textContent = `${player2Char.specialReloadTime ? (player2Char.specialReloadTime/60).toFixed(1) : '13.0'}s`;
        
        // Update map info
        document.getElementById('battleMapInfo').textContent = `Map: ${maps[gameState.selectedMap].name}`;
        
        showScreen('battlePrepScreen');
    }

    function startBattleFromPrep() {
        // Call the actual start battle function
        startBattle();
    }

    // CHOOSE YOUR ITEM Functions - Unified for Characters and Badges!
    function showChooseItemScreen() {
        updateChooseItemGrid();
        showScreen('chooseCharacterScreen');
    }

    function showChooseCharacterScreen() {
        updateChooseCharacterGrid();
        showScreen('chooseCharacterScreen');
    }

    function updateChooseItemGrid() {
        const grid = document.getElementById('chooseCharacterGrid');
        grid.innerHTML = '';

        // Add section header for characters
        if (gameState.chooseChestAvailableChars && gameState.chooseChestAvailableChars.length > 0) {
            const charHeader = document.createElement('div');
            charHeader.style.cssText = 'width: 100%; text-align: center; color: #FFD700; font-size: 20px; font-weight: bold; margin: 10px 0; grid-column: 1 / -1;';
            charHeader.textContent = '🎭 CHARACTERS';
            grid.appendChild(charHeader);

            gameState.chooseChestAvailableChars.forEach(charKey => {
                const char = characters[charKey];
                const card = document.createElement('div');
                card.className = 'character-card';
                card.style.borderColor = rarityColors[char.rarity];
                card.style.cursor = 'pointer';
                card.innerHTML = `
                    <div class="character-avatar" style="background: ${char.color}">
                        <span class="emoji">${char.emoji}</span>
                    </div>
                    <div style="font-weight: bold; color: ${rarityColors[char.rarity]};">${char.name}</div>
                    <div style="color: ${rarityColors[char.rarity]}; font-size: 12px; text-transform: uppercase;">${char.rarity}</div>
                    <div style="font-size: 11px; color: #FFD700;">HP: ${char.maxHealth}</div>
                    <div style="font-size: 11px;">Normal: ${char.damage}</div>
                    <div style="font-size: 11px; color: #FF4444;">Special: ${char.specialDamage}</div>
                    <div style="margin-top: 8px; background: #5D5CDE; color: white; padding: 4px 8px; border-radius: 5px; font-size: 12px; font-weight: bold;">🎯 CHOOSE!</div>
                `;

                card.onclick = () => {
                    selectChosenItem('character', charKey);
                };

                grid.appendChild(card);
            });
        }

        // Add section header for badges
        if (gameState.chooseChestAvailableBadges && gameState.chooseChestAvailableBadges.length > 0) {
            const badgeHeader = document.createElement('div');
            badgeHeader.style.cssText = 'width: 100%; text-align: center; color: #FFD700; font-size: 20px; font-weight: bold; margin: 20px 0 10px 0; grid-column: 1 / -1;';
            badgeHeader.textContent = '🏅 BADGES';
            grid.appendChild(badgeHeader);

            gameState.chooseChestAvailableBadges.forEach(badgeKey => {
                const badge = badges[badgeKey];
                const card = document.createElement('div');
                card.className = 'character-card';
                card.style.borderColor = rarityColors[badge.rarity];
                card.style.cursor = 'pointer';
                card.innerHTML = `
                    <div class="character-avatar" style="background: linear-gradient(135deg, ${rarityColors[badge.rarity]}, #1a1a2e)">
                        <span class="emoji">${badge.emoji}</span>
                    </div>
                    <div style="font-weight: bold; color: ${rarityColors[badge.rarity]};">${badge.name}</div>
                    <div style="color: ${rarityColors[badge.rarity]}; font-size: 12px; text-transform: uppercase;">${badge.rarity}</div>
                    <div style="font-size: 11px; color: #888; margin-top: 5px;">${badge.description}</div>
                    <div style="margin-top: 8px; background: #5D5CDE; color: white; padding: 4px 8px; border-radius: 5px; font-size: 12px; font-weight: bold;">🎯 CHOOSE!</div>
                `;

                card.onclick = () => {
                    selectChosenItem('badge', badgeKey);
                };

                grid.appendChild(card);
            });
        }
    }

    function updateChooseCharacterGrid() {
        const grid = document.getElementById('chooseCharacterGrid');
        grid.innerHTML = '';

        if (!gameState.chooseChestAvailableChars) {
            return;
        }

        gameState.chooseChestAvailableChars.forEach(charKey => {
            const char = characters[charKey];
            const card = document.createElement('div');
            card.className = 'character-card';
            card.style.borderColor = rarityColors[char.rarity];
            card.style.cursor = 'pointer';
            card.innerHTML = `
                <div class="character-avatar" style="background: ${char.color}">
                    <span class="emoji">${char.emoji}</span>
                </div>
                <div style="font-weight: bold; color: ${rarityColors[char.rarity]};">${char.name}</div>
                <div style="color: ${rarityColors[char.rarity]}; font-size: 12px; text-transform: uppercase;">${char.rarity}</div>
                <div style="font-size: 11px; color: #FFD700;">HP: ${char.maxHealth}</div>
                <div style="font-size: 11px;">Normal: ${char.damage}</div>
                <div style="font-size: 11px; color: #FF4444;">Special: ${char.specialDamage}</div>
                <div style="font-size: 10px; color: ${char.specialType === 'long' ? '#4CAF50' : '#FF9800'};">${char.specialType === 'long' ? '📡 LONG RANGE' : '⚔️ CLOSE RANGE'}</div>
                <div style="font-size: 11px; color: #888;">Reload: ${(char.reloadTime/60).toFixed(1)}s</div>
                <div style="margin-top: 8px; background: #5D5CDE; color: white; padding: 4px 8px; border-radius: 5px; font-size: 12px; font-weight: bold;">🎯 CHOOSE THIS!</div>
            `;

            card.onclick = () => {
                selectChosenCharacter(charKey);
            };

            grid.appendChild(card);
        });
    }

    function selectChosenItem(itemType, itemKey) {
        // Add the chosen item to the player's collection
        if (itemType === 'character') {
            if (gameState.gameMode === 'multiplayer') {
                if (gameState.currentShopPlayer === 1) {
                    gameState.player1Characters.push(itemKey);
                } else {
                    gameState.player2Characters.push(itemKey);
                }
            } else {
                gameState.unlockedCharacters.push(itemKey);
            }
        } else {
            // Badge
            if (gameState.gameMode === 'multiplayer') {
                if (gameState.currentShopPlayer === 1) {
                    if (!gameState.player1Badges) gameState.player1Badges = [];
                    gameState.player1Badges.push(itemKey);
                } else {
                    if (!gameState.player2Badges) gameState.player2Badges = [];
                    gameState.player2Badges.push(itemKey);
                }
            } else {
                if (!gameState.unlockedBadges) gameState.unlockedBadges = [];
                gameState.unlockedBadges.push(itemKey);
            }

            // Track badge collection
            trackChallengeProgress('badge_collected', { rarity: badges[itemKey].rarity });
        }

        // Clean up the choose chest state
        gameState.chooseChestAvailableChars = null;
        gameState.chooseChestAvailableBadges = null;

        // Go back to shop screen first
        showShop();

        // Then show unified chest animation
        setTimeout(() => {
            showUnifiedChestAnimation([{ type: itemType, id: itemKey }], 'choose');
        }, 100);
    }

    function selectChosenCharacter(charKey) {
        // Add the chosen character to the player's collection
        if (gameState.gameMode === 'multiplayer') {
            if (gameState.currentShopPlayer === 1) {
                gameState.player1Characters.push(charKey);
            } else {
                gameState.player2Characters.push(charKey);
            }
        } else {
            gameState.unlockedCharacters.push(charKey);
        }

        // Store the chosen character for animation
        gameState.chosenCharacterKey = charKey;

        // Clean up the choose chest state
        gameState.chooseChestAvailableChars = null;

        // Go back to shop screen first
        showShop();

        // Then show chest animation after a brief delay to let the shop screen load
        setTimeout(() => {
            showChestAnimation([gameState.chosenCharacterKey], 'choose');
            gameState.chosenCharacterKey = null; // Clean up
        }, 100);
    }

    function cancelChooseCharacter() {
        // Refund the coins since they cancelled (1500 for choose chest)
        if (gameState.gameMode === 'multiplayer') {
            if (gameState.currentShopPlayer === 1) {
                gameState.player1Coins = safeCoins(gameState.player1Coins + 1500);
            } else {
                gameState.player2Coins = safeCoins(gameState.player2Coins + 1500);
            }
            updateMultiplayerCoinsDisplay();
        } else {
            gameState.coins = safeCoins(gameState.coins + 1500);
            updateSinglePlayerCoinsDisplay();
        }

        // Clean up the choose chest state
        gameState.chooseChestAvailableChars = null;
        gameState.chooseChestAvailableBadges = null;

        // Go back to shop
        showShop();
    }

    // MASSIVE TROPHY ROAD MILESTONE SYSTEM - Like Brawl Stars but MUCH LONGER!
    const trophyMilestones = [
        // Early Game (0-500 trophies)
        { trophies: 10, reward: { type: 'coins', amount: 50 }, name: 'First Victory!', emoji: '🏆' },
        { trophies: 25, reward: { type: 'character', character: 'Thunder' }, name: 'Lightning Striker', emoji: '⚡' },
        { trophies: 50, reward: { type: 'coins', amount: 100 }, name: 'Trophy Hunter', emoji: '💰' },
        { trophies: 75, reward: { type: 'chest', chestType: 'rare' }, name: 'Rare Reward', emoji: '💎' },
        { trophies: 100, reward: { type: 'character', character: 'Shadow' }, name: 'Shadow Warrior', emoji: '🥷' },
        { trophies: 150, reward: { type: 'coins', amount: 150 }, name: 'Coin Collector', emoji: '🪙' },
        { trophies: 200, reward: { type: 'chest', chestType: 'epic' }, name: 'Epic Achievement', emoji: '⚡' },
        { trophies: 250, reward: { type: 'character', character: 'Archer' }, name: 'Eagle Eye', emoji: '🏹' },
        { trophies: 300, reward: { type: 'coins', amount: 200 }, name: 'Battle Master', emoji: '💯' },
        { trophies: 400, reward: { type: 'chest', chestType: 'legendary' }, name: 'Legendary Path', emoji: '🌟' },
        { trophies: 500, reward: { type: 'character', character: 'Hulk' }, name: 'Green Giant', emoji: '💚' },
        
        // Mid Game (500-1500 trophies)
        { trophies: 600, reward: { type: 'coins', amount: 300 }, name: 'Warrior\'s Treasury', emoji: '👑' },
        { trophies: 750, reward: { type: 'character', character: 'Magic' }, name: 'Mystic Powers', emoji: '🔮' },
        { trophies: 900, reward: { type: 'chest', chestType: 'mega' }, name: 'MEGA MILESTONE!', emoji: '🎰' },
        { trophies: 1000, reward: { type: 'character', character: 'Dragon' }, name: 'DRAGON LORD!', emoji: '🐉' },
        { trophies: 1200, reward: { type: 'coins', amount: 500 }, name: 'Champion\'s Vault', emoji: '💸' },
        { trophies: 1500, reward: { type: 'character', character: 'Phoenix' }, name: 'Phoenix Rising', emoji: '🔥' },
        
        // Late Game (1500-5000 trophies)
        { trophies: 1750, reward: { type: 'chest', chestType: 'guaranteed' }, name: 'Guaranteed Legend', emoji: '👑' },
        { trophies: 2000, reward: { type: 'character', character: 'Zeus' }, name: 'Sky God Powers', emoji: '⚡' },
        { trophies: 2250, reward: { type: 'chest', chestType: 'mega' }, name: 'Double MEGA Reward', emoji: '💎' },
        { trophies: 2500, reward: { type: 'coins', amount: 750 }, name: 'Elite Warrior', emoji: '🏅' },
        { trophies: 2750, reward: { type: 'character', character: 'Leviathan' }, name: 'Ocean Ruler', emoji: '🌊' },
        { trophies: 3000, reward: { type: 'character', character: 'Cosmos' }, name: 'UNIVERSE CREATOR!', emoji: '🌌' },
        { trophies: 3500, reward: { type: 'chest', chestType: 'choose' }, name: 'Ultimate Choice', emoji: '🎯' },
        { trophies: 4000, reward: { type: 'character', character: 'Bahamut' }, name: 'KING DRAGON!', emoji: '🐲' },
        { trophies: 4500, reward: { type: 'coins', amount: 1000 }, name: 'Master Combatant', emoji: '⚔️' },
        { trophies: 5000, reward: { type: 'character', character: 'Infinity' }, name: 'ETERNAL MASTER!', emoji: '♾️' },
        
        // Expert Game (5000-15000 trophies)
        { trophies: 5500, reward: { type: 'chest', chestType: 'guaranteed' }, name: 'Legend Seeker', emoji: '🔍' },
        { trophies: 6000, reward: { type: 'character', character: 'Ragnarok' }, name: 'WORLD ENDER!', emoji: '🌋' },
        { trophies: 6500, reward: { type: 'coins', amount: 1250 }, name: 'Trophy Veteran', emoji: '🎖️' },
        { trophies: 7000, reward: { type: 'chest', chestType: 'mega' }, name: 'Triple MEGA Power', emoji: '🎰' },
        { trophies: 7500, reward: { type: 'character', character: 'Apophis' }, name: 'CHAOS SERPENT!', emoji: '🐍' },
        { trophies: 8000, reward: { type: 'coins', amount: 1500 }, name: 'Legendary Champion', emoji: '🏆' },
        { trophies: 8500, reward: { type: 'chest', chestType: 'choose' }, name: 'Elite Selection', emoji: '👑' },
        { trophies: 9000, reward: { type: 'character', character: 'Tiamat' }, name: 'PRIMORDIAL DRAGON!', emoji: '🐲' },
        { trophies: 9500, reward: { type: 'chest', chestType: 'guaranteed' }, name: 'Almost There!', emoji: '🎯' },
        { trophies: 10000, reward: { type: 'coins', amount: 2000 }, name: 'TROPHY ROAD MASTER!', emoji: '🎊' },
        
        // Master Game (10000-25000 trophies)
        { trophies: 11000, reward: { type: 'character', character: 'Azathoth' }, name: 'OUTER GOD!', emoji: '👁️' },
        { trophies: 12000, reward: { type: 'chest', chestType: 'mega' }, name: 'Quadruple MEGA!', emoji: '💥' },
        { trophies: 13000, reward: { type: 'coins', amount: 2500 }, name: 'Unstoppable Force', emoji: '💫' },
        { trophies: 14000, reward: { type: 'chest', chestType: 'choose' }, name: 'Master\'s Choice', emoji: '🎯' },
        { trophies: 15000, reward: { type: 'character', character: 'Lucifer' }, name: 'FALLEN ANGEL!', emoji: '👹' },
        { trophies: 16000, reward: { type: 'coins', amount: 3000 }, name: 'Divine Treasury', emoji: '💰' },
        { trophies: 17000, reward: { type: 'chest', chestType: 'guaranteed' }, name: 'Guaranteed Power', emoji: '⚡' },
        { trophies: 18000, reward: { type: 'character', character: 'Yggdrasil' }, name: 'WORLD TREE!', emoji: '🌳' },
        { trophies: 19000, reward: { type: 'chest', chestType: 'mega' }, name: 'Quintuple MEGA!', emoji: '🌟' },
        { trophies: 20000, reward: { type: 'coins', amount: 4000 }, name: 'LEGENDARY OVERLORD!', emoji: '👑' },
        
        // Grandmaster Game (20000-50000 trophies)
        { trophies: 22500, reward: { type: 'chest', chestType: 'choose' }, name: 'Grandmaster\'s Pick', emoji: '🎯' },
        { trophies: 25000, reward: { type: 'coins', amount: 5000 }, name: 'TROPHY TITAN!', emoji: '🏆' },
        { trophies: 27500, reward: { type: 'chest', chestType: 'guaranteed' }, name: 'Titan\'s Reward', emoji: '⚡' },
        { trophies: 30000, reward: { type: 'coins', amount: 6000 }, name: 'ARENA LEGEND!', emoji: '🏟️' },
        { trophies: 32500, reward: { type: 'chest', chestType: 'mega' }, name: 'Legendary MEGA', emoji: '💎' },
        { trophies: 35000, reward: { type: 'coins', amount: 7500 }, name: 'BATTLE GOD!', emoji: '⚔️' },
        { trophies: 37500, reward: { type: 'chest', chestType: 'choose' }, name: 'God\'s Selection', emoji: '🎯' },
        { trophies: 40000, reward: { type: 'coins', amount: 10000 }, name: 'MYTHICAL WARRIOR!', emoji: '🌟' },
        { trophies: 42500, reward: { type: 'chest', chestType: 'guaranteed' }, name: 'Mythical Power', emoji: '💫' },
        { trophies: 45000, reward: { type: 'coins', amount: 12500 }, name: 'COSMIC EMPEROR!', emoji: '🌌' },
        { trophies: 47500, reward: { type: 'chest', chestType: 'mega' }, name: 'Ultimate MEGA', emoji: '🎰' },
        { trophies: 50000, reward: { type: 'coins', amount: 15000 }, name: 'TROPHY IMMORTAL!', emoji: '♾️' },
        
        // Legendary Game (50000-100000 trophies)
        { trophies: 55000, reward: { type: 'chest', chestType: 'choose' }, name: 'Immortal\'s Choice', emoji: '🎯' },
        { trophies: 60000, reward: { type: 'coins', amount: 20000 }, name: 'TRANSCENDENT BEING!', emoji: '✨' },
        { trophies: 65000, reward: { type: 'chest', chestType: 'guaranteed' }, name: 'Beyond Mortal', emoji: '👑' },
        { trophies: 70000, reward: { type: 'coins', amount: 25000 }, name: 'REALITY SHAPER!', emoji: '🌠' },
        { trophies: 75000, reward: { type: 'chest', chestType: 'mega' }, name: 'Transcendent MEGA', emoji: '💥' },
        { trophies: 80000, reward: { type: 'coins', amount: 30000 }, name: 'DIMENSION RULER!', emoji: '🌌' },
        { trophies: 85000, reward: { type: 'chest', chestType: 'choose' }, name: 'Ruler\'s Command', emoji: '🎯' },
        { trophies: 90000, reward: { type: 'coins', amount: 40000 }, name: 'OMNIPOTENT FORCE!', emoji: '⚡' },
        { trophies: 95000, reward: { type: 'chest', chestType: 'guaranteed' }, name: 'Almost Infinite', emoji: '♾️' },
        { trophies: 100000, reward: { type: 'coins', amount: 50000 }, name: 'ULTIMATE TROPHY GOD!', emoji: '🏆' },
        
        // Infinite Game (100000+ trophies) - For the ultimate grinders!
        { trophies: 125000, reward: { type: 'chest', chestType: 'mega' }, name: 'INFINITE MEGA!', emoji: '💎' },
        { trophies: 150000, reward: { type: 'coins', amount: 75000 }, name: 'BEYOND INFINITY!', emoji: '🌟' },
        { trophies: 200000, reward: { type: 'chest', chestType: 'choose' }, name: 'Infinite Selection', emoji: '🎯' },
        { trophies: 250000, reward: { type: 'coins', amount: 100000 }, name: 'TROPHY MULTIVERSE!', emoji: '🌌' },
        { trophies: 500000, reward: { type: 'chest', chestType: 'guaranteed' }, name: 'BEYOND COMPREHENSION!', emoji: '♾️' },
        { trophies: 1000000, reward: { type: 'coins', amount: 1000000 }, name: 'TROPHY SINGULARITY!', emoji: '🌠' }
    ];

    // TROPHY ROAD FUNCTIONS
    function showTrophyRoad() {
        if (gameState.gameMode === 'multiplayer') {
            showNotification('Trophy Road is only available in Single Player mode!');
            return;
        }
        updateTrophyRoadPlayerInfo();
        updateTrophyRoadDisplay();
        showScreen('trophyRoadScreen');
    }

    function updateTrophyRoadPlayerInfo() {
        const info = document.getElementById('trophyRoadPlayerInfo');
        if (gameState.gameMode === 'multiplayer') {
            info.style.display = 'block';
            info.innerHTML = `
                <span style="cursor: pointer; ${gameState.currentShopPlayer === 1 ? 'text-decoration: underline;' : ''}" onclick="gameState.currentShopPlayer = 1; updateTrophyRoadPlayerInfo(); updateTrophyRoadDisplay();">🏆 Player 1: ${gameState.player1Trophies} trophies</span>
                |
                <span style="cursor: pointer; ${gameState.currentShopPlayer === 2 ? 'text-decoration: underline;' : ''}" onclick="gameState.currentShopPlayer = 2; updateTrophyRoadPlayerInfo(); updateTrophyRoadDisplay();">🏆 Player 2: ${gameState.player2Trophies} trophies</span>
            `;
        } else {
            info.style.display = 'block';
            info.innerHTML = `🏆 Current Trophies: ${gameState.trophies} | Win battles faster to earn more trophies!`;
        }
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

    // CHALLENGES SYSTEM - Define challenge types like Frag Pro Shooter!
    const challengeTypes = [
        // Combat Challenges
        { id: 'damage_dealer', name: 'Damage Dealer', description: 'Deal 500 total damage in battles', target: 500, type: 'damage', reward: 100, emoji: '⚔️' },
        { id: 'special_master', name: 'Special Master', description: 'Use special attacks 25 times', target: 25, type: 'special_uses', reward: 75, emoji: '💥' },
        { id: 'quick_killer', name: 'Quick Killer', description: 'Win 3 battles in under 30 seconds', target: 3, type: 'quick_wins', reward: 150, emoji: '⚡' },
        { id: 'tank_buster', name: 'Tank Buster', description: 'Defeat 5 enemies with 300+ HP', target: 5, type: 'tank_kills', reward: 125, emoji: '🛡️' },
        { id: 'glass_cannon', name: 'Glass Cannon', description: 'Win with less than 25% HP remaining', target: 3, type: 'low_hp_wins', reward: 200, emoji: '💀' },
        
        // Survival Challenges
        { id: 'survivor', name: 'Survivor', description: 'Win 5 battles without taking more than 50 damage', target: 5, type: 'low_damage_wins', reward: 175, emoji: '🏥' },
        { id: 'perfect_game', name: 'Perfect Game', description: 'Win a battle without taking any damage', target: 1, type: 'perfect_wins', reward: 250, emoji: '🌟' },
        { id: 'comeback_kid', name: 'Comeback Kid', description: 'Win 3 battles after being below 50 HP', target: 3, type: 'comeback_wins', reward: 180, emoji: '💪' },
        
        // Win Streak Challenges
        { id: 'win_streak_3', name: 'Triple Threat', description: 'Win 3 battles in a row', target: 3, type: 'win_streak', reward: 120, emoji: '🔥' },
        { id: 'win_streak_5', name: 'Unstoppable', description: 'Win 5 battles in a row', target: 5, type: 'win_streak', reward: 200, emoji: '🚀' },
        { id: 'win_streak_10', name: 'Legendary Streak', description: 'Win 10 battles in a row', target: 10, type: 'win_streak', reward: 500, emoji: '👑' },
        
        // Character Challenges
        { id: 'character_master', name: 'Character Master', description: 'Win with 5 different characters', target: 5, type: 'different_char_wins', reward: 150, emoji: '🎭' },
        { id: 'rarity_hunter', name: 'Rarity Hunter', description: 'Win with Common, Rare, Epic, and Legendary', target: 4, type: 'rarity_wins', reward: 300, emoji: '🌈' },
        { id: 'underdog', name: 'Underdog', description: 'Win with a Common character vs Epic/Legendary', target: 3, type: 'underdog_wins', reward: 250, emoji: '🥊' },
        
        // Trophy Challenges
        { id: 'trophy_collector', name: 'Trophy Collector', description: 'Earn 100 trophies total', target: 100, type: 'trophy_earned', reward: 200, emoji: '🏆' },
        { id: 'speed_runner', name: 'Speed Runner', description: 'Earn 50+ trophies in one battle', target: 1, type: 'high_trophy_battle', reward: 300, emoji: '💨' },
        
        // Map Challenges
        { id: 'map_explorer', name: 'Map Explorer', description: 'Win on 5 different maps', target: 5, type: 'different_map_wins', reward: 150, emoji: '🗺️' },
        { id: 'volcano_survivor', name: 'Volcano Survivor', description: 'Win 3 battles on Lava Cavern', target: 3, type: 'volcano_wins', reward: 125, emoji: '🌋' },
        { id: 'space_warrior', name: 'Space Warrior', description: 'Win 3 battles on Space Station', target: 3, type: 'space_wins', reward: 125, emoji: '🚀' },
        
        // Badge Challenges
        { id: 'badge_collector', name: 'Badge Collector', description: 'Collect 10 different badges', target: 10, type: 'badges_collected', reward: 200, emoji: '🏅' },
        { id: 'legendary_badge', name: 'Legendary Badge Hunter', description: 'Get a Legendary badge', target: 1, type: 'legendary_badges', reward: 500, emoji: '💎' },
        
        // Coin Challenges
        { id: 'big_spender', name: 'Big Spender', description: 'Spend 1000 coins in the shop', target: 1000, type: 'coins_spent', reward: 200, emoji: '💸' },
        { id: 'chest_opener', name: 'Chest Opener', description: 'Open 10 chests', target: 10, type: 'chests_opened', reward: 150, emoji: '📦' },

        // NEW CHALLENGES - 50 MORE!

        // Advanced Combat Challenges
        { id: 'mega_damage', name: 'Mega Damage', description: 'Deal 2000 total damage in battles', target: 2000, type: 'damage', reward: 300, emoji: '💥' },
        { id: 'ultra_damage', name: 'Ultra Damage', description: 'Deal 5000 total damage in battles', target: 5000, type: 'damage', reward: 600, emoji: '⚡' },
        { id: 'special_spammer', name: 'Special Spammer', description: 'Use special attacks 50 times', target: 50, type: 'special_uses', reward: 150, emoji: '🌟' },
        { id: 'special_legend', name: 'Special Legend', description: 'Use special attacks 100 times', target: 100, type: 'special_uses', reward: 350, emoji: '✨' },
        { id: 'speed_demon', name: 'Speed Demon', description: 'Win 10 battles in under 30 seconds', target: 10, type: 'quick_wins', reward: 400, emoji: '⚡' },
        { id: 'lightning_fast', name: 'Lightning Fast', description: 'Win a battle in under 15 seconds', target: 1, type: 'ultra_quick_wins', reward: 500, emoji: '⚡' },
        { id: 'tank_destroyer', name: 'Tank Destroyer', description: 'Defeat 15 enemies with 300+ HP', target: 15, type: 'tank_kills', reward: 300, emoji: '🔨' },
        { id: 'giant_slayer', name: 'Giant Slayer', description: 'Defeat 5 enemies with 400+ HP', target: 5, type: 'giant_kills', reward: 350, emoji: '⚔️' },

        // Extreme Survival Challenges
        { id: 'iron_wall', name: 'Iron Wall', description: 'Win 10 battles taking less than 50 damage', target: 10, type: 'low_damage_wins', reward: 350, emoji: '🛡️' },
        { id: 'untouchable_master', name: 'Untouchable Master', description: 'Win 3 battles without taking any damage', target: 3, type: 'perfect_wins', reward: 600, emoji: '👻' },
        { id: 'last_breath', name: 'Last Breath', description: 'Win 5 battles with less than 10% HP', target: 5, type: 'clutch_wins', reward: 400, emoji: '💀' },
        { id: 'phoenix_rising', name: 'Phoenix Rising', description: 'Win 10 comeback battles', target: 10, type: 'comeback_wins', reward: 450, emoji: '🔥' },
        { id: 'damage_sponge', name: 'Damage Sponge', description: 'Take 1000 total damage and survive', target: 1000, type: 'damage_taken', reward: 250, emoji: '🩹' },
        { id: 'survivor_elite', name: 'Survivor Elite', description: 'Win 20 battles taking less than 100 damage', target: 20, type: 'medium_damage_wins', reward: 400, emoji: '🏥' },

        // Win Streak Mastery
        { id: 'win_streak_15', name: 'Dominator', description: 'Win 15 battles in a row', target: 15, type: 'win_streak', reward: 750, emoji: '👑' },
        { id: 'win_streak_20', name: 'Immortal', description: 'Win 20 battles in a row', target: 20, type: 'win_streak', reward: 1000, emoji: '♾️' },
        { id: 'win_streak_25', name: 'God Mode', description: 'Win 25 battles in a row', target: 25, type: 'win_streak', reward: 1500, emoji: '🌟' },
        { id: 'total_wins_10', name: 'Warrior', description: 'Win 10 total battles', target: 10, type: 'total_wins', reward: 150, emoji: '⚔️' },
        { id: 'total_wins_25', name: 'Veteran', description: 'Win 25 total battles', target: 25, type: 'total_wins', reward: 300, emoji: '🎖️' },
        { id: 'total_wins_50', name: 'Champion', description: 'Win 50 total battles', target: 50, type: 'total_wins', reward: 600, emoji: '🏆' },
        { id: 'total_wins_100', name: 'Legend', description: 'Win 100 total battles', target: 100, type: 'total_wins', reward: 1200, emoji: '👑' },

        // Character Mastery
        { id: 'character_variety', name: 'Character Variety', description: 'Win with 10 different characters', target: 10, type: 'different_char_wins', reward: 300, emoji: '🎭' },
        { id: 'character_collector', name: 'Character Collector', description: 'Win with 15 different characters', target: 15, type: 'different_char_wins', reward: 500, emoji: '🌟' },
        { id: 'common_hero', name: 'Common Hero', description: 'Win 10 battles with Common characters', target: 10, type: 'common_wins', reward: 200, emoji: '⚪' },
        { id: 'rare_specialist', name: 'Rare Specialist', description: 'Win 10 battles with Rare characters', target: 10, type: 'rare_wins', reward: 250, emoji: '🔵' },
        { id: 'epic_master', name: 'Epic Master', description: 'Win 10 battles with Epic characters', target: 10, type: 'epic_wins', reward: 350, emoji: '🟣' },
        { id: 'legendary_lord', name: 'Legendary Lord', description: 'Win 10 battles with Legendary characters', target: 10, type: 'legendary_wins', reward: 500, emoji: '🟠' },
        { id: 'underdog_champion', name: 'Underdog Champion', description: 'Win 10 battles as underdog', target: 10, type: 'underdog_wins', reward: 600, emoji: '🥊' },

        // Trophy Mastery
        { id: 'trophy_hoarder', name: 'Trophy Hoarder', description: 'Earn 250 trophies total', target: 250, type: 'trophy_earned', reward: 400, emoji: '🏆' },
        { id: 'trophy_king', name: 'Trophy King', description: 'Earn 500 trophies total', target: 500, type: 'trophy_earned', reward: 800, emoji: '👑' },
        { id: 'trophy_god', name: 'Trophy God', description: 'Earn 1000 trophies total', target: 1000, type: 'trophy_earned', reward: 1500, emoji: '⭐' },
        { id: 'high_stakes', name: 'High Stakes', description: 'Earn 75+ trophies in one battle', target: 1, type: 'mega_trophy_battle', reward: 500, emoji: '💎' },
        { id: 'trophy_rush', name: 'Trophy Rush', description: 'Earn 100+ trophies in one battle', target: 1, type: 'ultra_trophy_battle', reward: 750, emoji: '🌟' },

        // Map Mastery
        { id: 'map_master', name: 'Map Master', description: 'Win on 10 different maps', target: 10, type: 'different_map_wins', reward: 350, emoji: '🗺️' },
        { id: 'volcano_legend', name: 'Volcano Legend', description: 'Win 10 battles on Lava Cavern', target: 10, type: 'volcano_wins', reward: 300, emoji: '🌋' },
        { id: 'space_commander', name: 'Space Commander', description: 'Win 10 battles on Space Station', target: 10, type: 'space_wins', reward: 300, emoji: '🚀' },
        { id: 'arena_veteran', name: 'Arena Veteran', description: 'Win 5 battles on Arena', target: 5, type: 'arena_wins', reward: 200, emoji: '🏟️' },
        { id: 'forest_ranger', name: 'Forest Ranger', description: 'Win 5 battles on Forest', target: 5, type: 'forest_wins', reward: 200, emoji: '🌲' },

        // Badge Mastery
        { id: 'badge_hoarder', name: 'Badge Hoarder', description: 'Collect 25 different badges', target: 25, type: 'badges_collected', reward: 400, emoji: '🏅' },
        { id: 'badge_master', name: 'Badge Master', description: 'Collect 50 different badges', target: 50, type: 'badges_collected', reward: 800, emoji: '💎' },
        { id: 'epic_badge_hunter', name: 'Epic Badge Hunter', description: 'Get 3 Epic badges', target: 3, type: 'epic_badges', reward: 350, emoji: '🟣' },
        { id: 'legendary_collector', name: 'Legendary Collector', description: 'Get 3 Legendary badges', target: 3, type: 'legendary_badges', reward: 1000, emoji: '💎' },

        // Economy Challenges
        { id: 'mega_spender', name: 'Mega Spender', description: 'Spend 2500 coins in the shop', target: 2500, type: 'coins_spent', reward: 400, emoji: '💸' },
        { id: 'ultra_spender', name: 'Ultra Spender', description: 'Spend 5000 coins in the shop', target: 5000, type: 'coins_spent', reward: 800, emoji: '💰' },
        { id: 'chest_addict', name: 'Chest Addict', description: 'Open 25 chests', target: 25, type: 'chests_opened', reward: 350, emoji: '📦' },
        { id: 'chest_master', name: 'Chest Master', description: 'Open 50 chests', target: 50, type: 'chests_opened', reward: 700, emoji: '🎁' },
        { id: 'coin_collector', name: 'Coin Collector', description: 'Earn 5000 coins total', target: 5000, type: 'coins_earned', reward: 500, emoji: '💰' },
        { id: 'millionaire', name: 'Millionaire', description: 'Earn 10000 coins total', target: 10000, type: 'coins_earned', reward: 1000, emoji: '💎' },

        // Special Achievement Challenges
        { id: 'battle_veteran', name: 'Battle Veteran', description: 'Play 50 total battles', target: 50, type: 'battles_played', reward: 300, emoji: '⚔️' },
        { id: 'battle_master', name: 'Battle Master', description: 'Play 100 total battles', target: 100, type: 'battles_played', reward: 600, emoji: '🎖️' },
        { id: 'flawless_victory', name: 'Flawless Victory', description: 'Win with 100% HP remaining', target: 1, type: 'flawless_wins', reward: 400, emoji: '✨' },

        // OUT-OF-GAME CHALLENGES - Character Collection
        { id: 'character_starter', name: 'Character Starter', description: 'Unlock 5 characters', target: 5, type: 'characters_collected', reward: 100, emoji: '🎭' },
        { id: 'character_enthusiast', name: 'Character Enthusiast', description: 'Unlock 10 characters', target: 10, type: 'characters_collected', reward: 200, emoji: '🌟' },
        { id: 'character_collector_pro', name: 'Character Collector Pro', description: 'Unlock 25 characters', target: 25, type: 'characters_collected', reward: 400, emoji: '👑' },
        { id: 'character_completionist', name: 'Character Completionist', description: 'Unlock 50 characters', target: 50, type: 'characters_collected', reward: 800, emoji: '💎' },
        { id: 'gotta_catch_em_all', name: 'Gotta Catch Em All', description: 'Unlock all characters', target: 160, type: 'characters_collected', reward: 2000, emoji: '🏆' },

        // OUT-OF-GAME CHALLENGES - Addon Collection
        { id: 'addon_beginner', name: 'Addon Beginner', description: 'Unlock 5 addons', target: 5, type: 'addons_collected', reward: 75, emoji: '👕' },
        { id: 'addon_collector', name: 'Addon Collector', description: 'Unlock 15 addons', target: 15, type: 'addons_collected', reward: 150, emoji: '🎨' },
        { id: 'addon_master', name: 'Addon Master', description: 'Unlock 30 addons', target: 30, type: 'addons_collected', reward: 300, emoji: '✨' },
        { id: 'fashionista', name: 'Fashionista', description: 'Unlock 50 addons', target: 50, type: 'addons_collected', reward: 600, emoji: '👗' },
        { id: 'style_icon', name: 'Style Icon', description: 'Unlock all addons', target: 100, type: 'addons_collected', reward: 1500, emoji: '💎' },

        // OUT-OF-GAME CHALLENGES - Trophy Milestones
        { id: 'trophy_rookie', name: 'Trophy Rookie', description: 'Reach 50 trophies', target: 50, type: 'trophy_milestone', reward: 100, emoji: '🏆' },
        { id: 'trophy_bronze', name: 'Trophy Bronze', description: 'Reach 100 trophies', target: 100, type: 'trophy_milestone', reward: 150, emoji: '🥉' },
        { id: 'trophy_silver', name: 'Trophy Silver', description: 'Reach 250 trophies', target: 250, type: 'trophy_milestone', reward: 250, emoji: '🥈' },
        { id: 'trophy_gold', name: 'Trophy Gold', description: 'Reach 500 trophies', target: 500, type: 'trophy_milestone', reward: 400, emoji: '🥇' },
        { id: 'trophy_platinum', name: 'Trophy Platinum', description: 'Reach 1000 trophies', target: 1000, type: 'trophy_milestone', reward: 800, emoji: '💎' },
        { id: 'trophy_legend', name: 'Trophy Legend', description: 'Reach 2500 trophies', target: 2500, type: 'trophy_milestone', reward: 1500, emoji: '👑' },

        // OUT-OF-GAME CHALLENGES - Game Modes
        { id: 'mode_explorer', name: 'Mode Explorer', description: 'Play 3 different game modes', target: 3, type: 'modes_played', reward: 150, emoji: '🎮' },
        { id: 'mode_master', name: 'Mode Master', description: 'Play all game modes', target: 5, type: 'modes_played', reward: 300, emoji: '🌟' },
        { id: 'tournament_player', name: 'Tournament Player', description: 'Complete 1 tournament', target: 1, type: 'tournaments_completed', reward: 200, emoji: '🏆' },
        { id: 'tournament_champion', name: 'Tournament Champion', description: 'Win 3 tournaments', target: 3, type: 'tournaments_won', reward: 500, emoji: '👑' },

        // OUT-OF-GAME CHALLENGES - Customization
        { id: 'style_starter', name: 'Style Starter', description: 'Equip addons on 5 characters', target: 5, type: 'characters_customized', reward: 100, emoji: '🎨' },
        { id: 'fashion_designer', name: 'Fashion Designer', description: 'Equip addons on 15 characters', target: 15, type: 'characters_customized', reward: 250, emoji: '✨' },
        { id: 'badge_equipper', name: 'Badge Equipper', description: 'Equip 3 badges at once', target: 1, type: 'badges_equipped', reward: 150, emoji: '🏅' },
        { id: 'power_builder', name: 'Power Builder', description: 'Equip 3 badges 10 times', target: 10, type: 'badges_equipped', reward: 300, emoji: '💪' },

        // OUT-OF-GAME CHALLENGES - Shop Activity
        { id: 'shop_visitor', name: 'Shop Visitor', description: 'Visit the shop 10 times', target: 10, type: 'shop_visits', reward: 50, emoji: '🛒' },
        { id: 'addon_chest_opener', name: 'Addon Chest Opener', description: 'Open 10 addon chests', target: 10, type: 'addon_chests_opened', reward: 150, emoji: '📦' },
        { id: 'badge_chest_opener', name: 'Badge Chest Opener', description: 'Open 10 badge chests', target: 10, type: 'badge_chests_opened', reward: 150, emoji: '🎁' },
        { id: 'character_chest_opener', name: 'Character Chest Opener', description: 'Open 10 character chests', target: 10, type: 'character_chests_opened', reward: 200, emoji: '🎭' },

        // OUT-OF-GAME CHALLENGES - Trophy Road
        { id: 'road_traveler', name: 'Road Traveler', description: 'Claim 5 trophy road rewards', target: 5, type: 'trophy_road_claimed', reward: 150, emoji: '🛣️' },
        { id: 'road_master', name: 'Road Master', description: 'Claim 15 trophy road rewards', target: 15, type: 'trophy_road_claimed', reward: 400, emoji: '🏁' },
        { id: 'road_legend', name: 'Road Legend', description: 'Claim all trophy road rewards', target: 30, type: 'trophy_road_claimed', reward: 1000, emoji: '👑' }
    ];

    // Initialize challenge progress tracking
    function initializeChallengeTracking() {
        if (!gameState.challengeProgress) {
            gameState.challengeProgress = {};
        }
        if (!gameState.challengeStats) {
            gameState.challengeStats = {
                // Existing stats
                totalDamage: 0,
                specialUses: 0,
                quickWins: 0,
                tankKills: 0,
                lowHpWins: 0,
                lowDamageWins: 0,
                perfectWins: 0,
                comebackWins: 0,
                currentWinStreak: 0,
                maxWinStreak: 0,
                charactersUsed: new Set(),
                raritiesWon: new Set(),
                underdogWins: 0,
                trophiesEarned: 0,
                highTrophyBattles: 0,
                mapsWon: new Set(),
                volcanoWins: 0,
                spaceWins: 0,
                badgesCollected: 0,
                legendaryBadges: 0,
                coinsSpent: 0,
                chestsOpened: 0,
                characterWins: {},

                // NEW STATS FOR 50 NEW CHALLENGES
                ultraQuickWins: 0, // Wins in under 15 seconds
                giantKills: 0, // Enemies with 400+ HP
                clutchWins: 0, // Wins with less than 10% HP
                damageTaken: 0, // Total damage taken
                mediumDamageWins: 0, // Wins taking less than 100 damage
                totalWins: 0, // Total battles won
                commonWins: 0, // Wins with common characters
                rareWins: 0, // Wins with rare characters
                epicWins: 0, // Wins with epic characters
                legendaryWins: 0, // Wins with legendary characters
                megaTrophyBattles: 0, // 75+ trophies in one battle
                ultraTrophyBattles: 0, // 100+ trophies in one battle
                arenaWins: 0, // Wins on Arena map
                forestWins: 0, // Wins on Forest map
                epicBadges: 0, // Epic badges collected
                coinsEarned: 0, // Total coins earned
                battlesPlayed: 0, // Total battles played
                flawlessWins: 0, // Wins with 100% HP

                // OUT-OF-GAME STATS
                charactersCollected: 0, // Total characters unlocked
                addonsCollected: 0, // Total addons unlocked
                modesPlayed: new Set(), // Different game modes played
                tournamentsCompleted: 0, // Tournaments completed
                tournamentsWon: 0, // Tournaments won
                charactersCustomized: new Set(), // Characters with addons equipped
                badgesEquippedCount: 0, // Times equipped 3 badges
                shopVisits: 0, // Times visited shop
                addonChestsOpened: 0, // Addon chests opened
                badgeChestsOpened: 0, // Badge chests opened
                characterChestsOpened: 0, // Character chests opened
                trophyRoadClaimed: 0 // Trophy road rewards claimed
            };
        }
        
        // Initialize challenges as empty - only unlock from trophy road!
        if (!gameState.challenges) {
            gameState.challenges = [];
        }
        if (!gameState.completedChallenges) {
            gameState.completedChallenges = [];
        }
    }

    // Generate new challenges when trophy road rewards are claimed
    function generateNewChallenge() {
        if (gameState.challenges.length >= 3) return; // Max 3 active challenges
        
        const availableChallenges = challengeTypes.filter(challenge => 
            !gameState.challenges.find(active => active.id === challenge.id) &&
            !gameState.completedChallenges.includes(challenge.id)
        );
        
        if (availableChallenges.length === 0) return;
        
        const newChallenge = availableChallenges[Math.floor(Math.random() * availableChallenges.length)];

        // Ensure all challenge properties are valid to prevent NaN
        gameState.challenges.push({
            ...newChallenge,
            progress: 0,
            target: Number(newChallenge.target) || 1,
            reward: Number(newChallenge.reward) || 0,
            dateAdded: Date.now()
        });

        console.log(`New challenge added: ${newChallenge.name}`);

        // Save game state
        saveGameState();
    }

    // Track challenge progress during battles and other actions
    function trackChallengeProgress(eventType, data = {}) {
        console.log(`🎯 trackChallengeProgress called! Event: ${eventType}`, data);

        if (!gameState.challengeStats) initializeChallengeTracking();

        // Update stats based on event type
        switch(eventType) {
            case 'damage_dealt':
                gameState.challengeStats.totalDamage += data.damage;
                break;
            case 'special_used':
                gameState.challengeStats.specialUses++;
                break;
            case 'battle_won':
                // Win streak tracking
                gameState.challengeStats.currentWinStreak++;
                gameState.challengeStats.maxWinStreak = Math.max(gameState.challengeStats.maxWinStreak, gameState.challengeStats.currentWinStreak);
                gameState.challengeStats.totalWins++;

                // Time-based wins
                if (data.timeRemaining > 60) gameState.challengeStats.quickWins++;
                if (data.timeRemaining > 75) gameState.challengeStats.ultraQuickWins++; // Under 15 seconds

                // HP-based wins
                if (data.playerHP < data.playerMaxHP * 0.25) gameState.challengeStats.lowHpWins++;
                if (data.playerHP < data.playerMaxHP * 0.1) gameState.challengeStats.clutchWins++; // Less than 10% HP
                if (data.playerHP === data.playerMaxHP) gameState.challengeStats.flawlessWins++; // 100% HP

                // Damage-based wins
                if (data.damageTaken <= 50) gameState.challengeStats.lowDamageWins++;
                if (data.damageTaken <= 100) gameState.challengeStats.mediumDamageWins++;
                if (data.damageTaken === 0) gameState.challengeStats.perfectWins++;
                gameState.challengeStats.damageTaken += data.damageTaken;

                // Comeback wins
                if (data.wasComeback) gameState.challengeStats.comebackWins++;

                // Enemy HP-based kills
                if (data.enemyHP >= 300) gameState.challengeStats.tankKills++;
                if (data.enemyHP >= 400) gameState.challengeStats.giantKills++;

                // Trophy-based achievements
                if (data.trophiesEarned >= 50) gameState.challengeStats.highTrophyBattles++;
                if (data.trophiesEarned >= 75) gameState.challengeStats.megaTrophyBattles++;
                if (data.trophiesEarned >= 100) gameState.challengeStats.ultraTrophyBattles++;
                gameState.challengeStats.trophiesEarned += data.trophiesEarned;

                // Character tracking
                // Ensure charactersUsed and raritiesWon are Sets
                if (!(gameState.challengeStats.charactersUsed instanceof Set)) {
                    gameState.challengeStats.charactersUsed = new Set(gameState.challengeStats.charactersUsed || []);
                }
                if (!(gameState.challengeStats.raritiesWon instanceof Set)) {
                    gameState.challengeStats.raritiesWon = new Set(gameState.challengeStats.raritiesWon || []);
                }
                gameState.challengeStats.charactersUsed.add(data.character);
                gameState.challengeStats.raritiesWon.add(data.rarity);

                // Rarity-specific wins
                if (data.rarity === 'common') {
                    gameState.challengeStats.commonWins++;
                    console.log(`✅ Common win tracked! Total: ${gameState.challengeStats.commonWins}`);
                }
                if (data.rarity === 'rare') {
                    gameState.challengeStats.rareWins++;
                    console.log(`✅ Rare win tracked! Total: ${gameState.challengeStats.rareWins}`);
                }
                if (data.rarity === 'epic') {
                    gameState.challengeStats.epicWins++;
                    console.log(`✅ Epic win tracked! Total: ${gameState.challengeStats.epicWins}`);
                }
                if (data.rarity === 'legendary') {
                    gameState.challengeStats.legendaryWins++;
                    console.log(`✅ Legendary win tracked! Total: ${gameState.challengeStats.legendaryWins}`);
                }

                // Underdog wins
                if (data.rarity === 'common' && (data.enemyRarity === 'epic' || data.enemyRarity === 'legendary')) {
                    gameState.challengeStats.underdogWins++;
                }

                // Map tracking
                // Ensure mapsWon is a Set
                if (!(gameState.challengeStats.mapsWon instanceof Set)) {
                    gameState.challengeStats.mapsWon = new Set(gameState.challengeStats.mapsWon || []);
                }
                gameState.challengeStats.mapsWon.add(data.map);
                if (data.map === 'volcano') gameState.challengeStats.volcanoWins++;
                if (data.map === 'space') gameState.challengeStats.spaceWins++;
                if (data.map === 'arena') gameState.challengeStats.arenaWins++;
                if (data.map === 'forest') gameState.challengeStats.forestWins++;

                break;
            case 'battle_lost':
                gameState.challengeStats.currentWinStreak = 0;
                break;
            case 'battle_started':
                gameState.challengeStats.battlesPlayed++;
                break;
            case 'badge_collected':
                gameState.challengeStats.badgesCollected++;
                if (data.rarity === 'legendary') gameState.challengeStats.legendaryBadges++;
                if (data.rarity === 'epic') gameState.challengeStats.epicBadges++;
                break;
            case 'coins_spent':
                gameState.challengeStats.coinsSpent += data.amount;
                break;
            case 'coins_earned':
                gameState.challengeStats.coinsEarned += data.amount;
                break;
            case 'chest_opened':
                gameState.challengeStats.chestsOpened++;
                // Track specific chest types
                if (data.type === 'addon') gameState.challengeStats.addonChestsOpened++;
                if (data.type === 'badge') gameState.challengeStats.badgeChestsOpened++;
                if (data.type === 'character') gameState.challengeStats.characterChestsOpened++;
                break;
            case 'character_collected':
                gameState.challengeStats.charactersCollected++;
                break;
            case 'addon_collected':
                gameState.challengeStats.addonsCollected++;
                break;
            case 'mode_played':
                // Ensure modesPlayed is a Set
                if (!(gameState.challengeStats.modesPlayed instanceof Set)) {
                    gameState.challengeStats.modesPlayed = new Set(gameState.challengeStats.modesPlayed || []);
                }
                gameState.challengeStats.modesPlayed.add(data.mode);
                break;
            case 'tournament_completed':
                gameState.challengeStats.tournamentsCompleted++;
                break;
            case 'tournament_won':
                gameState.challengeStats.tournamentsWon++;
                break;
            case 'character_customized':
                gameState.challengeStats.charactersCustomized.add(data.character);
                break;
            case 'badges_equipped':
                gameState.challengeStats.badgesEquippedCount++;
                break;
            case 'shop_visited':
                gameState.challengeStats.shopVisits++;
                break;
            case 'trophy_road_claimed':
                gameState.challengeStats.trophyRoadClaimed++;
                break;
        }
        
        // Check active challenges for completion
        gameState.challenges.forEach((challenge, index) => {
            let progress = 0;
            
            switch(challenge.type) {
                case 'damage':
                    progress = gameState.challengeStats.totalDamage;
                    break;
                case 'special_uses':
                    progress = gameState.challengeStats.specialUses;
                    break;
                case 'quick_wins':
                    progress = gameState.challengeStats.quickWins;
                    break;
                case 'tank_kills':
                    progress = gameState.challengeStats.tankKills;
                    break;
                case 'low_hp_wins':
                    progress = gameState.challengeStats.lowHpWins;
                    break;
                case 'low_damage_wins':
                    progress = gameState.challengeStats.lowDamageWins;
                    break;
                case 'perfect_wins':
                    progress = gameState.challengeStats.perfectWins;
                    break;
                case 'comeback_wins':
                    progress = gameState.challengeStats.comebackWins;
                    break;
                case 'win_streak':
                    progress = gameState.challengeStats.maxWinStreak;
                    break;
                case 'different_char_wins':
                    progress = gameState.challengeStats.charactersUsed.size;
                    break;
                case 'rarity_wins':
                    progress = gameState.challengeStats.raritiesWon.size;
                    break;
                case 'underdog_wins':
                    progress = gameState.challengeStats.underdogWins;
                    break;
                case 'trophy_earned':
                    progress = gameState.challengeStats.trophiesEarned;
                    break;
                case 'high_trophy_battle':
                    progress = gameState.challengeStats.highTrophyBattles;
                    break;
                case 'different_map_wins':
                    progress = gameState.challengeStats.mapsWon.size;
                    break;
                case 'volcano_wins':
                    progress = gameState.challengeStats.volcanoWins;
                    break;
                case 'space_wins':
                    progress = gameState.challengeStats.spaceWins;
                    break;
                case 'badges_collected':
                    // Count actual unique badges owned
                    const currentBadges = gameState.gameMode === 'multiplayer'
                        ? (gameState.currentShopPlayer === 1 ? gameState.player1Badges : gameState.player2Badges) || []
                        : gameState.unlockedBadges || [];
                    progress = currentBadges.length;
                    break;
                case 'legendary_badges':
                    // Count actual legendary badges owned
                    const currentBadgesForLegendary = gameState.gameMode === 'multiplayer'
                        ? (gameState.currentShopPlayer === 1 ? gameState.player1Badges : gameState.player2Badges) || []
                        : gameState.unlockedBadges || [];
                    progress = currentBadgesForLegendary.filter(badgeId => badges[badgeId]?.rarity === 'legendary').length;
                    break;
                case 'coins_spent':
                    progress = gameState.challengeStats.coinsSpent;
                    break;
                case 'chests_opened':
                    progress = gameState.challengeStats.chestsOpened;
                    break;

                // NEW CHALLENGE TYPES
                case 'ultra_quick_wins':
                    progress = gameState.challengeStats.ultraQuickWins;
                    break;
                case 'giant_kills':
                    progress = gameState.challengeStats.giantKills;
                    break;
                case 'clutch_wins':
                    progress = gameState.challengeStats.clutchWins;
                    break;
                case 'damage_taken':
                    progress = gameState.challengeStats.damageTaken;
                    break;
                case 'medium_damage_wins':
                    progress = gameState.challengeStats.mediumDamageWins;
                    break;
                case 'total_wins':
                    progress = gameState.challengeStats.totalWins;
                    break;
                case 'common_wins':
                    progress = gameState.challengeStats.commonWins;
                    break;
                case 'rare_wins':
                    progress = gameState.challengeStats.rareWins;
                    break;
                case 'epic_wins':
                    progress = gameState.challengeStats.epicWins;
                    break;
                case 'legendary_wins':
                    progress = gameState.challengeStats.legendaryWins;
                    break;
                case 'mega_trophy_battle':
                    progress = gameState.challengeStats.megaTrophyBattles;
                    break;
                case 'ultra_trophy_battle':
                    progress = gameState.challengeStats.ultraTrophyBattles;
                    break;
                case 'arena_wins':
                    progress = gameState.challengeStats.arenaWins;
                    break;
                case 'forest_wins':
                    progress = gameState.challengeStats.forestWins;
                    break;
                case 'epic_badges':
                    // Count actual epic badges owned
                    const currentBadgesForEpic = gameState.gameMode === 'multiplayer'
                        ? (gameState.currentShopPlayer === 1 ? gameState.player1Badges : gameState.player2Badges) || []
                        : gameState.unlockedBadges || [];
                    progress = currentBadgesForEpic.filter(badgeId => badges[badgeId]?.rarity === 'epic').length;
                    break;
                case 'coins_earned':
                    progress = gameState.challengeStats.coinsEarned;
                    break;
                case 'battles_played':
                    progress = gameState.challengeStats.battlesPlayed;
                    break;
                case 'flawless_wins':
                    progress = gameState.challengeStats.flawlessWins;
                    break;

                // OUT-OF-GAME CHALLENGE TYPES
                case 'characters_collected':
                    // Count actual characters owned
                    const playerChars = gameState.gameMode === 'multiplayer'
                        ? (gameState.currentShopPlayer === 1 ? gameState.player1Characters : gameState.player2Characters) || []
                        : gameState.unlockedCharacters || [];
                    progress = playerChars.length;
                    break;
                case 'addons_collected':
                    // Count actual addons owned
                    const playerAddons = gameState.gameMode === 'multiplayer'
                        ? (gameState.currentShopPlayer === 1 ? gameState.player1Addons : gameState.player2Addons) || []
                        : gameState.unlockedAddons || [];
                    progress = playerAddons.length;
                    break;
                case 'trophy_milestone':
                    // Check current trophy count
                    const currentTrophies = gameState.gameMode === 'multiplayer'
                        ? (gameState.currentShopPlayer === 1 ? gameState.player1Trophies : gameState.player2Trophies) || 0
                        : gameState.trophies || 0;
                    progress = currentTrophies >= challenge.target ? challenge.target : 0;
                    break;
                case 'modes_played':
                    progress = gameState.challengeStats.modesPlayed.size;
                    break;
                case 'tournaments_completed':
                    progress = gameState.challengeStats.tournamentsCompleted;
                    break;
                case 'tournaments_won':
                    progress = gameState.challengeStats.tournamentsWon;
                    break;
                case 'characters_customized':
                    progress = gameState.challengeStats.charactersCustomized.size;
                    break;
                case 'badges_equipped':
                    progress = gameState.challengeStats.badgesEquippedCount;
                    break;
                case 'shop_visits':
                    progress = gameState.challengeStats.shopVisits;
                    break;
                case 'addon_chests_opened':
                    progress = gameState.challengeStats.addonChestsOpened;
                    break;
                case 'badge_chests_opened':
                    progress = gameState.challengeStats.badgeChestsOpened;
                    break;
                case 'character_chests_opened':
                    progress = gameState.challengeStats.characterChestsOpened;
                    break;
                case 'trophy_road_claimed':
                    progress = gameState.challengeStats.trophyRoadClaimed;
                    break;
            }

            // Ensure progress and target are valid numbers to prevent NaN
            const validProgress = Number(progress) || 0;
            const validTarget = Number(challenge.target) || 1;
            challenge.progress = Math.min(validProgress, validTarget);

            // Complete challenge if target reached
            if (challenge.progress >= challenge.target && !gameState.completedChallenges.includes(challenge.id)) {
                completeChallenge(challenge, index);
            }
        });
    }

    // Recalculate all challenge progress (called when opening challenges screen)
    function recalculateAllChallengeProgress() {
        if (!gameState.challengeStats) initializeChallengeTracking();

        console.log('🔄 Recalculating challenge progress...');
        console.log('Challenge Stats:', gameState.challengeStats);

        gameState.challenges.forEach((challenge, index) => {
            let progress = 0;

            switch(challenge.type) {
                case 'damage':
                    progress = gameState.challengeStats.totalDamage;
                    break;
                case 'special_uses':
                    progress = gameState.challengeStats.specialUses;
                    break;
                case 'quick_wins':
                    progress = gameState.challengeStats.quickWins;
                    break;
                case 'tank_kills':
                    progress = gameState.challengeStats.tankKills;
                    break;
                case 'low_hp_wins':
                    progress = gameState.challengeStats.lowHpWins;
                    break;
                case 'low_damage_wins':
                    progress = gameState.challengeStats.lowDamageWins;
                    break;
                case 'perfect_wins':
                    progress = gameState.challengeStats.perfectWins;
                    break;
                case 'comeback_wins':
                    progress = gameState.challengeStats.comebackWins;
                    break;
                case 'win_streak':
                    progress = gameState.challengeStats.maxWinStreak;
                    break;
                case 'different_char_wins':
                    progress = gameState.challengeStats.charactersUsed.size;
                    break;
                case 'rarity_wins':
                    progress = gameState.challengeStats.raritiesWon.size;
                    break;
                case 'underdog_wins':
                    progress = gameState.challengeStats.underdogWins;
                    break;
                case 'trophy_earned':
                    progress = gameState.challengeStats.trophiesEarned;
                    break;
                case 'high_trophy_battle':
                    progress = gameState.challengeStats.highTrophyBattles;
                    break;
                case 'different_map_wins':
                    progress = gameState.challengeStats.mapsWon.size;
                    break;
                case 'volcano_wins':
                    progress = gameState.challengeStats.volcanoWins;
                    break;
                case 'space_wins':
                    progress = gameState.challengeStats.spaceWins;
                    break;
                case 'badges_collected':
                    const currentBadges = gameState.gameMode === 'multiplayer'
                        ? (gameState.currentShopPlayer === 1 ? gameState.player1Badges : gameState.player2Badges) || []
                        : gameState.unlockedBadges || [];
                    progress = currentBadges.length;
                    break;
                case 'legendary_badges':
                    const currentBadgesForLegendary = gameState.gameMode === 'multiplayer'
                        ? (gameState.currentShopPlayer === 1 ? gameState.player1Badges : gameState.player2Badges) || []
                        : gameState.unlockedBadges || [];
                    progress = currentBadgesForLegendary.filter(badgeId => badges[badgeId]?.rarity === 'legendary').length;
                    break;
                case 'coins_spent':
                    progress = gameState.challengeStats.coinsSpent;
                    break;
                case 'chests_opened':
                    progress = gameState.challengeStats.chestsOpened;
                    break;
                case 'ultra_quick_wins':
                    progress = gameState.challengeStats.ultraQuickWins;
                    break;
                case 'giant_kills':
                    progress = gameState.challengeStats.giantKills;
                    break;
                case 'clutch_wins':
                    progress = gameState.challengeStats.clutchWins;
                    break;
                case 'damage_taken':
                    progress = gameState.challengeStats.damageTaken;
                    break;
                case 'medium_damage_wins':
                    progress = gameState.challengeStats.mediumDamageWins;
                    break;
                case 'total_wins':
                    progress = gameState.challengeStats.totalWins;
                    break;
                case 'common_wins':
                    progress = gameState.challengeStats.commonWins;
                    break;
                case 'rare_wins':
                    progress = gameState.challengeStats.rareWins;
                    break;
                case 'epic_wins':
                    progress = gameState.challengeStats.epicWins;
                    break;
                case 'legendary_wins':
                    progress = gameState.challengeStats.legendaryWins;
                    break;
                case 'mega_trophy_battle':
                    progress = gameState.challengeStats.megaTrophyBattles;
                    break;
                case 'ultra_trophy_battle':
                    progress = gameState.challengeStats.ultraTrophyBattles;
                    break;
                case 'arena_wins':
                    progress = gameState.challengeStats.arenaWins;
                    break;
                case 'forest_wins':
                    progress = gameState.challengeStats.forestWins;
                    break;
                case 'epic_badges':
                    const currentBadgesForEpic = gameState.gameMode === 'multiplayer'
                        ? (gameState.currentShopPlayer === 1 ? gameState.player1Badges : gameState.player2Badges) || []
                        : gameState.unlockedBadges || [];
                    progress = currentBadgesForEpic.filter(badgeId => badges[badgeId]?.rarity === 'epic').length;
                    break;
                case 'coins_earned':
                    progress = gameState.challengeStats.coinsEarned;
                    break;
                case 'battles_played':
                    progress = gameState.challengeStats.battlesPlayed;
                    break;
                case 'flawless_wins':
                    progress = gameState.challengeStats.flawlessWins;
                    break;

                // OUT-OF-GAME CHALLENGE TYPES
                case 'characters_collected':
                    const playerCharsRecalc = gameState.gameMode === 'multiplayer'
                        ? (gameState.currentShopPlayer === 1 ? gameState.player1Characters : gameState.player2Characters) || []
                        : gameState.unlockedCharacters || [];
                    progress = playerCharsRecalc.length;
                    break;
                case 'addons_collected':
                    const playerAddonsRecalc = gameState.gameMode === 'multiplayer'
                        ? (gameState.currentShopPlayer === 1 ? gameState.player1Addons : gameState.player2Addons) || []
                        : gameState.unlockedAddons || [];
                    progress = playerAddonsRecalc.length;
                    break;
                case 'trophy_milestone':
                    const currentTrophiesRecalc = gameState.gameMode === 'multiplayer'
                        ? (gameState.currentShopPlayer === 1 ? gameState.player1Trophies : gameState.player2Trophies) || 0
                        : gameState.trophies || 0;
                    progress = currentTrophiesRecalc >= challenge.target ? challenge.target : 0;
                    break;
                case 'modes_played':
                    progress = gameState.challengeStats.modesPlayed.size;
                    break;
                case 'tournaments_completed':
                    progress = gameState.challengeStats.tournamentsCompleted;
                    break;
                case 'tournaments_won':
                    progress = gameState.challengeStats.tournamentsWon;
                    break;
                case 'characters_customized':
                    progress = gameState.challengeStats.charactersCustomized.size;
                    break;
                case 'badges_equipped':
                    progress = gameState.challengeStats.badgesEquippedCount;
                    break;
                case 'shop_visits':
                    progress = gameState.challengeStats.shopVisits;
                    break;
                case 'addon_chests_opened':
                    progress = gameState.challengeStats.addonChestsOpened;
                    break;
                case 'badge_chests_opened':
                    progress = gameState.challengeStats.badgeChestsOpened;
                    break;
                case 'character_chests_opened':
                    progress = gameState.challengeStats.characterChestsOpened;
                    break;
                case 'trophy_road_claimed':
                    progress = gameState.challengeStats.trophyRoadClaimed;
                    break;
            }

            // Ensure progress and target are valid numbers to prevent NaN
            const validProgress = Number(progress) || 0;
            const validTarget = Number(challenge.target) || 1;
            challenge.progress = Math.min(validProgress, validTarget);

            console.log(`📊 Challenge: ${challenge.name} (${challenge.type}) - Progress: ${challenge.progress}/${challenge.target}`);

            // Complete challenge if target reached
            if (challenge.progress >= challenge.target && !gameState.completedChallenges.includes(challenge.id)) {
                completeChallenge(challenge, index);
            }
        });

        // Save game state after tracking progress
        saveGameState();
    }

    function completeChallenge(challenge, index) {
        // Mark challenge as claimed (will be shown in loading screen)
        challenge.claimed = true;

        // Add to completed list
        if (!gameState.completedChallenges.includes(challenge.id)) {
            gameState.completedChallenges.push(challenge.id);
        }

        // Don't award coins or remove challenge here - that happens in checkCompletedChallenges()
        // This function just marks the challenge as ready to be claimed

        console.log(`Challenge ready to claim: ${challenge.name}`);

        // Save game state
        saveGameState();
    }

    // Save gameState to localStorage
    function saveGameState() {
        try {
            // Convert Sets to Arrays for JSON serialization
            const stateToSave = {
                ...gameState,
                challengeStats: gameState.challengeStats ? {
                    ...gameState.challengeStats,
                    charactersUsed: Array.from(gameState.challengeStats.charactersUsed || []),
                    raritiesWon: Array.from(gameState.challengeStats.raritiesWon || []),
                    mapsWon: Array.from(gameState.challengeStats.mapsWon || [])
                } : null
            };
            localStorage.setItem('battleArenaGameState', JSON.stringify(stateToSave));
            console.log('💾 Game state saved!');
        } catch (error) {
            console.error('Failed to save game state:', error);
        }
    }

    // Helper function to safely convert to Set
    function toSet(value) {
        if (!value) return new Set();
        if (value instanceof Set) return value;
        if (Array.isArray(value)) return new Set(value);
        // If it's an object, try to get its values
        if (typeof value === 'object') {
            return new Set(Object.values(value));
        }
        return new Set();
    }

    // Load gameState from localStorage
    function loadGameState() {
        try {
            const saved = localStorage.getItem('battleArenaGameState');
            if (saved) {
                const loadedState = JSON.parse(saved);

                // Merge loaded state with default gameState
                Object.assign(gameState, loadedState);

                // Convert Arrays/Objects back to Sets safely
                if (gameState.challengeStats) {
                    gameState.challengeStats.charactersUsed = toSet(gameState.challengeStats.charactersUsed);
                    gameState.challengeStats.raritiesWon = toSet(gameState.challengeStats.raritiesWon);
                    gameState.challengeStats.mapsWon = toSet(gameState.challengeStats.mapsWon);
                    gameState.challengeStats.modesPlayed = toSet(gameState.challengeStats.modesPlayed);
                }

                console.log('💾 Game state loaded!', gameState);
            } else {
                console.log('💾 No saved game state found, starting fresh!');
            }
        } catch (error) {
            console.error('Failed to load game state:', error);
        }
    }

    // Auto-save gameState whenever it changes
    function autoSaveGameState() {
        saveGameState();
    }

    // Load game state on startup
    loadGameState();

    // Helper function to reset coins (for testing/debugging)
    window.resetCoins = function() {
        gameState.coins = 75;
        gameState.player1Coins = 75;
        gameState.player2Coins = 75;
        saveGameState();
        updateSinglePlayerCoinsDisplay();
        updateMultiplayerCoinsDisplay();
        console.log('💰 Coins reset to 75!');
    };

    // Helper function to clear all saved data
    window.resetGameData = function() {
        if (confirm('Are you sure you want to reset ALL game data? This cannot be undone!')) {
            localStorage.removeItem('battleArenaGameState');
            location.reload();
        }
    };

    // Reset Account function with confirmation
    window.confirmResetAccount = function() {
        const confirmation = confirm('⚠️ WARNING ⚠️\n\nThis will DELETE ALL your progress:\n• All coins\n• All unlocked characters\n• All badges\n• All trophies\n• All challenge progress\n• Everything!\n\nYou will start completely fresh with only 75 coins and 3 starter characters.\n\nAre you ABSOLUTELY SURE?');

        if (confirmation) {
            const doubleCheck = confirm('🔥 FINAL WARNING 🔥\n\nThis action CANNOT be undone!\n\nClick OK to permanently delete everything and restart.');

            if (doubleCheck) {
                localStorage.removeItem('battleArenaGameState');
                showNotification('🔥 Account Reset! Starting fresh...');
                setTimeout(() => {
                    location.reload();
                }, 1000);
            }
        }
    };

    // Initialize on game start
    initializeChallengeTracking();

    // NOTE: Challenges are ONLY unlocked from trophy road rewards, not generated automatically
    // Players must claim trophy road milestones to get new challenges

    // Initialize universal coin display (wrapped in try-catch to prevent errors)
    try {
        updateUniversalCoinsDisplay();
    } catch(err) {
        console.log('Coin display will be initialized when DOM is ready');
    }

    // Initialize game
    console.log(`Epic Battle Arena Loaded with ${Object.keys(characters).length} characters!`);

    // DEBUG: Log initial state
    console.log('=== INITIAL GAME STATE ===');
    console.log('Challenges:', gameState.challenges);
    console.log('Challenge Stats:', gameState.challengeStats);
    console.log('Completed Challenges:', gameState.completedChallenges);

    // DEBUG: Make trackChallengeProgress globally accessible for testing
    window.testTrackProgress = trackChallengeProgress;
    window.testRecalculate = recalculateAllChallengeProgress;
    window.gameState = gameState;

    // DEBUG: Test function to simulate a battle win
    window.testBattleWin = function() {
        console.log('🧪 Testing battle win tracking...');
        trackChallengeProgress('battle_won', {
            timeRemaining: 70,
            playerHP: 200,
            playerMaxHP: 200,
            damageTaken: 0,
            enemyHP: 300,
            trophiesEarned: 10,
            character: 'Spider',
            rarity: 'common',
            enemyRarity: 'common',
            map: 'volcano'
        });
        console.log('✅ Test complete! Check gameState.challengeStats');
        console.log('Common wins:', gameState.challengeStats.commonWins);
        console.log('Total wins:', gameState.challengeStats.totalWins);
        console.log('Volcano wins:', gameState.challengeStats.volcanoWins);
    };

    // I+O Coin Cheat - Simple and working!
    window.cheatKeys = {};
    window.cheatUsed = false;

    window.addEventListener('keydown', function(e) {
        window.cheatKeys[e.code] = true;
        if (window.cheatKeys['KeyI'] && window.cheatKeys['KeyO'] && !window.cheatUsed) {
            if (!gameState.battle || !gameState.battle.gameRunning) {
                gameState.coins += 1500;
                saveGameState();
                try {
                    updateUniversalCoinsDisplay();
                } catch(err) {
                    // Ignore if display not ready yet
                }
                try {
                    showNotification('💰 +1500 coins!', 'success');
                } catch(err) {
                    // Ignore if notification not ready yet
                }
                window.cheatUsed = true;
            }
        }
    }, false);

    window.addEventListener('keyup', function(e) {
        window.cheatKeys[e.code] = false;
        if (!window.cheatKeys['KeyI'] && !window.cheatKeys['KeyO']) {
            window.cheatUsed = false;
        }
    }, false);

