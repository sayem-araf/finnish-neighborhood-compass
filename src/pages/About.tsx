
import React from "react";
import Layout from "../components/layout/Layout";
import { Separator } from "@/components/ui/separator";

const About = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-6">About Finnish Neighborhood Compass</h1>
        
        <div className="max-w-3xl">
          <p className="text-lg mb-6">
            Finnish Neighborhood Compass is a tool designed to help people find the perfect
            neighborhood in Finland based on their lifestyle preferences and environmental factors.
          </p>

          <Separator className="my-6" />

          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="mb-6">
            Our mission is to make finding a home in Finland easier by providing
            data-driven insights about neighborhoods. We believe that finding the
            right neighborhood is just as important as finding the right house or
            apartment.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Our Data</h2>
          <p className="mb-3">
            We collect and analyze data from various sources to provide accurate
            information about Finnish neighborhoods. Our data includes:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Environmental factors like air quality and noise pollution</li>
            <li>Transportation options and connectivity</li>
            <li>Population demographics and diversity</li>
            <li>Wildlife and access to nature</li>
            <li>Income levels and economic indicators</li>
            <li>Languages spoken in the area</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4">How We Work</h2>
          <p className="mb-6">
            Our recommendation engine matches your stated preferences with
            data points from neighborhoods across Finland. We don't just consider
            one or two factors—we look at the complete picture to find areas that
            truly match your lifestyle needs.
          </p>

          <Separator className="my-6" />

          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p>
            Have questions or suggestions? We'd love to hear from you. Contact us
            at <a href="mailto:info@neighborhood-compass.fi" className="text-finland-blue hover:underline">info@neighborhood-compass.fi</a>
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
