'use strict';

const obj = {
    'name': 'Test',
    [Symbol("id")]: 1,
    getId: function() {
        return this[id];
    }
};

// let id = Symbol("id"); // creating Symbol that has description "id"
// let id2 = Symbol("id");

// console.log(id2 == id); // checking if they are the same

// obj[id] = 1; // puts this symbol inside of the object and equals 1

// console.log(obj[id]);
// console.log(obj['vlad']); // you cant get acces to that symbol that is inside of the object

// for (let value in obj) {
//     console.log(value);
// }
console.log(obj[Object.getOwnPropertySymbols(obj)[0]]); // method gets value of that element


const myAwesomeDB = {
    movies: [],
    actors: [],
    [Symbol("id")]: 123,
    [Symbol.for("vlad")]: 'vlad',
    [Symbol.for("vlad")]: 'trafim'
}

//strange code

myAwesomeDB.id = '3323232';

console.log(myAwesomeDB["id"]); //  and someone changed it accidentelly
console.log(myAwesomeDB); // SYmbol is important to put information that you cant change
console.log(myAwesomeDB[Symbol.for("vlad")]);

