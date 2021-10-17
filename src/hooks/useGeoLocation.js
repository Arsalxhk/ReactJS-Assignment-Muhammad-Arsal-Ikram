import React, { useEffect, useState } from 'react'

const useGeoLoacation = () => {
   const [location , setLocation] =useState({
       loaded: false,
       coordinates: {lat: " ",  lng: " "},
    });

    const onSuccess = (location) => {
        setLocation({
            loaded: true,
            coordinates: {
                lat: location.coords.latitude,
                lng: location.coords.longitude,
            },
        })
    };


    const onError = (error) =>{
        setLocation({
            loaded: true,
            error: {
                code: error.code,
                message: error.message,
            },
        });

    };

    useEffect(()=> {
        if(!("geolocation" in navigator) ){
            onError({
                code: 0,
                message: "Geolocation not Supported"
            });
           
        }

        navigator.geolocation.getCurrentPosition(onSuccess, onError);
    },
    [])
    return location;

    
}

export default useGeoLoacation;
