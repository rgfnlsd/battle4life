#!/usr/bin/env python3
"""
Extract class definitions from script.js
"""

import re

def find_class_definition(content, class_name):
    """Find a class definition and extract it with all its methods"""
    # Pattern to match class definition
    pattern = rf'class {class_name}\s*(?:extends\s+\w+\s*)?\{{'
    match = re.search(pattern, content)
    
    if not match:
        return None
    
    start_pos = match.start()
    
    # Find the matching closing brace
    brace_count = 0
    in_class = False
    end_pos = start_pos
    
    for i in range(start_pos, len(content)):
        char = content[i]
        if char == '{':
            brace_count += 1
            in_class = True
        elif char == '}':
            brace_count -= 1
            if in_class and brace_count == 0:
                end_pos = i + 1
                break
    
    if end_pos > start_pos:
        return content[start_pos:end_pos]
    
    return None

def extract_items_data(content):
    """Extract items object"""
    pattern = r'const items = \{[^}]*\};'
    # This is more complex, need to handle nested objects
    match = re.search(r'const items = \{', content)
    if not match:
        return None
    
    start_pos = match.start()
    brace_count = 0
    in_obj = False
    end_pos = start_pos
    
    for i in range(start_pos, len(content)):
        char = content[i]
        if char == '{':
            brace_count += 1
            in_obj = True
        elif char == '}':
            brace_count -= 1
            if in_obj and brace_count == 0:
                # Find the semicolon
                for j in range(i, min(i + 10, len(content))):
                    if content[j] == ';':
                        end_pos = j + 1
                        break
                break
    
    if end_pos > start_pos:
        return content[start_pos:end_pos]
    
    return None

def main():
    with open('script.js', 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Extract items data
    print("Extracting items data...")
    items_section = extract_items_data(content)
    if items_section:
        # Remove leading spaces
        items_lines = items_section.split('\n')
        items_lines = [line[4:] if line.startswith('    ') else line for line in items_lines]
        items_content = '\n'.join(items_lines)
        items_content = f"// Battle4Life - Special Drop Items\n// Auto-extracted from script.js\n\n{items_content}\n\n// Export for use in other modules\nif (typeof module !== 'undefined' && module.exports) {{\n    module.exports = {{ items }};\n}}\n"
        
        with open('js/data/items.js', 'w', encoding='utf-8') as f:
            f.write(items_content)
        print(f"✓ Extracted items.js ({len(items_lines)} lines)")
    else:
        print("✗ Could not find items data")
    
    # Extract classes
    classes_to_extract = [
        ('Projectile', 'js/classes/Projectile.js'),
        ('HeadProjectile', None),  # Will be in Projectile.js
        ('BombProjectile', None),  # Will be in Projectile.js
        ('Fighter', 'js/classes/Fighter.js'),
        ('Boss', 'js/classes/Boss.js'),
        ('Battle', 'js/classes/Battle.js'),
        ('Flag', None)  # Will be in Battle.js
    ]
    
    projectile_classes = []
    
    for class_name, output_file in classes_to_extract:
        print(f"Extracting {class_name} class...")
        class_def = find_class_definition(content, class_name)
        
        if class_def:
            # Remove leading spaces
            class_lines = class_def.split('\n')
            class_lines = [line[4:] if line.startswith('    ') else line for line in class_lines]
            class_content = '\n'.join(class_lines)
            
            # Group projectile classes together
            if class_name in ['Projectile', 'HeadProjectile', 'BombProjectile']:
                projectile_classes.append(class_content)
                print(f"✓ Found {class_name} ({len(class_lines)} lines)")
            elif output_file:
                class_content = f"// Battle4Life - {class_name} Class\n// Auto-extracted from script.js\n\n{class_content}\n\n// Export for use in other modules\nif (typeof module !== 'undefined' && module.exports) {{\n    module.exports = {{ {class_name} }};\n}}\n"
                
                with open(output_file, 'w', encoding='utf-8') as f:
                    f.write(class_content)
                print(f"✓ Extracted {class_name} to {output_file} ({len(class_lines)} lines)")
        else:
            print(f"✗ Could not find {class_name} class")
    
    # Write all projectile classes to one file
    if projectile_classes:
        projectile_content = "// Battle4Life - Projectile Classes\n// Auto-extracted from script.js\n\n" + '\n\n'.join(projectile_classes)
        projectile_content += "\n\n// Export for use in other modules\nif (typeof module !== 'undefined' && module.exports) {\n    module.exports = { Projectile, HeadProjectile, BombProjectile };\n}\n"
        
        with open('js/classes/Projectile.js', 'w', encoding='utf-8') as f:
            f.write(projectile_content)
        print(f"✓ Combined projectile classes into Projectile.js")
    
    print("\n✓ Class extraction complete!")

if __name__ == '__main__':
    main()

