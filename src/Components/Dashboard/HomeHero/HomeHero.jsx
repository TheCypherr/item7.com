import React, { useState } from "react";
import "./HomeHero.css";
import { FaShoppingCart } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const HomeHero = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    setLoading(true);

    setTimeout(() => {
      navigate("/login");
    }, 2000);
  };

  return (
    <section className="homeHero-wrapper">
      <div className="small-hero">
        <div className="flex-one">
          <img src="./eba-veg.jpeg" alt="" />
          <div className="text">
            <p>Tasty Thursday</p>
            <h2>
              20%<span> off</span>
            </h2>
            <Link>
              <button className="hero-btn" onClick={handleLogin}>
                Order Now
                <FaShoppingCart size={17} color="#000" className="hero-icon" />
              </button>
            </Link>
          </div>
        </div>

        <div className="flex-one">
          <img src="./abula.jpeg" alt="" />
          <div className="text">
            <p>Abula</p>
            <h2>
              15%<span> off</span>
            </h2>
            <Link>
              <button className="hero-btn" onClick={handleLogin}>
                Order Now
                <FaShoppingCart size={17} color="#000" className="hero-icon" />
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

export default HomeHero;
