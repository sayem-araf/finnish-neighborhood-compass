
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";

const FINNISH_CITIES = [
  "Helsinki",
  "Espoo",
  "Tampere",
  "Vantaa",
  "Oulu",
  "Turku",
  "Jyväskylä",
  "Lahti",
  "Kuopio",
  "Pori",
  "Kouvola",
  "Joensuu",
  "Lappeenranta",
  "Hämeenlinna",
  "Vaasa",
  "Seinäjoki",
  "Rovaniemi",
  "Mikkeli",
  "Kotka",
  "Salo",
];

type CitySearchProps = {
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
};

const CitySearch: React.FC<CitySearchProps> = ({
  value,
  onChange,
  onSubmit,
}) => {
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    onChange(inputValue);

    if (inputValue.length > 0) {
      const filtered = FINNISH_CITIES.filter((city) =>
        city.toLowerCase().includes(inputValue.toLowerCase())
      );
      setSuggestions(filtered);
      setShowSuggestions(true);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  };

  const selectCity = (city: string) => {
    onChange(city);
    setSuggestions([]);
    setShowSuggestions(false);
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-xl">Your preferred area</CardTitle>
        <p className="text-muted-foreground">
          Enter a city or region in Finland that you're interested in
        </p>
      </CardHeader>
      <CardContent>
        <div className="relative">
          <div className="flex space-x-2">
            <div className="relative flex-1">
              <MapPin
                size={18}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground"
              />
              <Input
                placeholder="Search for a city (e.g. Helsinki)"
                value={value}
                onChange={handleInputChange}
                onFocus={() => value && setSuggestions(
                  FINNISH_CITIES.filter((city) =>
                    city.toLowerCase().includes(value.toLowerCase())
                  )
                )}
                onBlur={() => {
                  // Delay hiding the suggestions to allow for clicks
                  setTimeout(() => setShowSuggestions(false), 200);
                }}
                className="pl-10"
              />
              {showSuggestions && suggestions.length > 0 && (
                <div className="absolute z-10 w-full bg-white mt-1 rounded-md border border-border shadow-lg max-h-60 overflow-auto">
                  {suggestions.map((city) => (
                    <div
                      key={city}
                      className="px-4 py-2 hover:bg-muted cursor-pointer"
                      onMouseDown={() => selectCity(city)}
                    >
                      {city}
                    </div>
                  ))}
                </div>
              )}
            </div>
            <Button onClick={onSubmit} disabled={!value}>
              Find Neighborhoods
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CitySearch;
