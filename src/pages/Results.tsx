
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Layout from "../components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { UserPreferences, Neighborhood } from "../types/neighborhood";
import { getNeighborhoodsByCity } from "../data/mockNeighborhoods";
import { matchNeighborhoodsToPreferences } from "../utils/neighborhoodMatcher";
import { MapPin, Sparkles } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

type MatchedNeighborhood = {
  neighborhood: Neighborhood;
  score: number;
  matchReasons: string[];
};

const Results = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [preferences, setPreferences] = useState<UserPreferences | null>(null);
  const [results, setResults] = useState<MatchedNeighborhood[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Retrieve preferences from session storage
    const storedPrefs = sessionStorage.getItem("userPreferences");
    if (!storedPrefs) {
      toast({
        title: "No preferences found",
        description: "Please complete the questionnaire first.",
        variant: "destructive",
      });
      navigate("/finder");
      return;
    }

    try {
      const parsedPrefs = JSON.parse(storedPrefs) as UserPreferences;
      setPreferences(parsedPrefs);

      // Simulate loading to show the process
      setIsLoading(true);
      setTimeout(() => {
        // Get neighborhoods in the selected city
        const cityNeighborhoods = getNeighborhoodsByCity(parsedPrefs.city);
        
        // Match neighborhoods to preferences
        const matchedResults = matchNeighborhoodsToPreferences(
          cityNeighborhoods,
          parsedPrefs
        );
        
        setResults(matchedResults);
        setIsLoading(false);
      }, 1500);
    } catch (error) {
      console.error("Error parsing preferences:", error);
      toast({
        title: "Error loading preferences",
        description: "There was a problem loading your preferences.",
        variant: "destructive",
      });
      navigate("/finder");
    }
  }, [navigate, toast]);

  if (isLoading) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Finding neighborhoods that match your preferences...</h2>
            <div className="max-w-md mx-auto">
              <Progress value={70} className="h-2" />
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  if (!preferences || results.length === 0) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">No neighborhoods found</h2>
            <p className="text-muted-foreground mb-8">
              We couldn't find any neighborhoods in {preferences?.city || "the selected city"} that match your preferences.
            </p>
            <Link to="/finder">
              <Button variant="default">Try Different Preferences</Button>
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Your Neighborhood Matches in {preferences.city}</h1>
          <p className="text-muted-foreground">
            Based on your preferences, we found {results.length} neighborhoods that could be a good fit for you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {results.map(({ neighborhood, score, matchReasons }) => (
            <Card key={neighborhood.id} className="overflow-hidden h-full flex flex-col">
              <div 
                className="h-48 bg-cover bg-center" 
                style={{ 
                  backgroundImage: neighborhood.imageUrl 
                    ? `url(${neighborhood.imageUrl})` 
                    : "url(https://images.unsplash.com/photo-1526778548025-fa2f459cd5ce)" 
                }}
              >
                <div className="bg-black/50 text-white p-3 inline-block rounded-br-lg">
                  <div className="flex items-center gap-1">
                    <Sparkles size={16} className="text-yellow-400" />
                    <span className="font-bold">{score}% Match</span>
                  </div>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{neighborhood.name}</CardTitle>
                <CardDescription className="flex items-center gap-1">
                  <MapPin size={14} /> {neighborhood.city}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                  {neighborhood.description}
                </p>
                <div>
                  <h4 className="text-sm font-semibold mb-2">Why it matches your preferences:</h4>
                  <ul className="text-sm space-y-1">
                    {matchReasons.slice(0, 3).map((reason, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-finland-blue mt-1">•</span>
                        <span>{reason}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
              <div className="p-4 pt-0 mt-auto">
                <Link to={`/neighborhood/${neighborhood.id}`}>
                  <Button variant="outline" className="w-full">View Details</Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link to="/finder">
            <Button variant="outline">Update Your Preferences</Button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Results;
