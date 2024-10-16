const a = document.getElementById('main');
const b = document.getElementsByClassName('box');
const turn = ["X", "O"];
let turnOne = turn[0]; 

const endGameMsg = document.createElement('h2');
endGameMsg.textContent = `X's turn`;
endGameMsg.style.marginTop = '30px';
endGameMsg.style.textAlign = 'center';
a.after(endGameMsg);

const winnerPossibility = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8]
];

function checkWin(turnOne) {
  for (let i = 0; i < winnerPossibility.length; i++) {
    const [x, y, z] = winnerPossibility[i];
    if (b[x].textContent === turnOne && b[y].textContent === turnOne && b[z].textContent === turnOne) {
      return true;
    }
  }
  return false;
}

function drawGame() {
  for (let i = 0; i < b.length; i++) {
    if (b[i].textContent === '') {
      return false;
    }
  }
  return true;
}

function restartGame() {
  for (let i = 0; i < b.length; i++) {
    b[i].textContent = "";
  }
  endGameMsg.textContent = `X's Turn`;
  turnOne = turn[0]; 
}


document.getElementById('restartButton').addEventListener('click', restartGame);

for (let i = 0; i < b.length; i++) {
  b[i].addEventListener('click', () => {
    if (b[i].textContent !== "") {
      return;
    }
    b[i].textContent = turnOne;
    if (checkWin(turnOne)) {
      endGameMsg.textContent = `Game Over! ${turnOne} Wins`;
      return;
    }
    if (drawGame()) {
      endGameMsg.textContent = 'Game is a Draw';
      return;
    }
    turnOne = (turnOne === turn[0]) ? turn[1] : turn[0];
    endGameMsg.textContent = (turnOne === turn[0]) ? `X's Turn` : `O's Turn`;
  });
}
