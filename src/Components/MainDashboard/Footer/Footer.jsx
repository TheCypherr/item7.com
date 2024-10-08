import React from "react";
import "./Footer.css";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaPinterest,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="mainfooter-wrapper">
      <div className="footer-top">
        <div className="top-info1">
          <h2>Contact Us</h2>
          <a href="https://googlemaps.com">
            <p>
              <FaMapMarkerAlt size={17} /> Location
            </p>
          </a>
          <a href="https://wa.me+2347012208069">
            <p>
              <FaPhone size={17} /> Call +234 701 220 8069
            </p>
          </a>

          <a href="https://gmail.com">
            <p>
              <FaEnvelope size={17} /> cypherdev6@gmail.com
            </p>
          </a>
        </div>

        <div className="top-info">
          <h2>Item7</h2>
          <p>
            Necessary, making this the first true generator on the Internet. It
            uses a dictionary of over 200 Latin words, combined with
          </p>
          <div className="media-icons">
            <span>
              <FaFacebook size={22} className="icon" />
            </span>
            <span>
              <FaTwitter size={22} className="icon" />
            </span>
            <span>
              <FaInstagram size={22} className="icon" />
            </span>
            <span>
              <FaLinkedin size={22} className="icon" />
            </span>
            <span>
              <FaPinterest size={22} className="icon" />
            </span>
          </div>
        </div>

        <div className="top-info">
          <h2>Opening Hours</h2>
          <p>Everyday</p>
          <p>10.00 Am -10.00 Pm</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2024 All Rights Reserved By CypherDev</p>
      </div>
    </div>
  );
};

export default Footer;
