// Battle4Life - Cosmetic Addons System
// Auto-extracted from script.js

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

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { addons };
}
