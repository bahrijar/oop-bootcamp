const fs = require('fs');
const { Sedan, Pickup, SUV } = require('./Vehicle');

class Showroom {
  constructor(rooms) {
    this.rooms = rooms || [];
  }
  addVehicle(...vehicle) {
    const [name, type, cc, other] = vehicle;

    switch (type) {
      case 'Sedan':
        this.rooms.push(new Sedan(name, type, cc, other));
        break;
      case 'Pickup':
        this.rooms.push(new Pickup(name, type, cc, other));
        break;
      case 'SUV':
        this.rooms.push(new SUV(name, type, cc, other));
        break;
    }

    console.log(`${name} has been added.`);
  }
  getVehicles() {
    let data = fs.readFileSync('./vehicles.csv', 'utf8');
    let tempData = data.split('\r\n');

    let vehiclesArray = [];

    for (let i = 1; i < tempData.length; i++) {
      vehiclesArray.push(tempData[i].split(','));
    }

    let vehicles = vehiclesArray.map((vehicle) => {
      let [id, name, type, cc] = vehicle;
      switch (type) {
        case 'Sedan':
          return new Sedan(id, name, type, cc);
          break;
        case 'SUV':
          return new SUV(id, name, type, cc);
          break;
        case 'Pickup':
          return new Pickup(id, name, type, cc);
          break;
      }
    });

    return vehicles;
  }

  showVehicles() {
    let vehicles = this.getVehicles();
    vehicles.forEach((vehicle, i) => {
      const { name, type, cc } = vehicle;
      console.log(`${i + 1}. ${name}, type ${type}, cc ${cc}`);
    });
  }
}

module.exports = Showroom;
