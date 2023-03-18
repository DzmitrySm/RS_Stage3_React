import React from "react";
import Header from "../components/Header";
import "../pages/MainPage.css";
import SearchInput from "../components/SearchInput";
import Card from "../components/Card";
import { storage } from "../mockdata/CardsData";

class MainPage extends React.Component {
  render(): React.ReactNode {
    return (
      <div>
        <Header />
        <h1>Mainpage hello</h1>
        <SearchInput />
        <div className="wrapper_cards">
          {storage.map((card) => (
            <Card
              key={card.id}
              id={card.id}
              title={card.title}
              price={card.price}
              rating={card.rating}
              brand={card.brand}
              category={card.category}
              image={card.image}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default MainPage;
