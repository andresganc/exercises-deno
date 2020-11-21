
## VERSION

    - Saber version de deno

        $ deno --version

        $ devo -v

## EJECUTAR DENO

    - Ejecutar archivo local

        $ deno run main.ts

    - Ejecutar archivo remoto

        $ deno run https://mydomain.com/main.ts

    - Alternativa 2 para ejecutar archivo local

        $ cat main.ts | deno run


## EJECUTAR CON PERMISOS

    - Deno es seguro por defecto. Por lo tanto, a menos que lo habilite específicamente, un módulo deno no tiene acceso a archivos, redes o entornos, por ejemplo. El acceso a áreas o funciones sensibles a la seguridad requiere el uso de permisos para otorgar un proceso deno en la línea de comando.

    Para el siguiente ejemplo, mod.tsse le ha otorgado acceso de solo lectura al sistema de archivos. No puede escribir en él ni realizar ninguna otra función sensible a la seguridad.

        $ deno run --allow-read mod.ts