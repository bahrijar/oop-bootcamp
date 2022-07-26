const WineController = require('./controllers/WineController');
const command = process.argv[2];
const params = process.argv.slice(3);

switch (command) {
  case undefined:
    break;
  case 'help':
    WineController.help();
    break;
  case 'findAll':
    WineController.findAll();
    break;
  case 'findById':
    WineController.findById(params);
    break;
  case 'create':
    WineController.create(params);
    break;
  case 'update':
    break;
  case 'delete':
    break;
  case 'sell':
    break;
  default:
    break;
}
