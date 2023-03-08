let fibo = [1, 1];

for (let i = 1; i < 49; ++i) {
  fibo.push(fibo[i] + fibo[i - 1]);
}

console.log(fibo)

let fruits = ['Яблоко', 'Банан', 'Апелььсин', 'Ананас', 'Дыня']

console.log('Сегодня я съел:');

for (let fruit of fruits) {
  console.log(fruit)
}

console.log(Math.random())
