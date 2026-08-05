const { TodoService } = require('../services/todo.service');

const todoService = new TodoService();

function createTodo(payload) {
  return todoService.addTodo(payload.title, payload.description);
}

function listTodos() {
  return todoService.getTodos();
}

function updateTodoStatus(id) {
  return todoService.toggleTodo(id);
}

function deleteTodo(id) {
  return todoService.removeTodo(id);
}

function resetTodos() {
  todoService.clearTodos();
}

module.exports = {
  todoService,
  createTodo,
  listTodos,
  updateTodoStatus,
  deleteTodo,
  resetTodos
};
