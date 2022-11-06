import React, { Component } from "react";
import "../styles/menu.css";
import "../styles/secondary.css";
import HistoryEntry from "./history_entry";

const History = () => {
  return (
    <div className="secondary_container">
      <div
        className="top_history"
        style={{
          display: "flex",
          justifyContent: "end",
        }}
      >
        <button
          className="sort_btn"
          style={{ marginBottom: "10px" }}
          onClick={() => {}}
        >
          <span>
            Sort By: &nbsp;<strong>Newest</strong>
          </span>
        </button>
        <button
          className="main_btn"
          style={{ marginBottom: "10px" }}
          onClick={() => {}}
        >
          X
        </button>
      </div>
      <HistoryEntry />
      <HistoryEntry />
      <HistoryEntry />
    </div>
  );
};

export default History;
