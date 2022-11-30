const container = document.querySelector('.container');


const generateGrid =() =>{
  for (let i = 0; i < 256; i++) {
    const myCell = document.createElement('div');
    myCell.className ="cell";
    container.appendChild(myCell);
    
  }
  
}

const changeCell =() => {
  const myHoveredCells = document.querySelectorAll('.cell');
  for (let i = 0; i < myHoveredCells.length; i++) {
   myHoveredCells[i].addEventListener("mouseover", setBlackColour);
 }



}


function setBlackColour() {
  this.style.backgroundColor = "black";}


  generateGrid();
  changeCell();