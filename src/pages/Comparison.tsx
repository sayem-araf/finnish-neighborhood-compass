
import React, { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import Layout from "../components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Separator } from "@/components/ui/separator";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Neighborhood, NeighborhoodFactor } from "@/types/neighborhood";
import { mockNeighborhoods } from "@/data/mockNeighborhoods";
import { MapPin, ArrowLeft, Compare } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Comparison = () => {
  const [searchParams] = useSearchParams();
  const [neighborhoods, setNeighborhoods] = useState<Neighborhood[]>([]);
  const [selectedFactor, setSelectedFactor] = useState<string>("airQuality");

  useEffect(() => {
    // Get neighborhood IDs from URL params
    const ids = searchParams.get("ids")?.split(",") || [];
    
    // Find neighborhoods by IDs
    const selectedNeighborhoods = ids
      .map(id => mockNeighborhoods.find(n => n.id === id))
      .filter(n => n !== undefined) as Neighborhood[];
    
    setNeighborhoods(selectedNeighborhoods);
  }, [searchParams]);

  // Prepare data for the chart
  const prepareChartData = (factor: string) => {
    const data: any[] = [];

    switch (factor) {
      case "airQuality":
        neighborhoods.forEach(n => {
          data.push({
            name: n.name,
            value: n.factors.airQuality.score,
            unit: n.factors.airQuality.unit || "µg/m³",
          });
        });
        break;
      case "noiseLevel":
        neighborhoods.forEach(n => {
          data.push({
            name: n.name,
            value: n.factors.noiseLevel.score,
            unit: n.factors.noiseLevel.unit || "score",
          });
        });
        break;
      case "transportation":
        neighborhoods.forEach(n => {
          data.push({
            name: n.name,
            value: n.factors.transportation.score,
            unit: n.factors.transportation.unit || "score",
          });
        });
        break;
      case "diversity":
        neighborhoods.forEach(n => {
          data.push({
            name: n.name,
            value: n.factors.diversity.score,
            unit: n.factors.diversity.unit || "score",
          });
        });
        break;
      case "wildlife":
        neighborhoods.forEach(n => {
          data.push({
            name: n.name,
            value: n.factors.wildlife.score,
            unit: n.factors.wildlife.unit || "score",
          });
        });
        break;
      case "incomeLevel":
        neighborhoods.forEach(n => {
          data.push({
            name: n.name,
            value: n.factors.incomeLevel.score,
            unit: n.factors.incomeLevel.unit || "€",
          });
        });
        break;
    }

    return data;
  };

  // Get factor name for display
  const getFactorName = (factor: string) => {
    const factorNames: { [key: string]: string } = {
      airQuality: "Air Quality",
      noiseLevel: "Noise Level",
      transportation: "Transportation",
      diversity: "Diversity",
      wildlife: "Wildlife",
      incomeLevel: "Income Level",
    };
    
    return factorNames[factor] || factor;
  };

  // Get factor description
  const getFactorDescription = (neighborhood: Neighborhood, factor: string): string => {
    if (!neighborhood) return "";
    
    switch (factor) {
      case "airQuality":
        return neighborhood.factors.airQuality.description;
      case "noiseLevel":
        return neighborhood.factors.noiseLevel.description;
      case "transportation":
        return neighborhood.factors.transportation.description;
      case "diversity":
        return neighborhood.factors.diversity.description;
      case "wildlife":
        return neighborhood.factors.wildlife.description;
      case "incomeLevel":
        return neighborhood.factors.incomeLevel.description;
      default:
        return "";
    }
  };

  // Get factor unit
  const getFactorUnit = (factor: string): string => {
    const factorUnits: { [key: string]: string } = {
      airQuality: "µg/m³",
      noiseLevel: "score",
      transportation: "score",
      diversity: "score",
      wildlife: "score",
      incomeLevel: "€",
    };
    
    return factorUnits[factor] || "";
  };

  if (neighborhoods.length === 0) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-12">
          <Alert>
            <AlertDescription>
              No neighborhoods selected for comparison. Please select neighborhoods from the results page.
            </AlertDescription>
          </Alert>
          <div className="mt-4">
            <Link to="/results">
              <Button variant="outline" className="flex items-center gap-2">
                <ArrowLeft size={16} />
                Back to Results
              </Button>
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  // Chart colors
  const barColors = ["#0EA5E9", "#10B981", "#F97316", "#8B5CF6", "#EC4899"];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold mb-2">Neighborhood Comparison</h1>
            <p className="text-muted-foreground">
              Comparing {neighborhoods.length} neighborhoods
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <Link to="/results">
              <Button variant="outline" className="flex items-center gap-2">
                <ArrowLeft size={16} />
                Back to Results
              </Button>
            </Link>
          </div>
        </div>

        <div className="mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Compare Factors</CardTitle>
              <CardDescription>
                Select a factor to compare between neighborhoods
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ToggleGroup 
                type="single" 
                value={selectedFactor}
                onValueChange={(value) => {
                  if (value) setSelectedFactor(value);
                }}
                className="justify-start flex-wrap"
              >
                <ToggleGroupItem value="airQuality">Air Quality</ToggleGroupItem>
                <ToggleGroupItem value="noiseLevel">Noise Level</ToggleGroupItem>
                <ToggleGroupItem value="transportation">Transportation</ToggleGroupItem>
                <ToggleGroupItem value="diversity">Diversity</ToggleGroupItem>
                <ToggleGroupItem value="wildlife">Wildlife</ToggleGroupItem>
                <ToggleGroupItem value="incomeLevel">Income Level</ToggleGroupItem>
              </ToggleGroup>
            </CardContent>
          </Card>
        </div>

        <div className="mb-8">
          <Card>
            <CardHeader>
              <CardTitle>{getFactorName(selectedFactor)} Comparison</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[400px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={prepareChartData(selectedFactor)}
                    margin={{
                      top: 20,
                      right: 30,
                      left: 20,
                      bottom: 30,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
                    <XAxis dataKey="name" />
                    <YAxis 
                      label={{ 
                        value: getFactorUnit(selectedFactor),
                        angle: -90, 
                        position: 'insideLeft' 
                      }}
                    />
                    <Tooltip formatter={(value) => [`${value} ${getFactorUnit(selectedFactor)}`, getFactorName(selectedFactor)]} />
                    <Legend />
                    <Bar 
                      dataKey="value" 
                      name={getFactorName(selectedFactor)} 
                      fill="#0EA5E9" 
                      radius={[4, 4, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {neighborhoods.map((neighborhood, index) => (
            <Card key={neighborhood.id} className="overflow-hidden h-full">
              <div className="h-32 bg-cover bg-center"
                style={{
                  backgroundImage: neighborhood.imageUrl
                    ? `url(${neighborhood.imageUrl})`
                    : "url(https://images.unsplash.com/photo-1640078530772-b1e297ac3178?q=80&w=2748&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)"
                }}
              />
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl">{neighborhood.name}</CardTitle>
                    <CardDescription className="flex items-center gap-1 mt-1">
                      <MapPin size={14} /> {neighborhood.city}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <h3 className="text-sm font-semibold mb-1">{getFactorName(selectedFactor)}</h3>
                  <div className="text-2xl font-bold">
                    {selectedFactor === "incomeLevel" 
                      ? `${neighborhood.factors[selectedFactor as keyof typeof neighborhood.factors].score}€`
                      : neighborhood.factors[selectedFactor as keyof typeof neighborhood.factors].score}
                    {selectedFactor === "airQuality" && <span className="text-sm ml-1">µg/m³</span>}
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    {getFactorDescription(neighborhood, selectedFactor)}
                  </p>
                </div>
                <Separator className="my-4" />
                <Link to={`/neighborhood/${neighborhood.id}`}>
                  <Button variant="outline" className="w-full">View Details</Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Comparison;
