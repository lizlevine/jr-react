import React from "react";
import { FaGithub, FaLinkedin,  FaTwitter, FaEnvelope } from "react-icons/fa";

import "./style.css";

function Footer() {
  return (
    <div>
      <footer className="footer">
   
                <div class="content has-text-centered">
            
        <p className="social-icons">
        <FaGithub  color="orangered" size="4em" padding-right="40px"/> 
            <FaLinkedin  color="orangered" size="2em"/>
            <FaTwitter color="orangered" size="2em"/>
            <FaEnvelope color="orangered" size="2em"/>
          </p>
        <p id="copyright">
          &copy; Copyright 2020 John Ryan LLC
        </p>
      </div>

      </footer>
      </div>
   
  );
}

export default Footer;
