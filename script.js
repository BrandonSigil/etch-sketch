// const container = document.querySelector('canvas');

// const block = document.createElement('div');
// block.classList.add('block')
// block.textContent = '!'

// container.appendChild(block);


const container = document.querySelector('#canvas');

const square = document.createElement('div');
square.classList.add('square');

function makeSquare () {
    for (let i = 0; i < 256; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    container.appendChild(square);
    }

}

makeSquare();