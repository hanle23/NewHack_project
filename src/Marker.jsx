import React, { useEffect,useState,Component } from "react";

import GoogleMap from "google-maps-react";

// import Marker from "./Marker";



function Marker (options) {
   
    const [marker, setMarker] = useState([]);
  
    React.useEffect(() => {
      if (!marker) {
        setMarker(new GoogleMap.maps.Marker());
      }
  
      // remove marker from map on unmount
      return () => {
        if (marker) {
          marker.setMap(null);
        }
      };
    }, [marker]);
    React.useEffect(() => {
      if (marker) {
        marker.setOptions(options);
      }
    }, [marker, options]);
    return null;
  };

  export default Marker;