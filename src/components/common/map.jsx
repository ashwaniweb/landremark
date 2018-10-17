import React from "react";
import { Map, InfoWindow, Marker } from "google-maps-react";

export const MapView = props => {
  const { markers, NotesData } = props;
  return (
    <Map
      google={props.google}
      zoom={12}
      style={props.style}
      center={
        markers && {
          lat: markers.position.lat,
          lng: markers.position.lng
        }
      }
      onReady={markers ? "" : props.adjustMap}
      className={"Map"}
    >
      {markers && (
        <Marker
          onClick={props.onMarkerClick}
          des={"The marker`s title will appear as a tooltip."}
          name={"Current location"}
          position={markers.position}
          draggable={true}
        />
      )}
      {NotesData &&
        NotesData.map((item, index) => {
          return (
            <Marker
              onClick={props.onMarkerClick}
              des={item.des}
              name={item.title}
              position={item.position}
              key={index}
            />
          );
        })}
      <InfoWindow
        marker={props.activeMarker}
        onClose={props.onInfoWindowClose}
        visible={props.showingInfoWindow}
      >
        <div>
          <h6>{props.selectedPlace.name}</h6>
          <p>{props.selectedPlace.des}</p>
        </div>
      </InfoWindow>
    </Map>
  );
};
