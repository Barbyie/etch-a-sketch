const row= 16;
const column= 16;
const height = 600;
const width = 600;
  

let button = document.querySelector('.promptButton');
let condition = true;
let size = 0;

// button.addEventListener('click', () => {
//   while(condition) {
//     size = Number(prompt("Set up size of the grid"));
//     console.log(size);
//     if (size > 100 || size <= 0) {
//       alert("Invalid input, please type a size between 1 and 100");
//     } else {
//       condition = false;
//     }; 
//   };
// });

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
  console.log(i);
};

let changeColor = document.querySelectorAll('.insideDiv');
for (let i = 0 ; i < changeColor.length; i++) {
  changeColor[i].addEventListener('mouseover', () => {
    changeColor[i].style.backgroundColor = 'black';
  });
};
