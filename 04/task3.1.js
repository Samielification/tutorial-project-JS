console.log('Задача 3 вариант 1')

roadMines = [false, false, false, false, false, false, false, false, true, false, false, false, false, false, false, false, true, false];

let drive = 0
let damageLimit = 0
let step = 0

while (step < roadMines.length) {
  step++;
  if (roadMines[drive] == true) damageLimit = ++damageLimit;
  if (damageLimit > 1) console.log('танк переместился на ' + (drive + 1)), console.log('танк уничтожен');
  if (damageLimit > 1) break;
  if (roadMines[drive] == true) console.log('танк повреждён');
  console.log('танк переместился на ' + (drive + 1));
  drive++;
}
