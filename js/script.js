// Уровень: Легкий (Основы синтаксиса, параметры, возврат значений)
// 1. Приветствие:
const greet = (name) => `Привет, ${name}!`;

console.log(greet("Иван"));

// 2. Сумма двух чисел:
const sumTwoNumbers = (a, b) => a + b;

console.log(sumTwoNumbers(5, 3)); // 8

// 3. Проверка на четность:
const isEven = (num) => num % 2 === 0;

console.log(isEven(2)); // true
console.log(isEven(3)); // false

// 4. Случайное число:
const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

console.log(getRandomNumber(1, 64));

//  5. Форматирование строки: 
const formatName = (firstName, lastName) => `${lastName} ${firstName}`;

console.log(formatName("Первое", "Второе")); 

// 6. Поиск индекса элемента (пишем собственный метод findIndex):
const findIndex = (arr, value) => {
  for (let i = 0; i < arr.length; i++) if (arr[i] === value) return i;
  return -1;
};

console.log(findIndex([1, 2, 3, 4, 5], 5));

// Уровень: Средний (Работа с массивами, объектами, области видимости)
// 1. Поиск в массиве (использовать только цикл for):
const findInArray = (arr, value) => {
  for (let i = 0; i < arr.length; i++) if (arr[i] === value) return true;
  return false;
};

console.log(findInArray([1, 2, 3, 4, 5], 6));

//  2. Калькулятор итоговой суммы (использовать только цикл for):
const calculateTotal = (cart) => {
  let totalSum = 0;
  for (const item of cart) totalSum += item.price * item.quantity; 
  return totalSum;
};
const cart = [                           // Проверка
  {price: 50, quantity: 3},
  {price: 100, quantity: 2},
  {price: 200, quantity: 1},
];                                                                                 

console.log(calculateTotal(cart));      // 550

// 3. Поиск самого длинного слова:     
const findLongestWord = (words) => {
  let longestWord = '';
  for (let i = 0; i < words.length; i++) 
    if (words[i].length > longestWord.length) longestWord = words[i];
  return longestWord;
};

console.log(findLongestWord(['Волга', 'Лес', 'Саратов']));

//  4. Сумма всех чисел:
const sumAll = (...numbers) => {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
};

console.log(sumAll(1, 2, 3));

// 5. Валидатор пароля:
const validatePassword = (password) => {
  if (password.length <= 6) return false;
  for (let i = 0; i < password.length; i++) 
    if (password[i] >= '0' && password[i] <= '9') return true;
  return false;
};

console.log(validatePassword('qwerty12345'));

// 6. Разворот строки:
const reverseString = (str) => {
  let reverse = '';
  for (const char of str) reverse = char + reverse;
  return reverse;
};

console.log(reverseString('azab'));

//  7. Уникальные значения массива:
const getUniqueValues = (arr) => {
  const unique = [];
  for ( let i = 0; i < arr.length; i++) {
    if (!unique.includes(arr[i])) {
      unique.push(arr[i]);
    }
  }
  return unique;
};

console.log(getUniqueValues([1, 1, 2, 3, 4, 4, 5, 6, 7]));

// 8. Трансформация массива в объект:
const arrayToObject = (arr) => {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    const [key, value] = arr[i];
    obj[key] = value;
  }
  return obj;
}

console.log(arrayToObject([['car', 'toyota'], ['age', 30]]));

// 9. Фильтрация по нескольким условиям:
const filterUsers = (users, filters) => {
  return users.filter(user => {
    for (const key in filters) {
      if (user[key] !== filters[key]) {
        return false;
      }
    }
    return true;
  });
};

const users = [
  { name: 'Ivan', age: 31, city: 'Saratov' },
  { name: 'Oleg', age: 30, city: 'Omsk' },
  { name: 'Anastasiya', age: 30, city: 'Moscow' },
];

console.log(filterUsers(users, { age: 31 }));

// 10. Разница между двумя массивами:
const arrayDiff = (arr1, arr2) => {
  const result = [];
  for (let i = 0; i < arr1.length; i++) {
    if (!arr2.includes(arr1[i])) {
      result.push(arr1[i]);
    }
  }
  return result;
}

console.log(arrayDiff([1, 2, 3, 4], [4, 5, 6]));                    // [1, 2, 3]

