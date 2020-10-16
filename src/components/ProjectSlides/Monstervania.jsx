import React from 'react';

import ratimg from '../../images/mv_rat.png';
import fsimg from '../../images/mv_frostspider.png';
import mcimg from '../../images/mv_mummified_creeper.png';
import vampimg from '../../images/mv_vamp.png';
import {useMediaPredicate} from 'react-media-hook';
import './Monstervania.css';

function Monstervania() {

    var lessThan900 = useMediaPredicate("(max-width: 940px)");

    var images =             <div className="monstervania__images">            <img className="monstervania__ratimg" src={ratimg} alt="A screenshot of a rat" />
    <img className="monstervania__mcimg" src={mcimg} alt="A screenshot of a mummified creeper emerging from a ruin"></img>
    <img className="monstervania__vampimg" src={vampimg} alt="A screenshot of a group of vampires in a dungeon"></img>
    </div>;

    var text = <div className="monstervania__text">
    <h3>Monstervania</h3>
    <p>Monstervania is a mod I developed for minecraft using Java and Minecraft Forge. The mod adds 5 new monsters to Minecraft, all with unique behaviors, attributes, and AI
    to challenge the player. This project shows my aptitude for working with large existing codebases and developing large projects. Check out the <a href="https://github.com/Jhappy77/Monstervania">GitHub repo!</a>
    </p>
    </div>

    return <div className="monstervania">
        {lessThan900 ? (text):(images)}
        {lessThan900 ? (images):(text)}
    </div>
}

export default Monstervania;