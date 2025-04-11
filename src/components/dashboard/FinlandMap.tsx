import React from "react";
import {
  GoogleMap,
  LoadScript,
  Marker
} from "@react-google-maps/api";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from "@/components/ui/card";

// Replace this with your actual API key
const GOOGLE_MAPS_API_KEY = "AIzaSyBTfmsdpWF-TdNxsXHf69HFCWrYqNIgZJI";

const containerStyle = {
  width: "100%",
  height: "300px"
};

const center = {
  lat: 60.1699, // Helsinki
  lng: 24.9384
};

const markers = [
  { name: "Helsinki", lat: 60.1699, lng: 24.9384 },
  { name: "Espoo", lat: 60.2055, lng: 24.6559 },
  { name: "Tampere", lat: 61.4978, lng: 23.7610 }
];

const FinlandMap = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Neighborhood Locations</CardTitle>
      </CardHeader>
      <CardContent>
        <LoadScript googleMapsApiKey={GOOGLE_MAPS_API_KEY}>
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={6}
          >
            {markers.map((marker, index) => (
              <Marker
                key={index}
                position={{ lat: marker.lat, lng: marker.lng }}
                title={marker.name}
              />
            ))}
          </GoogleMap>
        </LoadScript>
      </CardContent>
    </Card>
  );
};

export default FinlandMap;
