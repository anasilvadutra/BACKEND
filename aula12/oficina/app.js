const entrada = require('readline-sync');
const oficina = require('./funcoesOficina');

console.log("==== SISTEMA DE GESTAO DE OFICINA 1.0 ====");

const peca = entrada.question("Preco da peca: ");
const horas = entrada.question("Horas de servico: ");
const tempoUso = entrada.question("Meses desde o ultimo conserto:  ");

const total = oficina.calcularOrcamento(peca, horas);

const totalComDesconto = oficina.comDesconto(total);

const garantia = oficina.verificarGarantia(tempoUso);

console.log("\n ---- RELATORIO DE SERVICO ----");
console.log(`Orcamento total: R$ ${total}`);
console.log(`Orcamento com desconto de 20%: R$ ${totalComDesconto}`);
console.log(`Garantia            ${garantia}`);
console.log("-----------------------------------");



