import React from "react";
import style from "./Header.module.css";

function Header() {
  return (
    <header>
      <div className={style.containerHeader}>
        <img className={style.Logo} src="./assets/img/Logo.png" alt="Logo" />
        <div className={style.content}>
          <ul className={style.navList}>
            <li>
              <a
                href="https://github.com/EmitaQuiel"
                target="_blank"
                rel="noreferrer"
              >
                <img src="./assets/img/icongithub.png" alt="LogoGithub" />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/emily___0507/"
                target="_blank"
                rel="noreferrer"
              >
                <img src="./assets/img/iconInstagram.png" alt="LogoInstagram" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/emi-castillo"
                target="_blank"
                rel="noreferrer"
              >
                <img src="./assets/img/iconlinkedin.png" alt="LogoLinkedin" />
              </a>
            </li>
            <li>
              <a
                href="https://www.tiktok.com/@vipertechcr"
                target="_blank"
                rel="noreferrer"
              >
                <img src="./assets/img/iconTiktok.png" alt="LogoLinkedin" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
