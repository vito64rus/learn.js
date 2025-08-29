// Уровень: Легкий
// 1. Создание и доступ. 
const student = {
  name: "Виталий",
  age: 30, 
  grade: 5, 
  class: 8,
};
console.log(`Студент ${student.name} учится в ${student.class} классе и ему ${student.age} лет`);

// 2. Изменение свойств.
student.grade = 6;
student.hobby = 'Рисование';
console.log(student);

// 3. Перебор свойств 
const car = {
  brand: 'Toyota',
  model: 'RAV4',
  year: 1998,
};

for (const key in car) {
  console.log(`${key}: ${car[key]}`);
}

// 4. Проверка свойства (if...in)
const settings = {
  theme: 'dark',
  volume: 80,
}

if ('theme' in settings) {
  console.log(settings.theme);
}
else {
  console.log('Свойство не найдено');
}

// 5. Поиск в массиве объектов (цикл for)
const movies = [
  {title: 'Инception', director: 'Christopher Nolan', year: 2010},
  {title: 'The Matrix', director: 'Lana Wachowski', year: 1999},
  {title: 'Interstellar', director: 'Christopher Nolan', year: 2014}
];

for (let i = 0; i < movies.length; i++) {
  if (movies[i].year < 2005) {
    console.log(`${movies[i].year} - ${movies[i].title}`);
  }
}

// 6. Подсчет элементов по условию (цикл for)
const countNolan = 'Christopher Nolan';
let count = 0;

for (let i = 0; i < movies.length; i++) {
  if (movies[i].director === countNolan) {
    count++
  }
}
console.log(`${countNolan} снял ${count} фильма`);

//Уровень: Средний 
// 1. Сумма товаров в корзине
const cart = [
  {name: 'Книга', price: 15, quantity: 2}, 
  {name: 'Кофе', price: 25, quantity: 1}, 
  {name: 'Фонарик', price: 10, quantity: 3},
];

let totalAmount = 0;

for (let i = 0; i < cart.length; i++) {
  let itemAmount = cart[i].price * cart[i].quantity;
  totalAmount += itemAmount;
}
console.log(`Общая стоимость корзины ${totalAmount} руб.`);

// 2. Поиск объекта по свойству
const users =  [
  {id: 1, name: 'Alice', isOnline: true}, 
  {id: 2, name: 'Bob', isOnline: false}, 
  {id: 3, name: 'Charlie', isOnline: true},
];

let firstOnlineUser = null;

for (let i = 0; i < users.length; i++) {
  if (users[i].isOnline === true) {
    firstOnlineUser = users[i];
    break;
  }
}
console.log(firstOnlineUser);

//   3. Группировка по условию.
const animals = [
  {name: 'Кот', type: 'домашнее'}, 
  {name: 'Медведь', type: 'дикое'}, 
  {name: 'Собака', type: 'домашнее'}, 
  {name: 'Лиса', type: 'дикое'},
];

const domestic = [];
const wild = [];

for(const animal of animals) {
  if (animal.type === 'дикое') {
    wild.push(animal);
  } else {
    domestic.push(animal);
  }
}

console.log (wild);
console.log (domestic);

// 4. Поиск минимального значения.
const players = [
  {name: 'Анна', score: 85}, 
  {name: 'Борис', score: 95}, 
  {name: 'Вика', score: 76},
];

let minScore = players[0].score;
let loser = players[0];

for (const player of players) {
  if (player.score < minScore) {
    minScore = player.score;
    loser = player;
  }
}
console.log(loser);

// 5. Объединение двух массивов объектов.
const newProducts = [
  {id: 4, name: 'Чашка'}, 
  {id: 5, name: 'Блюдце'},
];

const oldProducts = [
  {id: 1, name: 'Ложка'}, 
  {id: 2, name: 'Вилка'},
];

const allProducts = [...oldProducts, ...newProducts].sort((a, b) => a.id - b.id);
console.log(allProducts);