import React from "react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCity } from "../../Redux/actions";
import Card from "../../Components/Card";

const Home = () => {
  const dispatch = useDispatch();
  const city = [
    {
      location: {
        name: "Buenos Aires",
        region: "City of London, Greater London",
        country: "United Kingdom",
        lat: 51.52,
        lon: -0.11,
        tz_id: "Europe/London",
        localtime_epoch: 1683833216,
        localtime: "2023-05-11 20:26",
      },
      current: {
        last_updated_epoch: 1683832500,
        last_updated: "2023-05-11 20:15",
        temp_c: 14,
        temp_f: 57.2,
        is_day: 1,
        condition: {
          text: "Moderate rain",
          icon: "//cdn.weatherapi.com/weather/64x64/day/302.png",
          code: 1189,
        },
        wind_mph: 5.6,
        wind_kph: 9,
        wind_degree: 230,
        wind_dir: "SW",
        pressure_mb: 1016,
        pressure_in: 30,
        precip_mm: 0.2,
        precip_in: 0.01,
        humidity: 72,
        cloud: 75,
        feelslike_c: 13.6,
        feelslike_f: 56.5,
        vis_km: 10,
        vis_miles: 6,
        uv: 3,
        gust_mph: 9.2,
        gust_kph: 14.8,
      },
    },
    {
      location: {
        name: "London",
        region: "City of London, Greater London",
        country: "United Kingdom",
        lat: 51.52,
        lon: -0.11,
        tz_id: "Europe/London",
        localtime_epoch: 1683833216,
        localtime: "2023-05-11 20:26",
      },
      current: {
        last_updated_epoch: 1683832500,
        last_updated: "2023-05-11 20:15",
        temp_c: 14,
        temp_f: 57.2,
        is_day: 1,
        condition: {
          text: "Moderate rain",
          icon: "//cdn.weatherapi.com/weather/64x64/day/302.png",
          code: 1189,
        },
        wind_mph: 5.6,
        wind_kph: 9,
        wind_degree: 230,
        wind_dir: "SW",
        pressure_mb: 1016,
        pressure_in: 30,
        precip_mm: 0.2,
        precip_in: 0.01,
        humidity: 72,
        cloud: 75,
        feelslike_c: 13.6,
        feelslike_f: 56.5,
        vis_km: 10,
        vis_miles: 6,
        uv: 3,
        gust_mph: 9.2,
        gust_kph: 14.8,
      },
    },
  ];

  const onClose = (name) => {
    let cities = city.filter((c) => {
      return c.name !== name;
    });
    return cities;
  };

  return (
    <div>
      {city.map((C) => {
        return (
          <Card
            key={C.name}
            name={C.location.name}
            img={C.current.condition.icon}
            condition={C.current.condition.text}
            temp={C.current.temp_c}
            feelslike={C.current.feelslike_c}
            onClose={onClose(C.name)}
          />
        );
      })}
    </div>
  );
};

export default Home;
