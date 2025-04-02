
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { mockNeighborhoods } from "@/data/mockNeighborhoods";
import { Users, MapPin, CloudSun, VolumeX } from "lucide-react";

const NeighborhoodStats = () => {
  // Calculate aggregate stats from mock data
  const totalNeighborhoods = mockNeighborhoods.length;
  const uniqueCities = [...new Set(mockNeighborhoods.map(n => n.city))].length;
  
  // Calculate average air quality
  const avgAirQuality = Math.round(
    mockNeighborhoods.reduce((sum, n) => sum + n.factors.airQuality.score, 0) / totalNeighborhoods
  );
  
  // Calculate average noise level (inverted for quietness score)
  const avgQuietness = Math.round(
    mockNeighborhoods.reduce((sum, n) => sum + n.factors.noiseLevel.score, 0) / totalNeighborhoods
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Neighborhoods</CardTitle>
          <MapPin className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{totalNeighborhoods}</div>
          <p className="text-xs text-muted-foreground">
            Across {uniqueCities} cities in Finland
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Average Air Quality</CardTitle>
          <CloudSun className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{avgAirQuality}/100</div>
          <p className="text-xs text-muted-foreground">
            Based on environmental data
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Average Quietness</CardTitle>
          <VolumeX className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{avgQuietness}/100</div>
          <p className="text-xs text-muted-foreground">
            Based on noise level readings
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Language Diversity</CardTitle>
          <Users className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">4</div>
          <p className="text-xs text-muted-foreground">
            Finnish, Swedish, English & others
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default NeighborhoodStats;
