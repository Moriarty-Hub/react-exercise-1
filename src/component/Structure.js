import React from "react";
import AboutMe from "./AboutMe";
import Head from "./Head";
import Education from "./Education";
import "../styles/structure.scss"

function Structure() {
    return (
        <div className="Structure">
            <Head/>
            <AboutMe/>
            <Education/>
        </div>);
}

export default Structure;
