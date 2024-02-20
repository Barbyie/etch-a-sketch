const height = 600;
const width = 600;
  

let button = document.querySelector('.promptButton');
button.addEventListener('click', () => {
  let sizeVariable = gridSize();
  if (sizeVariable > 100 || sizeVariable <= 0) {
    alert("Invalid input, please type a size between 1 and 100");
  } else {
    createGrid(sizeVariable);
    console.log("buttonclick");
    colorGrid();
  }; 
});

function gridSize () {
  let size = Number(prompt("What will be the size of the grid ?"));
  console.log("gridSize function");
  return size;
};

function createGrid (size) {
  let outerContainer = document.querySelector('.container');
  outerContainer.style.width = `${width}px`;
  outerContainer.style.height = `${height}px`;

  for (let i = 1; i <= (size * size); i++) {
    let innerContainer = document.createElement('div');
    innerContainer.classList.add('insideDiv');
    innerContainer.style.height = `${height / size}px`;
    innerContainer.style.width = `${width / size}px`;
    innerContainer.style.flexWrap = 'wrap';
    outerContainer.appendChild(innerContainer);
  };

};

function colorGrid () {
  let changeColor = document.querySelectorAll('.insideDiv');
  for (let i = 0 ; i < changeColor.length; i++) {
    changeColor[i].addEventListener('mouseover', () => {
      changeColor[i].style.backgroundColor = 'black';
    });
  };
};
