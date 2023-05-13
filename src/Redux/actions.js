import axios from "axios";
import { GET_CITY, CLOSE_CARD, ORDER_CARD } from "./types";
const apiKey = "01e86b8b56ec4c11aff162352231205";

export const getCity = (name) => {
  return async function (dispatch, getState) {
    let city = await axios.get(
      `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${name}&aqi=no`
    );
    let newCity = city.data;
    let cities = [...getState().cities, newCity];
    // console.log(city.data);
    return dispatch({
      type: GET_CITY,
      payload: cities,
    });
  };
};

// getCity("London");

export const closeCard = (name) => {
  return {
    type: CLOSE_CARD,
    payload: name,
  };
};

export const sortCards = (value) => {
  return {
    type: ORDER_CARD,
    payload: value,
  };
};
