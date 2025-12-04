#!/usr/bin/env python3
"""
Extract sections from script.js into separate module files
"""

import re

def extract_section(content, start_pattern, end_pattern):
    """Extract a section between start and end patterns"""
    start_match = re.search(start_pattern, content, re.MULTILINE)
    if not start_match:
        return None, None
    
    start_pos = start_match.start()
    end_match = re.search(end_pattern, content[start_pos:], re.MULTILINE)
    if not end_match:
        return None, None
    
    end_pos = start_pos + end_match.end()
    return content[start_pos:end_pos], (start_pos, end_pos)

def main():
    with open('script.js', 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Extract characters
    chars_section, chars_pos = extract_section(
        content,
        r'^    const characters = \{',
        r'^    \};'
    )
    
    if chars_section:
        # Remove leading spaces and wrap in export
        chars_lines = chars_section.split('\n')
        chars_lines = [line[4:] if line.startswith('    ') else line for line in chars_lines]
        chars_content = '\n'.join(chars_lines)
        chars_content = f"// Battle4Life - Character Database\n// Auto-extracted from script.js\n\n{chars_content}\n\n// Export for use in other modules\nif (typeof module !== 'undefined' && module.exports) {{\n    module.exports = {{ characters }};\n}}\n"
        
        with open('js/data/characters.js', 'w', encoding='utf-8') as f:
            f.write(chars_content)
        print(f"✓ Extracted characters.js ({len(chars_lines)} lines)")
    
    # Extract badges
    badges_section, badges_pos = extract_section(
        content,
        r'^    const badges = \{',
        r'^    \};'
    )
    
    if badges_section:
        badges_lines = badges_section.split('\n')
        badges_lines = [line[4:] if line.startswith('    ') else line for line in badges_lines]
        badges_content = '\n'.join(badges_lines)
        badges_content = f"// Battle4Life - Badge System\n// Auto-extracted from script.js\n\n{badges_content}\n\n// Export for use in other modules\nif (typeof module !== 'undefined' && module.exports) {{\n    module.exports = {{ badges }};\n}}\n"
        
        with open('js/data/badges.js', 'w', encoding='utf-8') as f:
            f.write(badges_content)
        print(f"✓ Extracted badges.js ({len(badges_lines)} lines)")
    
    # Extract maps
    maps_section, maps_pos = extract_section(
        content,
        r'^    const maps = \{',
        r'^    \};'
    )
    
    if maps_section:
        maps_lines = maps_section.split('\n')
        maps_lines = [line[4:] if line.startswith('    ') else line for line in maps_lines]
        maps_content = '\n'.join(maps_lines)
        maps_content = f"// Battle4Life - Map/Arena System\n// Auto-extracted from script.js\n\n{maps_content}\n\n// Export for use in other modules\nif (typeof module !== 'undefined' && module.exports) {{\n    module.exports = {{ maps }};\n}}\n"
        
        with open('js/data/maps.js', 'w', encoding='utf-8') as f:
            f.write(maps_content)
        print(f"✓ Extracted maps.js ({len(maps_lines)} lines)")
    
    # Extract items
    items_section, items_pos = extract_section(
        content,
        r'^    const items = \{',
        r'^    \};'
    )
    
    if items_section:
        items_lines = items_section.split('\n')
        items_lines = [line[4:] if line.startswith('    ') else line for line in items_lines]
        items_content = '\n'.join(items_lines)
        items_content = f"// Battle4Life - Special Drop Items\n// Auto-extracted from script.js\n\n{items_content}\n\n// Export for use in other modules\nif (typeof module !== 'undefined' && module.exports) {{\n    module.exports = {{ items }};\n}}\n"
        
        with open('js/data/items.js', 'w', encoding='utf-8') as f:
            f.write(items_content)
        print(f"✓ Extracted items.js ({len(items_lines)} lines)")
    
    # Extract addons
    addons_section, addons_pos = extract_section(
        content,
        r'^    const addons = \{',
        r'^    \};'
    )
    
    if addons_section:
        addons_lines = addons_section.split('\n')
        addons_lines = [line[4:] if line.startswith('    ') else line for line in addons_lines]
        addons_content = '\n'.join(addons_lines)
        addons_content = f"// Battle4Life - Cosmetic Addons System\n// Auto-extracted from script.js\n\n{addons_content}\n\n// Export for use in other modules\nif (typeof module !== 'undefined' && module.exports) {{\n    module.exports = {{ addons }};\n}}\n"
        
        with open('js/data/addons.js', 'w', encoding='utf-8') as f:
            f.write(addons_content)
        print(f"✓ Extracted addons.js ({len(addons_lines)} lines)")
    
    print("\n✓ Data extraction complete!")

if __name__ == '__main__':
    main()

