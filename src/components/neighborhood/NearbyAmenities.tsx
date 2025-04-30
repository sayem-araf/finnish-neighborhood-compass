
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { School, ShoppingBag, Coffee } from "lucide-react";

const NearbyAmenities: React.FC = () => {
  const getNearbyAmenities = () => {
    return [
      { name: "Schools", count: Math.floor(Math.random() * 5) + 1, icon: <School className="h-4 w-4" /> },
      { name: "Shopping Centers", count: Math.floor(Math.random() * 3) + 1, icon: <ShoppingBag className="h-4 w-4" /> },
      { name: "Cafés", count: Math.floor(Math.random() * 6) + 2, icon: <Coffee className="h-4 w-4" /> }
    ];
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Nearby Amenities</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {getNearbyAmenities().map((amenity, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                {amenity.icon}
                <span>{amenity.name}</span>
              </div>
              <span className="text-sm font-medium">{amenity.count}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default NearbyAmenities;
