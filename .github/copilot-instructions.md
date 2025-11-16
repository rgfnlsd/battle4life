# Battle4Life AI Coding Agent Instructions

## Project Overview
**Battle4Life** is a browser-based competitive battle game featuring 160+ characters, intelligent AI opponents, multiplayer support, and advanced visual effects. The project is a single-file HTML/JS application (9180+ lines) with no external dependencies.

## Architecture & Key Components

### Core Class Hierarchy
1. **Battle** - Main game loop controller
   - Manages game state, collision detection, rendering
   - Handles multiple game modes: normal, special_drop, flag_capture, boss_battle
   - Implements screen shake, visual effects, and platform scaling
   - Key methods: `update()`, `render()`, `gameLoop()`, `checkCollision()`

2. **Fighter** - Individual player/enemy character
   - Stats: health, damage, special damage, position, direction
   - Abilities: jump, normalAttack(), specialAttack(), useItem()
   - Has AI system for single-player with dodging, healing, strategic behavior
   - Platform collision detection and movement speed management

3. **Boss** - Special boss character for cooperative mode (2 players vs 1 boss)
   - 2000+ HP, 3-phase system with rage mode and shake mode
   - More aggressive attack patterns in later phases
   - Uses Fire Breath special attack (projectile spread)
   - Key methods: `update()`, `normalAttack()`, `specialAttack()`, `takeDamage()`

4. **Projectile** - Base class for all attack projectiles
   - Tracks origin, damage, color, velocity
   - Has collision response handling (`onHit()` callback)
   - Special subclasses: `HeadProjectile` (reusable), `BombProjectile` (area damage)

### Game State Management
```javascript
gameState = {
  gameMode: 'singleplayer' | 'multiplayer',
  selectedBattleMode: 'normal' | 'special_drop' | 'flag_capture' | 'boss_battle',
  coins: 100, // Single player
  player1Coins/player2Coins: 75, // Multiplayer
  unlockedCharacters: [], // Single player
  player1Characters/player2Characters: [], // Multiplayer
  // Tournament, badges, challenges, and trophy systems also tracked
}
```

## Critical Developer Workflows

### Building & Running
- **No build step required** - Open `index.html` in browser directly
- Uses vanilla JavaScript (ES6+), no bundler or server needed
- Game runs at 60 FPS via `requestAnimationFrame` in `gameLoop()`

### Collision Detection System
- **Circular collision** (default): radius = 1/3 of character width/height
- Used for: character-to-character, projectile-to-character, item pickup
- Formula: `distance between centers < sum of radii`
- Toggle visualization: Press **H** key (sets `battle.showHitboxes`)
- Test utility: Press **T** for `testCircularHitboxes()`, **M** for `testAllMaps()`

### AI System (Single Player)
Located in `updateAI()` method of Battle class:
- Calculates distance to player, predicts movement
- Decision tree: chase → dodge → attack → heal
- Uses randomized probabilities to prevent predictability
- Avoids falling off platforms via edge detection
- Will flee and heal if health < 30%
- **No pathfinding** - moves directly on X axis, uses jump mechanic for platforms

### Game Mode Systems

#### Special Drop Mode (`selectedBattleMode === 'special_drop'`)
- Items drop every 15-30 seconds randomly
- 50 unique items (sword, nuke, shield, heal, speed, meteor, etc.)
- Collision-based pickup when fighter overlaps item
- Item effects applied immediately via `fighter.activeItems` array
- Each item has: name, emoji, damage/defense/heal values, duration

#### Flag Capture Mode (`selectedBattleMode === 'flag_capture'`)
- **Flag object** created at `gameState.flagCapture.flag`
- Win condition: Hold flag for 15 seconds continuously
- If flag dropped (holder dies), it resets at map center
- Stun mechanics: 2-second stun when flag changes hands
- Progress bar shows hold duration above flag holder

#### Boss Battle Mode (`selectedBattleMode === 'boss_battle'`)
- Both players are human-controlled (cooperative)
- Shared enemy: single Boss instance
- Boss has 3 phases + rage mode (30% HP) + shake mode (25% HP)
- End game condition: Both players die (not just one)
- Boss health bar spans 60% of screen width at top

### Platform System
- Platforms generated during Battle construction via `scalePlatforms()`
- 6 fixed platforms scaled to screen resolution
- Y-coordinates range from 520px (ground) to 180px (highest)
- **No slope collisions** - platforms are axis-aligned rectangles
- Collision check: `velocityY > 0 && overlaps && above platform edge`

## Project-Specific Patterns & Conventions

