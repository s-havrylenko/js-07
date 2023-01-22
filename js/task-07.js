/*
Напиши скрипт, який реагує на зміну значення input#font - size - control(подія input) і змінює
інлайн - стиль span#text, оновлюючи властивість font - size.В результаті, перетягуючи повзунок,
буде змінюватися розмір тексту.
*/

const inputRef = document.querySelector('input');
const textSpanRef = document.querySelector('#text');
  
console.log(inputRef);
console.log(inputRef.max);
console.log(textSpanRef.textContent);

function changeFontSize(event) {
  textSpanRef.style.fontSize = `${event.currentTarget.value}px`
  console.log(event.currentTarget.value);
};

inputRef.addEventListener('input', changeFontSize);
