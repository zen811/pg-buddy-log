import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Send } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full border-t border-border-dark bg-background-dark py-12 px-6 lg:px-10">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2 text-primary">
            <MapPin className="size-8" />
            <h2 className="text-primary text-xl font-extrabold">PG Buddy</h2>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">
            Making PG hunting effortless for students and young professionals across India.
          </p>
        </div>
        
        <div className="flex flex-col gap-4">
          <h4 className="font-bold text-white">Quick Links</h4>
          <ul className="flex flex-col gap-2 text-sm text-gray-400">
            <li><Link to="/listings" className="hover:text-primary transition-colors">Browse PGs</Link></li>
            <li><Link to="/post-listing" className="hover:text-primary transition-colors">Post a Listing</Link></li>
            <li><Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link></li>
          </ul>
        </div>
        
        <div className="flex flex-col gap-4">
          <h4 className="font-bold text-white">Support</h4>
          <ul className="flex flex-col gap-2 text-sm text-gray-400">
            <li><Link to="/faq" className="hover:text-primary transition-colors">FAQ</Link></li>
            <li><Link to="/contact" className="hover:text-primary transition-colors">Help Center</Link></li>
            <li><Link to="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
          </ul>
        </div>
        
        <div className="flex flex-col gap-4">
          <h4 className="font-bold text-white">Newsletter</h4>
          <p className="text-xs text-gray-400">Get updates on new listings and exclusive offers.</p>
          <div className="flex gap-2">
            <input 
              className="w-full bg-zinc-800 border-border-dark rounded-lg text-sm text-white focus:ring-primary focus:border-primary placeholder:text-gray-500 p-2" 
              placeholder="Email address" 
              type="email"
            />
            <button className="bg-primary p-2 rounded-lg text-white hover:bg-orange-600">
              <Send className="size-5" />
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-[1280px] mx-auto mt-12 pt-8 border-t border-border-dark text-center text-gray-500 text-xs">
        <p>© 2024 <span className="text-primary font-semibold">PG Buddy</span> Technologies Pvt Ltd. All rights reserved.</p>
      </div>
    </footer>
  );
}
