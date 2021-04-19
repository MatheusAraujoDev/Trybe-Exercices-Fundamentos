//Exercício 1
function changeText() {
    let newText = document.getElementsByTagName('p')[1];
    newText.innerHTML = "Descrição de como me vejo daqui a dois anos!";
}
console.log(changeText());

//Exercício 2
function changeYellowSquare() {
    let greenSquare = document.getElementsByClassName('main-content')[0];
    greenSquare.style.backgroundColor = "rgb(76,164,109)";
}
console.log(changeYellowSquare());

//Exercício 3
function changeToWhite() {
    let redSquare = document.getElementsByClassName('center-content')[0];
    redSquare.style.backgroundColor = 'white';
}
console.log(changeToWhite());

//Exercício 4
function changeH1() {
    let changeH1 = document.getElementsByTagName("h1")[0];
    changeH1.innerText = "Corrige o texto da tag h1";
}
console.log(changeH1());

//Exercício 5
function changeUppercase() {
    let newTagP = document.getElementsByTagName('p');
    for(let i = 0; i < newTagP.length; i +=1){
    newTagP[i].innerText = newTagP[i].innerText.toUpperCase();  
    }
}
console.log(changeUppercase());

//Exercício 6
function pContent() {
    let content = document.getElementsByTagName('p');
    for(let i = 0; i < content.length; i += 1) {
        console.log(content[i].innerHTML);
    }
}
