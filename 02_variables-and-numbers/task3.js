
// Задача 3

console.log('Задача 3')

const n = 0;
const m = 100;

const range = Math.abs(m - n);
const numberInRange = Math.round(Math.random() * range);
const min = Math.min(n, m);
const max = Math.max(n, m);

const randomA = min + numberInRange;
const randomB = max - numberInRange;

console.log('случайное число а=', randomA)
console.log('случайное число b=', randomB)

console.log('a больше b',randomA > randomB)
console.log('a меньше b',randomA < randomB)
console.log('a больше или равно b',randomA >= randomB)
console.log('a меньше или равно b',randomA <= randomB)
console.log('a равна b',randomA === randomB)
console.log('a не равна b',randomA !== randomB)
