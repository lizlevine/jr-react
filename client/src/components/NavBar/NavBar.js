import React from "react";
import "./style.css";

function NavBar(props) {
  return (
    <div className="sticky">
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
          About
        </a>
        <a className="navbar-brand" href="#">
          Projects
        </a>
        <a className="navbar-brand" href="#">
          Contact
        </a>
        {/* <div>
          <span className="clickResponse">{props.clickResponse}</span>
          <span className="score">Your Points: {props.yourPoints}</span>
          <span className="high-score">High Score: {props.highScore}</span>
        </div> */}
      </nav>
    </div>
  );
}

export default NavBar;
