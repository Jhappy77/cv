import React from 'react';
import './MySkills.css';
import Skillbar from '../pieces/Skillbar/Skillbar.jsx';


function MySkills() {
    return     <div className="myskills">
      <Skillbar size={100} innerText={"Java"} /> 
      <Skillbar size={100} innerText={"React"} />
      <Skillbar size={100} innerText={"C++"} />
      <Skillbar size={80} innerText={"Git"} />
      <Skillbar size={80} innerText={"Python"} />
      <Skillbar size={80} innerText={"SQL"} />
      <Skillbar size={80} innerText={"C#"} />
      <Skillbar size={60} innerText={"Javascript"} />
      <Skillbar size={60} innerText={"HTML"} />
      <Skillbar size={60} innerText={"CSS"} />
      <Skillbar size={60} innerText={"C"} />
      <Skillbar size={60} innerText={"Django"} />
      <Skillbar size={40} innerText={"Svelte"} />
      <Skillbar size={40} innerText={"Node.js"} />
      <Skillbar size={40} innerText={"Typescript"} />
      <Skillbar size={40} innerText={"MongoDB"} />
</div>;
}


export default MySkills;