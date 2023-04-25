import React from 'react';

import './Projects.css';

import weatherproject from "./weatherproject.png";
import portfolioproject from "./portfolio.png";

export default function Project() {
return ( 
< div className='ProjectSectionFull'>
  <h2>Projects</h2>
    <div className="ProjectSection" >
      <div className="Projects" style={{ display: "flex" }}>
        <div className="ProjectCards" style={{ flex: 1 }}>
          <h3 className="ProjectHeading">Weather App</h3>
          <a className="UsedSkills React">React.js</a>{" "}
          <a className="UsedSkills API">API</a>{" "}
          <a className="UsedSkills Node">Node.js</a>{" "}
          <div className="ProjectImg">
            <img src={weatherproject}/>
          </div>
          <p className="ProjectParagraph">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
            diam nonumy
          </p>
          <button className="ProjectButton">See Project</button>
          <a className="ProjectLink">Open-code</a>
        </div>
        <div className="ProjectCards" style={{ flex: 1 }}>
          <h3 className="ProjectHeading">Portfolio Website</h3>
          <a className="UsedSkills React">React.js</a>{" "}
          <a className="UsedSkills JS">JavaScript</a>{" "}
          <a className="UsedSkills HTML">HTML</a>{" "}
          <a className="UsedSkills CSS">CSS</a>{" "}
          <div className="ProjectImg">
            <img src={portfolioproject}/>
          </div>
          <p className="ProjectParagraph">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumyLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
            diam nonumy
          </p>
          <button className="ProjectButton">See Project</button>
          <a className="ProjectLink">Open-code</a>
        </div>
      </div>
    </div>
    
   </div>
  );
}
