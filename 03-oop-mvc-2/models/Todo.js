const fs = require('fs');

class Todo {
  constructor(id, task, status) {
    this.id = id;
    this.task = task;
    this.status = status;
  }
  static getTodos() {
    let todos = JSON.parse(fs.readFileSync('./data.json', 'utf8'));
    todos = todos.map((todo) => {
      const { id, task, status } = todo;

      return new Todo(id, task, status);
    });
    return todos;
  }
  static add(task) {
    if (task === null || task === undefined || task === '') {
      return {
        status: 500,
        message: 'Todo failed to add. please input the task name!',
      };
    }

    let todos = this.getTodos();
    let id = todos[todos.length - 1].id + 1;

    todos.push(new Todo(id, task, false));
    this.save(todos);

    return {
      status: 200,
      message: `OK, Todo ${task} has added`,
    };
  }

  static save(todos) {
    fs.writeFileSync('./data.json', JSON.stringify(todos, null, 3));
  }
}

module.exports = Todo;
