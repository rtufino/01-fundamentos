// Callback: Una función (Fun 1) que se envía como parámetro
// a otra función y se ejecuta cuando la esta función (Fun 2)
// termina de hacer lo que debe.
setTimeout(function() {
    console.log("Hola!");
} , 2000);

/* Mismo ejemplo con funcion flecha 
let saluda = () =>  console.log("Hola!");

setTimeout(saluda , 2000);
*/