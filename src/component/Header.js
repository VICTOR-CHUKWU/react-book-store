import React from 'react';
import { Link } from 'react-router-dom';
import { ImUser } from 'react-icons/im';

const Header = () => (
  <div className="header">
    <div className="header-inner">
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
      <div className="circle">
        <ImUser className="blue-head" />
      </div>

    </div>
  </div>
);

export default Header;
