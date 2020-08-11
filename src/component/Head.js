import React from "react";
import avatar from "../assets/avatar.jpg"
import "../styles/head.scss"

function Head() {

    const introduce = "MY NAME IS KAMIL 24YO AND THIS IS MY RESUME/CV";

    return (
        <div>
            <img src={avatar} alt="avatar" class="avatar"/>
            <h2 align="center">HELLO,</h2>
            <h2 align="center">{introduce}</h2>
            <hr/>
        </div>
    );
}

export default Head;
