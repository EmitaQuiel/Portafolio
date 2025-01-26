import React from "react";
import style from "./Hearo.module.css";

function Hearo() {
  return (
    <div className={style.ContainerHearo}>
      <div className={style.info}>
        <div className={style.content}>
        <img src="./assets/img/foto1.jpg" alt="" />
        </div>
        <div className={style.content}>
        <h1>Emily Castillo</h1>
        <h2>Ingeniera de Sistemas</h2>
        </div>
        
      </div>
      <div className={style.aboutme}>
        <h1>Sobre mi</h1>
        <p>
        ¡Hola! Soy Emily. Disfruto creando productos dinámicos y creativos de principio a fin. Me enfoco en desarrollar experiencias intuitivas que evolucionan y mejoran constantemente basadas en las necesidades de los usuarios. Siempre en constante evolución.
        </p>
      </div>
    </div>
  );
}

export default Hearo;
