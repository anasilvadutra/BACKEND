const entrada = require("readline-sync");

function verificarEmprestimo(renda, nomeLimpo) {
    if (renda > 2000 && nomeLimpo === true) {
        return "Empréstimo Aprovado";
    } else {
        return "Empréstimo Negado";
    }
}

const renda = entrada.questionFloat("Digite sua renda mensal: ");
const nomeLimpo = entrada.question("Seu nome esta limpo? (true/false): ").toLowerCase() === "true";
const resultado = verificarEmprestimo(renda, nomeLimpo);
console.log(resultado);
