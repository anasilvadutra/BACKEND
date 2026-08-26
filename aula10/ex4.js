const entrada = require("readline-sync");

console.log("===REGISTRO DE TEMPERATURAS===");

const temperaturas = [];

const quantidade = entrada.questionInt("Quantas temperaturas deseja registrar? ");

for (let i = 0; i < quantidade; i++) {
  let temperatura = entrada.questionFloat(`temperatura ${i + 1}: `);
  temperaturas.push(temperatura);
}

console.log("\n--- relatório ---");
console.log(`Temperaturas registradas: ${temperaturas.join (" °c | ")}°C`) 

console.log(`Quantidade de registros: ${temperaturas.length}`);
console.log(`Primeira temperatura: ${temperaturas[0]}°C`);
console.log(`Última temperatura: ${temperaturas[temperaturas.length - 1]}°C`);
