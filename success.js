const db = require('./models');
const { getInfoProduct } = require('./utils/success');

db.Product.printOne();
console.log(getInfoProduct());