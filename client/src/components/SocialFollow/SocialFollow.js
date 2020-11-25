import React from "react";
import { FaGithub, FaLinkedin,  FaTwitter, FaEnvelope } from "react-icons/fa";

import "./style.css";

function SocialFollow() {
  return (
    <div class="social-container">
      <h2>Social Follow</h2>

      <p className="social-icons">
        {/* <FaGithub  color="orangered" size="2em"   margin-right="10em"/> 
            <FaLinkedin  color="orangered" size="2em" padding-right="10em"/>
            <FaTwitter color="orangered" size="2em"/>
            <FaEnvelope color="orangered" size="2em"/> */}

              <FaGithub /> 
            <FaLinkedin />
            <FaTwitter/>
            <FaEnvelope/>
          </p>
    </div>
  );
}


export default SocialFollow;
