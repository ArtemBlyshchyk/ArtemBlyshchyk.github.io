// Завдання 7
// Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) і змінює інлайн-стиль span#text, оновлюючи властивість font-size. В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

// <input id="font-size-control" type="range" min="16" max="96" />
// <br />
// <span id="text">Abracadabra!</span>

const inputHref = document.getElementById('font-size-control');

const spanHref = document.getElementById('text');
inputHref.oninput = function() {
  spanHref.style.fontSize = inputHref.value + "px"
};




// let controlFont = document.getElementById("font-size-control");

// let text = document.getElementById("text");

// controlFont.oninput = function() {
//   text.style.fontSize = controlFont.value + "px";
// };