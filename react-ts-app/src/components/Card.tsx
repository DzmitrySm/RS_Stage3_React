import React from "react";
import "./Card.css";
import { ICard } from "./types/types";

class Card extends React.Component<ICard> {
  constructor(props: ICard) {
    super(props);
  }

  render(): React.ReactNode {
    const card = (
      <div key={`${this.props.id}`} className="wrapper_card">
        <div>{this.props.title}</div>
        <img src={this.props.image} className="card_image" />
        <div>{this.props.category}</div>
        <div>{this.props.price}</div>
        <div>{this.props.rating}</div>
      </div>
    );
    return card;
  }
}

export default Card;
