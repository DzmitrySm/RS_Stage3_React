import React from "react";
import Header from "../components/Header";
import "../pages/MainPage.css";

class MainPage extends React.Component {
  render(): React.ReactNode {
    return (
      <div>
        <Header />
        <h1>Mainpage hello</h1>
        <input type="search" className="input_search"></input>
      </div>
    );
  }
}

export default MainPage;
