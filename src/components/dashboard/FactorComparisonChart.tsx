
import React from "react";
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
} from "recharts";
import { mockNeighborhoods } from "@/data/mockNeighborhoods";

const FactorComparisonChart = () => {
  // Prepare data for the chart - focusing on Helsinki neighborhoods for this example
  const helsinkiNeighborhoods = mockNeighborhoods.filter(
    (n) => n.city === "Helsinki"
  );

  const chartData = helsinkiNeighborhoods.map((neighborhood) => ({
    name: neighborhood.name,
    "Air Quality": neighborhood.factors.airQuality.score,
    "Quietness": neighborhood.factors.noiseLevel.score,
    "Transportation": neighborhood.factors.transportation.score,
    "Diversity": neighborhood.factors.diversity.score,
  }));

  return (
    <Card className="col-span-1 md:col-span-2">
      <CardHeader>
        <CardTitle>Neighborhood Factor Comparison - Helsinki</CardTitle>
      </CardHeader>
      <CardContent className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={chartData}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis domain={[0, 100]} />
            <Tooltip />
            <Legend />
            <Bar dataKey="Air Quality" fill="#8884d8" />
            <Bar dataKey="Quietness" fill="#82ca9d" />
            <Bar dataKey="Transportation" fill="#ffc658" />
            <Bar dataKey="Diversity" fill="#ff8042" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default FactorComparisonChart;
