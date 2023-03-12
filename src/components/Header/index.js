import React from "react";
import { Link, useParams } from "react-router-dom";
import './Header.css';

const Header = ({ black }) => {

  const { id } = useParams();

  let show = false
  if (id > 0) {
    show = true;
  }

  return (
    <header className={black ? 'black' : ''} style={{ display: show ? 'none' : '' }}>
      <div className="header--logo">
        <Link to="/">       
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" alt="Logo" />      
        </Link>
      </div>
      <div>
       
      </div>
      <div className="header--user">
        <a href="/">
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="User" />
        </a>
      </div>
    </header>
  );
}

export default Header;