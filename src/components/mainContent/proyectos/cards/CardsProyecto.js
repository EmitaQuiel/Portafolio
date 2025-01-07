import React from "react";
import styles from "./CardsProyectos.module.css";

function CardsProyectos({ titulo, texto, onClick }) {
  return (
    <div className={styles.containerCard} onClick={onClick}>

      <div className={styles.info1}>
        <h2>{titulo}</h2>
        <img className={styles.imgArrow} src="./assets/img/arrowRigth.png" alt="arrowRight"/>
      </div>

      <div className={styles.info2}>
        <p>{texto}</p>
      </div>
    </div>
  );
}

export default CardsProyectos;
