import React from "react";
import style from "./CardEducation.module.css";

function CardEducation({imagen, title, link}) {
  return (
    <div className={style.Card}>
      <img className={style.image} src={imagen} alt="Icon" />
      <h3>{title}</h3>
      <a href={link} target="_blank" rel="noreferrer">
        <img className={style.arrow} src="./assets/img/arrow.png" alt="Arrow" />
      </a>
    </div>
  );
}

export default CardEducation;
