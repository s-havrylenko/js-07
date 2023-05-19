const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listIngredientsRef = document.querySelector('#ingredients');

// const makeIngredientsList = ingredients.map(element => {
//   const itemRef = document.createElement('li');
//   itemRef.textContent = element;
//   itemRef.classList.add('item');

//   return itemRef;
// });

// // console.log(elements);
// listIngredientsRef.append(...makeIngredientsList);


// Выполним с использованием функций 
const makeIngredientsList = ingredients => {
  return ingredients.map(ingredient => {
    const itemRef = document.createElement('li');  
    itemRef.textContent = ingredient;
    itemRef.classList.add('item');
  
    return itemRef;
  });
}

const elements = makeIngredientsList(ingredients);
listIngredientsRef.append(...elements);