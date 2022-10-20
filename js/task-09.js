// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }

// Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль по кліку на button.change-color і виводить значення кольору в span.color. 

// <div class="widget">
//   <p>Background color: <span class="color">-</span></p>
//   <button type="button" class="change-color">Change color</button>
// </div>

// Для генерування випадкового кольору використовуйте функцію getRandomHexColor

const btnColorHref = document.querySelector('.change-color');
// console.log(btnColorHref);
const spanColorHref = document.querySelector('.color');
// console.log(spanColorHref);
const bodyColorHref = document.querySelector('body');
console.log(bodyColorHref);
// const divHref2 = document.querySelector('.widget');
// const divHref = document.getElementsByClassName('widget');
// console.log(divHref);
// const divHref1 = document.querySelector('.widget > p');
// console.log(divHref1);




btnColorHref.addEventListener('click', () => getRandomHexColor());


function getRandomHexColor(event) {
  const newColor = "#" + Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)
    .toUpperCase();
    // console.log(newColor);
    spanColorHref.textContent = newColor;
    bodyColorHref.style.backgroundColor = newColor;
    // divHref[0].style.backgroundColor = newColor;
    // divHref1.style.backgroundColor = newColor;
    // divHref2.firstElementChild.style.backgroundColor = newColor;
};





// Вихідний код
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }