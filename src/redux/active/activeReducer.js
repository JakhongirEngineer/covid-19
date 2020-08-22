import { activeTypes } from "./activeTypes";

const INITIAL_STATE = {
  type: "cases",
};

export const activeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case activeTypes.SET_TYPE:
      return { ...state, type: action.payload };
    default:
      return state;
  }
};
