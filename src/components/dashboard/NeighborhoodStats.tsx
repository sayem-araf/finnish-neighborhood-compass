
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { mockNeighborhoods } from "@/data/mockNeighborhoods";
import { Users, MapPin, CloudSun, VolumeX } from "lucide-react";

interface NeighborhoodStatsProps {
  selectedCity: string;
}

const NeighborhoodStats = ({ selectedCity }: NeighborhoodStatsProps) => {
  // Filter neighborhoods by selected city
  const cityNeighborhoods = mockNeighborhoods.filter(
    (n) => n.city === selectedCity
  );
  
  // Calculate stats for the selected city
  const totalNeighborhoods = cityNeighborhoods.length;
  
  // Calculate average air quality for the selected city
  const avgAirQuality = Math.round(
    cityNeighborhoods.reduce((sum, n) => sum + n.factors.airQuality.score, 0) / 
    (totalNeighborhoods || 1)
  );
  
  // Calculate average noise level (inverted for quietness score)
  const avgQuietness = Math.round(
    cityNeighborhoods.reduce((sum, n) => sum + n.factors.noiseLevel.score, 0) / 
    (totalNeighborhoods || 1)
  );

  // Calculate language diversity (count of languages available in the neighborhood)
  // Get the total number of languages by summing the non-zero language percentages
  const languagesCount = cityNeighborhoods.length > 0 
    ? Object.values(cityNeighborhoods[0].factors.languages).filter(val => val > 0).length
    : 4;
  
  // Get most common languages
  const languages = cityNeighborhoods.length > 0 
    ? "Finnish, Swedish, English & others" 
    : "Finnish, Swedish, English & others";

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
            In {selectedCity}, Finland
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
            Based on {selectedCity} environmental data
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
            Based on {selectedCity} noise level readings
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Language Diversity</CardTitle>
          <Users className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{languagesCount}</div>
          <p className="text-xs text-muted-foreground">
            {languages}
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default NeighborhoodStats;
