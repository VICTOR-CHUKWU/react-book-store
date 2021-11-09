import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <div>
    <h2>Bookstore Victor</h2>
    <div>
      <Link to="/">
        {' '}
        <span>Books</span>
      </Link>
      <Link to="/category">
        {' '}
        <span>category</span>
      </Link>

    </div>
  </div>
);

export default Header;
