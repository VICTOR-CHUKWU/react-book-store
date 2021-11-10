import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../../Redux/actions/BookAction';

const AddBooks = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setauthor] = useState('');
  const submitBookToStore = (e) => {
    e.preventDefault();
    if (title === '' || author === '') return;
    const newBook = {
      id: uuidv4(),
      title,
      author,
    };
    dispatch(addBook(newBook));
    setTitle('');
    setauthor('');
  };
  return (
    <form onSubmit={submitBookToStore}>
      <h2>Add new Books</h2>
      <input
        type="text"
        placeholder="book title"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <input
        type="text"
        placeholder="category"
        onChange={(e) => setauthor(e.target.value)}
        value={author}
      />
      <button type="submit">submit</button>
    </form>
  );
};

export default AddBooks;
