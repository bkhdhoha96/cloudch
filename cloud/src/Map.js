
import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const Map = () => {
  const mapStyles = {
    height: '600px',
    width: '100%',
  };

  const defaultCenter = {
    lat: 40.712776,
    lng: -74.005974,
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyDQOovNF43_U7L4l_WyV1Jsmi7-6TuNCmY">
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={13}
        center={defaultCenter}
      />
    </LoadScript>
  );
};

export default Map;