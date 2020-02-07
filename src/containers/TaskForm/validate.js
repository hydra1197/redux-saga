const validate = values => {
  const errors = {};
  const { title, description } = values;

  if (!title) {
    errors.title = 'Vui lòng nhập tiêu đề';
  }

  if (title && title.trim().length < 5) {
    errors.title = 'Tiêu đề quá ngắn';
  }

  return errors;
};

export default validate;