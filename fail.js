const db = require('./models');
const { getInfoUser } = require('./utils/fail');

db.User.printOne();
console.log(getInfoUser());