import React from 'react';

import './Amazon2Ali.css';

// import k4n_ui from '../../images/k4n_ui.png';
// import k4n_antwerp from '../../images/k4n_antwerp.png';
import shibe from '../../images/shibe.jpg';


function Amazon2Ali(){
    return <div>
    <h3>CheaperInChina</h3>
    <iframe className="amazon2ali__video" src="https://www.youtube.com/embed/MsUlgAihHP8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <p>
        CheaperInChina is a chrome extension that quickly searches for Amazon products on AliExpress to find better deals. Check out the video for more details, and message me if you'd like to check out the code!
    </p>
    {/* <img className="amazon2ali__shibe"src={shibe} alt="A cute doggo :)"></img> */}
    </div>

}

export default Amazon2Ali;