import React from "react";
import "./style.css";

function Footer() {
  return (
    <div>
      <footer className="footer">
        {/* <div className="footer">
          <p className="thanks">
            <a href="#">You can find me here:</a>
            <p className="copyright">&copy; copyright 2020 elizabeth levine</p> */}
                <div class="content has-text-centered">
    

        <div id="connect">
          <a
            href="https://www.linkedin.com/in/john-ryan-239ba293"
            target="_blank"
            ><img
              src="assets/images/linked2.png"
              class="social"
              alt="LinkedIn logo"
          /></a>

          <img
            src="assets/twitter.png"
            class="social"
            alt="Twitter logo"
          />
          <img
            src="assets/instagram.png"
            class="social"
            alt="Instagram logo"
          />

          <img src="assets/fb2.png" class="social" alt="Facebook logo" />
        </div>

        <p id="copyright">
          &copy; Copyright 2020 John Ryan LLC
        </p>
      </div>
      </footer>
      </div>
   
  );
}

export default Footer;
