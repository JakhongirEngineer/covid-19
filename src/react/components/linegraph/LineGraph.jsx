import React from "react";
import { connect } from "react-redux";
import "./linegraph.scss";
import { Line } from "react-chartjs-2";

const lineData = (casesData, recoveredData, deathsData, labels) => {
  return {
    labels: labels,
    datasets: [
      {
        label: "cases",
        fill: false,
        lineTension: 0.1,
        // backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "yellow",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "yellow",
        // pointBackgroundColor: "yellow",
        // pointBorderWidth: 1,
        // pointHoverRadius: 5,
        // pointHoverBackgroundColor: "rgba(75,192,192,1)",
        // pointHoverBorderColor: "rgba(220,220,220,1)",
        // pointHoverBorderWidth: 2,
        pointRadius: 1,
        // pointHitRadius: 10,
        data: casesData,
      },
      {
        label: "recovered",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "green",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "green",
        // pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(75,192,192,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: recoveredData,
      },
      {
        label: "deaths",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "red",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "red",
        // pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(75,192,192,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: deathsData,
      },
    ],
  };
};

function LineGraph({ history }) {
  console.log("history======", history);
  console.log("Object.keys(history.values) === ", Object.values(history.cases));
  const casesData = Object.values(history.cases);
  const recoveredData = Object.values(history.recovered);
  const deathsData = Object.values(history.deaths);
  const labels = Object.keys(history.cases);

  const data = lineData(casesData, recoveredData, deathsData, labels);
  return (
    <div className="linegraph">
      <Line data={data} />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    history: state.history,
  };
};

export default connect(mapStateToProps)(LineGraph);
