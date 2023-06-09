import React from "react";
import { useDispatch } from "react-redux";
import { closeCard } from "../../Redux/actions";
import style from "./Card.module.css";

function Card({ name, img, condition, temp, feelslike }) {
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(closeCard(name));
  };

  return (
    <div className={style.weatherCard}>
      <button
        className={style.closeButton}
        onClick={() => {
          handleClose();
        }}
      >
        X
      </button>
      <h2 className={style.cityName}>Ciudad: {name}</h2>
      <img className={style.weatherIcon} src={img} alt="icon" />
      <h3 className={style.condition}>Condición: {condition}</h3>
      <h4 className={style.temperature}>Temp.: {temp}°C</h4>
      <h4 className={style.feelsLike}>Sensación Térmica: {feelslike}°C</h4>
    </div>
  );
}

export default Card;
