const text = document.getElementById('starting-text');
const boxes = Array.from(document.getElementsByClassName('box'));
const restartBtn = document.getElementById('restart-btn');
const spaces=[];
const PLAYER_ONE = 'O';
const PLAYER_TWO = 'X';
let currentPlayer;

// A function to draw the borders of the game

const drawBoard = () => {
    boxes.forEach((box, index) => {
        let styleString = '';
        if (index < 3) {
            styleString += 'border-bottom:3px solid var(--purple);border-top:3px solid var(--purple);';
        }
        if (index % 3 === 0) {
            styleString += 'border-right:3px solid var(--purple);border-left:3px solid var(--purple);';
        }
        if (index % 3 === 2) {
            styleString += 'border-left:3px solid var(--purple);border-right:3px solid var(--purple);';
        }
        if (index > 5) {
            styleString += ' border-top:3px solid var(--purple);border-bottom:3px solid var(--purple);';
        }
        box.style = styleString;
        box.addEventListener('click', boxClicked);
    });
}
//A function to handle the clicking of the boxes
const boxClicked = (event) => {
    const id = event.target.id;
    
    if (!spaces[id]) {
        spaces[id] = currentPlayer;
        event.target.innerText = currentPlayer;
        if (playerHasWon()) {
            text.innerText =`${currentPlayer} has won`;
            return;
        }
        currentPlayer = currentPlayer === PLAYER_ONE ? 'X' : 'O';
    }
    
}

// The Logic for winning
const playerHasWon = ()=>{
    if (spaces[0] === currentPlayer) {
        if (spaces[1] === currentPlayer && spaces[2] === currentPlayer) {
            console.log(`${currentPlayer} wins up top`);
            return true;
        }
        if (spaces[3] === currentPlayer && spaces[6] === currentPlayer) {
            console.log(`${currentPlayer} wins on the left`);
            return true;
        }
        if (spaces[4] === currentPlayer && spaces[8] === currentPlayer) {
            console.log(`${currentPlayer} wins diagonally`);
            return true;
        }
    }
     if (spaces[8] === currentPlayer) {
        if (spaces[2] === currentPlayer && spaces[5] === currentPlayer) {
            console.log(`${currentPlayer} wins on the right`);
            return true;
        }
        if (spaces[6] === currentPlayer && spaces[7] === currentPlayer) {
            console.log(`${currentPlayer} wins on the bottom`);
            return true;
        }
    }
    if (spaces[4] === currentPlayer) {
        if (spaces[1] === currentPlayer && spaces[7] === currentPlayer) {
            console.log(`${currentPlayer} wins verically in the middle`);
            return true;
        }
        if (spaces[3] === currentPlayer && spaces[5] === currentPlayer) {
            console.log(`${currentPlayer} wins horizontally in the middle `);
            return true;
        }
        if (spaces[2] === currentPlayer && spaces[6] === currentPlayer) {
            console.log(`${currentPlayer} wins horizontally in the middle`);
            return true;
        }
    }
}


// A function to control the restarting of the game after a round;
const restart = () => {
    spaces.forEach((space, index) => {
        spaces[index] = null;
    });
    boxes.forEach((box) => {
        box.innerText = '';
        text.innerText = `Let's Play!`;
        currentPlayer = PLAYER_ONE;
    })
    console.log(spaces);
}

restartBtn.addEventListener('click', restart);
restart();
drawBoard();