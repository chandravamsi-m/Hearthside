import os
import re

root_dir = r'c:\Users\Admin\Desktop\HTML Templates\Hearthside'

def get_relative_path(file_path):
    rel = os.path.relpath(root_dir, os.path.dirname(file_path))
    if rel == '.':
        return 'assets/js/main.js'
    return os.path.join(rel, 'assets/js/main.js').replace('\\', '/')

def update_file(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # 1. Consolidated Script Replacement
    # Matches any sequence of script tags pointing to assets/js/*.js
    script_pattern = re.compile(r'(<!-- Scripts -->\s*)?(<script src=".*?assets/js/.*?\.js"></script>\s*)+', re.IGNORECASE)
    rel_js_path = get_relative_path(file_path)
    new_script_tag = f'<!-- Scripts -->\n  <script src="{rel_js_path}"></script>\n'
    content = script_pattern.sub(new_script_tag, content)

    # 2. Hero animation polish (optional but good)
    content = content.replace('animate-fade-up stagger-1', 'animate-fade-up')
    content = content.replace('animate-fade-up stagger-2', 'animate-fade-up stagger-1')
    content = content.replace('animate-fade-up stagger-3', 'animate-fade-up stagger-2')

    # 3. Clean up inline fetch logic (redundant now that main.js handles it)
    fetch_pattern = re.compile(r'<script>\s*// Component loading simulation.*?</script>', re.DOTALL | re.IGNORECASE)
    content = fetch_pattern.sub('', content)

    # 4. Clean up specific dashboard/booking script references if they survived
    content = re.sub(r'<script src=".*?assets/js/(dashboard|booking|slider|validation|charts|gallery)\.js"></script>\s*', '', content)

    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)

for root, dirs, files in os.walk(root_dir):
    for file in files:
        if file.endswith('.html'):
            update_file(os.path.join(root, file))

print("Updated all HTML files.")
