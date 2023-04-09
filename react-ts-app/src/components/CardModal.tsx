import React, { useState } from "react";
import "./CardModal.css";
import { IResult } from "./types/types";

const CardModal = function (props: IResult): JSX.Element {
  const [style, setStyle] = useState("overlay_blackout_active");
  const [visibilityModal, setVisibilityModal] = useState(
    "wrapper_card_modal_active"
  );
  const handleClickOverlay = () => {
    console.log("close");
    setStyle("overlay_blackout");
    setVisibilityModal("wrapper_card_modal");
  };

  return (
    <div key={`${props.id}`} className={visibilityModal}>
      <img src={props.image} className="card_image_modal" alt="card_product" />
      <div>{props.name}</div>
      <div>{props.gender}</div>
      <div>{props.species}</div>
      <div>{props.status}</div>
      <div>{props.type}</div>
      <div>{props.origin.name}</div>
      <div>{props.location.name}</div>
      <div className={style} onClick={handleClickOverlay}></div>
    </div>
  );
};

export default CardModal;
