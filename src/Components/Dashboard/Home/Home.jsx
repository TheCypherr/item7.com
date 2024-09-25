import React, { useState } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { FaUser, FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import Marquee from "react-fast-marquee";
import { useScroll } from "../../../utils/ScrollContext";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  // scrollToSection
  const { scrollToSection } = useScroll();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleFaqScroll = (sectionKey) => {
    setIsOpen(false);
    scrollToSection(sectionKey);
  };

  const handleReviewScroll = (sectionKey) => {
    setIsOpen(false);
    scrollToSection(sectionKey);
  };

  const handleFooterScroll = (sectionKey) => {
    setIsOpen(false);
    scrollToSection(sectionKey);
  };

  return (
    <section className="header-wrapper home-back">
      <div className="dark-overlay"></div>
      <div className={`inner-h ${isOpen ? "menu-open" : ""}`}>
        <div className="h-one">
          <Link to="/">
            <img src="./item7go.png" alt="" />
          </Link>
        </div>
        <div onClick={toggleMenu} className="icon-menu">
          {isOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>

        {isOpen && (
          <div className="h-two-main">
            <div className="h-two-zero">
              <Link to="/" className="custom-link">
                HOME
              </Link>
              <Link
                className="custom-link"
                onClick={() => handleFaqScroll("faqScroll")}
              >
                FAQs
              </Link>
              <Link
                className="custom-link"
                onClick={() => handleReviewScroll("reviewScroll")}
              >
                REVIEWS
              </Link>
              <Link
                className="custom-link"
                onClick={() => handleFooterScroll("scrollToFooter")}
              >
                CONTACT
              </Link>
            </div>
          </div>
        )}

        <div className="h-two">
          <Link to="/" className="custom-link">
            HOME
          </Link>
          <Link
            className="custom-link"
            onClick={() => handleFaqScroll("faqScroll")}
          >
            FAQs
          </Link>
          <Link
            className="custom-link"
            onClick={() => handleReviewScroll("reviewScroll")}
          >
            REVIEWS
          </Link>
          <Link
            className="custom-link"
            onClick={() => handleFooterScroll("scrollToFooter")}
          >
            CONTACT
          </Link>
        </div>
        <div className="h-three new-adjust">
          <Link to="/login">
            <FaUser size={17} color="#000" className="icon icon-adjust" />
          </Link>
          <Link to="/login">
            <FaShoppingCart
              size={17}
              color="#000"
              className="icon icon-adjust"
            />
          </Link>
          <Link to="/login" className="cart-link">
            <button className="btn">Order Now</button>
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <div className="slider">
        <div className="home">
          <h1>
            Awfa my guy! <br /> You don chop?
          </h1>
          <p>Order one or two make you take hold belle.</p>
          <Link to="/login">
            <button className="btn2">Order Now</button>
          </Link>
        </div>
      </div>
      <div className="marquee-container">
        <Marquee speed={200} gradient={false} className="marquee">
          Place an order now to satisfy your cravings. Your Satisfaction is our
          Utmost Priority.
        </Marquee>
      </div>
    </section>
  );
};

export default Home;
