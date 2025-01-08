import React, { useEffect, useRef, useState } from "react";
import styles from "./Footer.module.css";

function Footer() {
  const footerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="Contacto">
      <footer
        ref={footerRef}
        className={isVisible ? styles.visible : styles.hidden}
      >
        <div className={styles.containerFooter}>
          <div className={styles.content}>
            <div className={styles.ListInfo}>
              <ul className={styles.List}>
                <li>
                  <a href="#Home">Inicio</a>
                </li>
                <li>
                  <a href="#Sobremi">Sobre Mi</a>
                </li>
                <li>
                  <a href="#Proyectos">Proyectos</a>
                </li>
                <li>
                  <a href="#Educacion">Educacion</a>
                </li>
                <li>
                  <a href="#Contacto">Contacto</a>
                </li>
              </ul>
            </div>
            <div className={styles.contactFreelancer}>
              <div className={styles.freelancer}>
                <a
                  href=" https://es.fiverr.com/emiquiel"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src="./assets/img/iconFiverr.png" alt="Fiverr Icon" />
                  Contactame por Fiverr
                </a>
              </div>
              <div className={styles.freelancer}>
                <a href="https://www.freelancer.com/u/EmitaQuiel?sb=t"
                  target="_blank"
                  rel="noreferrer">
                  <img
                    src="./assets/img/iconFreelancer.png"
                    alt="Freelancer Icon"
                  />
                  Contactame por Freelancer
                </a>
              </div>
            </div>
          </div>
          <hr />
          <div className={styles.content2}>
            <div className={styles.copyrigth}>
              <p>&copy; 2025 Emily Castillo. All rights reserved.</p>
            </div>
            <div className={styles.redes}>
              <a
                href="www.linkedin.com/in/emi-castillo"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="./assets/img/iconllinkedinFooter.png"
                  alt="LinkedIn Icon"
                />
              </a>
              <a
                href="https://github.com/EmitaQuiel"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="./assets/img/iconGithubFooter.png"
                  alt="GitHub Icon"
                />
              </a>
              <a
                href="https://www.instagram.com/emily___0507/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="./assets/img/iconInstagramFooter.png"
                  alt="Instagram Icon"
                />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}

export default Footer;
