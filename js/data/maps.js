// Battle4Life - Map/Arena System
// Auto-extracted from script.js

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

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { maps };
}
