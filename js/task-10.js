/*
Напиши скрипт створення і очищення колекції елементів. Користувач вводить кількість елементів в input і натискає 
кнопку Створити, після чого рендериться колекція. Натисненням на кнопку Очистити, колекція елементів очищається.

<div id="controls">
  <input type="number" min="1" max="100" step="1" />
  <button type="button" data-create>Create</button>
  <button type="button" data-destroy>Destroy</button>
</div>

<div id="boxes"></div>

Створи функцію createBoxes(amount), яка приймає один параметр - число. Функція створює стільки <div>, 
скільки вказано в amount і додає їх у div#boxes.

Розміри найпершого <div> - 30px на 30px.
Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
Всі елементи повинні мати випадковий колір фону у форматі HEX. Використовуй готову функцію getRandomHexColor для
отримання кольору.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.
*/


const inputDataRef = document.querySelector('input');
const btnCreateRef = document.querySelector('[data-create]');
const btnDestroyRef = document.querySelector('[data-destroy]');
const divBoxesRef = document.querySelector('#boxes');

console.log(inputDataRef, btnCreateRef, btnDestroyRef, divBoxesRef);

btnCreateRef.addEventListener('click', onCreatBtnClick);
btnDestroyRef.addEventListener('click', onDestroyBtnClick);
inputDataRef.addEventListener('input', onInputChange);

let divList = [];
let divsSize = 30;

function createBoxes(amount) {  
  // console.log(amount)
  for (let i = 0; i < amount; i += 1) {    
    divList.push("div");
  };   
};

function onCreatBtnClick(event) { 
  const makeDivMarkup = divList.map(element => {
    const divRef = document.createElement(element);
    divRef.classList.add('innerbox');

    const getRandomColor = getRandomHexColor();
    divRef.style.backgroundColor = getRandomColor;

    const divSize = getDivSize();
    divRef.style.width = `${divSize}px`
    divRef.style.height = `${divSize}px`

    divBoxesRef.append(divRef);
  });
};

function onDestroyBtnClick(event) {
  divBoxesRef.innerHTML = '';
};

function onInputChange(event) {
  const inputData = event.currentTarget.value;
  createBoxes(inputData)
  // console.log(event.currentTarget.value);
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

function getDivSize() {  
  return divsSize += 10;
};