const container = document.querySelector('#container');
container.classList.add(`container`);

const submit = document.querySelector('.submit-grid');
const inputOfGrid = document.querySelector('.divs-num');
const inputOfColor = document.querySelector('#color-picker-sketch');
const rgb = document.querySelector('.rgb');
const clearBtn = document.querySelector('.clear');
const eraser = document.querySelector('.eraser');
const backgroundColor = document.querySelector('#color-picker-grid');
const submitGridColor = document.querySelector('.submit-color-grid');
const gridLines = document.querySelector('.grid-lines');

let num;
function divsNum(numForDivs = 16) {

    if (num !== undefined || num !== null || num !== "") {
        for (let i = num; i >= 1; i--) {
            let square = document.querySelector('.square');
            container.removeChild(square);
        }
    }

    container.setAttribute('style', `grid-template-columns: repeat(${numForDivs}, auto);
grid-template-rows: repeat(${numForDivs}, auto);`);
    num = numForDivs * numForDivs;
    console.log(num);
    for (let i = 1; i < (num + 1); i++) {
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
    if (numOfDivsEachSide > 64) {
        alert("Maximum is 64 !!")
        return;
    }
    else if (numOfDivsEachSide >= 1 && numOfDivsEachSide <= 64) {
        divsNum(numOfDivsEachSide);
    }
    else {
        alert("Please Type a number that is between 1 and 64");
        return;
    }
    sketch();
})

let mouseOver = function () {
    this.setAttribute('style', `background-color: ${getColor()};`);
}

function sketch() {
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

let flag3 = true;
let flag2 = "";
let flag = true;

function getColor() {
    if (flag2 === "") {
        let color = inputOfColor.value;
        return color;
    }
    else if (flag2 === "A") {
        return getRGBColor();
    }
}

function getRGBColor() {
    let randomNum = Math.random();
    if (randomNum > 0 && randomNum <= 0.2) {
        return '#34ebe8';
    }
    else if (randomNum >= 0.2 && randomNum <= 0.4) {
        return '#f556d2';

    }
    else if (randomNum >= 0.4 && randomNum <= 0.5) {
        return '#9000ff';

    }
    else if (randomNum >= 0.5 && randomNum <= 0.6) {
        return '#918d90';
    }
    else if (randomNum >= 0.6 && randomNum <= 0.7) {
        return '#40de28';
    }
    else if (randomNum >= 0.7 && randomNum <= 0.8) {
        return '#ff0303';
    }
    else if (randomNum >= 0.8 && randomNum <= 0.9) {
        return '#eeff00';
    }
    else if (randomNum >= 0.9 && randomNum <= 1) {
        return '#0703ff';
    }

}


rgb.addEventListener('click', () => {
    flag = !flag;
    if (flag === false) {
        flag2 = "A";
    }
    else if (flag) {
        flag2 = "";
    }
})

inputOfColor.addEventListener('click', () => {
    flag2 = "";
})

function clear() {
    let squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
        square.removeAttribute('style');
    })
}

clearBtn.addEventListener('click', clear);

function erase() {
    this.removeAttribute('style');
}

eraser.addEventListener('click', () => {
    flag3 = !flag3;
    if (flag3 === false) {
        flag2 = "B";
    }
    else if (flag3) {
        if (flag === false) {
            flag2 = "A";
        }
        else if (flag) {
            flag2 = "";
        }

    }
})



submitGridColor.addEventListener('click', () => {
  
    let squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
        let gridColor = backgroundColor.value;
        document.getElementsByTagName('style')[0].innerHTML =`.square-changed {background-color:${gridColor};}`;
        square.classList.add('square-changed');
    })
})

let flag4 = true;
gridLines.addEventListener('click', () => {
flag4 = !flag4;
if (flag4){
    container.classList.remove('container-lined');
}
else if (flag4 === false) {
    container.classList.add('container-lined');
}
})