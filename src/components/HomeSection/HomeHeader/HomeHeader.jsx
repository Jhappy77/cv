import React from 'react';
import './HomeHeader.css';

function HomeHeader() {

    return <section className="homeheader" id="head">
        <div className="homeheader__innerdiv">
            <div>
                <h1 className="homeheader__title">Joel Happ</h1>
            </div>
            <h2 className="homeheader__roundedsubtitle">Engineer & Innovator</h2>
        </div>
    </section>
}

export default HomeHeader;