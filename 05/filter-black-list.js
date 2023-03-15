console.log('Задача 1')

// sourceEmail
// blacklistEmail

const sourceEmail = ['CultPorterZero@gmail.com', 'SharpColdCapt@gmail.com', 'SoaringIce@gmail.com', 'TouchFlagMoney@gmail.com', 'YakHawkerFlying@gmail.com'];
const blacklistEmail = ['SharpColdCapt@gmail.com', 'TouchFlagMoney@gmail.com'];

// const filter = sourceEmail.filter(item => {
//   return !blacklistEmail.includes(item);
// })

// const filter = sourceEmail.filter(item => !blacklistEmail.includes(item));

// console.log(filter);

function filter(sourceEmail, blacklistEmail) {
  return sourceEmail.filter(item => !blacklistEmail.includes(item));
}

export default {filter}
