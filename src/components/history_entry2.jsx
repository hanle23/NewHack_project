import React, { Component } from "react";
import "../styles/menu.css";
import "../styles/secondary.css";

const HistoryEntry2 = () => {
  return (
    <div className="history_entry">
      <div>
        <h4>
          <strong>Bali</strong>
        </h4>
        <p>Oct 29</p>
      </div>
      <p style={{ fontSize: "12px", margin: "5px" }}>
        Such a beautiful weather with the best beaches in the world. Definetely
        recommend!
      </p>
      <div className="end_img_main end_img2"></div>
    </div>
  );
};
export default HistoryEntry2;
