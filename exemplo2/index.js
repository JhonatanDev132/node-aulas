
import { soma, subtracao, multiplica, divide } from "./modulos/funcoes.mjs";

let resultadoSoma = soma(10, 50);
let resultadoSubtracao = subtracao(60, 20);
let resultadoMultiplica = multiplica(2, 10);
let resultadoDivisao = divide(50, 5);

console.log(`Soma: ${resultadoSoma}`);
console.log(`Subtração: ${resultadoSubtracao}`);
console.log(`Multiplicação: ${resultadoMultiplica}`);
console.log(`Divisão: ${resultadoDivisao}`);