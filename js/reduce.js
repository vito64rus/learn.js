// Array.reduce
{
  Array.prototype.myReduce = function (callback, initialValue) {
    let accumulator = initialValue;

    for (let i = 0; i < this.length; i++) {
      const currentItem = this[i];
      accumulator = callback(accumulator, currentItem, i, this);
    }
    return accumulator;
  };

  console.group("📁 Array.reduce");
  // 1. Дан массив чисел [1, 2, 3, 4, 5]. Найдите сумму всех чисел.
  const arr1 = [1, 2, 3, 4, 5];

  const sumNumbers = numbers => numbers.myReduce((acc, num) => acc + num, 0);

  console.log('Задание 1', sumNumbers(arr1));

  // 2. Дан массив чисел [1, 2, 3, 4, 5]. Найдите произведение всех чисел.
  const arr2 = [1, 2, 3, 4, 5];

  const multiplyNumbers = numbers => numbers.myReduce((acc, num) => acc * num, 1);

  console.log('Задание 2', multiplyNumbers(arr2));

  // 3. Дан массив строк ["a", "b", "c", "d"]. Объедините все строки в одну.
  const arr3 = ["a", "b", "c", "d"];

  const concatStrings = strings => strings.myReduce((acc, str) => acc + str, "");

  console.log('Задание 3', concatStrings(arr3));

  // 4. Дан массив чисел. Сгруппируйте числа по четности: {even: [2,4,6], odd: [1,3,5]}.
  const arr4 = [1, 2, 3, 4, 5, 6, 7, 8];

  const groupByParity = numbers => numbers.myReduce((acc, num) => {
    const key = num % 2 === 0 ? 'even' : 'odd';
    acc[key].push(num);
    return acc;
  }, {even: [], odd: []});

  console.log('Задание 4', groupByParity(arr4));

  // 5. Дан массив. Удалите все дубликаты используя reduce.
  const arr5 = [2, 2, 5, 5, 1, 1, 7];

  const deleteDuplicates = array => array.myReduce((acc, item) => 
      acc.includes(item) ? acc : [...acc, item], 
  []);

  console.log('Задание 5', deleteDuplicates(arr5));

  // 6. Дан массив массивов [[1,2], [3,4], [5,6]]. "Разгладьте" его в одномерный массив
  const arr6 = [[1,2], [3,4], [5,6]];

  const flatArray = arrays => arrays.myReduce((acc, subArr) => [...acc, ...subArr], []);

  console.log('Задание 6', flatArray(arr6));
  console.groupEnd();
}