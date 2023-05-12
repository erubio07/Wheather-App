import React from "react";
import { useNavigate } from "react-router-dom";
import style from "./Navbar.module.css";
import logo from "../../Views/Image/logo.png";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className={style.navbar}>
      <img className={style.navbarlogo} src={logo} alt="logo"></img>
      <div className={style.navbarlinks}>
        <button className={style.navbarlink} onClick={() => navigate("/home")}>
          Home
        </button>
        <button className={style.navbarlink} onClick={() => navigate("/about")}>
          Sobre la App
        </button>
      </div>
    </div>
  );
};

export default Navbar;
