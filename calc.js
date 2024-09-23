
if (process.argv.length !== 4) {
    console.log("Uso: node script.js <num1> <num2>");
    process.exit(1);
}

const num1 = parseFloat(process.argv[2]);
const num2 = parseFloat(process.argv[3]);

if (isNaN(num1) || isNaN(num2)) {
    console.log("Por favor, ingrese dos números válidos.");
    process.exit(1);
}

const suma = num1 + num2;
const resta = num1 - num2;
const multiplicacion = num1 * num2;
const division = num2 !== 0 ? num1 / num2 : "Indefinida (división por cero)";

console.log(`Suma: ${suma}`);
console.log(`Resta: ${resta}`);
console.log(`Multiplicación: ${multiplicacion}`);
console.log(`División: ${division}`);
