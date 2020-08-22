import { mapActionTypes } from "./mapActionTypes";
const INITIAL_STATE = {
  zoom: 3,
  position: [38, -97],
};

export const mapReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case mapActionTypes.SET_ZOOM_AND_POSITION:
      return {
        ...state,
        zoom: action.payload.zoom,
        position: action.payload.position,
      };
    default:
      return state;
  }
};
