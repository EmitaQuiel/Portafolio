import React, { useState } from "react";
import styles from "./DetallesProyectos.module.css";
import { useNavigate } from "react-router-dom";

function DetallesProyectos({ proyecto, closeModal }) {
  const navigate = useNavigate();
  const [isClosing, setIsClosing] = useState(false); 

  if (!proyecto) return null;

  const handleClose = () => {
    setIsClosing(true); 
    setTimeout(() => {
      closeModal(); 
    }, 500); 
  };

  const openGallery = (proyecto) => {
    const projectUrl = `/galeria?titulo=${encodeURIComponent(
      proyecto.titulo
    )}&texto=${encodeURIComponent(
      proyecto.texto
    )}&imagenes=${proyecto.imagenes.join(",")}`;
    window.open(projectUrl, "_blank");
  };

  return (
    <div className={`${styles.modalContent} ${isClosing ? styles.closing : ""}`}>
      <button className={styles.closeButton} onClick={handleClose}>
        X
      </button>
      <div className={styles.contentDetalle}>
        <div className={styles.gallery}>
          <img
            src={`assets/img/${proyecto.imagenes[0]}`}
            alt="Imagen de referencia"
            className={styles.image}
            onClick={() => openGallery(proyecto)}
          />
        </div>

        <div className={styles.info}>
          <div className={styles.titulo}>
            <h1>{proyecto.titulo}</h1>
          </div>
          <div className={styles.descripcion}>
            <p>{proyecto.descripcion}</p>
          </div>
        </div>

        <div className={styles.info2}>
          <div className={styles.link}>
            <h3>Enlace al proyecto:</h3>
            <a href={proyecto.link} target="_blank" rel="noopener noreferrer">
              {proyecto.link}
            </a>
          </div>
          <div className={styles.tecnologias}>
          <h3>Tecnologías utilizadas</h3>
            <ul>
              {proyecto.tecnologias.map((tecnologia, index) => (
                <li key={index}>{tecnologia}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetallesProyectos;
