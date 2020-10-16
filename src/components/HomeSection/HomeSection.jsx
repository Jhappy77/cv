import React from 'react';
import SectionHeader from '../SectionHeader/SectionHeader.jsx';
import './HomeSection.css';

function HomeSection(props){

    
    var sectionColor = (props.isWhite) ? "bgcolor-white" : "bgcolor-grey";

    return <section className={"homesection " + "homesection--"+sectionColor}>
        <SectionHeader title={props.title}></SectionHeader>
        {props.myChild}
    </section>
}

export default HomeSection;