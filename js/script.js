// Уровень: Легкий
// 1. Сумма всех элементов массива
const integerArray = [1, 2, 3, 4, 5];

// Без метода (формула Гаусса, если представить, что только для последовательных чисел от 1 до N)
const arrayLength = integerArray.length;
const sumByGauss = arrayLength * (arrayLength + 1) / 2;
console.log("1. Найти сумму всех элементов массива. \nБез метода:", sumByGauss);

// С методом reduce
const sumWithReduce = integerArray.reduce((sum, num) => sum + num, 0);
console.log("С методом (reduce):", sumWithReduce);

// 2. Максимальный элемент массива
const numberArray = [3, 7, 2, 9, 5];

// Без метода 
let maxWithoutMethod = numberArray[0];
for (let currentNumber of numberArray) {
  if (currentNumber > maxWithoutMethod) {
    maxWithoutMethod = currentNumber;
  }
}
console.log("2. Найти максимальный элемент в массиве. \nБез метода:", maxWithoutMethod);

// С методом Math.max + spread
const maxWithMath = Math.max(...numberArray);
console.log("С методом (Math.max + spread):", maxWithMath);

// 3. Проверить наличие элемента
const fruitArray = ['apple', 'banana', 'orange'];
const targetFruit = 'banana';

// Без метода 
let isFoundWithoutMethod = false;
for (let currentFruit of fruitArray) {
  if (currentFruit === targetFruit) {
    isFoundWithoutMethod = true;
    break;
  }
}
console.log(`3. Проверить, есть ли элемент в массиве\n${isFoundWithoutMethod ? "Найден элемент" : "Элемент не найден"}`);

// С методом includes
console.log(fruitArray.includes(targetFruit) ? "Найден элемент" : "Элемент не найден");

// 4. Перевернуть массив
const originalArray = [1, 2, 3, 4, 5];

// Без метода 
const reversedWithoutMethod = [];
for (let i = originalArray.length - 1; i >= 0; i--) {
  reversedWithoutMethod.push(originalArray[i]);
}
console.log("4. Перевернуть массив. \nБез метода:", reversedWithoutMethod);

// С методом reverse 
const reversedWithMethod = [...originalArray].reverse();
console.log("С методом (reverse):", reversedWithMethod);


// Уровень: Средний
// 1. Посчитать количество определённого элемента в массиве
const numbersArray = [1, 2, 3, 4, 2, 5];
const target = 2;

// Без метода 
let countWithoutMethod = 0;
numbersArray.forEach(num => { if (num === target) countWithoutMethod++; });
console.log("1. Посчитать количество элемента (2) в массиве.\nБез метода:", countWithoutMethod);

// С методом filter 
const countWithFilter = (numbersArray.length > 0) ? numbersArray.filter(num => num === target).length : 0;
console.log("С методом (filter + length):", countWithFilter);

// 2. Найти среднее значение элементов массива
const valuesArray = [10, 20, 30, 40];

// Без метода 
let sumWithoutMethod = 0;
for (const value of valuesArray) sumWithoutMethod += value;
const averageWithoutMethod = valuesArray.length ? sumWithoutMethod / valuesArray.length : 0;
console.log("2. Найти среднее значение элементов массива.\nБез метода:", averageWithoutMethod);

// С методом reduce
const averageWithReduce = valuesArray.length ? valuesArray.reduce((sum, num) => sum + num, 0) / valuesArray.length : 0;
console.log("С методом (reduce):", averageWithReduce);

// 3. Отфильтровать четные числа
const mixedNumbersArray = [1, 2, 3, 4, 5, 6];

// Без метода 
const evenWithoutMethod = [];
for (const num of mixedNumbersArray) if (num % 2 === 0) { evenWithoutMethod.push(num); }
console.log("3. Отфильтровать четные числа.\nБез метода:", evenWithoutMethod);

// С методом filter
const evenWithFilter = mixedNumbersArray.filter(num => num % 2 === 0);
console.log("С методом (filter):", evenWithFilter);

// 4. Удвоить каждый элемент массива
const originalsArray = [1, 3];

// Без метода 
const doubledWithoutMethod = [];
for (const num of originalsArray) doubledWithoutMethod.push(num * 2);
console.log("4. Удвоить каждый элемент массива.\nБез метода:", doubledWithoutMethod);

// С методом map
const doubledWithMap = originalsArray.map(num => num * 2);
console.log("С методом (map):", doubledWithMap);

