let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//  Exercício 1.Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;
for (let contador = 0; contador < numbers.length; contador +=1){
    console.log(numbers[contador]);
}


// Exercício 2.Para o segundo exercício, você deve somar todos os valores contidos no array e imprimir o resultado;
let soma = 0;
for (let index = 0; index < numbers.length; index +=1) {
  soma = soma + numbers[indice];
}
console.log(soma);

// Exercicio 3.Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
A média aritmética é o resultado da soma de todos os elementos divido pelo número total de elementos.
let soma = 0;
for (let index = 0; index < numbers.length; index +=1){
    soma = soma + numbers[index];
}
let media = soma / numbers.length;
console.log(media);


// Exercicio 4.Com o mesmo código do exercício anterior, caso valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";
let soma = 0;
for (let index = 0; index < numbers.length; index +=1){
    soma = soma + numbers[index];
}
let media = soma / numbers.length;
console.log(media);
if (media > 20){
    console.log('valor maior que 20');
} else {
    console.log('valor menor ou igual a 20');
}

// Exercicio 5.Utilizando for , descubra qual o maior valor contido no array e imprima-o;
let maiorNumero = 0;
for (index = 0; index < numbers.length; index +=1) {
    if (numbers[index] > maiorNumero){
       maiorNumero = numbers[index];
    }
}
console.log(maiorNumero);

// Exercicio 6.Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
OddNumbers = 0;
for(index = 0; index < numbers.length; index +=1){
    if(numbers[index] %2 >0){
        OddNumbers = OddNumbers +1;
    }
}
console.log(OddNumbers);

// Exercicio 7.Utilizando for , descubra qual o menor valor contido no array e imprima-o;
let menorNumero = 200;
for (index = 0; index < numbers.length; index +=1) {
    if (numbers[index] < menorNumero){
       menorNumero = numbers[index];
    }
}
console.log(menorNumero);

// Exercicio 8.Utilizando for , crie uma array que vá de 1 até 25 e imprima o resultado;
let numbers = [];
for (let index = 1; index <= 25; index += 1) {
  numbers.push(index);
}
console.log(numbers);

// Exercicio 9.Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2.
for (let index = 0; index < numbers.length; index += 1) {
    console.log(numbers[index] / 2);
  };