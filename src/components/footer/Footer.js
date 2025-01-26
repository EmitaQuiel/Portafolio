import React from "react";
import CardContact from "./CardContact";
function Footer() {
  return (
    <footer>
      <div>
        <h1>Contacto</h1>
        <div>
          <CardContact title="Instagram" text="@emily__0507" link="https://www.instagram.com/emily___0507/" />
          <CardContact title="Github" text="@EmitaQuiel" link="https://github.com/EmitaQuiel" />
          <CardContact title="Linkedin" text="Emily Castillo" link="https://www.linkedin.com/in/emi-castillo/" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
