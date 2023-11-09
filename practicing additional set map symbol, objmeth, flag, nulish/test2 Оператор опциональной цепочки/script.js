'use strict';

const box = document.querySelector('.box');
const block = document.querySelector('.block');

console.log(block); //logs 'null' because it cant be found

// if (block) {
//     console.log(block.textContent);
// }

console.log(block?.textContent); //logs undefined. this operator checks block and if it is 'null or 'undefined' it logs it instad of stopping all code

console.log(1 + 2);

const userData = {
    name: 'Ivan',
    age: null,
    say: function() {
        console.log('Hello');
    }
};

userData.say();
userData.hey?.(); // checking if this method exists if it is not 'undefined'' will be returned
// if( userData && userData.skills && userData.skills.js) {
//     console.log(userData.skills.js);
// }; 

console.log(userData?.skills?.js); // it checks if 'skills' is 'null' or 'undefined' and if it is it will log it instead of giving error and it will continue code process