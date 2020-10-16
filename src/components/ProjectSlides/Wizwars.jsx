import React from 'react';

import './Wizwars.css';

import k4n_ui from '../../images/k4n_ui.png';
import k4n_antwerp from '../../images/k4n_antwerp.png';
import garlicbread from '../../images/garlic_bread.jpeg';


function Wizwars(){
    return <div>
    <h3>Wizwars</h3>
{/* <img src={k4n_ui} className="kepler4neo__k4n_ui"></img>
<img src={k4n_antwerp} className="kepler4neo__k4n_antwerp"></img> */}
<p>Wizwars is under active development and is close to release, screenshots will be available soon! In the meantime, have some garlic bread :)
</p>
<img className="wizwars__garlicbread" src={garlicbread}></img>
    </div>

}

export default Wizwars;