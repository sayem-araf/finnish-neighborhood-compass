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
    name: "Oulu", 
    lat: 65.0121, 
    lng: 25.4651, 
    description: "Technology hub of northern Finland",
    imageUrl: "https://images.unsplash.com/photo-1551965017-48ec04c2e1cd?q=80&w=2069&auto=format&fit=crop"
  },
  { 
    name: "Jyväskylä", 
    lat: 62.2415, 
    lng: 25.7209, 
    description: "University city in central Finland",
    imageUrl: "https://images.unsplash.com/photo-1576526164505-21d6ee11d37b?q=80&w=2070&auto=format&fit=crop"
  },
  { 
    name: "Lahti", 
    lat: 60.9827, 
    lng: 25.6612, 
    description: "Known for winter sports and design",
    imageUrl: "https://images.unsplash.com/photo-1611948357031-ef7bce1e6762?q=80&w=2069&auto=format&fit=crop"
  },
  { 
    name: "Kuopio", 
    lat: 62.8924, 
    lng: 27.6772, 
    description: "Lakeside city with rich cultural heritage",
    imageUrl: "https://images.unsplash.com/photo-1624970612917-f3a8ce69d779?q=80&w=2069&auto=format&fit=crop"
  },
  { 
    name: "Rovaniemi", 
    lat: 66.5039, 
    lng: 25.7294, 
    description: "Capital of Lapland, home of Santa Claus",
    imageUrl: "https://images.unsplash.com/photo-1669894145555-fb17e1d96971?q=80&w=2070&auto=format&fit=crop"
  },
  { 
    name: "Vaasa", 
    lat: 63.0951, 
    lng: 21.6165, 
    description: "Coastal city with strong Swedish influence",
    imageUrl: "https://images.unsplash.com/photo-1623330483306-425f68206587?q=80&w=2069&auto=format&fit=crop"
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
