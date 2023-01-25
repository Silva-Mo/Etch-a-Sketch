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
    container.appendChild(square);
}
console.log(num);
}


divsNum();

submit.addEventListener('click', () => {
let numOfDivsEachSide;
numOfDivsEachSide = inputOfGrid.value;
if(numOfDivsEachSide > 64) {
        alert("Maximum is 64 !!")
        return;
}
divsNum(numOfDivsEachSide);
})



