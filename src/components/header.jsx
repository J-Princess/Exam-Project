import React from "react";
import { Link } from "react-router-dom";
import './style.css'


const Header = () => {
  return (
    <div className="header">
      <h1 className="logo">EXAMS</h1>
      <nav className="listers">
        <Link to="/" className="link">
          Home
        </Link>
        <Link to="about" className="link">
          About
        </Link>
        <Link to="users" className="link">
          Users
        </Link>
        <Link to="contact" className="link">
          Contact Us
        </Link>
<Link to="errortester" className="link">
          Testing Error
        </Link>

        
      </nav>
    </div>
  );
};

export default Header;
