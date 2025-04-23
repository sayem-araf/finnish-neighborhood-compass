import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { mockNeighborhoods } from "@/data/mockNeighborhoods";
import { Users, MapPin, CloudSun, VolumeX, Home } from "lucide-react";

interface NeighborhoodStatsProps {
  selectedCity: string;
}

const NeighborhoodStats = ({ selectedCity }: NeighborhoodStatsProps) => {
  // Filter neighborhoods by selected city
  const cityNeighborhoods = mockNeighborhoods.filter(
    (n) => n.city === selectedCity
  );
  
  // Calculate total population for the selected city
  const totalPopulation = cityNeighborhoods.reduce((sum, neighborhood) => {
    // Assuming each neighborhood has a population based on employment stats
    return sum + (neighborhood.employmentStats.employmentRate * 7812);
  }, 0);
  
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

  // Calculate language diversity
  const languagesCount = cityNeighborhoods.length > 0 
    ? Object.values(cityNeighborhoods[0].factors.languages).filter(val => val > 0).length
    : 4;
  
  const languages = cityNeighborhoods.length > 0 
    ? "Finnish, Swedish, English & others" 
    : "Finnish, Swedish, English & others";

  // Calculate living standard score based on multiple factors
  const livingStandardScore = Math.round(
    cityNeighborhoods.reduce((sum, n) => {
      // Weight different factors to calculate overall living standard
      const weightedScore = (
        n.factors.airQuality.score * 0.2 +          // 20% weight for air quality
        n.factors.transportation.score * 0.2 +      // 20% weight for transportation
        n.factors.noiseLevel.score * 0.15 +         // 15% weight for quietness
        n.factors.incomeLevel.score * 0.25 +        // 25% weight for income level
        n.factors.diversity.score * 0.1 +           // 10% weight for diversity
        n.factors.wildlife.score * 0.1              // 10% weight for nature/wildlife
      );
      return sum + weightedScore;
    }, 0) / (totalNeighborhoods || 1)
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Living Standard</CardTitle>
          <Home className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{livingStandardScore}/100</div>
          <p className="text-xs text-muted-foreground">
            Overall quality of life in {selectedCity}
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Population</CardTitle>
          <Users className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{Math.round(totalPopulation)}</div>
          <p className="text-xs text-muted-foreground">
            Estimated population in {selectedCity}, Finland
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Average Air Quality</CardTitle>
          <CloudSun className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{avgAirQuality} µg/m³</div>
          <p className="text-xs text-muted-foreground">
            PM2.5 concentration in {selectedCity}
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
