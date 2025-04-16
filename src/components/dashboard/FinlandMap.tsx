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

// Using a public demo token from Mapbox
const defaultMapboxToken = "pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA";

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
      console.log("Initializing map with token:", mapboxToken);
      
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v12', // Changed to streets-v12 which is more reliable
        center: [24.9384, 60.1699], // Helsinki
        zoom: 6,
        attributionControl: true // Ensure attribution is visible
      });

      // Add navigation controls
      map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

      // Load markers once the map is ready
      map.current.on('load', () => {
        console.log("Map loaded successfully");
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

      map.current.on('error', (e) => {
        console.error("Map error:", e);
        toast({
          title: "Map error",
          description: "There was an error loading the map. Please check your token.",
          variant: "destructive",
        });
        setShowTokenInput(true);
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
