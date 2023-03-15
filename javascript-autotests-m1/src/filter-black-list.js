
const sourceEmail = ['CultPorterZero@gmail.com', 'SharpColdCapt@gmail.com', 'SoaringIce@gmail.com', 'TouchFlagMoney@gmail.com', 'YakHawkerFlying@gmail.com'];
const blacklistEmail = ['SharpColdCapt@gmail.com', 'TouchFlagMoney@gmail.com'];

function filter(sourceEmail, blacklistEmail) {
  return sourceEmail.filter(item => !blacklistEmail.includes(item));
}

export default filter;
