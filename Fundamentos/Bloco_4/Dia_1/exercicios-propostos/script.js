// Exercicio 1.Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas variáveis, a e b , definidas no começo com os valores que serão operados.Faça programas para:
// Adição
// Subtração
// Multiplicação
// Divisão
// Módulo 
soma = a + b;
console.log(soma);

subtracao = a - b;
console.log(subtracao);

multiplicacao = (a * b);
console.log(multiplicacao);

divisao = (a / b);
console.log(divisao);

modulo = a % b;
console.log(modulo);


//Exercicio 2.Faça um programa que retorne o maior de dois números. Defina no começo do programa duas variáveis com os valores que serão comparados.
a = 12;
b = 5;
if (a > b) {
    console.log('O maior número é: ' + a);
}else {
    console.log('O maior número é: ' + b);
}

//exercicio 3.Faça um programa que retorne o maior de três números. Defina no começo do programa três variáveis com os valores que serão comparados.
a = 5;
b = 8;
c = 7;
if (a > b && a > c) {
    console.log('O maior número é: ' + a);
} else if (b > c) {
    console.log('O maior numero é: ' + b);
} else {
    console.log('O maior número é: ' + c);
}

//Exercicio 4.Faça um programa que, dado um valor definido numa variável, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.
let number = 0;
if (number > 0) {
    console.log('Positive');
} else if (number < 0) {
    console.log('negative');
} else {
    console.log('Zero');
}

//Exercicio 5.Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.

let anguloA = 65;
let anguloB = 100;
let anguloC = 15;

let soma = anguloA + anguloB + anguloC;

let allAnglesArePositives = anguloA > 0 && anguloB > 0 && anguloC > 0;

if(allAnglesArePositives){
  if (soma === 180) {
    console.log(true);
  } else {
    console.log(false);
  };
} else {
  console.log('Erro: ângulo inválido');
}

//Exercicio 6.Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
let chessPiece = 'dama';

switch (chessPiece.toLowerCase()) {
    case 'rei':
        console.log('Rei-> Uma casa apenas para qualquer direção.');
        break;
      case 'bispo':
        console.log('Bispo-> Diagonal.');
        break;
      case 'rainha':
        console.log('Rainha-> Diagonal, horizontal e vertical.');
        break;
      case 'cavalo':
        console.log('Cavalo -> "L" pode pular sobre as peças.');
        break;
      case 'torre':
        console.log('Torre -> Horizontal e vertical.');
        break;
      case 'peão':
        console.log("Peão -> Apenas uma casa para frente, no primeiro movimento podem ser duas casas.");
        break;
      default:
        console.log('Erro, peça inválida!');
        break;
}

//Exercicio 7.Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F.
let nota = 40;

switch (nota) {
    case (nota >= 90):
    console.log('A');
    break;

    case (nota >= 80):
    console.log('B');
    break;

    case (nota >= 70):
    console.log('C');
    break;

    case (nota >= 60):
    console.log('D');
    break;

    case (nota >= 50):
    console.log('E');
    break;

    case (nota <= 50):
    console.log('F');
    break;

    case (nota < 0 || nota > 100):
    console.log('Erro');
    break;
}

// Exercicio 8.Escreva um programa que defina três números em variáveis no seu começo e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false .
let number1 = 1;
let number2 = 2;
let number3 = 3;
let isEven = false;

if ((number1 % 2 === 0 || number2 % 2 === 0 || number3 % 2 === 0)) {
  isEven = true;
};
console.log(isEven);

//Exercicio 9.Escreva um programa que defina três números em variáveis no seu começo e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false .

let number1 = 1;
let number2 = 2;
let number3 = 3;

let isOdd = false;

if ((number1 % 2 !== 0 || number2 % 2 !== 0 || number3 % 2 !== 0)) {
  isOdd = true;
};
console.log(isOdd);

//Exercicio 10.Escreva um programa que se inicie com dois valores em duas variáveis diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos. 
//Atente que, sobre o custo do produto, incide um imposto de 20%. 
//Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero. 
//O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.

let costOfProduct = 1;
let saleValue = 3;

if (costOfProduct >= 0 && saleValue >= 0) {
  let totalCostOfProduct = costOfProduct * 1.2;
  let totalProfit = (saleValue - totalCostOfProduct) * 1000;
  console.log(totalProfit);
} else {
  console.log("Error, os valores não podem ser negativos");
};

//Exercicio 11.Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.