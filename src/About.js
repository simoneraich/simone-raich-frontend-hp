import React from "react";
import "./About.css";

export default function About() {
  return (
    <div>
      <div className="About-Container" style={{ display: "flex" }}>
        <div style={{ flex: 2 }}>
          <div className="About">
            <h3>Hi, it's me</h3>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam
              voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
              Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
              dolor sit amet.
            </p>
          </div>
        </div>
        <div style={{ flex: 1.5 }}>
          <div className="Skills">
            <h4>Language</h4>
            <p>javascript</p>
            <h4>Skills</h4>
            <p>React.js</p>
          </div>
        </div>
      </div>
    </div>
  );
}