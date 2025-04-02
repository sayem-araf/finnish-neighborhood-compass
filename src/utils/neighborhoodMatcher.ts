
import { Neighborhood, UserPreferences } from "../types/neighborhood";

type MatchScores = {
  neighborhood: Neighborhood;
  score: number;
  matchReasons: string[];
};

export const matchNeighborhoodsToPreferences = (
  neighborhoods: Neighborhood[],
  preferences: UserPreferences
): MatchScores[] => {
  return neighborhoods.map((neighborhood) => {
    let score = 0;
    const matchReasons: string[] = [];

    // Environment preference
    if (preferences.environment === "urban") {
      // Urban preference = lower wildlife score, higher transportation
      score += (100 - neighborhood.factors.wildlife.score) * 0.15;
      score += neighborhood.factors.transportation.score * 0.2;
      
      if (neighborhood.factors.transportation.score > 75) {
        matchReasons.push("Great public transportation options");
      }
      if (neighborhood.factors.wildlife.score < 40) {
        matchReasons.push("Urban environment");
      }
    } else if (preferences.environment === "nature") {
      // Nature preference = higher wildlife score, higher air quality
      score += neighborhood.factors.wildlife.score * 0.25;
      score += neighborhood.factors.airQuality.score * 0.2;
      
      if (neighborhood.factors.wildlife.score > 60) {
        matchReasons.push("Abundant natural surroundings");
      }
      if (neighborhood.factors.airQuality.score > 80) {
        matchReasons.push("Excellent air quality");
      }
    } else {
      // Neutral = balance of all factors
      score += neighborhood.factors.wildlife.score * 0.1;
      score += neighborhood.factors.transportation.score * 0.1;
      score += neighborhood.factors.airQuality.score * 0.1;
      
      if (neighborhood.factors.wildlife.score > 40 && neighborhood.factors.transportation.score > 50) {
        matchReasons.push("Good balance between nature and urban amenities");
      }
    }

    // Quietness preference
    if (preferences.quietness === "yes") {
      score += neighborhood.factors.noiseLevel.score * 0.3;
      
      if (neighborhood.factors.noiseLevel.score > 70) {
        matchReasons.push("Peaceful and quiet surroundings");
      }
    } else if (preferences.quietness === "no") {
      score += (100 - neighborhood.factors.noiseLevel.score) * 0.15;
      
      if (neighborhood.factors.noiseLevel.score < 50) {
        matchReasons.push("Vibrant and lively atmosphere");
      }
    }

    // Recreation preference
    if (preferences.recreation === "indoors") {
      // Check if neighborhood has indoor activities
      const indoorActivities = ["Gyms", "Theaters", "Museums", "Shopping", "Cafés", "Cultural center"];
      const matching = neighborhood.factors.recreationOptions.filter(option => 
        indoorActivities.includes(option)
      ).length;
      
      score += (matching / indoorActivities.length) * 100 * 0.2;
      
      if (matching >= 2) {
        matchReasons.push("Good indoor recreation options");
      }
    } else if (preferences.recreation === "outdoors") {
      // Check if neighborhood has outdoor activities
      const outdoorActivities = ["Hiking", "Parks", "Swimming", "Cycling", "Walking trails", "Beaches", "Winter sports", "Fishing"];
      const matching = neighborhood.factors.recreationOptions.filter(option => 
        outdoorActivities.includes(option)
      ).length;
      
      score += (matching / outdoorActivities.length) * 100 * 0.2;
      
      if (matching >= 2) {
        matchReasons.push("Excellent outdoor activities nearby");
      }
    } else {
      // Both - check for variety
      score += (neighborhood.factors.recreationOptions.length / 8) * 100 * 0.2;
      
      if (neighborhood.factors.recreationOptions.length >= 5) {
        matchReasons.push("Diverse recreational activities");
      }
    }

    // Ensure we have at least one reason
    if (matchReasons.length === 0) {
      if (score > 60) {
        matchReasons.push("Generally good match for your preferences");
      } else {
        matchReasons.push("Limited match but worth considering");
      }
    }

    return {
      neighborhood,
      score: Math.min(100, Math.round(score)), // Cap at 100 and round
      matchReasons,
    };
  }).sort((a, b) => b.score - a.score); // Sort by descending score
};
