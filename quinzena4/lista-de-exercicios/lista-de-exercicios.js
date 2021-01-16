//************Exercícios de interpretação de código***************///

/*Analise os trechos de código em cada exercício e escreva o que ele faz, como faz e qual será o valor impresso no `console`.

**Importante:** A ideia é que vocês interpretem o código, então **não pode executar o código no JS**, tem que "executar" na cabeça de vocês.*/

//1 - Função de conversão de moeda, na variável COTAÇÃO sera apresentado o texto pedindo o valor da cotação do dolar que será convertido para número e terá o retorno do texto "R$" com o resultado da conta apresentada, fora da função a variável meuDinheiro vai receber a função de conversão de moeda e será apresentada logo em seguida o valor do dolar convertido para reais no console.

//2 - O usuário terá que informar o tipoDeInvestimento e o valor na função investeDinheiro logo após será verificado no switch case o tipodeInvestimento que foi informado para que seja realizada a operação e popular a variável valorAposInvestimento e caso não encontre nehum tipoDeInvestimento apresentará a mensagem default na saida do switch case vai retornar o valorAposInvestimento. Fora da função na variável novoMontante vai receber a função investeDinheiro onde terá o valor do ativo AÇÕES e multiplicara por 150 e segundoMontante vai dar erro pois não foi especificado o ativo Tesouro Direto e nos consoles no novoMontante será apresentado o valor calculado acima e no segundoMontante irá ocorrer erro.

//3 - Começamos com a declaração de 3 arrays onde numeros vai receber todos os valores declarados e os outros dois serão vazios, no For temo a variável numero para receber os valores do array números e logo será feito a validação se o resto da divisão de numero por 2 for igaul a zero vai popular o número no array1 se não vai popular no array2 e nos consoles serão apresentadas a mensagem informando o tamanho do array  numeros e logo em seguida vai mostrar o tamanho do array1 e array2.

//4 - Temos um array com varios valores adicionados e duas variáveis uma com uma função global(numero1) e outra zerada(numero2), entramos na verificação onde a variável numero vai receber um número de cada vez para fazer a validação de que se o numero for maior que numero1, logo numero1 vai receber numero, porém como a variável numero1 esta definida com Infinity não haverá alteração nenhuma pois o infinity sempre será maior e no segundo if sera verificado se o numero é maior que a variável numero2 e caso seja sera populada com o valor de numero, nos consoles serão apresentadas as seguintes mensagens numero1 = Infinity e numero2 = 25 "os números que se encaixarem na validação do if irão substituir o número anterior"

////////*************Exercícios de Lógica de Programação*************////////////

//1. Cite 3 maneiras de se percorrer/iterar uma lista. Faça um programa para exemplificar.*/

/*const array = [5,20,6,3,4,8,7,-1]
console.log(array);

let i = 0
console.log(i);

while(i < array.length){
  
  console.log(array[i]);
  
  i++;
}*/

/*const array = [5,20,6,3,4,8,7,-1]
console.log(array);

for(let i = 0; i < array.length; i++){
  
  console.log(array[i]);
  
}*/

/*const array = [5,20,6,3,4,8,7,-1]
console.log(array);

let numMaior = 0

for(let numero of array){
  if(numero > numMaior){
    numMaior = numero
  }
  console.log(numero);
  
}*/

/***********************************************************************************************

/*2. Para este exercício considere as seguintes variáveis:

    const booleano1 = true 
    const booleano2 = false
    const booleano3 = !booleano2 ------ true
    const booleano4 = !booleano3 ------- false

    Sem rodar nenhum código, diga quais são os valores das expressões lógicas abaixo:

    a) `booleano1 && booleano2 && !booleano4` ----- False

    b) `(booleano1 && booleano2) || !booleano3` ----- False

    c)  `(booleano2 || booleano3) && (booleano4 || booleano1)` ----- True

    d) `!(booleano2 && booleano3) || !(booleano1 && booleano3)` ----- True

    e) `!(booleano1) && !(booleano3) || (!booleano4 && booleano3 && booleano3)` ----- True 

    ******************************************************************************************

    //3. Você tem que escrever um código que, dado um número **N**, ele imprima (no `console`) os **N** primeiros números pares (por exemplo, se **N** for 3, você deve imprimir 0, 2 e 4; se **N** for 5, deve imprimir 0, 2, 4, 6 e 8).  Um colega seu disse que já começou esta tarefa, mas não conseguiu terminar. Dê uma olhada no código dele:

    const quantidadeDeNumerosPares
    let i = 0
    while(i <= quantidadeDeNumerosPares) {
      console.log(i*2)
    }

    Este código funciona? Por quê? Caso não funcione, corrija a implementação dele. 
    
    Não funciona, porque falta um contador para a rotina do laço e não se pode igualar a condição pois o mesmo vai trazer um numero a mais. 
    
    Codigo válido abaixo: */

    /*const quantidadeDeNumerosPares = prompt("Informe a quantidade de números pares que você deseja imprimir.")
    console.log(quantidadeDeNumerosPares)
    let i = 0
    while(i < quantidadeDeNumerosPares) {
      console.log(i*2)
      i++;
    } */

    /********************************************************************************************

    4. Vocês lembram de trigonometria? ~~(Oh, não, trigonometria)~~. Relaxem. O exercício é simples, mas mexe com isso. Veja bem: quando nos ensinam triângulos (uma figura de três lados), nós aprendemos como classifica-los dependendo do tamanho de seus lados. Se um triângulo possuir os **três lados iguais**, ele é chamado de "Equilátero". Se possuir, **dois (e somente 2) lados iguais**, diz-se que ele é "Isósceles". Se os **três lados tiverem medidas diferentes**, ele é "Escaleno". Faça uma função que receba como parâmetro os tamanhos dos três lados do triângulo: `a, b, c`  e retorne se ele é equilátero, isósceles ou escaleno.

    *****************************************************************************************************************

    5. Faça um programa que, dados dois números,

    i. indique qual é o maior,

    ii. determine se eles são divisíveis um pelo outro (use o operador `%`) e

    iii. determine a diferença entre eles (o resultado deve ser um número positivo sempre)

   ////////*************Exercícios de Funções*********************//////////////////////
    
   /*1. Escreva uma função que receba um `array` de números e imprima na tela o segundo maior e o segundo menor número. Em seguida, invoque essa função. (Não é permitido usar funções de ordenação de vetores.)*/
   
   /*const array = [0,1,2,3,5,9,8,4]
   console.log(array)

   const minNumSeg = [0]
   const maxNumSeg = [0]

   

 
   /*const callback = (array) => {
     if()
   }

   
   /*********************************************************************************************
    2. Escreva uma **função não nomeada** que faça um `alert("Hello Future4");`. Em seguida, invoque essa função.*/