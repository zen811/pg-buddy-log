/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/Home';
import ListingsPage from './pages/Listings';
import RoomDetailsPage from './pages/RoomDetails';
import ContactPage from './pages/Contact';
import LoginPage from './pages/Login';
import PrivacyPolicyPage from './pages/PrivacyPolicy';
import TermsOfServicePage from './pages/TermsOfService';
import FAQPage from './pages/FAQ';
import PostListingPage from './pages/PostListing';

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/listings" element={<ListingsPage />} />
            <Route path="/listings/:id" element={<RoomDetailsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/privacy" element={<PrivacyPolicyPage />} />
            <Route path="/terms" element={<TermsOfServicePage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/post-listing" element={<PostListingPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
