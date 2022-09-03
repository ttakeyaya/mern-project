import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">Logo</Link>
      </div>
      <ul className="header-links">
        <li>
          <Link to="/login" className="header-link btn">
            Log in
          </Link>
        </li>
        <li>
          <Link to="/register" className="header-link btn">
            Register
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
