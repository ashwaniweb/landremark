import * as types from "../constants/actionTypes";

export const addNotes = payload => dispatch => {
  dispatch({
    type: types.ADD_NOTES,
    payload
  });
};
