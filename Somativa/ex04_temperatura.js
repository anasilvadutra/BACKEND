const readline = require('readline-sync');
const temperatura = readline.question("Digite a temperatura: ");

console.log(`Temperatura informada: ${temperatura} °C`);

if (temperatura <= 60) {
console.log('Situação: NORMAL');
} else if (temperatura <= 80) {
console.log('Situação: ATENÇÃO');
} else {
console.log('Situação: CRÍTICA');
}