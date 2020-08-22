import React from "react";
import { connect } from "react-redux";
import InfoBox from "../infobox/InfoBox";
import "./infoboxContainer.scss";
import { setType } from "../../../redux/active/activeActionGenerator";

function InfoboxContainer({ country, active }) {
  return (
    <div className="infobox-c">
      <InfoBox
        isBlue={active === "cases"}
        isActive={active === "cases"}
        type="cases"
        title="cases"
        newData={country.todayCases}
        totalData={country.cases}
      />
      <InfoBox
        isActive={active === "recovered"}
        isGreen={active === "recovered"}
        title="recovered"
        type="recovered"
        newData={country.todayRecovered}
        totalData={country.recovered}
      />
      <InfoBox
        isRed={active === "deaths"}
        isActive={active === "deaths"}
        title="deaths"
        type="deaths"
        newData={country.todayDeaths}
        totalData={country.deaths}
      />
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    country: state.country,
    active: state.active.type,
  };
};

export default connect(mapStateToProps)(InfoboxContainer);
