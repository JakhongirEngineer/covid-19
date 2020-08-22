import React from "react";
import { Popup, Circle } from "react-leaflet";

export const drawCircle = (countries, active = "cases") => {
  const countriesArray = Object.values(countries);
  let radiusKoefficient;
  let fillOpacity;
  let color;
  let fillColor;
  if (active === "cases") {
    fillOpacity = 0.4;
    color = "#555555";
    fillColor = "#555555";
    radiusKoefficient = 1000;
  } else if (active === "deaths") {
    fillOpacity = 0.4;
    color = "red";
    fillColor = "red";
    radiusKoefficient = 2000;
  } else if (active === "recovered") {
    fillOpacity = 0.4;
    color = "green";
    fillColor = "green";
    radiusKoefficient = 1500;
  }
  return countriesArray.map((country) => {
    const center = [country.countryInfo.lat, country.countryInfo.long];
    let radius =
      (active === "cases" && Math.sqrt(country.cases) * radiusKoefficient) ||
      (active === "recovered" &&
        Math.sqrt(country.recovered) * radiusKoefficient) ||
      (active === "deaths" && Math.sqrt(country.deaths) * radiusKoefficient);
    return (
      <Circle
        center={center}
        fillOpacity={fillOpacity}
        color={color}
        fillColor={fillColor}
        radius={radius}
      >
        <Popup className="popup">
          <div
            className="popup__flag"
            style={{
              backgroundImage: `url(${country.countryInfo.flag})`,
            }}
          />
          <div className="popup__info">
            <p>{country.country}</p>
            <p>active: {country.active}</p>
            <p>total deaths: {country.deaths}</p>
          </div>
        </Popup>
      </Circle>
    );
  });
};
