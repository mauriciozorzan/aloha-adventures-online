export interface Testimonial {
  id: string;
  name: string;
  location: string;
  avatar: string;
  rating: number;
  tourName: string;
  date: string;
  review: string;
  photos?: string[];
  platform?: 'google' | 'tripadvisor' | 'direct';
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah & Michael Thompson',
    location: 'San Francisco, CA',
    avatar: '',
    rating: 5,
    tourName: 'Koko Head Sunrise Hike',
    date: 'November 2024',
    review: 'The Koko Head sunrise hike was absolutely incredible! Our guide Kai was amazing - so knowledgeable about the history and kept us motivated on the climb. Watching the sun rise from the top with hot coffee in hand was a once-in-a-lifetime experience. The photos turned out stunning!',
    photos: [],
    platform: 'google'
  },
  {
    id: '2',
    name: 'Jennifer Martinez',
    location: 'Austin, TX',
    avatar: '',
    rating: 5,
    tourName: 'North Shore Experience',
    date: 'October 2024',
    review: 'Best tour we\'ve ever taken! Wave and Wander knows all the secret spots. The garlic shrimp was to die for, and our guide took us to a hidden beach that wasn\'t crowded at all. Seeing the pro surfers at Pipeline was amazing. Already planning to book again for our next trip!',
    platform: 'tripadvisor'
  },
  {
    id: '3',
    name: 'David & Emma Wilson',
    location: 'London, UK',
    avatar: '',
    rating: 5,
    tourName: 'Windward Coast Adventure',
    date: 'September 2024',
    review: 'We were blown away by the windward coast tour. Kailua Beach is paradise! The pillbox hike gave us the most incredible views we\'ve seen anywhere in the world. The small group size meant we got personal attention and could go at our own pace. Highly recommend!',
    platform: 'google'
  },
  {
    id: '4',
    name: 'Rachel Kim',
    location: 'Seattle, WA',
    avatar: '',
    rating: 5,
    tourName: 'Lanikai Pillbox Sunrise Trek',
    date: 'November 2024',
    review: 'As a solo female traveler, I felt completely safe and welcomed. The sunrise at Lanikai was magical - the photos don\'t even do it justice. Our guide shared fascinating stories about Hawaiian culture and history. This tour exceeded all my expectations!',
    platform: 'direct'
  },
  {
    id: '5',
    name: 'The Anderson Family',
    location: 'Chicago, IL',
    avatar: '',
    rating: 5,
    tourName: 'Kaneohe Bay & Temples',
    date: 'August 2024',
    review: 'Traveled with our kids (ages 10 and 13) and Wave and Wander made it perfect for the whole family. The Byodo-In Temple was so peaceful and beautiful. Our guide was patient and engaging with the children. A cultural experience we\'ll never forget!',
    platform: 'tripadvisor'
  },
  {
    id: '6',
    name: 'Marcus & Tanya Brown',
    location: 'Miami, FL',
    avatar: '',
    rating: 5,
    tourName: 'Custom Adventure',
    date: 'October 2024',
    review: 'We booked the custom tour for our honeymoon and it was PERFECT. They combined a sunrise hike with a secluded beach picnic and ended with watching the sunset at a spot only locals know. Worth every penny for such a personalized experience!',
    platform: 'google'
  },
  {
    id: '7',
    name: 'Lisa Chen',
    location: 'Vancouver, BC',
    avatar: '',
    rating: 5,
    tourName: 'Makapuu & Waimanalo Discovery',
    date: 'September 2024',
    review: 'The Makapuu lighthouse hike was beautiful and the whale watching was incredible - we saw a mother and calf! Waimanalo Beach felt like our own private paradise. This tour showed us the real Hawaii beyond Waikiki.',
    platform: 'direct'
  },
  {
    id: '8',
    name: 'James & Patricia O\'Connor',
    location: 'Boston, MA',
    avatar: '',
    rating: 5,
    tourName: 'North Shore Experience',
    date: 'July 2024',
    review: 'Third time visiting Hawaii but first time doing a proper North Shore tour. We finally understand what all the hype is about! Sharks Cove snorkeling was crystal clear, and Haleiwa has so much character. The shave ice alone is worth the trip!',
    platform: 'tripadvisor'
  }
];

export const reviewPlatforms = {
  google: {
    name: 'Google Reviews',
    rating: 4.9,
    reviewCount: 247,
    url: 'https://g.co/kgs/example'
  },
  tripadvisor: {
    name: 'TripAdvisor',
    rating: 5.0,
    reviewCount: 183,
    url: 'https://tripadvisor.com/example'
  }
};
