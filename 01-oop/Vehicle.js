// Teori OOP

/**
 * Pilar utama OOP:
 * 1. Inheritance
 * 2. Polymorphism
 * 3. Encapsulation
 * 4. Abstraction
 */

class Vehicle {
  constructor(id, name = '', type = '', cc = 0) {
    this.id = id;
    this.name = name;
    this.type = type;
    this.cc = cc;
  }

  showName() {
    console.log(`Name: ${this.name} `);
  }
}

class Sedan extends Vehicle {
  constructor(id, name, type, cc, nitro) {
    // jika ada extends maka ada super untuk bisa memakai sifat parentnya
    super(name, type, cc);
    this.nitro = nitro || false;
  }

  // @Override => jika method name sama dengan parent method.
  showName() {
    super.showName();
    console.log(`Sedan name: ${this.name}`);
  }
}

class Pickup extends Vehicle {
  constructor(id, name, type, cc, box) {
    super(id, name, type, cc);
    this.box = box || 2;
  }
}

class SUV extends Vehicle {
  constructor(id, name, type, cc, wheel) {
    super(id, name, type, cc);
    this.wheel = wheel || '2WD';
  }
}

module.exports = {
  Sedan,
  Pickup,
  SUV,
};
