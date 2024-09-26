import React, { useEffect, useRef } from "react";
import "./HomeFooter.css";
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
import { useScroll } from "../../../utils/ScrollContext";

const HomeFooter = () => {
  const targetRef = useRef(null);
  const { registerRef } = useScroll();

  useEffect(() => {
    registerRef("scrollToFooter", targetRef.current);
  }, [registerRef]);

  return (
    <div className="homefooter-wrapper" ref={targetRef}>
      <div className="homefooter-top">
        <div className="homefooter-info1">
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

        <div className="homefooter-info">
          <h2>Item7</h2>
          <p>
            Necessary, making this the first true generator on the Internet. It
            uses a dictionary of over 200 Latin words, combined with
          </p>
          <div className="homefooter-icons">
            <span>
              <FaFacebook size={22} className="icon-homefooter" />
            </span>
            <span>
              <FaTwitter size={22} className="icon-homefooter" />
            </span>
            <span>
              <FaInstagram size={22} className="icon-homefooter" />
            </span>
            <span>
              <FaLinkedin size={22} className="icon-homefooter" />
            </span>
            <span>
              <FaPinterest size={22} className="icon-homefooter" />
            </span>
          </div>
        </div>

        <div className="homefooter-info">
          <h2>Opening Hours</h2>
          <p>Everyday</p>
          <p>10.00 Am -10.00 Pm</p>
        </div>
      </div>

      <div className="homefooter-bottom">
        <p>© 2024 All Rights Reserved By CypherDev</p>
      </div>
    </div>
  );
};

export default HomeFooter;
