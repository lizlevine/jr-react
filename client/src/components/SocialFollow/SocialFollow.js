import React from "react";
import { FaGithub, FaLinkedin,  FaTwitter, FaEnvelope } from "react-icons/fa";

import "./style.css";

const styles = {
  iconStyle: {
    color: "indigo",
    margin: "30px",
    size: "5em", 
    textAlign: "center"
  }
};

// We use JSX curly braces to evaluate the style object

function SocialFollow() {
  return (
    <div style={styles.iconStyle} className="social-container">
      <h2>Social Follow</h2>


      <p className="socialIcons">
        <FaGithub  /> 
            <FaLinkedin />
            <FaTwitter />
            <FaEnvelope />
          </p>

    </div>
  );
}


export default SocialFollow;
