'use strict'

 const user = {
     name: 'Alex',
     surname: 'Smith',
     birthday: '20/04/1993',
     showMyPublicData: function() {
         console.log(`${this.name} ${this.surname}`)
     }
 };
 console.log(user);

const userMap = new Map(Object.entries(user)); // how to make a map from object
console.log(userMap);

const newUserObj = Object.fromEntries(userMap); // how to make an object from the map
console.log(newUserObj);

const shops = [
    {rice: 500},
    {oil: 200},
    {bread: 500}
];

const budget = [5000, 15000, 25000];

const map = new Map([
    [{paper: 400}, 8000] // map is array inside of array so when you want to put the first element you sjould do it like that
]);

shops.forEach((shop, i) => { // assign budget to every shop 
    map.set(shop, budget[i]); // sets the value
});

console.log(map);

//  logs Map(3) {
//   { rice: 500 } => 5000,
//   { oil: 200 } => 15000,
//   { bread: 500 } => 25000
// }


// console.log(map.get(shops[0])); // gets value of the first shop
// console.log(map.has(shops[0])); // return true or false if it exists

// map.delete(key); // deletes from map
// map.clear(); // to clear map to make it empty
// map.size; // how many items inside of the map

// map.keys(); // gets keys of the map
// // we can use "for of" because it is iteretable as array in arrays

const goods = [];
for(let shop of map.keys()) { // we get keys of the shops { key: value}
    goods.push(Object.keys(shop)[0]); // then we can get keys of that by usin Object.keys
};

console.log(goods);

for(let price of map.values()) { // we get budgets that every shop has
    console.log(price);
};

for(let [shop, price] of map.entries()) { // we get price and shop, shop will be an object
    console.log(shop, price);
};

map.forEach((value, key, map) => { // the same as entries
    console.log(key, value);
});

// object has keys only that can be string 
// object doesnt have numeration and maps are like arrays 1 by 1
// it easy to go through map
// size of the map really easy to get with  "map.size"