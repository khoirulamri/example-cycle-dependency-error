const { print } = require('./../utils');

module.exports = (con) => {

  const model = con.defineModel('User');

  model.printOne = () => {
    print('User: amri');
  }

  return model;
}