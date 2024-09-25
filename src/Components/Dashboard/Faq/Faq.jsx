import React, { useEffect, useRef, useState } from "react";
import "./Faq.css";
import { FaRibbon, FaShoppingBag, FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useScroll } from "../../../utils/ScrollContext";

const Faq = () => {
  const targetRef = useRef(null);
  const { registerRef } = useScroll();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    registerRef("faqScroll", targetRef.current);
  }, [registerRef]);

  const handleLogin = () => {
    setLoading(true);

    setTimeout(() => {
      navigate("/login");
    }, 2000);
  };

  return (
    <section className="faq-wrapper" ref={targetRef}>
      <div className="inner-faq">
        <div className="faq-one">
          <div className="faq-top">
            <h1>FAQs</h1>
            <FaRibbon size={40} />
          </div>
          <p>
            Item7 is a top-restaurant dedicated to serve and help customers
            satisfy their food cravings. Ranging from cousine to drinks, native
            food and wine, we at Item7 only offer to give the best regardless
            while also providing our customers with a platform for easy access
            to order their favorite meal from the comfort of their homes or
            hostel with our standby dispatch to have your orders delivered in
            minute..
          </p>
        </div>
        <div className="faq-two">
          <div className="two-top">
            <h1>Place your order and have it delivered in few minutes!</h1>
            <div className="icon-links">
              <Link onClick={handleLogin}>
                <div className="svg-icon">
                  <FaUser size={30} />
                </div>
              </Link>
              <Link onClick={handleLogin}>
                <div className="svg-icon">
                  <FaShoppingBag size={30} />
                </div>
              </Link>
            </div>
          </div>
          <div className="faq-below">
            <p>
              Get <span> 20% off </span>your next order when you refer a friend.
            </p>
            <Link>
              <button className="faq-btn" onClick={handleLogin}>
                Login Now
              </button>
            </Link>
          </div>
        </div>
      </div>

      {loading && (
        <div className="load-slide">
          <div className="load-bar"></div>
        </div>
      )}
    </section>
  );
};

export default Faq;
