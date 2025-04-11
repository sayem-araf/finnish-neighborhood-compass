
import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building, ExternalLink } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/components/ui/use-toast";

type DevelopmentPlan = {
  city: string;
  title: string;
  description: string;
  imageUrl: string;
  initiatives: string[];
  planUrl: string;
};

const developmentPlans: DevelopmentPlan[] = [
  {
    city: "Helsinki",
    title: "Helsinki Vision 2035",
    description: "Helsinki is implementing a comprehensive urban development strategy focused on sustainability, mobility, and quality of living.",
    imageUrl: "https://images.unsplash.com/photo-1550093165-0da26b86e980",
    initiatives: [
      "Carbon-neutral city by 2035",
      "New tram lines connecting suburbs to city center",
      "Development of Jätkäsaari and Kalasatama areas",
      "Urban green space expansion",
      "Sustainable housing development in Kruunuvuorenranta"
    ],
    planUrl: "https://www.hel.fi/en/decision-making/development/helsinki-city-strategy-2021-2025"
  },
  {
    city: "Espoo",
    title: "Espoo Growth Strategy 2025",
    description: "Espoo is investing in infrastructure and community development to support its growing population.",
    imageUrl: "https://images.unsplash.com/photo-1577415124269-fc1140a69e91",
    initiatives: [
      "Metro line western extension",
      "New educational campus in Otaniemi",
      "Residential development in Keilaniemi",
      "Expansion of technology business parks",
      "Leppävaara central area renovation"
    ],
    planUrl: "https://www.espoo.fi/en/city-espoo/espoo-story"
  },
  {
    city: "Tampere",
    title: "Tampere Forward 2030",
    description: "Tampere is focusing on becoming Finland's innovation hub while maintaining its unique cultural heritage and natural surroundings.",
    imageUrl: "https://images.unsplash.com/photo-1561542320-9a18cd340469",
    initiatives: [
      "Tram network expansion to western districts",
      "Transformation of Hiedanranta into a smart district",
      "Lakeside development project along Näsijärvi",
      "Smart city technology implementation",
      "Cultural venue revitalization in the city center"
    ],
    planUrl: "https://www.tampere.fi/en/city-of-tampere/city-strategy"
  },
  {
    city: "Turku",
    title: "Turku Urban Blueprint 2029",
    description: "Turku is revitalizing its historic areas while advancing sustainable urban planning principles and riverside development.",
    imageUrl: "https://images.unsplash.com/photo-1534237710431-e2fc698436d0",
    initiatives: [
      "One Hour Train connection to Helsinki",
      "Riverside cultural zone enhancement",
      "Historic quarter preservation",
      "Port area modernization",
      "Science Park expansion for biotechnology"
    ],
    planUrl: "https://www.turku.fi/en/decision-making/vision-and-strategy"
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
              <CardTitle>{plan.title}</CardTitle>
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
