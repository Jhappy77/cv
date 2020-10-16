import React from 'react';
import './SectionHeader.css';

function SectionHeader(props){

    return <div className="sectionheader">
    <h2 className="sectionheader__title">{props.title}</h2>
    <hr className="sectionheader__hr"/>
  </div>
}

export default SectionHeader;