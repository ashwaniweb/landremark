import * as types from "../constants/actionTypes";

export const defaultData = payload => dispatch => {
  dispatch({
    type: types.ADD_NOTES,
    payload
  });
};
