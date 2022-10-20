"use strict";


const listCategories = document.querySelectorAll(`li.item`);
const amountCategories = `Number of categories: ${listCategories.length}`;
console.log(amountCategories);

// як варіант 
// const neArr = Array.from(document.querySelector('#categories').children);

const neArr = [...listCategories];

for (let elem of neArr) {
    let headTitle = elem.firstElementChild.textContent;
    let numberElem = elem.lastElementChild.children.length;
    console.log(`Category: ${headTitle} \n Elements: ${numberElem}`);
};


// 2 ВАРІАНТ
// neArr.forEach.call(listCategories, (element) => {
//     const title = element.querySelector('h2').innerHTML;
//     const itemsLength = element.querySelectorAll('li').length;
//     console.log(`Category: ${title} \n Elements: ${itemsLength}`);
// });


// Напиши скрипт, який:

// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного элемента li.item у спику ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).
// В результаті, в консолі будуть виведені наступні повідомлення.

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5