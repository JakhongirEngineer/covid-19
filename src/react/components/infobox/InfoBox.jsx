import React from "react";
import "./infobox.scss";
import { Card, CardContent, Typography } from "@material-ui/core";
function InfoBox({ title, cases, total }) {
  return (
    <div className="infobox">
      <Card>
        <CardContent>
          <Typography color="textSecondary">{title}</Typography>
          <Typography color="textPrimary">new: {cases}</Typography>
          <Typography color="textSecondary">total: {total}</Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default InfoBox;
