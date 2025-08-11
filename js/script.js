// Работа с числами: 

// 1. Вывод чисел от 1 до N 
const N = Number(prompt("1. Вывод чисел от 1 до N. \nВведите число N:").trim());
const numbersArray = [];
for (let i = 1; i <= N; i++) {
  numbersArray.push(i);
}
console.log("1. Вывод чисел от 1 до N:", numbersArray);

// 2. Сумма чисел от 1 до N
let sumN = Number(prompt("2. Сумма чисел от 1 до N: \nВведите число N:").trim());
let sum = 0;
for (let i = 1; i <= sumN; i++) {
  sum += i;
}
console.log("2. Сумма чисел от 1 до N:", sum);

// 3. Четные числа
const evenNumbers = [];
for (let i = 0; i <= 100; i += 2) {
  evenNumbers.push(i);
}
console.log("3. Чётные числа:", evenNumbers); 

// 4. До первого четного числа
let num;
do {
  num = Number(prompt("4. До первого четного числа. \nВведите число:").trim());
} while (num % 2 !== 0);
console.log("4. До первого четного числа:", num);

// 5. Среднее арифметическое
let averageNumbers = [];
let avgInput;
do {
  avgInput = prompt("5. Среднее арифметическое. \nВведите число или 'стоп':").trim();
  if (avgInput !== "стоп") averageNumbers.push(Number(avgInput));
} while (avgInput !== "стоп");
let average = averageNumbers.length > 0 
  ? averageNumbers.reduce((a, b) => a + b, 0) / averageNumbers.length
  : 0;
console.log("5. Среднее арифметическое:", average);

// 6. Максимальное число
let maxNumbers = [];
let maxInput = "";
while (maxInput !== "стоп") {
  maxInput = prompt("6. Максимальное число. \nВведите число или 'стоп':").trim();
  if (maxInput !== "стоп") maxNumbers.push(Number(maxInput));
}
const maxValue = maxNumbers.length > 0 ? Math.max(...maxNumbers) : "Нет чисел";
console.log("6. Максимальное число:", maxValue);

// Работа со строками: 

// 7. Перевернуть строку
let str = prompt("7. Перевернуть строку. \nВведите строку:").trim();
let reversed = "";
for (let i = 0; i < str.length; i++) {
  reversed = str[i] + reversed;
}
console.log(`7. Перевернуть строку: ${str} → ${reversed}`);

// 8. Подсчет гласных
const vowels = "aeiouAEIOUаеёиоуыэюяАЕЁИОУЫЭЮЯ";
const text = prompt("8. Подсчет гласных. \nВведите строку:").trim();
let count = 0;
for (let char of text) {
  if (vowels.includes(char)) {
    count++;
  }
}
console.log(`8. Подсчет гласных: ${text} → ${count}`);

// 9. Замена символов
let replaceStr = prompt("9. Замена символов.\nВведите строку с A/a:").trim();
let newStr = replaceStr.replaceAll(/[AaАа]/g, '!');
console.log("9. Замена символов:", newStr);