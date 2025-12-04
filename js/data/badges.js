// Battle4Life - Badge System
// Auto-extracted from script.js

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

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { badges };
}
