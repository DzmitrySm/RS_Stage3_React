import React from "react";
import "../pages/MainPage.css";
import SearchInput from "../components/SearchInput";
import Card from "../components/Card";
import { storage } from "../mockdata/CardsData";

const MainPage = function () {
  return (
    <div>
      <h1 className="page_name">Mainpage</h1>
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
};

export default MainPage;
