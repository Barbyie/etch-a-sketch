const row= 16;
const column= 16;
const height = 500;
const width = 500;
  

let outerContainer = document.querySelector('.container');
outerContainer.style.width = `${width}px`;
outerContainer.style.height = `${height}px`;

for (let i = 1; i <= (row * column); i++) {
  let innerContainer = document.createElement('div');
  innerContainer.style.height = `${height / row}px`;
  innerContainer.style.width = `${width / column}px`;
  innerContainer.style.flexWrap = 'wrap';
  outerContainer.appendChild(innerContainer);
  console.log(i);
};
