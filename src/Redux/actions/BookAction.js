import BookActions from '../constants/action-type';
import { fetchBookData, addBookData, removeBookData } from '../../Services';

export const addBook = (books) => (async (dispatch) => {
  await addBookData(books);
  dispatch({
    type: BookActions.ADD_BOOK,
    payload: books,
  });
});

export const removeBook = (id) => (async (dispatch) => {
  await removeBookData(id);
  dispatch({
    type: BookActions.REMOVE_BOOK,
    payload: id,
  });
});

export const fetchBooks = () => (async (dispatch) => {
  const books = await fetchBookData();
  const data = Object.entries(books).map(([key, [value]]) => (
    {
      id: key,
      title: value.title,
      category: value.category,
    }
  ));
  dispatch({
    type: BookActions.FETCH_BOOKS,
    payload: data,
  });
});
