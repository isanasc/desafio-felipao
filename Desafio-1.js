// Desafio Classificador de nível herói


let nomeDoHeroi = "Isadora"
let quantidadeXP = 12.000

if(quantidadeXP < 1.000){
    console.log( "O herói de nome " + nomeDoHeroi + " está no nível de FERRO ")
} 
else if(quantidadeXP > 1.001 && quantidadeXP <= 2.000){
    console.log("O herói de nome " + nomeDoHeroi + " está no nível de BRONZE ")
} 
else if(quantidadeXP > 2.000 && quantidadeXP <= 5.000){
    console.log("O herói de nome " + nomeDoHeroi + " está no nível de PRATA ")
} 
else if(quantidadeXP > 6.000 && quantidadeXP <= 7.000){
    console.log("O herói de nome " + nomeDoHeroi + " está no nível de OURO ")
}
else if(quantidadeXP > 7.000 && quantidadeXP <= 8.000){
    console.log("O herói de nome " + nomeDoHeroi + " está no nível de PLATINA ")
}
else if(quantidadeXP > 8.000 && quantidadeXP <= 9.000){
    console.log("O herói de nome " + nomeDoHeroi + " está no nível de ASCENDENTE ")
}
else if(quantidadeXP > 9.000 && quantidadeXP <= 10.000){
    console.log("O herói de nome " + nomeDoHeroi + " está no nível de IMORTAL ")
}
else if(quantidadeXP => 10.001){
    console.log("O herói de nome " + nomeDoHeroi + " está no nível de RADIANTE ")
}