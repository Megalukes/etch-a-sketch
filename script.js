let boxSize = 16 // 16x16
let gridSize = 16

let rainbow = false
let erase = false

function createBoxes(n = 16){
    let fullValue = n * n
    let board = document.querySelector('#board')
    console.log(board)
    for (i = 0; i < fullValue; i++){
        let div = document.createElement("div");
        div.classList.add('rect')
        div.id = "rect" + i

        div.addEventListener('mouseover', (e, id = div.id) => {
            //console.log(id)
            let divById = document.querySelector('#' + id)
            if (erase){
                divById.style.backgroundColor = "white"
                divById.classList.remove('rectHover')
            }
            else if (!rainbow) {
                divById.style.backgroundColor = "black"
                divById.classList.add('rectHover')
            } 
            else {
                var st = "rgb(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ")"
                divById.style.backgroundColor = st
                divById.classList.add('rectHover')
            }
            
        })
        board.appendChild(div);
    }
}


eraser = () => {erase = true}

blackColor = () => {
    rainbow = false
    erase = false
}
rainbowColor = () => {
    rainbow = true
    erase = false
}

createBoxes(gridSize)