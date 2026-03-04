import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Star, MapPin, Wifi, Utensils, Wind, Shield, Calendar, CreditCard, Compass } from 'lucide-react';
import { motion } from 'motion/react';
import { MOCK_LISTINGS } from '../constants';

export default function HomePage() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-col items-center w-full"
    >
      {/* Hero Section */}
      <section className="w-full max-w-[1280px] px-4 md:px-10 py-6">
        <div className="relative overflow-hidden rounded-xl h-[520px] md:h-[600px] flex flex-col items-center justify-center text-center p-6 bg-cover bg-center" 
          style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.85)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuC3HxltC77zwn_Xdb1homVwOptk6N0zvOZqMaPNwD5ogppp_Y_tvsDfXUlHMD1bI209JiX-aPEj6uohhgw2VMB4wj0y4EX_XNJRTxyCF4Yl36B85VLQFkFEp7bUmH64KOWUA1chTKwChl4tToE0Z8kyIfAmRzJ1X_if0jAK9TV3Vf3bOodyj-O0RGQbuMraZLUjRgFAUl4I-p93cD2HWIqIrBKGLRnipRG0eeAcdrZ8GAERVpQEa28-YFHU7QDuiCa-BZOBMphyOQ")` }}>
          <div className="max-w-[800px] flex flex-col gap-6 relative z-10">
            <h1 className="text-white text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
              Find your perfect home away from home.
            </h1>
            <p className="text-gray-300 text-base md:text-lg font-medium max-w-[600px] mx-auto opacity-90">
              Connecting property owners with students and professionals looking for the best PG accommodations across the city.
            </p>
            <div className="flex flex-wrap gap-4 justify-center mt-4">
              <Link to="/listings" className="flex min-w-[160px] cursor-pointer items-center justify-center rounded-lg h-12 md:h-14 px-8 bg-primary text-white text-base font-bold shadow-lg shadow-primary/20 hover:bg-orange-600 transition-all">
                Browse PG Listings
              </Link>
              <button className="flex min-w-[160px] cursor-pointer items-center justify-center rounded-lg h-12 md:h-14 px-8 border-2 border-primary text-primary bg-primary/5 backdrop-blur-sm text-base font-bold hover:bg-primary/10 transition-all">
                List Your Property
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Search Bar Overlay */}
      <section className="w-full max-w-[960px] -mt-12 z-10 px-4">
        <div className="bg-card-dark p-4 rounded-xl shadow-2xl border border-border-dark">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="md:col-span-3 flex items-center bg-zinc-800 rounded-lg px-4 py-3 border border-border-dark">
              <Search className="text-gray-400 mr-3 size-5" />
              <input 
                className="w-full bg-transparent border-none focus:ring-0 text-white placeholder:text-gray-500" 
                placeholder="Search by Location, Budget, or Occupancy" 
                type="text"
              />
            </div>
            <button className="bg-primary text-white font-bold py-3 px-6 rounded-lg flex items-center justify-center gap-2 hover:bg-orange-600 transition-colors">
              Find Now
            </button>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="w-full max-w-[1280px] px-6 lg:px-10 py-20">
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-3 text-center md:text-left">
            <h2 className="text-primary font-bold tracking-widest uppercase text-sm">Our Process</h2>
            <h1 className="text-white text-3xl md:text-4xl font-extrabold leading-tight">How It Works</h1>
            <p className="text-gray-400 text-lg max-w-[600px]">Your journey to a perfect home made simple and transparent.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group flex flex-col gap-5 p-8 rounded-2xl bg-card-dark border border-border-dark hover:border-primary/30 hover:shadow-xl hover:-translate-y-1 transition-all">
              <div className="size-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                <Compass className="size-8" />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-bold text-white">Find</h3>
                <p className="text-gray-400 leading-relaxed">Search through thousands of verified PGs tailored to your budget, preference, and lifestyle needs.</p>
              </div>
            </div>
            <div className="group flex flex-col gap-5 p-8 rounded-2xl bg-card-dark border border-border-dark hover:border-primary/30 hover:shadow-xl hover:-translate-y-1 transition-all">
              <div className="size-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                <Calendar className="size-8" />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-bold text-white">Visit</h3>
                <p className="text-gray-400 leading-relaxed">Schedule a virtual walkthrough or a physical tour at your convenience with our direct booking system.</p>
              </div>
            </div>
            <div className="group flex flex-col gap-5 p-8 rounded-2xl bg-card-dark border border-border-dark hover:border-primary/30 hover:shadow-xl hover:-translate-y-1 transition-all">
              <div className="size-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                <CreditCard className="size-8" />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-bold text-white">Book</h3>
                <p className="text-gray-400 leading-relaxed">Secure your stay instantly with easy and safe online payments. No hidden charges, total transparency.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Listings */}
      <section className="w-full max-w-[1280px] px-6 lg:px-10">
        <div className="flex items-center justify-between pb-8">
          <h2 className="text-white text-2xl md:text-3xl font-bold">Featured PG Listings</h2>
          <Link to="/listings" className="text-primary font-bold text-sm flex items-center gap-1 hover:underline">
            View all <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pb-20">
          {MOCK_LISTINGS.slice(0, 3).map((listing) => (
            <Link key={listing.id} to={`/listings/${listing.id}`} className="group bg-card-dark rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow border border-border-dark">
              <div className="relative h-56 bg-cover bg-center" style={{ backgroundImage: `url("${listing.image}")` }}>
                {listing.topRated && <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Top Rated</div>}
                {listing.justListed && <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Just Listed</div>}
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="flex items-center gap-1 bg-black/60 backdrop-blur-md px-2 py-1 rounded-md text-xs border border-white/10">
                    <Star className="size-3 fill-primary text-primary" /> {listing.rating} ({listing.reviews} reviews)
                  </div>
                </div>
              </div>
              <div className="p-5 flex flex-col gap-3">
                <div className="flex justify-between items-start">
                  <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors">{listing.title}</h3>
                  <span className="text-primary font-bold text-lg">₹{listing.price.toLocaleString()}<span className="text-gray-500 text-xs font-normal">/mo</span></span>
                </div>
                <p className="flex items-center gap-1 text-gray-400 text-sm">
                  <MapPin className="size-4 text-primary" /> {listing.area}, {listing.location}
                </p>
                <div className="flex items-center gap-4 text-xs font-semibold text-gray-400 border-t border-border-dark pt-4">
                  {listing.amenities.map((amenity, i) => (
                    <span key={i} className="flex items-center gap-1">
                      {amenity.includes('WiFi') && <Wifi className="size-4 text-primary" />}
                      {amenity.includes('Food') && <Utensils className="size-4 text-primary" />}
                      {amenity.includes('AC') && <Wind className="size-4 text-primary" />}
                      {amenity.includes('Security') && <Shield className="size-4 text-primary" />}
                      {amenity}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Property Owner CTA */}
      <section className="w-full bg-primary/5 py-16 px-6 mb-20 border-y border-border-dark">
        <div className="max-w-[960px] mx-auto text-center flex flex-col items-center gap-6">
          <h2 className="text-white text-3xl font-black">Are you a property owner?</h2>
          <p className="text-gray-400 text-lg max-w-[600px]">List your PG with us today and reach thousands of prospective residents. We handle the discovery, you handle the hospitality.</p>
          <button className="bg-primary text-white font-bold py-4 px-10 rounded-lg hover:bg-orange-600 shadow-xl shadow-primary/30 transition-all">
            List Your Property for Free
          </button>
        </div>
      </section>
    </motion.div>
  );
}
