const entrada = require("readline-sync");
function calcularDesconto(valorConta) {
    if (valorConta > 100) {
        return valorConta * 0.9;
    } else {
        return valorConta;
    }
}

const valorConta = entrada.questionFloat("Digite o valor total da conta: ");
const valorComDesconto = calcularDesconto(valorConta);

if (valorComDesconto < valorConta) {
    console.log(`Valor com desconto: R$ ${valorComDesconto.toFixed(2)}`);
} else {
    console.log(`Valor normal: R$ ${valorConta.toFixed(2)}`);
}

