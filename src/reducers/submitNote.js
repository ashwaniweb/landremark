import { SUBMIT_NOTE } from "../constants/actionTypes";
const initialState = {
  form: {
    des: "",
    position: {
      lat: "",
      lng: ""
    },
    title: "Current position",
    userName: ""
  }
};

const submitNote = (state = initialState, action) => {
  switch (action.type) {
    case SUBMIT_NOTE:
      return {
        form: action.payload
      };
    default:
      return state;
  }
};
export default submitNote;
