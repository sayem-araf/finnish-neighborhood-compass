
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";
import { mockNeighborhoods } from "@/data/mockNeighborhoods";

const LanguageDistribution = () => {
  // Calculate average language distribution across all neighborhoods
  const totalNeighborhoods = mockNeighborhoods.length;
  
  const avgFinnish = Math.round(
    mockNeighborhoods.reduce((sum, n) => sum + n.factors.languages.finnish, 0) / totalNeighborhoods
  );
  
  const avgSwedish = Math.round(
    mockNeighborhoods.reduce((sum, n) => sum + n.factors.languages.swedish, 0) / totalNeighborhoods
  );
  
  const avgEnglish = Math.round(
    mockNeighborhoods.reduce((sum, n) => sum + n.factors.languages.english, 0) / totalNeighborhoods
  );
  
  const avgOther = Math.round(
    mockNeighborhoods.reduce((sum, n) => sum + n.factors.languages.other, 0) / totalNeighborhoods
  );

  const data = [
    { name: "Finnish", value: avgFinnish },
    { name: "Swedish", value: avgSwedish },
    { name: "English", value: avgEnglish },
    { name: "Other", value: avgOther },
  ];

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Average Language Distribution</CardTitle>
      </CardHeader>
      <CardContent className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
              label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip formatter={(value) => `${value}%`} />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default LanguageDistribution;
