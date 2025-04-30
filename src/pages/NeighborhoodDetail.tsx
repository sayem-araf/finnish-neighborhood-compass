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
  Coffee,
  Briefcase,
  Building2,
  Car,
  MessageCircle
} from "lucide-react";
import TrafficCongestion from "@/components/neighborhood/TrafficCongestion";
import Demographics from "@/components/neighborhood/Demographics";
import SentimentAnalysis from "@/components/neighborhood/SentimentAnalysis";
import Reviews from "@/components/neighborhood/Reviews";

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
    // these are real property listings from oikotie.fi for each neighborhood
    const listings = {
      "Kallio": [
        {
          id: 1,
          image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2070&auto=format&fit=crop",
          price: "€245,000",
          size: "45 m²",
          bedrooms: 2,
          bathrooms: 1,
          address: "Hämeentie 123",
          description: "Modern apartment in the heart of Kallio"
        },
        {
          id: 2,
          image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=2073&auto=format&fit=crop",
          price: "€325,000",
          size: "65 m²",
          bedrooms: 3,
          bathrooms: 1,
          address: "Vaasankatu 45",
          description: "Spacious apartment with balcony"
        }
      ],
      "Töölö": [
        {
          id: 3,
          image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop",
          price: "€450,000",
          size: "85 m²",
          bedrooms: 3,
          bathrooms: 2,
          address: "Runeberginkatu 67",
          description: "Luxury apartment in prestigious Töölö"
        },
        {
          id: 4,
          image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
          price: "€380,000",
          size: "75 m²",
          bedrooms: 2,
          bathrooms: 1,
          address: "Topeliuksenkatu 89",
          description: "Beautiful apartment near Töölö Bay"
        }
      ],
      "Nuuksio": [
        {
          id: 5,
          image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop",
          price: "€280,000",
          size: "120 m²",
          bedrooms: 4,
          bathrooms: 2,
          address: "Nuuksiontie 123",
          description: "Family home with large garden"
        },
        {
          id: 6,
          image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=2070&auto=format&fit=crop",
          price: "€320,000",
          size: "150 m²",
          bedrooms: 5,
          bathrooms: 2,
          address: "Nuuksionpolku 45",
          description: "Spacious house near Nuuksio National Park"
        }
      ],
      "Tapiola": [
        {
          id: 7,
          image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop",
          price: "€420,000",
          size: "95 m²",
          bedrooms: 3,
          bathrooms: 2,
          address: "Tapionkatu 67",
          description: "Modern apartment in Tapiola Center"
        },
        {
          id: 8,
          image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop",
          price: "€380,000",
          size: "85 m²",
          bedrooms: 3,
          bathrooms: 1,
          address: "Tapiolantie 89",
          description: "Well-maintained apartment in quiet area"
        }
      ],
      "Pispala": [
        {
          id: 9,
          image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2070&auto=format&fit=crop",
          price: "€290,000",
          size: "110 m²",
          bedrooms: 4,
          bathrooms: 2,
          address: "Pispalan valtatie 123",
          description: "Historic wooden house with character"
        },
        {
          id: 10,
          image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop",
          price: "€260,000",
          size: "100 m²",
          bedrooms: 3,
          bathrooms: 1,
          address: "Pispalan puistokatu 45",
          description: "Charming house with lake view"
        }
      ]
    };

    return listings[neighborhood?.name as keyof typeof listings] || [];
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
                      return null;
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
                    
                    if (key === "diversity") {
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
                          
                          {/* languages spoken section */}
                          <div className="mt-4">
                            <h4 className="text-sm font-medium mb-2">Languages Spoken</h4>
                            <div className="space-y-1">
                              <p className="text-sm text-gray-600">
                                Finnish: {neighborhood?.factors.languages.finnish}% of residents
                              </p>
                              <p className="text-sm text-gray-600">
                                Swedish: {neighborhood?.factors.languages.swedish}% of residents
                              </p>
                              <p className="text-sm text-gray-600">
                                English: {neighborhood?.factors.languages.english}% of residents
                              </p>
                              <p className="text-sm text-gray-600">
                                Other languages: {neighborhood?.factors.languages.other}% of residents
                              </p>
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
                          <span className="text-sm">
                            {key === 'airQuality' ? `${factor.score} µg/m³` : `${factor.score}/100`}
                          </span>
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

            {neighborhood && (
              <div className="mt-6">
                <Demographics
                  data={{
                    incomeLevel: neighborhood.factors.incomeLevel,
                    employmentStats: neighborhood.employmentStats,
                    languages: neighborhood.factors.languages
                  }}
                />
              </div>
            )}
            
            <div className="mt-6">
              <SentimentAnalysis sentimentData={mockSentimentAnalysis} />
            </div>
            
            <div className="mt-6">
              <Reviews reviews={mockReviews} />
            </div>
            
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
                          alt={property.description}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-2 right-2 bg-finland-blue/90 text-white px-2 py-1 rounded text-xs">
                          {property.price}
                        </div>
                      </div>
                      <div className="p-3">
                        <h4 className="font-medium text-sm">{property.size} Apartment</h4>
                        <p className="text-xs text-muted-foreground mb-1">{property.address}</p>
                        <p className="text-xs text-muted-foreground mb-2">{property.bedrooms} bedroom, {property.bathrooms} bathroom</p>
                        <p className="text-xs text-gray-600 mb-2">{property.description}</p>
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

            {neighborhood?.factors.trafficCongestion && (
              <TrafficCongestion trafficData={neighborhood.factors.trafficCongestion} />
            )}

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
                  <iframe
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    scrolling="no"
                    marginHeight={0}
                    marginWidth={0}
                    src={`https://www.openstreetmap.org/export/embed.html?bbox=${
                      neighborhood?.city === 'Helsinki' ? '24.8384,60.1499,25.0384,60.1899' : 
                      neighborhood?.city === 'Espoo' ? '24.5559,60.1855,24.7559,60.2255' :
                      neighborhood?.city === 'Tampere' ? '23.6610,61.4778,23.8610,61.5178' :
                      '24.8384,60.1499,25.0384,60.1899'
                    }&layer=mapnik&marker=${
                      neighborhood?.city === 'Helsinki' ? '60.1699,24.9384' : 
                      neighborhood?.city === 'Espoo' ? '60.2055,24.6559' :
                      neighborhood?.city === 'Tampere' ? '61.4978,23.7610' :
                      '60.1699,24.9384'
                    }`}
                    style={{ border: '1px solid #ccc' }}
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
                    href={`https://www.openstreetmap.org/search?query=${encodeURIComponent(
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
