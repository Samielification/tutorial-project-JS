const week = []

week[0] = 'понедельник'
week[5] = 'четверг'

let day = 0
while (day < week.length) {
  console.log(day + ' января' + ', ' + week[day]);
  day++;
}
