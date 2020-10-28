import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import "./style.css";

function Footer() {
  return (
    <div>
      <footer className="footer">
   
                <div class="content has-text-centered">
              <ul>
          <li><FaGithub /> Check out my Github</li>
          <li><FaLinkedin />Join my network of creative professionals</li>
          </ul>
        <p id="copyright">
          &copy; Copyright 2020 John Ryan LLC
        </p>
      </div>
      </footer>
      </div>
   
  );
}

export default Footer;
