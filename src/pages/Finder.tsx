
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/layout/Layout";
import PreferenceQuestion, { OptionType } from "../components/finder/PreferenceQuestion";
import CitySearch from "../components/finder/CitySearch";
import { Button } from "@/components/ui/button";
import { UserPreferences } from "../types/neighborhood";
import { ArrowLeft, ArrowRight } from "lucide-react";

const Finder = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [preferences, setPreferences] = useState<UserPreferences>({
    environment: "neutral",
    quietness: "neutral",
    recreation: "both",
    city: "",
  });

  const questions = [
    {
      question: "What environment are you looking for?",
      description: "This affects air quality, population density, and wildlife considerations.",
      options: [
        { value: "urban", label: "Urban" },
        { value: "nature", label: "Abundance of Nature" },
        { value: "neutral", label: "Neutral / Balanced" },
      ] as OptionType[],
      value: preferences.environment,
      onChange: (value: string) =>
        setPreferences({ ...preferences, environment: value as any }),
    },
    {
      question: "Quietness preference",
      description: "This affects recommendations based on noise pollution levels.",
      options: [
        { value: "yes", label: "I prefer quiet neighborhoods" },
        { value: "no", label: "I don't mind some noise" },
        { value: "neutral", label: "Doesn't matter to me" },
      ] as OptionType[],
      value: preferences.quietness,
      onChange: (value: string) =>
        setPreferences({ ...preferences, quietness: value as any }),
    },
    {
      question: "What kind of recreational activities do you prefer?",
      description: "This helps us identify neighborhoods with suitable amenities.",
      options: [
        { value: "indoors", label: "I like indoor activities (gyms, theaters, cafes, etc.)" },
        { value: "outdoors", label: "I like outdoor activities (hiking, parks, beaches, etc.)" },
        { value: "both", label: "I enjoy both indoor and outdoor activities" },
      ] as OptionType[],
      value: preferences.recreation,
      onChange: (value: string) =>
        setPreferences({ ...preferences, recreation: value as any }),
    },
  ];

  const citySearchProps = {
    value: preferences.city,
    onChange: (value: string) => setPreferences({ ...preferences, city: value }),
    onSubmit: handleSubmit,
  };

  function handleSubmit() {
    // Store preferences in session storage to access them in results
    sessionStorage.setItem("userPreferences", JSON.stringify(preferences));
    navigate("/results");
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-center mb-8">
          Find Your Ideal Neighborhood
        </h1>

        <div className="mb-10">
          <div className="max-w-3xl mx-auto flex justify-between">
            {[0, 1, 2, 3].map((step) => (
              <div
                key={step}
                className="flex flex-col items-center"
                onClick={() => step < currentStep && setCurrentStep(step)}
              >
                <div
                  className={`h-10 w-10 rounded-full flex items-center justify-center mb-2 font-medium ${
                    currentStep >= step
                      ? "bg-finland-blue text-white"
                      : "bg-gray-100 text-gray-400"
                  } ${step < currentStep ? "cursor-pointer" : ""}`}
                >
                  {step + 1}
                </div>
                <span
                  className={`text-sm hidden md:block ${
                    currentStep >= step ? "text-gray-800" : "text-gray-400"
                  }`}
                >
                  {step === 0
                    ? "Environment"
                    : step === 1
                    ? "Noise"
                    : step === 2
                    ? "Activities"
                    : "Location"}
                </span>
              </div>
            ))}
          </div>
          <div className="w-full bg-gray-100 h-2 rounded-full mt-4 max-w-3xl mx-auto">
            <div
              className="bg-finland-blue h-full rounded-full transition-all duration-300 ease-in-out"
              style={{ width: `${((currentStep + 1) / 4) * 100}%` }}
            ></div>
          </div>
        </div>

        <div className="fade-in">
          {currentStep < 3 ? (
            <PreferenceQuestion {...questions[currentStep]} />
          ) : (
            <CitySearch {...citySearchProps} />
          )}
        </div>

        <div className="flex justify-between mt-8 max-w-2xl mx-auto">
          <Button
            variant="outline"
            onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
            disabled={currentStep === 0}
            className="flex items-center gap-2"
          >
            <ArrowLeft size={16} />
            Previous
          </Button>

          {currentStep < 3 ? (
            <Button
              onClick={() => setCurrentStep(Math.min(3, currentStep + 1))}
              className="flex items-center gap-2 bg-finland-blue hover:bg-finland-blue/90"
            >
              Next
              <ArrowRight size={16} />
            </Button>
          ) : (
            <Button
              onClick={handleSubmit}
              disabled={!preferences.city}
              className="bg-finland-blue hover:bg-finland-blue/90"
            >
              View Results
            </Button>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Finder;
