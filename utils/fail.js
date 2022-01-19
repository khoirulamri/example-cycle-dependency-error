const db = require('./../models');

const getInfoUser = () => {
  console.log('=================');
  console.log('isi db:', db);
  console.log('=================');
  return db.User.info();
}

const print = (text) => {
  console.log('=================');
  console.log(text);
  console.log('=================');
}

module.exports = {
  print,
  getInfoUser,
}