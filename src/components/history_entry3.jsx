import React, { Component } from "react";
import "../styles/menu.css";
import "../styles/secondary.css";

const HistoryEntry3 = () => {
  return (
    <div className="history_entry">
      <div>
        <h4>
          <strong>Tokyo</strong>
        </h4>
        <p>Oct 15</p>
      </div>
      <p style={{ fontSize: "12px", margin: "5px" }}>
        The city life here is spectacular! You can't miss all the events
        happening in downtown Tokyo!
      </p>
      <div className="end_img_main end_img3"></div>
    </div>
  );
};

export default HistoryEntry3;
