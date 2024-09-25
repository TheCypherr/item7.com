import React, { useEffect, useState } from "react";
import "./Home.css";
import { Link, useNavigate } from "react-router-dom";
import { FaUser, FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import Marquee from "react-fast-marquee";
import { useScroll } from "../../../utils/ScrollContext";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

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

  // handle loading state and navigation for login
  const handleLogin = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      navigate("/login");
    }, 2000);
  };

  // handles page refresh onclick of logo
  const handlePageRefresh = () => {
    window.location.reload()
  }

  return (
    <section className="header-wrapper home-back">
      <div className="dark-overlay"></div>
      <div className={`inner-h ${isOpen ? "menu-open" : ""}`}>
        <div className="h-one">
          <Link to="/" onClick={handlePageRefresh}>
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
          <Link onClick={handleLogin}>
            <FaUser size={17} color="#000" className="icon icon-adjust" />
          </Link>
          <Link onClick={handleLogin}>
            <FaShoppingCart
              size={17}
              color="#000"
              className="icon icon-adjust"
            />
          </Link>
          <Link className="cart-link">
            <button className="btn" onClick={handleLogin}>
              Order Now
            </button>
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
          <Link>
            <button className="btn2 btn-home" onClick={handleLogin}>
              Order Now
            </button>
          </Link>
        </div>
      </div>
      <div className="marquee-container">
        <Marquee speed={200} gradient={false} className="marquee">
          Place an order now to satisfy your cravings. Your Satisfaction is our
          Utmost Priority.
        </Marquee>
      </div>

      {loading && (
        <div className="load-slide">
          <div className="load-bar"></div>
        </div>
      )}
    </section>
  );
};

export default Home;
