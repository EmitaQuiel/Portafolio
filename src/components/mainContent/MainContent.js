import React from "react";
import Hearo from "./hearo/Hearo";
import Educacion from "./educacion/Educacion";
import Proyectos from "./proyectos/Proyectos";


function MainContent(){
    return (
        <div>
            <Hearo />
            <Educacion/>
            <Proyectos />
        </div>
    );
}

export default MainContent;