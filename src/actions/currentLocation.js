import * as types from "../constants/actionTypes";

export const currentLocation = payload => dispatch => {
  dispatch({
    type: types.CURRENT_LOCATION,
    payload
  });
};
