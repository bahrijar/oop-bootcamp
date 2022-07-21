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
    console.table(games);
  }
}

module.exports = Collection;
