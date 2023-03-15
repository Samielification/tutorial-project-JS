console.log('Задача 1')

// sourceEmail
// blacklistEmail

const sourceEmail = ['CultPorterZero@gmail.com', 'SharpColdCapt@gmail.com', 'SoaringIce@gmail.com', 'TouchFlagMoney@gmail.com', 'YakHawkerFlying@gmail.com'];
const blacklistEmail = ['SharpColdCapt@gmail.com', 'TouchFlagMoney@gmail.com'];

const filter = sourceEmail.reduce((item, workEmail) => {
  if (!blacklistEmail.includes(workEmail)) {
    item.push(workEmail);
  }
  return item;} , []);

console.log(filter);

// export default {filter}

// workEmail

const fun = (item, workEmail) => {
  if (!blacklistEmail.includes(workEmail)) {
    item.push(workEmail)
  }
  return item;
}

const filter = sourceEmail.reduce (fun, [])

console.log(filter);
