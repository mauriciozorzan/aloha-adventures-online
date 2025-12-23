export interface TieredPricing {
  1: number;
  2: number;
  3: number;
  4: number;
}

export interface Tour {
  id: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  duration: string;
  price: number; // Base price for display
  pricing: TieredPricing; // Per-person pricing based on group size
  tourType: 'sunrise' | 'boutique' | 'custom';
  location: string;
  image: string;
  highlights: string[];
  emotionalWords: string[];
  regions: string[];
  included: string[];
  notIncluded: string[];
  difficulty: 'Easy' | 'Moderate' | 'Challenging';
  groupSize: string;
  meetingPoint: string;
  startTimes: string[];
  category: 'hiking' | 'sightseeing' | 'beach' | 'custom';
}

// Pricing tiers
export const SUNRISE_PRICING: TieredPricing = { 1: 320, 2: 210, 3: 180, 4: 150 };
export const BOUTIQUE_PRICING: TieredPricing = { 1: 520, 2: 320, 3: 270, 4: 240 };

export const getPricePerPerson = (pricing: TieredPricing, guests: number): number => {
  if (guests >= 4) return pricing[4];
  if (guests === 3) return pricing[3];
  if (guests === 2) return pricing[2];
  return pricing[1];
};

export const tourFAQs = [
  {
    question: "What should I bring?",
    answer: "Sturdy hiking shoes or footwear with good grip are recommended for trail stability. Additionally, bring sunscreen, a hat, sunglasses, and a light jacket. For sunrise tours, dress in layers as mornings can be cool."
  },
  {
    question: "What if it rains?",
    answer: "Light rain is common in Hawaii and tours typically proceed. In case of severe weather, we'll reschedule or offer a full refund."
  },
  {
    question: "Are tours wheelchair accessible?",
    answer: "Some tours have limited accessibility. Please contact us to discuss specific needs and we'll do our best to accommodate."
  },
  {
    question: "Can I bring children?",
    answer: "Yes! Most tours are family-friendly. Age recommendations vary by tour difficulty. Contact us for specific guidance."
  },
  {
    question: "What's your cancellation policy?",
    answer: "Free cancellation up to 24 hours before your tour. Cancellations within 24 hours are non-refundable."
  }
];

