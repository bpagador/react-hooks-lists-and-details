import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <Link to="/">
      <h3>Hey Arnold! Character List</h3>
    </Link>
  </header>
);

export default Header;
