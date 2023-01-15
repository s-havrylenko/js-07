/*
Напиши скрипт, який під час набору тексту в інпуті input#name - input(подія input), підставляє його поточне 
значення в span#name - output.Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

<input type="text" id="name-input" placeholder="Please enter your name" />
<h1>Hello, <span id="name-output">Anonymous</span>!</h1>
*/


const inputRef = document.querySelector('#name-input');
const titleRef = document.querySelector('#name-output');

inputRef.addEventListener('input', onInputChange);

function onInputChange(event) {
  console.log(event.currentTarget.value);
  if (event.currentTarget.value != '') {
    titleRef.textContent = event.currentTarget.value;
  } else {  
    titleRef.textContent = 'Anonymous';
  };
};