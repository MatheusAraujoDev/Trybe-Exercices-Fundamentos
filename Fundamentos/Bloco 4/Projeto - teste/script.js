//Meu jeito que da errado
function fizzBuzz(array) {
    let arrayResultado = [];
    for (let i = 0; i < array.length; i += 1) {
      if (array[i] % 3 === 0 && array [i] % 5 === 0){
        return arrayResultado.push("fizzBuzz");
      } else if (array[i] % 3 === 0) {
        return arrayResultado.push("fizz");
      } else if (array [i] % 5 === 0) {
        return arrayResultado.push("Buzz");
      } else {
        return arrayResultado.push("bug!");
      }
    }
  }
  console.log(array("[2, 15, 7, 9, 45]"));

//Jeito 2
function fizzBuzz(array) {
    for (let i = 0; i < array.length; i += 1) {
      switch (true) {
        case array[i] % 3 === 0 && array[i] % 5 === 0:
          array[i] = 'fizzBuzz';
          break;
        case array[i] % 3 === 0:
         array[i] = 'fizz';
         break;
         case array[i] % 5 === 0:
          array[i] = 'Buzz';
          break;
        default:
          array[i] = 'bug!'
          break;
      }
    }
    return array; 
  }