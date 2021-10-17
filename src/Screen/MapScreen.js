import React from 'react';
import { Map, google, infoWindow, Marker, GoogleApiWrapper,Circle } from 'google-maps-react';
import useGeoLoacation from '../hooks/useGeoLocation';
import MapContainer from '../component/MapContainer';




function MapScreen(props) {
    
    const location = useGeoLoacation();
    
    
  
    const {lat , lng} = location.coordinates;
    console.log(lat, lng)

    function myLatLng() {

        

        const {lat , lng} = location.coordinates;
        console.log(lat, lng)
    }


    return (



    <div className="mapStyles">
        <Map 
    google={ props.google} zoom={12}  
    default initialCenter={{lat: lat,  lng: lng}}

    
        center={{lat:31.4667, lng: 74.2660}}
        onClick={() => console.log({myLatLng})}
        onMouseover={() => console.log('Hello')}
        strokeColor='transparent'
        strokeOpacity={0}
        strokeWeight={5}
        fillColor='#FF0000'
        fillOpacity={0.2}

     >

    <Marker
    position={{lat:lat , lng: lng}}
    title={"My Location"}  
    />


  

  
    
    </Map>
        </div>
    );
}

export default GoogleApiWrapper({
    apiKey: ("AIzaSyCjUO7_W2VM1st5404XmAd5sFpty9JH6zQ")
  })(MapScreen) 