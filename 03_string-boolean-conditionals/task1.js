// Задача 1
// Пароль является надёжным, когда в нём есть хотя бы четыре символа, один из которых — это дефис или нижнее подчёркивание

console.log('Задача 1')

const password = '15425-'

if (password.includes('-') || password.includes('_')) {
  if (password.length > 4) {
    console.log('Пароль надёжный')
  } else {
    console.log('Пароль недостаточно надёжный')
  }
} else {
    console.log('Пароль недостаточно надёжный')
}

