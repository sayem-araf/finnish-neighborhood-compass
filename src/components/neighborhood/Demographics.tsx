import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

type DemographicsProps = {
  data: {
    incomeLevel: {
      score: number;
      description: string;
    };
    employmentStats: {
      employmentRate: number;
      averageSalary: number;
      majorIndustries: {
        name: string;
        percentage: number;
      }[];
    };
    languages: {
      finnish: number;
      swedish: number;
      english: number;
      other: number;
    };
  };
};

const Demographics: React.FC<DemographicsProps> = ({ data }) => {
  const getIncomeRange = (score: number) => {
    if (score >= 90) return "€75,000 - €120,000";
    if (score >= 80) return "€65,000 - €90,000";
    if (score >= 70) return "€55,000 - €75,000";
    if (score >= 60) return "€45,000 - €65,000";
    if (score >= 50) return "€35,000 - €50,000";
    if (score >= 40) return "€30,000 - €40,000";
    return "€25,000 - €35,000";
  };

  const getColorClass = (score: number) => {
    if (score >= 80) return "bg-green-500";
    if (score >= 60) return "bg-lime-500";
    if (score >= 40) return "bg-yellow-500";
    return "bg-red-500";
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center space-x-2">
        <CardTitle>Demographics</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {/* Income Level */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <h3 className="font-medium">Income Level</h3>
            </div>
            <div className="flex justify-between mb-1">
              <span className="text-sm text-gray-600">Average Household Income</span>
              <span className="text-sm font-semibold">{getIncomeRange(data.incomeLevel.score)}</span>
            </div>
            <div className="h-2 w-full bg-gray-200 rounded-full">
              <div
                className={`h-2 rounded-full ${getColorClass(data.incomeLevel.score)}`}
                style={{ width: `${data.incomeLevel.score}%` }}
              ></div>
            </div>
            <p className="text-sm text-gray-600 mt-1">{data.incomeLevel.description}</p>
          </div>

          {/* Employment */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <h3 className="font-medium">Employment</h3>
            </div>
            <div className="space-y-2">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm text-gray-600">Employment Rate</span>
                  <span className="text-sm font-semibold">{data.employmentStats.employmentRate}%</span>
                </div>
                <Progress value={data.employmentStats.employmentRate} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm text-gray-600">Average Salary</span>
                  <span className="text-sm font-semibold">€{data.employmentStats.averageSalary.toLocaleString()}</span>
                </div>
              </div>
              <div className="mt-2">
                <h4 className="text-sm font-medium mb-1">Major Industries</h4>
                <div className="space-y-1">
                  {data.employmentStats.majorIndustries.map((industry, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">{industry.name}</span>
                      <span className="text-sm font-medium">{industry.percentage}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Languages */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <h3 className="font-medium">Languages Spoken</h3>
            </div>
            <div className="space-y-1">
              <p className="text-sm text-gray-600">
                Finnish: {data.languages.finnish}% of residents
              </p>
              <p className="text-sm text-gray-600">
                Swedish: {data.languages.swedish}% of residents
              </p>
              <p className="text-sm text-gray-600">
                English: {data.languages.english}% of residents
              </p>
              <p className="text-sm text-gray-600">
                Other languages: {data.languages.other}% of residents
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Demographics; 