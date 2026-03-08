import React from "react";

function StatCard({ title, value, color }) {
  return (
    <div
      style={{
        background: color,
        color: "white",
        padding: "20px",
        borderRadius: "10px",
        width: "200px",
        textAlign: "center",
        margin: "10px",
      }}
    >
      <h3>{title}</h3>
      <h2>{value}</h2>
    </div>
  );
}

export default StatCard;
