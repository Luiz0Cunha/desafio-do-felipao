let inicio = "1️⃣ Desafio Classificador de nível de Herói"
let mensagem = "O Herói de nome Luiz e está no nível de "
let nivelDeXp = 7500

console.log(inicio)
console.log("Vamos ver em qual nível você está baseado em seus pontos ")

if (nivelDeXp <= 1000) {
    nivelDeXp = "Ferro";
} else if (nivelDeXp >= 1001 && nivelDeXp <= 2000) {
    nivelDeXp = "Bronze";
} else if (nivelDeXp >= 2001 && nivelDeXp <= 5000) {
    nivelDeXp = "Prata";
} else if (nivelDeXp >= 5001 && nivelDeXp <= 7000) {
    nivelDeXp = "Ouro";
} else if (nivelDeXp >= 7001 && nivelDeXp <= 8000) {
    nivelDeXp = "Platina";
} else if (nivelDeXp >= 8001 && nivelDeXp <= 9000) {
    nivelDeXp = "Ascendente";
} else if (nivelDeXp >= 9001 && nivelDeXp <= 10000) {
    nivelDeXp = "Imortal";
} else {
    nivelDeXp = "Radiante";
}

console.log(mensagem + nivelDeXp)