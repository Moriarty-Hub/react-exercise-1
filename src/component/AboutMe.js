import React from "react";
import "../styles/aboutMe.scss"

function AboutMe() {

    const title = "ABOUT ME";

    const content = "Lorem ipsum dolor sit amet, consectetur elit. Repellendus, non, " +
        "dolorem, cumque distinctio magni quam expedita velit laborum sunt amet facere tempora ut fuga aliquam ad " +
        "asperiores voluptatem dolorum! Quasi.";

    return (
        <div className="AboutMe">
            <h3>{title}</h3>
            <p class="text">{content}</p>
        </div>
    );
}

export default AboutMe;
