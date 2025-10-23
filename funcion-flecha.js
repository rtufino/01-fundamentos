// 1- Funcion habitual
/*
function sumar(a, b){
    return a + b;
}
*/

// 2- Declarar la funcion a una constante
/*
const sumar = function(a, b) {
    return a + b;
}
*/

// 3- Funcion flecha
/*
const sumar = (a, b) => {
    return a + b;
}
*/

// 4- Cuando dentro del cuerpo de la función 
// solo existe una instrucción
const sumar = (a, b) => a + b;

console.log(sumar(3, 5));

// Ejercicio:
let saludar = (nombre) => `Hola ${nombre}!`;

console.log(saludar("Sofi"));