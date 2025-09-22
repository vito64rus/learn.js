//Array.map
Array.prototype.myMap = function (callback) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    const currentItem = this[i];
    const newViewItem = callback(currentItem, i, this);
    result.push(newViewItem);
  }
  return result;
};

console.group("📁 Array.map");
// 1. Дан массив чисел [1, 2, 3, 4, 5]. Создайте новый массив, где каждый элемент умножен на 2.
const arr1 = [1, 2, 3, 4, 5];

const doubleNumbers = (numbers) => numbers.myMap((num) => num * 2);
const result = doubleNumbers(arr1);

console.log('Задание 1', result);

// 2. Дан массив строк ["apple", "banana", "cherry"]. Создайте новый массив с длинами каждой строки.
const arr2 = ["apple", "banana", "cherry"];

const getStringLengths = (strings) => strings.myMap((str) => str.length);

console.log('Задание 2', getStringLengths(arr2));

// 3. Дан массив объектов [{name: "John", age: 25}, {name: "Anna", age: 30}]. Создайте массив только из имен.
const arr3 = [
  { name: "John", age: 25 },
  { name: "Anna", age: 30 },
];
const onlyNames = (people) => people.myMap((person) => person.name);

console.log('Задание 3', onlyNames(arr3));

// 4. Дан массив температур в Цельсиях [0, 15, 25, 30, -5]. Преобразуйте в Фаренгейты (F = C × 9/5 + 32).
const arr4 = [0, 15, 25, 30, -5];

const toFahrenheit = (f) => (f * 9) / 5 + 32;
const convertingTemp = (temps) => temps.myMap(toFahrenheit);

console.log('Задание 4', convertingTemp(arr4));

// 5. Дан массив чисел [1, 4, 9, 16]. Создайте массив, где каждый элемент - это объект {value: число, square: квадрат_числа}.
const arr5 = [1, 4, 9, 16];

const createSquareObj = (num) => ({ value: num, square: num ** 2 });
const getSquares = (numbers) => numbers.myMap(createSquareObj);

console.log('Задание 5', getSquares(arr5));

// 6. Дан массив строк ["hello", "world", "javascript"]. Создайте массив, где каждая строка начинается с заглавной буквы.
const arr6 = ["hello", "world", "javascript"];

const firstToUpper = (str) => str.charAt(0).toUpperCase() + str.slice(1);
const capital = (strings) => strings.myMap(firstToUpper);

console.log('Задание 6', capital(arr6));

// 7. Дан массив чисел [1, 2, 3, 4, 5]. Создайте массив, где четные числа умножены на 2, а нечетные остаются без изменений.
const arr7 = [1, 2, 3, 4, 5];

const isEven = (num) => num % 2 === 0;
const doubleIfEven = (num) => (isEven(num) ? num * 2 : num);
const modifyNumbers = (numbers) => numbers.myMap(doubleIfEven);

console.log('Задание 7', modifyNumbers(arr7));

// 8. Дан массив [1, "2", 3, "4", 5]. Преобразуйте все строки в числа, оставив числа без изменений.
const arr8 = [1, "2", 3, "4", 5];

const convertingToNumberIfString = (item) =>
  typeof item === "string" ? +item : item;
const newArray = (array) => array.myMap(convertingToNumberIfString);

console.log('Задание 8', newArray(arr8));

// 9. Дан массив объектов продуктов [{name: "apple", price: 1.2}, {name: "banana", price: 0.8}]. Добавьте каждому продукту поле discountedPrice со скидкой 10%.
const arr9 = [
  { name: "apple", price: 1.2 },
  { name: "banana", price: 0.8 },
];

const createDiscounter = (discountRate = 0.1) => 
  (product) => ({
    ...product,
    discountedPrice: product.price * (1 - discountRate),
  });

const discountProducts = (products, discountRate = 0.1) => // тут можно менять скидку 
  products.myMap(createDiscounter(discountRate));

console.log('Задание 9', discountProducts(arr9));
console.groupEnd();

