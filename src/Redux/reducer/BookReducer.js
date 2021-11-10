/* eslint-disable import/prefer-default-export */
import BookActions from '../constants/action-type';

const initiaState = {
  Books: [],
};

export const BooksReducer = (state = initiaState, { type, payload }) => {
  if (type === BookActions.ADD_BOOK) {
    return {
      ...state,
      Books: [...state.Books, payload],
    };
  }
  if (type === BookActions.REMOVE_BOOK) {
    return {
      Books: [...state.Books.filter((book) => book.id !== payload)],
    };
  }
  return state;
};
