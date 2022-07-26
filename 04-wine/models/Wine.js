const fs = require('fs');

class Wine {
  constructor(id, name, year, type, createdAt) {
    this.id = id;
    this.name = name;
    this.year = year;
    this.type = type;
    this.createdAt = createdAt;
  }

  static findAll() {
    const wines = JSON.parse(fs.readFileSync('./data.json'));
    console.log(wines);
  }
  static findById() {}
  static create() {}
  static update() {}
  static delete() {}
  static sell() {}

  static save(wines) {
    fs.writeFileSync('./data.json', JSON.stringify(wines, null, 3));
  }
}

module.exports = Wine;
