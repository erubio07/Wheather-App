import axios from "axios";
import { GET_CITY } from "./types";
const apiKey = "cacb341f64cb4382b82121808230605";

const getCity = (name) => {
  return async function (dispatch) {
    let city = await axios.get(
      `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${name}&aqi=no`
    );
    return dispatch({
      type: GET_CITY,
      payload: city.data,
    });
  };
};

getCity("Buenos Aires");
