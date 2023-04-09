import React from "react";
import "./CardOnSubmit.css";
import { ICardOnSubmit } from "./types/types";

const CardOnSubmit = function (props: ICardOnSubmit): JSX.Element {
  return (
    <div key={`${props.title}`} className="wrapper_card">
      <div>{props.title}</div>
      <div>{props.dateDelivery}</div>
      <div>{props.countryDelivery}</div>
      <div>{props.inStock}</div>
      <div>{props.onOrder}</div>
      <div>{props.kindOfPay}</div>
      <img src={props.imagePath} className="card_image" alt="card_product" />
    </div>
  );
};

export default CardOnSubmit;
