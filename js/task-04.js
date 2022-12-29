/*
Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати 
його значення на одиницю.

<div id="counter">
  <button type="button" data-action="decrement">-1</button>
  <span id="value">0</span>increment
  <button type="button" data-action="increment">+1</button>
</div>

Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
Оновлюй інтерфейс новим значенням змінної counterValue.
*/


const elemRef = document.querySelectorAll('#counter button');
const spanRef = document.querySelector('#value');
// const btnIncrementRef = document.querySelector("[data-action='increment']");
// const btnDecrementRef = document.querySelector("[data-action='decrement']");

let counterValue = 0;

const increment = () => {
  counterValue += 1;
  spanRef.textContent = counterValue;
};

const decrement = () => {
  counterValue -= 1;
  spanRef.textContent = counterValue;
};

elemRef[0].addEventListener('click', decrement);
elemRef[1].addEventListener('click', increment);

// btnIncrementRef.addEventListener('click', increment);
// btnDecrementRef.addEventListener('click', decrement);