### Naming Conventions
- **Game modes**: kebab-case (`special_drop`, `flag_capture`, `boss_battle`)
- **Characters**: PascalCase in database keys (`'Spider'`, `'Thunder'`, `'Dragon'`)
- **Private methods**: Leading underscore NOT used; rely on scope
- **Magic numbers**: Check for `interval` (timers), `threshold` (health %), `damage` multipliers

### Critical Constants
```javascript
// Character stats by rarity
common: 200-250 HP, special reload 13-15s
rare: 250-300 HP, special reload 10-12s
epic: 300-350 HP, special reload 8-10s
legendary: 350-400 HP, special reload 6-8s

// Special Drop System
dropInterval: 15-30 seconds (randomized)
itemDuration: 0-15000ms
dropRadius: ~80px for area damage items

// Boss Battle
Boss HP: 2000
Phase transitions: 66% → Phase 2, 33% → Phase 3
Rage mode threshold: 30% HP
Shake mode threshold: 25% HP
Attack speed: 2x normal fighters
```

### Array/Object Management
- **projectiles[]** - Cleared each battle, items added/removed by collision
- **dropItems[]** - Special drop mode only, removed on pickup
- **visualEffects[]** - Max 100 at a time, auto-cleanup in `updateVisualEffects()`
- **mapData.platforms** - Regenerated on window resize via `scalePlatforms()`
- **gameState.unlockedCharacters[]** - Persists across battles using localStorage simulation

### Common Pitfalls to Avoid
1. **Forget to check `gameState.battle` exists** before accessing `battle.projectiles`
2. **Screen shake applies to entire canvas** - offsets not isolated per object
3. **Boss AI gets 2x speed, damage** - account for when balancing
4. **Items don't have gravity** - drop items use hardcoded Y or float
5. **Characters can move off-screen** - no bounds checking, only platform collision
6. **Stun locks out BOTH movement and attacks** - in flag capture mode

## Integration Points & Data Flows

### Character Creation Flow
1. User selects character from `characters` DB (160+ entries)
2. Creates `new Fighter(characterData, x, y, type)`
3. Fighter reads: emoji, color, damage, specialDamage, maxHealth, rarity
4. Character appearance: emoji is main visual (no animation frames)

### Battle Initialization Flow
1. `showBattleScreen()` → starts game loop
2. Battle constructor → scales platforms → creates Fighter instances
3. Sets up keyboard controls via `setupControls()`
4. Calls `gameLoop()` with `requestAnimationFrame` (60 FPS)

### Item Usage Flow
1. Fighter pressed **Q** key → calls `fighter.useItem()`
2. Checks `fighter.activeItems` array for usable items
3. Applies stat changes: `this.speed *= itemEffect.speedMultiplier`
4. Sets `item.durationTimer` countdown
5. Auto-removes when timer reaches 0

### AI Decision Flow
```
1. calculate distance to player
2. if distance > 300px: chase (move toward player)
3. if distance < 300px && distance > 100px: 
   - 5% chance dodge
   - 1.5% chance attack
4. if distance < 100px:
   - 10% chance dodge (closer = more dodge)
   - 3% chance attack
5. if health < 30%:
   - 4% chance heal (prioritize over attack)
   - flee from player
```

## File Organization
- **Single file**: `index.html` (9180 lines)
  - Lines 1-100: Game state setup + constants
  - Lines 100-5000: Character database + item definitions
  - Lines 5000-7000: Map definitions + platform data
  - Lines 7000-8000: Fighter class + methods
  - Lines 8000-8500: Battle class + game loop
  - Lines 8500-9000: UI functions + screen navigation
  - Lines 9000-9180: HTML markup + CSS

## Debugging Tips
1. **Check console**: Browser DevTools console logs character creation, AI actions
2. **Hitbox visualization**: Press H during battle to see collision circles
3. **Performance**: Frame drops indicate too many projectiles (>300)
4. **AI not attacking?**: Check `reloadTime` property (defaults 80-150ms for normal)
5. **Platform clipping?**: Verify Y-coordinates in `scalePlatforms()` relative to groundLevel

## Code Quality Expectations
- **No external dependencies** - maintain vanilla JS approach
- **Class-based OOP** - use constructor functions and prototypes
- **Avoid breaking changes** to `gameState` structure
- **Comments required** for non-obvious game mode logic
- **Console logging** for debugging (keep behind conditions)
- **Event cleanup** in destructors (window.removeEventListener)

## When Modifying Core Systems
- **Collision**: Test with `testCircularHitboxes()` after changes
- **AI**: Adjust probability thresholds (0.01 = 1%) not hardcoded behavior
- **Game modes**: Keep separate in conditional blocks (`if (this.isSpecialDropMode)`)
- **Characters/Items**: Append to DB, never modify existing entries
- **Maps**: Test platform scaling on 16:9 aspect ratio at 1920x1080
