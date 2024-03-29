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
const grabberBtn = document.querySelector('.grabber');
const darkenBtn = document.querySelector('.darken');
const lightenBtn = document.querySelector('.lighten');

let lightenFlag = false;
let darkenFlag = false;
let grabberFlag = false;
let num;


function divsNum(numForDivs = 16) {

    if (num !== undefined || num !== null || num !== "") {
        let squares = document.querySelectorAll('.square');
        for (let i = 0; i < squares.length; i++) {
          let square = squares[i];
          container.removeChild(square);
         }
    }

    container.setAttribute('style', `grid-template-columns: repeat(${numForDivs}, auto);
grid-template-rows: repeat(${numForDivs}, auto);`);
    num = numForDivs * numForDivs;
    for (let i = 1; i < (num + 1); i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        container.appendChild(square);
    }
}

divsNum();


submit.addEventListener('click', () => {
    let numOfDivsEachSide;
    numOfDivsEachSide = inputOfGrid.value;
    if (numOfDivsEachSide > 64) {
        alert("Maximum is 64 !!");
        return;
    }
    else if (numOfDivsEachSide >= 1 && numOfDivsEachSide <= 64) {
        divsNum(numOfDivsEachSide);
    }
    else {
        alert("Please Type a number that is between 1 and 64");
        return;
    }
    ;
})

let isDrawing = false;
let mouseOver = function (e) {
  if(isDrawing){
    if (!grabberFlag){
        let square = e.target.closest('.square');
        if (square === null){
            return;
        }
        if (lightenFlag === false){
            if (darkenFlag === false){
                if (flag2){
                square.setAttribute('style', `background-color: ${getColor()};`);
                }
                else if (flag2 === false){
                square.removeAttribute('style');
                }    
            }
            else if (darkenFlag){
                if (flag2){
                    let currentColor = getCssSquareColor(square);
                    square.removeAttribute('style');
                    square.setAttribute('style', `background-color: ${darkenMode(currentColor)};`);
                }
                    else if (flag2 === false){
                    square.removeAttribute('style');
                }  
            }    
        }
        else if (lightenFlag){
            if (flag2){
                let currentColor = getCssSquareColor(square);
                square.removeAttribute('style');
                square.setAttribute('style', `background-color: ${lightenMode(currentColor)};`);
            }
                else if (flag2 === false){
                square.removeAttribute('style');
            } 
        }
        
    }    
    }
    
}

function lightenMode (rgbColor){
    let sliced = rgbColor.slice(4);
    let slicedEnd = sliced.slice(0, -1);
    let array = slicedEnd.split(", ");
    let red = array[0];
    let green = array[1];   
    let blue = array [2];
    let colorInHex = rgbToHex(+red, +green ,+blue);
    return shadeColor(colorInHex, 15);
}

function darkenMode (rgbColor) {
        let sliced = rgbColor.slice(4);
        let slicedEnd = sliced.slice(0, -1);
        let array = slicedEnd.split(", ");
        let red = array[0];
        let green = array[1];   
        let blue = array [2];
        let colorInHex = rgbToHex(+red, +green ,+blue);
        return shadeColor(colorInHex, -15);;
}

