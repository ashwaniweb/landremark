import * as types from "../constants/actionTypes";

export const submitNote = payload => dispatch => {
  dispatch({
    type: types.ADD_NOTES,
    payload
  });
};
