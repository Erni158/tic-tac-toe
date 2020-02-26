const btn = document.querySelector('button');
let board = ["", "", "", "", "", "", "", "", ""];
const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
let box = document.querySelectorAll('.box');
let currentPlayer = "X";

function handleClick(clickedBox){
    const clickedCell = clickedBox.target;
    const clickedCellIndex = parseInt(clickedCell.getAttribute('data-index'));

    handleMove(clickedCell, clickedCellIndex);
    checkResult();
}

function handleMove(clickedCell, clickedCellIndex){
    board[clickedCellIndex] = currentPlayer;
    clickedCell.innerHTML = currentPlayer;
}

function checkResult(){
    let roundWon = false;
    for(let i = 0; i <= 7; i++){
        const winCondition = winningConditions[i];
        let a = board[winCondition[0]];
        let b = board[winCondition[1]];
        let c = board[winCondition[2]];
        if(a === '' || b === '' || c === ''){
            continue;
        }
        if(a === b && b === c){
            roundWon = true;
            break;
        }
    }
    if(roundWon){

    }
    playerChange();
}

function playerChange(){
    currentPlayer = currentPlayer === "X" ? "O" : "X";
}

btn.addEventListener('click', () => {
    btn.style.animation = "zoomOutLeft 1s forwards";
    setTimeout(() => {
        for(let i = 0; i < 9; i++){
            box[i].style.display = "block";
            box[i].style.animation = "flipInX 1.2s ease";
        }
    }, 1000);
});

box.forEach(box => box.addEventListener('click', handleClick));