function shadeColor(color, amount) {
    return '#' + color.replace(/^#/, '').replace(/../g, color => ('0'+Math.min(255, Math.max(0, parseInt(color, 16) + amount)).toString(16)).substr(-2));
}


window.addEventListener('mousedown', () =>
  isDrawing = true);
window.addEventListener('mouseup', () =>
  isDrawing = false);

function clickSquare (e) {
    let square = e.target.closest('.square');
    if (square === null){
        return;
    }
    if (grabberFlag === false){
        if (lightenFlag === false){
            if (darkenFlag === false){
                if (flag2){
                square.setAttribute('style', `background-color: ${getColor()};`);
                }
                else if (flag2 === false){
                square.removeAttribute('style');
                }    
            }
            else if (darkenFlag){
                if (flag2){
                    let currentColor = getCssSquareColor(square);
                    square.removeAttribute('style');
                    square.setAttribute('style', `background-color: ${darkenMode(currentColor)};`);
                }
                    else if (flag2 === false){
                    square.removeAttribute('style');
                }  
            }    
        }
        else if (lightenFlag){
            if (flag2){
                let currentColor = getCssSquareColor(square);
                square.removeAttribute('style');
                square.setAttribute('style', `background-color: ${lightenMode(currentColor)};`);
            }
                else if (flag2 === false){
                square.removeAttribute('style');
            } 
        }    
    }
    else if (grabberFlag === true){
        let currentColor = getCssSquareColor(square);
        let sliced = currentColor.slice(4);
        let slicedEnd = sliced.slice(0, -1);
        let array = slicedEnd.split(", ")
        let red = array[0];
        let green =  array [1];  
        let blue = array [2]; 
        let colorInHex = rgbToHex(+red, +green ,+blue);
        inputOfColor.value = colorInHex;
        grabberFlag = false;
        grabberBtn.textContent = 'Grabber';
        grabberBtn.removeAttribute('style');
    }
}

container.addEventListener('click', clickSquare);
container.addEventListener('mouseover', mouseOver);


let flag2 = true;
let flag = true;

function getColor() {
    if (flag) {
        let color = inputOfColor.value;
        return color;
    }
    else if (flag === false) {
        return getRGBColor();
    }
}

function getRGBColor() {
    let randomNum = Math.random();
    if (randomNum > 0 && randomNum <= 0.1) {
        return '#0000e6';
    }
    else if (randomNum >= 0.1 && randomNum <= 0.2) {
        return '#ff3300';
    }
    else if (randomNum >= 0.2 && randomNum <= 0.3) {
        return '#ff66ff';
    }
    else if (randomNum >= 0.3 && randomNum <= 0.4) {
        return '#6C7A89';
    }
    else if (randomNum >= 0.4 && randomNum <= 0.5) {
        return '#00ffff';
    }
    else if (randomNum >= 0.5 && randomNum <= 0.6) {
        return '#8D608C';
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
        lightenFlag = false;
        darkenFlag = false;
        lightenBtn.removeAttribute('style');
        lightenBtn.textContent = 'Lighten';
        darkenBtn.removeAttribute('style');
        darkenBtn.textContent = 'Darken';
        grabberFlag = false;
        grabberBtn.textContent = 'Grabber';
        grabberBtn.removeAttribute('style');
        flag2 = true;
        eraser.textContent ='Erase';
        eraser.removeAttribute('style');
        rgb.setAttribute('style', `
        color: black;
        background: linear-gradient(124deg, red, yellow, green);
       `);
        rgb.textContent = "RGB IS ON";
    }
    else if (flag) {
        rgb.removeAttribute('style');
        rgb.textContent = 'RGB';
    }
})

inputOfColor.addEventListener('click', () => {
    lightenFlag = false;
    darkenFlag = false;
    lightenBtn.removeAttribute('style');
    lightenBtn.textContent = 'Lighten';
    darkenBtn.removeAttribute('style');
    darkenBtn.textContent = 'Darken';
    grabberFlag = false;
    grabberBtn.textContent = 'Grabber';
    grabberBtn.removeAttribute('style');
    flag2 = true;
    flag = true;
    rgb.removeAttribute('style');
    rgb.textContent = 'RGB';
    eraser.textContent = 'Erase';
    eraser.removeAttribute('style');
    
})

function clear() {
    let squares = document.querySelectorAll('.square');
    for(let i = 0; i < squares.length; i++){
    squares[i].removeAttribute('style');
    }
}

clearBtn.addEventListener('click', clear);


eraser.addEventListener('click', () => {
    flag2 = !flag2;
    if (flag2 === false) {
        grabberFlag = false;
        grabberBtn.textContent = 'Grabber';
        grabberBtn.removeAttribute('style');
        eraser.textContent = "Eraser is enabled";
        eraser.setAttribute('style', `
        background-image: none;
        background-color: white; 
        color: #000000; 
        border: 2px solid black; 
        font-size: 15px;`);
    }
    else if (flag2) {
        eraser.textContent = 'Erase';
        eraser.removeAttribute('style');
    }
})
backgroundColor.addEventListener('change', () => {
    let squares = document.querySelectorAll('.square');
    for (let i = 0; i < squares.length; i++){
        let gridColor = backgroundColor.value;
        document.getElementsByTagName('style')[0].innerHTML =`.square {background-color: ${gridColor};}`; 
    }
})

