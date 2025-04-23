import { Neighborhood } from "../types/neighborhood";

export const mockNeighborhoods: Neighborhood[] = [
  {
    id: "1",
    name: "Kallio",
    city: "Helsinki",
    imageUrl: "https://kiinteistouutiset.fi/wp-content/uploads/2024/06/shutterstock_Helsinki-Hakaniemi-Kallio-Ympyratalo-2023.jpg",
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
    imageUrl: "https://www.ekerakennus.fi/wp-content/uploads/2023/09/Ilmakuva-Castellum_1200x800-800x533.jpg",
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
  },
    {
      "id": "100",
      "name": "Palosaari",
      "city": "Vaasa",
      "imageUrl": "https://images.unsplash.com/photo-1683538857070-5573024b9566?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "description": "A scenic island neighborhood with university campus, charming old wooden houses, and coastal views of the Gulf of Bothnia.",
      "employmentStats": {
        "employmentRate": 84,
        "averageSalary": 46000,
        "majorIndustries": [
          { "name": "Education", "percentage": 35 },
          { "name": "Energy Technology", "percentage": 25 },
          { "name": "Maritime Services", "percentage": 15 },
          { "name": "Healthcare", "percentage": 15 },
          { "name": "Retail", "percentage": 10 }
        ]
      },
      "factors": {
        "airQuality": {
          "name": "Air Quality",
          "score": 90,
          "unit": "µg/m³",
          "description": "Excellent air quality with sea breezes providing clean air"
        },
        "noiseLevel": {
          "name": "Noise Level",
          "score": 75,
          "description": "Generally quiet with occasional student events"
        },
        "transportation": {
          "name": "Transportation",
          "score": 70,
          "description": "Good bus connections and bike-friendly routes"
        },
        "diversity": {
          "name": "Diversity",
          "score": 75,
          "description": "Diverse population with students from various countries"
        },
        "wildlife": {
          "name": "Wildlife",
          "score": 70,
          "description": "Good coastal wildlife with bird watching opportunities"
        },
        "incomeLevel": {
          "name": "Income Level",
          "score": 65,
          "description": "Mixed income levels with affordable student housing"
        },
        "languages": {
          "finnish": 60,
          "swedish": 30,
          "english": 8,
          "other": 2
        },
        "recreationOptions": [
          "Beach Activities",
          "University Sports Facilities",
          "Cycling Paths",
          "Cafes",
          "Winter Ice Skating",
          "Student Events",
          "Community Gardens"
        ],
        "trafficCongestion": {
          "level": "low",
          "peakHours": [
            {
              "day": "weekday",
              "timeRange": "8:00-9:00",
              "congestionLevel": "low"
            }
          ],
          "description": "Minimal traffic congestion throughout the day"
        }
      },
      "developmentPlans": [
        {
          "title": "Palosaari Innovation Hub",
          "description": "New technology and innovation center connected to the university",
          "timeline": "2024-2026",
          "status": "planned",
          "impact": [
            "Research opportunities",
            "Job creation",
            "Student engagement"
          ]
        },
        {
          "title": "Coastal Pathway Extension",
          "description": "Extended recreational pathway along the shoreline",
          "timeline": "2023-2025",
          "status": "in-progress",
          "impact": [
            "Improved recreational spaces",
            "Better coastal access",
            "Enhanced tourism potential"
          ]
        }
      ]
    },
    {
      "id": "101",
      "name": "Lutakko",
      "city": "Jyväskylä",
      "imageUrl": "https://vesitaksi.fi/wp-content/uploads/2022/06/jyvaskyla-lutakko.jpg",
      "description": "A revitalized former industrial area transformed into a modern residential neighborhood with lake views and cultural venues.",
      "employmentStats": {
        "employmentRate": 86,
        "averageSalary": 44000,
        "majorIndustries": [
          { "name": "Technology", "percentage": 30 },
          { "name": "Education", "percentage": 25 },
          { "name": "Creative Arts", "percentage": 20 },
          { "name": "Hospitality", "percentage": 15 },
          { "name": "Construction", "percentage": 10 }
        ]
      },
      "factors": {
        "airQuality": {
          "name": "Air Quality",
          "score": 83,
          "unit": "µg/m³",
          "description": "Good air quality with minimal industrial pollution"
        },
        "noiseLevel": {
          "name": "Noise Level",
          "score": 65,
          "description": "Moderate noise from concert venue and nightlife"
        },
        "transportation": {
          "name": "Transportation",
          "score": 80,
          "description": "Excellent pedestrian infrastructure and good bus connections"
        },
        "diversity": {
          "name": "Diversity",
          "score": 78,
          "description": "Diverse with students and international technology workers"
        },
        "wildlife": {
          "name": "Wildlife",
          "score": 60,
          "description": "Limited urban wildlife but good lakefront ecosystem"
        },
        "incomeLevel": {
          "name": "Income Level",
          "score": 75,
          "description": "Mixed income with trend toward higher-end apartments"
        },
        "languages": {
          "finnish": 85,
          "swedish": 3,
          "english": 10,
          "other": 2
        },
        "recreationOptions": [
          "Waterfront Parks",
          "Concert Venue",
          "Restaurants",
          "Modern Art Museum",
          "Lakeside Sauna",
          "Running Trails",
          "Winter Ice Skating"
        ],
        "trafficCongestion": {
          "level": "moderate",
          "peakHours": [
            {
              "day": "friday",
              "timeRange": "16:00-18:00",
              "congestionLevel": "high"
            }
          ],
          "description": "Generally low traffic except during events at Paviljonki Congress Center"
        }
      },
      "developmentPlans": [
        {
          "title": "Lutakko Tech Campus",
          "description": "Expansion of technology office spaces and startup incubators",
          "timeline": "2024-2027",
          "status": "planned",
          "impact": [
            "Job growth",
            "Innovation ecosystem",
            "International talent attraction"
          ]
        },
        {
          "title": "Waterfront Promenade Phase II",
          "description": "Extension of the pedestrian-friendly lakefront area",
          "timeline": "2023-2025",
          "status": "in-progress",
          "impact": [
            "Improved public spaces",
            "New cafes and restaurants",
            "Enhanced property values"
          ]
        }
      ]
    },
    {
      "id": "102",
      "name": "Puijonlaakso",
      "city": "Kuopio",
      "imageUrl": "https://cms.globalconnect.net/app/uploads/sites/2/2024/06/kaupunkikuva_kuopio-1024x683.jpg",
      "description": "A green neighborhood near Puijo hill with excellent sports facilities, hospital complex, and convenient location close to nature.",
      "employmentStats": {
        "employmentRate": 88,
        "averageSalary": 47000,
        "majorIndustries": [
          { "name": "Healthcare", "percentage": 40 },
          { "name": "Research", "percentage": 20 },
          { "name": "Education", "percentage": 15 },
          { "name": "Sports & Recreation", "percentage": 15 },
          { "name": "Retail", "percentage": 10 }
        ]
      },
      "factors": {
        "airQuality": {
          "name": "Air Quality",
          "score": 88,
          "unit": "µg/m³",
          "description": "Excellent air quality with proximity to forests"
        },
        "noiseLevel": {
          "name": "Noise Level",
          "score": 80,
          "description": "Quiet residential area except during sports events"
        },
        "transportation": {
          "name": "Transportation",
          "score": 75,
          "description": "Good bus connections and road infrastructure"
        },
        "diversity": {
          "name": "Diversity",
          "score": 70,
          "description": "Growing diversity with international healthcare professionals"
        },
        "wildlife": {
          "name": "Wildlife",
          "score": 85,
          "description": "Rich wildlife with deer, birds, and forest animals nearby"
        },
        "incomeLevel": {
          "name": "Income Level",
          "score": 80,
          "description": "Above average income with many healthcare professionals"
        },
        "languages": {
          "finnish": 90,
          "swedish": 2,
          "english": 7,
          "other": 1
        },
        "recreationOptions": [
          "Ski Jumping Center",
          "Cross-Country Ski Trails",
          "Hospital Park",
          "Sports Fields",
          "Nature Trails",
          "Swimming Hall",
          "Observation Tower"
        ],
        "trafficCongestion": {
          "level": "low",
          "peakHours": [
            {
              "day": "weekday",
              "timeRange": "7:30-8:30",
              "congestionLevel": "moderate"
            }
          ],
          "description": "Generally smooth traffic with congestion during hospital shift changes"
        }
      },
      "developmentPlans": [
        {
          "title": "Puijo Medical Innovation Center",
          "description": "Research and development facility adjacent to the university hospital",
          "timeline": "2025-2027",
          "status": "planned",
          "impact": [
            "Research opportunities",
            "Specialized healthcare services",
            "International collaboration"
          ]
        },
        {
          "title": "Sports Complex Renovation",
          "description": "Modernization of winter sports facilities including ski jump",
          "timeline": "2024-2026",
          "status": "in-progress",
          "impact": [
            "Enhanced sports tourism",
            "Training opportunities",
            "International competitions"
          ]
        }
      ]
    },
    {
      "id": "103",
      "name": "Korkalovaara",
      "city": "Rovaniemi",
      "imageUrl": "https://das.fi/loader.aspx?id=b6b9e115-66d8-443f-8a8a-38df9ef710ff",
      "description": "A residential hillside neighborhood with good views, family-friendly atmosphere, and proximity to recreational areas and Arctic Circle attractions.",
      "employmentStats": {
        "employmentRate": 79,
        "averageSalary": 42000,
        "majorIndustries": [
          { "name": "Tourism", "percentage": 35 },
          { "name": "Education", "percentage": 20 },
          { "name": "Public Administration", "percentage": 20 },
          { "name": "Retail", "percentage": 15 },
          { "name": "Construction", "percentage": 10 }
        ]
      },
      "factors": {
        "airQuality": {
          "name": "Air Quality",
          "score": 92,
          "unit": "µg/m³",
          "description": "Pristine Arctic air quality with minimal pollution"
        },
        "noiseLevel": {
          "name": "Noise Level",
          "score": 85,
          "description": "Very quiet residential area with minimal traffic noise"
        },
        "transportation": {
          "name": "Transportation",
          "score": 65,
          "description": "Limited public transport but good road connections"
        },
        "diversity": {
          "name": "Diversity",
          "score": 60,
          "description": "Growing diversity with seasonal tourism workers"
        },
        "wildlife": {
          "name": "Wildlife",
          "score": 80,
          "description": "Rich northern wildlife with reindeer occasionally seen"
        },
        "incomeLevel": {
          "name": "Income Level",
          "score": 70,
          "description": "Middle-income area with affordable family housing"
        },
        "languages": {
          "finnish": 95,
          "swedish": 1,
          "english": 3,
          "other": 1
        },
        "recreationOptions": [
          "Cross-Country Skiing",
          "Northern Lights Viewing Spots",
          "Hiking Trails",
          "Family Parks",
          "Snowmobile Routes",
          "Seasonal Berry Picking",
          "Winter Activities"
        ],
        "trafficCongestion": {
          "level": "very low",
          "peakHours": [
            {
              "day": "weekday",
              "timeRange": "8:00-9:00",
              "congestionLevel": "low"
            }
          ],
          "description": "Minimal traffic even during peak hours"
        }
      },
      "developmentPlans": [
        {
          "title": "Northern Lights Observation Platform",
          "description": "Public viewing area with facilities for aurora watching",
          "timeline": "2024-2025",
          "status": "planned",
          "impact": [
            "Enhanced tourism infrastructure",
            "Local attraction",
            "Educational opportunities"
          ]
        },
        {
          "title": "Winter Recreation Center",
          "description": "Indoor and outdoor winter sports facilities",
          "timeline": "2025-2027",
          "status": "proposed",
          "impact": [
            "Year-round recreation options",
            "Community gathering space",
            "Health and wellness promotion"
          ]
        }
      ]
    },
    {
      "id": "104",
      "name": "Runosmäki",
      "city": "Turku",
      "imageUrl": "https://www.ts.fi/static/content/pic_5_4715245_k411606_1200.jpg",
      "description": "A diverse residential district with a mix of apartment buildings, good recreational spaces, and strong community initiatives.",
      "employmentStats": {
        "employmentRate": 80,
        "averageSalary": 43000,
        "majorIndustries": [
          { "name": "Manufacturing", "percentage": 30 },
          { "name": "Healthcare", "percentage": 25 },
          { "name": "Education", "percentage": 20 },
          { "name": "Retail", "percentage": 15 },
          { "name": "Transportation", "percentage": 10 }
        ]
      },
      "factors": {
        "airQuality": {
          "name": "Air Quality",
          "score": 78,
          "unit": "µg/m³",
          "description": "Good air quality with some impact from nearby highways"
        },
        "noiseLevel": {
          "name": "Noise Level",
          "score": 75,
          "description": "Moderate noise levels with good insulation in newer buildings"
        },
        "transportation": {
          "name": "Transportation",
          "score": 85,
          "description": "Excellent bus connections to city center and university"
        },
        "diversity": {
          "name": "Diversity",
          "score": 80,
          "description": "One of Turku's most multicultural neighborhoods"
        },
        "wildlife": {
          "name": "Wildlife",
          "score": 60,
          "description": "Limited urban wildlife but good park areas"
        },
        "incomeLevel": {
          "name": "Income Level",
          "score": 60,
          "description": "Lower to middle income with affordable housing options"
        },
        "languages": {
          "finnish": 80,
          "swedish": 5,
          "english": 5,
          "other": 10
        },
        "recreationOptions": [
          "Sports Fields",
          "Community Center",
          "Swimming Hall",
          "Urban Gardens",
          "Children's Playgrounds",
          "Walking Paths",
          "Cultural Events"
        ],
        "trafficCongestion": {
          "level": "moderate",
          "peakHours": [
            {
              "day": "weekday",
              "timeRange": "7:30-8:30",
              "congestionLevel": "moderate"
            }
          ],
          "description": "Good traffic flow with some congestion during commute hours"
        }
      },
      "developmentPlans": [
        {
          "title": "Runosmäki Community Hub",
          "description": "Renovation of central community spaces with new services",
          "timeline": "2024-2026",
          "status": "in-progress",
          "impact": [
            "Improved community services",
            "Social integration",
            "Cultural activities"
          ]
        },
        {
          "title": "Energy Efficiency Program",
          "description": "Retrofitting apartment buildings for better energy performance",
          "timeline": "2023-2027",
          "status": "in-progress",
          "impact": [
            "Reduced energy costs",
            "Environmental sustainability",
            "Improved living comfort"
          ]
        }
      ]
    },
    {
      "id": "105",
      "name": "Skinnarila",
      "city": "Lappeenranta",
      "imageUrl": "https://images.pexels.com/photos/3935702/pexels-photo-3935702.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "description": "A lakeside university district with a combination of student housing, technology campus, and nature areas close to Lake Saimaa.",
      "employmentStats": {
        "employmentRate": 83,
        "averageSalary": 45000,
        "majorIndustries": [
          { "name": "Education", "percentage": 40 },
          { "name": "Technology", "percentage": 30 },
          { "name": "Research", "percentage": 15 },
          { "name": "Green Energy", "percentage": 10 },
          { "name": "Services", "percentage": 5 }
        ]
      },
      "factors": {
        "airQuality": {
          "name": "Air Quality",
          "score": 87,
          "unit": "µg/m³",
          "description": "Excellent air quality with lake breezes"
        },
        "noiseLevel": {
          "name": "Noise Level",
          "score": 72,
          "description": "Generally quiet with occasional student events"
        },
        "transportation": {
          "name": "Transportation",
          "score": 70,
          "description": "Good bus connections to city center and bike-friendly"
        },
        "diversity": {
          "name": "Diversity",
          "score": 85,
          "description": "Very diverse with international students and researchers"
        },
        "wildlife": {
          "name": "Wildlife",
          "score": 75,
          "description": "Good lake and forest wildlife presence"
        },
        "incomeLevel": {
          "name": "Income Level",
          "score": 65,
          "description": "Mixed with student housing and professional residences"
        },
        "languages": {
          "finnish": 70,
          "swedish": 2,
          "english": 20,
          "other": 8
        },
        "recreationOptions": [
          "Lake Beaches",
          "University Sports Facilities",
          "Forest Trails",
          "Student Pubs",
          "Sauna Culture",
          "Winter Ice Activities",
          "Outdoor Fitness Areas"
        ],
        "trafficCongestion": {
          "level": "low",
          "peakHours": [
            {
              "day": "weekday",
              "timeRange": "8:00-9:00",
              "congestionLevel": "moderate"
            }
          ],
          "description": "Very light traffic except during university events"
        }
      },
      "developmentPlans": [
        {
          "title": "Green Technology Park",
          "description": "Expansion of sustainable energy research and business facilities",
          "timeline": "2024-2027",
          "status": "planned",
          "impact": [
            "Research opportunities",
            "Job creation",
            "International collaboration"
          ]
        },
        {
          "title": "Student Village Phase III",
          "description": "Modern student housing with communal facilities",
          "timeline": "2023-2026",
          "status": "in-progress",
          "impact": [
            "Increased student capacity",
            "Community spaces",
            "Sustainable living solutions"
          ]
        }
      ]
    },
    {
      "id": "106",
      "name": "Rajakylä",
      "city": "Oulu",
      "imageUrl": "https://sivakka.fi/wp-content/uploads/2019/11/Rajakyla_0870.jpg",
      "description": "A northern residential area with a mix of housing types, excellent winter maintenance, and strong community spirit close to technology employment centers.",
      "employmentStats": {
        "employmentRate": 85,
        "averageSalary": 46000,
        "majorIndustries": [
          { "name": "Technology", "percentage": 35 },
          { "name": "Healthcare", "percentage": 20 },
          { "name": "Education", "percentage": 15 },
          { "name": "Retail", "percentage": 15 },
          { "name": "Construction", "percentage": 15 }
        ]
      },
      "factors": {
        "airQuality": {
          "name": "Air Quality",
          "score": 89,
          "unit": "µg/m³",
          "description": "Very clean northern air with minimal pollution"
        },
        "noiseLevel": {
          "name": "Noise Level",
          "score": 82,
          "description": "Quiet residential area away from major highways"
        },
        "transportation": {
          "name": "Transportation",
          "score": 78,
          "description": "Good bus connections and extensive bike path network"
        },
        "diversity": {
          "name": "Diversity",
          "score": 75,
          "description": "Growing diversity with international tech workers"
        },
        "wildlife": {
          "name": "Wildlife",
          "score": 70,
          "description": "Moderate wildlife presence in nearby natural areas"
        },
        "incomeLevel": {
          "name": "Income Level",
          "score": 75,
          "description": "Middle to upper-middle income with technology professionals"
        },
        "languages": {
          "finnish": 90,
          "swedish": 1,
          "english": 7,
          "other": 2
        },
        "recreationOptions": [
          "Cross-Country Ski Trails",
          "Ice Hockey Rinks",
          "Community Center",
          "Children's Parks",
          "Northern Lights Viewing",
          "Winter Sports Facilities",
          "Summer Berry Picking Areas"
        ],
        "trafficCongestion": {
          "level": "low",
          "peakHours": [
            {
              "day": "weekday",
              "timeRange": "7:30-8:30",
              "congestionLevel": "moderate"
            }
          ],
          "description": "Light traffic with excellent snow removal in winter"
        }
      },
      "developmentPlans": [
        {
          "title": "North Tech Connection",
          "description": "New light rail connection to technology business park",
          "timeline": "2025-2028",
          "status": "planned",
          "impact": [
            "Improved commuting options",
            "Reduced traffic congestion",
            "Environmental benefits"
          ]
        },
        {
          "title": "Winter Recreation Hub",
          "description": "Expanded winter sports facilities with indoor options",
          "timeline": "2024-2026",
          "status": "in-progress",
          "impact": [
            "Year-round recreation options",
            "Community health benefits",
            "Youth activities"
          ]
        }
      ]
    },
    {
      "id": "107",
      "name": "Keskusta",
      "city": "Porvoo",
      "imageUrl": "https://images.pexels.com/photos/3889843/pexels-photo-3889843.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "description": "Historic town center with colorful wooden buildings along the river, cobblestone streets, and charming cafes in one of Finland's oldest towns.",
      "employmentStats": {
        "employmentRate": 81,
        "averageSalary": 44000,
        "majorIndustries": [
          { "name": "Tourism", "percentage": 35 },
          { "name": "Hospitality", "percentage": 25 },
          { "name": "Retail", "percentage": 20 },
          { "name": "Artisanal Crafts", "percentage": 15 },
          { "name": "Professional Services", "percentage": 5 }
        ]
      },
      "factors": {
        "airQuality": {
          "name": "Air Quality",
          "score": 84,
          "unit": "µg/m³",
          "description": "Good air quality with occasional impact from river traffic"
        },
        "noiseLevel": {
          "name": "Noise Level",
          "score": 65,
          "description": "Moderate noise from tourism and events during summer"
        },
        "transportation": {
          "name": "Transportation",
          "score": 72,
          "description": "Good bus connections and walkable historic center"
        },
        "diversity": {
          "name": "Diversity",
          "score": 70,
          "description": "Growing diversity with tourism-related international residents"
        },
        "wildlife": {
          "name": "Wildlife",
          "score": 60,
          "description": "River and park wildlife in urban setting"
        },
        "incomeLevel": {
          "name": "Income Level",
          "score": 70,
          "description": "Mixed income with some premium historical properties"
        },
        "languages": {
          "finnish": 65,
          "swedish": 30,
          "english": 4,
          "other": 1
        },
        "recreationOptions": [
          "Historic Tours",
          "River Cruises",
          "Artisan Shops",
          "Cafes and Restaurants",
          "Museums",
          "Riverside Parks",
          "Cultural Events"
        ],
        "trafficCongestion": {
          "level": "moderate",
          "peakHours": [
            {
              "day": "weekend",
              "timeRange": "12:00-16:00",
              "congestionLevel": "high"
            }
          ],
          "description": "Light local traffic but tourist congestion during summer weekends"
        }
      },
      "developmentPlans": [
        {
          "title": "Old Town Preservation Project",
          "description": "Historic building restoration and infrastructure improvements",
          "timeline": "2023-2027",
          "status": "in-progress",
          "impact": [
            "Preserved cultural heritage",
            "Enhanced tourism appeal",
            "Improved resident amenities"
          ]
        },
        {
          "title": "Riverside Cultural Pathway",
          "description": "Connected walking route with historical information points",
          "timeline": "2024-2026",
          "status": "planned",
          "impact": [
            "Enhanced visitor experience",
            "Local business support",
            "Cultural education"
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
