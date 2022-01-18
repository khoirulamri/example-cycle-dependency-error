const db = require('./models');

const getInfoUser = () => {
  return db.getUser.info();;
}

const print = (text) => {
  console.info('=================');
  console.info(text);
  console.info('=================');
}

module.exports = {
  print,
  getInfoUser,
}