
import React, { useEffect, useState, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { mockNeighborhoods } from "@/data/mockNeighborhoods";
import { MapPin, Globe } from "lucide-react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

// Create a component for MapBox token input when not available
const MapTokenInput = ({ onTokenSubmit }: { onTokenSubmit: (token: string) => void }) => {
  const [token, setToken] = useState("");
  
  return (
    <div className="p-4 border border-dashed border-gray-300 rounded-md">
      <h3 className="text-sm font-medium mb-2">Enter Mapbox Access Token</h3>
      <p className="text-xs text-muted-foreground mb-4">
        Get your free token at <a href="https://mapbox.com/" target="_blank" rel="noreferrer" className="text-blue-500 underline">mapbox.com</a>
      </p>
      <div className="flex gap-2">
        <input 
          type="text" 
          value={token}
          onChange={(e) => setToken(e.target.value)}
          placeholder="pk.eyJ1Ijo..."
          className="flex-1 text-sm px-3 py-2 border rounded-md"
        />
        <button 
          onClick={() => onTokenSubmit(token)}
          className="bg-finland-blue text-white px-3 py-2 rounded-md text-sm"
        >
          Apply
        </button>
      </div>
    </div>
  );
};

const FinlandMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapToken, setMapToken] = useState<string | null>(() => {
    return localStorage.getItem("mapbox_token");
  });
  const [mapLoaded, setMapLoaded] = useState(false);

  useEffect(() => {
    if (!mapToken || !mapContainer.current) return;
    
    // Save token to localStorage for persistence
    localStorage.setItem("mapbox_token", mapToken);
    
    // Set the Mapbox access token
    mapboxgl.accessToken = mapToken;
    
    // Initialize the map
    const mapInstance = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v11',
      center: [24.945831, 60.192059], // Center on Helsinki, Finland
      zoom: 5.5,
    });
    
    // Save the map instance
    map.current = mapInstance;
    
    // Add navigation controls
    mapInstance.addControl(new mapboxgl.NavigationControl(), 'top-right');
    
    // When the map is loaded, add markers
    mapInstance.on('load', () => {
      setMapLoaded(true);
      
      // Add markers for all neighborhoods
      mockNeighborhoods.forEach(neighborhood => {
        // Get location coordinates based on city
        const coords = getCityCoordinates(neighborhood.city);
        
        // Create a marker element
        const markerElement = document.createElement('div');
        markerElement.className = 'marker';
        markerElement.style.width = '24px';
        markerElement.style.height = '24px';
        markerElement.style.borderRadius = '50%';
        markerElement.style.backgroundColor = '#1e429f';
        markerElement.style.display = 'flex';
        markerElement.style.alignItems = 'center';
        markerElement.style.justifyContent = 'center';
        markerElement.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>';
        
        // Create a popup with neighborhood info
        const popup = new mapboxgl.Popup({ offset: 25 })
          .setHTML(`
            <div>
              <h3 style="font-weight: bold; margin-bottom: 4px;">${neighborhood.name}</h3>
              <p style="font-size: 12px; color: #666;">${neighborhood.city}, Finland</p>
            </div>
          `);
        
        // Add the marker to the map
        new mapboxgl.Marker(markerElement)
          .setLngLat(coords)
          .setPopup(popup)
          .addTo(mapInstance);
      });
    });
    
    // Cleanup
    return () => {
      mapInstance.remove();
    };
  }, [mapToken]);
  
  // Helper function to get coordinates for each city
  const getCityCoordinates = (city: string): [number, number] => {
    switch (city) {
      case 'Helsinki':
        return [24.945831, 60.192059];
      case 'Espoo':
        return [24.6559, 60.2055];
      case 'Tampere':
        return [23.7610, 61.4978];
      case 'Vantaa':
        return [25.0378, 60.2934];
      case 'Oulu':
        return [25.4715, 65.0126];
      case 'Turku':
        return [22.2686, 60.4518];
      default:
        return [24.945831, 60.192059]; // Default to Helsinki
    }
  };
  
  const handleTokenSubmit = (token: string) => {
    setMapToken(token);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Globe size={18} />
          Neighborhood Locations
        </CardTitle>
      </CardHeader>
      <CardContent className="h-[300px]">
        {mapToken ? (
          <div className="relative h-full w-full rounded-md overflow-hidden">
            <div ref={mapContainer} className="h-full w-full" />
            {!mapLoaded && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                <div className="text-sm text-gray-500">Loading map...</div>
              </div>
            )}
          </div>
        ) : (
          <MapTokenInput onTokenSubmit={handleTokenSubmit} />
        )}
      </CardContent>
    </Card>
  );
};

export default FinlandMap;
