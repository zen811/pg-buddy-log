import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, MapPin, Star, Wifi, Utensils, Wind, Shield, Filter, ChevronLeft, ChevronRight, IndianRupee } from 'lucide-react';
import { motion } from 'motion/react';
import { MOCK_LISTINGS } from '../constants';

export default function ListingsPage() {
  const [priceRange, setPriceRange] = useState([5000, 15000]);
  
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-[1400px] mx-auto px-4 md:px-10 lg:px-20 py-8"
    >
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Filters Sidebar */}
        <aside className="w-full lg:w-64 shrink-0 space-y-6">
          <div className="bg-card-dark rounded-xl border border-border-dark p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-white">Filters</h3>
              <button className="text-xs text-primary font-bold hover:underline">Clear All</button>
            </div>
            
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4 text-white">
                <IndianRupee className="size-5 text-primary" />
                <span className="text-sm font-bold uppercase tracking-wider">Price Range</span>
              </div>
              <div className="px-2">
                <input 
                  type="range" 
                  min="5000" 
                  max="25000" 
                  step="1000"
                  className="w-full h-1.5 bg-zinc-700 rounded-lg appearance-none cursor-pointer accent-primary"
                />
                <div className="flex justify-between mt-2 text-xs text-gray-400">
                  <span>₹5k</span>
                  <span>₹25k</span>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <div className="flex items-center gap-2 mb-3 text-white">
                <Filter className="size-5 text-primary" />
                <span className="text-sm font-bold uppercase tracking-wider">Room Type</span>
              </div>
              <div className="space-y-1">
                {['Single Sharing', 'Double Sharing', 'Triple Sharing'].map((type) => (
                  <label key={type} className="flex items-center gap-3 py-2 cursor-pointer group">
                    <input type="checkbox" className="h-5 w-5 rounded border-border-dark bg-transparent text-primary focus:ring-primary" />
                    <span className="text-gray-300 text-sm group-hover:text-primary transition-colors">{type}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-4 text-white">
                <span className="material-symbols-outlined text-xl text-primary">group</span>
                <span className="text-sm font-bold uppercase tracking-wider">Gender</span>
              </div>
              <div className="flex flex-col gap-2">
                {['Male', 'Female', 'Unisex'].map((gender) => (
                  <label key={gender} className="flex items-center gap-3 rounded-lg border border-border-dark p-3 cursor-pointer hover:bg-zinc-800 transition-colors">
                    <input type="radio" name="gender" className="h-4 w-4 border-2 border-border-dark bg-transparent text-primary focus:ring-0" />
                    <span className="text-white text-sm font-medium">{gender}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* AdSense Placeholder */}
            <div className="mt-8 pt-8 border-t border-border-dark">
              <div className="bg-zinc-900/50 rounded-lg p-4 border border-dashed border-border-dark text-center">
                <p className="text-[10px] text-gray-500 uppercase font-bold mb-2">Advertisement</p>
                <ins className="adsbygoogle"
                     style={{ display: 'block' }}
                     data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
                     data-ad-slot="XXXXXXXXXX"
                     data-ad-format="auto"
                     data-full-width-responsive="true"></ins>
                <div className="h-40 flex items-center justify-center text-gray-600 text-xs italic">
                  Ad Unit Placeholder
                </div>
              </div>
            </div>
          </div>
        </aside>

        {/* Listings Grid */}
        <div className="flex-1">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
            <div>
              <h1 className="text-2xl font-bold text-white">Available Accommodations</h1>
              <p className="text-gray-400">Found {MOCK_LISTINGS.length} results in Bangalore</p>
            </div>
            <div className="flex items-center gap-2 bg-card-dark border border-border-dark rounded-lg px-3 py-2">
              <span className="text-sm text-gray-400">Sort by:</span>
              <select className="bg-transparent border-none text-sm font-bold text-primary focus:ring-0 p-0 cursor-pointer">
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Newest First</option>
                <option>Rating</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {MOCK_LISTINGS.map((listing) => (
              <Link key={listing.id} to={`/listings/${listing.id}`} className="group bg-card-dark rounded-xl border border-border-dark overflow-hidden flex flex-col hover:shadow-xl hover:border-primary/50 transition-all duration-300">
                <div className="w-full h-44 relative overflow-hidden">
                  <img 
                    alt={listing.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                    src={listing.image} 
                    referrerPolicy="no-referrer"
                  />
                  {listing.featured && <div className="absolute top-3 left-3 bg-primary text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-widest">Featured</div>}
                </div>
                <div className="flex-1 p-5 flex flex-col">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="text-base font-bold text-white group-hover:text-primary transition-colors">{listing.title}</h3>
                    <span className="text-primary font-bold">₹{listing.price.toLocaleString()}<span className="text-xs text-gray-500 font-normal">/mo</span></span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-400 text-xs mb-3">
                    <MapPin className="size-3" />
                    <span>{listing.area}, {listing.location}</span>
                  </div>
                  <div className="flex flex-wrap gap-x-4 gap-y-2 mb-5">
                    {listing.amenities.map((amenity, i) => (
                      <div key={i} className="flex items-center gap-1.5 text-[11px] text-gray-300">
                        {amenity.includes('WiFi') && <Wifi className="size-3.5 text-primary/70" />}
                        {amenity.includes('AC') && <Wind className="size-3.5 text-primary/70" />}
                        {amenity}
                      </div>
                    ))}
                  </div>
                  <button className="w-full bg-zinc-800 hover:bg-primary hover:text-white transition-all text-white font-bold py-2 rounded-lg text-sm mt-auto">
                    View Details
                  </button>
                </div>
              </Link>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-10 gap-2">
            <button className="h-9 w-9 flex items-center justify-center rounded-lg border border-border-dark text-white hover:bg-primary transition-all">
              <ChevronLeft className="size-5" />
            </button>
            <button className="h-9 w-9 flex items-center justify-center rounded-lg bg-primary text-white font-bold text-sm">1</button>
            <button className="h-9 w-9 flex items-center justify-center rounded-lg border border-border-dark text-white hover:bg-primary transition-all font-bold text-sm">2</button>
            <button className="h-9 w-9 flex items-center justify-center rounded-lg border border-border-dark text-white hover:bg-primary transition-all">
              <ChevronRight className="size-5" />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
