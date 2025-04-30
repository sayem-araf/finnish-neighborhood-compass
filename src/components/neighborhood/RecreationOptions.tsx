
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface RecreationOptionsProps {
  options: string[];
}

const RecreationOptions: React.FC<RecreationOptionsProps> = ({ options }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recreation Options</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {options.map((option, idx) => (
            <div
              key={idx}
              className="px-3 py-1 bg-finland-light-blue text-finland-blue rounded-full text-sm"
            >
              {option}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default RecreationOptions;
