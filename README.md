
# [<img src="./readme/img/deno-portada.jpeg" width="600" />](https://deno.land/)

<br>

# [<img src="./readme/img/logo-nc.png" width="30"/>](https://newsoftcomputer.com) CURSO NC DE DENO

    - Curso NC de Deno - Curso del RunTime de JavaScript & TypeScript Deno

<br>


### TABLA DE CONTENIDO

- [Que es Deno](#Que-es-Deno)
- [Instalacion](#Instalacion)


<br><br>



<img src='readme/img/deno-logo.png' width="60px" >

### Que es Deno

    - Deno Es un runtime(sistema de tiempo de ejecución) para Javascript y TypeScript está basado en el motor de Javascript V8 y en el lenguaje de programación Rust. Creado por Ryan Dahl, creador original de Node.js, y está centrado en la seguridad y productividad.4​ Fue anunciado por Dahl en 2018 durante su charla "10 Cosas de las que me arrepiento sobre Node.js".5​ Deno Explícitamente toma la función de ambos runtime y Manejador de paquete dentro de un solo ejecutable, en vez que requerir un programa de administración de paquetes separado.6​7​

### Historia 

    - Historia
    Deno fue anunciado en JSConf UE 2018 por Ryan Dahl en su charla "10 Cosas que me remuerden Sobre Node.js".5​ En su charla, Ryan mencionó sus remordimientos sobre las decisiones de diseño iniciales con Node.js, centrando en su escogencia de no utilizar Promesas en el diseño de API, uso del sistema de construccion anticuado GYP, nodo_modules y package.json

    Finalmente presentó el prototipo de Deno, buscando hacer las llamadas a sistema a través de paso de mensajes con herramientas de serialización tales como Protocol Buffers, y proporcionar banderas de línea de comando para control de acceso.

    Deno fue inicialmente escrito en Go y utilizado Protocol Buffers para serialización entre los lados privilegiado (Go, con acceso de llamada del sistema) y Noprivilegiado (V8).8​ Aun así, Go fue pronto reemplazado con Rust debido a preocupaciones por double runtime y la garbage collection.9​ Tokio es introducido en lugar de libuv como la plataforma conducida por eventos(event drive) asíncrona, y se adopta Flatbuffers para una serialización y deserialización más rápida "Zero Copy" pero más tarde en agosto 2019, FlatBuffers era finalmente sacado después publicados los benchmarks que median una significativa sobrecarga de la serialización en abril 2019.10​11​12​13​

    Una biblioteca(library) estándar, modelda al estilo de la biblioteca estándar de Go , fue creada en noviembre 2018 para proporcionar una extensa cantidad de utilidades y herramientas, parcialmente solucionando el problema de Node.js de laexplosión del árbol de dependencias.14​

    El Deno 1.0 oficial fue liberado el 13 de mayo de 2020.15​

### Vision general

    - Visión general
    Deno busca ser un entorno de scripting productivo y seguro para el programador moderno.6​ Similar a Node.js, Deno enfatiza en arquitectura manejada por eventos, proveyendo un conjunto de utilidades de entrada salida IO no bloqueantes además de sus versiones bloqueantes. Deno puede ser usado para crear servidores web, llevar a cabo computacion científica, etc.

    Comparación con Node.js
    Deno Y Node.js es ambos un runtime, basado en el motor v8 Javascript engine de Google, el mismo motor utilizado en Google Chrome. Ellos dos tienen event loops y proporcionan interfaces líneas de comando para correr scripts y además una amplia gama de utilidades de sistema.

    Deno principalmente se diferencia de Node.js en los siguientes aspectos:6​

    Usa el módulo ES como el sistema de módulo por omisión, en vez de CommonJS.
    Usa URLs para cargar dependencias locales o remotas, similar a los navegadores.
    Incluye un manejador de paquetes interno para la bajada de recursos, sin necesidad de NPM.
    Soporta TypeScript nativamente usando un compilador TypeScript capturado (snapshotted TypeScript Compiler).
    Mejor compatibilidad con navegadores con una amplia gama de API Webs.
    Permite controlar el sistema de archivos y el acceso de red para correr código en entrono de pruebas (Sandbox).
    Redefinición del API para utilizar Promesas, ES6 y características TypeScript.
    Minimiza el tamaño del API básico, mientras proporciona una biblioteca estándar grande sin dependencias externas.
    Utiliza canales para el paso de mensajes para invocar APIs del sistema con privilegio y utilizar ligaduras.


### Ejemplos 

    - Ejemplo
    La siguiente ejecuta un script básico de Deno sin ningún perimso de lectura/escritura/red (sandbox modo):

    deno run main.ts
    Banderas explícitas son requeridas para exponer permiso correspondiente:

    deno run --allow-read --allow-net main.ts
    Para inspeccionar el árbol de dependencia del script, use el subcomando info:

    deno info main.ts
    Un programa Hola-mundo básico en Deno se parece es algo así a (como en Node.js):

    console.log("Hello world");


    * Deno Proporciona un espacio de nombre global para la mayoría de las APIs de Deno que no están disponibles en el navegador. Un programa Cat de Unix podría ser implementado como sigue:

    Codigo ejemplo:

    /* cat.ts */

    /* Deno APIs are exposed through the `Deno` namespace. */
    const { stdout, open, copy, args } = Deno;

    // Top-level await is supported
    for (let i = 0; i < args.length; i++) {
        const filename = args[i]; // Obtains command-line arguments.
        const file = await open(filename); // Opens the corresponding file for reading.
        await copy(stdout, file); // Performs a zero-copy asynchronous copy from `file` to `stdout`.
    }

    La funcion Deno.copy de arriba trabaja de manera similar como las IO de.Copy , donde stdout (Salida estándar) es el destino Writer y file es el Reader es la fuente. Para correr este programa, necesitamos proporcionar el permiso de lectura del filesystem:

    deno run --allow-read cat.ts myfile



    * El siguiente script de Deno implementa un servidor de HTTP básico:

    Codigo ejemplo:

    // Imports `serve` from the remote Deno standard library, using URL.
    import { serve } from "https://deno.land/std@v0.21.0/http/server.ts";

    // `serve` function returns an asynchronous iterator, yielding a stream of requests
    for await (const req of serve({ port: 8000 })) {
        req.respond({ body: "Hello World\n" });
    }






### Caracteristicas nuevas de Deno frente a Nodejs

    WebAssembly Binaries Supported

    - Soporte para binarios de WeAssembly ( En trabajo )

    Deno no tiene package Json incluido

    - Hay que incluir la importacion del JSON en el momento


<br>

### Instalacion

    Shell (Mac, Linux):
    curl -fsSL https://deno.land/x/install/install.sh | sh

    PowerShell (Windows):
    iwr https://deno.land/x/install/install.ps1 -useb | iex
    Homebrew (Mac):

    brew install deno
    Chocolatey (Windows):

    choco install deno
    Scoop (Windows):

    scoop install deno
    Build and install from source using Cargo

    cargo install deno
    See deno_install for more installation options.


<br>

### Configurar el bash ( Debian )

    - Por consola abrir el archivo .bashrc
    
    $ sudo vim .bashrc

    - Agregar estas 2 lineas de texto

    export DENO_INSTALL="/home/andres/.deno"
    export PATH="$DENO_INSTALL/bin:$PATH"

    - Reiniciar o Cerrar sesion

    - Comprobar la version de Deno

    deno --version


<br>

### Ejecutar archivos JS o TS con Deno

    - Ya no es necesario configurar archivos especiales en el proyecto para usar TypeScript como cuando usamos NodeJS

    deno run hola-mundo.js

    deno run hola-mundo.ts


### Instalar extension Deno Visaul Studio Code - ( Deno - Deno support for VSCode )

    Visual Studio Code Deno extension



    




    



