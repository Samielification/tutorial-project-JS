console.log('Задача 3 вариант 2')

roadMines = [false, false, false, false, false, false, false, false, true, false, false, false, false, false, false, false, true, false];

const damageLimit = 1;
let currentDamage = 0;
for (let index = 0; index < roadMines.length; index++) {
  const step = index + 1
  if (roadMines[index]) {
    if (currentDamage < damageLimit) {
      console.log('танк повреждён');
      currentDamage++
    } else {
      console.log('танк переместился на ' + step);
      console.log('танк уничтожен');
      break;
    }
  } else {
    console.log('танк переместился на ' + step);
  }

}
