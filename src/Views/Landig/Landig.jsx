import React from "react";
import style from "./Landig.module.css";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();
  return (
    <div className={style.landingcontainer}>
      <h1 className={style.h1}>Weather App</h1>
      <h2 className={style.h2}>Tu App del Clima</h2>
      <button className={style.landinb} onClick={() => navigate("/home")}>
        Iniciar
      </button>
    </div>
  );
};

export default Landing;
