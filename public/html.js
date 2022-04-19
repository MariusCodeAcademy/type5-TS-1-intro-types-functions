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
formEl.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log('js is in control');
    // return 5; err void
});
