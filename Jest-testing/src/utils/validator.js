function validateTodoInput(title, description = '') {
  if (typeof title !== 'string') {
    return {
      isValid: false,
      message: 'Title must be a string.'
    };
  }

  const normalizedTitle = title.trim();
  if (!normalizedTitle) {
    return {
      isValid: false,
      message: 'Title is required.'
    };
  }

  if (normalizedTitle.length < 3) {
    return {
      isValid: false,
      message: 'Title must be at least 3 characters long.'
    };
  }

  if (normalizedTitle.length > 120) {
    return {
      isValid: false,
      message: 'Title must be 120 characters or fewer.'
    };
  }

  if (typeof description !== 'string') {
    return {
      isValid: false,
      message: 'Description must be a string.'
    };
  }

  if (description.trim().length > 500) {
    return {
      isValid: false,
      message: 'Description must be 500 characters or fewer.'
    };
  }

  return {
    isValid: true,
    message: 'Todo input is valid.'
  };
}

module.exports = {
  validateTodoInput
};
