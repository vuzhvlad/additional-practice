'use strict';

const box = document.querySelector('.box');

const newHeight = 100;
const newWidth = 400;

function changeParams(elem, h, w) { //changes few parameters of the element
    elem.style.height = `${h ?? 200}px`; // by default if "h" is true it will use this one if it is not it will take 200
    elem.style.width = `${w ?? 200}px`;
    elem.innerHTML = (h ?? 200) * (w ?? 200); // using braces to change priopity of operators
}

changeParams(box, newHeight, newWidth);

let userName;
let userKey;

console.log(userName ?? userKey ?? 'User'); // nulish Operetaor if "userName" is null or undefined it will be false for this operator so it will take 'User'
console.log(userName && userKey ?? 'User'); // && cant be mixed with ?? 

