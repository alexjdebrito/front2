const calcularTotal = (precoUnitario, quantidade) => {
  const total = precoUnitario * quantidade;
  return total;
};

const aplicarDesconto = (valorTotal) => {
  if (valorTotal > 100) {
    return valorTotal * 0.9;
  } else {
    return valorTotal;
  }
};

const preco = parseFloat(prompt("Digite o preço unitário do produto:"));
const quantidade = parseInt(prompt("Digite a quantidade comprada:"));

const valorTotal = calcularTotal(preco, quantidade);
const valorComDesconto = aplicarDesconto(valorTotal);

console.log("Valor total da compra: R$ " + valorTotal.toFixed(2));
console.log("Valor com desconto (se aplicável): R$ " + valorComDesconto.toFixed(2));