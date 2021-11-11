import React from 'react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { useSelector, useDispatch } from 'react-redux';
import { removeBook } from '../../Redux/actions/BookAction';

const Book = () => {
  const book = useSelector((state) => state.BooksReducer);
  const dispatch = useDispatch();
  const { Books } = book;

  if (Books.length === 0) {
    return <h1>Loading...</h1>;
  }
  return (
    <div className="books">
      {
        Books.map((item) => {
          const { id, title, category } = item;
          return (
            <div key={id} className="book-item">
              <div className="items">
                <h3>{category}</h3>
                <h2>{title}</h2>
                <p>Author</p>
                <div className="buttons">
                  <button type="button">comments</button>
                  <span className="hl" />
                  <button type="button" onClick={() => dispatch(removeBook(id))}>Remove</button>
                  <span className="hl" />
                  <button type="button">Edit</button>
                </div>
              </div>
              <div className="percent">
                <AiOutlineLoading3Quarters className="meter" />
                <h3>
                  <span className="percentage"> 64%</span>
                  <span className="completed">completed</span>
                </h3>
              </div>
              <div className="hr" />
              <div className="chapter">
                <h4>Current Chapter</h4>
                <h3>chapter one: &quot; A Lesson Learned &quot;</h3>
                <button type="button">Update progress</button>
              </div>
            </div>
          );
        })
      }
    </div>
  );
};

export default Book;
