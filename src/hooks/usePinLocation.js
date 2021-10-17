import React, { useEffect, useState } from 'react'

const usePinLoacation = () => {
   const [pinlocation , setpinLocation] =useState({
       loaded: false,
       coordinates: {lat: " ",  lng: " "},
    });

    const onSuccess = (pinlocation) => {
        setpinLocation({
            loaded: true,
            coordinates: {
                lat: pinlocation.coords.latitude,
                lng: pinlocation.coords.longitude,
            },
        })
    };


    const onError = (error) =>{
        setpinLocation({
            loaded: true,
            error: {
                code: error.code,
                message: error.message,
            },
        });

    };

    useEffect(()=> {
        if(!("Pinlocation" in navigator) ){
            onError({
                code: 0,
                message: "Pinlocation not Supported"
            });
           
        }

        navigator.pinlocation.getpinPosition(onSuccess, onError);
    },
    [])
    return pinlocation;

    
}

export default usePinLoacation;
