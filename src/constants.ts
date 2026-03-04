export interface Listing {
  id: string;
  title: string;
  price: number;
  location: string;
  area: string;
  rating: number;
  reviews: number;
  image: string;
  type: string;
  gender: 'Male' | 'Female' | 'Unisex';
  amenities: string[];
  featured?: boolean;
  justListed?: boolean;
  topRated?: boolean;
  lat: number;
  lng: number;
}

export const MOCK_LISTINGS: Listing[] = [
  {
    id: '1',
    title: 'Urban Nest Premium',
    price: 12500,
    location: 'Bangalore',
    area: 'Koramangala',
    rating: 4.9,
    reviews: 120,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCE0cOjznWqMCsELCeeOsFShxJxz72jkSLUFGtMr6YYolojY_CvECLc0OgACvy4YHN_ierLK6P4w6nn88TM5pyc_TLHhMpZJ_nLUifLKjxHMG6o9T65-kbz3Yav7TjLk-ENxkAe-cwqFP8L0tG-E6vYcQeou4SWGmO81YcvERoUTNGQE7WIFlTBj3hZTD4sZPMFhkXcj2VoiIHofQey8Vo66xeSm1xwcZ_Z5KBRiw47rtp3d2pYtzDLwoHwg_0cxcFJTXOkuwOWow',
    type: 'Single Sharing',
    gender: 'Male',
    amenities: ['High Speed WiFi', 'Food Incl.'],
    topRated: true,
    lat: 12.9352,
    lng: 77.6245
  },
  {
    id: '2',
    title: 'Green Terrace PG',
    price: 8000,
    location: 'Hyderabad',
    area: 'Hitech City',
    rating: 4.7,
    reviews: 45,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAKARA4u_KaXPw0SuPs8mXdROnrKtV6Wi3m2niGQFPZymSOs9-JwPo9Y2MgJta-sdfG7yPlftQSWvBGG9JVeWYeD5BFw84YsWX9usVD1yvZDYrabHjFWrCDz-CyFTq75qwwdKgGqXok23ACLXSXp4YXpaPzuuqDXPxoZpjPfFUD0sw705A5430_jk-3NUJWhPSh2QKMtFwMu6vHRAYAIbPoxnmgFoJlpq0kk47nVPk5pEdgrbFbDZ0bJ0EfJJdKnaeZhxWjRC3xvQ',
    type: 'Double Sharing',
    gender: 'Female',
    amenities: ['Air Conditioned', 'Laundry'],
    justListed: true,
    lat: 17.4483,
    lng: 78.3915
  },
  {
    id: '3',
    title: 'Elite Mens Hostel',
    price: 10200,
    location: 'Mumbai',
    area: 'Powai',
    rating: 4.8,
    reviews: 88,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDP_iT9hmuIcF_wIYyNFy7FuaYozwlEzG602kkE7Bb2STC7gX80LBHrAxwHk4SPN2paOhHiMSkZklTPda8465todjlPmiLXyiq0foRTxJjzOZjJ91in5DiSASDZ1Ll-Ym2hNpa_V53fM4q9LnMTiUNMicIGwMxK7mH_-xDjdcZhI3kAHXlXNWA_mGjRipfA9zYZKl7g3cjrjfykmRsXGPxCcVid8DiT9RfEou1xRgg2bes-9vrWzrXXSjSUhgj9VUfkCyQ6ZRta5w',
    type: 'Single Sharing',
    gender: 'Male',
    amenities: ['Gym Access', '24/7 Security'],
    lat: 19.1176,
    lng: 72.9060
  },
  {
    id: '4',
    title: 'Luxury Single Room',
    price: 12500,
    location: 'Bangalore',
    area: 'Indiranagar',
    rating: 4.9,
    reviews: 150,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDsTSfHuTy6UvEOL1NSBbp5BuSIxTSyRqok3WgIb8FZPiedYj11E_79hfGLWxh0a1is9S9USffo1BkTjhJht-yXilEgop7830BV8aspFiZvhl8WTuZHpOHvm4Xvqpsc3l8IKzbEPTNlPLB57zUAqLt8oDW_4PcXgXW-WhGbsItLXLQcJBFZc_dOHgMeXq6WQTLdXJkYfaaYKK1PvI-lr_VRcH1tPHjvMQikwItKEgLgKEWzJdS8E49zcZTguFIGvTAAR1EWkrxwLQ',
    type: 'Single Sharing',
    gender: 'Male',
    amenities: ['Wi-Fi', 'AC', 'Laundry'],
    featured: true,
    lat: 12.9719,
    lng: 77.6412
  },
  {
    id: '5',
    title: 'Elite Residency',
    type: 'Double Sharing',
    location: 'New Delhi',
    area: 'South Ex',
    price: 15000,
    rating: 4.7,
    reviews: 78,
    image: 'https://picsum.photos/seed/elite/800/600',
    amenities: ['WiFi', 'AC', 'Security'],
    featured: true,
    lat: 28.5672,
    lng: 77.2100,
    gender: 'Female'
  },
  {
    id: '6',
    title: 'Budget Friendly PG',
    type: 'Triple Sharing',
    location: 'New Delhi',
    area: 'Laxmi Nagar',
    price: 6000,
    rating: 4.0,
    reviews: 112,
    image: 'https://picsum.photos/seed/budget/800/600',
    amenities: ['WiFi', 'Food'],
    featured: false,
    lat: 28.6304,
    lng: 77.2777,
    gender: 'Male'
  }
];
