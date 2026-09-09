const pecasPorCiclo = 15; 
let acumulada = 0;

console.log(`Peças produzidas por ciclo: ${pecasPorCiclo}\n`);

for (let ciclo = 1; ciclo <= 10; ciclo++) {
acumulada += pecasPorCiclo;
console.log(`Ciclo ${ciclo} = ${acumulada}`);
}