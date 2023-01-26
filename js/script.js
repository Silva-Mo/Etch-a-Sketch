const container = document.querySelector('#container');
container.classList.add(`container`);

const submit = document.querySelector('.submit-grid');
const inputOfGrid = document.querySelector('.divs-num');

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
    alert("no no")
    return;
}
sketch();
})

let mouseOver = function() {
    this.classList.add('square-down');
}



function sketch (){
let squares = document.querySelectorAll('.square');
squares.forEach((square) => {
square.addEventListener('click', () => {
square.classList.add('square-down');
})
window.addEventListener('mouseup', () => {
square.removeEventListener('mouseenter', mouseOver);
})
window.addEventListener('mousedown', () => {
square.addEventListener('mouseenter', mouseOver);
})


})
}

