import React, { useState, useEffect } from "react";
import { Map, TileLayer } from "react-leaflet";
import { connect } from "react-redux";

import "./map.scss";
import { drawCircle } from "./drawCircle";
const position = [51.505, -0.09];

function MapComponent({ countries, active, position, zoom }) {
  const [countriesInfo, setCountriesInfo] = useState(countries);

  useEffect(() => {
    setCountriesInfo(countries);
  }, [countries]);

  return (
    <div className="map">
      <Map center={position} zoom={zoom}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {drawCircle(countriesInfo, active)}
      </Map>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    countries: state.countries,
    active: state.active.type,
    zoom: state.map.zoom,
    position: state.map.position,
  };
};

export default connect(mapStateToProps)(MapComponent);
