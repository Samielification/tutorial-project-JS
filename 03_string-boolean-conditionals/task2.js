console.log('Задача 2')

// Для получения куска строки можно воспользоваться конструкцией str.substring(indexA, indexB)
// где str — название переменной с исходной строкой
// indexA — целое число от нуля до длины строки, указывающее номер символа начала куска строки
// indexB — целое число от нуля до длины строки, указывающее номер символа конца куска строки
// Если indexB не указывать, то вы получите кусок от indexA до конца строки
// Например, так можно получить первый символ строки: let first = str.substring(0, 1), а так — остаток строки: let last = str.substring(1).
// Конструкцию можно присвоить переменной, с которой потом можно работать как с обычной строкой.
// Для преобразования букв строки к верхнему регистру воспользуйтесь конструкцией str.toUpperCase(), к нижнему — str.toLowerCase(). Результат аналогично можно присвоить переменной.
// «Имя было преобразовано» или «Имя осталось без изменений»

// const userName = 'шЕлДоН';
const userName = 'Шелдон';
const userSurname = 'КУпеР';

modName = userName.toLowerCase()
modName = modName.replace(modName[0], modName[0].toUpperCase());

modSurname = userSurname.toLowerCase()
modSurname = modSurname.replace(modSurname[0], modSurname[0].toUpperCase());

console.log(`${modName} ${modSurname}`);
console.log(userName == modName ? 'Имя осталось без изменений' : 'Имя было преобразовано')
console.log(userSurname == modSurname ? 'Фамилия осталась без изменений' : 'Фамилия была преобразована')

// userName = userName.toLowerCase()
// modName = userName.replace(userName[0], userName[0].toUpperCase());

// userSurname = userSurname.toLowerCase()
// modSurname = userSurname.replace(userSurname[0], userSurname[0].toUpperCase());
