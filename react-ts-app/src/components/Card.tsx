import React from "react";
import "./Card.css";
import { ICard } from "./types/types";

const Card = function (props: ICard): JSX.Element {
  return (
    <div key={`${props.id}`} className="wrapper_card">
      <div>{props.title}</div>
      <img src={props.image} className="card_image" alt="card_product" />
      <div>{props.category}</div>
      <div>{props.price}</div>
      <div>{props.rating}</div>
    </div>
  );
};

export default Card;
