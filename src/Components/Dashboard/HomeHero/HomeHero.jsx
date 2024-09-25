import React from "react";
import "./HomeHero.css";
import { FaUser, FaShoppingCart, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const HomeHero = () => {
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
            <Link to="/login">
              <button className="hero-btn">
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
            <Link to="/login">
              <button className="hero-btn">
                Order Now
                <FaShoppingCart size={17} color="#000" className="hero-icon" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
