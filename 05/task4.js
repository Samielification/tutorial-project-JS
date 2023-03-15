console.log('Задача 4')

let days = [];
const week = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье']
const firstJanuary = 'вторник';
for (let index = 1; index < 32; index++) {
  days.push(index);
}

let day = 0
let dayWeek = week.indexOf(firstJanuary)
while (day < days.length) {
  console.log(days[day] + ' января' + ', ' + week[dayWeek]);
  day++;
  dayWeek++;
  if (dayWeek > 6) dayWeek = 0;
}
