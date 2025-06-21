import React from "react";
import "./footer.css";
import logo from "../../assets/hotc_logo.png"; // use the "HOUSE ON THE CLOUDS" logo
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-column left">
        <img src={logo} alt="HOTC Logo" className="footer-logo" />
        <div className="footer-icons">
          <FaInstagram />
          <FaFacebookF />
          <FaTwitter />
        </div>
      </div>
      <div className="footer-column center">
        <p>Bankura . West Bengal</p>
        <p>Privacy Policy</p>
      </div>
      <div className="footer-column right">
        <p>+91 7001322837</p>
        <p>
          <a href="mailto:hello@houseontheclouds.com">
            hello@hrisikeshChakraborty.com
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
