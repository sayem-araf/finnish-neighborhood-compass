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
import { 
  MapPin, 
  AirVent, 
  CloudSun, 
  Train, 
  Users, 
  TreeDeciduous, 
  Bird,
  Fish,
  Rabbit,
  Euro
} from "lucide-react";

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
    incomeLevel: <Euro className="h-5 w-5" />,
  };

  const getColorClass = (score: number) => {
    if (score >= 80) return "bg-green-500";
    if (score >= 60) return "bg-lime-500";
    if (score >= 40) return "bg-yellow-500";
    return "bg-red-500";
  };

  const getIncomeRange = (score: number) => {
    if (score >= 90) return "€75,000 - €120,000";
    if (score >= 80) return "€65,000 - €90,000";
    if (score >= 70) return "€55,000 - €75,000";
    if (score >= 60) return "€45,000 - €65,000";
    if (score >= 50) return "€35,000 - €50,000";
    if (score >= 40) return "€30,000 - €40,000";
    return "€25,000 - €35,000";
  };

  const getWildlifeSpecifics = (score: number) => {
    const allSpecies = {
      birds: ["Common Starling", "Eurasian Blue Tit", "Great Tit", "European Robin"],
      mammals: ["Red Squirrel", "European Hedgehog", "Arctic Fox", "Brown Bear"],
      plants: ["Silver Birch", "Norway Spruce", "Scots Pine", "Arctic Bramble"],
      parks: ["Central Park", "Lakeside Park", "Forest Reserve", "Botanical Gardens"]
    };
    
    const count = Math.floor(score / 20) + 1;
    
    return {
      birds: allSpecies.birds.slice(0, count),
      mammals: allSpecies.mammals.slice(0, count),
      plants: allSpecies.plants.slice(0, count),
      parks: allSpecies.parks.slice(0, Math.min(count, allSpecies.parks.length))
    };
  };

  const wildlifeData = neighborhood ? getWildlifeSpecifics(neighborhood.factors.wildlife.score) : null;

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
                    
                    if (Array.isArray(factor) || !('name' in factor)) return null;
                    
                    const icon = factorIcons[key as keyof typeof factorIcons];
                    
                    if (key === "incomeLevel") {
                      return (
                        <div key={key}>
                          <div className="flex justify-between mb-1 items-center">
                            <div className="flex items-center gap-2">
                              {icon}
                              <span className="font-medium">{factor.name}</span>
                            </div>
                            <span className="text-sm font-semibold">{getIncomeRange(factor.score)}</span>
                          </div>
                          <div className="h-2 w-full bg-gray-200 rounded-full">
                            <div
                              className={`h-2 rounded-full ${getColorClass(factor.score)}`}
                              style={{ width: `${factor.score}%` }}
                            ></div>
                          </div>
                          <p className="text-sm text-muted-foreground mt-1">
                            Average annual household income in this neighborhood.
                          </p>
                        </div>
                      );
                    }
                    
                    if (key === "wildlife" && wildlifeData) {
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
                          <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <div className="flex items-center gap-1 mb-2">
                                <Bird className="h-4 w-4 text-finland-blue" />
                                <h4 className="text-sm font-medium">Common Birds</h4>
                              </div>
                              <ul className="text-xs pl-6 list-disc">
                                {wildlifeData.birds.map((bird, i) => (
                                  <li key={i}>{bird}</li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <div className="flex items-center gap-1 mb-2">
                                <Rabbit className="h-4 w-4 text-finland-blue" />
                                <h4 className="text-sm font-medium">Local Mammals</h4>
                              </div>
                              <ul className="text-xs pl-6 list-disc">
                                {wildlifeData.mammals.map((mammal, i) => (
                                  <li key={i}>{mammal}</li>
                                ))}
                              </ul>
                            </div>
                          </div>
                          <div className="mt-3">
                            <div className="flex items-center gap-1 mb-2">
                              <TreeDeciduous className="h-4 w-4 text-finland-blue" />
                              <h4 className="text-sm font-medium">Green Spaces</h4>
                            </div>
                            <div className="flex flex-wrap gap-2">
                              {wildlifeData.parks.map((park, i) => (
                                <span key={i} className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">
                                  {park}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      );
                    }
                    
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

            <Card>
              <CardHeader>
                <CardTitle>Neighborhood Map</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-muted rounded-lg overflow-hidden relative">
                  <div className="h-full w-full bg-finland-snow border border-border rounded-md overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <p className="text-sm text-muted-foreground">Interactive map would be shown here</p>
                    </div>
                    <div className="absolute top-2 right-2 bg-white p-2 rounded-md shadow-md">
                      <div className="flex items-center gap-2 text-xs">
                        <span className="h-3 w-3 rounded-full bg-finland-blue"></span>
                        <span>Current Location</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs mt-1">
                        <span className="h-3 w-3 rounded-full bg-green-500"></span>
                        <span>Green Spaces</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-3">
                  <Button variant="outline" size="sm" className="w-full">
                    <MapPin className="h-4 w-4 mr-2" />
                    View Interactive Map
                  </Button>
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
