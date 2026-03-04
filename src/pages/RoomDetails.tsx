import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, MapPin, Share2, Heart, Wifi, Wind, Utensils, Shield, Calendar, ChevronRight, Info, CheckCircle, Clock, Ban, Users } from 'lucide-react';
import { motion } from 'motion/react';
import { MOCK_LISTINGS } from '../constants';

export default function RoomDetailsPage() {
  const { id } = useParams();
  const listing = MOCK_LISTINGS.find(l => l.id === id) || MOCK_LISTINGS[0];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-[1200px] mx-auto px-4 py-6"
    >
      {/* Breadcrumbs */}
      <div className="flex flex-wrap items-center gap-2 mb-6">
        <Link to="/" className="text-gray-500 hover:text-primary text-sm font-medium">Home</Link>
        <ChevronRight className="size-4 text-gray-500" />
        <Link to="/listings" className="text-gray-500 hover:text-primary text-sm font-medium">{listing.location}</Link>
        <ChevronRight className="size-4 text-gray-500" />
        <span className="text-white text-sm font-semibold">{listing.area}</span>
      </div>

      {/* Headline */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold mb-2">{listing.title} - {listing.area}</h1>
          <div className="flex items-center gap-4 text-sm">
            <span className="flex items-center gap-1 text-primary font-semibold">
              <Star className="size-4 fill-primary" /> {listing.rating} ({listing.reviews} reviews)
            </span>
            <span className="flex items-center gap-1 text-gray-500">
              <MapPin className="size-4" /> {listing.area}, {listing.location}
            </span>
          </div>
        </div>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 px-4 py-2 border border-border-dark rounded-lg hover:bg-white/5 transition-all text-sm font-medium">
            <Share2 className="size-4" /> Share
          </button>
          <button className="flex items-center gap-2 px-4 py-2 border border-border-dark rounded-lg hover:bg-white/5 transition-all text-sm font-medium">
            <Heart className="size-4" /> Save
          </button>
        </div>
      </div>

      {/* Image Gallery */}
      <div className="grid grid-cols-4 grid-rows-2 gap-3 h-[450px] mb-8 overflow-hidden rounded-xl">
        <div className="col-span-2 row-span-2 relative group cursor-pointer overflow-hidden">
          <img className="w-full h-full object-cover transform group-hover:scale-105 transition-all duration-500" src={listing.image} referrerPolicy="no-referrer" />
        </div>
        <div className="col-span-1 row-span-1 relative group cursor-pointer overflow-hidden">
          <img className="w-full h-full object-cover transform group-hover:scale-105 transition-all duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCyhqcNJqVFYNSy3koGS17LOm3VAcwztpjQ4YBedG-eFnwDkXpMl3CFcXW2Z2sI_qZHUfjc0y0iCvyLgJLUANrm8OfAkGf-poWmBtTH-tArxSPwR3My6ui7ni-IxMgnI1MTPhoQ2ylFT7ZOGwQIwCYG6FoM1EN5qaRr4TrEA8qi7CytG19ZOZR1-uWr9Dg8eVS2OkEw36q0grPLpBiH-0BCzW9MTD4PtezIJU6dDTevssq7DyDUi0HQ6gHN6LitRFLliNHqRrgG8g" referrerPolicy="no-referrer" />
        </div>
        <div className="col-span-1 row-span-1 relative group cursor-pointer overflow-hidden">
          <img className="w-full h-full object-cover transform group-hover:scale-105 transition-all duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD9pRd8z7yLdOQ2PFzN883DWj43cWDVGkDzGC-LYfVGsANRbm49bH2V5U-v47i2O5TKGkixXQtkLzPzd_ie3IzSyShX0tKlr-xii3VScLnKkfkTGgUXy9ivx5NrE2KpafUgBNKEAOjrlF1w_-dtnra8WApqE8dZ8NHLXxpw7v7vOOYlFuJdYtvFSTtjLRXIFiB_Sq6_9ZNSRK-BZ2l169mRhi_uwrbSKKISNIaxzwRrkkkqR6HtW7VKb__zMN7V8SiZsb4IuERDVA" referrerPolicy="no-referrer" />
        </div>
        <div className="col-span-1 row-span-1 relative group cursor-pointer overflow-hidden">
          <img className="w-full h-full object-cover transform group-hover:scale-105 transition-all duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCmfuQ6aOdC6El1zNHU0yQd_57DBD2ck3FV5WYkKaGEL-XY8aXNYArPF-IR2v6qEueRZX9wh2Hv5boNF_vOyTCndOuSPnoI9DGW6aBc9rWw0RX9jW0c6KfP7NoL1AdNW2xS_bzBCRC2ZYSPmffgQO97V--JaVQMvF48NAVEoG0aAzH0o2geOIbG8hdfvU2lFp9d-gXbtSuExH-qcMKq_4eGRKCmNUNU1WmtetjT6Yj-MKRftmeU01g3uzk_3KRCjWXpYNeRVPICcQ" referrerPolicy="no-referrer" />
        </div>
        <div className="col-span-1 row-span-1 relative group cursor-pointer overflow-hidden">
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center z-10">
            <span className="text-white font-bold text-lg">+12 photos</span>
          </div>
          <img className="w-full h-full object-cover transform group-hover:scale-105 transition-all duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDCxh8bfw6nG9ERMWAauJdDTLDUmFfRnf2r_XQ5Pa3WTDyOX8QdjKeOvEST1VYL5-PbniIlcqiQB5LU47-U-NU4wZkvFANX-sYX_eakQkF-vYGmcI3qImiOW_pgUXc8IqyimaxRn3J8MW501gl4DbwN9gNQzVQ1Xqjat2vLoM-H_fYhqSLnYn4p2r5de8KKp4wagNtbxLWm5EilqBs8pL6gLIB5W6bQmUk0RRFDzwo47hMcldhWuBo0uoGvOInFKZo-dEEvt6eQNA" referrerPolicy="no-referrer" />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-10">
          <section>
            <h3 className="text-xl font-bold mb-4">About this room</h3>
            <p className="text-gray-400 leading-relaxed mb-4">
              Experience premium living in the heart of {listing.area}. This {listing.type.toLowerCase()} occupancy room is designed for working professionals and students who value privacy and comfort. The room comes fully furnished with a king-sized bed, ergonomic workstation, and ample storage space.
            </p>
          </section>

          <hr className="border-border-dark" />

          <section>
            <h3 className="text-xl font-bold mb-6">Facilities & Amenities</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              <div className="flex items-center gap-3">
                <Wifi className="text-primary bg-primary/10 p-2 rounded-lg size-10" />
                <span className="text-sm font-medium">High-speed Wi-Fi</span>
              </div>
              <div className="flex items-center gap-3">
                <Wind className="text-primary bg-primary/10 p-2 rounded-lg size-10" />
                <span className="text-sm font-medium">Air Conditioning</span>
              </div>
              <div className="flex items-center gap-3">
                <Shield className="text-primary bg-primary/10 p-2 rounded-lg size-10" />
                <span className="text-sm font-medium">24/7 Security</span>
              </div>
              <div className="flex items-center gap-3">
                <Utensils className="text-primary bg-primary/10 p-2 rounded-lg size-10" />
                <span className="text-sm font-medium">3 Meals Provided</span>
              </div>
            </div>
          </section>

          <hr className="border-border-dark" />

          <section>
            <h3 className="text-xl font-bold mb-6">Location</h3>
            <div className="bg-zinc-900/50 border border-border-dark rounded-2xl p-6 flex flex-col md:flex-row items-center gap-6">
              <div className="size-20 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <MapPin className="size-10" />
              </div>
              <div className="flex-1 text-center md:text-left">
                <p className="text-white font-bold text-lg mb-1">{listing.area}, {listing.location}</p>
                <p className="text-gray-500 text-sm mb-4">Coordinates: {listing.lat.toFixed(4)}, {listing.lng.toFixed(4)}</p>
                <button className="bg-zinc-800 hover:bg-zinc-700 text-white px-6 py-2 rounded-lg text-sm font-bold transition-colors">
                  View on Google Maps
                </button>
              </div>
            </div>
          </section>

          <hr className="border-border-dark" />

          <section>
            <h3 className="text-xl font-bold mb-6">House Rules</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <Clock className="text-gray-400 mt-0.5 size-5" />
                <div>
                  <p className="text-sm font-semibold">Check-in / Check-out</p>
                  <p className="text-xs text-gray-500">10 AM - 11 PM / 8 AM - 12 PM</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Ban className="text-gray-400 mt-0.5 size-5" />
                <div>
                  <p className="text-sm font-semibold">No Smoking</p>
                  <p className="text-xs text-gray-500">Strictly prohibited inside rooms</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Users className="text-gray-400 mt-0.5 size-5" />
                <div>
                  <p className="text-sm font-semibold">Visitor Policy</p>
                  <p className="text-xs text-gray-500">Allowed in common areas till 9 PM</p>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Booking Sidebar */}
        <div className="lg:col-span-1">
          <div className="sticky top-24">
            <div className="bg-card-dark border border-border-dark rounded-2xl p-6 shadow-xl">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <p className="text-3xl font-bold text-primary">₹{listing.price.toLocaleString()}<span className="text-sm font-normal text-gray-500"> /month</span></p>
                  <p className="text-xs text-green-500 font-medium mt-1">All inclusive: Electricity & Water</p>
                </div>
                <div className="bg-primary/10 text-primary text-xs font-bold px-2 py-1 rounded">HOT DEAL</div>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="p-3 border border-border-dark rounded-xl">
                  <p className="text-[10px] text-gray-500 uppercase font-bold mb-1">Move-in Date</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Select Date</span>
                    <Calendar className="text-gray-400 size-5" />
                  </div>
                </div>
              </div>

              <button className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2 mb-3">
                Send Inquiry
              </button>
              <p className="text-center text-[11px] text-gray-500 mt-4">
                We'll contact you for verification and property visit.
              </p>
            </div>
            
            <div className="mt-6 bg-primary/5 border border-primary/10 rounded-xl p-4 flex items-center gap-3">
              <CheckCircle className="text-primary size-6" />
              <div>
                <p className="text-xs font-bold">Verified Property</p>
                <p className="text-[10px] text-gray-500">This property has been inspected by PG Buddy.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
