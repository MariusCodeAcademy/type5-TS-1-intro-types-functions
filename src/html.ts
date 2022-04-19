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
const usernameEl: HTMLInputElement | null = document.getElementById(
  'username'
) as HTMLInputElement | null;
const ageEl = document.getElementById('age') as HTMLInputElement | null;

formEl.addEventListener('submit', (event: SubmitEvent): void => {
  event.preventDefault();
  console.log('js is in control');
  // return 5; err void
  console.log(usernameEl?.value);
  // multi
  if (!ageEl) return;
  const ageValue = ageEl.valueAsNumber;
  const ageRezult = multi(ageValue, 5);
  console.log('ageRezult ===', ageRezult);
});

function multi(x: number, y: number): number {
  const rezult: number = x * y;
  return rezult;
}

// gauti age input reiskme ir panaudoti multi funkcija kad padauginti age is 5

//
