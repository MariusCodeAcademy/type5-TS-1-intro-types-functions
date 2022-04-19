// Primitive values
let nameX: string = 'Petras';
nameX = '20';
nameX = 'true';

const sum: number = 5 * 5;
let age: number = 20;
age = 50;
age = '40';
let isLoggedIn: boolean = true;
console.log('age ===', age);

// Reference values
// numbers array
const ids: number[] = [1, 2, 3, 4, 5];
const ids2: any[] = [1, 'James', true, null];

// Tuple - tam tikra eiles tvarka isdeliotos reiksmes
const person: [number, string, boolean, number] = [99, 'Mike', true, 50];

let tupleArr: [boolean, string][];

tupleArr = [
  [true, 'London'],
  [false, 'Kaunas'],
  [false, 'Vilnius'],
  [true, 'Vienna'],
];
