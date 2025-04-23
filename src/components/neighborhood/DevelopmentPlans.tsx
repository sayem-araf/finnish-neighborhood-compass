import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DevelopmentPlan } from "@/types/neighborhood";
import { Building2 } from "lucide-react";

// helper function to get color based on status
const getStatusColor = (status: "planned" | "in-progress" | "completed") => {
  switch (status) {
    case "planned":
      return "text-blue-500";
    case "in-progress":
      return "text-yellow-500";
    case "completed":
      return "text-green-500";
    default:
      return "text-gray-500";
  }
};

// component props type
type DevelopmentPlansProps = {
  plans: DevelopmentPlan[];
};

// main component
export const DevelopmentPlans: React.FC<DevelopmentPlansProps> = ({ plans }) => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center space-x-2">
        <Building2 className="w-6 h-6" />
        <CardTitle>Development Plans</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {plans.map((plan, index) => (
            <div key={index} className="border-b pb-4 last:border-b-0 last:pb-0">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold">{plan.title}</h3>
                <span className={`text-sm ${getStatusColor(plan.status)}`}>
                  {plan.status.charAt(0).toUpperCase() + plan.status.slice(1)}
                </span>
              </div>
              <p className="text-sm text-gray-600 mb-2">{plan.description}</p>
              <p className="text-sm text-gray-500 mb-2">Timeline: {plan.timeline}</p>
              <div className="mt-2">
                <h4 className="text-sm font-medium mb-1">Impact:</h4>
                <ul className="list-disc list-inside text-sm text-gray-600">
                  {plan.impact.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default DevelopmentPlans; 