const readline = require('readline-sync');
const temperatura = readline.question("Digite a temperatura: ");

console.log(`peso informada: ${temperatura} g`);


if (temperatura >= 95 && temperatura <= 105) {
console.log('PEÇA APROVADA');
} else {
console.log('PEÇA REPROVADA');
}