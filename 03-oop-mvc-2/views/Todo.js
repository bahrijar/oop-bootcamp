class Todo {
  static help() {
    console.log('Todo Apps Commands : ');
    console.log('node index.js');
    console.log('node index.js help');
    console.log('node index.js show');
    console.log('node index.js add <task>');
    console.log('node index.js delete <id>');
    console.log('node index.js edit <id> <task>');
    console.log('node index.js changeStatus');
  }
  static show(todos) {
    console.log('Todo List: ');
    todos.forEach((todo) => {
      const { id, task } = todo;
      if (todo.status) {
        console.log(`[OK] ${id}. ${task}`);
      } else {
        console.log(`[  ] ${id}. ${task}`);
      }
    });
  }
  static message(res) {
    if (res.hasOwnProperty('status')) {
      console.log(res.message);
    } else {
      console.log(res);
    }
  }
}

module.exports = Todo;
