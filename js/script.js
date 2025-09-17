// Уровень: Легкий

// 1. Простой калькулятор.

const calculate = (a, b, operation) => operation(a, b);

const plus = (a, b) => a + b;
const minus = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

console.log(calculate(7, 3, plus)); // 10
console.log(calculate(7, 3, minus)); // 4
console.log(calculate(7, 3, multiply)); // 21
console.log(calculate(12, 3, divide)); // 4

// 2. Массив в квадрате.

const squareArray = (arr, callback) => {
  let newArray = [];
  for (let elem of arr) {
    newArray.push(callback(elem));
  }
  return newArray;
};

const callback = (num) => num * num;

const array = [3, 6, 7, 8, 9];
const result = squareArray(array, callback);

console.log(result); // 9 36 49 64 81

// 3. Фильтр четных чисел.
{
  const filterArray = (arr, callback) => {
    let result = [];
    for (let elem of arr) {
      if (callback(elem)) {
        result.push(elem);
      }
    }
    return result;
  };

  const evenCallback = (num) => num % 2 === 0;

  const array = [3, 6, 7, 8, 9];
  const filtered = filterArray(array, evenCallback);
  
  console.log(filtered); // 6 8
}

// 4. Форматирование текста.
{
  const formatText = (text, formatter) => {
    return formatter(text);
  };

  const toUpperCase = (str) => str.toUpperCase();
  const toLowerCase = (str) => str.toLowerCase();

  const text = "Если закрыть глаза, становится темно.";

  console.log(formatText(text, toUpperCase));
  console.log(formatText(text, toLowerCase));
}

//  Уровень: Средний.
// 1. Собственный forEach.
{
  const myForEach = (arr, callback) => {
    for (let i = 0; i < arr.length; i++) {
      callback(arr[i], i, arr);
    }
  };

  const callback = (elem, index, arr) => {
    console.log("elem:", elem, ", index:", index, ", arr:", arr);
  };

  const newArr = ["1", "2", "3"];

  myForEach(newArr, callback);
}