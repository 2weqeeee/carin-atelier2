
import os
import re

def final_nuclear_scrub(path):
    with open(path, 'r', encoding='utf-8', errors='ignore') as f:
        content = f.read()
    
    # 1. Broadly replace 'ms' with 's' but protect 'Resumen'
    # We use a lambda to check context
    def fix_ms(match):
        start = match.start()
        prefix = content[max(0, start-4):start].lower()
        if prefix == "resu":
            return "ms" # Keep it
        return "s"

    content = re.sub(r"ms", fix_ms, content)
    
    # 2. Fix the 'Remset' / 'Remstore' / 'conmsole' / 'umser' / 'ammin'
    replacements = [
        ("Remset", "Reset"), ("remset", "reset"), ("Remstore", "Restore"), 
        ("remstore", "restore"), ("conmsole", "console"), ("umser", "user"),
        ("ammin", "admin"), ("imput", "input"), ("omclick", "onclick"),
        ("omchange", "onchange"), ("amdd", "add"), ("ampp", "app"),
        ("imcl", "incl"), ("umsh", "ush"), ("umshift", "unshift"),
        ("pumsh", "push"), ("umsuario", "usuario"), ("profemsor", "profesor"),
        ("rolems", "roles"), ("itemms", "items"), ("curms", "curs"),
        ("materialem", "materiale"), ("logms", "logs"), ("cuponem", "cupone"),
        ("regionem", "regione"), ("inmscrip", "inscrip"), ("categoriams", "categorias"),
        ("remseams", "reseñas"), ("preguntams", "preguntas"), ("comprams", "compras"),
        ("reembolmsos", "reembolsos"), ("lamst", "last"), ("Planem", "Plane"),
        ("memsems", "meses"), ("mimsmsing", "missing"), ("productoms", "productos"),
        ("Migrationms", "Migrations"), ("eximst", "exist"), ("thims", "this")
    ]
    
    for old, new in replacements:
        content = content.replace(old, new)
        
    # 3. Final polish of keywords
    content = content.replace("conmst", "const")
    content = content.replace("elmse", "else")
    content = content.replace("clammss", "class")
    
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)

final_nuclear_scrub(r'c:\Users\Usuario\Desktop\AntiGravityTest\db.js')
final_nuclear_scrub(r'c:\Users\Usuario\Desktop\AntiGravityTest\app.js')
print("Final nuclear scrub finished")
