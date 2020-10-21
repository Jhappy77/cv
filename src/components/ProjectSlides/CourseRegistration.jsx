import React from 'react';

import './CourseRegistration.css';

import crscreen1 from '../../images/courseregister.png';

function CourseRegistration() {
    return <div className="courseregist">
        <div className="courseregist__text">
        <h3>Course Register</h3>
        <p>
            Course Register is a desktop Java application that I created with my team as a group project during my second year of Software Engineering. This
            app simulates a course registration website for university students. We built this app with JavaFX, employing the Model-View-Controller design pattern.
            We also added several advanced features, such as client-server capabilites and simple database integration. Check it out on <a href="https://github.com/Jhappy77/CourseRegistration">GitHub!</a>
        </p>
        </div>
        <div>
        <img className="courseregist__screenshot" alt="A screenshot of the Course Register program" src={crscreen1} />
        </div>
    </div>

}

export default CourseRegistration;