const fs = require('fs');
const { Chocolate, Sweet, Strawberry } = require('./Cookie');

class Kitchen {
  constructor(container) {
    this.container = container || [];
  }

  bake() {}
  eat() {}
  addSugar() {}
  showCookies() {
    let cookies = fs.readFileSync('./data.json', 'utf8');

    console.log(cookies);
  }

  moveToContainer() {}
}

module.exports = Kitchen;
