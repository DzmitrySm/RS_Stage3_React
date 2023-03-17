import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

class Header extends React.Component {
  render(): React.ReactNode {
    return (
      <nav className="nav_wrapper">
        <span className="current_page_text">Current page:</span>
        <ul className="nav_list">
          <li className="nav_list_item">
            <Link to="/" className="nav_list_item_link">
              Main
            </Link>
          </li>
          <li className="nav_list_item">
            <Link to="/about" className="nav_list_item_link">
              About us
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Header;
