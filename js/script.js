// 1. Проверка возраста
console.log("\n1. Проверка возраста");
const age = Number(prompt("Возраст:")?.trim());
alert(!Number.isFinite(age) ? "Ошибка ввода" : age < 18 ? "Доступ запрещён" : "Доступ разрешён");
console.log(!Number.isFinite(age) ? "Ошибка ввода" : age < 18 ? "Доступ запрещён" : "Доступ разрешён");

// 2. Чётное или нечётное
console.log("\n2. Чётное или нечётное");
const num = Number(prompt("Число:")?.trim());
alert(Number.isFinite(num) ? `${num} → ${num % 2 === 0 ? "чётное" : "нечётное"}` : "Ошибка ввода");
console.log(Number.isFinite(num) ? `${num} → ${num % 2 === 0 ? "чётное" : "нечётное"}` : "Ошибка ввода");

// 3. Калькулятор
console.log("\n3. Калькулятор");
const [a, op, b] = [
  Number(prompt("Первое число:")?.trim()),
  prompt("Оператор (+ - * /):")?.trim(),
  Number(prompt("Второе число:")?.trim())
];

if (!["+", "-", "*", "/"].includes(op) || !Number.isFinite(a) || !Number.isFinite(b)) {
  alert("Ошибка ввода");
  console.log("❌ Ошибка: некорректные данные");
} else {
  let calc;
  switch (op) {
    case "+": calc = a + b; break;
    case "-": calc = a - b; break;
    case "*": calc = a * b; break;
    case "/": calc = b ? a / b : "Деление на 0"; break;
  }
  const result = `${a} ${op} ${b} = ${calc}`;
  alert(result);
  console.log(`${result}`);
}

// 4. Обработка строки
console.log("\n4. Обработка строки");
const str = prompt("Введите строку:")?.trim();
console.log(!str ? "Пусто" : str.length > 10 ? str.slice(0, 5) + "*".repeat(str.length - 5) : str.toUpperCase());

// 5. Время суток
console.log("\n5. Время суток");
const day = Number(prompt("Час (0–23):")?.trim());
alert(day < 0 || day > 23 ? "Ошибка" : day < 6 ? "Ночь" : day < 12 ? "Утро" : day < 18 ? "День" : "Вечер");
console.log(day < 0 || day > 23 ? "Ошибка" : day < 6 ? "Ночь" : day < 12 ? "Утро" : day < 18 ? "День" : "Вечер");

// 6. Проверка email
console.log("\n6. Проверка email");
const email = prompt("Введите e-mail:")?.trim();
alert(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? "Верный формат" : "Ошибка");
console.log(`${email} ${/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? "✅" : "❌ некорректный email"}`);

// 7. Палиндром
console.log("\n7. Палиндром");
const palindrome = prompt("Введите слово:")?.toLowerCase().replace(/[^a-zа-яё0-9]/gi, "");
console.log(palindrome
  ? `${palindrome} ${palindrome === [...palindrome].reverse().join("") ? "true" : "false"}`
  : "Пусто");
