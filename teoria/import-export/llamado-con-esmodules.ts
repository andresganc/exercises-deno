
// ES Modules - Estandar oficial actual para importar dependencias

/*
Es la forma moderna de llamar. Deno ya no usa la forma antigua y no estandar de CommonJS y su require.
Mientras que NodeJS si lo hace y tienen muchos conflictos con esto. 
*/

let variable1: string = 'Hola';
let variable2: string = 'Andres';
let edad: number = 42;

// Importar
// Local
import MiDependenciaLocal from '../path.js.js.js';
// Remota - Url
import MiDependenciaRemota from 'https://nc-web.com.co'

// Exportar 
// Se puede exportar Dependencias, Funciones, Clases, Constantes, Variables
export default MiDependenciaLocal;

export const miConstante: number = 29;

export default function miFuncion();

export default class miClase{};

export { variable1, variable2, edad, MiDependenciaRemota }
