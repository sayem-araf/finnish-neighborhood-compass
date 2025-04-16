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
  },
  {
    id: "palosaari-vaasa",
    name: "Palosaari",
    city: "Vaasa",
    imageUrl: "https://images.unsplash.com/photo-1595429035839-c99c298ffdde",
    description:
      "Palosaari is a vibrant university district with a coastal location. It blends historic wooden buildings with modern architecture and has a youthful, international atmosphere due to the nearby university.",
    factors: {
      airQuality: {
        name: "Air Quality",
        score: 88,
        description: "Excellent air quality due to coastal winds and low industrial activity",
      },
      noiseLevel: {
        name: "Noise Level",
        score: 65,
        description: "Moderate noise levels with student activity and some traffic",
      },
      transportation: {
        name: "Transportation",
        score: 75,
        description: "Good bus connections and cycling infrastructure",
      },
      diversity: {
        name: "Diversity",
        score: 80,
        description: "High international diversity due to university students and staff",
      },
      wildlife: {
        name: "Wildlife",
        score: 55,
        description: "Coastal birds and modest urban wildlife in green areas",
      },
      incomeLevel: {
        name: "Income Level",
        score: 65,
        description: "Mixed income levels with student housing and family apartments",
      },
      languages: {
        finnish: 60,
        swedish: 25,
        english: 12,
        other: 3,
      },
      recreationOptions: ["Beach activities", "University events", "Cafés", "Coastal trails", "Student organizations"],
    },
  },
  {
    id: "saaristokaupunki-kuopio",
    name: "Saaristokaupunki",
    city: "Kuopio",
    imageUrl: "https://images.unsplash.com/photo-1563460716037-460a3ad24ba9",
    description:
      "Saaristokaupunki (Archipelago City) is a modern residential area built around natural waterways. It offers lakeside living with contemporary architecture and excellent outdoor recreation opportunities.",
    factors: {
      airQuality: {
        name: "Air Quality",
        score: 92,
        description: "Very clean air with minimal pollution sources and lake breezes",
      },
      noiseLevel: {
        name: "Noise Level",
        score: 85,
        description: "Quiet residential area with water buffers reducing sound",
      },
      transportation: {
        name: "Transportation",
        score: 60,
        description: "Regular bus connections to city center, car beneficial",
      },
      diversity: {
        name: "Diversity",
        score: 45,
        description: "Predominantly Finnish residents with some international families",
      },
      wildlife: {
        name: "Wildlife",
        score: 80,
        description: "Rich aquatic and forest wildlife with birds, fish, and small mammals",
      },
      incomeLevel: {
        name: "Income Level",
        score: 75,
        description: "Above average income with newer family homes",
      },
      languages: {
        finnish: 93,
        swedish: 1,
        english: 5,
        other: 1,
      },
      recreationOptions: ["Boating", "Fishing", "Nature trails", "Winter ice activities", "Family parks"],
    },
  },
  {
    id: "runosmaki-turku",
    name: "Runosmäki",
    city: "Turku",
    imageUrl: "https://images.unsplash.com/photo-1547565377-73f3438a81f5",
    description:
      "Runosmäki is one of Turku's largest suburbs with diverse housing options. It offers affordable living with good services and green spaces within reach of the city center.",
    factors: {
      airQuality: {
        name: "Air Quality",
        score: 70,
        description: "Decent air quality with some impact from nearby highways",
      },
      noiseLevel: {
        name: "Noise Level",
        score: 60,
        description: "Moderate noise levels with residential calm in interior streets",
      },
      transportation: {
        name: "Transportation",
        score: 80,
        description: "Well-connected with frequent bus service to city center",
      },
      diversity: {
        name: "Diversity",
        score: 65,
        description: "Growing multicultural community with various income levels",
      },
      wildlife: {
        name: "Wildlife",
        score: 45,
        description: "Some urban wildlife in parks and surrounding forests",
      },
      incomeLevel: {
        name: "Income Level",
        score: 55,
        description: "Mixed income levels with affordable housing options",
      },
      languages: {
        finnish: 80,
        swedish: 5,
        english: 5,
        other: 10,
      },
      recreationOptions: ["Sports fields", "Community center", "Forest paths", "Playgrounds", "Indoor activities"],
    },
  },
  {
    id: "kampustulli-oulu",
    name: "Tulli & Campus",
    city: "Oulu",
    imageUrl: "https://images.unsplash.com/photo-1564501049559-0b54b6f0dc1a",
    description:
      "The Tulli and University district blends heritage buildings with modern tech facilities. It's the intellectual and innovation heart of Oulu with a vibrant atmosphere.",
    factors: {
      airQuality: {
        name: "Air Quality",
        score: 82,
        description: "Good air quality with efficient city planning and green initiatives",
      },
      noiseLevel: {
        name: "Noise Level",
        score: 55,
        description: "Moderately active area with student life and research activities",
      },
      transportation: {
        name: "Transportation",
        score: 90,
        description: "Excellent cycling network and public transport connections",
      },
      diversity: {
        name: "Diversity",
        score: 75,
        description: "International academic and tech community with various backgrounds",
      },
      wildlife: {
        name: "Wildlife",
        score: 30,
        description: "Limited wildlife due to central location, some birds and small animals",
      },
      incomeLevel: {
        name: "Income Level",
        score: 70,
        description: "Mix of student accommodation and professional housing",
      },
      languages: {
        finnish: 75,
        swedish: 2,
        english: 18,
        other: 5,
      },
      recreationOptions: ["Tech events", "University facilities", "Creative spaces", "Cafés", "Winter activities"],
    },
  },
  {
    id: "lutakko-jyvaskyla",
    name: "Lutakko",
    city: "Jyväskylä",
    imageUrl: "https://images.unsplash.com/photo-1588935365434-e44c34bf7355",
    description:
      "Lutakko is a transformed industrial waterfront area now featuring modern apartments, cultural venues, and office spaces. It combines urban living with lakeside views and amenities.",
    factors: {
      airQuality: {
        name: "Air Quality",
        score: 75,
        description: "Good air quality with occasional impact from nearby traffic",
      },
      noiseLevel: {
        name: "Noise Level",
        score: 50,
        description: "Active area with events, concerts and railway proximity",
      },
      transportation: {
        name: "Transportation",
        score: 85,
        description: "Central location with excellent connections and walking distance to center",
      },
      diversity: {
        name: "Diversity",
        score: 70,
        description: "Modern and diverse population with students and professionals",
      },
      wildlife: {
        name: "Wildlife",
        score: 35,
        description: "Urban wildlife adapted to lakeside environment",
      },
      incomeLevel: {
        name: "Income Level",
        score: 75,
        description: "Higher than average with modern apartments and facilities",
      },
      languages: {
        finnish: 83,
        swedish: 2,
        english: 12,
        other: 3,
      },
      recreationOptions: ["Concert venues", "Lakeside promenade", "Urban culture", "Restaurants", "Water sports"],
    },
  },
  {
    id: "porvoo-old-town",
    name: "Old Town",
    city: "Porvoo",
    imageUrl: "https://images.unsplash.com/photo-1564760055775-d63b17a55c44",
    description:
      "Porvoo's Old Town is a historic district with colorful wooden houses and cobblestone streets. It offers charming living with strong cultural heritage and tourism influence.",
    factors: {
      airQuality: {
        name: "Air Quality",
        score: 78,
        description: "Good air quality with some impact from tourism traffic",
      },
      noiseLevel: {
        name: "Noise Level",
        score: 60,
        description: "Quiet during off-season, busier with tourists in summer",
      },
      transportation: {
        name: "Transportation",
        score: 70,
        description: "Good bus connections to Helsinki, walkable local area",
      },
      diversity: {
        name: "Diversity",
        score: 50,
        description: "Traditional Finnish and Swedish-speaking community with tourism influence",
      },
      wildlife: {
        name: "Wildlife",
        score: 45,
        description: "Urban birds and riverside wildlife",
      },
      incomeLevel: {
        name: "Income Level",
        score: 70,
        description: "Mixed with historic homes and tourism-related businesses",
      },
      languages: {
        finnish: 65,
        swedish: 30,
        english: 4,
        other: 1,
      },
      recreationOptions: ["Historical sites", "Riverside walks", "Artisan shops", "Cafés", "Cultural events"],
    },
  },
  {
    id: "rauma-old-town",
    name: "Vanha Rauma",
    city: "Rauma",
    imageUrl: "https://images.unsplash.com/photo-1561542320-9a18cd340469",
    description:
      "Vanha Rauma (Old Rauma) is a UNESCO World Heritage site with well-preserved wooden buildings. It offers unique historical living with a strong sense of community and craft tradition.",
    factors: {
      airQuality: {
        name: "Air Quality",
        score: 85,
        description: "Clean coastal air with minimal industrial impact",
      },
      noiseLevel: {
        name: "Noise Level",
        score: 70,
        description: "Generally quiet with seasonal tourism activity",
      },
      transportation: {
        name: "Transportation",
        score: 65,
        description: "Local bus services and walkable historic center",
      },
      diversity: {
        name: "Diversity",
        score: 40,
        description: "Traditional Finnish community with historical roots",
      },
      wildlife: {
        name: "Wildlife",
        score: 40,
        description: "Urban wildlife and coastal birds",
      },
      incomeLevel: {
        name: "Income Level",
        score: 65,
        description: "Mixed with heritage properties and tourism businesses",
      },
      languages: {
        finnish: 92,
        swedish: 3,
        english: 4,
        other: 1,
      },
      recreationOptions: ["Heritage sites", "Lace making", "Maritime activities", "Cultural events", "Traditional crafts"],
    },
  },
  {
    id: "rovaniemi-center",
    name: "City Center",
    city: "Rovaniemi",
    imageUrl: "https://images.unsplash.com/photo-1518094279606-7c51244ae4d9",
    description:
      "Rovaniemi city center is the capital of Finnish Lapland, offering modern Arctic living. It combines northern nature with urban amenities and is known as the official hometown of Santa Claus.",
    factors: {
      airQuality: {
        name: "Air Quality",
        score: 90,
        description: "Clean Arctic air with excellent quality throughout the year",
      },
      noiseLevel: {
        name: "Noise Level",
        score: 65,
        description: "Generally quiet with seasonal tourism peaks",
      },
      transportation: {
        name: "Transportation",
        score: 75,
        description: "Good local bus network and international connections",
      },
      diversity: {
        name: "Diversity",
        score: 60,
        description: "Growing international community with tourism influence",
      },
      wildlife: {
        name: "Wildlife",
        score: 70,
        description: "Urban wildlife with proximity to northern nature",
      },
      incomeLevel: {
        name: "Income Level",
        score: 65,
        description: "Tourism economy with seasonal variations",
      },
      languages: {
        finnish: 85,
        swedish: 1,
        english: 10,
        other: 4,
      },
      recreationOptions: ["Northern lights viewing", "Winter sports", "Arctic tourism", "Nature activities", "Cultural experiences"],
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
