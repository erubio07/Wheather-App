import React from "react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCity } from "../../Redux/actions";
import Card from "../../Components/Card/Card";
import Filter from "../../Components/Filter/Filter";
import style from "./Home.module.css";

const Home = () => {
  const dispatch = useDispatch();
  const city = useSelector((state) => state.cities);
  console.log(city);

  useEffect(() => {
    if (city.length === 0 || city.updated) {
      dispatch(getCity());
    }
  }, [city, dispatch]);

  const [input, setInput] = useState("");

  const handleInputSearch = (e) => {
    setInput(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (input === "") {
      alert("Ingrese el nombre de la Ciudad");
    } else {
      dispatch(getCity(input));
      setInput("");
    }
  };

  const handleClose = () => {};

  return (
    <div className={style.body}>
      <Filter
        handleInputSearch={handleInputSearch}
        handleSearch={handleSearch}
        input={input}
      />
      <div className={style.cardcontainer}>
        {city.map((c) => {
          return (
            <Card
              name={c.location.name}
              img={c.current.condition.icon}
              condition={c.current.condition.text}
              temp={c.current.temp_c}
              feelslike={c.current.feelslike_c}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Home;
