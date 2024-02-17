const row= 16;
const column= 16;
const height = '500px';
const width = '500px';

let outerContainer = document.querySelector('.container');
outerContainer.style.width = width;
outerContainer.style.height = height;

for (let i = 0; i <= (row * column); i++) {
  let innerContainer = document.createElement('div');
  innerContainer.style.height = '15px';
  innerContainer.style.width = '15px';
  innerContainer.style.flexGrow = '1';
  outerContainer.appendChild(innerContainer);
};
