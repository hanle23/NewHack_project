import React, { Component } from "react";
import MenuFriend from "./menu_friend";
import "../styles/menu.css";

const MenuFriends = () => {
  return (
    <div className="menu_friends">
      <MenuFriend />
      <MenuFriend />
      <MenuFriend />
      <MenuFriend />
      <MenuFriend />
    </div>
  );
};

export default MenuFriends;
