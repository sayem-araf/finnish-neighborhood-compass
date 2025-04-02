
import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/layout/Layout";
import { Button } from "@/components/ui/button";
import { MapPin, Users, Leaf, CloudSun, AirVent, Calendar, Building, Home } from "lucide-react";
import NeighborhoodStats from "@/components/dashboard/NeighborhoodStats";
import FactorComparisonChart from "@/components/dashboard/FactorComparisonChart";
import LanguageDistribution from "@/components/dashboard/LanguageDistribution";
import FinlandMap from "@/components/dashboard/FinlandMap";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-finland-blue to-finland-light-blue py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Find Your Perfect Neighborhood in Finland
            </h1>
            <p className="text-xl mb-8">
              Discover neighborhoods that match your lifestyle preferences using
              data on environmental factors, transportation, and more.
            </p>
            <Link to="/finder">
              <Button size="lg" className="bg-white text-finland-blue hover:bg-gray-100">
                Start Finding Neighborhoods
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Dashboard Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            Finland Neighborhood Insights
          </h2>
          
          {/* Stats Cards */}
          <div className="mb-8">
            <NeighborhoodStats />
          </div>
          
          {/* Charts & Map */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <FactorComparisonChart />
            <LanguageDistribution />
          </div>
          
          <div className="mb-8">
            <FinlandMap />
          </div>
          
          <div className="text-center">
            <Link to="/finder">
              <Button size="lg" className="bg-finland-blue hover:bg-finland-blue/90">
                Find Your Ideal Neighborhood
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-finland-snow">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            What Residents Say
          </h2>
          <Carousel className="max-w-5xl mx-auto">
            <CarouselContent>
              <CarouselItem>
                <div className="p-4">
                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex flex-col items-center text-center gap-4">
                        <div className="h-16 w-16 rounded-full bg-finland-light-blue/20 flex items-center justify-center">
                          <img 
                            src="https://randomuser.me/api/portraits/women/45.jpg" 
                            alt="Liisa K." 
                            className="h-14 w-14 rounded-full object-cover"
                          />
                        </div>
                        <blockquote className="text-lg italic">
                          "Moving to Kallio was the best decision I've made. The vibrant community and excellent public transportation made settling in Finland as an expat so much easier."
                        </blockquote>
                        <div>
                          <p className="font-semibold">Liisa K.</p>
                          <p className="text-sm text-muted-foreground">Resident of Kallio, Helsinki</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="p-4">
                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex flex-col items-center text-center gap-4">
                        <div className="h-16 w-16 rounded-full bg-finland-light-blue/20 flex items-center justify-center">
                          <img 
                            src="https://randomuser.me/api/portraits/men/32.jpg" 
                            alt="Mikko J." 
                            className="h-14 w-14 rounded-full object-cover"
                          />
                        </div>
                        <blockquote className="text-lg italic">
                          "We found our perfect family home in Tapiola. The combination of nature, excellent schools, and safe environment is exactly what we were looking for."
                        </blockquote>
                        <div>
                          <p className="font-semibold">Mikko J.</p>
                          <p className="text-sm text-muted-foreground">Resident of Tapiola, Espoo</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="p-4">
                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex flex-col items-center text-center gap-4">
                        <div className="h-16 w-16 rounded-full bg-finland-light-blue/20 flex items-center justify-center">
                          <img 
                            src="https://randomuser.me/api/portraits/women/68.jpg" 
                            alt="Anna S." 
                            className="h-14 w-14 rounded-full object-cover"
                          />
                        </div>
                        <blockquote className="text-lg italic">
                          "Tampere offers the perfect balance of urban amenities and natural beauty. The air quality and access to lakes make it an ideal place to live."
                        </blockquote>
                        <div>
                          <p className="font-semibold">Anna S.</p>
                          <p className="text-sm text-muted-foreground">Resident of Tampere</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="left-0" />
            <CarouselNext className="right-0" />
          </Carousel>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Upcoming Events in Finland
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Helsinki Design Week</CardTitle>
                <CardDescription>September 9-19, 2024</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-muted rounded-md mb-4 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1519750157634-b6d493a0f77c" 
                    alt="Helsinki Design Week" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-gray-600">
                  Finland's largest design festival featuring exhibitions, workshops, and events across the city.
                </p>
              </CardContent>
              <CardFooter className="flex items-center">
                <MapPin size={14} className="mr-1" />
                <span className="text-sm text-muted-foreground">Various locations, Helsinki</span>
              </CardFooter>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Tampere Film Festival</CardTitle>
                <CardDescription>August 12-16, 2024</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-muted rounded-md mb-4 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba" 
                    alt="Tampere Film Festival" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-gray-600">
                  Annual film festival showcasing international short films and documentaries.
                </p>
              </CardContent>
              <CardFooter className="flex items-center">
                <MapPin size={14} className="mr-1" />
                <span className="text-sm text-muted-foreground">Cultural Center, Tampere</span>
              </CardFooter>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Oulu Music Festival</CardTitle>
                <CardDescription>July 28 - August 3, 2024</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-muted rounded-md mb-4 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3" 
                    alt="Oulu Music Festival" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-gray-600">
                  Classical music concerts performed by internationally acclaimed musicians in unique venues.
                </p>
              </CardContent>
              <CardFooter className="flex items-center">
                <MapPin size={14} className="mr-1" />
                <span className="text-sm text-muted-foreground">Concert Hall, Oulu</span>
              </CardFooter>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Button variant="outline">View All Events</Button>
          </div>
        </div>
      </section>

      {/* City Development Plans Section */}
      <section className="py-16 bg-finland-snow">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            City Development Plans
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Helsinki Vision 2035</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-muted rounded-md mb-4 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1550093165-0da26b86e980" 
                    alt="Helsinki Vision" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="space-y-4">
                  <p className="text-gray-600">
                    Helsinki is implementing a comprehensive urban development strategy focused on sustainability, 
                    mobility, and quality of living. Key initiatives include:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Carbon-neutral city by 2035</li>
                    <li>New tram lines connecting suburbs to city center</li>
                    <li>Development of Jätkäsaari and Kalasatama areas</li>
                    <li>Urban green space expansion</li>
                  </ul>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" size="sm">
                  <Building className="mr-2 h-4 w-4" />
                  View Full Development Plan
                </Button>
              </CardFooter>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Espoo Growth Strategy 2025</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-muted rounded-md mb-4 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1577415124269-fc1140a69e91" 
                    alt="Espoo Growth" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="space-y-4">
                  <p className="text-gray-600">
                    Espoo is investing in infrastructure and community development to support its growing population. 
                    Major projects include:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Metro line western extension</li>
                    <li>New educational campus in Otaniemi</li>
                    <li>Residential development in Keilaniemi</li>
                    <li>Expansion of technology business parks</li>
                  </ul>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" size="sm">
                  <Building className="mr-2 h-4 w-4" />
                  View Full Development Plan
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Properties Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-6">
            Featured Properties
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Discover available properties in Finland's most desirable neighborhoods, handpicked for their quality and location
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Property 1 */}
            <Card className="overflow-hidden">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1493809842364-78817add7ffb" 
                  alt="Modern Apartment" 
                  className="w-full h-48 object-cover"
                />
                <span className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded text-xs font-medium">
                  For Sale
                </span>
              </div>
              <CardHeader>
                <CardTitle className="text-xl">Modern Apartment in Kallio</CardTitle>
                <CardDescription className="flex items-center">
                  <MapPin size={14} className="mr-1" />
                  Kallio, Helsinki
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between text-sm mb-4">
                  <span className="flex items-center">
                    <Home size={14} className="mr-1" />
                    75 m²
                  </span>
                  <span>2 bedrooms</span>
                  <span>1 bathroom</span>
                </div>
                <p className="text-gray-600">
                  Stylish apartment with open floor plan, modern kitchen, and balcony overlooking the city.
                </p>
                <p className="font-bold text-lg mt-4">€289,000</p>
              </CardContent>
              <CardFooter>
                <Button className="w-full">View Property</Button>
              </CardFooter>
            </Card>

            {/* Property 2 */}
            <Card className="overflow-hidden">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1600585154526-990dced4db0d" 
                  alt="Family House" 
                  className="w-full h-48 object-cover"
                />
                <span className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded text-xs font-medium">
                  For Sale
                </span>
              </div>
              <CardHeader>
                <CardTitle className="text-xl">Family House in Tapiola</CardTitle>
                <CardDescription className="flex items-center">
                  <MapPin size={14} className="mr-1" />
                  Tapiola, Espoo
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between text-sm mb-4">
                  <span className="flex items-center">
                    <Home size={14} className="mr-1" />
                    142 m²
                  </span>
                  <span>4 bedrooms</span>
                  <span>2 bathrooms</span>
                </div>
                <p className="text-gray-600">
                  Spacious family home with garden, sauna, and close proximity to international schools.
                </p>
                <p className="font-bold text-lg mt-4">€485,000</p>
              </CardContent>
              <CardFooter>
                <Button className="w-full">View Property</Button>
              </CardFooter>
            </Card>

            {/* Property 3 */}
            <Card className="overflow-hidden">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace" 
                  alt="Studio Apartment" 
                  className="w-full h-48 object-cover"
                />
                <span className="absolute top-2 right-2 bg-blue-500 text-white px-2 py-1 rounded text-xs font-medium">
                  For Rent
                </span>
              </div>
              <CardHeader>
                <CardTitle className="text-xl">Studio Apartment in Kamppi</CardTitle>
                <CardDescription className="flex items-center">
                  <MapPin size={14} className="mr-1" />
                  Kamppi, Helsinki
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between text-sm mb-4">
                  <span className="flex items-center">
                    <Home size={14} className="mr-1" />
                    35 m²
                  </span>
                  <span>Studio</span>
                  <span>1 bathroom</span>
                </div>
                <p className="text-gray-600">
                  Centrally located studio with modern amenities, perfect for students or young professionals.
                </p>
                <p className="font-bold text-lg mt-4">€850/month</p>
              </CardContent>
              <CardFooter>
                <Button className="w-full">View Property</Button>
              </CardFooter>
            </Card>
          </div>
          
          <div className="text-center mt-10">
            <Link to="/properties">
              <Button variant="outline" size="lg" className="mx-auto">
                Browse All Properties
                <MapPin className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-finland-snow">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Make Informed Housing Decisions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6 bg-finland-snow rounded-lg">
              <div className="bg-finland-light-blue p-3 rounded-full mb-4">
                <CloudSun size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Environmental Factors</h3>
              <p className="text-gray-600">
                Compare air quality, noise pollution levels, and access to nature
                across different neighborhoods.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6 bg-finland-snow rounded-lg">
              <div className="bg-finland-light-green p-3 rounded-full mb-4">
                <Users size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Community Insights</h3>
              <p className="text-gray-600">
                Learn about demographic diversity, languages spoken, and income
                levels in different areas.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6 bg-finland-snow rounded-lg">
              <div className="bg-finland-light-blue p-3 rounded-full mb-4">
                <Leaf size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Lifestyle Match</h3>
              <p className="text-gray-600">
                Find areas that support your preferred activities, whether you
                enjoy urban amenities or outdoor recreation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-finland-snow">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            How It Works
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-10">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="bg-white p-6 rounded-full h-16 w-16 flex items-center justify-center text-2xl font-bold text-finland-blue">
                  1
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">Tell Us Your Preferences</h3>
                  <p className="text-gray-600">
                    Answer a few simple questions about your ideal environment,
                    noise tolerance, and recreation activities.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="bg-white p-6 rounded-full h-16 w-16 flex items-center justify-center text-2xl font-bold text-finland-blue">
                  2
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">Select Your Target Area</h3>
                  <p className="text-gray-600">
                    Specify which city or region in Finland you're interested in
                    exploring for housing options.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="bg-white p-6 rounded-full h-16 w-16 flex items-center justify-center text-2xl font-bold text-finland-blue">
                  3
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">Discover Matching Neighborhoods</h3>
                  <p className="text-gray-600">
                    Get personalized neighborhood recommendations ranked by how
                    well they match your requirements and preferences.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <Link to="/finder">
                <Button size="lg" className="bg-finland-blue hover:bg-finland-blue/90">
                  Start The Finder
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;

