import React from 'react';
import SectionHeader from '../pieces/SectionHeader/SectionHeader.jsx';
import './HomeSection.css';

function HomeSection(props){

    
    var sectionColor = (props.isWhite) ? "bgcolor-white" : "bgcolor-grey";
    var colorClass = "homesection--"+sectionColor;

    return <section className={"homesection " + colorClass}>
        <SectionHeader title={props.title}></SectionHeader>
        {props.myChild}
    </section>
}

export default HomeSection;