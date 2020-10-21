import React from 'react';

import './kepler4Neo.css';

import k4n_ui from '../../images/k4n_ui.png';
import k4n_antwerp from '../../images/k4n_antwerp.png';



function Kepler4Neo() {
    return <div className="kepler4neo">
        <div className="kepler4neo__text">
            <h3>kepler4Neo</h3>
            <p>Kepler4Neo is an open-source project I developed as part of my work with Menome during my internship with Arcurve. It is a simple application that you can download and run to
            provide a link between a Neo4J database and a <a href="https://kepler.gl/">kepler.gl</a> map. Kepler4Neo makes it easy to transform complex Neo4J queries into beautiful geographic data visualizations.
            Check it out at it's <a href="https://github.com/menome/kepler4Neo">GitHub repo!</a>
            </p>
        </div>
        <div>
            <img src={k4n_ui} className="kepler4neo__scrn kepler4neo__scrn--name-k4n_ui" alt="The kepler4Neo UI"></img>
            <img src={k4n_antwerp} className="kepler4neo__scrn kepler4neo__scrn--name-k4n_antwerp" alt="Data being displayed that was uploaded from kepler4Neo"></img>
        </div>
    </div>

}

export default Kepler4Neo;