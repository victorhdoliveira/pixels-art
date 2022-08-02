//4
function creatingPixel(){
    let board = document.getElementById('pixel-board');
    console.log(board)
    for(let index = 1; index <= 25; index += 1){
        let pixel = document.createElement('div');
        pixel.className = 'pixel';
        board.appendChild(pixel);
    }
}

creatingPixel()