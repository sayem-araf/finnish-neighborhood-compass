
import { GoogleMap, Marker, InfoWindow } from "@react-google-maps/api";
import { useState } from "react";
import { mapContainerStyle, center, locations } from "./constants";

interface Location {
  name: string;
  lat: number;
  lng: number;
  description: string;
  imageUrl: string;
}

const MapContent = () => {
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);

  return (
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      center={center}
      zoom={6}
      options={{
        streetViewControl: false,
        mapTypeControl: false,
        fullscreenControl: false
      }}
    >
      {locations.map((location) => (
        <Marker
          key={location.name}
          position={{ lat: location.lat, lng: location.lng }}
          onClick={() => setSelectedLocation(location)}
        />
      ))}
      
      {selectedLocation && (
        <InfoWindow
          position={{ lat: selectedLocation.lat, lng: selectedLocation.lng }}
          onCloseClick={() => setSelectedLocation(null)}
        >
          <div className="p-2">
            <h3 className="font-bold">{selectedLocation.name}</h3>
            <p className="text-sm">{selectedLocation.description}</p>
            <img 
              src={selectedLocation.imageUrl} 
              alt={selectedLocation.name}
              className="w-full h-24 object-cover mt-2 rounded"
            />
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  );
};

export default MapContent;
