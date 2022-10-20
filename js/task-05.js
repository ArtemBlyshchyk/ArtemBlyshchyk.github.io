// Завдання 5
// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), підставляє його поточне значення в span#name-output. Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

// <input type="text" id="name-input" placeholder="Please enter your name" />
// <h1>Hello, <span id="name-output">Anonymous</span>!</h1>

let inputName = document.getElementById("name-input");
// console.log(inputName);

let outputName = document.getElementById("name-output");
// console.log(outputName);

inputName.oninput = function () {
    if (inputName.value === "") {
        outputName.innerHTML = "Anonymous";
    } else {
        outputName.innerHTML = inputName.value;
    }
}



// let input = document.getElementById("name-input");
// let nameOutput = document.getElementById("name-output");

// input.oninput = function () {
//     if (input.value === '') {
//        nameOutput.innerHTML = "Anonymous";
//     } else{
//     nameOutput.innerHTML = input.value;
//     }
// }