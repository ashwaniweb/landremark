import * as types from "../constants/actionTypes";
export const myNotes = payload => dispatch => {
  dispatch({
    type: types.MY_NOTES,
    payload
  });
};
