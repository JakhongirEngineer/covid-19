import React from "react";
import Header from "./react/components/header/Header";

import { Card, CardContent } from "@material-ui/core";
import "./app.scss";
import InfoboxContainer from "./react/components/infoboxContainer/InfoboxContainer";
import MapComponent from "./react/components/map/MapComponent";
// import "leaflet/dist/leaflet.scss";
import LineGraph from "./react/components/linegraph/LineGraph";
import Table from "./react/components/table/Table";

function App() {
  return (
    <div className="app">
      <Header />
      <InfoboxContainer />
      <LineGraph />
      <MapComponent />
      <div className="app__tableWrapper">
        <Table />
      </div>
    </div>
  );
}

export default App;
