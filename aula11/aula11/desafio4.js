const entrada = require("readline-sync");
function classificarAluno(idade) {
    if (idade >= 5 && idade <= 10) {
        return "Infantil";
    } else if (idade >= 11 && idade <= 17) {
        return "Juvenil";
    } else if (idade >= 18 && idade <= 60) {
        return "Adulto";
    } else {
        return "Sênior";
    }
}

const idade = entrada.questionInt("Digite a idade do aluno: ");
const categoria = classificarAluno(idade);
console.log(`O aluno pertence à categoria: ${categoria}`);