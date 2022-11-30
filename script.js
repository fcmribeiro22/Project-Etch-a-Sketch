const container = document.querySelector('.container');
const resetButton = document.querySelector ('.resetbutton');


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


function clearGrid (){
  const myHoveredCells = document.querySelectorAll('.cell');
  for (let i = 0; i < myHoveredCells.length; i++) {
   myHoveredCells[i].style.backgroundColor = "white";}
 }





  resetButton.addEventListener('click',clearGrid)





  generateGrid();
  changeCell();