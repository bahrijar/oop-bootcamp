const TodoView = require('../views/Todo');
const Todo = require('../models/Todo');

class TodoController {
  static help() {
    TodoView.help();
  }
  static show() {
    let todos = Todo.getTodos();
    TodoView.show(todos);
  }
  static add(params) {
    const [task] = params;
    let res = Todo.add(task);
    this.message(res);
    if (res.status === 200) {
      this.show();
    }
  }
  static message(res) {
    TodoView.message(res);
  }
}

module.exports = TodoController;
