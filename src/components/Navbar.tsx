import React from 'react';
import { Link } from 'react-router-dom';
import { Home, MapPin, UserCircle, Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-background-dark/80 backdrop-blur-md border-b border-border-dark">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10 py-3 flex items-center justify-between whitespace-nowrap">
        <Link to="/" className="flex items-center gap-2 text-primary">
          <MapPin className="size-8" />
          <h2 className="text-primary text-xl font-extrabold leading-tight tracking-[-0.015em]">PG Buddy</h2>
        </Link>
        
        <div className="flex flex-1 justify-end gap-8 items-center">
          <nav className="hidden md:flex items-center gap-9">
            <Link to="/" className="text-gray-300 text-sm font-semibold hover:text-primary transition-colors">Home</Link>
            <Link to="/listings" className="text-gray-300 text-sm font-semibold hover:text-primary transition-colors">Listings</Link>
            <Link to="/contact" className="text-gray-300 text-sm font-semibold hover:text-primary transition-colors">Contact</Link>
          </nav>
          
          <div className="flex items-center gap-3">
            <Link to="/login" className="flex min-w-[84px] cursor-pointer items-center justify-center rounded-lg h-10 px-5 bg-primary text-white text-sm font-bold transition-transform hover:scale-105">
              Login
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
