
export type NeighborhoodFactor = {
  name: string;
  score: number; // 0-100
  description: string;
};

export type Neighborhood = {
  id: string;
  name: string;
  city: string;
  imageUrl?: string;
  description: string;
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
  };
};

export type UserPreferences = {
  environment: "urban" | "nature" | "neutral";
  quietness: "yes" | "no" | "neutral";
  recreation: "indoors" | "outdoors" | "both";
  city: string;
};
