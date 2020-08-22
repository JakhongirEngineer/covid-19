import React, { useEffect } from "react";
import { Line } from "react-chartjs-2";
import { connect } from "react-redux";
import { classifyData } from "./linegraphUtil";
import { setHistoryActionGenerator } from "../../../redux/history/historyActionCreator";
import "./linegraph.scss";
function LineGraph({ type, getHistory, labels, historyData }) {
  useEffect(() => {
    const fetchData = async () => {
      await fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=all")
        .then((response) => response.json())
        .then((info) => {
          console.log("info from linegraph = ", info);

          const history = {
            labels: Object.keys(info[type]),
            data: Object.values(info[type]),
          };
          getHistory(history);
        });
    };
    fetchData();
  }, [labels, historyData]);
  return (
    <div className="linegraph">
      <Line data={classifyData(labels, historyData, type)} />
    </div>
  );
}
const mapStateToProps = (state) => {
  console.log("state in mapStateToProps of LineGraph = ", state);
  return {
    type: state.active.type,
    labels: state.history.history.labels,
    historyData: state.history.history.data,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getHistory: (history) => dispatch(setHistoryActionGenerator(history)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(LineGraph);
