import React, { Component } from "react";
import { GoogleApiWrapper } from "google-maps-react";
import { MapView } from "../components/common/map";
const style = {
  width: "100%",
  height: "calc(100vh - 80px)",
  position: "relative"
};

class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedPlace: {},
      showingInfoWindow: false
    };
  }
  onMarkerClick = (props, marker) => {
    this.setState({
      activeMarker: marker,
      selectedPlace: props,
      showingInfoWindow: true
    });
  };

  onInfoWindowClose = () => {
    this.setState({
      activeMarker: null,
      showingInfoWindow: false
    });
  };

  onMapClicked = () => {
    if (this.state.showingInfoWindow)
      this.setState({
        activeMarker: null,
        showingInfoWindow: false
      });
  };

  adjustMap = (mapProps, map) => {
    const { NotesData } = this.props;
    const { google } = mapProps;
    const bounds = new google.maps.LatLngBounds();
    NotesData.forEach(a => {
      const { lat, lng } = a.position;
      bounds.extend(new google.maps.LatLng(lat, lng));
    });
    map.fitBounds(bounds);
  };

  render() {
    return (
      <MapView
        style={style}
        google={this.props.google}
        markers={this.props.markers}
        NotesData={this.props.NotesData}
        adjustMap={this.adjustMap}
        onMapClicked={this.onMapClicked}
        onInfoWindowClose={this.onInfoWindowClose}
        selectedPlace={this.state.selectedPlace}
      />
    );
  }
}
export default GoogleApiWrapper({
  apiKey: "AIzaSyB4q4Cwwl7PvTdLSAyVy4oWOLt4l0yEuyM"
})(MapContainer);
