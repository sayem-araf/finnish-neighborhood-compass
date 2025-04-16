import { useState } from "react";
import { GoogleMap, LoadScript, Marker, InfoWindow } from "@react-google-maps/api";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

// using a demo api key - replace with your own in production
const defaultGoogleMapsApiKey = "AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg";

const locations = [
  { 
    name: "Helsinki", 
    lat: 60.1699, 
    lng: 24.9384, 
    description: "Capital and largest city of Finland",
    imageUrl: "https://images.unsplash.com/photo-1565025093186-cb73fc027f1a?q=80&w=2070&auto=format&fit=crop"
  },
  { 
    name: "Espoo", 
    lat: 60.2055, 
    lng: 24.6559, 
    description: "Second largest city in Finland",
    imageUrl: "https://images.unsplash.com/photo-1627573002203-abf1d73cf5ad?q=80&w=2070&auto=format&fit=crop"
  },
  { 
    name: "Tampere", 
    lat: 61.4978, 
    lng: 23.7610, 
    description: "Third largest city in Finland",
    imageUrl: "https://images.unsplash.com/photo-1582071002012-f93ff817ac73?q=80&w=2070&auto=format&fit=crop"
  },
  { 
    name: "Turku", 
    lat: 60.4518, 
    lng: 22.2666, 
    description: "Oldest city in Finland",
    imageUrl: "https://images.unsplash.com/photo-1565944692535-b96b8bc2e938?q=80&w=2070&auto=format&fit=crop"
  },
  { 
    name: "Kallio", 
    lat: 60.1841, 
    lng: 24.9494, 
    description: "Trendy district in Helsinki",
    imageUrl: "https://images.unsplash.com/photo-1523997826399-965f6aa58901?q=80&w=2071&auto=format&fit=crop"
  }
];

const mapContainerStyle = {
  width: '100%',
  height: '300px'
};

const center = {
  lat: 60.1699, // Helsinki
  lng: 24.9384
};

const FinlandMap = () => {
  const [apiKey, setApiKey] = useState<string>(defaultGoogleMapsApiKey);
  const [tokenInput, setTokenInput] = useState<string>("");
  const [showTokenInput, setShowTokenInput] = useState<boolean>(false);
  const [selectedLocation, setSelectedLocation] = useState<any>(null);
  const { toast } = useToast();

  const handleTokenUpdate = () => {
    if (tokenInput) {
      setApiKey(tokenInput);
      setShowTokenInput(false);
      toast({
        title: "API Key updated",
        description: "Map will reload with your Google Maps API key.",
      });
    } else {
      toast({
        title: "API Key required",
        description: "Please enter a valid Google Maps API key.",
        variant: "destructive",
      });
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Neighborhood Locations</CardTitle>
      </CardHeader>
      <CardContent>
        {showTokenInput ? (
          <div className="mb-4 space-y-2">
            <p className="text-sm text-muted-foreground">
              Please enter your Google Maps API key to display the map. You can get one at{" "}
              <a 
                href="https://console.cloud.google.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                Google Cloud Console
              </a>
            </p>
            <div className="flex gap-2">
              <Input
                placeholder="Enter your Google Maps API key"
                value={tokenInput}
                onChange={(e) => setTokenInput(e.target.value)}
              />
              <Button onClick={handleTokenUpdate}>Update</Button>
            </div>
          </div>
        ) : (
          <button 
            className="text-xs text-muted-foreground mb-2 hover:underline"
            onClick={() => setShowTokenInput(true)}
          >
            Change Google Maps API Key
          </button>
        )}
        <div className="w-full h-[300px] rounded-md overflow-hidden">
          <LoadScript googleMapsApiKey={apiKey}>
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
          </LoadScript>
        </div>
      </CardContent>
    </Card>
  );
};

export default FinlandMap;
