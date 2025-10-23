// Definir una funcion de busqueda
let getUsuarioById = (id, callback) => {
    // Suponer que realiza una búsqueda en BDD
    let usuario = {
        id, // == id: id
        nombre: "Rodrigo"
    };
    // Simular un error
    if (id === 20){
        // En el caso de error, solo se invocal al callback
        // con el mensaje de error
        callback(`El usuario con id ${id} no existe`)
    }else{
        // El primer parametro del callback es el error
        // Si todo está correcto, se indica un null
        callback(null, usuario);    
    }
};

// Utilizar la funcion
getUsuarioById(20, (err, usuario) => {
    if (err){
        return console.log(err);
    }

    console.log(usuario);
});