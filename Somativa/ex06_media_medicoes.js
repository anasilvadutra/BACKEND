const medicoes = [10, 20, 30, 40, 50]; 
let acumulador = 0;

for (let i = 0; i < medicoes.length; i++) {
acumulador += medicoes[i];
}

const media = acumulador / medicoes.length;

console.log(`Soma das medições: ${acumulador}`);
console.log(`Média final: ${media}`);