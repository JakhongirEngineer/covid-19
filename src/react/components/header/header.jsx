import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { countriesActionGenerator } from "../../../redux/countries/countriesActionGenerator";
import { selectCountryActionGenerator } from "../../../redux/country/countryActionGenerator";
import { setZoomAndPosition } from "../../../redux/map/mapActionGenerator";
import "./header.scss";
import { MenuItem, FormControl, Select } from "@material-ui/core";

function Header({ getCountries, getCountry, setZoomAndPosition }) {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("worldwide");

  useEffect(() => {
    const fetchData = async () => {
      await fetch("https://disease.sh/v3/covid-19/countries").then((response) =>
        response.json().then((data) => {
          setCountries(data);
          getCountries(data);
        })
      );
    };
    fetchData();
  }, []);

  const onHandleSelectCountry = (e) => {
    const name = e.target.value;
    if (name !== "worldwide") {
      const fetchData = async () => {
        await fetch(
          `https://disease.sh/v3/covid-19/countries/${name}?strict=true`
        )
          .then((response) => response.json())
          .then((data) => {
            getCountry(data);
            const zoomAndPosition = {
              zoom: 5,
              position: [data.countryInfo.lat, data.countryInfo.long],
            };
            setZoomAndPosition(zoomAndPosition);
          });
      };
      fetchData();
      setCountry(name);
    }
  };

  const onHandleWorldwide = (e = "event") => {
    const fetchData = async () => {
      await fetch("https://disease.sh/v3/covid-19/all")
        .then((response) => response.json())
        .then((data) => {
          getCountry(data);
          const zoomAndPosition = {
            zoom: 3,
            position: [38, -97],
          };
          setZoomAndPosition(zoomAndPosition);
        });
    };
    fetchData();
    setCountry("worldwide");
  };

  useEffect(() => {
    onHandleWorldwide();
  }, []);

  return (
    <div className="header">
      <h1 className="header__title">Covid-19 data tracker</h1>
      <FormControl className="header__dropdown">
        <Select
          variant="outlined"
          value={country}
          onChange={onHandleSelectCountry}
        >
          <MenuItem value="worldwide" onClick={(e) => onHandleWorldwide(e)}>
            worldwide
          </MenuItem>
          {countries.map((country) => {
            return (
              <MenuItem value={country.country}>{country.country}</MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </div>
  );
}
const mapDispatchToProps = (dispatch) => {
  return {
    getCountries: (countries) => dispatch(countriesActionGenerator(countries)),
    getCountry: (country) => dispatch(selectCountryActionGenerator(country)),
    setZoomAndPosition: (zoomAndPosition) =>
      dispatch(setZoomAndPosition(zoomAndPosition)),
  };
};

export default connect(null, mapDispatchToProps)(Header);
