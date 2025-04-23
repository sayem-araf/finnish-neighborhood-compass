import { Neighborhood } from "../types/neighborhood";

export const mockNeighborhoods: Neighborhood[] = [
  {
    id: "1",
    name: "Kallio",
    city: "Helsinki",
    imageUrl: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=80&w=2071&auto=format&fit=crop",
    description: "A vibrant, diverse neighborhood known for its nightlife, cultural events, and artistic community.",
    employmentStats: {
      employmentRate: 85,
      averageSalary: 45000,
      majorIndustries: [
        { name: "Technology", percentage: 30 },
        { name: "Creative Arts", percentage: 25 },
        { name: "Hospitality", percentage: 20 },
        { name: "Education", percentage: 15 },
        { name: "Healthcare", percentage: 10 }
      ]
    },
    factors: {
      airQuality: {
        name: "Air Quality",
        score: 85,
        unit: "µg/m³",
        description: "Good air quality with low pollution levels"
      },
      noiseLevel: {
        name: "Noise Level",
        score: 65,
        description: "Moderate noise levels, especially during weekends"
      },
      transportation: {
        name: "Transportation",
        score: 90,
        description: "Excellent public transport connections"
      },
      diversity: {
        name: "Diversity",
        score: 95,
        description: "Very diverse population with many international residents"
      },
      wildlife: {
        name: "Wildlife",
        score: 40,
        description: "Limited wildlife due to urban setting"
      },
      incomeLevel: {
        name: "Income Level",
        score: 70,
        description: "Mixed income levels with some affordable housing"
      },
      languages: {
        finnish: 60,
        swedish: 5,
        english: 25,
        other: 10
      },
      recreationOptions: [
        "Nightlife",
        "Cultural Events",
        "Art Galleries",
        "Parks",
        "Restaurants",
        "Cafes",
        "Live Music Venues"
      ],
      trafficCongestion: {
        level: "moderate",
        peakHours: [
          {
            day: "monday",
            timeRange: "7:00-9:00",
            congestionLevel: "high"
          },
          {
            day: "friday",
            timeRange: "16:00-18:00",
            congestionLevel: "high"
          }
        ],
        description: "Moderate traffic congestion during rush hours, especially on main streets"
      }
    },
    developmentPlans: [
      {
        title: "Kallio Cultural Center",
        description: "New cultural center with performance spaces and art galleries",
        timeline: "2024-2026",
        status: "planned",
        impact: [
          "Enhanced cultural offerings",
          "New employment opportunities",
          "Increased property values"
        ]
      },
      {
        title: "Kallio Park Renovation",
        description: "Major renovation of Kallio Park including new playground and sports facilities",
        timeline: "2023-2024",
        status: "in-progress",
        impact: [
          "Improved recreational facilities",
          "Better green spaces",
          "Enhanced community gathering spaces"
        ]
      }
    ]
  },
  {
    id: "2",
    name: "Töölö",
    city: "Helsinki",
    imageUrl: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop",
    description: "An upscale residential area near the city center, known for its beautiful architecture and proximity to cultural institutions.",
    employmentStats: {
      employmentRate: 90,
      averageSalary: 65000,
      majorIndustries: [
        { name: "Finance", percentage: 35 },
        { name: "Technology", percentage: 25 },
        { name: "Healthcare", percentage: 20 },
        { name: "Education", percentage: 15 },
        { name: "Government", percentage: 5 }
      ]
    },
    factors: {
      airQuality: {
        name: "Air Quality",
        score: 90,
        unit: "µg/m³",
        description: "Excellent air quality with very low pollution levels"
      },
      noiseLevel: {
        name: "Noise Level",
        score: 75,
        description: "Generally quiet residential area"
      },
      transportation: {
        name: "Transportation",
        score: 85,
        description: "Good public transport connections"
      },
      diversity: {
        name: "Diversity",
        score: 70,
        description: "Moderately diverse population"
      },
      wildlife: {
        name: "Wildlife",
        score: 60,
        description: "Some urban wildlife in parks"
      },
      incomeLevel: {
        name: "Income Level",
        score: 85,
        description: "High income levels with premium housing"
      },
      languages: {
        finnish: 70,
        swedish: 10,
        english: 15,
        other: 5
      },
      recreationOptions: [
        "Parks",
        "Museums",
        "Theaters",
        "Restaurants",
        "Cafes",
        "Sports Facilities",
        "Cultural Events"
      ],
      trafficCongestion: {
        level: "low",
        peakHours: [
          {
            day: "monday",
            timeRange: "8:00-9:00",
            congestionLevel: "moderate"
          }
        ],
        description: "Low traffic congestion with occasional moderate levels during morning rush hour"
      }
    },
    developmentPlans: [
      {
        title: "Töölö Bay Waterfront Development",
        description: "Development of new residential and commercial spaces along Töölö Bay",
        timeline: "2024-2027",
        status: "planned",
        impact: [
          "New housing options",
          "Enhanced waterfront access",
          "New commercial spaces"
        ]
      },
      {
        title: "Töölö Sports Center Expansion",
        description: "Expansion of existing sports facilities with new indoor and outdoor spaces",
        timeline: "2023-2025",
        status: "in-progress",
        impact: [
          "More sports facilities",
          "Better training conditions",
          "Increased capacity for events"
        ]
      }
    ]
  },
  {
    id: "3",
    name: "Nuuksio",
    city: "Espoo",
    imageUrl: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop",
    description: "A nature-rich area with forests and lakes, perfect for outdoor activities and peaceful living.",
    employmentStats: {
      employmentRate: 80,
      averageSalary: 55000,
      majorIndustries: [
        { name: "Technology", percentage: 40 },
        { name: "Education", percentage: 20 },
        { name: "Healthcare", percentage: 15 },
        { name: "Tourism", percentage: 15 },
        { name: "Retail", percentage: 10 }
      ]
    },
    factors: {
      airQuality: {
        name: "Air Quality",
        score: 95,
        unit: "µg/m³",
        description: "Excellent air quality with very low pollution levels"
      },
      noiseLevel: {
        name: "Noise Level",
        score: 90,
        description: "Very quiet area with minimal noise pollution"
      },
      transportation: {
        name: "Transportation",
        score: 70,
        description: "Limited public transport, car-dependent"
      },
      diversity: {
        name: "Diversity",
        score: 60,
        description: "Moderately diverse population"
      },
      wildlife: {
        name: "Wildlife",
        score: 95,
        description: "Rich wildlife with many species"
      },
      incomeLevel: {
        name: "Income Level",
        score: 75,
        description: "Above average income levels"
      },
      languages: {
        finnish: 75,
        swedish: 5,
        english: 15,
        other: 5
      },
      recreationOptions: [
        "Hiking",
        "Camping",
        "Fishing",
        "Bird Watching",
        "Nature Trails",
        "Lakes",
        "Forests"
      ],
      trafficCongestion: {
        level: "low",
        peakHours: [
          {
            day: "monday",
            timeRange: "7:30-8:30",
            congestionLevel: "moderate"
          }
        ],
        description: "Low traffic congestion with occasional moderate levels during morning rush hour"
      }
    },
    developmentPlans: [
      {
        title: "Nuuksio National Park Visitor Center",
        description: "New visitor center with educational facilities and nature trails",
        timeline: "2024-2025",
        status: "planned",
        impact: [
          "Better visitor experience",
          "Enhanced educational opportunities",
          "Improved nature conservation"
        ]
      },
      {
        title: "Nuuksio Lakefront Development",
        description: "Development of new residential areas with lake access",
        timeline: "2023-2026",
        status: "in-progress",
        impact: [
          "New housing options",
          "Enhanced lake access",
          "Improved recreational facilities"
        ]
      }
    ]
  },
  {
    id: "4",
    name: "Tapiola",
    city: "Espoo",
    imageUrl: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop",
    description: "A planned garden city with modernist architecture, known for its excellent urban planning and quality of life.",
    employmentStats: {
      employmentRate: 88,
      averageSalary: 60000,
      majorIndustries: [
        { name: "Technology", percentage: 45 },
        { name: "Finance", percentage: 20 },
        { name: "Education", percentage: 15 },
        { name: "Healthcare", percentage: 10 },
        { name: "Retail", percentage: 10 }
      ]
    },
    factors: {
      airQuality: {
        name: "Air Quality",
        score: 88,
        unit: "µg/m³",
        description: "Very good air quality with low pollution levels"
      },
      noiseLevel: {
        name: "Noise Level",
        score: 80,
        description: "Generally quiet area with good noise insulation"
      },
      transportation: {
        name: "Transportation",
        score: 85,
        description: "Excellent public transport connections"
      },
      diversity: {
        name: "Diversity",
        score: 75,
        description: "Diverse population with many international residents"
      },
      wildlife: {
        name: "Wildlife",
        score: 70,
        description: "Good amount of urban wildlife in parks"
      },
      incomeLevel: {
        name: "Income Level",
        score: 80,
        description: "High income levels with premium housing"
      },
      languages: {
        finnish: 65,
        swedish: 5,
        english: 25,
        other: 5
      },
      recreationOptions: [
        "Shopping Centers",
        "Parks",
        "Cultural Events",
        "Restaurants",
        "Cafes",
        "Sports Facilities",
        "Art Galleries"
      ],
      trafficCongestion: {
        level: "moderate",
        peakHours: [
          {
            day: "monday",
            timeRange: "7:30-9:00",
            congestionLevel: "high"
          },
          {
            day: "friday",
            timeRange: "16:00-18:00",
            congestionLevel: "high"
          }
        ],
        description: "Moderate traffic congestion during rush hours, especially around shopping centers"
      }
    },
    developmentPlans: [
      {
        title: "Tapiola Center Renovation",
        description: "Major renovation of Tapiola Center shopping mall and surrounding areas",
        timeline: "2024-2026",
        status: "planned",
        impact: [
          "Modernized shopping experience",
          "New commercial spaces",
          "Improved pedestrian areas"
        ]
      },
      {
        title: "Tapiola Park Enhancement",
        description: "Enhancement of Tapiola Park with new recreational facilities",
        timeline: "2023-2024",
        status: "in-progress",
        impact: [
          "New recreational facilities",
          "Improved green spaces",
          "Better community gathering spaces"
        ]
      }
    ]
  },
  {
    id: "5",
    name: "Pispala",
    city: "Tampere",
    imageUrl: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2070&auto=format&fit=crop",
    description: "A historic neighborhood with wooden houses and a strong sense of community, known for its artistic atmosphere.",
    employmentStats: {
      employmentRate: 82,
      averageSalary: 48000,
      majorIndustries: [
        { name: "Creative Arts", percentage: 30 },
        { name: "Technology", percentage: 25 },
        { name: "Education", percentage: 20 },
        { name: "Healthcare", percentage: 15 },
        { name: "Retail", percentage: 10 }
      ]
    },
    factors: {
      airQuality: {
        name: "Air Quality",
        score: 82,
        unit: "µg/m³",
        description: "Good air quality with moderate pollution levels"
      },
      noiseLevel: {
        name: "Noise Level",
        score: 70,
        description: "Moderate noise levels, especially during cultural events"
      },
      transportation: {
        name: "Transportation",
        score: 75,
        description: "Good public transport connections"
      },
      diversity: {
        name: "Diversity",
        score: 85,
        description: "Very diverse population with strong artistic community"
      },
      wildlife: {
        name: "Wildlife",
        score: 65,
        description: "Moderate wildlife presence in parks"
      },
      incomeLevel: {
        name: "Income Level",
        score: 65,
        description: "Mixed income levels with some affordable housing"
      },
      languages: {
        finnish: 70,
        swedish: 5,
        english: 20,
        other: 5
      },
      recreationOptions: [
        "Cultural Events",
        "Art Galleries",
        "Parks",
        "Restaurants",
        "Cafes",
        "Live Music Venues",
        "Community Events"
      ],
      trafficCongestion: {
        level: "low",
        peakHours: [
          {
            day: "monday",
            timeRange: "8:00-9:00",
            congestionLevel: "moderate"
          }
        ],
        description: "Low traffic congestion with occasional moderate levels during morning rush hour"
      }
    },
    developmentPlans: [
      {
        title: "Pispala Cultural Center",
        description: "New cultural center focusing on local arts and community events",
        timeline: "2024-2026",
        status: "planned",
        impact: [
          "Enhanced cultural offerings",
          "New community spaces",
          "Support for local artists"
        ]
      },
      {
        title: "Pispala Historic District Preservation",
        description: "Preservation and restoration of historic wooden houses",
        timeline: "2023-2025",
        status: "in-progress",
        impact: [
          "Preserved cultural heritage",
          "Improved housing conditions",
          "Enhanced neighborhood character"
        ]
      }
    ]
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
