'use strict';

const arr = [1, 1, 2, 2, 4, 5, 6, 5];

const set = new Set(arr); // type of data set, making set

console.log(set); // logs 1  2  3 4 5 6, removing  the same elements

const arr1 = ['Alex', 'Ann', 'Oleg', 'Alex'];

const set1 = new Set(arr1);

set1.add('Ivan'); // method for adding data
set1.add('Oleg'); // it wont add this because it already exists

console.log(set1);

//set.delete(value); - deleting item
//set.has(value); - checking if it has this value
//set.clear(); - clearing all set
//set.size; - getting the size of the set

for(let value of set1) { // way of looping for set
    console.log(value);
}

set1.forEach((value, valueAgain, set) => { // in sets it has valueAgain
    console.log(value, valueAgain);
});

console.log(set1.values());
console.log(set1.keys()); // it doesnt have keys and we just get values to console
console.log(set1.entries()); // we are getting value => value because it doesnt hav ekeys 

function unique(arr) {
    return Array.from(new Set(arr)); // fast filtration we put array into a set and it filters and than we make an array from set with method Array.from()
};