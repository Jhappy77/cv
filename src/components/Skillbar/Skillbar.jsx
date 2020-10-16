import React from 'react';
import './Skillbar.css';

function Skillbar(props){
    var innerText = props.innerText;
    var size = props.size;
    var sizeAttribute = "skillbar__completion--size-";

    switch(size){
        case(100):
            sizeAttribute += "100";
            break;
        case(80):
            sizeAttribute += "80";
            break;
        case(60):
            sizeAttribute += "60";
            break;
        default:
            sizeAttribute += "40";
            break;
    }

    return <div className="skillbar">
    <div className={"skillbar__completion " + sizeAttribute}>{innerText}</div>
    </div>;

}

export default Skillbar;