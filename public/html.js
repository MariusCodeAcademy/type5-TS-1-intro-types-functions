"use strict";
console.log('html.js');
// const btn1El = document.querySelector('button')!;
// if (btn1El) {
//   console.log('btn1El ===', btn1El.textContent);
// }
// nusakom kokio tipo el yra selektinamas
const btn1El = document.getElementById('btn1');
console.log('btn1El ===', btn1El === null || btn1El === void 0 ? void 0 : btn1El.textContent);
btn1El === null || btn1El === void 0 ? void 0 : btn1El.addEventListener('click', () => {
    console.log('btn clicked');
});
const formEl = document.forms[0];
const usernameEl = document.getElementById('username');
const ageEl = document.getElementById('age');
formEl.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log('js is in control');
    // return 5; err void
    console.log(usernameEl === null || usernameEl === void 0 ? void 0 : usernameEl.value);
    // multi
    if (!ageEl)
        return;
    const ageValue = ageEl.valueAsNumber;
    const ageRezult = multi(ageValue, 5);
    console.log('ageRezult ===', ageRezult);
});
function multi(x, y) {
    const rezult = x * y;
    return rezult;
}
// gauti age input reiskme ir panaudoti multi funkcija kad padauginti age is 5
//
