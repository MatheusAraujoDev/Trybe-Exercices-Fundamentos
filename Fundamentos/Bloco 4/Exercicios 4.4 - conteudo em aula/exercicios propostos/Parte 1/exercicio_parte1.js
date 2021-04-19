// let info = {
//     personagem: 'Margarida',
//     origem: 'Pato Donald',
//     nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
//   };

 //Exercicio 1 
console.log('Bem vindo ' + info.personagem);

//Exercicio 2
info['recorrente'] = 'Sim';
console.log(info);

//Exercicio 3
for (let key in info) {
    console.log(key);
}

//Exercicio 4
for (let key in info) {
    console.log(info[key])
}

//Exercicio 5
let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim'
};

let info2 = {
    personagem: 'Tio Patinhas',
    origem: 'Christmas on Bear Mountain, Dell\'s Four Color Comics #178',
    nota: 'O último MacPatinhas',
    recorrente: 'Sim'
}

for (let index in info) {
    if (
        info[index] === info2.recorrente &&
        info[index] === 'Sim' &&
        info2[index] === 'Sim'
      ) {
        console.log('Ambos recorrentes');
      } else {
        console.log(info[index] + ' e ' + info2[index]);
      }
}