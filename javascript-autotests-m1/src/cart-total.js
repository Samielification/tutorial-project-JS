
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

export default calculate;
