import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { countryClicked } from "../../../redux/country/actionGenerator";
import { historyAction } from "../../../redux/history/historyAction";
import "./header.scss";
import { FormControl, Select, MenuItem } from "@material-ui/core";

const Header = ({ countryClicked, getHistory }) => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("worldwide");
  const [countryInfo, setCountryInfo] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      await fetch("https://disease.sh/v3/covid-19/all")
        .then((response) => response.json())
        .then((data) => {
          setCountryInfo(data);
          const worldwide = {
            cases: data.cases,
            todayCases: data.todayCases,
            deaths: data.deaths,
            todayDeaths: data.todayDeaths,
            recovered: data.recovered,
            todayRecovered: data.todayRecovered,
            active: data.active,
            critical: data.critical,
          };

          countryClicked(worldwide);
        });
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchCountries = async () => {
      await fetch("https://disease.sh/v3/covid-19/countries").then((response) =>
        response.json().then((data) => {
          const fetchedCountries = data.map((fetchedCountry) => {
            return {
              name: fetchedCountry.country,
              value: fetchedCountry.countryInfo.iso3,
            };
          });
          setCountries(fetchedCountries);
        })
      );
    };
    fetchCountries();
  }, []);

  const onSelectChange = async (e) => {
    const countryCode = e.target.value;
    const urlInfobox =
      countryCode === "worldwide"
        ? "https://disease.sh/v3/covid-19/all"
        : `https://disease.sh/v3/covid-19/countries/${countryCode}?strict=true`;

    await fetch(urlInfobox)
      .then((response) => response.json())
      .then((data) => {
        setCountryInfo(data);
        const country = {
          cases: data.cases,
          todayCases: data.todayCases,
          deaths: data.deaths,
          todayDeaths: data.todayDeaths,
          recovered: data.recovered,
          todayRecovered: data.todayRecovered,
          active: data.active,
          critical: data.critical,

          country: data?.country,
          countryInfo: data?.countryInfo,
        };

        countryClicked(country);
      });

    setSelectedCountry(countryCode);

    const urlLinegraph =
      countryCode === "worldwide"
        ? "https://disease.sh/v3/covid-19/historical/all?lastdays=all"
        : `https://disease.sh/v3/covid-19/historical/${countryCode}?lastdays=all`;
    await fetch(urlLinegraph)
      .then((response) => response.json())
      .then((data) => {
        getHistory(data);
      });
  };

  useEffect(() => {
    const urlLinegraph =
      "https://disease.sh/v3/covid-19/historical/all?lastdays=all";
    const fetchData = async (url) => {
      await fetch(url)
        .then((response) => response.json())
        .then((data) => {
          getHistory(data);
        });
    };
    fetchData(urlLinegraph);
  }, []);

  return (
    <div className="header">
      <h1>Covid 19 tracker</h1>
      <FormControl className="header__dropdown">
        <Select
          variant="outlined"
          value={selectedCountry}
          onChange={onSelectChange}
        >
          <MenuItem value="worldwide">worldwide</MenuItem>
          {countries.map((country) => {
            return <MenuItem value={country.value}>{country.name}</MenuItem>;
          })}
        </Select>
      </FormControl>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    countryClicked: (country) => dispatch(countryClicked(country)),
    getHistory: (history) => dispatch(historyAction(history)),
  };
};

export default connect(null, mapDispatchToProps)(Header);
