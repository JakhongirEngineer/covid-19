import React from "react";
import { connect } from "react-redux";

import "./infoboxContainer.scss";
import InfoBox from "../infobox/InfoBox";

function InfoboxContainer({ countryInfo }) {
  return (
    <div className="infobox-container">
      <InfoBox
        title="covid cases"
        cases={countryInfo?.todayCases}
        total={countryInfo?.cases}
      />
      <InfoBox
        title="recovered"
        cases={countryInfo?.todayRecovered}
        total={countryInfo?.recovered}
      />
      <InfoBox
        title="death"
        cases={countryInfo?.todayDeaths}
        total={countryInfo?.deaths}
      />
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    countryInfo: state.country,
  };
};

export default connect(mapStateToProps)(InfoboxContainer);
