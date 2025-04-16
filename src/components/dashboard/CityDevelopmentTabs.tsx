import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building, ExternalLink, Calendar, MapPin } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/components/ui/use-toast";

type DevelopmentPlan = {
  city: string;
  title: string;
  description: string;
  imageUrl: string;
  initiatives: string[];
  planUrl: string;
  completionYear: string;
  budget: string;
  location: string;
};

const developmentPlans: DevelopmentPlan[] = [
  {
    city: "Helsinki",
    title: "Helsinki Vision 2035",
    description: "Helsinki is implementing a comprehensive urban development strategy focused on sustainability, mobility, and quality of living.",
    imageUrl: "https://images.pexels.com/photos/31630959/pexels-photo-31630959/free-photo-of-modern-tram-at-helsinki-station-in-winter.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    initiatives: [
      "Carbon-neutral city by 2035",
      "New tram lines connecting suburbs to city center",
      "Development of Jätkäsaari and Kalasatama areas",
      "Urban green space expansion",
      "Sustainable housing development in Kruunuvuorenranta"
    ],
    planUrl: "https://www.hel.fi/en/urban-environment-and-traffic/urban-planning-and-construction/urban-development",
    completionYear: "2035",
    budget: "€520 million",
    location: "City-wide with focus on southern districts"
  },
  {
    city: "Espoo",
    title: "Espoo Growth Strategy 2025",
    description: "Espoo is investing in infrastructure and community development to support its growing population.",
    imageUrl: "https://images.unsplash.com/photo-1663069615732-fdd37e8d6ca1?q=80&w=2748&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    initiatives: [
      "Metro line western extension",
      "New educational campus in Otaniemi",
      "Residential development in Keilaniemi",
      "Expansion of technology business parks",
      "Leppävaara central area renovation"
    ],
    planUrl: "https://www.espoo.fi/en/city-and-decision-making/espoo-story",
    completionYear: "2025",
    budget: "€340 million",
    location: "Focus on western and southern districts"
  },
  {
    city: "Tampere",
    title: "Tampere Forward 2030",
    description: "Tampere is focusing on becoming Finland's innovation hub while maintaining its unique cultural heritage and natural surroundings.",
    imageUrl: "https://images.unsplash.com/photo-1590518713765-5d333a408c71?q=80&w=2850&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    initiatives: [
      "Tram network expansion to western districts",
      "Transformation of Hiedanranta into a smart district",
      "Lakeside development project along Näsijärvi",
      "Smart city technology implementation",
      "Cultural venue revitalization in the city center"
    ],
    planUrl: "https://www.tampere.fi/en/organisaatio/tampere-welcoming-city-kehitysohjelma",
    completionYear: "2030",
    budget: "€280 million",
    location: "Central and western Tampere"
  },
  {
    city: "Turku",
    title: "Turku Urban Blueprint 2029",
    description: "Turku is revitalizing its historic areas while advancing sustainable urban planning principles and riverside development.",
    imageUrl: "https://images.unsplash.com/photo-1642747041760-96edbc00df69?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    initiatives: [
      "One Hour Train connection to Helsinki",
      "Riverside cultural zone enhancement",
      "Historic quarter preservation",
      "Port area modernization",
      "Science Park expansion for biotechnology"
    ],
    planUrl: "https://www.turku.fi/en/projects/developing-city-centre",
    completionYear: "2029",
    budget: "€230 million",
    location: "City center and riverside areas"
  }
];

const CityDevelopmentTabs = () => {
  const { toast } = useToast();

  const handleViewPlan = (city: string, url: string) => {
    if (url) {
      window.open(url, '_blank');
    } else {
      toast({
        title: "Plan unavailable",
        description: `The development plan for ${city} is not currently available.`,
        variant: "destructive",
      });
    }
  };

  return (
    <Tabs defaultValue="Helsinki" className="w-full">
      <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-6">
        {developmentPlans.map((plan) => (
          <TabsTrigger key={plan.city} value={plan.city}>
            {plan.city}
          </TabsTrigger>
        ))}
      </TabsList>
      
      {developmentPlans.map((plan) => (
        <TabsContent key={plan.city} value={plan.city} className="mt-0">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                {plan.title}
                <span className="text-sm font-normal text-muted-foreground ml-2">
                  Target: {plan.completionYear}
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="aspect-video bg-muted rounded-md overflow-hidden">
                    <img 
                      src={plan.imageUrl} 
                      alt={`${plan.city} Development`} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-gray-600">
                    {plan.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <div className="flex items-center gap-1 text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded-full">
                      <Calendar className="h-3 w-3" />
                      <span>Completion: {plan.completionYear}</span>
                    </div>
                    <div className="flex items-center gap-1 text-xs bg-green-50 text-green-700 px-2 py-1 rounded-full">
                      <Building className="h-3 w-3" />
                      <span>Budget: {plan.budget}</span>
                    </div>
                    <div className="flex items-center gap-1 text-xs bg-amber-50 text-amber-700 px-2 py-1 rounded-full">
                      <MapPin className="h-3 w-3" />
                      <span>{plan.location}</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg">Key Initiatives</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    {plan.initiatives.map((initiative, index) => (
                      <li key={index}>{initiative}</li>
                    ))}
                  </ul>
                  <Button 
                    variant="outline" 
                    className="w-full mt-4" 
                    size="sm"
                    onClick={() => handleViewPlan(plan.city, plan.planUrl)}
                  >
                    <Building className="mr-2 h-4 w-4" />
                    <span>View Full Development Plan</span>
                    <ExternalLink className="ml-2 h-3 w-3" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default CityDevelopmentTabs;
