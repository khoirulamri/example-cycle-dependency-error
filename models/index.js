const fs = require('fs');
const path = require('path');
const basename  = path.basename(module.filename);

const db = {};

class Model {
  constructor(name) {
    this.name = name;
  }

  info() {
    return 'get from tabel: ' + this.name;
  }
}

class Connection {
  defineModel(tabelName) {
    return new Model(tabelName);
  }
}

const initModel = (con, filename = '') => {
  const modelFile = require('./'+ filename);
  const model = modelFile(con);
  return model;
}

const con = new Connection();

fs.readdirSync(__dirname).filter(function (file) {
  return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
}).forEach(function (file) {
  const model = initModel(con, file);
  db[model.name] = model;
});

module.exports = db;