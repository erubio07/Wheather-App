import React from "react";

function Card({ name, img, condition, temp, feelslike, onClose }) {
  return (
    <div>
      <button onClick={() => onClose}>X</button>
      <h2>Ciudad: {name}</h2>
      <img src={img} alt="icon" />
      <h3>Condición: {condition}</h3>
      <h4>Temp.: {temp}°C</h4>
      <h4>Sensación Térmica: {feelslike}°C</h4>
    </div>
  );
}

export default Card;
