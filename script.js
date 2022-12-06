const container = document.querySelector('.container');
const button = document.getElementById("button");


const generateGrid =(size) =>{
  container.style.setProperty("--grid", size);
  for (let i = 0; i < (size * size); i++) {
    const myCell = document.createElement('div');
      container.appendChild(myCell).className ="cell";
      changeCell();
    
  }
}



//Change on Hover
const changeCell =() => {
  const myHoveredCells = document.querySelectorAll('.cell');
  for (let i = 0; i < myHoveredCells.length; i++) {
   myHoveredCells[i].addEventListener("mouseover", setBlackColour);
 }
}


function setBlackColour() {
this.style.backgroundColor = "black";}


generateGrid(16);


const changesize = (size) => {
  container.innerHTML="";
  size= prompt ('Enter a number between 0 and 100');
  if (size > 1 && size < 100){
    generateGrid(size);
  }
  else {
    generateGrid(16);
    alert ('Choose only between 1 and 100 ')
  }

}

button.addEventListener('click', changesize);

