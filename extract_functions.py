#!/usr/bin/env python3
"""
Extract function groups from script.js into system and UI modules
"""

import re

def find_function(content, func_name):
    """Find a function definition and extract it"""
    # Try different function patterns
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
    
    # Shop system functions
    print("\nExtracting shop system functions...")
    shop_functions = [
        'buyChest',
        'buyBadgeChest',
        'buyAddonChest',
        'showUnifiedChestAnimation',
        'showBadgeChestAnimation',
        'showAddonChestAnimation',
        'showSequentialChestAnimation',
        'endChestAnimation',
        'endBadgeChestAnimation',
        'endAddonChestAnimation'
    ]
    
    shop_funcs = extract_function_group(content, shop_functions)
    if shop_funcs:
        shop_content = "// Battle4Life - Shop System\n// Auto-extracted from script.js\n\n" + '\n\n'.join(shop_funcs)
        shop_content += "\n\n// Export for use in other modules\nif (typeof module !== 'undefined' && module.exports) {\n    module.exports = { " + ', '.join(shop_functions) + " };\n}\n"
        
        with open('js/systems/shop.js', 'w', encoding='utf-8') as f:
            f.write(shop_content)
        print(f"✓ Created shop.js with {len(shop_funcs)} functions")
    
    # Challenge system functions
    print("\nExtracting challenge system functions...")
    challenge_functions = [
        'generateNewChallenge',
        'trackChallengeProgress',
        'claimChallengeReward',
        'showChallenges',
        'initializeChallengeTracking'
    ]
    
    challenge_funcs = extract_function_group(content, challenge_functions)
    if challenge_funcs:
        challenge_content = "// Battle4Life - Challenge System\n// Auto-extracted from script.js\n\n" + '\n\n'.join(challenge_funcs)
        challenge_content += "\n\n// Export for use in other modules\nif (typeof module !== 'undefined' && module.exports) {\n    module.exports = { " + ', '.join(challenge_functions) + " };\n}\n"
        
        with open('js/systems/challenges.js', 'w', encoding='utf-8') as f:
            f.write(challenge_content)
        print(f"✓ Created challenges.js with {len(challenge_funcs)} functions")
    
    # Trophy road functions
    print("\nExtracting trophy road functions...")
    trophy_functions = [
        'showTrophyRoad',
        'claimMilestone',
        'updateTrophyDisplay',
        'updateTrophyRoadDisplay'
    ]
    
    trophy_funcs = extract_function_group(content, trophy_functions)
    if trophy_funcs:
        trophy_content = "// Battle4Life - Trophy Road System\n// Auto-extracted from script.js\n\n" + '\n\n'.join(trophy_funcs)
        trophy_content += "\n\n// Export for use in other modules\nif (typeof module !== 'undefined' && module.exports) {\n    module.exports = { " + ', '.join(trophy_functions) + " };\n}\n"
        
        with open('js/systems/trophyRoad.js', 'w', encoding='utf-8') as f:
            f.write(trophy_content)
        print(f"✓ Created trophyRoad.js with {len(trophy_funcs)} functions")
    
    # Tournament functions
    print("\nExtracting tournament functions...")
    tournament_functions = [
        'startTournament',
        'nextTournamentRound',
        'endTournament',
        'showTournamentBracket',
        'start2PlayerTournament',
        'next2PlayerTournamentRound',
        'end2PlayerTournament'
    ]
    
    tournament_funcs = extract_function_group(content, tournament_functions)
    if tournament_funcs:
        tournament_content = "// Battle4Life - Tournament System\n// Auto-extracted from script.js\n\n" + '\n\n'.join(tournament_funcs)
        tournament_content += "\n\n// Export for use in other modules\nif (typeof module !== 'undefined' && module.exports) {\n    module.exports = { " + ', '.join(tournament_functions) + " };\n}\n"
        
        with open('js/systems/tournament.js', 'w', encoding='utf-8') as f:
            f.write(tournament_content)
        print(f"✓ Created tournament.js with {len(tournament_funcs)} functions")
    
    print("\n✓ System extraction complete!")

if __name__ == '__main__':
    main()

