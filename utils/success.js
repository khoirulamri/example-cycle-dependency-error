
const getInfoProduct = () => {
  const db = require('./../models');

  console.log('=================');
  console.log('isi db:', db);
  console.log('=================');

  return db.Product.info();
}

const print = (text) => {
  console.log('=================');
  console.log(text);
  console.log('=================');
}

module.exports = {
  print,
  getInfoProduct,
}