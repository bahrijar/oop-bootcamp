const TodoView = require('../views/Todo');
const Todo = require('../models/Todo');

class TodoController {
  static help() {
    TodoView.help();
  }
  static show() {
    const todos = Todo.getTodos();
    TodoView.show(todos);
  }
  static add(params) {
    const res = Todo.add(params);
    this.message(res);
    if (res.status === 200) {
      this.show();
    }
  }
  static edit(params) {
    const res = Todo.edit(params);
    this.message(res);
    if (res.status === 200) {
      this.show();
    }
  }
  static delete(params) {
    const res = Todo.delete(params);
    this.message(res);
    if (res.status === 200) {
      this.show();
    }
  }
  static changeStatus(params) {
    const res = Todo.changeStatus(params);
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
