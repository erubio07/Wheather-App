import React from "react";
import style from "./About.module.css";

const About = () => {
  return (
    <div className={style.body}>
      <h1 className={style.h1}>Información Sobre la App</h1>
      <p className={style.p}>
        Aplicación que muestra los datos del clima de diferentes ciudades del
        mundo. Construida con React-Redux, CSS. La misma trae los datos
        consumidos desde una API externa.
      </p>
      <p className={style.p}>
        Esta Aplicacion fue construida por Ezequiel Rubio durante su cursada
        para el bootcamp de Soy Henry
      </p>
    </div>
  );
};

export default About;
