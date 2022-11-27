const container = document.querySelector('.container');



for (let i = 0; i < 256; i++) {
    const myBoard = document.createElement('div');
myBoard.className ="board-container"
myBoard.setAttribute('style', 'border: black solid 1px; '); 
container.appendChild(myBoard);
  }
