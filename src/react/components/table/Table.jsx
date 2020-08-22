import React from "react";
import { connect } from "react-redux";
import "./table.scss";
function Table({ countries }) {
  return (
    <table className="table">
      <tr className="table__row--heading">
        <th className="table__heading">country</th>
        <th className="table__heading">total cases</th>
        <th className="table__heading">today cases</th>
        <th className="table__heading">total recovered</th>
        <th className="table__heading">today recovered</th>
        <th className="table__heading">total deaths</th>
        <th className="table__heading">today deaths</th>
        <th className="table__heading">active</th>
        <th className="table__heading">critical</th>
        <th className="table__heading">population</th>
      </tr>
      {Object.values(countries).map((country) => {
        return (
          <tr className="table__row--data">
            <td className="table__data">{country.country}</td>
            <td className="table__data">{country.cases}</td>
            <td className="table__data">{country.todayCases}</td>
            <td className="table__data">{country.recovered}</td>
            <td className="table__data">{country.todayRecovered}</td>
            <td className="table__data">{country.deaths}</td>
            <td className="table__data">{country.todayDeaths}</td>
            <td className="table__data">{country.active}</td>
            <td className="table__data">{country.critical}</td>
            <td className="table__data">{country.population}</td>
          </tr>
        );
      })}
    </table>
  );
}
const mapStatesToProps = (state) => {
  return {
    countries: state.countries,
  };
};
export default connect(mapStatesToProps)(Table);
