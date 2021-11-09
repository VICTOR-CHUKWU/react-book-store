import React from 'react';
import AddBooks from './AddBooks';

const Books = () => (
  <div>
    <div className="booklist" />
    <button type="button">Remove Book</button>
    <AddBooks />
  </div>
);

export default Books;
