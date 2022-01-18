const db = require('./models');
const { getInfoUser } = require('./utils');

console.log(db.User.info());

console.log(getInfoUser());