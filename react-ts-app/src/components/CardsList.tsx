import React, { useState } from "react";
import { IResponceData, IResult } from "./types/types";
import CardModal from "./CardModal";

const CardsList = function (data: IResponceData): JSX.Element {
  const [propsCardModal, setPropsCardModal] = useState<IResult | null>(null);
  const [styleOverlay, setStyleOverlay] = useState("overlay_blackout");

  const handleClick = () => {
    fetch(`https://rickandmortyapi.com/api/character/1`)
      .then((res) => {
        if (!res.ok) {
          throw Error("Fetch dont work");
        }
        return res.json();
      })
      .then((data: IResult) => {
        setPropsCardModal(data);
        setStyleOverlay("overlay_blackout_active");
        console.log(data);
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <>
      <div className="wrapper_cards" onClick={handleClick}>
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
      {propsCardModal && <CardModal {...propsCardModal} style={styleOverlay} />}
    </>
  );
};

export default CardsList;
