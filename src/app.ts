// Primitive values
let nameX: string = 'Petras';
nameX = '20';
nameX = 'true';

const sum: number = 5 * 5;
let age: number = 20;
age = 50;
// age = '40';
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

// Union type
let cartId: string | number;

cartId = 11;
cartId = '11xyz';
// cartId = true; err

// Enum - saraso tipas,  prasideda nuo 0 arba nuo kiek mes nurodom
enum Direction1 {
  Up = 5,
  Down,
  Left,
  Right,
}
console.log('Direction1.Left ===', Direction1.Left);

enum Direction2 {
  Up = 'up',
  Down = 'down',
  Left = 'left',
  Right = 'right',
}

console.log('Direction2.Left ===', Direction2.Left);

// Objects

const book: {
  id: number;
  title: string;
  year: number;
} = {
  id: 999,
  title: 'Book 99',
  year: 99,
  // category: 'tech'
};

// sukuriam tipa objektui
type Book = {
  id: number;
  title: string;
  year: number;
};

const book2: Book = {
  id: 77,
  title: 'Book 77',
  year: 1977,
};

// Type assertion
let uId: any = 1;
// uId = true;
// sukurti customerId kuris bus tos pacios reiksmes kaip uId bet skaicius
let customerId = <number>uId;
// arba
let customerId1 = uId as number;
// customerId1 = true; // err

// Funkcijos  ============================================================

function addNum(num1: number, num2: number): number {
  // return 'sss';
  return num1 + num2;
}

console.log(addNum(5, 5));
// console.log(addNum(5)); err

function lg(msg: string | number): void {
  console.log(msg);
}

lg('hello');
lg(55);
// lg(true);
