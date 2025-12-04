// Battle4Life - Module Loader
// Loads all JavaScript modules in the correct order

(function() {
    'use strict';
    
    // Module loading configuration
    const MODULES = [
        // Core modules (no dependencies)
        'js/config.js',
        'js/gameState.js',
        
        // Data modules (no dependencies, can load in parallel)
        'js/data/characters.js',
        'js/data/badges.js',
        'js/data/maps.js',
        'js/data/items.js',
        'js/data/addons.js',
        
        // Class modules (depend on core + data)
        'js/classes/Projectile.js',
        'js/classes/Fighter.js',
        'js/classes/Boss.js',
        'js/classes/Battle.js',
        
        // System modules (depend on classes)
        'js/systems/shop.js',
        'js/systems/challenges.js',
        'js/systems/trophyRoad.js',
        'js/systems/tournament.js',
        
        // UI modules (depend on systems)
        'js/ui/displays.js',
        'js/ui/screens.js',
        
        // Main entry point (depends on everything)
        'js/main.js'
    ];
    
    let loadedCount = 0;
    const totalModules = MODULES.length;
    
    // Show loading progress
    function updateProgress() {
        loadedCount++;
        const percent = Math.round((loadedCount / totalModules) * 100);
        console.log(`Loading modules: ${loadedCount}/${totalModules} (${percent}%)`);
        
        if (loadedCount === totalModules) {
            console.log('✓ All modules loaded successfully!');
            // Dispatch event to signal all modules are loaded
            window.dispatchEvent(new Event('modulesLoaded'));
        }
    }
    
    // Load a script dynamically
    function loadScript(src) {
        return new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.src = src + '?v=' + Date.now(); // Cache busting
            script.async = false; // Maintain order
            script.onload = () => {
                updateProgress();
                resolve();
            };
            script.onerror = () => {
                console.error(`Failed to load module: ${src}`);
                reject(new Error(`Failed to load ${src}`));
            };
            document.head.appendChild(script);
        });
    }
    
    // Load all modules sequentially
    async function loadAllModules() {
        console.log('Starting module loading...');
        console.log(`Total modules to load: ${totalModules}`);
        
        try {
            for (const module of MODULES) {
                await loadScript(module);
            }
        } catch (error) {
            console.error('Module loading failed:', error);
            alert('Failed to load game modules. Please refresh the page.');
        }
    }
    
    // Start loading when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', loadAllModules);
    } else {
        loadAllModules();
    }
    
})();

