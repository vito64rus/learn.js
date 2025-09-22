// Array.filter
{
  Array.prototype.myFilter = function (callback) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
      const currentItem = this[i];
      if (callback(currentItem, i, this)) {
        result.push(currentItem);
      }
    }
    return result;
  };

  console.group("📁 Array.filter");
  // 1. Дан массив чисел [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]. Отфильтруйте только четные числа.
  const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const isEven = num => num % 2 === 0;
  const getEvenNumbers = numbers => numbers.myFilter(isEven);

  console.log('Задание 1', getEvenNumbers(arr1));

  // 2. Дан массив строк ["apple", "banana", "cherry", "date"]. Отфильтруйте строки длиннее 5 символов.
  const arr2 = ["apple", "banana", "cherry", "date"];

  const isLongerThan = length => str => str.length > length;
  const filterLongStrings = strings => strings.myFilter(isLongerThan(5));

  console.log('Задание 2', filterLongStrings(arr2));

  // 3. Дан массив объектов [{name: "John", age: 25}, {name: "Anna", age: 17}, {name: "Mike", age: 30}]. Отфильтруйте совершеннолетних (age >= 18).
  const arr3 = [{name: "John", age: 25}, {name: "Anna", age: 17}, {name: "Mike", age: 30}];

  const adult = person => person.age >= 18;
  const getAdults = people => people.myFilter(adult);

  console.log('Задание 3', getAdults(arr3));

  // 4. Дан массив чисел [-1, 2, -3, 4, -5, 6]. Отфильтруйте положительные числа.
  const arr4 = [-1, 2, -3, 4, -5, 6];

  const positive = num => num > 0;
  const getPositiveNumbers = numbers => numbers.myFilter(positive);

  console.log('Задание 4', getPositiveNumbers(arr4));

  // 5. Дан массив строк ["apple", "banana", "avocado", "cherry", "apricot"]. Отфильтруйте строки, начинающиеся на "a".
  const arr5 = ["apple", "banana", "avocado", "cherry", "apricot"];

  const startsWithA = str => str.startsWith("a");
  const filterStartWithA = strings => strings.myFilter(startsWithA);

  console.log('Задание 5', filterStartWithA(arr5));

  // 6. Дан массив товаров [{name: "book", price: 15}, {name: "pen", price: 5}]. Отфильтруйте товары дороже 10.
  const arr6 = [
    {name: "book", price: 15}, 
    {name: "pen", price: 5},
  ];

  const isExpensive = item => item.price > 10;
  const getExpensiveItems = items => items.myFilter(isExpensive);

  console.log('Задание 6', getExpensiveItems(arr6));

  // 7. Дан массив дат в виде строк. Отфильтруйте даты, которые находятся в будущем относительно текущей даты.
  const arr7 = ['2025-09-03', '2025-09-22', '2025-09-25', '2025-09-26', '2025-09-27'];

  const currentDate = new Date('2025-09-22');
  const isFutureDate = (dateStr, now) => new Date(dateStr) > now;
  const filterFutureDates = (dates, now = new Date()) => dates.myFilter(dateStr => isFutureDate(dateStr, now));

  console.log('Задание 7', filterFutureDates(arr7, currentDate));

  // 8. Дан массив чисел. Отфильтруйте уникальные значения (убрать дубликаты) используя filter.
  const arr8 = [1, 2, 2, 3, 4, 4, 5];

  const getUniqueValues = array => array.myFilter((item, index, arr) => arr.indexOf(item) === index);

  console.log('Задание 8', getUniqueValues(arr8));
  console.groupEnd();
}
