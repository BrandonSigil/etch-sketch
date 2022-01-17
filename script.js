
const canvas = document.querySelector('#canvas');
const btnReset = document.querySelector('#btn');
let target;

let square = document.createElement('div');
square.classList.add('square');

var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}


// On window launch it will create a canvas based on the default value or will rerun if the slider's value is changed
function makeSquare (numSquare) {
    for (let i = 0; i < numSquare; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    canvas.appendChild(square);
    }
}

// check # of rows and columns and update styles.css 
function makeGrid (numRow, numCol) {
    canvas.style.setProperty('--numRows', numRow); 
    canvas.style.setProperty('--numCols', numCol); 
    for (let r = 0; r < numRow; r++) {
        makeSquare(numCol);
    }
}

function sliderValue(){
    let number = slider.value
    makeGrid(number,number);
    console.log(number);
}

slider.onchange= function () {
    number = slider.value;
    sliderValue();
}


function changeColor (target) { //why can't this be square instead of target. Why did I have to create another variable here?
    target.style.backgroundColor = '#2c2c54';
}

function resetColor (target) {
    target.style.backgroundColor = 'white';
}

canvas.addEventListener("mouseover", function (e) {
    target = e.target;

    if (target.matches("div.square")) {
        changeColor(target);
    }
    
});

function btnLog (btnReset) {
}

btnReset.onclick = function(){
    console.log('YOU DID IT!');
    window.location.reload();

}

sliderValue();


