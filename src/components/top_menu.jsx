import React, { Component } from "react";
import ReactDOM from "react-dom/client";
import "../styles/menu.css";
import "rsuite/dist/rsuite.min.css";
import Menu from "./menu";
import book from "../assets/book.png";

const TopMenu = () => {
  return (
    <div className="top_menu">
      <button className="main_btn up_down_btn" onClick={() => {}}>
        <p style={{ fontSize: "25px" }}>⌃</p>
      </button>
      <div style={{ display: "flex" }}>
        <button
          className="main_btn"
          style={{ fontSize: "25px" }}
          onClick={() => {}}
        >
          <p>+</p>
        </button>
        <button className="main_btn" onClick={() => {}}>
          <img src={book} style={{ width: "15px", opacity: "0.7" }} />
        </button>

        <button className="friend_btn" onClick={() => {}}>
          Add Friend
        </button>
      </div>
      {/* 
      <IconButton
        className="icon_btn"
        icon={<Menu />}
        color="green"
        appearance="primary"
        circle
      />
      <IconButton />
      */}
    </div>
  );
};

export default TopMenu;
