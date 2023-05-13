import React from "react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCity, sortCards } from "../../Redux/actions";
import Card from "../../Components/Card/Card";
import Filter from "../../Components/Filter/Filter";
import style from "./Home.module.css";

const Home = () => {
  const dispatch = useDispatch();
  const city = useSelector((state) => state.cities);
  // console.log(city);

  useEffect(() => {
    setFilteredCities(city);
  }, [city, dispatch]);

  const [filteredCities, setFilteredCities] = useState([]);
  console.log(filteredCities);
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

  const handleSort = (e) => {
    dispatch(sortCards(e.target.value));
  };

  return (
    <div className={style.body}>
      <Filter
        handleInputSearch={handleInputSearch}
        handleSearch={handleSearch}
        input={input}
        handleSort={handleSort}
      />
      <div className={style.cardcontainer}>
        {filteredCities.map((c) => {
          return (
            <Card
              key={c.location.name}
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
