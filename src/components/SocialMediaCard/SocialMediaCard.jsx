import React from 'react';
import './SocialMediaCard.css';

function SocialMediaCard(props) {

    //PROPS:
    //link - where to link to
    //faType - type of fontawesome icon
    //name - text to display

    return <div className="socialmediacard">
        <div className="card">
            <a className="socialmediacard__link" href={props.link} target="_blank">
                <div className="card-header">
                    <i className={"fab " + props.faType} aria-hidden="true"></i>
                </div>
                <div className="card-body">
                    {props.name}
                </div>
            </a>
        </div>
    </div>
}

export default SocialMediaCard;