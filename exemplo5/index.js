import chalk from "chalk";

console.log("Gerenciamento de Pacotes")

let aluno = "João Gomes";
let idade = 20;

if (idade >= 18) {
    console.log(chalk.bgGreenBright(`${aluno} é maior de idade`));
} else {
    console.log(chalk.bgRedBright(`${aluno} é menor de idade`));
};

console.log(chalk.blue('Hello world!'));