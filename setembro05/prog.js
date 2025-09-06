function pedirNumero(mensagem) {
  var valor = prompt(mensagem);
  while (valor === null || valor.trim() === '' || isNaN(valor) || Number(valor) < 0) {
    alert("Por favor, digite um número válido.");
    valor = prompt(mensagem);
  }
  return Number(valor);
}

var aulas = pedirNumero("Digite o número de aulas do semestre:");
var faltas = pedirNumero("Digite a quantidade de faltas do aluno:");

while (faltas > aulas) {
  alert("Faltas não podem ser maiores que o número de aulas.");
  faltas = pedirNumero("Digite a quantidade de faltas do aluno:");
}

var p1 = pedirNumero("Digite a nota da P1:");
var p2 = pedirNumero("Digite a nota da P2:");

var frequencia = ((aulas - faltas) / aulas) * 100;
var media = (p1 + p2) / 2;
var situacao = "";
var rec = 0;

if (frequencia < 75) {
  situacao = "Reprovado por falta";
} else {
  if (media >= 7) {
    situacao = "Aprovado";
  } else if (media >= 5) {
    rec = pedirNumero("Digite a nota da recuperação:");

    var novaMedia = (media + rec) / 2;
    if (novaMedia >= 5) {
      situacao = "Aprovado na recuperação";
    } else {
      situacao = "Reprovado após recuperação";
    }
  } else {
    situacao = "Reprovado por nota";
  }
}

var resultado = 
  "Número de aulas do semestre: " + aulas + "\n" +
  "Quantidade de faltas do aluno: " + faltas + "\n" +
  "Percentual de presença do aluno: " + frequencia.toFixed(2) + "%\n" +
  "Nota P1: " + p1 + "\n" +
  "Nota P2: " + p2 + "\n";

if (media >= 5 && media < 7) {
  resultado += "Nota recuperação: " + rec + "\n";
}

resultado += "Situação final do aluno: " + situacao;

alert(resultado);

console.log("SITUAÇÃO DO ALUNO");
console.log("Número de aulas do semestre:", aulas);
console.log("Quantidade de faltas do aluno:", faltas);
console.log("Percentual de presença do aluno:", frequencia.toFixed(2) + "%");
console.log("Nota P1:", p1);
console.log("Nota P2:", p2);
if (media >= 5 && media < 7) {
  console.log("Nota recuperação:", rec);
}
console.log("Situação final do aluno:", situacao);
