class Game {
  constructor(id, name, year, genre, isReleased) {
    this.id = id;
    this.name = name;
    this.year = year;
    this.genre = genre;
    this.isReleased = isReleased;
  }
}

class Action extends Game {
  constructor(id, name, year, isReleased) {
    super(id, name, year, 'action', isReleased);
  }
}

class RPG extends Game {
  constructor(id, name, year, isReleased) {
    super(id, name, year, 'rpg', isReleased);
  }
}

class Sport extends Game {
  constructor(id, name, year, isReleased) {
    super(id, name, year, 'sport', isReleased);
  }
}

module.exports = { Action, RPG, Sport };
