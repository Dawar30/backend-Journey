const { TodoService } = require('../src/services/todo.service');

describe('TodoService', () => {
  test('adds todos with normalized data', () => {
    const todoService = new TodoService();

    const todo = todoService.addTodo('  Learn Jest  ', '  build tests  ');

    expect(todo).toMatchObject({
      title: 'Learn Jest',
      description: 'build tests',
      completed: false
    });
    expect(todo.id).toBeDefined();
    expect(todo.createdAt).toBeDefined();
    expect(todoService.getTodos()).toHaveLength(1);
  });

  test('toggles the completion state of a todo', () => {
    const todoService = new TodoService();
    const todo = todoService.addTodo('Review code');

    const updatedTodo = todoService.toggleTodo(todo.id);

    expect(updatedTodo.completed).toBe(true);
    expect(todoService.getTodoById(todo.id)).toMatchObject({
      id: todo.id,
      completed: true
    });
  });

  test('removes a todo by id', () => {
    const todoService = new TodoService();
    const todo = todoService.addTodo('Ship release');

    const removedTodo = todoService.removeTodo(todo.id);

    expect(removedTodo.id).toBe(todo.id);
    expect(todoService.getTodos()).toHaveLength(0);
  });

  test('throws when the title is invalid', () => {
    const todoService = new TodoService();

    expect(() => todoService.addTodo('no')).toThrow('Title must be at least 3 characters long.');
  });
});
