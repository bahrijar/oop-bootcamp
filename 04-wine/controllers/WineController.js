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
    const res = Wine.create({ name, year, type, stock });
    this.message(res);
    if (res.status === 200) {
      this.findAll();
    }
  }
  static rename(params) {
    const [id, name] = params;
    const res = Wine.rename({ id, name });
    this.message(res);
  }
  static delete(params) {}

  static message(res) {
    WineView.message(res);
  }
}

module.exports = WineController;
