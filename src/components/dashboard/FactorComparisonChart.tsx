import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  Brush,
} from "recharts";
import { mockNeighborhoods } from "@/data/mockNeighborhoods";
import { ChartContainer, ChartTooltipContent } from "@/components/ui/chart";

// Define custom colors for the chart
const chartColors = {
  airQuality: "#0EA5E9",
  quietness: "#10B981", 
  transportation: "#F97316",
  diversity: "#8B5CF6",
};

interface FactorComparisonChartProps {
  selectedCity: string;
  onCityChange: (city: string) => void;
}

const FactorComparisonChart = ({ 
  selectedCity,
  onCityChange
}: FactorComparisonChartProps) => {
  // Get neighborhoods for the selected city
  const cityNeighborhoods = mockNeighborhoods.filter(
    (n) => n.city === selectedCity
  );

  // Get all unique cities from the data
  const availableCities = [...new Set(mockNeighborhoods.map(n => n.city))];

  // Prepare data for the chart
  const chartData = cityNeighborhoods.map((neighborhood) => ({
    name: neighborhood.name,
    "Air Quality": neighborhood.factors.airQuality.score,
    "Quietness": neighborhood.factors.noiseLevel.score,
    "Transportation": neighborhood.factors.transportation.score,
    "Diversity": neighborhood.factors.diversity.score,
  }));

  // Configuration for the chart
  const chartConfig = {
    "Air Quality": {
      color: chartColors.airQuality,
    },
    "Quietness": {
      color: chartColors.quietness,
    },
    "Transportation": {
      color: chartColors.transportation,
    },
    "Diversity": {
      color: chartColors.diversity,
    },
  };

  return (
    <Card className="col-span-1 md:col-span-2">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-lg font-medium">
          Neighborhood Factor Comparison
        </CardTitle>
        <select 
          className="px-2 py-1 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          value={selectedCity}
          onChange={(e) => onCityChange(e.target.value)}
        >
          {availableCities.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
      </CardHeader>
      <CardContent className="h-[350px] pt-4">
        <ChartContainer config={chartConfig} className="h-full">
          <BarChart
            data={chartData}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 30,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
            <XAxis 
              dataKey="name" 
              tick={{ fontSize: 12 }} 
              tickLine={false}
            />
            <YAxis 
              domain={[0, 30]}
              tick={{ fontSize: 12 }} 
              tickLine={false}
              label={{ value: 'PM2.5 (µg/m³)', angle: -90, position: 'insideLeft' }}
            />
            <Tooltip content={<ChartTooltipContent />} />
            <Legend wrapperStyle={{ paddingTop: 15 }} />
            <Bar 
              dataKey="Air Quality" 
              fill={chartColors.airQuality} 
              radius={[4, 4, 0, 0]}
              maxBarSize={60}
              animationDuration={1000}
            />
            <Bar 
              dataKey="Quietness" 
              fill={chartColors.quietness} 
              radius={[4, 4, 0, 0]}
              maxBarSize={60}
              animationDuration={1000} 
              animationBegin={200}
            />
            <Bar 
              dataKey="Transportation" 
              fill={chartColors.transportation} 
              radius={[4, 4, 0, 0]}
              maxBarSize={60}
              animationDuration={1000}
              animationBegin={400}
            />
            <Bar 
              dataKey="Diversity" 
              fill={chartColors.diversity} 
              radius={[4, 4, 0, 0]}
              maxBarSize={60}
              animationDuration={1000}
              animationBegin={600}
            />
            {chartData.length > 3 && (
              <Brush 
                dataKey="name" 
                height={20} 
                stroke={chartColors.airQuality}
                travellerWidth={10}
                startIndex={0}
                endIndex={Math.min(2, chartData.length - 1)}
              />
            )}
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default FactorComparisonChart;
