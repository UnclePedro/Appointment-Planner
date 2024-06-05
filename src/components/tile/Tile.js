import React from "react";

export const Tile = ({ name, description }) => {
  return (
    <div className="tile-container">
      <p className="tile-title">{name}</p>
      {Object.values(description).map((item, index) => (
        <p1 key={index}>{item}</p1>
      ))}
    </div>
  );
};
