#!/usr/bin/env python3
"""
Extract UI functions from script.js
"""

import re

def find_function(content, func_name):
    """Find a function definition and extract it"""
    patterns = [
        rf'function {func_name}\s*\([^)]*\)\s*\{{',
        rf'const {func_name}\s*=\s*function\s*\([^)]*\)\s*\{{',
        rf'const {func_name}\s*=\s*\([^)]*\)\s*=>\s*\{{',
    ]
    
    for pattern in patterns:
        match = re.search(pattern, content)
        if match:
            start_pos = match.start()
            
            # Find the matching closing brace
            brace_count = 0
            in_func = False
            end_pos = start_pos
            
            for i in range(start_pos, len(content)):
                char = content[i]
                if char == '{':
                    brace_count += 1
                    in_func = True
                elif char == '}':
                    brace_count -= 1
                    if in_func and brace_count == 0:
                        end_pos = i + 1
                        break
            
            if end_pos > start_pos:
                return content[start_pos:end_pos]
    
    return None

def extract_function_group(content, function_names):
    """Extract multiple related functions"""
    functions = []
    for func_name in function_names:
        func_def = find_function(content, func_name)
        if func_def:
            # Remove leading spaces
            func_lines = func_def.split('\n')
            func_lines = [line[4:] if line.startswith('    ') else line for line in func_lines]
            func_content = '\n'.join(func_lines)
            functions.append(func_content)
            print(f"  ✓ Found {func_name}")
        else:
            print(f"  ✗ Could not find {func_name}")
    
    return functions

def main():
    with open('script.js', 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Screen navigation functions
    print("\nExtracting screen navigation functions...")
    screen_functions = [
        'showShop',
        'showCollection',
        'showBattleScreen',
        'showMainMenu',
        'showGameModeSelect',
        'showBattleModeSelect',
        'showCharacterSelect',
        'showBadges',
        'showSettings',
        'confirmResetAccount',
        'resetAccount'
    ]
    
    screen_funcs = extract_function_group(content, screen_functions)
    if screen_funcs:
        screen_content = "// Battle4Life - Screen Navigation\n// Auto-extracted from script.js\n\n" + '\n\n'.join(screen_funcs)
        screen_content += "\n\n// Export for use in other modules\nif (typeof module !== 'undefined' && module.exports) {\n    module.exports = { " + ', '.join([f for f in screen_functions if find_function(content, f)]) + " };\n}\n"
        
        with open('js/ui/screens.js', 'w', encoding='utf-8') as f:
            f.write(screen_content)
        print(f"✓ Created screens.js with {len(screen_funcs)} functions")
    
    # Display update functions
    print("\nExtracting display update functions...")
    display_functions = [
        'updateSinglePlayerCoinsDisplay',
        'updateMultiplayerCoinsDisplay',
        'updateCoinsDisplay',
        'updateTrophyDisplay',
        'showNotification',
        'showLoadingScreen',
        'hideLoadingScreen',
        'updateHealthBar',
        'updateScoreboard'
    ]
    
    display_funcs = extract_function_group(content, display_functions)
    if display_funcs:
        display_content = "// Battle4Life - Display Updates\n// Auto-extracted from script.js\n\n" + '\n\n'.join(display_funcs)
        display_content += "\n\n// Export for use in other modules\nif (typeof module !== 'undefined' && module.exports) {\n    module.exports = { " + ', '.join([f for f in display_functions if find_function(content, f)]) + " };\n}\n"
        
        with open('js/ui/displays.js', 'w', encoding='utf-8') as f:
            f.write(display_content)
        print(f"✓ Created displays.js with {len(display_funcs)} functions")
    
    print("\n✓ UI extraction complete!")

if __name__ == '__main__':
    main()

