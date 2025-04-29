
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Layout from "../components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Checkbox } from "@/components/ui/checkbox";
import { UserPreferences, Neighborhood } from "../types/neighborhood";
import { getNeighborhoodsByCity } from "../data/mockNeighborhoods";
import { matchNeighborhoodsToPreferences } from "../utils/neighborhoodMatcher";
import { MapPin, Sparkles, Compare } from "lucide-react";
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
  const [selectedNeighborhoods, setSelectedNeighborhoods] = useState<string[]>([]);

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

  const toggleNeighborhoodSelection = (neighborhoodId: string) => {
    setSelectedNeighborhoods(prev => {
      if (prev.includes(neighborhoodId)) {
        return prev.filter(id => id !== neighborhoodId);
      } else {
        if (prev.length >= 5) {
          toast({
            title: "Selection limit reached",
            description: "You can compare up to 5 neighborhoods at once.",
          });
          return prev;
        }
        return [...prev, neighborhoodId];
      }
    });
  };

  const handleCompareClick = () => {
    if (selectedNeighborhoods.length < 2) {
      toast({
        title: "More selections needed",
        description: "Please select at least 2 neighborhoods to compare.",
      });
      return;
    }
    
    navigate(`/comparison?ids=${selectedNeighborhoods.join(',')}`);
  };

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
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Your Neighborhood Matches in {preferences.city}</h1>
            <p className="text-muted-foreground">
              Based on your preferences, we found {results.length} neighborhoods that could be a good fit for you.
            </p>
          </div>
          
          {selectedNeighborhoods.length > 0 && (
            <div className="mt-4 md:mt-0">
              <Button 
                onClick={handleCompareClick}
                className="flex items-center gap-2"
                disabled={selectedNeighborhoods.length < 2}
              >
                <Compare size={16} />
                Compare Selected ({selectedNeighborhoods.length})
              </Button>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {results.map(({ neighborhood, score, matchReasons }) => (
            <Card key={neighborhood.id} className="overflow-hidden h-full flex flex-col">
              <div 
                className="h-48 bg-cover bg-center relative" 
                style={{ 
                  backgroundImage: neighborhood.imageUrl 
                    ? `url(${neighborhood.imageUrl})` 
                    : "url(https://images.unsplash.com/photo-1640078530772-b1e297ac3178?q=80&w=2748&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)" 
                }}
              >
                <div className="bg-black/50 text-white p-3 inline-block rounded-br-lg">
                  <div className="flex items-center gap-1">
                    <Sparkles size={16} className="text-yellow-400" />
                    <span className="font-bold">{score}% Match</span>
                  </div>
                </div>
                <div className="absolute top-2 right-2">
                  <div className="bg-white rounded-md p-0.5">
                    <Checkbox 
                      id={`compare-${neighborhood.id}`}
                      checked={selectedNeighborhoods.includes(neighborhood.id)}
                      onCheckedChange={() => toggleNeighborhoodSelection(neighborhood.id)}
                    />
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
