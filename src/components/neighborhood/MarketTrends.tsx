
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const MarketTrends: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Market Trends</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-sm">Price change (1 yr)</span>
              <span className="text-sm font-medium text-green-600">+2.4%</span>
            </div>
            <Progress value={60} className="h-2" />
          </div>
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-sm">Avg. time on market</span>
              <span className="text-sm font-medium">45 days</span>
            </div>
            <Progress value={45} className="h-2" />
          </div>
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-sm">Demand level</span>
              <span className="text-sm font-medium text-amber-600">Medium</span>
            </div>
            <Progress value={65} className="h-2" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MarketTrends;
