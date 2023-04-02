import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = function () {
  const [title, settitle] = useState("MainPage");

  const handleChooseMainActive = () => {
    settitle("MainPage");
  };

  const handleChooseAboutActive = () => {
    settitle("AboutPage");
  };

  const handleChooseFormActive = () => {
    settitle("FormPage");
  };

  return (
    <nav className="nav_wrapper">
      <span className="current_page_text">Current page: {title}</span>
      <ul className="nav_list">
        <li className="nav_list_item">
          <Link
            to="/"
            onClick={handleChooseMainActive}
            className="nav_list_item_link"
          >
            Main
          </Link>
        </li>
        <li className="nav_list_item">
          <Link
            to="/about"
            onClick={handleChooseAboutActive}
            className="nav_list_item_link"
          >
            About us
          </Link>
        </li>
        <li className="nav_list_item">
          <Link
            to="/form"
            onClick={handleChooseFormActive}
            className="nav_list_item_link"
          >
            Form
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
