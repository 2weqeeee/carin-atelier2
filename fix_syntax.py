import sys

with open('app.js', 'r', encoding='utf-8') as f:
    lines = f.readlines()

# The orphaned code starts after the new handleImageUpload ends
# New handleImageUpload ends at line 6075 (roughly)
# We want to remove everything until "viewAdmin" starts.

start_marker = "this.showToast('\u274C Error al subir imagen');"
end_marker = "viewAdmin(container, section = 'dashboard') {"

new_lines = []
skipping = False
for line in lines:
    if start_marker in line:
        new_lines.append(line)
        skipping = True
        continue
    if end_marker in line:
        skipping = False
    
    if not skipping:
        new_lines.append(line)

with open('app.js', 'w', encoding='utf-8') as f:
    f.writelines(new_lines)

print("Cleanup complete.")
