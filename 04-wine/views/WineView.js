class WineView {
  static help() {
    console.log('node index');
    console.log('node index help');
    console.log('node index findAll');
    console.log('node index findById');
    console.log('node index delete <id>');
    console.log('node index rename <id> <name>');
    console.log('node index sell <id> <quantity>');
    console.log('node index create <name> <year> <type> <stock>');
  }
  static show(wines) {
    console.log(wines);
  }
  static showById(wine) {
    console.log(wine);
  }

  static message(res) {
    if (res.hasOwnProperty('status')) {
      console.log(res.message);
    } else {
      console.log(res);
    }
  }
}

module.exports = WineView;
