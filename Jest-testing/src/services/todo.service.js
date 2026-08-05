const { randomUUID } = require('crypto');
const { validateTodoInput } = require('../utils/validator');

class TodoService {
  constructor(initialTodos = []) {
    this.todos = initialTodos.map((todo) => ({ ...todo }));
  }

  addTodo(title, description = '') {
    const validation = validateTodoInput(title, description);
    if (!validation.isValid) {
      throw new Error(validation.message);
    }

    const todo = {
      id: randomUUID(),
      title: title.trim(),
      description: description.trim(),
      completed: false,
      createdAt: new Date().toISOString()
    };

    this.todos.push(todo);
    return { ...todo };
  }

  getTodos() {
    return this.todos.map((todo) => ({ ...todo }));
  }

  getTodoById(id) {
    const todo = this.todos.find((item) => item.id === id);
    return todo ? { ...todo } : null;
  }

  toggleTodo(id) {
    const todoIndex = this.todos.findIndex((item) => item.id === id);
    if (todoIndex === -1) {
      throw new Error('Todo not found.');
    }

    this.todos[todoIndex] = {
      ...this.todos[todoIndex],
      completed: !this.todos[todoIndex].completed
    };

    return { ...this.todos[todoIndex] };
  }

  removeTodo(id) {
    const todoIndex = this.todos.findIndex((item) => item.id === id);
    if (todoIndex === -1) {
      throw new Error('Todo not found.');
    }

    const [removedTodo] = this.todos.splice(todoIndex, 1);
    return { ...removedTodo };
  }

  clearTodos() {
    this.todos = [];
  }
}

module.exports = {
  TodoService
};
