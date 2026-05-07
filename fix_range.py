import sys

with open('app.js', 'r', encoding='utf-8') as f:
    lines = f.readlines()

# We want to remove lines from 6077 to 6135 (1-indexed)
# In 0-indexed: lines[6076:6135]
# Wait, 6076 is "}," which we want to keep.
# So remove lines[6077:6135]

del lines[6077:6135]

with open('app.js', 'w', encoding='utf-8') as f:
    f.writelines(lines)

print("Line-based cleanup complete.")
