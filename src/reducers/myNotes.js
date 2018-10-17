import { MY_NOTES } from "../constants/actionTypes";

const initialState = {
  myNotes: []
};
const myNotes = (state = initialState, action) => {
  switch (action.type) {
    case MY_NOTES:
      return {
        myNotes: action.payload.myNotes.filter(item => {
          return item.userName === "ashwaniUI";
        })
      };
    default:
      return state;
  }
};
export default myNotes;
