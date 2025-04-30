
import React from "react";
import { AirVent, CloudSun, Train, Users, TreeDeciduous, Euro, Bird, Rabbit } from "lucide-react";
import { NeighborhoodFactor } from "../../types/neighborhood";

interface EnvironmentalFactorsProps {
  factors: {
    airQuality: NeighborhoodFactor;
    noiseLevel: NeighborhoodFactor;
    transportation: NeighborhoodFactor;
    diversity: NeighborhoodFactor;
    wildlife: NeighborhoodFactor;
    incomeLevel: NeighborhoodFactor;
    languages: {
      finnish: number;
      swedish: number;
      english: number;
      other: number;
    };
    recreationOptions: string[];
  };
}

const EnvironmentalFactors: React.FC<EnvironmentalFactorsProps> = ({ factors }) => {
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

  const wildlifeData = getWildlifeSpecifics(factors.wildlife.score);

  return (
    <div className="space-y-5">
      {Object.entries(factors).map(([key, factor]) => {
        if (key === "languages" || key === "recreationOptions") return null;
        
        if (Array.isArray(factor) || !('name' in factor)) return null;
        
        const icon = factorIcons[key as keyof typeof factorIcons];
        
        if (key === "incomeLevel") {
          return null;
        }
        
        if (key === "wildlife") {
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
                    Finnish: {factors.languages.finnish}% of residents
                  </p>
                  <p className="text-sm text-gray-600">
                    Swedish: {factors.languages.swedish}% of residents
                  </p>
                  <p className="text-sm text-gray-600">
                    English: {factors.languages.english}% of residents
                  </p>
                  <p className="text-sm text-gray-600">
                    Other languages: {factors.languages.other}% of residents
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
  );
};

export default EnvironmentalFactors;
