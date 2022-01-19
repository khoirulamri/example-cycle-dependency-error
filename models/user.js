const { print } = require('./../utils/fail');

module.exports = (con) => {

  const model = con.defineModel('User');

  model.printOne = () => {
    print('User: amri');
  }

  return model;
}