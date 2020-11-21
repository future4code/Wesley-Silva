/* **Exercícios de interpretação de código**

1. Leia o código abaixo. Indique todas as mensagens impressas no console, **SEM EXECUTAR o programa**.

    ```jsx
    const bool1 = true
    const bool2 = false
    const bool3 = !bool2 //true

    let resultado = bool1 && bool2 
    console.log("a. ", resultado) // False

    resultado = bool1 && bool2 && bool3
    console.log("b. ", resultado) // False

    resultado = !resultado && (bool1 || bool1)
    console.log("c. ", resultado)  // true

    console.log("e. ", typeof resultado) // Boolean
    ``` */

/*     2.  Indique todas as mensagens impressas no console, **SEM EXECUTAR o programa**.

```jsx
let array
console.log('a. ', array) // []

array = null
console.log('b. ', array) // nulo

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length) // 11

let i = 0
console.log('d. ', array[i]) // 3

array[i+1] = 19
console.log('e. ', array) // [3, 4, 5, 6, 19, 8, 9, 10, 11, 12, 13]

const valor = array[i+6]
console.log('f. ', valor) // valor = 13
``` */

/* 
**Exercícios de escrita de código**

1. Faça um programa que:
a. Pergunte a idade do usuário
b. Pergunte a idade do seu melhor amigo ou da sua melhor amiga

    Dica: não se esqueça de converter as respostas para o tipo número

    c. **Imprima na tela** a seguinte mensagem: "Sua idade é maior do que a do seu melhor amigo?", seguido pela resposta (`true` ou `false`)
    d. **Imprima na tela** a diferença de idade (não tem problema se sair um número negativo) */

prompt("Usuário, Qual é a sua idade?")

let idade =  prompt("Melhor amigo, Qual a sua idade?")
console.log(idade)
typeof idade
console.log(typeof idade)
idade = Number(idade)
console.log(typeof idade)

let minhaIdade
minhaIdade = Boolean(true)
minhaIdade = prompt("Sua idade é maior do que a do seu melhor amigo?")
console.log(Boolean(!true))

let diferenca = idade -= minhaIdade
console.log(diferenca)

/* 2. Faça um programa que:
a. Peça ao usuário que insira um número **par**.

    Dica: não se esqueça de converter a resposta para o tipo número

    b. Imprima na tela **o resto da divisão** desse número por 2.
    
    c. Teste o programa com diversos números pares. Você notou um padrão? Escreva em um comentário de código. Resposta >> O valor do resto sera sempre zero.

    d. O que acontece se o usuário inserir um número ímpar? Escreva em um comentário de código. Resposta >> O valor do resto sera sempre 1. */ 

let numeroPar = prompt("Insira um número PAR.")
console.log(numeroPar, typeof numeroPar)

numeroPar = Number(numeroPar)
console.log(numeroPar, typeof numeroPar)

let restoDivisao = numeroPar%2
console.log(restoDivisao)

/* 3. Faça um programa, seguindo os passos:
a. Crie um array vazio e guarde-o em uma variável, chamada `listaDeTarefas`
b. Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array
c. Imprima o array na tela
d. Peça ao usuário que digite o **índice** de uma tarefa que ele já realizou: 0, 1 ou 2 
e. Remova da lista o item de índice que o usuário escolheu.
f. Imprima o array na tela */

let listaDeTarefas = []
console.log(listaDeTarefas)

listaDeTarefas[0] = prompt("Informe 3 tarefas que você precisa realizar durante o dia. Digite a primeira tarefa")
console.log(listaDeTarefas)

listaDeTarefas[1] = prompt("Segunda tarefa")
console.log(listaDeTarefas)

listaDeTarefas[2] = prompt("Terceira tarefa")
console.log(listaDeTarefas) 

let tarefaFeita = prompt("Digite 0, 1 ou 2 para informar uma tarefa que você ja tenha realizado durante o dia.") 
console.log(tarefaFeita)

listaDeTarefas.splice(tarefaFeita, 1)
console.log(listaDeTarefas)

/* 4. Faça um programa que pergunte ao usuário seu nome e seu e-mail. Em seguida, imprima na tela a seguinte mensagem:

    O e-mail `emailDoUsuario` foi cadastrado com sucesso. Seja bem-vinda(o), `nomeDoUsuario`! */

    let nomeDoUsuario = prompt("Olá, informe o seu nome?")
    console.log(nomeDoUsuario)

    let emailDoUsuario = prompt("Agora nos informe o seu e-mail")
    console.log(emailDoUsuario)

    console.log("O e-mail "+ emailDoUsuario +", foi cadastrado com sucesso. Seja bem-vinda(o), "+nomeDoUsuario+"!")