const Wine = require('../models/Wine');
const WineView = require('../views/WineView');

class WineController {
  static help() {
    WineView.help();
  }
  static findAll() {
    Wine.findAll();
  }
  static findById() {}
  static create(params) {}
  static update(params) {}
  static delete(params) {}
}

module.exports = WineController;
