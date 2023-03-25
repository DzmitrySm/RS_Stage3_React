import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

class Header extends React.Component<
  object,
  {
    classForMainClicLink: string;
    classForAboutClicLink: string;
    classForFormClicLink: string;
  }
> {
  constructor(props = {}) {
    super(props);
    this.state = {
      classForMainClicLink: "nav_list_item_link",
      classForAboutClicLink: "nav_list_item_link",
      classForFormClicLink: "nav_list_item_link",
    };
    this.handleChooseMainActive = this.handleChooseMainActive.bind(this);
    this.handleChooseAboutActive = this.handleChooseAboutActive.bind(this);
    this.handleChooseFormActive = this.handleChooseFormActive.bind(this);
  }

  handleChooseMainActive(): void {
    this.setState({
      classForMainClicLink: "nav_list_item_link menu_underline",
      classForAboutClicLink: "nav_list_item_link",
      classForFormClicLink: "nav_list_item_link",
    });
  }

  handleChooseAboutActive(): void {
    this.setState({
      classForMainClicLink: "nav_list_item_link",
      classForAboutClicLink: "nav_list_item_link menu_underline",
      classForFormClicLink: "nav_list_item_link",
    });
  }

  handleChooseFormActive(): void {
    this.setState({
      classForMainClicLink: "nav_list_item_link",
      classForAboutClicLink: "nav_list_item_link",
      classForFormClicLink: "nav_list_item_link menu_underline",
    });
  }

  render(): React.ReactNode {
    return (
      <nav className="nav_wrapper">
        <span className="current_page_text">Current page:</span>
        <ul className="nav_list">
          <li className="nav_list_item">
            <Link
              to="/"
              onClick={this.handleChooseMainActive}
              className={this.state.classForMainClicLink}
            >
              Main
            </Link>
          </li>
          <li className="nav_list_item">
            <Link
              to="/about"
              onClick={this.handleChooseAboutActive}
              className={this.state.classForAboutClicLink}
            >
              About us
            </Link>
          </li>
          <li className="nav_list_item">
            <Link
              to="/form"
              onClick={this.handleChooseFormActive}
              className={this.state.classForFormClicLink}
            >
              Form
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Header;
