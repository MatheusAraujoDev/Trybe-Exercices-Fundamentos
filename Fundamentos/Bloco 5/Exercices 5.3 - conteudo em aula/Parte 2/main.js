const divUm = document.getElementById('divUm');
const divDois = document.getElementById('divDois');
const divTres = document.getElementById('divTres');
const input = document.getElementById('input');
const myWebpage = document.getElementById('mySpotrybefy');


// 1. Copie esse arquivo e edite apenas ele;

// 2. Crie uma função que adicione a classe 'tech' ao elemento selecionado;
// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?

// function addClassTech() {
//   document.getElementById("divUm").className = 'tech';
// }

// function changeTextTech(texto) {
//   document.getElementsByClassName('tech').innerText = texto;
// }

// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';

// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
// 4.1. Que tal redirecionar para seu portifólio?

// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;

// Segue abaixo um exemplo do uso de event.target:
function swapTheFirst(e) {
  document.getElementsByClassName('tech')[0].innerText = e.target.value;
}

function selectThis(e) {
  document.getElementsByClassName('tech')[0].classList.remove('tech');
  e.target.classList.add('tech');
}

function redirect() {
  window.location.replace('https://google.com');
}

function changeColor(e) {
  e.target.style.color = '#006dfb';
}

divUm.addEventListener('click', selectThis);
divDois.addEventListener('click', selectThis);
divTres.addEventListener('click', selectThis);

input.addEventListener('input', swapTheFirst);

myWebpage.addEventListener('mouseover', changeColor);
myWebpage.addEventListener('dblclick', redirect);


function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

divUm.addEventListener('dblclick', resetText);
// Não precisa passar o parâmetro dentro do addEventListener. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'divUm'.