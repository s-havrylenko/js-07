/*
HTML містить список категорій ul#categories.

Напиши скрипт, який:

Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку елемента
(тегу < h2 >) і кількість елементів в категорії(усіх < li >, вкладених в нього).
В результаті, в консолі будуть виведені наступні повідомлення.

Number of categories: 3

Category: Animals
Elements: 4

Category: Products
Elements: 3

Category: Technologies
Elements: 5
*/


// Вариант 1
// const itemRef = document.querySelectorAll('.item');
// console.log(`Number of categories: ${itemRef.length}`);

// console.log(`Category: ${itemRef[0].firstElementChild.textContent}`);
// console.log(`Elements: ${itemRef[0].lastElementChild.children.length}`);

// console.log(`Category: ${itemRef[1].firstElementChild.textContent}`);
// console.log(`Elements: ${itemRef[1].lastElementChild.children.length}`);

// console.log(`Category: ${itemRef[2].firstElementChild.textContent}`);
// console.log(`Elements: ${itemRef[2].lastElementChild.children.length}`);


// Вариант 2
const itemRef = document.querySelectorAll('#categories');
console.log(`Number of categories: ${itemRef.children.length}`);

const titleRef = document.querySelectorAll('h2');
const listRef = document.querySelectorAll('.item ul');

console.log(`Category: ${itemRef[0].textContent}`);
console.log(`Elements: ${itemRef[0].children.length}`);

console.log(`Category: ${itemRef[1].textContent}`);
console.log(`Elements: ${itemRef[1].children.length}`);

console.log(`Category: ${itemRef[2].textContent}`);
console.log(`Elements: ${itemRef[2].children.length}`);