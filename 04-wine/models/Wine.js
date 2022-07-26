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

  static create(params) {
    const validation = this.validation(params);
    if (validation.length > 0) {
      return this.error(validation);
    }

    let wines = this.findAll();
    const id = wines[wines.length - 1].id + 1;
    const today = new Date(Date.now());

    const createdAt = `${today.getFullYear()}-${
      today.getMonth() < 10 ? `0${today.getMonth()}` : today.getMonth()
    }-${today.getDate()}`;
    const { name, year, type, stock } = params;

    wines.push(new Wine(id, name, +year, type, +stock, createdAt));

    this.save(wines);

    return this.success(`${name} has been created`);
  }

  static rename(params) {
    const validation = this.validation(params);
    if (validation.length > 0) {
      return this.error(validation);
    }

    const { id, name } = params;

    let wines = this.findAll();
    wines = wines.map((wine) => {
      if (wine.id === +id) {
        wine.name = name;
      }
      return wine;
    });

    this.save(wines);

    return this.success(`ID ${params.id} has been renamed to ${name}`);
  }

  static delete() {}

  static sell() {}

  static save(wines) {
    fs.writeFileSync('./data.json', JSON.stringify(wines, null, 3));
  }

  static validation(params) {
    let validationScheme = [];
    for (const key in params) {
      if (
        params[key] === undefined ||
        params[key] === '' ||
        params[key] === null
      ) {
        validationScheme.push(`${key} must have value`);
      }
    }
    return validationScheme;
  }

  static error(message) {
    return {
      status: 500,
      message,
    };
  }

  static success(message) {
    return {
      status: 200,
      message,
    };
  }
}

module.exports = Wine;
