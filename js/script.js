const container = document.querySelector('#container');
container.classList.add(`container`);

const submit = document.querySelector('.submit-grid');
const inputOfGrid = document.querySelector('.divs-num');
const inputOfColor = document.querySelector('#color-picker')
const rainbowMode = document.querySelector('.rainbow')

let num;
function divsNum (numForDivs = 16){

if (num !== undefined || num !== null || num !== ""){
for (let i = num; i >= 1; i--){
    let square = document.querySelector('.square');
    container.removeChild(square);
}}

container.setAttribute('style', `grid-template-columns: repeat(${numForDivs}, auto);
grid-template-rows: repeat(${numForDivs}, auto);`)
num = numForDivs * numForDivs;
console.log(num);
for (let i = 1; i < (num +1); i++) {
    const square = document.createElement('div');
    square.classList.add('square')
    square.setAttribute('draggable', 'false');
    container.appendChild(square);
}
console.log(num);
}




divsNum();
sketch();

submit.addEventListener('click', () => {
let numOfDivsEachSide;
numOfDivsEachSide = inputOfGrid.value;
if(numOfDivsEachSide > 64) {
        alert("Maximum is 64 !!")
        return;
}
else if (numOfDivsEachSide >= 1 && numOfDivsEachSide <= 64){
    divsNum(numOfDivsEachSide);
}
else {
    alert("Please Type a number that is between 1 and 64")
    return;
}
sketch();
})

let mouseOver = function() {
    this.setAttribute('style', `background-color: ${getColor()};`);
}


let mouseOverRainbow = function() {
    this.setAttribute('style', `background-color: ${getRainbowColor()};`);
}



function sketch (){
let squares = document.querySelectorAll('.square');
squares.forEach((square) => {
square.addEventListener('click', () => {
    square.setAttribute('style', `background-color: ${getColor()};`);
})
window.addEventListener('mouseup', () => {
    square.removeEventListener('mouseenter', mouseOver);
})
window.addEventListener('mousedown', () => {
    square.addEventListener('mouseenter', mouseOver);
})


})
}

let flag = true;

function getColor(){
  if (flag) {
    let color = inputOfColor.value;
    return color;
  }
  if (flag === false){
    return getRainbowColor();
  }
}

function getRainbowColor(){
    let randomNum = Math.random();
    if (randomNum > 0 && randomNum <= 0.2){
        return '#34ebe8';   
    }
    else if (randomNum >= 0.2 && randomNum <= 0.4){
        return '#f556d2';

    }
    else if (randomNum >= 0.4 && randomNum <= 0.5){
        return '#9000ff';

    }
    else if (randomNum >= 0.5 && randomNum <= 0.6){
        return '#918d90';
    }
    else if (randomNum >= 0.6 && randomNum <= 0.7){
        return '#40de28';
    }
    else if (randomNum >= 0.7 && randomNum <= 0.8){
        return '#ff0303';
    }
    else if (randomNum >=0.8 && randomNum <= 0.9){
        return '#eeff00';
    }
    else if (randomNum >= 0.9 && randomNum <= 1){
        return '#0703ff';
    }

}


rainbowMode.addEventListener('click', () => {
    flag = !flag;
})

inputOfColor.addEventListener('click', () => {
    flag = true;
})