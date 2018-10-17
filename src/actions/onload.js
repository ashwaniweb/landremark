import * as types from "../constants/actionTypes";

export const defaultData = payload => dispatch => {
  dispatch({
    type: types.ON_LOAD,
    payload
  });
};
