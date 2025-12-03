export interface Tour {
  id: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  duration: string;
  price: number;
  location: string;
  image: string;
  highlights: string[];
  included: string[];
  notIncluded: string[];
  difficulty: 'Easy' | 'Moderate' | 'Challenging';
  groupSize: string;
  meetingPoint: string;
  startTimes: string[];
  category: 'hiking' | 'sightseeing' | 'beach' | 'custom';
}

export const tours: Tour[] = [
  {
    id: 'koko-head-sunrise',
    name: 'Koko Head Sunrise Hike',
    shortDescription: 'Conquer the famous "Stairway to Heaven" railway trail and watch the sunrise paint the sky.',
    fullDescription: 'Challenge yourself on one of Oahu\'s most iconic hikes as you climb the 1,048 railroad ties to the summit of Koko Head Crater. Arriving before dawn, you\'ll experience the magic of watching the sun rise over the Pacific Ocean, casting golden light across the southeastern coastline. Our guides share the history of this WWII-era tramway while ensuring your safety on the climb. The panoramic views from the top—spanning from Diamond Head to Makapuu—make every step worth it.',
    duration: '3 hours',
    price: 75,
    location: 'Hawaii Kai',
    image: '/tours/koko-head.jpg',
    highlights: [
      'Climb 1,048 railway ties to the summit',
      'Watch a spectacular Pacific sunrise',
      'Panoramic views of southeastern Oahu',
      'Learn WWII history of the tramway',
      'Small group experience with expert guide'
    ],
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
    name: 'Lanikai Pillbox Sunrise Trek',
    shortDescription: 'A moderate sunrise hike to WWII bunkers with breathtaking views of the Mokulua Islands.',
    fullDescription: 'Experience Oahu\'s most picturesque sunrise from the famous Lanikai Pillboxes. This moderate hike takes you up a ridge trail to historic WWII military bunkers, now decorated with colorful murals. As the sun rises over the Mokulua Islands, you\'ll understand why this is considered one of the most beautiful views in all of Hawaii. The turquoise waters of Lanikai below create a stunning contrast against the golden morning light.',
    duration: '2.5 hours',
    price: 65,
    location: 'Kailua',
    image: '/tours/lanikai-pillbox.jpg',
    highlights: [
      'Stunning sunrise over Mokulua Islands',
      'Visit historic WWII pillbox bunkers',
      'See colorful bunker murals',
      'Views of Lanikai Beach and Kailua Bay',
      'Perfect for photography'
    ],
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
    groupSize: 'Max 10 people',
    meetingPoint: 'Kailua Beach Park',
    startTimes: ['5:15 AM', '5:45 AM'],
    category: 'hiking'
  },
  {
    id: 'windward-coast-adventure',
    name: 'Windward Coast Adventure',
    shortDescription: 'Discover the lush windward side with pristine beaches, hiking, and local charm.',
    fullDescription: 'Escape to Oahu\'s stunning windward coast for a full day of adventure and relaxation. Begin with a morning hike to the Lanikai Pillboxes for panoramic views, then descend to the powdery white sands of Kailua Beach—consistently rated one of America\'s best beaches. Explore charming Kailua town with its boutique shops and local eateries, before swimming in the crystal-clear waters of Lanikai Beach with views of the iconic Mokulua Islands.',
    duration: '7 hours',
    price: 149,
    location: 'Windward Oahu',
    image: '/tours/windward.jpg',
    highlights: [
      'Hike to Lanikai Pillboxes',
      'Relax on famous Kailua Beach',
      'Swim at pristine Lanikai Beach',
      'Explore Kailua town shops & cafes',
      'See the iconic Mokulua Islands'
    ],
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
    difficulty: 'Moderate',
    groupSize: 'Max 12 people',
    meetingPoint: 'Waikiki hotel pickup',
    startTimes: ['7:00 AM'],
    category: 'sightseeing'
  },
  {
    id: 'north-shore-experience',
    name: 'North Shore Experience',
    shortDescription: 'Surf culture, famous beaches, and the laid-back vibes of legendary Haleiwa Town.',
    fullDescription: 'Journey to Oahu\'s legendary North Shore, the surfing capital of the world. Stroll through historic Haleiwa Town with its art galleries, shrimp trucks, and famous shave ice. Visit world-renowned surf beaches including Waimea Bay, where winter waves can reach 30 feet, and snorkel the protected waters of Sharks Cove. Experience the authentic, laid-back Hawaiian culture that makes the North Shore unlike anywhere else on the island.',
    duration: '8 hours',
    price: 169,
    location: 'North Shore',
    image: '/tours/north-shore.jpg',
    highlights: [
      'Explore historic Haleiwa Town',
      'Famous Matsumoto\'s shave ice stop',
      'Visit Waimea Bay & watch surfers',
      'Snorkel at Sharks Cove',
      'See Sunset Beach & Pipeline'
    ],
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
    groupSize: 'Max 14 people',
    meetingPoint: 'Waikiki hotel pickup',
    startTimes: ['8:00 AM'],
    category: 'sightseeing'
  },
  {
    id: 'kaneohe-scenic-tour',
    name: 'Kaneohe Bay & Temples',
    shortDescription: 'Ancient temples, dramatic cliffs, and the serene beauty of Kaneohe Bay.',
    fullDescription: 'Discover the spiritual and natural wonders of Oahu\'s Kaneohe region. Visit the stunning Byodo-In Temple, a replica of a 950-year-old Japanese temple nestled against the dramatic Ko\'olau Mountains. Walk along Kualoa Beach with its iconic Chinaman\'s Hat island view, and stop at the legendary Crouching Lion rock formation. This tour showcases a side of Oahu that most visitors never see—lush valleys, sacred sites, and breathtaking mountain scenery.',
    duration: '6 hours',
    price: 139,
    location: 'Kaneohe',
    image: '/tours/kaneohe.jpg',
    highlights: [
      'Visit Byodo-In Temple',
      'Ring the sacred temple bell',
      'Kualoa Beach & Chinaman\'s Hat views',
      'See Crouching Lion rock formation',
      'Ko\'olau Mountain scenic views'
    ],
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
    groupSize: 'Max 10 people',
    meetingPoint: 'Waikiki hotel pickup',
    startTimes: ['8:30 AM', '12:30 PM'],
    category: 'sightseeing'
  },
  {
    id: 'makapuu-waimanalo',
    name: 'Makapuu & Waimanalo Discovery',
    shortDescription: 'Coastal lighthouse hike and the stunning untouched beauty of Waimanalo Beach.',
    fullDescription: 'Experience Oahu\'s rugged eastern coastline on this unforgettable adventure. Hike the paved Makapuu Point Lighthouse Trail for sweeping ocean views and whale watching opportunities (seasonal). Descend to hidden tide pools and sea caves, then continue to Waimanalo Beach—a 5-mile stretch of pristine sand that remains one of Hawaii\'s best-kept secrets. This tour showcases the raw, natural beauty of Oahu away from the tourist crowds.',
    duration: '5 hours',
    price: 99,
    location: 'East Oahu',
    image: '/tours/makapuu.jpg',
    highlights: [
      'Makapuu Lighthouse Trail hike',
      'Whale watching (November-April)',
      'Explore tide pools & sea caves',
      'Visit pristine Waimanalo Beach',
      'Sea Life Park viewpoint'
    ],
    included: [
      'Professional guide',
      'Transportation',
      'Light snacks and water',
      'Beach time',
      'Binoculars for whale watching'
    ],
    notIncluded: [
      'Gratuities',
      'Lunch'
    ],
    difficulty: 'Moderate',
    groupSize: 'Max 10 people',
    meetingPoint: 'Waikiki hotel pickup',
    startTimes: ['7:30 AM', '1:00 PM'],
    category: 'hiking'
  },
  {
    id: 'custom-adventure',
    name: 'Tailor Your Own Adventure',
    shortDescription: 'Design your perfect Hawaiian day with a customized private tour experience.',
    fullDescription: 'Your dream Hawaiian adventure, your way. Work with our expert guides to create a personalized itinerary that matches your interests, fitness level, and bucket list. Whether you want to combine multiple hikes, focus on photography, seek out hidden waterfalls, or explore off-the-beaten-path beaches, we\'ll craft an unforgettable experience just for you. Perfect for families, honeymoons, or anyone who wants a truly unique Oahu adventure.',
    duration: 'Flexible (4-10 hours)',
    price: 299,
    location: 'Island-wide',
    image: '/tours/custom.jpg',
    highlights: [
      'Fully customizable itinerary',
      'Private guide experience',
      'Flexible timing and pace',
      'Access to hidden gems',
      'Personalized recommendations'
    ],
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
