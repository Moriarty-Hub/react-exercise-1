import React from "react";
import "../styles/educations.scss"

function Education() {
    const title = "EDUCATION";
    const educationInfo = [
        {
            'year': '1990',
            'summary': 'I was born in Katowice',
            'details': 'Lorem ipsum dolor sit amet,consectetur adipisicing elit.Sapiente,exercitationem,totam,dolores iste dolore est aut modi.'
        },
        {
            'year': '2005',
            'summary': 'Secondary school specializeing in artistic',
            'details': 'Eos,explicabo,nam,tenetur et ab eius deserunt aspernatur ipsum ducimus quibusdam quis voluptatibus.'
        },
        {
            'year': '2009',
            'summary': 'First level graduation in Graphic Design',
            'details': 'Aspernatur,mollitia,quos maxime eius suscipit sed beatae ducimus quaerat quibusdam perferendis?Iusto,quibusdam asperiores unde repellat.'
        },
        {
            'year': '2012',
            'summary': 'Second level graduation in Graphic Design',
            'details': 'Ducimus,aliquam tempore autem itaque et accusantium!'
        },
    ]

    function outputEducationInfo() {
        return educationInfo.map(item => (
            <li>
                <p class="year">{item.year}</p>
                <div class="description">
                    <p class="summary" key={item.year}>{item.summary}</p>
                    <p class="details">{item.details}</p>
                </div>
            </li>
        ));
    }

    return (
        <div>
            <h3>{title}</h3>
            <ul>{outputEducationInfo()}</ul>
        </div>
    );
}

export default Education;
