import React from "react";
import Hearo from "./hearo/Hearo";
import Projects from "./projects/Projects";
import Education from "./education/Education";
function MainContent(){
    return(
        <div>
            <Hearo/>
            <Projects />
            <Education />
        </div>
    )
}

export default MainContent;