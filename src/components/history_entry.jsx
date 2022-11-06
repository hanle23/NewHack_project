import React, { Component } from "react";
import "../styles/menu.css";
import "../styles/secondary.css";

const HistoryEntry = () => {
  return (
    <div className="history_entry">
      <div>
        <h4>Paris</h4>
        <p>Nov 4</p>
      </div>
      <p style={{ fontSize: "12px", margin: "5px" }}>
        What an amazing place. We enjoyed the view and the amazing dinning
        experience! Solid 10/10!
      </p>
      <div className="end_img"></div>
    </div>
  );
};

export default HistoryEntry;
