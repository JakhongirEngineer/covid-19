import React from "react";
import { connect } from "react-redux";
import { setType } from "../../../redux/active/activeActionGenerator";
import "./infobox.scss";
function InfoBox({
  title,
  newData,
  totalData,
  type,
  setType,
  isActive,
  isRed,
  isBlue,
  isGreen,
}) {
  return (
    <div
      className={`infobox ${isActive && "infobox__active"} ${
        isRed && "infobox__active--red"
      } ${isBlue && "infobox__active--blue"} ${
        isGreen && "infobox__active--green"
      }`}
      onClick={() => setType(type)}
    >
      <div className="infobox__title">{title}</div>
      <div className="infobox__newdata">today's: {newData}</div>
      <div className="infobox__total">total: {totalData}</div>
    </div>
  );
}
const mapDispatchToProps = (dispatch) => {
  return {
    setType: (type) => dispatch(setType(type)),
  };
};
export default connect(null, mapDispatchToProps)(InfoBox);
