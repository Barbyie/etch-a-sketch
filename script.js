const height = 600;
const width = 600;

let button = document.querySelector('.promptButton');
button.addEventListener('click', () => {
  clearGrid();
  let sizeVariable = gridSize();
  if (sizeVariable > 100 || sizeVariable <= 0) {
    alert("Invalid input, please type a size between 1 and 100");
  } else {
    createGrid(sizeVariable);
    colorGrid();
  }; 
});

function gridSize () {
  let size = Number(prompt("What will be the size of the grid ?"));
  return size;
};

function clearGrid () {
  let outerContainer = document.querySelector('.container');
  outerContainer.textContent = '';
};

function createGrid (size) {
  let outerContainer = document.querySelector('.container');
  outerContainer.style.width = `${width}px`;
  outerContainer.style.height = `${height}px`;
  outerContainer.style.border = "2px solid black";

  for (let i = 1; i <= (size * size); i++) {
    let innerContainer = document.createElement('div');
    innerContainer.classList.add('insideDiv');
    innerContainer.style.border = "1px solid black";
    innerContainer.style.height = `${height / size}px`;
    innerContainer.style.width = `${width / size}px`;
    innerContainer.style.flexWrap = 'wrap';
    outerContainer.appendChild(innerContainer);
  }; //This loop creates the divs inside the container
};

function colorGrid () {
  let changeColor = document.querySelectorAll('.insideDiv');
  for (let i = 0 ; i < changeColor.length; i++) {
    changeColor[i].addEventListener('mouseover', () => {
      changeColor[i].style.backgroundColor = 'black';
    });
  };
};
