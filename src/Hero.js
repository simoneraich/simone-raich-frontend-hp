import React from "react";

import "./Hero.css";

export default function Hero() {
  return (
    <div className="Hero" style={{ display: "flex" }}>
      <div style={{ flex: 2 }}>
        <h3>Frontend Developer</h3>
      </div>
      <div className="Hero-img" style={{ flex: 1, padding: "50px" }}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Mona_Lisa-restored.jpg/1200px-Mona_Lisa-restored.jpg" alt="simone_raich_portrait" width={400}></img>
      </div>
    </div>
  );
}