
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

export type Review = {
  id: string;
  author: string;
  date: string;
  rating: number; // 1-5 stars
  content: string;
  tags: string[]; // key aspects mentioned - like "safety", "transportation", etc.
};

export type SentimentAnalysis = {
  overall: number; // -1 to 1 where -1 is very negative, 0 is neutral, 1 is very positive
  aspects: {
    [key: string]: number; // e.g., "safety": 0.8, "noise": -0.2
  };
  commonPhrases: {
    positive: string[];
    negative: string[];
  };
  recentTrend: "improving" | "declining" | "stable";
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
  reviews?: Review[];
  sentimentAnalysis?: SentimentAnalysis;
};

export type UserPreferences = {
  environment: "urban" | "nature" | "neutral";
  quietness: "yes" | "no" | "neutral";
  recreation: "indoors" | "outdoors" | "both";
  city: string;
};
