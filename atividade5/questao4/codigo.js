let salarioInicial = parseFloat(prompt("Digite o salário inicial:"));
let salario = salarioInicial;
let ano = 1996;
let percentual = 0.015;

while (ano <= new Date().getFullYear()) {
    salario += salario * percentual;
    percentual *= 2;
    ano++;
}

console.log(`Salário atual em ${new Date().getFullYear()}: R$ ${salario.toFixed(2)}`);