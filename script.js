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
const palette = document.getElementById('color-palette');
const selectClass = document.getElementsByClassName('selected');

function classes(event){
    if (event.target.className === 'color'){
        selectClass[0].classList.remove('selected');
        event.target.classList.add('selected')
    }
}
palette.addEventListener('click', classes)
    

//        
//if (square2.className === 'color selected'){
//         square1.className = 'color'
//         square3.className = 'color'
//         square4.className = 'color'
        
//        }
//        else if (square3.className === 'color selected'){
//         square1.className = 'color'
//         square2.className = 'color'
//         square4.className = 'color'
//        }
       
//        else if (square4.className === 'color selected'){
//         square1.className = 'color'
//         square2.className = 'color'
//         square3.className = 'color'
// }
//         else if (square1.className === 'color selected'){
//         square2.className = 'color'
//         square3.className = 'color'
//         square4.className = 'color'
//     }
// }
//      )
//}
