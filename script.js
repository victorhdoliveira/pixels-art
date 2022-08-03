
let square1 = document.querySelector('#square1');
square1.style.backgroundColor = 'rgba(0, 0, 0)'
let square2 = document.querySelector('#square2');
square2.style.backgroundColor = 'rgba(151, 10, 44)'
let square3 = document.querySelector('#square3');
square3.style.backgroundColor = 'rgba(251, 186, 0)'
let square4 = document.querySelector('#square4');
square4.style.backgroundColor = 'rgba(188, 185, 183)'

//4
function creatingPixel(){
    let board = document.getElementById('pixel-board');
    for(let index = 1; index <= 25; index += 1){
        let pixel = document.createElement('div');
        pixel.className = 'pixel';
        board.appendChild(pixel);
    }
}

creatingPixel()

//6

let firstSelect = document.querySelector('.color');
let blackSelect = document.createElement('div');
firstSelect.className = 'color selected';

//7
let palette = document.getElementById('color-palette');
let selectClass = document.getElementsByClassName('selected');

function classes(event){
    if (event.target.className === 'color'){
        selectClass[0].classList.remove('selected');
        event.target.classList.add('selected')
    }
}
palette.addEventListener('click', classes)

//8

function pixelsPainting () {
    let pixelBoard = document.getElementById('pixel-board');

    pixelBoard.addEventListener('click', function (event){
      let selectedPx = event.target;
      let selectedColor = document.querySelector('.selected');

      if (selectedPx.classList == 'pixel') {
        selectedPx.style.backgroundColor = selectedColor.style.backgroundColor;
      }
    });
  }
  pixelsPainting();