import React from "react";
import style from "./CardContact.module.css";

function CardContact({ title, text, link }) {
  return (
    <div className={style.containerCard}>
      <div className={style.card}>
        <h3>{title}</h3>
        <p>{text}</p>
        <a href={link} target="_blank" rel="noreferrer">
          <img src="./assets/img/arrow.png" alt="Arrow" />
        </a>
      </div>
    </div>
  );
}

export default CardContact;
