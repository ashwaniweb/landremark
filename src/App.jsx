import React, { Component, Fragment } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { ConnectedRouter } from "connected-react-router";
import { defaultData, currentLocation, addNotesModal } from "./actions";
import Main from "./containers/main";
import { Menu } from "./components/common/menu";
import TestData from "./data/data";
class App extends Component {
  componentWillMount() {
    debugger;
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
      console.log("error ddd");
    }
  }
  render() {
    const { markers } = this.props;
    return (
      <div className="App">
        <Router>
          <Fragment>
            <Menu addNotesModal={this.props.addNotesModal} />
            <Main markers={markers} {...this.props} />
          </Fragment>
        </Router>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    markers: state.currentLocation.markers,
    NotesData: state.onLoad.NotesData
  };
};
const mapDispatchToProps = {
  defaultData,
  currentLocation,
  addNotesModal
};
App.propTypes = {
  history: PropTypes.object
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
