import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

class Header extends React.Component<
  object,
  {
    classForMenuMain: string;
    classForMenuAbout: string;
    flag: boolean;
  }
> {
  constructor(props = {}) {
    super(props);
    this.state = {
      classForMenuMain: "nav_list_item_link",
      classForMenuAbout: "nav_list_item_link",
      flag: true,
    };
  }

  componentDidMount(): void {
    this.setState({
      classForMenuMain:
        this.state.flag === true
          ? "nav_list_item_link menu_underline"
          : "nav_list_item_link",
      classForMenuAbout:
        this.state.flag === true
          ? "nav_list_item_link"
          : "nav_list_item_link  menu_underline",
    });
  }

  render(): React.ReactNode {
    return (
      <nav className="nav_wrapper">
        <span className="current_page_text">Current page:</span>
        <ul className="nav_list">
          <li className="nav_list_item">
            <Link to="/" className={this.state.classForMenuMain}>
              Main
            </Link>
          </li>
          <li className="nav_list_item">
            <Link to="/about" className={this.state.classForMenuAbout}>
              About us
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Header;
