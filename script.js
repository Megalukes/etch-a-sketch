let boxSize = 16 // 16x16
let gridSize = 16

function createBoxes(n = 16){
    let fullValue = n * n
    let board = document.querySelector('#board')
    console.log(board)
    for (i = 0; i < fullValue; i++){
        let div = document.createElement("div");
        div.classList.add('rect')
        div.id = "rect" + i

        div.addEventListener('mouseover', (e, id = div.id) => {
            console.log(id)
            let divById = document.querySelector('#' + id)
            divById.classList.add('rectHover')
        })
        board.appendChild(div);
    }
}

createBoxes(gridSize)