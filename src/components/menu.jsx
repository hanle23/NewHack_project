import React, { Component } from "react";
import MenuFriends from "./menu_friends";
import TopMenu from "./top_menu";
import "../styles/menu.css";

const Menu = () => {
  return (
    <div className="menu" style={{ height: "20vh" }}>
      <TopMenu />
      <MenuFriends />
    </div>
  );
};

export default Menu;
