import prompt from 'prompt-sync'
let chat = prompt()

let vitorias = chat('Digite o número de vitórias: ')
let derrotas = chat('Digite o número de derrotas: ')

let elo = ""
let saldoJogador = saldoVitorias(vitorias, derrotas)

function saldoVitorias(vitorias, derrotas){
    return vitorias-derrotas
}


if(saldoJogador<=10){
    elo = "Ferro"
}else if(saldoJogador<=20){
    elo = "Bronze"
}else if(saldoJogador<=50){
    elo = "Prata"
}else if(saldoJogador<=80){
    elo = "Ouro"
}else if(saldoJogador<=90){
    elo = "Diamante"
}else if(saldoJogador<=100){
    elo = "Lendário"
}else{
    elo = "Imortal"
}

console.log(`O Herói tem de saldo ${saldoJogador} está no nível de ${elo}.`)