let flag3 = true;
gridLines.addEventListener('click', () => {
flag3 = !flag3;
if (flag3){
    container.classList.remove('container-lined');
    gridLines.removeAttribute('style');
    gridLines.textContent = "Add lines";
}
else if (flag3 === false) {
    container.classList.add('container-lined');
    gridLines.textContent = "Lines are added";
    gridLines.setAttribute('style', `
        background-image: none;
        background-color: white; 
        color: #000000; 
        border: 2px solid black; 
        font-size: 15px;`);
}
})

function getCssSquareColor(element) {       
    let myDivObjBgColor = window.getComputedStyle(element).backgroundColor;
    return myDivObjBgColor;
}

const rgbToHex = (r, g, b) => '#' + [r, g, b].map(x => {
    const hex = x.toString(16)
    return hex.length === 1 ? '0' + hex : hex
  }).join('');


grabberBtn.addEventListener('click', () => {
    grabberFlag = !grabberFlag;
    if (grabberFlag){
        lightenFlag = false;
        darkenFlag = false;
        lightenBtn.removeAttribute('style');
        lightenBtn.textContent = 'Lighten';
        darkenBtn.removeAttribute('style');
        darkenBtn.textContent = 'Darken';
        flag2 = true;
        flag = true;
        rgb.removeAttribute('style');
        rgb.textContent = 'RGB';
        eraser.textContent = 'Erase';
        eraser.removeAttribute('style');
        grabberBtn.textContent = 'Grabber is ON';
        grabberBtn.setAttribute('style', `
        background-image: none;
        background-color: white; 
        color: #000000; 
        border: 2px solid black; 
        font-size: 15px;`);
    }
    else{
        grabberBtn.textContent = 'Grabber';
        grabberBtn.removeAttribute('style');
    }
});

darkenBtn.addEventListener('click', () => {
    darkenFlag = !darkenFlag;
    if (darkenFlag){
        flag2 = true;
        flag = true;
        rgb.removeAttribute('style');
        rgb.textContent = 'RGB';
        eraser.textContent = 'Erase';
        eraser.removeAttribute('style');
        grabberFlag = false;
        grabberBtn.textContent = 'Grabber';
        grabberBtn.removeAttribute('style');
        lightenFlag = false;
        lightenBtn.removeAttribute('style');
        lightenBtn.textContent = 'Lighten';
        darkenBtn.textContent = 'Darken is ON';
        darkenBtn.setAttribute('style', `
        background-image: none;
        background-color: white; 
        color: #000000; 
        border: 2px solid black; 
        font-size: 15px;`);
    }
    else  {
        darkenBtn.removeAttribute('style');
        darkenBtn.textContent = 'Darken';
    }
})

lightenBtn.addEventListener('click', () => {
    lightenFlag = !lightenFlag;
    if (lightenFlag){
        flag2 = true;
        flag = true;
        rgb.removeAttribute('style');
        rgb.textContent = 'RGB';
        eraser.textContent = 'Erase';
        eraser.removeAttribute('style');
        grabberFlag = false;
        grabberBtn.textContent = 'Grabber';
        grabberBtn.removeAttribute('style');
        darkenFlag = false;
        darkenBtn.removeAttribute('style');
        darkenBtn.textContent = 'Darken';
        lightenBtn.textContent = 'Lighten is ON';
        lightenBtn.setAttribute('style', `
        background-image: none;
        background-color: white; 
        color: #000000; 
        border: 2px solid black; 
        font-size: 15px;`);
    }
    else  {
        lightenBtn.removeAttribute('style');
        lightenBtn.textContent = 'Lighten';
    }
})

let arrayOfBtns = [rgb, submit, eraser, clearBtn, gridLines, grabberBtn, darkenBtn, lightenBtn];
arrayOfBtns.forEach((btn) => {
    btn.addEventListener('mousedown', () => {
        btn.setAttribute('style', "transform: scale(0.98); background-color: white; color: #000000; border: 2px solid black;  font-size: 15px");
    })
    
    btn.addEventListener('mouseup', () => {
        btn.removeAttribute('style');
    })
})