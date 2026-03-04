import React from 'react';
import { Mail, Phone, MapPin, Send, Globe, Share2, Camera, Info } from 'lucide-react';
import { motion } from 'motion/react';

export default function ContactPage() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-[1200px] mx-auto px-6 py-12"
    >
      <div className="mb-16">
        <span className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 rounded-full mb-4">Support Center</span>
        <h2 className="text-4xl lg:text-6xl font-black leading-tight tracking-tight mb-4">Contact Us</h2>
        <p className="text-gray-400 text-lg max-w-2xl">
          Looking for a home or have a query about your listing? Our team is available 24/7 to assist you with your PG search.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-16">
        <div className="bg-card-dark p-8 rounded-2xl border border-border-dark shadow-xl">
          <h3 className="text-2xl font-bold mb-6">Send us a message</h3>
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-gray-300">Name</label>
                <input className="w-full rounded-lg bg-zinc-800 border-border-dark text-white focus:ring-primary focus:border-primary py-3 px-4 transition-all" placeholder="John Doe" type="text" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-gray-300">Email Address</label>
                <input className="w-full rounded-lg bg-zinc-800 border-border-dark text-white focus:ring-primary focus:border-primary py-3 px-4 transition-all" placeholder="john@example.com" type="email" />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-gray-300">Subject</label>
              <input className="w-full rounded-lg bg-zinc-800 border-border-dark text-white focus:ring-primary focus:border-primary py-3 px-4 transition-all" placeholder="How can we help?" type="text" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-gray-300">Message</label>
              <textarea className="w-full rounded-lg bg-zinc-800 border-border-dark text-white focus:ring-primary focus:border-primary py-3 px-4 transition-all resize-none" placeholder="Your message here..." rows={4}></textarea>
            </div>
            <button className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-lg shadow-lg shadow-primary/30 transition-all flex items-center justify-center gap-2 group" type="submit">
              Send Message
              <Send className="size-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </div>

        <div className="flex flex-col justify-between py-4">
          <div className="space-y-12">
            <div>
              <h4 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Info className="text-primary size-6" />
                Contact Information
              </h4>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    <Mail className="size-6" />
                  </div>
                  <div>
                    <p className="font-bold">Email us</p>
                    <p className="text-gray-400">hello@pgbuddy.com</p>
                    <p className="text-gray-400">support@pgbuddy.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    <Phone className="size-6" />
                  </div>
                  <div>
                    <p className="font-bold">Call us</p>
                    <p className="text-gray-400">+91 98765 43210</p>
                    <p className="text-gray-400">Mon - Fri, 9am - 6pm IST</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    <MapPin className="size-6" />
                  </div>
                  <div>
                    <p className="font-bold">Visit us</p>
                    <p className="text-gray-400">
                      4th Floor, Tech Hub, <br />
                      Indiranagar, Bengaluru, <br />
                      Karnataka 560038
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <button className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                  <Globe className="size-5" />
                </button>
                <button className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                  <Share2 className="size-5" />
                </button>
                <button className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                  <Camera className="size-5" />
                </button>
              </div>
            </div>
          </div>

          <div className="mt-12 overflow-hidden rounded-2xl border border-border-dark grayscale opacity-50">
            <img className="w-full h-48 object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBz4klhRzGcDwIX599rbyXQuIJu_er2DzSFnVZ1Oyr7LY-rnB2S7abk28R1tDz1M86Q3FwIEu9ZCjKKQpUTzlKKQSMai3eNLBOyhgGKgB03ouGYwMCeDXNY7oBBFTLCgSHNKiPz_02xivF51eVTo1_z1M4wULmPFD9BDj8PGp0MXN8ZauNQPNaRZrPDi7LWf72YG5KNE2fjQnFLn4m7v8LqoYjvHMX78OJYBH9WM4ns2ezLZr0wBsQ2Syatk3QK0czMjVEtkcSnoQ" referrerPolicy="no-referrer" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
