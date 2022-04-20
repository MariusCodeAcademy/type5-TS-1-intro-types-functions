add(5, 10);
// addE(5, 10); // err
// addA(5, 10); // err

// function signature
let addE: (x: number, y: number) => number;

// anonymus function expression (not hoisted)
addE = function (a, b) {
  return a + b;
};

// addE(5, '5'); // err

// arrow function (not hoisted)
addE = (x: number, y: number): number => {
  return x + y;
};

// function declaration (hoisted)
function add(x: number, y: number): number {
  return x + y;
}

// function signature
let greetMe: (myName: string) => void;

greetMe = (myName) => {
  console.log(`hello ${myName}`);
  return 1; // should be err but not
};

greetMe = (myName) => console.log(`hello ${myName}`);

// greetMe('James', 1); // err
greetMe('Jill');
