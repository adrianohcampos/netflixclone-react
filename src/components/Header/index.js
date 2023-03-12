import React from "react";
import { Link, useLocation } from "react-router-dom";
import './Header.css';

const Header = ({ isBlack }) => {
  const location = useLocation();
  const { pathname } = location;

  const showHeader = pathname !== '/watch/:id';

  return (
    <header className={isBlack ? 'black' : ''} style={{ display: showHeader ? 'flex' : 'none' }}>
      <div className="header--logo">
        <Link to="/">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" alt="Logo" />
        </Link>
      </div>
      <div className="header--user">
        <a href="/">
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="User" />
        </a>
      </div>
    </header>
  );
};

export default Header;
