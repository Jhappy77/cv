import React from 'react';
import './AboutMe.css';
import joelicon from '../../images/joelcircular.jpg';

function AboutMe() {
    return <div className="aboutme">
        <img className="aboutme__image" src={joelicon} alt="Joel with two thumbs up" />
        <div className="aboutme__textdiv">
            <p className="aboutme__text">
                Hey, I'm Joel. I study software engineering at the University of Calgary and I have a passion for creating. I am a go-getter
                with an entrepreneurial spirit and a life-long love of learning. I am a team player with excellent communication skills and an
                ability to self-motivate and adapt on the fly. I can apply my strong knowledge of object-oriented software design and full-stack
                development to collaborate and create top-quality projects. I am driven by a passion for innovation and a mission to use the 
                next generation of technology to make the world a better place.
          </p>
        </div>
    </div>;
}


export default AboutMe;