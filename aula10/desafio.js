const readline = require("readline-sync");

console.log("===Sistema de controle de qualidade===");

const quantidadePecas = Number(
    readline.question("Quantas pecas deseja avaliar? ")
);

const pesos = [];
let somaTotal = 0;

for (let i = 0; i < quantidadePecas; i++) {
    const peso = Number(
        readline.question(`Digite o peso da peca ${i + 1}: `)
    );

    pesos.push(peso);
    somaTotal += peso;
}

const media = somaTotal / pesos.length;

console.log("\n--- Relatório da auditoria ---");
console.log("Pesos registrados: " + pesos.join(" kg | ") + " kg");
console.log("Quantidade de pecas avaliadas: " + pesos.length);
console.log("Soma de todos os pesos: " + somaTotal.toFixed(2) + " kg");
console.log("media do lote: " + media.toFixed(2) + " kg");

if (media >= 4.8 && media <= 5.2) {
    console.log("STATUS FINAL: LOTE APROVADO!");
} else {
    console.log("STATUS FINAL: LOTE REPROVADO!");
}