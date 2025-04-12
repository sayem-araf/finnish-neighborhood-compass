
import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

// Using a different token that should work - this is just for demo purposes
const defaultMapboxToken = "pk.eyJ1IjoibG92YWJsZS1haS1kZW1vIiwiYSI6ImNsdXc5aXR3bzBvMXEycXBnNTN2NXdla28ifQ.QXKLiTdxck2KvYx5DQAGtA";

const locations = [
  { 
    name: "Helsinki", 
    lat: 60.1699, 
    lng: 24.9384, 
    description: "Capital and largest city of Finland",
    imageUrl: "https://images.unsplash.com/photo-1582180449047-e4dd8a7359cc?q=80&w=2070&auto=format&fit=crop"
  },
  { 
    name: "Espoo", 
    lat: 60.2055, 
    lng: 24.6559, 
    description: "Second largest city in Finland",
    imageUrl: "https://images.unsplash.com/photo-1600240201373-21f4dc873cdf?q=80&w=2070&auto=format&fit=crop"
  },
  { 
    name: "Tampere", 
    lat: 61.4978, 
    lng: 23.7610, 
    description: "Third largest city in Finland",
    imageUrl: "https://images.unsplash.com/photo-1544985361-b420d7a77043?q=80&w=2070&auto=format&fit=crop"
  },
  { 
    name: "Turku", 
    lat: 60.4518, 
    lng: 22.2666, 
    description: "Oldest city in Finland",
    imageUrl: "https://images.unsplash.com/photo-1564504856881-7e19f21cc37c?q=80&w=2070&auto=format&fit=crop"
  },
  { 
    name: "Kallio", 
    lat: 60.1841, 
    lng: 24.9494, 
    description: "Trendy district in Helsinki",
    imageUrl: "https://images.unsplash.com/photo-1582180449047-e4dd8a7359cc?q=80&w=2070&auto=format&fit=crop"
  }
];

const FinlandMap = () => {
  const mapContainer = useRef<HTMLDivElement | null>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState<string>(defaultMapboxToken);
  const [tokenInput, setTokenInput] = useState<string>("");
  const [showTokenInput, setShowTokenInput] = useState<boolean>(false);
  const { toast } = useToast();

  useEffect(() => {
    if (mapContainer.current === null) return;
    
    if (map.current) {
      map.current.remove();
      map.current = null;
    }
    
    try {
      mapboxgl.accessToken = mapboxToken;
      
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/light-v11',
        center: [24.9384, 60.1699], // Helsinki
        zoom: 6
      });

      // Add navigation controls
      map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

      // Load markers once the map is ready
      map.current.on('load', () => {
        // Add markers for each city
        locations.forEach((location) => {
          // Create a marker
          const marker = new mapboxgl.Marker({
            color: "#3B82F6" // Finland blue
          })
            .setLngLat([location.lng, location.lat])
            .addTo(map.current!);
          
          // Add popup with image
          const popup = new mapboxgl.Popup({ offset: 25, maxWidth: '300px' })
            .setHTML(`
              <div style="text-align: center;">
                <strong style="font-size: 16px;">${location.name}</strong>
                <p style="margin: 5px 0;">${location.description}</p>
                <img 
                  src="${location.imageUrl}" 
                  alt="${location.name}" 
                  style="width: 100%; height: 120px; object-fit: cover; border-radius: 4px; margin-top: 8px;"
                />
              </div>
            `);
          
          marker.setPopup(popup);
        });
      });

      toast({
        title: "Map loaded successfully",
        description: "Click on markers to see city details.",
      });
    } catch (error) {
      console.error("Error initializing map:", error);
      toast({
        title: "Error loading map",
        description: "Please check your Mapbox token and try again.",
        variant: "destructive",
      });
      setShowTokenInput(true);
    }

    // Clean up on unmount
    return () => {
      if (map.current) {
        map.current.remove();
      }
    };
  }, [mapboxToken, toast]);

  const handleTokenUpdate = () => {
    if (tokenInput) {
      setMapboxToken(tokenInput);
      setShowTokenInput(false);
      toast({
        title: "Token updated",
        description: "Map will reload with your Mapbox token.",
      });
    } else {
      toast({
        title: "Token required",
        description: "Please enter a valid Mapbox token.",
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
              Please enter your Mapbox token to display the map. You can get one at{" "}
              <a 
                href="https://mapbox.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                mapbox.com
              </a>
            </p>
            <div className="flex gap-2">
              <Input
                placeholder="Enter your Mapbox token"
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
            Change Mapbox Token
          </button>
        )}
        <div 
          ref={mapContainer} 
          className="w-full h-[300px] rounded-md overflow-hidden"
        />
      </CardContent>
    </Card>
  );
};

export default FinlandMap;
