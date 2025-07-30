// 1. Базовые преобразования
const text = " JavaScript is AWESOME ";
const upperText = text.trim().toUpperCase();
console.log(`${upperText}`);

// 2. Извлечение подстрок
const [year, month, day] = "2024-07-30".split("-");
console.log(`Год: ${year} / Месяц: ${month} / День: ${day}`);

// 3. Поиск и замена
const loveJS = "Я люблю JavaScript! Я люблю это дело ";
const result = loveJS
  .replace("JavaScript", "программирование")
  .replace(/люблю/g, "обожаю");
console.log(result);

// 4. Работа с разделителями
const fruits = "яблоки,груши,виноград"
  .trim()
  .toUpperCase()
  .split(",")
  .join(" | ");
console.log(fruits);

// 5. Проверка содержимого
const email = "example@mail.com";
console.log(email.includes("@"));       // true
console.log(email.endsWith(".com"));    // true

// 6. Маскирование данных
const card = "1234567812345678";
const hide = `${card.slice(0, 4)} **** **** ${card.slice(-4)}`;
console.log(hide);

// 7. Анализ строки
const word = "JavaScript";
console.log(word.length);
console.log(word.at(0));
console.log(word.at(-1));
console.log(word.at(Math.floor(word.length / 2)));
