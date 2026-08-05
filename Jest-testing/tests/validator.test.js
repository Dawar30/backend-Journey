const { validateTodoInput } = require('../src/utils/validator');

describe('validateTodoInput', () => {
  test('accepts valid todo input', () => {
    const result = validateTodoInput('Build tests', 'Write Jest coverage for the todo app');

    expect(result).toEqual({
      isValid: true,
      message: 'Todo input is valid.'
    });
  });

  test('rejects an empty title', () => {
    const result = validateTodoInput('   ');

    expect(result).toEqual({
      isValid: false,
      message: 'Title is required.'
    });
  });

  test('rejects a non-string description', () => {
    const result = validateTodoInput('Plan sprint', 12);

    expect(result).toEqual({
      isValid: false,
      message: 'Description must be a string.'
    });
  });
});
