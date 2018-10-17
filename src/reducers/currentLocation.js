import { CURRENT_LOCATION } from "../constants/actionTypes";
const initialState = {
  markers: {
    title: "Current position",
    des: ""
  }
};
const currentLocation = (state = initialState, action) => {
  switch (action.type) {
    case CURRENT_LOCATION:
      return {
        markers: {
          ...state.markers,
          position: action.payload.position
        }
      };
    default:
      return state;
  }
};
export default currentLocation;
