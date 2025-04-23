export type NeighborhoodFactor = {
  name: string;
  score: number; // 0-100
  unit?: string; // add unit field for measurements like µg/m³
  description: string;
};

export type EmploymentStats = {
  employmentRate: number;
  averageSalary: number;
  majorIndustries: {
    name: string;
    percentage: number;
  }[];
};

export type TrafficCongestion = {
  level: "low" | "moderate" | "high";
  peakHours: {
    day: "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday" | "sunday";
    timeRange: string;
    congestionLevel: "low" | "moderate" | "high";
  }[];
  description: string;
};

export type DevelopmentPlan = {
  title: string;
  description: string;
  timeline: string;
  status: "planned" | "in-progress" | "completed";
  impact: string[];
};

export type Neighborhood = {
  id: string;
  name: string;
  city: string;
  imageUrl?: string;
  description: string;
  employmentStats: EmploymentStats;
  factors: {
    airQuality: NeighborhoodFactor;
    noiseLevel: NeighborhoodFactor;
    transportation: NeighborhoodFactor;
    diversity: NeighborhoodFactor;
    wildlife: NeighborhoodFactor;
    incomeLevel: NeighborhoodFactor;
    languages: {
      finnish: number; // Percentage
      swedish: number;
      english: number;
      other: number;
    };
    recreationOptions: string[];
    trafficCongestion: TrafficCongestion;
  };
  developmentPlans: DevelopmentPlan[];
};

export type UserPreferences = {
  environment: "urban" | "nature" | "neutral";
  quietness: "yes" | "no" | "neutral";
  recreation: "indoors" | "outdoors" | "both";
  city: string;
};
