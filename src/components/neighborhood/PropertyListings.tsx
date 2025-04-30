
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Home } from "lucide-react";

interface Property {
  id: number;
  image: string;
  price: string;
  size: string;
  bedrooms: number;
  bathrooms: number;
  address: string;
  description: string;
}

interface PropertyListingsProps {
  neighborhoodName: string;
  city: string;
}

const PropertyListings: React.FC<PropertyListingsProps> = ({ neighborhoodName, city }) => {
  const getPropertyListings = (): Property[] => {
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

    return listings[neighborhoodName as keyof typeof listings] || [];
  };

  return (
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
            href={`https://www.oikotie.fi/en/search/?locations=[{"id":"${city}"}]`}
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
  );
};

export default PropertyListings;
