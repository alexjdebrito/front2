let populacaoA = 80000;
let populacaoB = 200000;
let anos = 0;

while (populacaoA < populacaoB) {
    populacaoA += populacaoA * 0.03;
    populacaoB += populacaoB * 0.015;
    anos++;
}

console.log(`Serão necessários ${anos} anos para a população do país A ultrapassar ou igualar a do país B.`);