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
}

export const tours: Tour[] = [
  {
    id: 'na-pali-coast',
    name: 'Na Pali Coast Adventure',
    shortDescription: 'Experience the breathtaking cliffs and emerald valleys of Kauai\'s legendary coastline.',
    fullDescription: 'Embark on an unforgettable journey along the Na Pali Coast, one of the most dramatic and beautiful coastlines in the world. This adventure takes you through towering sea cliffs rising 4,000 feet above the Pacific, past hidden sea caves, cascading waterfalls, and pristine beaches accessible only by sea. Our expert guides share the rich Hawaiian history and legends that make this sacred place so special.',
    duration: '5 hours',
    price: 189,
    location: 'Kauai',
    image: '/tours/na-pali.jpg',
    highlights: [
      'Witness 4,000-foot sea cliffs',
      'Explore hidden sea caves',
      'Spot dolphins and sea turtles',
      'Learn ancient Hawaiian legends',
      'Snorkel in crystal-clear waters'
    ],
    included: [
      'Professional guide',
      'Snorkeling equipment',
      'Light lunch and beverages',
      'Waterproof camera use',
      'Life jackets'
    ],
    notIncluded: [
      'Hotel pickup/drop-off',
      'Gratuities',
      'Personal items'
    ],
    difficulty: 'Moderate',
    groupSize: 'Max 12 people',
    meetingPoint: 'Port Allen Harbor, Kauai',
    startTimes: ['7:00 AM', '12:00 PM']
  },
  {
    id: 'volcano-helicopter',
    name: 'Volcano Helicopter Tour',
    shortDescription: 'Soar over active volcanoes and witness the raw power of Hawaii\'s creation.',
    fullDescription: 'Experience the ultimate aerial adventure as you soar over Hawaii Volcanoes National Park in our state-of-the-art helicopter. Witness the awe-inspiring sight of glowing lava flows, massive calderas, and steam vents from a perspective few ever see. This once-in-a-lifetime tour takes you over tropical rainforests, cascading waterfalls, and the dramatic landscape shaped by millions of years of volcanic activity.',
    duration: '2 hours',
    price: 349,
    location: 'Big Island',
    image: '/tours/volcano.jpg',
    highlights: [
      'Fly over active Kilauea volcano',
      'See glowing lava flows (conditions permitting)',
      'Panoramic views of Hawaii Volcanoes National Park',
      'Witness 2,000-foot waterfalls',
      'Two-way communication headsets'
    ],
    included: [
      'Expert pilot narration',
      'Noise-canceling headsets',
      'Complimentary photos',
      'Hotel pickup (select areas)',
      'Safety briefing'
    ],
    notIncluded: [
      'Gratuities',
      'Food and beverages'
    ],
    difficulty: 'Easy',
    groupSize: 'Max 6 people',
    meetingPoint: 'Hilo Airport, Big Island',
    startTimes: ['8:00 AM', '10:30 AM', '1:00 PM', '3:30 PM']
  },
  {
    id: 'snorkel-molokini',
    name: 'Molokini Crater Snorkeling',
    shortDescription: 'Dive into crystal-clear waters at one of Hawaii\'s top snorkeling destinations.',
    fullDescription: 'Discover the underwater paradise of Molokini Crater, a crescent-shaped volcanic caldera that creates one of the clearest snorkeling environments in the world. With visibility often exceeding 150 feet, you\'ll swim among over 250 species of tropical fish, graceful manta rays, and vibrant coral formations. Our spacious catamaran provides comfort and amenities as we sail to this protected marine sanctuary.',
    duration: '5 hours',
    price: 159,
    location: 'Maui',
    image: '/tours/molokini.jpg',
    highlights: [
      'Snorkel in 150+ foot visibility',
      'See 250+ species of tropical fish',
      'Visit protected marine sanctuary',
      'Chance to spot sea turtles and rays',
      'Sail on a luxury catamaran'
    ],
    included: [
      'Premium snorkel equipment',
      'Continental breakfast',
      'BBQ lunch',
      'Open bar (beer, wine, mai tais)',
      'Flotation devices'
    ],
    notIncluded: [
      'Gratuities',
      'Underwater camera rental',
      'Wetsuit rental'
    ],
    difficulty: 'Easy',
    groupSize: 'Max 50 people',
    meetingPoint: 'Maalaea Harbor, Maui',
    startTimes: ['6:30 AM', '11:00 AM']
  },
  {
    id: 'luau-experience',
    name: 'Traditional Luau Experience',
    shortDescription: 'Immerse yourself in Hawaiian culture with an authentic oceanfront celebration.',
    fullDescription: 'Step back in time and experience the magic of old Hawaii at our oceanfront luau. Watch the sun set over the Pacific as you enjoy traditional Hawaiian cuisine, including kalua pig cooked in an underground imu oven. Be mesmerized by the graceful hula dancers, powerful fire knife performers, and the stories of Polynesian voyagers. This cultural celebration is more than a show—it\'s a journey into the heart of Hawaii.',
    duration: '4 hours',
    price: 179,
    location: 'Oahu',
    image: '/tours/luau.jpg',
    highlights: [
      'Oceanfront sunset setting',
      'Traditional imu ceremony',
      'Polynesian dance performances',
      'Fire knife finale',
      'Lei greeting'
    ],
    included: [
      'Fresh flower lei greeting',
      'Hawaiian feast buffet',
      'Open bar',
      'Cultural activities',
      'Premium seating available'
    ],
    notIncluded: [
      'Hotel transportation',
      'Gratuities',
      'Photo packages'
    ],
    difficulty: 'Easy',
    groupSize: 'Max 300 people',
    meetingPoint: 'Paradise Cove, Oahu',
    startTimes: ['5:00 PM']
  },
  {
    id: 'sunrise-haleakala',
    name: 'Haleakala Sunrise & Bike',
    shortDescription: 'Watch the sunrise from 10,000 feet then bike down the world\'s largest dormant volcano.',
    fullDescription: 'Begin your day above the clouds at the summit of Haleakala, where you\'ll witness one of the most spectacular sunrises on Earth. As the first rays of light paint the volcanic crater in shades of gold and crimson, you\'ll understand why ancient Hawaiians called this place the "House of the Sun." Then comes the adventure—a thrilling 23-mile bike ride down the mountain through upcountry Maui\'s eucalyptus forests and ranch lands.',
    duration: '8 hours',
    price: 229,
    location: 'Maui',
    image: '/tours/haleakala.jpg',
    highlights: [
      'Witness sunrise at 10,023 feet',
      '23-mile downhill bike ride',
      'Views above the clouds',
      'Pass through multiple climate zones',
      'Explore upcountry Maui'
    ],
    included: [
      'Hotel pickup/drop-off',
      'Park entrance fee',
      'Premium bike and helmet',
      'Windbreaker and gloves',
      'Breakfast and lunch'
    ],
    notIncluded: [
      'Gratuities',
      'Personal items'
    ],
    difficulty: 'Moderate',
    groupSize: 'Max 14 people',
    meetingPoint: 'Hotel pickup available',
    startTimes: ['2:30 AM']
  },
  {
    id: 'whale-watching',
    name: 'Whale Watching Expedition',
    shortDescription: 'Get up close with magnificent humpback whales during their Hawaiian migration.',
    fullDescription: 'Join us for an intimate encounter with the gentle giants of the sea. Each winter, thousands of humpback whales migrate to Hawaii\'s warm waters to breed and give birth. Our experienced captains know exactly where to find these magnificent creatures, often bringing you within safe viewing distance of breaching whales, playful calves, and competitive male pods. Our marine naturalists provide fascinating insights into whale behavior and conservation.',
    duration: '2.5 hours',
    price: 89,
    location: 'Maui',
    image: '/tours/whale.jpg',
    highlights: [
      'Guaranteed whale sightings (seasonal)',
      'Small group intimate experience',
      'Marine naturalist guide',
      'Hydrophone to hear whale songs',
      'Whale behavior education'
    ],
    included: [
      'Expert marine naturalist',
      'Hydrophone listening',
      'Light refreshments',
      'Binoculars use',
      'Free rebooking if no whales'
    ],
    notIncluded: [
      'Hotel transportation',
      'Gratuities'
    ],
    difficulty: 'Easy',
    groupSize: 'Max 24 people',
    meetingPoint: 'Lahaina Harbor, Maui',
    startTimes: ['8:00 AM', '10:30 AM', '1:00 PM']
  }
];

export const getTourById = (id: string): Tour | undefined => {
  return tours.find(tour => tour.id === id);
};
