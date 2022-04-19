console.log('html.js');

// const btn1El = document.querySelector('button')!;

// if (btn1El) {
//   console.log('btn1El ===', btn1El.textContent);
// }

// nusakom kokio tipo el yra selektinamas
const btn1El = document.getElementById('btn1') as HTMLButtonElement | null;

console.log('btn1El ===', btn1El?.textContent);

btn1El?.addEventListener('click', (): void => {
  console.log('btn clicked');
});

const formEl: HTMLFormElement = document.forms[0];

formEl.addEventListener('submit', (event: SubmitEvent): void => {
  event.preventDefault();
  console.log('js is in control');
  // return 5; err void
});
