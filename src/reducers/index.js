import { combineReducers } from "redux";
import onLoad from "./onload";
import currentLocation from "./currentLocation";
import myNotes from "./myNotes";

export default combineReducers({
  onLoad,
  currentLocation,
  myNotes
});
