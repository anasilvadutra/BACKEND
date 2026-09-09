const readline = require('readline-sync');
const nomeMaterial = readline.question("Nome do material: ");
const quantidade = Number(readline.question("Quantidade comprada: "));
const precoUnitario = Number(readline.question("Preco unitario(R$): "));

const valorTotal = quantidade*precoUnitario;

console.log("\n ---Resumo compra---");
console.log(`Material: ${nomeMaterial}`);
console.log(`quantidade: ${quantidade}`);
console.log(`Preco unitario: ${precoUnitario.toFixed(2)}`);
console.log(`valor total: R$ ${valorTotal.toFixed(2)}`)