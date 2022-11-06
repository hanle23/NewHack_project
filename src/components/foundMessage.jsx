import React, { Component } from "react";
import "../styles/menu.css";
import "../styles/secondary.css";

const Message = () => {
  return (
    <div
      className="secondary_page"
      style={{
        position: "absolute",
        top: "-70px",
      }}
    >
      <div className="secondary_container">
        <button
          className="main_btn"
          style={{ margin: 0, alignSelf: "end" }}
          onClick={() => {}}
        >
          X
        </button>
        <div className="message_container">
          <h3>A message was spotted!</h3>
          <div className="box_img"></div>
          <p>
            Someone left a message in this area, look around and try to find it!
            Warning, never search for pins while driving!
          </p>
          <button className="search_btn">Begin Search</button>
        </div>
      </div>
    </div>
  );
};

export default Message;
