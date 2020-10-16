import React from 'react';

import ratimg from '../../images/mv_rat.png';
import fsimg from '../../images/mv_frostspider.png';
import mcimg from '../../images/mv_mummified_creeper.png';
import vampimg from '../../images/mv_vamp.png';

import './Monstervania.css';

function Monstervania() {
    return <div className="monstervania">
            <div>            <img className="monstervania__ratimg" src={ratimg} alt="A screenshot of a rat" />
            <img className="monstervania__mcimg" src={mcimg} alt="A screenshot of a mummified creeper emerging from a ruin"></img>
            <img className="monstervania__vampimg" src={vampimg} alt="A screenshot of a group of vampires in a dungeon"></img>
            </div>
            <div className="monstervania__text">
            <h3>Monstervania</h3>
            <p>Monstervania is a mod I developed for minecraft using Java and Minecraft Forge. The mod adds 5 new monsters to Minecraft, all with unique behaviors, attributes, and AI
            to challenge the player. This project shows my aptitude for working with large existing codebases and developing large projects. Check out the <a href="https://github.com/Jhappy77/Monstervania">GitHub repo!</a>
            </p>
            </div>
    </div>
}

export default Monstervania;