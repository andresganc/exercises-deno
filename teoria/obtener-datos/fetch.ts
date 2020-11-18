
// FETCH 

/*
Fetch es el sucesor HTTP Request y esta basado en promesas

Al igual que los navegadores, Deno implementa API estándar web como fetch .
Deno es seguro por defecto, lo que significa que se debe otorgar un permiso explícito para acceder a la red.
Ver también: Modelo de permisos de Deno .

Al crear cualquier tipo de aplicación web, los desarrolladores generalmente necesitarán recuperar datos de otro lugar de la web. 
Esto no funciona de manera diferente en Deno que en cualquier otra aplicación de JavaScript, simplemente llame al fetch()método. 
Para obtener más información sobre la recuperación, lea la documentación de MDN .

La excepción con Deno ocurre cuando se ejecuta un script que realiza una llamada a través de la web. Deno es seguro por defecto, 
o que significa que el acceso a IO (Entrada / Salida) está prohibido. Para realizar una llamada a través de la web, 
se debe indicar explícitamente a Deno que está bien hacerlo. Esto se logra agregando la --allow-netbandera al deno run comando.

En Deno se puede poner un await fetch a primer nivel (Primera linea sin funciones o modulos de terceros)

const response = await fetch(input:'http://www.mydomain.com')

*/

/**
 * Output: JSON Data
 */
const json = fetch("https://api.github.com/users/denoland");

json.then((response) => {
  return response.json();
}).then((jsonData) => {
  console.log(jsonData);
});
/**
 * Output: HTML Data
 */
const text = fetch("https://deno.land/");

text.then((response) => {
  return response.text();
}).then((textData) => {
  console.log(textData);
});
/**
 * Output: Error Message
 */
const error = fetch("https://does.not.exist/");

error.catch((error) => console.log(error.message));