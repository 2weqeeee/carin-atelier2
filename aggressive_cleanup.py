
import os
import re

def aggressive_m_cleanup(path):
    with open(path, 'r', encoding='utf-8', errors='ignore') as f:
        content = f.read()
    
    # Remove 'm' before 's' if it's part of the corruption
    # We'll use a list of common corrupted words
    corrupted_words = [
        "elmse", "regionems", "cursoms", "profesorems", "inmscripcionems",
        "categoriamsStore", "remseams", "preguntams", "comprams", "reembolmsoms",
        "logms", "lamst", "Planems", "memsems", "unmshift", "mimsmsing",
        "productoms", "Migrationms", "eximst", "thims", "parmse", "rolems",
        "fechaRegimstro", "emstadoActividad", "umser", "umsuario", "clamsms",
        "conmst", "msave", "falmse", "curmso", "pumsh", "regimstro", "emstado",
        "imscrito", "mstat", "mstyle", "msuccess", "Databamse", "nuemstro",
        "Comstura", "emstilo", "limst", "Accem", "Dimsponibl", "Remsumen",
        "Demscuent", "Exclumsiv", "fremsc", "workmshop", "msize", "thimss",
        "clammss", "vmar", "parmsing", "msaved", "mselected", "pumshing"
    ]
    
    # We also see words like 'profesorems' which is 'profesores' + 'm' + 's'
    # Actually, it's 'profesores' where 's' became 'ms'.
    
    # Let's try a safer regex: replace 'ms' with 's' and 'um' with 'u' 
    # BUT ONLY if it's not 'Resumen' or 'Nombre' etc.
    
    def fix_ms(match):
        word = match.group(0)
        if word.lower() in ["resumen", "nombre", "mismo", "misión"]:
            return word
        return word.replace("ms", "s").replace("um", "u")

    # This is too complex. Let's just do a huge list of specific replacements.
    
    replacements = [
        ("elmse", "else"), ("regionems", "regiones"), ("cursoms", "cursos"),
        ("profesorems", "profesores"), ("inmscripcionems", "inscripciones"),
        ("categoriamsStore", "categoriasStore"), ("remseams", "reseñas"),
        ("preguntams", "preguntas"), ("comprams", "compras"), ("reembolmsoms", "reembolsos"),
        ("logms", "logs"), ("lamst", "last"), ("Planems", "Planes"),
        ("memsems", "meses"), ("unmshift", "unshift"), ("mimsmsing", "missing"),
        ("productoms", "productos"), ("Migrationms", "Migrations"), ("eximst", "exist"),
        ("rolems", "roles"), ("fechaRegimstro", "fechaRegistro"), ("emstadoActividad", "estadoActividad"),
        ("umser", "user"), ("umsuario", "usuario"), ("clamsms", "class"),
        ("conmst", "const"), ("msave", "save"), ("falmse", "false"), ("curmso", "curso"),
        ("pumsh", "push"), ("regimstro", "registro"), ("emstado", "estado"),
        ("imscrito", "inscrito"), ("mstat", "stat"), ("mstyle", "style"),
        ("msuccess", "success"), ("Databamse", "Database"), ("nuemstro", "nuestro"),
        ("Comstura", "Costura"), ("emstilo", "estilo"), ("limst", "list"),
        ("Accem", "Acce"), ("Dimsponibl", "Disponibl"), ("Remsumen", "Resumen"),
        ("Demscuent", "Descuent"), ("Exclumsiv", "Exclusiv"), ("fremsc", "fresc"),
        ("workmshop", "workshop"), ("msize", "size"), ("thimss", "this"),
        ("clammss", "class"), ("vmar", "var"), ("parmsing", "parsing"),
        ("msaved", "saved"), ("mselected", "selected"), ("pumshing", "pushing"),
        ("PaPágina", "Pagina"), ("profesores", "profesores"),
        ("configRebajams", "configRebajas"), ("cuponems", "cupones"),
        ("thims", "this")
    ]
    
    for old, new in replacements:
        content = content.replace(old, new)
    
    # Final check for keywords
    content = content.replace("conmst", "const")
    content = content.replace("elmse", "else")
    
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)

aggressive_m_cleanup(r'c:\Users\Usuario\Desktop\AntiGravityTest\db.js')
aggressive_m_cleanup(r'c:\Users\Usuario\Desktop\AntiGravityTest\app.js')
print("Aggressive M cleanup finished")
