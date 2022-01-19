const { print } = require('./../utils/success');

module.exports = (con) => {

  const model = con.defineModel('Product');

  model.printOne = () => {
    print('Product: oil');
  }

  return model;
}