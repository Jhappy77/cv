import React from 'react';
import './SlidingBar.css';
import VisibilitySensor from 'react-visibility-sensor';
import {useState} from 'react';

function DocumentBar(props){
    var isRight = props.isRight || false;
    const fabClass = props.fabClass || "fab fa-github";
    var barclass = "slidingbar slidingbar--left";

    const download = props.download || false;
    const link = props.link || "";


    if(isRight){
        barclass = "slidingbar slidingbar--right";
    }

    const [theBarclass, setBarclass] = useState(barclass);

    function slideBar(isVisible){
        if(!isVisible){
            if(isRight){
                setBarclass(barclass + " slidingbar__hidden--right");
            }else{
                setBarclass(barclass + " slidingbar__hidden");
            }
            //console.log("Invisible! " + barclass + " theBarClass:" + theBarclass);
        } else{
            //console.log("Visible! " + barclass + " theBarClass:" + theBarclass);
            setBarclass(barclass);
        }
    }



    return(<div>
        <VisibilitySensor onChange={slideBar}>
            <div className="slidingbar__detector"></div>
        </VisibilitySensor>
            <a href={link} download={download} target="_blank" rel="noopener noreferrer" className="slidingbar__link">
            { isRight?  
            <div className="slidingbar__hider">
            <div className={theBarclass} >
                <div className="slidingbar__fab"><i className={fabClass} aria-hidden="true"></i></div>
                <div className="slidingbar__name">{props.name}</div>
            </div>
            </div> 
            :
            <div className={theBarclass} >
                <div className="slidingbar__name">{props.name}</div>
                <div className="slidingbar__fab"><i className={fabClass} aria-hidden="true"></i></div>
            </div> 
            }
            </a> 

        </div>
    )
}

export default DocumentBar;