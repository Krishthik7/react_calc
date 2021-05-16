import React from "react";
import "./button.css";

const Button = ({ color, text, width }) => (
  <button style={{ backgroundColor: color, width: width }} className="button">
    {text}
  </button>
);

export default Button;
