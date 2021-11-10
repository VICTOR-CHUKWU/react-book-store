import BookActions from '../constants/action-type';

export const addBook = (books) => ({
  type: BookActions.ADD_BOOK,
  payload: books,
});

export const removeBook = (id) => ({
  type: BookActions.REMOVE_BOOK,
  payload: id,
});
