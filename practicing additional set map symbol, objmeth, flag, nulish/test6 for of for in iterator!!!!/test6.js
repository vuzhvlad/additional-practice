'use strcit'
//
const user = {
    name: 'Alex',
    surname: 'Smith',
    birthday: '20/04/1993',
    showMyPublicData: function() {
        console.log(`${this.name} ${this.surname}`);
    }
};


for(const key in user) {
    console.log(user[key]); // logs values of this object
};
//

//
const arr = ['b', 'a', 'c'];

for(const key in arr) {
    console.log(arr[key]); // logs b a c
};

const arr1 = ['b', 'a', 'c'];

for(const key of arr1) {
    console.log(key); // it goes through values of string and array so we need only 'key' and it logs b a c
};
//

//
const str = 'agjeigisdgisg';

for(const key in str) {
    console.log(str[key]); // logs every letter one by one
};
//

// for in loops unnumerable so it is not good to use it for strings and arrays

// you cant use "for of" wtih objects because it is not iteratble, when array and string are iteratble(it has Symbol Iterator)

const salaries = {
    john: 500,
    ivan: 1000,
    ann: 5000,
    sayHello: function() {
        console.log("hello");
    }
};

salaries[Symbol.iterator] = function() { // to use "for of" with object we need to add Symbol.iterator and function that returns object with method next
    return { // return of object
        current: this.john,
        last: this.ann,

        next() { //method next
            if(this.current < this.last) { // current will be less than last it 
                this.current = this.current + 500; // will add 500 hundred to current
                return {done: false, value: this.current} // and it will return an object with property done: false and value: current
            } else {

                return {done: true} // and property done if it is done
            }
        }
    }
}

for(let res of salaries) {
    console.log(res);
}

// so it is working with javascript language to set Symbol Iterator properly to work with it
// with this you cna make every object iteratble for "for of"

const iterator = salaries[Symbol.iterator](); // result of this method (line:54)  to (line:67)
console.log(iterator.next()); //logs this method






