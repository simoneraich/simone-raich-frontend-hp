import React from "react";
import "./About.css";

export default function About() {
  return (
    <div className="aboutSection">
      <div className="aboutContainer">
            <h3>Hi, it's me</h3>
            <br/>
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
            <div className="skillsSection" style={{ display: "flex" }}>
            <div style={{ flex: 2 }}>
              <h5>
                Languages:
              </h5>
              <p>
                Javascript
              </p>
            </div>
            <div style={{ flex: 2 }}>
              <h5>
                Skills:
              </h5>
              <p>
                React.js
              </p>
            </div>
            </div>
            </div>
    </div>
  );
}