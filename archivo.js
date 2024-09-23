const fs = require('fs');

// Leer el contenido del archivo input.txt
fs.readFile('input.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error al leer el archivo:', err);
        return;
    }

    // Convertir el contenido a mayúsculas
    const upperCaseData = data.toUpperCase();

    // Escribir el contenido en mayúsculas en output.txt
    fs.writeFile('output.txt', upperCaseData, (err) => {
        if (err) {
            console.error('Error al escribir el archivo:', err);
            return;
        }
        console.log('El contenido ha sido escrito en output.txt');
    });
});
