// Definir una funcion de busqueda
let getUsuarioById = (id, callback) => {
    // Suponer que realiza una búsqueda en BDD
    let usuario = {
        id, // == id: id
        nombre: "Rodrigo"
    };
    // Cuando se termina la búsquda, 
    // se imvoca al callbak con un resultado
    callback(usuario);
};

// Utilizar la funcion
getUsuarioById(10, (usuario) => {
    console.log(usuario);
});