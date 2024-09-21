export const validateTitle = (title: string) => {
  if (!title || title === '') {
    return 'Todo title is required';
  } else {
    return '';
  }
};
