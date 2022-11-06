import React, { Component } from "react";
import "../styles/menu.css";
import "../styles/secondary.css";
import HistoryEntry from "./history_entry";
import HistoryEntry2 from "./history_entry2";
import HistoryEntry3 from "./history_entry3";

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
      <HistoryEntry2 />
      <HistoryEntry3 />
    </div>
  );
};

export default History;
