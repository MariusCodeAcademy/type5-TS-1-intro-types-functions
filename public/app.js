"use strict";
// Primitive values
let nameX = 'Petras';
nameX = '20';
nameX = 'true';
const sum = 5 * 5;
let age = 20;
age = 50;
// age = '40';
let isLoggedIn = true;
console.log('age ===', age);
// Reference values
// numbers array
const ids = [1, 2, 3, 4, 5];
const ids2 = [1, 'James', true, null];
// Tuple - tam tikra eiles tvarka isdeliotos reiksmes
const person = [99, 'Mike', true, 50];
let tupleArr;
tupleArr = [
    [true, 'London'],
    [false, 'Kaunas'],
    [false, 'Vilnius'],
    [true, 'Vienna'],
];
// Union type
let cartId;
cartId = 11;
cartId = '11xyz';
// cartId = true; err
// Enum - saraso tipas,  prasideda nuo 0 arba nuo kiek mes nurodom
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 5] = "Up";
    Direction1[Direction1["Down"] = 6] = "Down";
    Direction1[Direction1["Left"] = 7] = "Left";
    Direction1[Direction1["Right"] = 8] = "Right";
})(Direction1 || (Direction1 = {}));
console.log('Direction1.Left ===', Direction1.Left);
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "up";
    Direction2["Down"] = "down";
    Direction2["Left"] = "left";
    Direction2["Right"] = "right";
})(Direction2 || (Direction2 = {}));
console.log('Direction2.Left ===', Direction2.Left);
// Objects
const book = {
    id: 999,
    title: 'Book 99',
    year: 99,
    // category: 'tech'
};
const book2 = {
    id: 77,
    title: 'Book 77',
    year: 1977,
};
// Type assertion
let uId = 1;
// uId = true;
// sukurti customerId kuris bus tos pacios reiksmes kaip uId bet skaicius
let customerId = uId;
// arba
let customerId1 = uId;
// customerId1 = true; // err
// Funkcijos  ============================================================
function addNum(num1, num2) {
    // return 'sss';
    return num1 + num2;
}
console.log(addNum(5, 5));
// console.log(addNum(5)); err
function lg(msg) {
    console.log(msg);
}
lg('hello');
lg(55);
// lg(true);
