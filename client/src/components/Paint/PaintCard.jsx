import React from "react";
import { Link } from "react-router-dom";
import Card from "../Card";

const PaintCard = ({ paint }) => {
  const { name, quantity, _id } = paint;

  // dynamic background for Paint Cards to replicate userstory "Swim lanes"
  // GREEN for >=20 quantity, YELLOW for 1-20, RED For 0 quantity.

  let bgColor;
  if (quantity >= 20) {
    bgColor = "#dcfce0"; // Green background
  } else if (quantity > 0 && quantity < 20) {
    bgColor = "#fff7c4"; // Yellow background
  } else {
    bgColor = "#fcc5c5"; // Red background
  }

  return (
    <Card
      title={"Paint: " + name}
      subtitle={"Quantity: " + String(quantity)}
      id={_id}
      editPath={`/paint/${_id}`}
      deletePath={`/deletepaint/${_id}`}
      style={{ backgroundColor: bgColor }} // Apply the background color based on quantity
    />
  );
};

export default PaintCard;
