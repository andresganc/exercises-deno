

// Deno elimina los CallBack Hell (Anidaciones excesivas) con los asynawait
// Anteriormente con NodeJS habia que encapsular en un asiynawait
// Ahora con Deno y await eliminamos este problema.

// Deno al ser seguro no deja correr conexiones remotas, Ejecutar ficheros o Acceder a entornos desconocidos tan facilmente.
// Si desea correr una conexion remota de una API desconocida con Deno. Debe agregar --allow-net
// Ejemplo $ deno run --allow-net miarchivo.ts

const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
const data = await response.json();

console.log(data);


