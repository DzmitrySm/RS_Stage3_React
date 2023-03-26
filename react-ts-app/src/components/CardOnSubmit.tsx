import React from "react";
import "./CardOnSubmit.css";
import { ICardOnSubmit } from "./types/types";

class CardOnSubmit extends React.Component<ICardOnSubmit> {
  constructor(props: ICardOnSubmit) {
    super(props);
  }

  render(): React.ReactNode {
    const CardOnSubmit = (
      <div key={`${this.props.title}`} className="wrapper_card">
        <div>{this.props.title}</div>
        <div>{this.props.dateDelivery}</div>
        <div>{this.props.countryDelivery}</div>
        <div>{this.props.inStock}</div>
        <div>{this.props.onOrder}</div>
        <div>{this.props.kindOfPay}</div>
        <img
          src={this.props.imagePath}
          className="card_image"
          alt="card_product"
        />
      </div>
    );
    return CardOnSubmit;
  }
}

export default CardOnSubmit;
