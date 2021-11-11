import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <div className="header">
    <h2>Bookstore Victor</h2>
    <div className="nav">
      <Link to="/" className="link">
        {' '}
        <span>Books</span>
      </Link>
      <Link to="/category" className="link">
        {' '}
        <span>category</span>
      </Link>

    </div>
  </div>
);

export default Header;
