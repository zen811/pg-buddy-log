import React from 'react';
import { motion } from 'motion/react';
import { FileText, Clock, ShieldCheck, Scale, AlertTriangle } from 'lucide-react';

export default function TermsOfService() {
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
            <FileText className="size-8" />
            <h1 className="text-4xl font-extrabold tracking-tight">Terms of Service</h1>
          </div>
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <Clock className="size-4" />
            <span>Effective Date: {effectiveDate}</span>
          </div>
        </motion.div>

        <div className="space-y-10 text-gray-300 leading-relaxed">
          <section>
            <p className="text-lg">
              Welcome to <strong className="text-white">PG Buddy</strong>. These Terms of Service (“Terms”) govern your access to and use of the PG Buddy website and services. By accessing or using PG Buddy, you agree to comply with these Terms.
            </p>
            <p className="mt-4 p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-sm font-semibold text-red-200">
              If you do not agree with any part of these Terms, you should not use the platform.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <span className="text-primary">1.</span> About PG Buddy
            </h2>
            <p>
              PG Buddy is an online platform that allows property owners to list Paying Guest (PG) accommodations, rooms, and rental spaces, and allows users to browse and discover these listings.
            </p>
            <div className="space-y-3 pl-4 border-l-2 border-primary/30">
              <p>PG Buddy <strong className="text-white">only provides a digital listing platform</strong> and <strong className="text-white">does not own, manage, control, verify, or operate any properties listed on the website</strong>.</p>
              <p>PG Buddy <strong className="text-white">is not involved in rental agreements, negotiations, payments, or any transactions between property owners and users</strong>.</p>
              <p>All agreements, communications, and transactions occur <strong className="text-white">directly between the property owner and the user</strong>.</p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <span className="text-primary">2.</span> Eligibility
            </h2>
            <p>To use PG Buddy, you must:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Be at least <strong className="text-white">18 years old</strong>, or</li>
              <li>Use the platform under the supervision of a parent or legal guardian.</li>
            </ul>
            <p>By using the platform, you confirm that you meet these eligibility requirements.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <span className="text-primary">3.</span> User Accounts
            </h2>
            <p>Some features of PG Buddy may require users to create an account. Users agree to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide accurate and complete information</li>
              <li>Maintain the confidentiality of login credentials</li>
              <li>Be responsible for all activity under their account</li>
            </ul>
            <p>PG Buddy reserves the right to suspend or terminate accounts that violate these Terms.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <span className="text-primary">4.</span> Property Listings
            </h2>
            <p>Property owners may upload listings for PG accommodations or rooms. By submitting a listing, the owner agrees that:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>The information provided is accurate and not misleading</li>
              <li>They have the legal right to list the property</li>
              <li>The listing does not violate any laws or third-party rights</li>
            </ul>
            <p>PG Buddy <strong className="text-white">does not guarantee the accuracy, authenticity, or availability of listings</strong>. PG Buddy may remove or modify listings that violate these Terms.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <span className="text-primary">5.</span> Platform Role and Limitation
            </h2>
            <p>PG Buddy acts <strong className="text-white">only as a marketplace for listing and discovery</strong>.</p>
            <p>PG Buddy:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Does <strong className="text-white">not act as a broker, agent, or intermediary</strong></li>
              <li>Does <strong className="text-white">not process payments</strong></li>
              <li>Does <strong className="text-white">not participate in rental agreements</strong></li>
              <li>Does <strong className="text-white">not verify property ownership</strong></li>
              <li>Does <strong className="text-white">not guarantee listing accuracy</strong></li>
            </ul>
            <p>Any agreements, payments, or disputes are <strong className="text-white">solely between the property owner and the user</strong>.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <span className="text-primary">6.</span> Prohibited Activities
            </h2>
            <p>Users agree not to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Post false or misleading listings</li>
              <li>Upload illegal, abusive, or harmful content</li>
              <li>Use the platform for fraudulent activities</li>
              <li>Attempt to hack, disrupt, or misuse the platform</li>
              <li>Collect user data without permission</li>
            </ul>
            <p>Violation of these rules may result in account suspension or permanent ban.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <span className="text-primary">7.</span> Intellectual Property
            </h2>
            <p>All content on PG Buddy, including website design, branding, logos, and platform features, belongs to PG Buddy or its licensors.</p>
            <p>Users may not copy, reproduce, distribute, or modify platform content without permission.</p>
            <p>Property owners retain ownership of the content they upload but grant PG Buddy a license to display that content on the platform.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <span className="text-primary">8.</span> Disclaimer of Liability
            </h2>
            <p>PG Buddy provides the platform <strong className="text-white">“as is” and “as available.”</strong></p>
            <p>PG Buddy does <strong className="text-white">not guarantee</strong>:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>The accuracy of property listings</li>
              <li>The reliability of property owners or users</li>
              <li>The condition or availability of listed accommodations</li>
            </ul>
            <p>PG Buddy is <strong className="text-white">not responsible for</strong> property quality, rental agreements, payments, or fraud. Users interact with each other <strong className="text-white">at their own risk</strong>.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <span className="text-primary">9.</span> Limitation of Liability
            </h2>
            <p>To the maximum extent permitted by law, PG Buddy and its operators shall not be liable for any direct or indirect losses, financial damages, or disputes between users and property owners arising from the use of the platform.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <span className="text-primary">10.</span> Termination
            </h2>
            <p>PG Buddy reserves the right to suspend or terminate accounts, remove listings, or restrict access to the platform if users violate these Terms or misuse the platform.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <span className="text-primary">11.</span> Changes to Terms
            </h2>
            <p>PG Buddy may update these Terms of Service at any time. Continued use of the platform after updates means you accept the revised Terms.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <span className="text-primary">12.</span> Governing Law
            </h2>
            <p>These Terms shall be governed by and interpreted according to the laws of <strong className="text-white">India</strong>. Any disputes arising from the use of PG Buddy will be subject to the jurisdiction of the appropriate courts in India.</p>
          </section>

          <section className="space-y-6 pt-10 border-t border-border-dark">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <span className="text-primary">13.</span> Contact Information
            </h2>
            <p>For questions regarding these Terms of Service, please contact:</p>
            <div className="bg-zinc-900/50 p-6 rounded-xl border border-border-dark">
              <h3 className="font-bold text-white mb-2">PG Buddy Support</h3>
              <p className="text-sm">Email: support@pgbuddy.in</p>
              <p className="text-sm">Website: www.pgbuddy.in</p>
            </div>
          </section>

          <div className="bg-primary/10 border border-primary/20 p-6 rounded-xl flex gap-4">
            <AlertTriangle className="size-6 text-primary shrink-0" />
            <div className="text-sm">
              <p className="font-bold text-white mb-1">Important Notice:</p>
              <p>PG Buddy is <strong className="text-white">only a platform for listing PG accommodations and rooms</strong>. PG Buddy <strong className="text-white">does not participate in any rental transactions or agreements between property owners and users</strong> and is <strong className="text-white">not responsible for any disputes, payments, or arrangements made between them</strong>.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
