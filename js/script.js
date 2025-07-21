// Заменил null на пустую строку 
const lastName = prompt('Ваша фамилия') || '';
const firstName = prompt('Ваше имя') || '';  
const middleName = prompt('Ваше отчество') || '';

// Убрал лишние пробелы 
console.log(
  `ФИО - ${lastName.trim()} ${firstName.trim()} ${middleName.trim()}`
);
