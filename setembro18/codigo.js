const nomes = ["Alex", "João", "Juliana", "Maria", "Teresa"];

console.log("Terceiro nome:", nomes[2]);

nomes.push("Bruno");

nomes.unshift("Henrique");

console.log("Array após adições:", nomes);

nomes.pop();

console.log("Array final após remover o último nome:", nomes);

//

const numeros = [2, 4, 6, 8];

const dobrados = numeros.map(function(numero) {
  return numero * 2;
});

console.log("Valores dobrados:", dobrados);

//

const lista = [1, 3, 5, 7, 9];

const maioresQueCinco = lista.filter(function(numero) {
  return numero > 5;
});

console.log("Números maiores que 5:", maioresQueCinco);