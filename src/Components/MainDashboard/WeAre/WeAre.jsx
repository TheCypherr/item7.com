import React from "react";
import "./WeAre.css";

const WeAre = () => {
  return (
    <div className="we-wrapper">
      <div className="side-1">
        <img src="./combinefood.png" alt="" />
      </div>
      <div className="side-2">
        <h1>We Are Item7</h1>
        <p>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn't anything embarrassing hidden in the middle of text.
        </p>
        <button className="btn2 we-btn">Read More</button>
      </div>
    </div>
  );
};

export default WeAre;
