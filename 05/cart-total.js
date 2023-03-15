console.log('Задача 2')

function calculate(total, quantity, promo = null) {
  let result = total;
  if (promo === 'ДАРИМ300') {
    result = total < 300 ? 0 : total - 300;
  }
  if (quantity >= 10) {
    result = result - (result * 0.05);
  }
  if (result > 50000) {
    result = result - ((result - 50000) * 0.2);
  }
  if (promo === 'СКИДКА15' && result >= 20000) {
    result = result - (result * 0.15);
  }
  return result;
}

// // Пример использования
const total = 50100;
const quantity = 1;
// const promo = 'СКИДКА15';
const promo = 'ДАРИМ300';
// const promo = null;

const result = calculate(total, quantity, promo);
console.log(`Стоимость корзины после скидок: ${result} рублей`);
