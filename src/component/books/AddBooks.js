import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../../Redux/actions/BookAction';

const AddBooks = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const submitBookToStore = (e) => {
    e.preventDefault();
    if (title === '' || category === '') return;
    const newBook = {
      id: uuidv4(),
      title,
      category,
    };
    dispatch(addBook(newBook));
    setTitle('');
    setCategory('');
  };
  return (
    <form onSubmit={submitBookToStore} className="form">
      <h2>Add new Books</h2>
      <div className="form-inputs">
        <input
          type="text"
          placeholder="Book title"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <input
          type="text"
          placeholder="category"
          onChange={(e) => setCategory(e.target.value)}
          value={category}
        />
        <button type="submit">add book</button>
      </div>
    </form>
  );
};

export default AddBooks;
