const fs = require('fs');

class Wine {
  constructor(id, name, year, type, stock, createdAt) {
    this.id = id;
    this.name = name;
    this.year = year;
    this.type = type;
    this.stock = stock;
    this.createdAt = createdAt;
  }

  static findAll() {
    let wines = JSON.parse(fs.readFileSync('./data.json'));
    wines = wines.map((wine) => {
      const { id, name, year, type, stock, createdAt } = wine;
      return new Wine(id, name, year, type, stock, createdAt);
    });
    return wines;
  }

  static findById(id) {
    const wines = this.findAll();
    return wines.find((wine) => wine.id === id);
  }

  static create(payload) {
    const validation = this.validation(payload);
    if (validation.length > 0) {
      return {
        status: 500,
        message: validation,
      };
    }

    let wines = this.findAll();
    const id = wines[wines.length - 1].id + 1;
    const today = new Date(Date.now());
    const createdAt = `${today.getFullYear()}-${today.getMonth()}-${today.getDate()}`;
    const { name, year, type } = payload;

    wines.push(new Wine(id, name, year, type, createdAt));
  }
  static update() {}
  static delete() {}
  static sell() {}

  static save(wines) {
    fs.writeFileSync('./data.json', JSON.stringify(wines, null, 3));
  }
  static validation(payload) {
    let validationScheme = [];
    for (const key in payload) {
      if (
        payload[key] === undefined ||
        payload[key] === '' ||
        payload[key] === null
      ) {
        validationScheme.push(`${key} must have value`);
      }
    }
    return validationScheme;
  }
}

module.exports = Wine;
