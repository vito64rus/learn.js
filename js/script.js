'use strict';

const getNumber = (msg) => {
  while (true) {
    const input = prompt(msg);
    if (input === null) return null;
    const num = parseFloat(input);
    if (isFinite(num)) return num;
    alert('Введите корректное число.');
  }
};

const calculateResults = (a, b) => {
  return {
    'Сумма': (a + b).toFixed(2),
    'Разность': (a - b).toFixed(2),
    'Произведение': (a * b).toFixed(2),
    'Частное': b !== 0 ? (a / b).toFixed(2) : 'Ошибка (деление на 0)'
  };
};

while (true) {
  const a = getNumber('Введите первое число');
  const b = getNumber('Введите второе число');
  if (a === null || b === null) {
    if (!confirm('Отмена. Начать заново?')) break;
    continue;
  }

  const result = calculateResults(a, b);

  console.table(result);
  alert(Object.entries(result).map(([k, v]) => `${k}: ${v}`).join('\n'));

  if (!confirm('Выполнить ещё раз?')) break;
}