import React from 'react';
import './Documents.css';
import DocumentBar from '../pieces/SlidingBar/SlidingBar.jsx';

function Documents() {

    return     <div className="documents">
        <DocumentBar name="Resume" fabClass="fas fa-file-pdf" link="https://drive.google.com/file/d/19NUc7OuI32A6NlU-tOE83SItF2gCVP8m/view?usp=sharing"></DocumentBar>
        <div className="documents__barspace"></div>
        <DocumentBar name="Transcript" isRight={true} fabClass="fas fa-graduation-cap" link="https://drive.google.com/file/d/1OzEqANt3rGvswXB8OhbCXRnpIpfW2EQN/view?usp=sharing"></DocumentBar>
        <div className="documents__barspace"></div>
        <DocumentBar name="Github" fabClass="fab fa-github" link="https://github.com/Jhappy77"></DocumentBar>
  </div>;
}


export default Documents;