const row= 16;
const column= 16;
const height = 500;
const width = 500;
  

let outerContainer = document.querySelector('.container');
outerContainer.style.width = `${width}px`;
outerContainer.style.height = `${height}px`;

for (let i = 1; i <= (row * column); i++) {
  let innerContainer = document.createElement('div');
  innerContainer.classList.add('insideDiv');
  innerContainer.style.height = `${height / row}px`;
  innerContainer.style.width = `${width / column}px`;
  innerContainer.style.flexWrap = 'wrap';
  outerContainer.appendChild(innerContainer);
};

let changeColor = document.querySelectorAll('.insideDiv');
console.log(changeColor.length);
for (let i = 0 ; i < changeColor.length; i++) {
  changeColor[i].addEventListener('mouseover', () => {
    changeColor[i].style.backgroundColor = 'black';
  });
};
