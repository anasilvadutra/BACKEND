const entrada = require("readline-sync");

function calcularIdade(anoNascimento) {
    const anoAtual = new Date().getFullYear();
    return anoAtual - anoNascimento;
}

const nome = entrada.question("Digite seu nome: ");
const anoNascimento = entrada.questionInt("Digite seu ano de nascimento: ");
const idade = calcularIdade(anoNascimento);

if (idade >= 16) {
    console.log(`${nome}, você tem ${idade} anos e já pode votar.`);
} else {
    console.log(`${nome}, você tem ${idade} anos e ainda não pode votar.`);
}   
