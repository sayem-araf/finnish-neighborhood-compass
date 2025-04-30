
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";

interface NeighborhoodMapProps {
  name: string;
  city: string;
}

const NeighborhoodMap: React.FC<NeighborhoodMapProps> = ({ name, city }) => {
  const getMapCoordinates = (city: string) => {
    switch (city) {
      case 'Helsinki':
        return {
          bbox: '24.8384,60.1499,25.0384,60.1899',
          marker: '60.1699,24.9384'
        };
      case 'Espoo':
        return {
          bbox: '24.5559,60.1855,24.7559,60.2255',
          marker: '60.2055,24.6559'
        };
      case 'Tampere':
        return {
          bbox: '23.6610,61.4778,23.8610,61.5178',
          marker: '61.4978,23.7610'
        };
      default:
        return {
          bbox: '24.8384,60.1499,25.0384,60.1899',
          marker: '60.1699,24.9384'
        };
    }
  };

  const coordinates = getMapCoordinates(city);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Neighborhood Map</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="aspect-video bg-muted rounded-lg overflow-hidden relative">
          <iframe
            width="100%"
            height="100%"
            frameBorder="0"
            scrolling="no"
            marginHeight={0}
            marginWidth={0}
            src={`https://www.openstreetmap.org/export/embed.html?bbox=${
              coordinates.bbox
            }&layer=mapnik&marker=${
              coordinates.marker
            }`}
            style={{ border: '1px solid #ccc' }}
          />
          <div className="absolute top-2 right-2 bg-white p-2 rounded-md shadow-md">
            <div className="flex items-center gap-2 text-xs">
              <span className="h-3 w-3 rounded-full bg-finland-blue"></span>
              <span>Current Location</span>
            </div>
            <div className="flex items-center gap-2 text-xs mt-1">
              <span className="h-3 w-3 rounded-full bg-green-500"></span>
              <span>Green Spaces</span>
            </div>
            <div className="flex items-center gap-2 text-xs mt-1">
              <span className="h-3 w-3 rounded-full bg-red-500"></span>
              <span>Property Listings</span>
            </div>
          </div>
        </div>
        <div className="mt-3">
          <a 
            href={`https://www.openstreetmap.org/search?query=${encodeURIComponent(
              name + " " + city + " Finland"
            )}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline" size="sm" className="w-full">
              <MapPin className="h-4 w-4 mr-2" />
              View Interactive Map
            </Button>
          </a>
        </div>
      </CardContent>
    </Card>
  );
};

export default NeighborhoodMap;
