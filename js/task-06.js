/*
Напиши скрипт, який під час втрати фокусу на інпуті(подія blur), перевіряє його вміст 
щодо правильної кількості введених символів.

<input
  type="text"
  id="validation-input"
  data-length="6"
  placeholder="Please enter 6 symbols"
/>

Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.
*/

const inputRef = document.querySelector('input');
console.log(inputRef);

// function onInputBlur(event) {
//   if (event.currentTarget.value.length === Number(inputRef.dataset.length)) {
//     inputRef.setAttribute('class', 'valid')
//   } else {
//     inputRef.setAttribute('class', 'invalid')
//   }
// };



// Вариант (тернарник) 2
const onInputBlur = event => {
  (event.currentTarget.value.length === Number(inputRef.dataset.length)) ?
    inputRef.setAttribute('class', 'valid') :
    inputRef.setAttribute('class', 'invalid');
};

inputRef.addEventListener('blur', onInputBlur);