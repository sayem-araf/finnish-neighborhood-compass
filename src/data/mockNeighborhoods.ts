import { Neighborhood } from "../types/neighborhood";

export const mockNeighborhoods: Neighborhood[] = [
  {
    id: "kallio-helsinki",
    name: "Kallio",
    city: "Helsinki",
    imageUrl: "https://images.pexels.com/photos/31630959/pexels-photo-31630959/free-photo-of-modern-tram-at-helsinki-station-in-winter.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description:
      "Kallio is a densely populated, traditionally working-class district with a vibrant nightlife, trendy cafés and restaurants. It's known for its urban atmosphere and cultural diversity.",
    factors: {
      airQuality: {
        name: "Air Quality",
        score: 65,
        description: "Moderate air quality due to urban location and traffic",
      },
      noiseLevel: {
        name: "Noise Level",
        score: 40,
        description: "Higher noise levels due to busy streets and nightlife",
      },
      transportation: {
        name: "Transportation",
        score: 95,
        description: "Excellent public transport with trams, buses, and metro",
      },
      diversity: {
        name: "Diversity",
        score: 85,
        description: "High cultural diversity with many international residents",
      },
      wildlife: {
        name: "Wildlife",
        score: 20,
        description: "Limited wildlife due to urban density",
      },
      incomeLevel: {
        name: "Income Level",
        score: 60,
        description: "Mixed income levels with gentrification ongoing",
      },
      languages: {
        finnish: 75,
        swedish: 5,
        english: 15,
        other: 5,
      },
      recreationOptions: ["Cafés", "Bars", "Theaters", "Gyms", "Small parks"],
    },
  },
  {
    id: "toolo-helsinki",
    name: "Töölö",
    city: "Helsinki",
    imageUrl: "https://images.pexels.com/photos/31630960/pexels-photo-31630960/free-photo-of-helsinki-cathedral-in-winter.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description:
      "Töölö is an upscale residential district with beautiful architecture, adjacent to parks and the sea. It's known for its cultural institutions and peaceful atmosphere.",
    factors: {
      airQuality: {
        name: "Air Quality",
        score: 75,
        description: "Good air quality with proximity to parks",
      },
      noiseLevel: {
        name: "Noise Level",
        score: 70,
        description: "Relatively quiet residential streets with some traffic",
      },
      transportation: {
        name: "Transportation",
        score: 85,
        description: "Good public transport with trams and buses",
      },
      diversity: {
        name: "Diversity",
        score: 60,
        description: "Moderate diversity with mainly Finnish residents",
      },
      wildlife: {
        name: "Wildlife",
        score: 45,
        description: "Some wildlife in nearby parks and shores",
      },
      incomeLevel: {
        name: "Income Level",
        score: 85,
        description: "Higher income area with upscale apartments",
      },
      languages: {
        finnish: 85,
        swedish: 8,
        english: 5,
        other: 2,
      },
      recreationOptions: ["Parks", "Museums", "Opera", "Sporting facilities", "Beaches"],
    },
  },
  {
    id: "nuuksio-espoo",
    name: "Nuuksio",
    city: "Espoo",
    imageUrl: "https://images.pexels.com/photos/31630961/pexels-photo-31630961/free-photo-of-forest-lake-in-nuuksio-national-park.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description:
      "Nuuksio is a natural paradise with a national park, lakes and forests. The area offers peaceful living surrounded by Finland's beautiful nature.",
    factors: {
      airQuality: {
        name: "Air Quality",
        score: 98,
        description: "Excellent air quality due to forests and distance from pollution sources",
      },
      noiseLevel: {
        name: "Noise Level",
        score: 95,
        description: "Very quiet environment with only natural sounds",
      },
      transportation: {
        name: "Transportation",
        score: 30,
        description: "Limited public transport options, car recommended",
      },
      diversity: {
        name: "Diversity",
        score: 25,
        description: "Predominantly Finnish population",
      },
      wildlife: {
        name: "Wildlife",
        score: 95,
        description: "Rich wildlife with birds, deer, foxes, and more",
      },
      incomeLevel: {
        name: "Income Level",
        score: 75,
        description: "Above average income levels with spacious properties",
      },
      languages: {
        finnish: 90,
        swedish: 5,
        english: 4,
        other: 1,
      },
      recreationOptions: [
        "Hiking",
        "Fishing",
        "Foraging",
        "Swimming",
        "Winter sports",
      ],
    },
  },
  {
    id: "tapiola-espoo",
    name: "Tapiola",
    city: "Espoo",
    imageUrl: "https://images.pexels.com/photos/31630962/pexels-photo-31630962/free-photo-of-modern-architecture-in-tapiola.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description:
      "Tapiola is a garden city with modernist architecture, green spaces, and good services. It offers a balance of urban amenities and natural surroundings.",
    factors: {
      airQuality: {
        name: "Air Quality",
        score: 85,
        description: "Good air quality with many green spaces",
      },
      noiseLevel: {
        name: "Noise Level",
        score: 75,
        description: "Relatively quiet with some traffic around main roads",
      },
      transportation: {
        name: "Transportation",
        score: 80,
        description: "Good public transport with metro and bus connections",
      },
      diversity: {
        name: "Diversity",
        score: 70,
        description: "Growing international community with tech companies nearby",
      },
      wildlife: {
        name: "Wildlife",
        score: 50,
        description: "Some wildlife in parks and green corridors",
      },
      incomeLevel: {
        name: "Income Level",
        score: 80,
        description: "Higher income area with diverse housing options",
      },
      languages: {
        finnish: 80,
        swedish: 5,
        english: 10,
        other: 5,
      },
      recreationOptions: ["Shopping", "Cultural center", "Sports facilities", "Parks", "Cycling"],
    },
  },
  {
    id: "pispala-tampere",
    name: "Pispala",
    city: "Tampere",
    imageUrl: "https://images.pexels.com/photos/31630963/pexels-photo-31630963/free-photo-of-wooden-houses-in-pispala.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description:
      "Pispala is built on a ridge between two lakes, offering stunning views. It has a bohemian atmosphere with colorful wooden houses and a strong community spirit.",
    factors: {
      airQuality: {
        name: "Air Quality",
        score: 80,
        description: "Good air quality with lake breezes",
      },
      noiseLevel: {
        name: "Noise Level",
        score: 75,
        description: "Quiet residential area away from major traffic",
      },
      transportation: {
        name: "Transportation",
        score: 65,
        description: "Bus connections to city center, hilly terrain can be challenging",
      },
      diversity: {
        name: "Diversity",
        score: 55,
        description: "Mix of traditional residents and newcomers",
      },
      wildlife: {
        name: "Wildlife",
        score: 65,
        description: "Birds and small mammals in green spaces and lakeshores",
      },
      incomeLevel: {
        name: "Income Level",
        score: 60,
        description: "Mixed income levels with increasing property values",
      },
      languages: {
        finnish: 90,
        swedish: 1,
        english: 7,
        other: 2,
      },
      recreationOptions: ["Swimming", "Sauna", "Community gardens", "Art events", "Walking trails"],
    },
  }
];

export const getNeighborhoodsByCity = (city: string): Neighborhood[] => {
  return mockNeighborhoods.filter(
    (n) => n.city.toLowerCase() === city.toLowerCase()
  );
};

export const getNeighborhoodById = (id: string): Neighborhood | undefined => {
  return mockNeighborhoods.find((n) => n.id === id);
};
