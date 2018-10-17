import { ADD_NOTES } from "../constants/actionTypes";

const initialState = {
  show: false
};

const addNotes = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NOTES:
      return {
        show: action.payload.addNotes
      };
    default:
      return state;
  }
};
export default addNotes;