export const tours: Tour[] = [
  {
    id: 'koko-head-sunrise',
    name: 'Kokohead Warrior Sunrise',
    shortDescription: 'A fiery, breathtaking sunrise climb above the island. Intense, rewarding, unforgettable.',
    fullDescription: 'Challenge yourself on one of Oahu\'s most iconic hikes as you climb the 1,048 railroad ties to the summit of Koko Head Crater. Arriving before dawn, you\'ll experience the magic of watching the sun rise over the Pacific Ocean, casting golden light across the southeastern coastline. Our guides share the history of this WWII-era tramway while ensuring your safety on the climb. The panoramic views from the top—spanning from Diamond Head to Makapuu—make every step worth it.',
    duration: '4 hours',
    price: 150,
    pricing: SUNRISE_PRICING,
    tourType: 'sunrise',
    location: 'Hawaii Kai',
    image: '/tours/koko-head.jpg',
    highlights: [
      'Climb 1,048 railway ties to the summit',
      'Watch a spectacular Pacific sunrise',
      'Panoramic views of southeastern Oahu',
      'Learn WWII history of the tramway',
      'Small group experience with expert guide'
    ],
    emotionalWords: ['Intense', 'Rewarding', 'Unforgettable'],
    regions: ['Hawaii Kai', 'Southeast Oahu'],
    included: [
      'Professional hiking guide',
      'Headlamps for pre-dawn start',
      'Light breakfast at summit',
      'Bottled water',
      'Photos of your adventure'
    ],
    notIncluded: [
      'Hotel pickup/drop-off',
      'Gratuities',
      'Hiking shoes (required)'
    ],
    difficulty: 'Challenging',
    groupSize: 'Max 8 people',
    meetingPoint: 'Koko Head District Park, Hawaii Kai',
    startTimes: ['5:00 AM', '5:30 AM'],
    category: 'hiking'
  },
  {
    id: 'lanikai-pillbox-sunrise',
    name: 'Lanikai Pillbox Pastel Sunrise',
    shortDescription: 'A soft, dreamy sunrise over the Mokulua islands with pastel skies and gentle ridge views.',
    fullDescription: 'Experience Oahu\'s most picturesque sunrise from the famous Lanikai Pillboxes. This moderate hike takes you up a ridge trail to historic WWII military bunkers, now decorated with colorful murals. As the sun rises over the Mokulua Islands, you\'ll understand why this is considered one of the most beautiful views in all of Hawaii. The turquoise waters of Lanikai below create a stunning contrast against the golden morning light.',
    duration: '4 hours',
    price: 150,
    pricing: SUNRISE_PRICING,
    tourType: 'sunrise',
    location: 'Kailua',
    image: '/tours/lanikai-pillbox.jpg',
    highlights: [
      'Stunning sunrise over Mokulua Islands',
      'Visit historic WWII pillbox bunkers',
      'See colorful bunker murals',
      'Views of Lanikai Beach and Kailua Bay',
      'Perfect for photography'
    ],
    emotionalWords: ['Soft', 'Dreamy', 'Scenic'],
    regions: ['Kailua', 'Windward Oahu'],
    included: [
      'Expert hiking guide',
      'Headlamps',
      'Light snacks and water',
      'Photo opportunities',
      'Local history and stories'
    ],
    notIncluded: [
      'Transportation',
      'Gratuities'
    ],
    difficulty: 'Moderate',
    groupSize: 'Max 8 people',
    meetingPoint: 'Kailua Beach Park',
    startTimes: ['5:15 AM', '5:45 AM'],
    category: 'hiking'
  },
  {
    id: 'windward-coast-adventure',
    name: 'Kailua & Windward Coast Dream Tour',
    shortDescription: 'Turquoise coastlines, breezy lookouts, Kailua town, Makapuʻu, Waimānalo, and scenic beach moments.',
    fullDescription: 'Escape to Oahu\'s stunning windward coast for a full day of adventure and relaxation. Experience the dramatic Makapuʻu lookout, explore the pristine sands of Waimānalo Beach, and discover the charming town of Kailua with its boutique shops and local eateries. Swim in crystal-clear waters at Lanikai Beach with views of the iconic Mokulua Islands. This comprehensive tour showcases the best of Oahu\'s windward side.',
    duration: '8 hours',
    price: 240,
    pricing: BOUTIQUE_PRICING,
    tourType: 'boutique',
    location: 'Windward Oahu',
    image: '/tours/windward.jpg',
    highlights: [
      'Makapuʻu Point scenic lookout',
      'Pristine Waimānalo Beach visit',
      'Relax on famous Kailua Beach',
      'Swim at pristine Lanikai Beach',
      'Explore Kailua town shops & cafes',
      'See the iconic Mokulua Islands'
    ],
    emotionalWords: ['Breezy', 'Scenic', 'Relaxing'],
    regions: ['Makapuʻu', 'Waimānalo', 'Kailua', 'Lanikai'],
    included: [
      'Hotel pickup/drop-off (Waikiki)',
      'Professional guide',
      'Light breakfast and lunch',
      'Beach equipment (chairs, umbrella)',
      'Snorkeling gear'
    ],
    notIncluded: [
      'Gratuities',
      'Personal shopping',
      'Additional food/drinks'
    ],
    difficulty: 'Easy',
    groupSize: 'Max 8 people',
    meetingPoint: 'Waikiki hotel pickup',
    startTimes: ['7:00 AM'],
    category: 'sightseeing'
  },
  {
    id: 'west-side-golden-coast',
    name: 'West Side Golden Coast Tour',
    shortDescription: 'Warm light, rugged landscapes, and a golden sunset along Oʻahu\'s dramatic west coast.',
    fullDescription: 'Discover the untamed beauty of Oahu\'s west side, where dramatic cliffs meet pristine beaches and golden sunsets paint the sky. This full-day adventure takes you through rugged landscapes, secluded beaches, and authentic Hawaiian communities rarely visited by tourists. Experience the raw, natural beauty of Kaena Point, relax on uncrowded beaches, and end the day with a spectacular sunset over the Pacific.',
    duration: '8 hours',
    price: 240,
    pricing: BOUTIQUE_PRICING,
    tourType: 'boutique',
    location: 'West Oahu',
    image: '/tours/west-side.jpg',
    highlights: [
      'Kaena Point natural area',
      'Secluded west side beaches',
      'Dramatic coastal cliff views',
      'Authentic local communities',
      'Golden sunset finale'
    ],
    emotionalWords: ['Rugged', 'Golden', 'Adventurous'],
    regions: ['Kaʻena Point', 'Waiʻanae Coast', 'West Oahu'],
    included: [
      'Hotel pickup/drop-off (Waikiki)',
      'Professional guide',
      'Lunch at local spot',
      'Beach time',
      'Sunset viewing'
    ],
    notIncluded: [
      'Gratuities',
      'Additional snacks/drinks'
    ],
    difficulty: 'Easy',
    groupSize: 'Max 8 people',
    meetingPoint: 'Waikiki hotel pickup',
    startTimes: ['10:00 AM'],
    category: 'sightseeing'
  },
  {
    id: 'north-shore-experience',
    name: 'North Shore Classic Hawaiʻi Tour',
    shortDescription: 'Explore iconic surf beaches, tidepools, Waimea Bay lookouts, and Haleʻiwa\'s charm.',
    fullDescription: 'Journey to Oahu\'s legendary North Shore, the surfing capital of the world. Stroll through historic Haleʻiwa Town with its art galleries, shrimp trucks, and famous shave ice. Visit world-renowned surf beaches including Waimea Bay, explore tidepools at Sharks Cove, and watch surfers ride massive waves (seasonal). Experience the authentic, laid-back Hawaiian culture that makes the North Shore unlike anywhere else on the island.',
    duration: '8 hours',
    price: 240,
    pricing: BOUTIQUE_PRICING,
    tourType: 'boutique',
    location: 'North Shore',
    image: '/tours/north-shore.jpg',
    highlights: [
      'Explore historic Haleʻiwa Town',
      'Famous Matsumoto\'s shave ice stop',
      'Visit Waimea Bay lookouts',
      'Explore tidepools at Sharks Cove',
      'See Sunset Beach & Pipeline'
    ],
    emotionalWords: ['Iconic', 'Laid-back', 'Authentic'],
    regions: ['Haleʻiwa', 'Waimea Bay', 'Sunset Beach', 'Sharks Cove'],
    included: [
      'Round-trip transportation',
      'Professional guide',
      'Lunch at famous shrimp truck',
      'Shave ice treat',
      'Snorkeling equipment',
      'Beach time'
    ],
    notIncluded: [
      'Gratuities',
      'Additional food/souvenirs'
    ],
    difficulty: 'Easy',
    groupSize: 'Max 8 people',
    meetingPoint: 'Waikiki hotel pickup',
    startTimes: ['8:00 AM'],
    category: 'sightseeing'
  },
  {
    id: 'kaneohe-scenic-tour',
    name: 'Kāneʻohe Valley Sanctuary Tour',
    shortDescription: 'A peaceful retreat through gardens, temples, Koʻolau cliffs, and lush Windward beauty.',
    fullDescription: 'Discover the spiritual and natural wonders of Oahu\'s Kāneʻohe region. Visit the stunning Byodo-In Temple, a replica of a 950-year-old Japanese temple nestled against the dramatic Koʻolau Mountains. Walk along Kualoa Beach with its iconic Chinaman\'s Hat island view, and stop at the legendary Crouching Lion rock formation. This tour showcases a peaceful, serene side of Oahu—lush valleys, sacred sites, and breathtaking mountain scenery.',
    duration: '8 hours',
    price: 240,
    pricing: BOUTIQUE_PRICING,
    tourType: 'boutique',
    location: 'Kāneʻohe',
    image: '/tours/kaneohe.jpg',
    highlights: [
      'Visit Byodo-In Temple',
      'Ring the sacred temple bell',
      'Kualoa Beach & Chinaman\'s Hat views',
      'See Crouching Lion rock formation',
      'Koʻolau Mountain scenic views'
    ],
    emotionalWords: ['Peaceful', 'Serene', 'Spiritual'],
    regions: ['Kāneʻohe', 'Kualoa', 'Koʻolau Mountains'],
    included: [
      'Hotel pickup/drop-off',
      'Temple entrance fee',
      'Professional guide',
      'Local lunch',
      'Bottled water'
    ],
    notIncluded: [
      'Gratuities',
      'Souvenirs'
    ],
    difficulty: 'Easy',
    groupSize: 'Max 8 people',
    meetingPoint: 'Waikiki hotel pickup',
    startTimes: ['8:30 AM', '12:30 PM'],
    category: 'sightseeing'
  },
  {
    id: 'custom-adventure',
    name: 'Build-Your-Own Island Adventure',
    shortDescription: 'Curate your perfect day — coastlines, gardens, temples, food stops, or hidden gems.',
    fullDescription: 'Your dream Hawaiian adventure, your way. Work with our expert guides to create a personalized itinerary that matches your interests, fitness level, and bucket list. Whether you want to combine multiple hikes, focus on photography, seek out hidden waterfalls, or explore off-the-beaten-path beaches, we\'ll craft an unforgettable experience just for you. Perfect for families, honeymoons, or anyone who wants a truly unique Oahu adventure.',
    duration: '8 hours',
    price: 520,
    pricing: { 1: 520, 2: 320, 3: 270, 4: 240 },
    tourType: 'custom',
    location: 'Island-wide',
    image: '/tours/custom.jpg',
    highlights: [
      'Fully customizable itinerary',
      'Private guide experience',
      'Flexible timing and pace',
      'Access to hidden gems',
      'Personalized recommendations'
    ],
    emotionalWords: ['Personalized', 'Flexible', 'Exclusive'],
    regions: ['Island-wide', 'Your Choice'],
    included: [
      'Private professional guide',
      'Luxury vehicle transportation',
      'Custom meal arrangements',
      'All equipment needed',
      'Flexible pickup location'
    ],
    notIncluded: [
      'Entrance fees (varies)',
      'Meals (can be arranged)',
      'Gratuities'
    ],
    difficulty: 'Easy',
    groupSize: 'Private (1-6 people)',
    meetingPoint: 'Your location',
    startTimes: ['Flexible'],
    category: 'custom'
  }
];

export const getTourById = (id: string): Tour | undefined => {
  return tours.find(tour => tour.id === id);
};

export const getToursByCategory = (category: Tour['category']): Tour[] => {
  return tours.filter(tour => tour.category === category);
};
