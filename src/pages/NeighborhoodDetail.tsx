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
  Euro,
  Home,
  ExternalLink,
  School,
  ShoppingBag,
  Coffee
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
      birds: ["Common Starling", "Eurasian Blue Tit", "Great Tit", "European Robin", "Common Swift", "House Sparrow"],
      mammals: ["Red Squirrel", "European Hedgehog", "Arctic Fox", "Brown Bear", "Forest Reindeer", "Eurasian Lynx"],
      plants: ["Silver Birch", "Norway Spruce", "Scots Pine", "Arctic Bramble", "Lingonberry", "Cloudberry", "Wild Rosemary"],
      parks: ["Central Park", "Lakeside Park", "Forest Reserve", "Botanical Gardens", "Riverside Walk", "Nature Trail"]
    };
    
    const count = Math.floor(score / 20) + 1;
    
    return {
      birds: allSpecies.birds.slice(0, Math.min(count + 1, allSpecies.birds.length)),
      mammals: allSpecies.mammals.slice(0, Math.min(count, allSpecies.mammals.length)),
      plants: allSpecies.plants.slice(0, Math.min(count + 1, allSpecies.plants.length)),
      parks: allSpecies.parks.slice(0, Math.min(count, allSpecies.parks.length))
    };
  };

  const wildlifeData = neighborhood ? getWildlifeSpecifics(neighborhood.factors.wildlife.score) : null;

  const getPropertyListings = () => {
    return [
      {
        id: 1,
        image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=2948&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: `€${Math.floor(Math.random() * 400) + 100},000`,
        size: `${Math.floor(Math.random() * 120) + 30} m²`,
        bedrooms: Math.floor(Math.random() * 3) + 1,
        bathrooms: Math.floor(Math.random() * 2) + 1
      },
      {
        id: 2,
        image: "https://images.unsplash.com/photo-1596204976717-1a9ff47f74ef?q=80&w=2070&auto=format&fit=crop",
        price: `€${Math.floor(Math.random() * 400) + 100},000`,
        size: `${Math.floor(Math.random() * 120) + 30} m²`,
        bedrooms: Math.floor(Math.random() * 3) + 1,
        bathrooms: Math.floor(Math.random() * 2) + 1
      },
      {
        id: 3,
        image: "https://images.unsplash.com/photo-1580237072617-771c3ecc4a24?q=80&w=2070&auto=format&fit=crop",
        price: `€${Math.floor(Math.random() * 400) + 100},000`,
        size: `${Math.floor(Math.random() * 120) + 30} m²`,
        bedrooms: Math.floor(Math.random() * 3) + 1,
        bathrooms: Math.floor(Math.random() * 2) + 1
      },
      {
        id: 4,
        image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2070&auto=format&fit=crop",
        price: `€${Math.floor(Math.random() * 400) + 100},000`,
        size: `${Math.floor(Math.random() * 120) + 30} m²`,
        bedrooms: Math.floor(Math.random() * 3) + 1,
        bathrooms: Math.floor(Math.random() * 2) + 1
      }
    ];
  };

  const getNearbyAmenities = () => {
    return [
      { name: "Schools", count: Math.floor(Math.random() * 5) + 1, icon: <School className="h-4 w-4" /> },
      { name: "Shopping Centers", count: Math.floor(Math.random() * 3) + 1, icon: <ShoppingBag className="h-4 w-4" /> },
      { name: "Cafés", count: Math.floor(Math.random() * 6) + 2, icon: <Coffee className="h-4 w-4" /> }
    ];
  };

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
                <div className="space-y-5">
                  {neighborhood && Object.entries(neighborhood.factors).map(([key, factor]) => {
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
                          <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <div className="flex items-center gap-1 mb-2">
                                <TreeDeciduous className="h-4 w-4 text-finland-blue" />
                                <h4 className="text-sm font-medium">Common Flora</h4>
                              </div>
                              <ul className="text-xs pl-6 list-disc">
                                {wildlifeData.plants.map((plant, i) => (
                                  <li key={i}>{plant}</li>
                                ))}
                              </ul>
                            </div>
                            <div>
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
            
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Property Listings</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {getPropertyListings().map((property) => (
                    <div key={property.id} className="border rounded-md overflow-hidden">
                      <div className="h-40 bg-muted relative">
                        <img 
                          src={property.image} 
                          alt="Property" 
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-2 right-2 bg-finland-blue/90 text-white px-2 py-1 rounded text-xs">
                          {property.price}
                        </div>
                      </div>
                      <div className="p-3">
                        <h4 className="font-medium text-sm">{property.size} Apartment</h4>
                        <p className="text-xs text-muted-foreground mb-2">{property.bedrooms} bedroom, {property.bathrooms} bathroom</p>
                        <a 
                          href="https://www.oikotie.fi/en" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center text-xs text-finland-blue gap-1 mt-2"
                        >
                          <Home className="h-3 w-3" />
                          <span>View on Oikotie.fi</span>
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 flex justify-center">
                  <a 
                    href={`https://www.oikotie.fi/en/search/?locations=[{"id":"${neighborhood?.city}"}]`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center"
                  >
                    <Button variant="outline" className="gap-2">
                      View All Properties
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </a>
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
                      <span>{neighborhood?.factors.languages.finnish}%</span>
                    </div>
                    <Progress
                      value={neighborhood?.factors.languages.finnish}
                      className="h-2"
                    />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>Swedish</span>
                      <span>{neighborhood?.factors.languages.swedish}%</span>
                    </div>
                    <Progress
                      value={neighborhood?.factors.languages.swedish}
                      className="h-2"
                    />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>English</span>
                      <span>{neighborhood?.factors.languages.english}%</span>
                    </div>
                    <Progress
                      value={neighborhood?.factors.languages.english}
                      className="h-2"
                    />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>Other</span>
                      <span>{neighborhood?.factors.languages.other}%</span>
                    </div>
                    <Progress
                      value={neighborhood?.factors.languages.other}
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
                  {neighborhood?.factors.recreationOptions.map((option, idx) => (
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
                  <img 
                    src={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/${
                      neighborhood?.city === 'Helsinki' ? '24.9384,60.1699' : 
                      neighborhood?.city === 'Espoo' ? '24.6559,60.2055' :
                      neighborhood?.city === 'Tampere' ? '23.7610,61.4978' :
                      '24.9384,60.1699'
                    },12,0/400x300?access_token=pk.eyJ1IjoibG92YWJsZS1haS1kZW1vIiwiYSI6ImNsdXc5MG82eDBrMjUyaW82YWRtZXp4djcifQ.h6qKwrmNqZ6NaXXUYfKpOA`} 
                    alt="Neighborhood map" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 right-2 bg-white p-2 rounded-md shadow-md">
                    <div className="flex items-center gap-2 text-xs">
                      <span className="h-3 w-3 rounded-full bg-finland-blue"></span>
                      <span>Current Location</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs mt-1">
                      <span className="h-3 w-3 rounded-full bg-green-500"></span>
                      <span>Green Spaces</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs mt-1">
                      <span className="h-3 w-3 rounded-full bg-red-500"></span>
                      <span>Property Listings</span>
                    </div>
                  </div>
                </div>
                <div className="mt-3">
                  <a 
                    href={`https://www.google.com/maps/search/${encodeURIComponent(
                      neighborhood?.name + " " + neighborhood?.city + " Finland"
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" size="sm" className="w-full">
                      <MapPin className="h-4 w-4 mr-2" />
                      View Interactive Map
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Nearby Amenities</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {getNearbyAmenities().map((amenity, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        {amenity.icon}
                        <span>{amenity.name}</span>
                      </div>
                      <span className="text-sm font-medium">{amenity.count}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Market Trends</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">Price change (1 yr)</span>
                      <span className="text-sm font-medium text-green-600">+2.4%</span>
                    </div>
                    <Progress value={60} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">Avg. time on market</span>
                      <span className="text-sm font-medium">45 days</span>
                    </div>
                    <Progress value={45} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">Demand level</span>
                      <span className="text-sm font-medium text-amber-600">Medium</span>
                    </div>
                    <Progress value={65} className="h-2" />
                  </div>
                </div>
              </CardContent>
            </Card>
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
              href={`https://www.google.com/maps/search/${encodeURIComponent(
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
