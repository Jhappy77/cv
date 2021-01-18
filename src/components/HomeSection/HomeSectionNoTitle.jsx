import React from 'react';
import './HomeSection.css';

function HomeSectionNoTitle(props){

    
    var sectionColor = (props.isWhite) ? "bgcolor-white" : "bgcolor-grey";
    var colorClass = "homesection--"+sectionColor;

    return <section className={"homesection " + colorClass + " homesection--nopad"}>
        {props.myChild}
    </section>
}

export default HomeSectionNoTitle;