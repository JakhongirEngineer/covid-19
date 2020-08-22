import { mapActionTypes } from "./mapActionTypes";
export const setZoomAndPosition = (payload) => {
  return {
    type: mapActionTypes.SET_ZOOM_AND_POSITION,
    payload: payload,
  };
};
