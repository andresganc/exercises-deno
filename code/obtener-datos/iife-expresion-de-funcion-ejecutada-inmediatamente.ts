
// IIFE: Expresión de función ejecutada inmediatamente

/*
Las expresiones de función ejecutadas inmediatamente (IIFE por su sigla en inglés) son funciones que se ejecutan tan pronto como se definen.

(function () {
    statements
})();

Ejemplos:

(function () { 
    var aName = "Barry";
})();
// Variable name is not accessible from the outside scope
aName // throws "Uncaught ReferenceError: aName is not defined"


Asignar el IIFE a una variable almacena el valor de retorno, no la definición de la función.

var result = (function () { 
    var name = "Barry"; 
    return name; 
})(); 
// Immediately creates the output: 
result; // "Barry"

*/

// Funcion normal con fetch
async function start() {
    const response = await fetch(input:'http://www.mydomain.com');
    return response;
}

start()


// Funcion anonima IIFE
;(async() => {
    const response = await fetch(input: 'http://www.mydomain.com')
})()