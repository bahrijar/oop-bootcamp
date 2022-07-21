const { Action, RPG, Sport } = require('./Game');
const fs = require('fs');

class Collection {
  static getGames() {
    let games = JSON.parse(fs.readFileSync('./data.json', 'utf8'));
    games = games.map((game) => {
      const { id, name, genre, year, isReleased } = game;
      switch (genre) {
        case 'action':
          return new Action(id, name, year, isReleased);
          break;
        case 'rpg':
          return new RPG(id, name, year, isReleased);
          break;
        case 'sport':
          return new Sport(id, name, year, isReleased);
          break;
      }
    });
    console.log(games);
    return games;
  }

  static showGames() {
    let games = this.getGames();
    games.forEach((game) => {
      const { id, name, genre, year, isReleased } = game;
      console.log(
        `${isReleased ? '[X]' : '[ ]'} ${id} ${name} - ${year}, Genre ${genre}`
      );
    });
  }

  static addGame(name, year, genre, isReleased) {
    let games = this.getGames();
    let id = games[games.length - 1].id + 1;

    switch (genre) {
      case 'action':
        games.push(new Action(id, name, year, isReleased));
        break;
      case 'rpg':
        games.push(new RPG(id, name, year, isReleased));
        break;
      case 'sport':
        games.push(new Sport(id, name, year, isReleased));
        break;
    }
    console.log(games);
    this.save(games);
    console.log(`${name} has been added`);
  }

  static save(games) {
    fs.writeFileSync('./data.json', JSON.stringify(games, null, 3));
  }
}

module.exports = Collection;
