import React from "react";
import Header from "./react/components/header/header";

import { Card, CardContent } from "@material-ui/core";
import "./app.scss";
import InfoboxContainer from "./react/components/infoboxContainer/InfoboxContainer";
import Map from "./react/components/map/Map";
import LineGraph from "./react/components/linegraph/LineGraph";

function App() {
  return (
    <div className="app">
      <div className="app__left">
        <Header />
        <InfoboxContainer />
        <Map />
      </div>
      <Card className="app__right">
        <CardContent>this is right side</CardContent>
        <LineGraph />
      </Card>
    </div>
  );
}

export default App;
