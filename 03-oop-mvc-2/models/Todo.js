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

  static add(params) {
    if (params.length === 0) {
      return {
        status: 500,
        message: 'Todo failed to add. please input the task name!',
      };
    }

    const [task] = params;
    let todos = this.getTodos();
    let id = todos[todos.length - 1].id + 1;

    todos.push(new Todo(id, task, false));
    this.save(todos);

    return {
      status: 200,
      message: `OK, Todo ${task} has been added`,
    };
  }

  static edit(params) {
    if (params.length === 0 || params.length > 2) {
      return {
        status: 500,
        message: 'Please input the right parameter id and task',
      };
    }

    const [id, task] = params;

    let todos = this.getTodos();
    todos = todos.map((todo) => {
      if (todo.id === +id) {
        todo.task = task;
      }
      return todo;
    });

    this.save(todos);

    return {
      status: 200,
      message: `OK, Todo ${task} has been updated`,
    };
  }

  static delete(params) {
    if (params.length === 0 || params.length > 1) {
      return {
        status: 500,
        message: 'Please input the right parameter id',
      };
    }

    const [id] = params;

    let todos = this.getTodos();
    todos = todos.filter((item) => item.id !== +id);

    this.save(todos);

    return {
      status: 200,
      message: `OK, Todo has been deleted`,
    };
  }

  static changeStatus(params) {
    if (params.length === 0 || params.length > 2) {
      return {
        status: 500,
        message:
          'Please input the right parameter id and status: true || false',
      };
    }

    const [id, status] = params;

    let todos = this.getTodos();
    todos = todos.map((todo) => {
      if (todo.id === +id) {
        todo.status = status === 'true' ? true : false;
      }
      return todo;
    });

    this.save(todos);

    return {
      status: 200,
      message: `OK, Todo ${id} status changed`,
    };
  }

  static save(todos) {
    fs.writeFileSync('./data.json', JSON.stringify(todos, null, 3));
  }
}

module.exports = Todo;
