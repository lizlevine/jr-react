import React from "react";
import "./style.css";

function Jumbotron() {
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="jumbo">
        <h1 className="display-4">John Ryan</h1>
        <p className="lead">
          creative business development <br></br>
          {/* (But each dog only gets one CLICK | REWARD per game!) */}
        </p>
      </div>
    </div>
  );
}

export default Jumbotron;
