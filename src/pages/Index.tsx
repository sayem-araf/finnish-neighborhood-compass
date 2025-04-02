import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/layout/Layout";
import { Button } from "@/components/ui/button";
import { MapPin, Users, Leaf, CloudSun, AirVent } from "lucide-react";
import NeighborhoodStats from "@/components/dashboard/NeighborhoodStats";
import FactorComparisonChart from "@/components/dashboard/FactorComparisonChart";
import LanguageDistribution from "@/components/dashboard/LanguageDistribution";
import FinlandMap from "@/components/dashboard/FinlandMap";

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
