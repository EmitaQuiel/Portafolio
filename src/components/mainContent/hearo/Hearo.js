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
          GM, I'm Max. I enjoy building dynamic, creative products from start to
          finish. Focused on developing intuitive experiences that constantly
          grow and improve based on user metrics. Always shipping.
        </p>
      </div>
    </div>
  );
}

export default Hearo;
