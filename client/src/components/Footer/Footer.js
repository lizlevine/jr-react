import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter} from "react-icons/fa";
import "./style.css";

function Footer() {
  return (
    <div>
      <footer className="footer">
   
                <div class="content has-text-centered">
            
        <p className="social-icons">
        <FaGithub  color="orangered" size="2em"/> 
            <FaLinkedin  color="orangered" size="2em"/>
            <FaTwitter color="orangered" size="2em"/>
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
