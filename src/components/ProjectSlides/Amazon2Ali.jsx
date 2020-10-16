import React from 'react';

import './Amazon2Ali.css';

// import k4n_ui from '../../images/k4n_ui.png';
// import k4n_antwerp from '../../images/k4n_antwerp.png';
import shibe from '../../images/shibe.jpg';


function Amazon2Ali(){
    return <div>
    <h3>CheaperInChina</h3>
    {/* <img src={k4n_ui} className="kepler4neo__k4n_ui"></img>
    <img src={k4n_antwerp} className="kepler4neo__k4n_antwerp"></img> */}
    <p>
        CheaperInChina is a chrome extension that quickly searches for Amazon products on AliExpress to find better deals. Release is pending approval from AliExpress for API usage. Check back in a week or two! In the meantime, enjoy this shibe! :)
    </p>
    <img className="amazon2ali__shibe"src={shibe}></img>
    </div>

}

export default Amazon2Ali;