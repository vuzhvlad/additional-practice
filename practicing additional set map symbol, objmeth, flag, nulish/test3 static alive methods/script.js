'use strict';

const boxesQuery = document.querySelectorAll('.box'); // this one is better because you get more methods with queryselector
const boxesGet = document.getElementsByClassName('box');

boxesQuery[0].remove();
boxesGet[0].remove();

for( let i = 0; i < 5; i++) {
    const div = document.createElement('div'); // creating element idv
    div.classList.add('box'); // adding class 'box'
    document.body.append(div); // putting into the top of .body
}

console.log(boxesQuery); //nodeList - static and it wont change after removing element
console.log(boxesGet); //HTML collection - alive and it will change after removing element

console.log(Array.from(boxesGet)); // makes an array from psevdo array

boxesQuery.forEach((item) => {
    if(item.matches('.this')) { // if it finds the item that matches by css selector
        console.log(item);
    }
});