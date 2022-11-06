import React, { Component } from "react";
import circle from "../assets/circle.png";
import "../styles/menu.css";

const MenuFriend = () => {
  return (
    <div className="menu_friend">
      <div className="circular_div">
        <img
          src={circle}
          style={{ width: "45px", textAlign: "center" }}
          alt="img"
        />
      </div>
      <h5 style={{ textAlign: "center" }}>Name</h5>
      <p style={{ textAlign: "center", fontSize: "10px" }}>1h</p>
    </div>
  );
};

export default MenuFriend;
