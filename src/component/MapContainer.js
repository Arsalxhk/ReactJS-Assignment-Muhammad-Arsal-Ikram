import React from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";




class MapContainer extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        locations: []
      };
      this.handleMapClick = this.handleMapClick.bind(this);
    }
  
    handleMapClick = (ref, map, ev) => {
      const location = ev.latLng;
      this.setState(prevState => ({
        locations: [...prevState.locations, location]
      }));
      map.panTo(location);
    };
  
    render() {
      return (
        <div className="map-container">
          <Map
            google={this.props.google}
            className={"map"}
            zoom={this.props.zoom}
            initialCenter={this.props.center}
            onClick={this.handleMapClick}
          >
            {this.state.locations.map((location, i) => {
              return (
                <Marker
                  key={i}
                  position={{ lat: location.lat(), lng: location.lng() }}
                />
              );
            })}
          </Map>
        </div>
      );
    }
  }

  export default GoogleApiWrapper({
    apiKey: ("AIzaSyCjUO7_W2VM1st5404XmAd5sFpty9JH6zQ")
  })(MapContainer) 