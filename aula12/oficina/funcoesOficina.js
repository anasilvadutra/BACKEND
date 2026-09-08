function calcularOrcamento(precoPeca, horasTrabalho) {
    const valorHora = 85.00;
    const totalMaoDeObra = horasTrabalho * valorHora;
    return precoPeca + totalMaoDeObra;
}

function verificarGarantia(meses) {
    if (meses <=3) {
        return "Dentro da Garantia";
    } else {
        return "Fora da Garantia"
    }
}
module.exports = { 
    calcularOrcamento,
    verificarGarantia
}; 

function comDesconto (valorBruto) {
    return valorBruto * 0.8;
}

module.exports = { 
    calcularOrcamento,
    verificarGarantia,
    comDesconto
};