import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header(props) {
  return (
    <div>
      <div className="header">
        <div className="app-title">
          WishListApp</div>
        <div className="header-links">
          <div>
          <Link to="./list">List </Link>
        </div>
        <div>
          <Link to="./add">Add Item </Link>
        </div>
      </div>
      </div>
      </div>
  );
}

export default Header;
