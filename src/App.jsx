import React, { Component, Fragment } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { connect } from "react-redux";
import { currentLocation } from "./actions/currentLocation";
import { defaultData } from "./actions/onload";
import { addNotes } from "./actions/addNotes";
import Main from "./containers/main";
import { Menu } from "./components/common/menu";
import TestData from "./data/data";

class App extends Component {
  componentWillMount() {
    this.getGeoLocation();
    if (typeof Storage !== "undefined") {
      const data = localStorage.getItem("testData");
      if (data === null) {
        localStorage.setItem("testData", JSON.stringify(TestData));
      }
      this.props.defaultData({
        NotesData: JSON.parse(localStorage.getItem("testData"))
      });
    }
  }

  // Get Current Location
  getGeoLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.props.currentLocation({
          position: {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          }
        });
      });
    } else {
      console.log("error");
    }
  }
  render() {
    const { NotesData, markers } = this.props;
    return (
      <div className="App">
        <Router>
          <Fragment>
            <Menu addNotes={this.props.addNotes} />
            <Main NotesData={NotesData} markers={markers} {...this.props} />
          </Fragment>
        </Router>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    markers: state.currentLocation.markers,
    NotesData: state.onLoad.NotesData,
    addShow: state.addNotes.show
  };
};
const mapDispatchToProps = {
  currentLocation,
  defaultData,
  addNotes
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
