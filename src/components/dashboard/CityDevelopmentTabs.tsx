
import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type DevelopmentPlan = {
  city: string;
  title: string;
  description: string;
  imageUrl: string;
  initiatives: string[];
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
    ]
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
    ]
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
    ]
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
    ]
  }
];

const CityDevelopmentTabs = () => {
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
                  <Button variant="outline" className="w-full mt-4" size="sm">
                    <Building className="mr-2 h-4 w-4" />
                    View Full Development Plan
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
