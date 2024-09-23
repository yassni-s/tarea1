const fs = require('fs').promises;

function leerArchivo(ruta) {
    fs.readFile(ruta, 'utf8')
        .then(contenido => {
            console.log('Contenido del archivo:', contenido);
        })
        .catch(error => {
            console.error('Error al leer el archivo:', error);
        });
}

// Llama a la función con la ruta del archivo que deseas leer
leerArchivo('C:\Users\YESENIA\Desktop\proyect\archivo.txt');