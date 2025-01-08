import React from "react";
import styles from "./Header.module.css";

function Header() {
  return (
    <header>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <h2>emita</h2>
        </div>
        <div className={styles.content}>
          <ul className={styles.navList}>
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
        <div className={styles.containerContacto}>
          <a
            href="https://github.com/EmitaQuiel"
            target="_blank"
            rel="noreferrer"
          >
            <img src="./assets/img/icongithub.png" alt="icongithub" />
          </a>
          <a
            href="www.linkedin.com/in/emi-castillo"
            target="_blank"
            rel="noreferrer"
          >
            <img src="./assets/img/iconlinkedin.png" alt="iconlinkedin" />
          </a>
          <a
            href="https://www.instagram.com/emily___0507/"
            target="_blank"
            rel="noreferrer"
          >
            <img src="./assets/img/iconInstagram.png" alt="iconwhatsapp" />
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
