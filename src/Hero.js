import React from "react";

import "./Hero.css";
import portrait from "./portrait.png";

export default function Hero() {
  return (
    <div className="hero">
  <div className="hero-container" style={{ display: "flex" }}>
    <div className="name" style={{ flex: 3 }}>
      <h1>Simone Raich</h1>
      </div>
    <div className="circle" style={{ flex: 6}}> 
        <img src={portrait} alt="Portrait" style={{ position: "absolute", zIndex: 1}}/>
</div>
    
      <div className="social-icons" style={{ flex: 2 }}>
        <img src="#" alt="social icon"/>
      </div>
    
  </div>
    </div>
  );
}