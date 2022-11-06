import React, { Component } from "react";
import circle from "../assets/circle.png";
import "../styles/menu.css";

const MenuYou = () => {
  return (
    <div className="menu_friend">
      <div className="circular_div2">
        <img
          src={circle}
          style={{ width: "45px", textAlign: "center" }}
          alt="img"
        />
      </div>
      <h5 style={{ textAlign: "center", marginTop: "2px" }}>You</h5>
      <p style={{ textAlign: "center", fontSize: "10px" }}>1h</p>
    </div>
  );
};

export default MenuYou;
