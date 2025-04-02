
import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Layout from "../components/layout/Layout";
import { Neighborhood } from "../types/neighborhood";
import { getNeighborhoodById } from "../data/mockNeighborhoods";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/components/ui/use-toast";
import { MapPin, AirVent, CloudSun, Train, Users, TreeDeciduous } from "lucide-react";

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

    // Simulate loading
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

  const factorIcons = {
    airQuality: <AirVent className="h-5 w-5" />,
    noiseLevel: <CloudSun className="h-5 w-5" />,
    transportation: <Train className="h-5 w-5" />,
    diversity: <Users className="h-5 w-5" />,
    wildlife: <TreeDeciduous className="h-5 w-5" />,
    incomeLevel: <MapPin className="h-5 w-5" />,
  };

  const getColorClass = (score: number) => {
    if (score >= 80) return "bg-green-500";
    if (score >= 60) return "bg-lime-500";
    if (score >= 40) return "bg-yellow-500";
    return "bg-red-500";
  };

  return (
    <Layout>
      <div 
        className="h-64 bg-cover bg-center relative"
        style={{ 
          backgroundImage: neighborhood.imageUrl 
            ? `url(${neighborhood.imageUrl})` 
            : "url(https://images.unsplash.com/photo-1526778548025-fa2f459cd5ce)"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        <div className="container mx-auto px-4 h-full flex flex-col justify-end pb-6 relative z-10">
          <div className="flex items-center text-white mb-2">
            <MapPin size={16} className="mr-1" />
            <span>{neighborhood.city}, Finland</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            {neighborhood.name}
          </h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>About {neighborhood.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-6">{neighborhood.description}</p>
                <h3 className="font-semibold text-lg mb-4">Environmental Factors</h3>
                <div className="space-y-5">
                  {Object.entries(neighborhood.factors).map(([key, factor]) => {
                    if (key === "languages" || key === "recreationOptions") return null;
                    
                    // Type guard to ensure we're dealing with the correct factor type
                    if (Array.isArray(factor) || !('name' in factor)) return null;
                    
                    const icon = factorIcons[key as keyof typeof factorIcons];
                    return (
                      <div key={key}>
                        <div className="flex justify-between mb-1 items-center">
                          <div className="flex items-center gap-2">
                            {icon}
                            <span className="font-medium">{factor.name}</span>
                          </div>
                          <span className="text-sm">{factor.score}/100</span>
                        </div>
                        <div className="h-2 w-full bg-gray-200 rounded-full">
                          <div
                            className={`h-2 rounded-full ${getColorClass(factor.score)}`}
                            style={{ width: `${factor.score}%` }}
                          ></div>
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">
                          {factor.description}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Languages Spoken</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>Finnish</span>
                      <span>{neighborhood.factors.languages.finnish}%</span>
                    </div>
                    <Progress
                      value={neighborhood.factors.languages.finnish}
                      className="h-2"
                    />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>Swedish</span>
                      <span>{neighborhood.factors.languages.swedish}%</span>
                    </div>
                    <Progress
                      value={neighborhood.factors.languages.swedish}
                      className="h-2"
                    />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>English</span>
                      <span>{neighborhood.factors.languages.english}%</span>
                    </div>
                    <Progress
                      value={neighborhood.factors.languages.english}
                      className="h-2"
                    />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>Other</span>
                      <span>{neighborhood.factors.languages.other}%</span>
                    </div>
                    <Progress
                      value={neighborhood.factors.languages.other}
                      className="h-2"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Recreation Options</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {neighborhood.factors.recreationOptions.map((option, idx) => (
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
          </div>
        </div>

        <div className="mt-8 flex justify-between">
          <Link to="/results">
            <Button variant="outline">Back to Results</Button>
          </Link>
          <a
            href={`https://www.google.com/maps/search/${encodeURIComponent(
              neighborhood.name + " " + neighborhood.city + " Finland"
            )}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button>View on Map</Button>
          </a>
        </div>
      </div>
    </Layout>
  );
};

export default NeighborhoodDetail;
