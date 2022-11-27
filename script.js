const container = document.querySelector('.container');
const myBoard = document.createElement('div');
myBoard.className ="board-container"
container.appendChild(myBoard);



for (let i = 0; i < 256; i++) {
    const myCell = document.createElement('div');
    myCell.className ="cell";
    myBoard.appendChild(myCell);
    container.appendChild(myBoard);

  }
