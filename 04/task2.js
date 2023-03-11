console.log('Задача 2')

// let txet = '!рим ,тевирП';
// let text = txet.split('').reverse().join('');

// console.log(text);


let txet = '!рим ,тевирП';
let text = []

for (let i = txet.length - 1; i >= 0; i--) {
  text.push(txet[i]);
};

console.log(text.join(''));
