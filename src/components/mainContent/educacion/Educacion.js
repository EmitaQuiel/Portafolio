import React, { useState, useEffect, useRef } from "react";
import styles from "./Educacion.module.css";
import CardEducacion from "./cardEducacion/CardEducacion";

function Educacion() {
  const [isVisible, setIsVisible] = useState({
    containerEducacion: false,
    containerCenter: false,
    containerInfo1: false,
    containerInfo2: false,
  });

  const containerRefs = {
    containerEducacion: useRef(null),
    containerCenter: useRef(null),
    containerInfo1: useRef(null),
    containerInfo2: useRef(null),
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("data-id");
            setIsVisible((prev) => ({ ...prev, [id]: true }));
          }
        });
      },
      { threshold: 0.2 }
    );

    Object.values(containerRefs).forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      Object.values(containerRefs).forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []);

  return (
    <section id="Educacion">
      <div
      ref={containerRefs.containerEducacion}
      data-id="containerEducacion"
      className={`${styles.containerEducacion} ${isVisible.containerEducacion ? styles.visible : ""}`}
    >
      <h1>Formación Académica y Profesional</h1>

      <div
        ref={containerRefs.containerCenter}
        data-id="containerCenter"
        className={`${styles.containerCenter} ${isVisible.containerCenter ? styles.visible : ""}`}
      >
        <img src="./assets/img/containerEducacion.png" alt="imageneducacion" />
        <div className={styles.cardCenter}>
          <h3>Ingeniera de Sistemas</h3>
          <p>
            Título universitario que certifica mi formación integral en desarrollo de software, análisis de sistemas,
            bases de datos y gestión de proyectos tecnológicos.
          </p>
        </div>
      </div>

      <div
        ref={containerRefs.containerInfo1}
        data-id="containerInfo1"
        className={`${styles.containerInfo1} ${isVisible.containerInfo1 ? styles.visible : ""}`}
      >
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

      <div
        ref={containerRefs.containerInfo2}
        data-id="containerInfo2"
        className={`${styles.containerInfo2} ${isVisible.containerInfo2 ? styles.visible : ""}`}
      >
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
    </section>
  );
}

export default Educacion;
