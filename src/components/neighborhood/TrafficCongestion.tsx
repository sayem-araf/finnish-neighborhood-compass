import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrafficCongestion as TrafficCongestionType } from "@/types/neighborhood";
// helper function to get color based on congestion level
const getCongestionColor = (level: "low" | "moderate" | "high") => {
  switch (level) {
    case "low":
      return "text-green-500";
    case "moderate":
      return "text-yellow-500";
    case "high":
      return "text-red-500";
    default:
      return "text-gray-500";
  }
};

// helper function to format time range
const formatTimeRange = (timeRange: string) => {
  return timeRange.replace("-", " - ");
};

// component props type
type TrafficCongestionProps = {
  trafficData: TrafficCongestionType;
};

const TrafficCongestion: React.FC<TrafficCongestionProps> = ({ trafficData }) => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center space-x-2">
        <CardTitle>Traffic Congestion</CardTitle>
      </CardHeader>
      <CardContent>
        {/* overall congestion level */}
        <div className="mb-4">
          <p className="text-sm text-gray-600">Overall Traffic Level</p>
          <p className={`font-semibold ${getCongestionColor(trafficData.level)}`}>
            {trafficData.level.charAt(0).toUpperCase() + trafficData.level.slice(1)}
          </p>
        </div>

        {/* description */}
        <p className="text-sm text-gray-600 mb-4">{trafficData.description}</p>

        {/* peak hours */}
        <div>
          <h4 className="font-semibold mb-2">Peak Hours</h4>
          <div className="space-y-2">
            {trafficData.peakHours.map((peak, index) => (
              <div 
                key={index} 
                className="flex items-center justify-between p-2 bg-gray-50 rounded"
              >
                <div>
                  <p className="capitalize font-medium">{peak.day}</p>
                  <p className="text-sm text-gray-600">
                    {formatTimeRange(peak.timeRange)}
                  </p>
                </div>
                <span className={`px-2 py-1 rounded text-sm ${getCongestionColor(peak.congestionLevel)}`}>
                  {peak.congestionLevel}
                </span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TrafficCongestion; 