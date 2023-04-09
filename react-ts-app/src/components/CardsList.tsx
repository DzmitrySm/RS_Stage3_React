import React from "react";
import { IResponceData } from "./types/types";

const CardsList = function (data: IResponceData): JSX.Element {
  return (
    <div className="wrapper_cards">
      {data.results.map((card) => (
        <div key={`${card.id}`} className="wrapper_card">
          <img src={card.image} className="card_image" alt="card_product" />
          <div>{card.name}</div>
          <div>{card.gender}</div>
          <div>{card.species}</div>
          <div>{card.status}</div>
        </div>
      ))}
    </div>
  );
};

export default CardsList;
