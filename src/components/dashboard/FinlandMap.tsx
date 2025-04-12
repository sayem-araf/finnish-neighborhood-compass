
import React, { useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from "@/components/ui/card";

// Replace with your Mapbox public token
mapboxgl.accessToken = "pk.eyJ1IjoibG92YWJsZS1haS1kZW1vIiwiYSI6ImNsdXc5MG82eDBrMjUyaW82YWRtZXp4djcifQ.h6qKwrmNqZ6NaXXUYfKpOA";

const locations = [
  { name: "Helsinki", lat: 60.1699, lng: 24.9384, description: "Capital and largest city of Finland" },
  { name: "Espoo", lat: 60.2055, lng: 24.6559, description: "Second largest city in Finland" },
  { name: "Tampere", lat: 61.4978, lng: 23.7610, description: "Third largest city in Finland" },
  { name: "Turku", lat: 60.4518, lng: 22.2666, description: "Oldest city in Finland" }
];

const FinlandMap = () => {
  const mapContainer = useRef<HTMLDivElement | null>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (mapContainer.current === null) return;
    
    if (map.current) return; // Initialize map only once
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v11',
      center: [24.9384, 60.1699], // Helsinki
      zoom: 6
    });

    // Add navigation controls
    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

    // Add markers for each city
    locations.forEach((location) => {
      // Create a marker
      const marker = new mapboxgl.Marker({
        color: "#3B82F6" // Finland blue
      })
        .setLngLat([location.lng, location.lat])
        .addTo(map.current!);
      
      // Add popup
      const popup = new mapboxgl.Popup({ offset: 25 })
        .setHTML(`
          <strong>${location.name}</strong>
          <p>${location.description}</p>
        `);
      
      marker.setPopup(popup);
    });

    // Clean up on unmount
    return () => {
      if (map.current) {
        map.current.remove();
      }
    };
  }, []);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Neighborhood Locations</CardTitle>
      </CardHeader>
      <CardContent>
        <div 
          ref={mapContainer} 
          className="w-full h-[300px] rounded-md overflow-hidden"
        />
      </CardContent>
    </Card>
  );
};

export default FinlandMap;
