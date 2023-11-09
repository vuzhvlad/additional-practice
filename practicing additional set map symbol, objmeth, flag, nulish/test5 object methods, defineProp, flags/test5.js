'use strict'

const user = {
    name: 'Alex',
    surname: 'Smith',
    [Symbol('birthday')]: '20/04/2021', // loops ignore symbols, enumerable is true but it doesnot work on it
    showMyPublicData: function() {
        console.log(`${this.name} ${this.surname}`);
    }
}

console.log(Object.getOwnPropertyDescriptor(user, 'name')); // method that gets flags from the object and property that you choose

Object.defineProperty(user, 'name', {writable: false}); //method changes the property of the element, now it is not possbile to change it(rewrite)
//user.name = 'dfvfgf'; // it does not work


Object.defineProperty(user, 'gender', {value: 'male'}); // the way you can create a new property, but
console.log(Object.getOwnPropertyDescriptor(user, 'gender')); // when you create it like that all flags will be false


Object.defineProperty(user, 'brithday', {value: prompt('Date of birth?'), enumerable: true, configurable: true}); // creates property that you cant change by asking user(prompt), and puts another flags to true
console.log(user);



Object.defineProperty(user, 'showMyPublicData', {enumerable: false}); // flag makes it not possible to use this property in loops(for in)

for (let key in user) {
    console.log(key);
}

Object.defineProperties(user, { // the way how to change a lot of properties at the same time
    name: {writable: false},
    surname: {writable: false}
});




// writable able to change
// enumerable able to use in loops
// configurable after yuo change this one you can change it and delete it
