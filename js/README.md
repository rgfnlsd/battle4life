# Battle4Life - Modular JavaScript Structure

## 📁 Directory Structure

```
js/
├── config.js              # Game configuration & constants
├── gameState.js           # State management & localStorage
├── loader.js              # Module loading system
├── main.js                # Entry point (to be created)
│
├── data/                  # Game data files
│   ├── characters.js      # ✅ 160+ characters (244 lines)
│   ├── badges.js          # ✅ Badge definitions (88 lines)
│   ├── maps.js            # ✅ Arena/map data (275 lines)
│   ├── addons.js          # ✅ Cosmetic items (182 lines)
│   └── items.js           # ⏳ Special drop items
│
├── classes/               # Game classes
│   ├── Fighter.js         # ⏳ Fighter class with AI
│   ├── Battle.js          # ⏳ Battle system & game loop
│   ├── Projectile.js      # ⏳ Projectile classes
│   └── Boss.js            # ⏳ Boss battle class
│
├── systems/               # Game systems
│   ├── shop.js            # ⏳ Shop & chest systems
│   ├── challenges.js      # ⏳ Challenge system
│   ├── trophyRoad.js      # ⏳ Trophy progression
│   └── tournament.js      # ⏳ Tournament modes
│
└── ui/                    # UI functions
    ├── screens.js         # ⏳ Screen navigation
    └── displays.js        # ⏳ UI updates
```

## 📊 File Sizes

| File | Lines | Status | Description |
|------|-------|--------|-------------|
| **config.js** | 113 | ✅ | Game constants and configuration |
| **gameState.js** | 145 | ✅ | State management |
| **loader.js** | 95 | ✅ | Module loader |
| **data/characters.js** | 244 | ✅ | Character database |
| **data/badges.js** | 88 | ✅ | Badge definitions |
| **data/maps.js** | 275 | ✅ | Map/arena data |
| **data/addons.js** | 182 | ✅ | Cosmetic items |
| **data/items.js** | ~50 | ⏳ | Special drop items |
| **classes/Fighter.js** | ~1500 | ⏳ | Fighter class |
| **classes/Battle.js** | ~3500 | ⏳ | Battle system |
| **classes/Projectile.js** | ~200 | ⏳ | Projectile classes |
| **classes/Boss.js** | ~400 | ⏳ | Boss class |
| **systems/shop.js** | ~1500 | ⏳ | Shop systems |
| **systems/challenges.js** | ~500 | ⏳ | Challenge system |
| **systems/trophyRoad.js** | ~400 | ⏳ | Trophy road |
| **systems/tournament.js** | ~800 | ⏳ | Tournaments |
| **ui/screens.js** | ~1000 | ⏳ | Screen navigation |
| **ui/displays.js** | ~300 | ⏳ | UI updates |
| **main.js** | ~100 | ⏳ | Entry point |

**Total:** ~11,391 lines (vs original 13,141 lines)

## 🔄 Module Dependencies

```
config.js (no dependencies)
    ↓
gameState.js (no dependencies)
    ↓
data/*.js (no dependencies)
    ↓
classes/*.js (depends on: config, gameState, data)
    ↓
systems/*.js (depends on: config, gameState, data, classes)
    ↓
ui/*.js (depends on: all above)
    ↓
main.js (depends on: all above)
```

## 🚀 Loading Order

The `loader.js` loads modules in this order:

1. **Core** (config, gameState)
2. **Data** (characters, badges, maps, items, addons)
3. **Classes** (Projectile, Fighter, Boss, Battle)
4. **Systems** (shop, challenges, trophyRoad, tournament)
5. **UI** (displays, screens)
6. **Main** (entry point)

## 📝 Module Descriptions

### Core Modules

**config.js**
- Game constants (FPS, physics, AI settings)
- Rarity colors and stats
- Chest prices and probabilities
- Tournament configuration

**gameState.js**
- Central game state object
- Single player & multiplayer data
- localStorage save/load
- State reset functionality

**loader.js**
- Dynamic script loading
- Dependency management
- Progress tracking
- Error handling

### Data Modules

**data/characters.js**
- 160+ character definitions
- Organized by rarity (common, rare, epic, legendary)
- Stats: HP, damage, special attacks, reload times

**data/badges.js**
- Badge definitions with effects
- Damage boost, health boost, speed boost, etc.

**data/maps.js**
- Arena/map layouts
- Platform configurations
- Special obstacles (spikes, lava, ice)

**data/addons.js**
- Cosmetic items (hats, shirts, pants, shoes)
- Visual customization

**data/items.js** ⏳
- Special drop items
- Power-ups and weapons

### Class Modules

**classes/Fighter.js** ⏳
- Fighter class with AI
- Movement & combat
- Platform collision
- Special attacks

**classes/Battle.js** ⏳
- Main battle controller
- Game loop (60 FPS)
- Collision detection
- Visual effects

**classes/Projectile.js** ⏳
- Base Projectile class
- HeadProjectile
- BombProjectile

**classes/Boss.js** ⏳
- Boss battle mode
- 3-phase system
- Special attacks

### System Modules

**systems/shop.js** ⏳
- Chest buying
- Chest animations
- Coin rewards

**systems/challenges.js** ⏳
- Challenge generation
- Progress tracking
- Rewards

**systems/trophyRoad.js** ⏳
- Trophy milestones
- Reward claiming
- Progress display

**systems/tournament.js** ⏳
- Tournament modes
- Series management
- Prize distribution

### UI Modules

**ui/screens.js** ⏳
- Screen navigation
- Game mode selection
- Character selection

**ui/displays.js** ⏳
- Coin displays
- Trophy displays
- Health bars
- Notifications

## 🎯 Usage

### In HTML

```html
<!-- Load the module loader -->
<script src="js/loader.js"></script>
```

### In JavaScript

```javascript
// Wait for all modules to load
window.addEventListener('modulesLoaded', function() {
    // All modules are now available
    console.log('Game ready!');
    
    // Access game state
    console.log(gameState);
    
    // Access characters
    console.log(characters);
    
    // Start game
    loadGameState();
    showGameModeScreen();
});
```

## ✅ Completed

- ✅ Directory structure created
- ✅ Core modules (config, gameState, loader)
- ✅ Data modules (characters, badges, maps, addons)
- ✅ Documentation (REFACTORING.md, REFACTORING_GUIDE.md)
- ✅ Extraction script (extract_sections.py)

## ⏳ Remaining

- ⏳ Extract items.js
- ⏳ Extract class files
- ⏳ Extract system files
- ⏳ Extract UI files
- ⏳ Create main.js
- ⏳ Update index.html
- ⏳ Test all functionality

## 📚 Documentation

- **REFACTORING.md** - Detailed technical documentation
- **REFACTORING_GUIDE.md** - Step-by-step guide
- **README.md** - This file

## 🔧 Tools

- **extract_sections.py** - Python script for extracting code sections
- **loader.js** - Dynamic module loader

## 🎮 Current Status

**The game works with the original `script.js`!**

The modular structure is optional and can be adopted gradually. All refactored modules maintain 100% compatibility with the original code.

