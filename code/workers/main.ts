

// WORKERS

/*
Los trabajadores se pueden utilizar para ejecutar código en varios subprocesos. Cada instancia de Worker se ejecuta en un hilo independiente, 
dedicado solo a ese trabajador.

Actualmente Deno solo admite moduletrabajadores de tipo; por lo que es fundamental pasar la type: "module"opción al crear un nuevo trabajador.

Los especificadores de módulos relativos no se admiten en este momento. En su lugar, puede usar el URLconstructor y import.meta.urlcrear 
fácilmente un especificador para algún script cercano.
*/

const worker = new Worker(
    new URL("worker.ts", import.meta.url).href,
    options: { type: "module", deno: true },
);

worker.postMessage( message: { filename: "./log.txt" } );