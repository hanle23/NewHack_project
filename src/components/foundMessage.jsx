import React, { Component } from "react";
import "../styles/menu.css";
import "../styles/secondary.css";

const Message = () => {
  return (
    <div className="secondary_container">
      <div className="message_container">
        <h3>You found a message!</h3>
        <div className="box_img"></div>
        <p>
          Someone left a message in this area, look around and try to find it!
          Warning, never search for pins while driving!
        </p>
      </div>
    </div>
  );
};

export default Message;
