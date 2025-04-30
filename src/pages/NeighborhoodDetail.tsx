
import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Layout from "../components/layout/Layout";
import { Neighborhood } from "../types/neighborhood";
import { getNeighborhoodById } from "../data/mockNeighborhoods";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { MapPin, ExternalLink } from "lucide-react";
import TrafficCongestion from "@/components/neighborhood/TrafficCongestion";
import Demographics from "@/components/neighborhood/Demographics";
import SentimentAnalysis from "@/components/neighborhood/SentimentAnalysis";
import Reviews from "@/components/neighborhood/Reviews";
import PropertyListings from "@/components/neighborhood/PropertyListings";
import MarketTrends from "@/components/neighborhood/MarketTrends";
import RecreationOptions from "@/components/neighborhood/RecreationOptions";
import NeighborhoodMap from "@/components/neighborhood/NeighborhoodMap";
import NearbyAmenities from "@/components/neighborhood/NearbyAmenities";
import EnvironmentalFactors from "@/components/neighborhood/EnvironmentalFactors";
import { Progress } from "@/components/ui/progress";

const NeighborhoodDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [neighborhood, setNeighborhood] = useState<Neighborhood | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!id) {
      toast({
        title: "Neighborhood not found",
        description: "The requested neighborhood could not be found.",
        variant: "destructive",
      });
      navigate("/results");
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      const foundNeighborhood = getNeighborhoodById(id);
      if (foundNeighborhood) {
        setNeighborhood(foundNeighborhood);
      } else {
        toast({
          title: "Neighborhood not found",
          description: "The requested neighborhood could not be found.",
          variant: "destructive",
        });
        navigate("/results");
      }
      setIsLoading(false);
    }, 800);
  }, [id, navigate, toast]);

  const mockSentimentAnalysis = {
    overall: 0.65,
    aspects: {
      safety: 0.8,
      noise: -0.2,
      transportation: 0.7,
      amenities: 0.5,
      cleanliness: 0.3,
      affordability: -0.4,
      community: 0.6
    },
    commonPhrases: {
      positive: ["Safe area", "Great transit", "Friendly neighbors", "Good schools", "Many parks"],
      negative: ["Expensive rent", "Weekend noise", "Limited parking", "Few restaurants"]
    },
    recentTrend: "improving" as const
  };

  const mockReviews = [
    {
      id: "r1",
      author: "Mika L.",
      date: "February 2025",
      rating: 4,
      content: "I've lived here for 3 years and really enjoy the neighborhood. The transportation options are excellent and there are many green spaces nearby. However, housing costs are quite high.",
      tags: ["transportation", "green spaces", "expensive"]
    },
    {
      id: "r2",
      author: "Johanna K.",
      date: "January 2025",
      rating: 5,
      content: "Great community feel with friendly neighbors. Very safe area for families and the schools are excellent. Shopping options have improved recently.",
      tags: ["safe", "family-friendly", "good schools"]
    },
    {
      id: "r3",
      author: "Tomas H.",
      date: "December 2024",
      rating: 3,
      content: "The location is excellent for transportation links, but the nightlife can be noisy on weekends. Apartment prices keep rising which is concerning.",
      tags: ["good location", "noisy", "expensive"]
    }
  ];

  if (isLoading) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16 flex justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Loading neighborhood information...</h2>
            <div className="w-48">
              <Progress value={60} className="h-2" />
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  if (!neighborhood) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Neighborhood not found</h2>
            <p className="text-muted-foreground mb-8">
              We couldn't find the neighborhood you're looking for.
            </p>
            <Link to="/results">
              <Button>Back to Results</Button>
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div 
        className="h-64 bg-cover bg-center relative"
        style={{ 
          backgroundImage: neighborhood?.imageUrl 
            ? `url(${neighborhood.imageUrl})` 
            : "url(https://images.unsplash.com/photo-1526778548025-fa2f459cd5ce)"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        <div className="container mx-auto px-4 h-full flex flex-col justify-end pb-6 relative z-10">
          <div className="flex items-center text-white mb-2">
            <MapPin size={16} className="mr-1" />
            <span>{neighborhood?.city}, Finland</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            {neighborhood?.name}
          </h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>About {neighborhood?.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-6">{neighborhood?.description}</p>
                <h3 className="font-semibold text-lg mb-4">Environmental Factors</h3>
                <EnvironmentalFactors factors={neighborhood.factors} />
              </CardContent>
            </Card>

            <div className="mt-6">
              <Demographics
                data={{
                  incomeLevel: neighborhood.factors.incomeLevel,
                  employmentStats: neighborhood.employmentStats,
                  languages: neighborhood.factors.languages
                }}
              />
            </div>
            
            <div className="mt-6">
              <SentimentAnalysis sentimentData={mockSentimentAnalysis} />
            </div>
            
            <div className="mt-6">
              <Reviews reviews={mockReviews} />
            </div>
            
            <PropertyListings 
              neighborhoodName={neighborhood.name} 
              city={neighborhood.city} 
            />
          </div>

          <div className="space-y-6">
            <MarketTrends />

            {neighborhood?.factors.trafficCongestion && (
              <TrafficCongestion trafficData={neighborhood.factors.trafficCongestion} />
            )}

            <RecreationOptions options={neighborhood.factors.recreationOptions} />
            
            <NeighborhoodMap name={neighborhood.name} city={neighborhood.city} />
            
            <NearbyAmenities />
          </div>
        </div>

        <div className="mt-8 flex justify-between">
          <Link to="/results">
            <Button variant="outline">Back to Results</Button>
          </Link>
          <div className="flex gap-2">
            <a
              href={`https://www.oikotie.fi/en/search/?locations=[{"id":"${neighborhood?.city}"}]`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline">View Oikotie Listings</Button>
            </a>
            <a
              href={`https://www.openstreetmap.org/search?query=${encodeURIComponent(
                neighborhood?.name + " " + neighborhood?.city + " Finland"
              )}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button>View on Map</Button>
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NeighborhoodDetail;
