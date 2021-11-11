// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeBook, fetchBooks } from '../../Redux/actions/BookAction';

const Book = () => {
  const book = useSelector((state) => state.BooksReducer);
  const dispatch = useDispatch();
  const { Books } = book;

  useEffect(() => {
    dispatch(fetchBooks());
  }, []);

  if (Books.length === 0) {
    return <h1>Loading...</h1>;
  }
  return (
    <div>
      {
        Books.map((item) => {
          const { id, title, category } = item;
          return (
            <div key={id}>
              <h2>{title}</h2>
              <h3>{category}</h3>
              <button type="button" onClick={() => dispatch(removeBook(id))}>Remove Book</button>
            </div>
          );
        })
      }
    </div>
  );
};

export default Book;
