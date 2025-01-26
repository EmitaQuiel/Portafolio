import React from "react";
import style from "./Education.module.css";
import CardEducation from "./cardEducation/CardEducation";
function Education(){
    return(
        <div className={style.containerEducation}>
            <h1>Educación</h1>
            <div className={style.containerCards}>
            <CardEducation imagen="./assets/img/UISIL.jpg" title="Ingenieria de Sistemas" link=""/>
            <CardEducation imagen="./assets/img/Junior_CR.jpg" title="Especializacion Frontend" link="./assets/img/especializacionFrontend.jpg"/>
            <CardEducation imagen="./assets/img/Logo_Coderhouse.jpg" title="SQL" link="https://pub.coderhouse.com/legacy-certificates/6595ac93d3d4dd59f59f81aa?lang=es"/>
            <CardEducation imagen="./assets/img/ccst.png" title="CCST" link="https://www.credly.com/badges/f7cdac09-9111-4a4a-9a0a-0f0f0eef51a8/public_url"/>
            <CardEducation imagen="./assets/img/Logo_Coderhouse.jpg" title="JavaScript" link="https://pub.coderhouse.com/legacy-certificates/64fbb36c9237a7ac4410a2a7?lang=es"/>
            </div>
        </div>
    )
}

export default Education;