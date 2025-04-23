import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { mockNeighborhoods } from "@/data/mockNeighborhoods";

const FinlandMap = () => {
  // Get unique cities from mock data
  const cities = Array.from(new Set(mockNeighborhoods.map(n => n.city)));
  
  // Get coordinates for each city
  const cityCoordinates = {
    'Helsinki': '60.1699,24.9384',
    'Espoo': '60.2055,24.6559',
    'Tampere': '61.4978,23.7610'
  };

  // Create markers for each city (not neighborhood to avoid duplicates)
  const markers = cities
    .filter(city => cityCoordinates[city as keyof typeof cityCoordinates])
    .map(city => cityCoordinates[city as keyof typeof cityCoordinates])
    .join('&marker=');

  return (
    <Card>
      <CardHeader>
        <CardTitle>Neighborhood Locations</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="w-full h-[300px] rounded-md overflow-hidden">
          <iframe
            width="100%"
            height="100%"
            frameBorder="0"
            scrolling="no"
            marginHeight={0}
            marginWidth={0}
            src={`https://www.openstreetmap.org/export/embed.html?bbox=19.0,59.0,32.0,63.0&layer=mapnik&marker=${markers}`}
            style={{ border: '1px solid #ccc' }}
          />
        </div>
        <div className="mt-3">
          <a 
            href="https://www.openstreetmap.org/#map=7/61.5/25.5"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-muted-foreground hover:underline"
          >
            View Larger Map
          </a>
        </div>
      </CardContent>
    </Card>
  );
};

export default FinlandMap;
