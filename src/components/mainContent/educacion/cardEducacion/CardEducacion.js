import React from "react";
import styles from "./cardEducacion.module.css";

function CardEducacion({ titulo, texto, link }) {
  return (
    <div className={styles.card}>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.cardLink}
      >
        <div className={styles.cardinfo}>
          <h3>{titulo}</h3>
          <p>{texto}</p>

          <img src="./assets/img/animacionClick.gif" alt="Animación de hover" />
        </div>
      </a>
    </div>
  );
}

export default CardEducacion;
