// Завдання 6
// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), перевіряє його вміст щодо правильної кількості введених символів.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Please enter 6 symbols"
// />

// Яка кількість смиволів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.

// #validation-input {
//   border: 3px solid #bdbdbd;
// }

// #validation-input.valid {
//   border-color: #4caf50;
// }

// #validation-input.invalid {
//   border-color: #f44336;
// }

const inputHreff = document.getElementById('validation-input');

inputHreff.addEventListener('blur', event => {
  if(event.currentTarget.value.length === Number(inputHreff.dataset.length)) {
      inputHreff.classList.remove('invalid')
      inputHreff.classList.add('valid')
    } else {
      inputHreff.classList.add('invalid')
      inputHreff.classList.remove('valid')
    }
  });


// const inputEl = document.querySelector('#validation-input');

// // console.log(inputEl.dataset.length); //6

// inputEl.addEventListener('blur', event => {
//   event.preventDefault();
//   // console.log(event);
//   // console.log(event.currentTarget.value);
//   // console.log(event.currentTarget.value.length);
//   if (event.currentTarget.value.length === Number(inputEl.dataset.length)) {
//     if (inputEl.classList.contains('invalid')) {
//       inputEl.classList.remove('invalid');
//     }
//     inputEl.classList.add('valid');
//     // console.log(inputEl.classList);
//   }

//   if (event.currentTarget.value.length !== Number(inputEl.dataset.length)) {
//     if (inputEl.classList.contains('valid')) {
//       inputEl.classList.remove('valid');
//     }
//     inputEl.classList.add('invalid');
//     // console.log(inputEl.classList);
//   }
// });
