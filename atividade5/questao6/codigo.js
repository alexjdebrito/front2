function calcularMontante() {
    let capital = parseFloat(prompt("Digite o capital inicial:"));
    let taxa = parseFloat(prompt("Digite a taxa de juros mensal (em %):")) / 100;
    let tempo = parseInt(prompt("Digite o tempo do investimento (em meses):"));

    let montante = capital * Math.pow(1 + taxa, tempo);

    console.log(`Montante ao final do período: R$ ${montante.toFixed(2)}`);
}

calcularMontante();