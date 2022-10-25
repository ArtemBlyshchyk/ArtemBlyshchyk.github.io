const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// const list = document.querySelector("#ingredients");

// const ingredientsList = ingredients.forEach((ingredient) => {
//   let listItem = document.createElement("li");
//   listItem.classList.add("item");
//   listItem.textContent = ingredient;
//   list.appendChild(listItem);
// });
// ЯК ВАРІАНТ МОЖНА ДОБАВИТИ ЧЕРЕЗ ОДНУ ОПЕРАЦІЮ ЗА ДОПОМОГОЮ new DocumentFragment()
// const list = document.querySelector("#ingredients");
// let newPartOfCode = new DocumentFragment();

// const ingredientsList = ingredients.forEach((ingredient) => {
//   let listItem = document.createElement("li");
//   listItem.classList.add("item");
//   listItem.innerHTML = ingredient;
//   newPartOfCode.appendChild(listItem);
// });
// let ul = list.appendChild(newPartOfCode);
// console.log(list.appendChild(newPartOfCode));


const list = document.querySelector("#ingredients");

// const ingredientsList = ingredients.map((ingredient) => {
//   let listItem = document.createElement("li");
//   listItem.classList.add("item");
//   listItem.textContent = ingredient;
//   return listItem;
// });
// console.log(ingredientsList);

// list.append(...ingredientsList);

// Зробимо через функцію
const listIngredients = ingredient => {
  return ingredients.map((ingredient) => {
    let listItem = document.createElement("li");
    listItem.classList.add("item");
    listItem.textContent = ingredient;
    return listItem;
  });
}

  const ingredientsList = listIngredients(ingredients);
  console.log(ingredientsList);

  list.append(...ingredientsList);

// Завдання 2
// HTML містить порожній список ul#ingredients.

// <ul id="ingredients"></ul>

// JavaScript містить масив рядків.

// const ingredients = [
//   "Potatoes",
//   "Mushrooms",
//   "Garlic",
//   "Tomatos",
//   "Herbs",
//   "Condiments",
// ];

// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.
