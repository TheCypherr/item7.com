import React from "react";
import "./Table.css";

const Table = () => {
  return (
    <section className="table-wrapper">
      <div className="table-input">
        <h1>Book A Table</h1>
        <input type="text" placeholder="Your Name" />
        <input type="text" placeholder="Phone Number" />
        <input type="text" placeholder="Your Email" />
        <select>
          <option value="">How Many Persons?</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>

        <input type="text" placeholder="Input Date Manually" />
        <div className="table-btn">
          <button className="btn2">Book Now</button>
        </div>
      </div>

      {/* <div className="table-input">
        <h1>Book A Table</h1>
        <input type="text" placeholder="Your Name" />
        <input type="text" placeholder="Phone Number" />
        <input type="text" placeholder="Your Email" />
        <select>
          <option value="">How Many Persons?</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <input type="date" />
        <div className="table-btn">
          <button className="btn2">Book Now</button>
        </div>
      </div> */}
    </section>
  );
};

export default Table;
