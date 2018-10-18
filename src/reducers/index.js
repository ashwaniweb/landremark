import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import onLoad from "./onload";
import currentLocation from "./currentLocation";
import myNotes from "./myNotes";
import addNotes from "./addNotes";
import submitNote from "./submitNote";
export default combineReducers({
  form: formReducer,
  onLoad,
  currentLocation,
  myNotes,
  addNotes,
  submitNote
});
