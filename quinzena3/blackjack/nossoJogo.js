/* *
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */


//1 - Imprime uma mensagem no console "Bem vindo ao jogo de Blackjack!".

console.log("Bem vindo ao jogo de Blackjack!")

//2 - Envia um confirm, perguntando ao usuário: "Quer iniciar uma nova rodada?".
//3 - Se o usuário responder `cancel`, imprime uma mensagem no console "O jogo acabou".
//4 - Se o usuário responder `Ok`, o programa deve iniciar uma nova rodada.

if (confirm('Quer iniciar uma nova rodada?')) {
} else {
   console.log('O jogo acabou')
}

//5 - Nós preparamos um método que permite sortear uma carta. Ela vem com um texto que representa o que é escrito na carta; e um valor que mostra a pontuação da carta.

const cartaUser1 = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
const cartaUser2 = comprarCarta();
const cartaMachine1 = comprarCarta();
const cartaMachine2 = comprarCarta();

const pontosUser = cartaUser1.valor + cartaUser2.valor;
const pontosMachine = cartaMachine1.valor + cartaMachine2.valor;

//6 - O programa deve mostrar, no console, as cartas e pontuação de cada jogador no formato mostrado abaixo

console.log("Usuário - cartas:", cartaUser1.texto, cartaUser2.texto, "Pontuação - ", pontosUser) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)

console.log("Computador - cartas:", cartaMachine1.texto, cartaMachine2.texto, "Pontuação - ", pontosMachine) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)

//7 - Além disso, deve indicar o vencedor ou um empate

const condicao1 = pontosUser > pontosMachine
const condicao2 = pontosUser < pontosMachine

if (condicao1) {
   console.log("O usuário ganhou!")
} else if (condicao2) {
   console.log("O computador ganhou!")
} else {
   console.log("Empate!")
}
