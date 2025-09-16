// Уровень: Легкий.

// 1. Object.keys.
let car = {
  brand: "Toyota",
  model: "Camry",
  year: 2021,
};

let keys = Object.keys(car);

console.log(keys);

// 2. Object.values.
let fruitPrices = {
  apple: 50,
  banana: 30,
  orange: 70,
};

const totalSum = Object.values(fruitPrices).reduce(
  (sum, price) => sum + price,
  0
);

console.log(totalSum); // 150.

// 3. Object.entries.
let book = {
  title: "JavaScript Basics",
  author: "Jane Doe",
  pages: 200,
};

const entries = Object.entries(book);

console.log(entries);

// 4. Подсчет количества свойств.
const countProps = (obj) => Object.keys(obj).length;
// Пример использования с помощью book (прошлое задание).
console.log(countProps(book)); // 3.

// 5. Поиск максимального значения.
let scores = {
  Alex: 100,
  Bob: 75,
  Charlie: 95,
};

const findMaxValue = (obj) => Math.max(...Object.values(obj), 0);

console.log(findMaxValue(scores)); // 100.

//  Уровень: Средний.

// 1. Сумма числовых свойств.
const sumNumValues = (obj) => {
  const values = Object.values(obj);
  let sum = 0;
  for (let i = 0; i < values.length; i++) {
    let value = values[i];
    if (typeof value === "number") {
      sum += value;
    }
  }
  return sum;
};

console.log(sumNumValues(book)); // 200

// 2. Преобразование объекта в query string.
{
  const toQueryString = (obj) =>
    Object.entries(obj)
      .map(([key, value]) => `${key}=${value}`)
      .join("&");

  console.log(toQueryString(book));
}
// Сделал еще циклами 
{
  const toQueryString = (obj) => {
    const entries = Object.entries(obj);
    let parts = [];
    for (let i = 0; i < entries.length; i++) {
      let [key, value] = entries[i];
      parts.push(`${key}=${value}`);
    }
    let result = "";
    for (let j = 0; j < parts.length; j++) {
      if (j > 0) {
        result += "&";
      }
      result += parts[j];
    }
    return result;
  };

  console.log(toQueryString(book));
}

// 3. Сравнение двух объектов.

const equalObjects = (obj1, obj2) => {
  return (
    Object.keys(obj1).length === Object.keys(obj2).length &&
    Object.keys(obj1).filter((key) => obj1[key] !== obj2[key]).length === 0
  );
};

// Объекты для примера:
const object1 = { name: "Vitaly", city: "Saratov", };
const object2 = { name: "Vitaly", city: "Saratov", };
const object3 = { name: "Vitaly", city: "Volgograd", };

console.log(equalObjects(object1, object2)); // true.
console.log(equalObjects(object1, object3)); // false.
