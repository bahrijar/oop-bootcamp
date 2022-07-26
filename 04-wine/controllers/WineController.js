const Wine = require('../models/Wine');
const WineView = require('../views/WineView');

class WineController {
  static help() {
    WineView.help();
  }
  static findAll() {
    const wines = Wine.findAll();
    WineView.show(wines);
  }
  static findById(params) {
    const [id] = params;
    const wine = Wine.findById(+id);
    WineView.showById(wine);
  }
  static create(params) {
    const [name, year, type, stock] = params;
    Wine.create({ name, year, type, stock });
  }
  static update(params) {}
  static delete(params) {}
}

module.exports = WineController;
