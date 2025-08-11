// "Усложненное задание"
const randomNumber = Math.floor(Math.random() * 100) + 1;
let amount = 0;
(function supposeNumber(){
  amount++;
  const attempt = +prompt("Угадайте число от 1 до 100:");
  if (attempt === randomNumber) return alert(`Число было угадано за ${amount} пипыток.`);
  alert(`Загаданное число ${attempt < randomNumber ? "больше" : "меньше"}.`);
  supposeNumber();
})();