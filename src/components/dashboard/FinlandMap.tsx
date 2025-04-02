
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { mockNeighborhoods } from "@/data/mockNeighborhoods";
import { MapPin } from "lucide-react";

const FinlandMap = () => {
  // A simplified map representation - in a real app, you would use a proper map library
  return (
    <Card>
      <CardHeader>
        <CardTitle>Neighborhood Locations</CardTitle>
      </CardHeader>
      <CardContent className="h-[300px]">
        <div className="relative h-full w-full bg-finland-snow border border-border rounded-md overflow-hidden">
          {/* Simplified Finland outline */}
          <svg
            viewBox="0 0 300 500"
            className="absolute inset-0 w-full h-full opacity-30"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M150,20 C180,50 220,80 250,120 C280,160 290,200 290,240 C290,280 270,320 240,380 C210,440 190,460 150,480 C110,460 90,440 60,380 C30,320 10,280 10,240 C10,200 20,160 50,120 C80,80 120,50 150,20"
              fill="none"
              stroke="#888"
              strokeWidth="2"
            />
          </svg>
          
          {/* City markers */}
          <div className="absolute top-[45%] left-[45%] flex flex-col items-center">
            <div className="bg-finland-blue p-1 rounded-full">
              <MapPin size={14} className="text-white" />
            </div>
            <span className="text-xs mt-1 font-medium">Helsinki</span>
          </div>
          
          <div className="absolute top-[35%] left-[50%] flex flex-col items-center">
            <div className="bg-finland-blue p-1 rounded-full">
              <MapPin size={14} className="text-white" />
            </div>
            <span className="text-xs mt-1 font-medium">Espoo</span>
          </div>
          
          <div className="absolute top-[30%] left-[35%] flex flex-col items-center">
            <div className="bg-finland-blue p-1 rounded-full">
              <MapPin size={14} className="text-white" />
            </div>
            <span className="text-xs mt-1 font-medium">Tampere</span>
          </div>
          
          <div className="absolute bottom-4 right-4 text-xs text-gray-500">
            *Simplified representation
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default FinlandMap;
