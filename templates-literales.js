let nombre =  'Deadpool';
let real = 'Wade Winston';

console.log(nombre + ' ' + real);
console.log(`${nombre} ${real}`);

// asignando a una variable
let nombreCompleto = nombre + ' ' + real;
let nombreTemplate = `${nombre} ${real}`;

// Demostrar que es lo mismo
console.log(nombreCompleto === nombreTemplate);

// Retorno de una función
function getNombre(){
    return `${nombre} es ${real}`;
}
// Uso de una funcion dentro del templeate literal
console.log(`El nombre de ${getNombre()}`);