// 1 parasyti funkcija kuri paima 2 argumentus ir grazina ju sandauga. argumentai skaiciai
// function multi(x: number, y: number): number {
//   const rezult: number = x * y;
//   return rezult;
// }
// console.log(multi(10, 50));

// 2 parasyti funkcija kuri paima skaiciu pvz 3.25 ir grazina stringa $3.25
function makeCurrency(num: number): string {
  return `$${num}`;
}
const c1: string = makeCurrency(4.58);
console.log('c1 ===', c1);

// 3 parasyti tipa masyvui kuriame bus stringas, skaicius ir boolean
const val1: [string, number, boolean] = ['James', 45, false];
console.log('val1 ===', val1);

// 4 parasyti tipa saraso elementui kuris turi keturias pagrindines matematines operacijas 'add', 'subtract', 'divide', 'multiply'
enum MathOps {
  add,
  subtract,
  divide,
  multiply,
}
console.log(MathOps.divide);

// 5 parasyti tipa objektui pavadinimu Item kuris turi id: string, title: string, isOnSale: boolean, price: number, sukurti 3 objektus kintamuosiuose.
type Item = {
  id: string;
  title: string;
  isOnSale: boolean;
  price: number;
};
const it1: Item = {
  id: 'abc',
  title: 'Shoes',
  isOnSale: true,
  price: 59.99,
};
const it2: Item = {
  id: 'abc11',
  title: 'Ball',
  isOnSale: false,
  price: 99.99,
};

// 5.1 sukurti 3 kinamuosius masyve
const itemsArr: Item[] = [
  it1,
  it2,
  {
    id: 'sdsd',
    title: 'Hat',
    isOnSale: true,
    price: 125,
  },
];

// 6. parasyti funkcija kuri argumentu ima skaiciu masyva. pvz
// [1, 2, 3, 4]
// ir grazina string tipo masyva
// ['id_1', 'id_2', 'id_3', 'id_4']
function makeStringArr(arr: number[]): string[] {
  return arr.map((sk: number) => 'id_2');
}
console.log(makeStringArr([1, 2, 3, 4]));

// 7. parasyti funkcija kuri argumentu ima skaiciu arba string masyva ir:
// 7.1  grazina skaiciu masyva
// 7.2  grazina string masyva
// 7.3  grazina skaiciu vidurki

// 8 parasyti funkcija prnt(msg) kuri ima stringa ir atspausina su console
// prnt('Vilnius is capital') => Vilnius is capital. Printed by prnt

// 9. is formos paimti visus inputus ir textarea, ir sudeti i viena objekta
// aprasyti kokio tipo objektas tai bus su 'type'
