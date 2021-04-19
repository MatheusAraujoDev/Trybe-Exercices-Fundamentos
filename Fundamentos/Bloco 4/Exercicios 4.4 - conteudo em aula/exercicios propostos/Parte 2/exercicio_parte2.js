//Exercicio 1 
// let param1 = [''];

// function verificaPalindrome(param1) {
//     for(index = 0; index < param1.length; index +=1) {
//         if(param1[index]) = param1[index] {
//             return true;
//         }else {
//             return false;
//         }
//     }
// }
// verificaPalindrome('arara');
// verificaPalindrome('desenvolvimento');

//Exercicio 2 dúvida
// function higherIndex(array) {
//     let array = [];
//     for(let index in array) {

//     }
// }

//Exercicio 3
// function indiceMenorValor(numeros) {
//     let indiceMenor = 0;
//     for (let index in numeros) {
//         if(numeros[indiceMenor] > numeros[index]) {
//             indiceMenor = index;
//         }
//     }
//     return indiceMenor;
// }
// console.log(indiceMenorValor([6, 2, 3, 4, 5]));

//Exercício 4
// function maiorPalavra(palavras) {
//     let maiorPalavra = palavras[0];
//     for (let indice in palavras) {
//       if (maiorPalavra.length < palavras[indice].length) {
//         maiorPalavra = palavras[indice];
//       }
//     }
//     return maiorPalavra;
//   }
  
//   console.log(maiorPalavra(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));

// Exercicio 6 
// function somatorio(numeros) {
//   let soma = 0;
//   for (let index = 1; index <= numeros; index +=1) {
//     soma = soma + index;    
//   }
//   return soma;
// }
// console.log(somatorio(5));

//Exercicio 7
// function verificaFimPalavra(palavra, fimPalavra) {
//     palavra = palavra.split('');
//     fimPalavra = fimPalavra.split('');
//     controle = true;
//     for (let index = 0; index < fimPalavra.length; index += 1) {
//       if (palavra[palavra.length - fimPalavra.length + index] != fimPalavra[index]) {
//         controle = false;
//       }
//     }
//     return controle;
//   }