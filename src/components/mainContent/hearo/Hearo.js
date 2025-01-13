import React, { useState, useEffect } from "react";
import styles from "./Hearo.module.css";

function Hearo() {
  const [isVisible, setIsVisible] = useState(false); 

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition > 150) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <section id="#Home">
      <div className={styles.containerBienvenida}>
        <div className={styles.boxBienvenida}>
          <div className={styles.burbuja1}>
            <img src="./assets/img/burbujaPequena.png" alt="burbuja" />
          </div>

          <div className={styles.bienvenidaInfo}>
            <p className={styles.p1}>Calidad y Creatividad al</p>
            <p className={styles.p2}>Servicio de tus Metas</p>
          </div>
          <div className={styles.burbuja2}>
            <img src="./assets/img/burbujaGrande.png" alt="burbuja" />
          </div>
        </div>
      </div>

      <div
        className={`${styles.contenedorAbajo} ${
          isVisible ? styles.visible : ""
        }`}
      >
        <section id="Sobremi">
        <img src="./assets/img/aboutmeBackground.png" alt="aboutmeImage" />
        <div className={styles.containerSobremi}>
          <h2>Sobre Mi</h2>
          <p>Soy Ingeniera de Sistemas apasionada por la tecnología y<br></br> el desarrollo de soluciones innovadoras. Con experiencia <br></br>en diseño web, desarrollo backend y gestión de bases de <br></br>datos, me especializo en crear proyectos que combinan <br></br>creatividad y funcionalidad. Mi objetivo es transformar<br></br> ideas en herramientas digitales eficientes, adaptadas a las <br></br>necesidades de cada cliente. Siempre busco aprender <br></br>y crecer profesionalmente, manteniéndome actualizada con<br></br> las últimas tendencias tecnológicas.</p>
        </div>
        </section>
      </div>
        
    </section>
  );
}

export default Hearo;
