import React from 'react';
import { motion } from 'motion/react';
import { Shield, Clock, Mail, MapPin, Globe } from 'lucide-react';

export default function PrivacyPolicy() {
  const effectiveDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="min-h-screen bg-background-dark text-white py-20 px-6 lg:px-10">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 text-primary mb-4">
            <Shield className="size-8" />
            <h1 className="text-4xl font-extrabold tracking-tight">Privacy Policy</h1>
          </div>
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <Clock className="size-4" />
            <span>Effective Date: {effectiveDate}</span>
          </div>
        </motion.div>

        <div className="space-y-10 text-gray-300 leading-relaxed">
          <section>
            <p className="text-lg">
              Welcome to PG Buddy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website platform for listing and discovering Paying Guest (PG) accommodations and rental rooms.
            </p>
            <p className="mt-4 font-semibold text-white">
              By accessing or using PG Buddy, you agree to the terms of this Privacy Policy.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <span className="text-primary">1.</span> About PG Buddy
            </h2>
            <p>
              PG Buddy is an online platform that enables property owners to list PG accommodations and rooms, and allows users to browse and connect with owners.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>PG Buddy is solely a listing and discovery platform.</li>
              <li>We do not own, manage, inspect, verify, or control the listed properties.</li>
              <li>We do not participate in, facilitate, or take responsibility for any transactions, agreements, payments, disputes, or interactions between property owners and users.</li>
            </ul>
            <p className="italic text-primary">
              All transactions and communications occur directly between the property owner and the user.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <span className="text-primary">2.</span> Information We Collect
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-zinc-900/50 p-6 rounded-xl border border-border-dark">
                <h3 className="font-bold text-white mb-3">a) Personal Information</h3>
                <ul className="text-sm space-y-1 opacity-80">
                  <li>• Name</li>
                  <li>• Email address</li>
                  <li>• Phone number</li>
                  <li>• Profile details</li>
                  <li>• Account login credentials</li>
                </ul>
              </div>
              <div className="bg-zinc-900/50 p-6 rounded-xl border border-border-dark">
                <h3 className="font-bold text-white mb-3">b) Listing Information</h3>
                <ul className="text-sm space-y-1 opacity-80">
                  <li>• Property address</li>
                  <li>• Property description</li>
                  <li>• Rent details</li>
                  <li>• Images of property</li>
                  <li>• Amenities and availability</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <span className="text-primary">3.</span> How We Use Your Information
            </h2>
            <p>We use collected information to:</p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
              <li className="flex items-center gap-2">
                <div className="size-1.5 rounded-full bg-primary" />
                Create and manage user accounts
              </li>
              <li className="flex items-center gap-2">
                <div className="size-1.5 rounded-full bg-primary" />
                Allow property listings to be displayed
              </li>
              <li className="flex items-center gap-2">
                <div className="size-1.5 rounded-full bg-primary" />
                Enable users to connect with owners
              </li>
              <li className="flex items-center gap-2">
                <div className="size-1.5 rounded-full bg-primary" />
                Improve platform performance
              </li>
              <li className="flex items-center gap-2">
                <div className="size-1.5 rounded-full bg-primary" />
                Send service-related notifications
              </li>
              <li className="flex items-center gap-2">
                <div className="size-1.5 rounded-full bg-primary" />
                Prevent fraud or abuse
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <span className="text-primary">4.</span> Data Sharing and Disclosure
            </h2>
            <p>We do not sell your personal data. We may share information with service providers, if required by law, or to protect the safety of PG Buddy and its users.</p>
            <p className="bg-primary/10 border border-primary/20 p-4 rounded-lg text-sm">
              <strong>Note:</strong> Property listing details (such as contact number, rent, location) are publicly visible to users of the platform.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <span className="text-primary">5.</span> No Transaction Responsibility
            </h2>
            <p>PG Buddy does not verify listings, guarantee pricing, handle payments, or act as an intermediary. Any rental agreement, payment, or dispute is strictly between the property owner and the user.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <span className="text-primary">6.</span> Data Security
            </h2>
            <p>We implement reasonable security measures, but no platform is 100% secure. Users are responsible for their login credentials.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <span className="text-primary">7.</span> Cookies
            </h2>
            <p>We use cookies to enhance experience, analyze traffic, and store preferences. You can disable them in your browser settings.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <span className="text-primary">8.</span> User Rights
            </h2>
            <p>You have the right to access, correct, or delete your personal data. Submit requests via our contact email.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <span className="text-primary">9.</span> Third-Party Links
            </h2>
            <p>We are not responsible for the privacy practices of external sites linked on PG Buddy.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <span className="text-primary">10.</span> Changes
            </h2>
            <p>We reserve the right to update this policy at any time. Continued use constitutes acceptance of changes.</p>
          </section>

          <section className="space-y-6 pt-10 border-t border-border-dark">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <span className="text-primary">11.</span> Contact Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 text-gray-400">
                <Mail className="size-5 text-primary" />
                <span>support@pgbuddy.in</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <Globe className="size-5 text-primary" />
                <span>www.pgbuddy.in</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400 md:col-span-2">
                <MapPin className="size-5 text-primary" />
                <span>123 Tech Park, Sector 62, Noida, Uttar Pradesh 201301</span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
