import React from "react";
import style from "./Card.module.css";

function Card({ date, title, description, technologies, link }) {
  return (
    <div className={style.containerCard}>
      <div className={style.infoCard}>
        <p>{date}</p>
        <h2>{title}</h2>
        <a href={link} target="_blank"><img src="./assets/img/arrow.png" alt="Arrow"/></a>
      </div>
      <div className={style.info}>
        <p>{description}</p>
        <ul>
          {technologies && technologies.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Card;
