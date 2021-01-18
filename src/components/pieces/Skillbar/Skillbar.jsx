import React from 'react';
import './Skillbar.css';


//     const NF = 50, 
//     //const S = getComputedStyle(document.body), 
//     INI = rgba(3, 171, 197, 255); //getRGBA(S.getPropertyValue('--c-ini').trim()), 
//     FIN = rgba(3, 171, 197, 255); //getRGBA(S.getPropertyValue('--c-fin').trim()), 
//     RANGE = [], 
//     ALPHA = 1 - INI[3] || 1 - FIN[3];

// let rID = null, f = 0, dir = -1, range;

// function stopAni() {
//   cancelAnimationFrame(rID);
//   rID = null;  
// };

// function update() {
//   f += dir;
  
//   let k = f/NF; 
  
//   document.body.style.setProperty(
//     '--c', 
//     `rgb${ALPHA ? 'a' : ''}(
//       ${INI.map((c, i) => Math.round(c + k*RANGE[i])).join(',')})`
//   );
  
//   if(!(f%NF)) {
//     stopAni();
//     return;
//   }
  
//   rID = requestAnimationFrame(update)
// };

// (function init() {
//   if(!ALPHA) INI.pop();
//   RANGE.splice(0, 0, ...INI.map((c, i) => FIN[i] - c));
// })();

// addEventListener('click', e => {
//   if(rID) stopAni();
//   dir *= -1;
//   update();
// }, false);



// function aniGradient(event){
//     event.target.style.background = 'linear-gradient(to right, #03abc5 30%, #00ddff 100%)';;
// }

// function stopAni(event){
//     event.target.style.background = 'linear-gradient(to left, #03abc5 5%, #00ddff 100%)';
// }

function Skillbar(props){
    var innerText = props.innerText;
    var size = props.size;
    var sizeAttribute = "skillbar__completion--size-";







    

    switch(size){
        case(100):
            sizeAttribute += "100";
            break;
        case(80):
            sizeAttribute += "80";
            break;
        case(60):
            sizeAttribute += "60";
            break;
        default:
            sizeAttribute += "40";
            break;
    }

    return <div className="skillbar__container">
        <div className="skillbar__empty">
            <div className={"skillbar__completion " + sizeAttribute}>
                <div className="skillbar__innertxt">{innerText}</div>
            </div>
        </div> 
        </div>;

}

/* onMouseEnter={aniGradient} onMouseLeave={stopAni}*/

export default Skillbar;