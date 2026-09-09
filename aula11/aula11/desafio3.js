const entrada = require("readline-sync");

function calcularCombustivel(precoAlcool, precoGasolina) {
    return precoAlcool / precoGasolina;
}

const precoAlcool = entrada.questionFloat("Digite o preco do litro do alcool: ");
const precoGasolina = entrada.questionFloat("Digite o preco do litro da Gasolina: ");
const resultado = calcularCombustivel(precoAlcool, precoGasolina);

if (resultado < 0.7) {
    console.log("Abasteça com ALCOOL");
} else {
    console.log("Abasteça com GASOLINA");
}
