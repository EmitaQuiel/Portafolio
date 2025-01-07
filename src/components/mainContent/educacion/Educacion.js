import React from "react";
import styles from "./Educacion.module.css";
import CardEducacion from "./cardEducacion/CardEducacion";

function Educacion() {
  return (
    <div className={styles.containerEducacion}>
      <h1>Formación Académica y Profesional</h1>

      <div className={styles.containerCenter}>
        <img src="./assets/img/containerEducacion.png" alt="imageneducacion" />
        <div className={styles.cardCenter}>
          <h3>Ingeniera de Sistemas</h3>
          <p>Título universitario que certifica mi formación integral en desarrollo de software, análisis de sistemas, bases de datos y gestión de proyectos tecnológicos.</p>
        </div>
      </div>

      <div className={styles.containerInfo1}>
        <CardEducacion
          titulo="Curso SQL"
          texto="Certificación que avala mis habilidades en bases de datos, desde consultas básicas hasta optimización avanzada."
          link="https://pub.coderhouse.com/legacy-certificates/6595ac93d3d4dd59f59f81aa?lang=es"
        />
        <CardEducacion
          titulo="Curso JavaScript"
          texto="Certificación que demuestra mi dominio en desarrollo web con JavaScript, incluyendo manejo del DOM y asincronía."
          link="https://pub.coderhouse.com/legacy-certificates/64fbb36c9237a7ac4410a2a7?lang=es"
        />
      </div>

      <div className={styles.containerInfo2}>
        <CardEducacion
          titulo="Especialización Frontend"
          texto="Especialización enfocada en tecnologías modernas para la creación de interfaces web intuitivas y responsivas."
          link="./assets/img/especializacionFrontend.jpg"
        />
        <CardEducacion
          titulo="CCST"
          texto="Certificación internacional en redes y soporte técnico otorgada por Cisco."
          link="https://www.credly.com/badges/f7cdac09-9111-4a4a-9a0a-0f0f0eef51a8/public_url"
        />
      </div>
    </div>
  );
}

export default Educacion;
