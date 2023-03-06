// Задача 2

console.log('Задача 2')

// const a = 13.123456789;
// const b = 2.123;
// const n = 5

// const aNorm = Math.round(
//   a % 1 * Math.pow(10, n)
// );
// const bNorm = Math.round(
//   b % 1 * Math.pow(10, n)
// );

// console.log('дробная a=', aNorm)
// console.log('дробная b=', bNorm)


// Выведите результаты их сравнения (>, <, ≥, ≤, ===, ≠) с помощью console.log.

// console.log('дробная a больше дробной b',aNorm > bNorm)
// console.log('дробная a меньше дробной b',aNorm < bNorm)
// console.log('дробная a больше или равно дробной b',aNorm >= bNorm)
// console.log('дробная a меньше или равно дробной b',aNorm <= bNorm)
// console.log('дробная a равна дробной b',aNorm === bNorm)
// console.log('дробная a не равна дробной b',aNorm !== bNorm)

// const a = 13.890123;
// const b = 2.891564;
// const n = 2

// const aNorm = Math.round(
//   a % 1 * Math.pow(10, n)
// );
// const bNorm = Math.round(
//   b % 1 * Math.pow(10, n)
// );

// console.log('дробная a=', aNorm)
// console.log('дробная b=', bNorm)

// // Выведите результаты их сравнения (>, <, ≥, ≤, ===, ≠) с помощью console.log.

// console.log('дробная a больше дробной b',aNorm > bNorm)
// console.log('дробная a меньше дробной b',aNorm < bNorm)
// console.log('дробная a больше или равно дробной b',aNorm >= bNorm)
// console.log('дробная a меньше или равно дробной b',aNorm <= bNorm)
// console.log('дробная a равна дробной b',aNorm === bNorm)
// console.log('дробная a не равна дробной b',aNorm !== bNorm)


const a = 13.890123;
const b = 2.891564;
const nAccuracy = 3

const aNorm = Math.round(
  a % 1 * Math.pow(10, nAccuracy)
);
const bNorm = Math.round(
  b % 1 * Math.pow(10, nAccuracy)
);

console.log('дробная a=', aNorm)
console.log('дробная b=', bNorm)

// Выведите результаты их сравнения (>, <, ≥, ≤, ===, ≠) с помощью console.log.

console.log('дробная a больше дробной b',aNorm > bNorm)
console.log('дробная a меньше дробной b',aNorm < bNorm)
console.log('дробная a больше или равно дробной b',aNorm >= bNorm)
console.log('дробная a меньше или равно дробной b',aNorm <= bNorm)
console.log('дробная a равна дробной b',aNorm === bNorm)
console.log('дробная a не равна дробной b',aNorm !== bNorm)
