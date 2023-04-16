import { useState, useCallback  } from "react";
import {GoogleMap, useLoadScript, Marker} from "@react-google-maps/api"
import {Box} from "@mui/material"

export default function Karte ({stationIndex, setStationIndex}){ 
    const handleMarkerClick = useCallback((index) => {
        setStationIndex(index);
    },
    [setStationIndex]
    );

    const {isLoaded} = useLoadScript({
        googleMapsApiKey: "AIzaSyAwNgDHZDq6dxSQ9bX4Sv72HUjv6YBueTY",
    });

    if (isLoaded) {
        return (
            <Box>
                <GoogleMap zoom={13} center={{lat: 49.49, lng: 8.47}} mapContainerClassName="map-container">
                    <Marker position={{lat: 49.49, lng: 8.47}} optimized ={false}/>
                    <Marker position={{lat: 49.48, lng: 8.47}} optimized={false}/>
                    <Marker position={{lat: 49.49, lng: 8.48}} optimized ={false}/>
                </GoogleMap>
            </Box>
        )
    }
    return (<Box>Loading...</Box>)
}

