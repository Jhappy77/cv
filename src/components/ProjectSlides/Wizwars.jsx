import React from 'react';

import './Wizwars.css';

//import garlicbread from '../../images/garlic_bread.jpeg';
import wscreen1 from '../../images/wizwars1.png';
import wscreen2 from '../../images/wizwars2.png';

function Wizwars() {
    return <div className="wizwars">
        <div className="wizwars__text">
        <h3>Wizwars</h3>
        <p>
            Wizwars is a mobile and browser game that I co-developped with one of my buddies using Unity and C#. Inspired by classic Flash games of the late 2000's, players control opposing factions
            of wizards that must use their magic to defeat each other. Wizwars is coming soon to an App Store near you!
        </p>
        </div>
        <div>
        <img  className="wizwars__screenshot wizwars__screenshot--num-1" src={wscreen1} alt="A screenshot of WizWars"/>
        <img className="wizwars__screenshot wizwars__screenshot--num-2" src={wscreen2} alt="A screenshot of WizWars showing the weapon select stage"/>
        </div>
    </div>

}

export default Wizwars;