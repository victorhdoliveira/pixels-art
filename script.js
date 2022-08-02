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
let blackSelect = document.createElement('div')
firstSelect.style.backgroundColor = 'black'
firstSelect.className = 'color selected';

