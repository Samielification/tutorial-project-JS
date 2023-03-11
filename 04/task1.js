console.log('Задача 1')

function randomKuku(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

// console.log(randomKuku(0, 100))
// console.log(randomKuku(-3, -10))

const count = 100;
let аrrayKuku = []

for (let i = 0; i < count; ++i) {
  аrrayKuku.push(randomKuku(0, 100))
}

console.log(аrrayKuku)
