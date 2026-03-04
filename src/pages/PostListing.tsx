import React, { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { 
  Building2, 
  MapPin, 
  IndianRupee, 
  Users, 
  Wifi, 
  Utensils, 
  Wind, 
  Shield, 
  Camera, 
  CheckCircle2,
  Info,
  ChevronRight,
  ChevronLeft,
  Loader2
} from 'lucide-react';
import { db, storage } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

export default function PostListing() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [formData, setFormData] = useState({
    title: '',
    type: 'PG',
    location: '',
    area: '',
    price: '',
    lat: null as number | null,
    lng: null as number | null,
    occupancy: 'Single Sharing',
    gender: 'Unisex',
    amenities: [] as string[],
    description: '',
    rules: '',
    images: [] as File[]
  });

  const amenitiesList = [
    { name: 'High-speed WiFi', icon: <Wifi className="size-4" /> },
    { name: '3 Meals/Day', icon: <Utensils className="size-4" /> },
    { name: 'Air Conditioning', icon: <Wind className="size-4" /> },
    { name: '24/7 Security', icon: <Shield className="size-4" /> },
    { name: 'Laundry Service', icon: <CheckCircle2 className="size-4" /> },
    { name: 'Power Backup', icon: <CheckCircle2 className="size-4" /> },
  ];

  const handleAmenityToggle = (amenity: string) => {
    setFormData(prev => ({
      ...prev,
      amenities: prev.amenities.includes(amenity)
        ? prev.amenities.filter(a => a !== amenity)
        : [...prev.amenities, amenity]
    }));
  };

  const validateStep = (currentStep: number) => {
    if (currentStep === 1) {
      if (!formData.title.trim()) return "Please enter a property title.";
      if (!formData.type) return "Please select a property type.";
    }
    if (currentStep === 2) {
      if (!formData.location.trim()) return "Please enter a city.";
      if (!formData.area.trim()) return "Please enter an area.";
      if (!formData.price) return "Please enter the monthly rent.";
      if (!formData.lat || !formData.lng) return "Please pin the location.";
    }
    return null;
  };

  const nextStep = () => {
    const error = validateStep(step);
    if (error) {
      alert(error);
      return;
    }
    setStep(s => s + 1);
  };
  const prevStep = () => setStep(s => s - 1);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      setFormData(prev => ({
        ...prev,
        images: [...prev.images, ...newFiles]
      }));
    }
  };

  const handleSubmit = async () => {
    if (formData.images.length === 0) {
      alert("Please upload at least one image.");
      return;
    }

    setIsSubmitting(true);
    try {
      // 1. Upload images to Firebase Storage
      const imageUrls = await Promise.all(
        formData.images.map(async (file) => {
          const storageRef = ref(storage, `listings/${Date.now()}-${file.name}`);
          const snapshot = await uploadBytes(storageRef, file);
          return getDownloadURL(snapshot.ref);
        })
      );

      // 2. Save listing to Firestore
      const listingData = {
        ...formData,
        price: Number(formData.price),
        images: imageUrls,
        rating: 0,
        reviews: 0,
        createdAt: new Date().toISOString()
      };

      await addDoc(collection(db, "listings"), listingData);
      alert("Property listed successfully!");
      // Reset form or redirect
      window.location.href = "/listings";
    } catch (error: any) {
      console.error("Error submitting listing:", error);
      alert("Error listing property: " + error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setFormData(prev => ({
          ...prev,
          lat: position.coords.latitude,
          lng: position.coords.longitude
        }));
        alert('Location captured successfully!');
      }, (error) => {
        alert('Error getting location: ' + error.message);
      });
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  };

  const renderStep = () => {
    switch(step) {
      case 1:
        return (
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <Building2 className="text-primary" /> Basic Information
              </h2>
              <div className="grid grid-cols-1 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-400">Property Title *</label>
                  <input 
                    type="text" 
                    placeholder="e.g. Luxury Boys PG near DU North Campus"
                    className="w-full bg-zinc-900 border border-border-dark rounded-xl p-4 text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                    value={formData.title}
                    onChange={(e) => setFormData({...formData, title: e.target.value})}
                    required
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-400">Property Type *</label>
                    <select 
                      className="w-full bg-zinc-900 border border-border-dark rounded-xl p-4 text-white focus:ring-2 focus:ring-primary outline-none"
                      value={formData.type}
                      onChange={(e) => setFormData({...formData, type: e.target.value})}
                    >
                      <option>PG</option>
                      <option>Hostel</option>
                      <option>Shared Flat</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-400">Gender Preference</label>
                    <select 
                      className="w-full bg-zinc-900 border border-border-dark rounded-xl p-4 text-white focus:ring-2 focus:ring-primary outline-none"
                      value={formData.gender}
                      onChange={(e) => setFormData({...formData, gender: e.target.value})}
                    >
                      <option>Unisex</option>
                      <option>Male</option>
                      <option>Female</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <button 
              onClick={nextStep}
              className="w-full bg-primary text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-orange-600 transition-colors"
            >
              Next Step <ChevronRight className="size-5" />
            </button>
          </motion.div>
        );
      case 2:
        return (
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <MapPin className="text-primary" /> Location & Pricing
              </h2>
              <div className="grid grid-cols-1 gap-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-400">City/Location *</label>
                    <input 
                      type="text" 
                      placeholder="e.g. New Delhi"
                      className="w-full bg-zinc-900 border border-border-dark rounded-xl p-4 text-white focus:ring-2 focus:ring-primary outline-none"
                      value={formData.location}
                      onChange={(e) => setFormData({...formData, location: e.target.value})}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-400">Area/Locality *</label>
                    <input 
                      type="text" 
                      placeholder="e.g. Kamla Nagar"
                      className="w-full bg-zinc-900 border border-border-dark rounded-xl p-4 text-white focus:ring-2 focus:ring-primary outline-none"
                      value={formData.area}
                      onChange={(e) => setFormData({...formData, area: e.target.value})}
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-400">Pin Location *</label>
                  <button 
                    onClick={getCurrentLocation}
                    className="w-full flex items-center justify-center gap-2 bg-zinc-900 border border-border-dark rounded-xl p-4 text-white hover:bg-zinc-800 transition-colors"
                  >
                    <MapPin className="size-4 text-primary" />
                    {formData.lat ? `Location Set (${formData.lat.toFixed(4)}, ${formData.lng?.toFixed(4)})` : 'Get Current Location'}
                  </button>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-400">Monthly Rent (₹) *</label>
                    <div className="relative">
                      <IndianRupee className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 size-4" />
                      <input 
                        type="number" 
                        placeholder="0.00"
                        className="w-full bg-zinc-900 border border-border-dark rounded-xl p-4 pl-10 text-white focus:ring-2 focus:ring-primary outline-none"
                        value={formData.price}
                        onChange={(e) => setFormData({...formData, price: e.target.value})}
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-400">Occupancy</label>
                    <select 
                      className="w-full bg-zinc-900 border border-border-dark rounded-xl p-4 text-white focus:ring-2 focus:ring-primary outline-none"
                      value={formData.occupancy}
                      onChange={(e) => setFormData({...formData, occupancy: e.target.value})}
                    >
                      <option>Single Sharing</option>
                      <option>Double Sharing</option>
                      <option>Triple Sharing</option>
                      <option>Four Sharing</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-4">
              <button 
                onClick={prevStep}
                className="flex-1 bg-zinc-800 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-zinc-700 transition-colors"
              >
                <ChevronLeft className="size-5" /> Back
              </button>
              <button 
                onClick={nextStep}
                className="flex-2 bg-primary text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-orange-600 transition-colors"
              >
                Next Step <ChevronRight className="size-5" />
              </button>
            </div>
          </motion.div>
        );
      case 3:
        return (
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <Wifi className="text-primary" /> Amenities & Photos
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {amenitiesList.map((amenity) => (
                  <button
                    key={amenity.name}
                    onClick={() => handleAmenityToggle(amenity.name)}
                    className={`flex items-center gap-2 p-3 rounded-xl border text-sm font-medium transition-all ${
                      formData.amenities.includes(amenity.name)
                        ? 'bg-primary/20 border-primary text-primary'
                        : 'bg-zinc-900 border-border-dark text-gray-400 hover:border-gray-600'
                    }`}
                  >
                    {amenity.icon}
                    {amenity.name}
                  </button>
                ))}
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-400">Property Photos *</label>
                <input 
                  type="file" 
                  multiple 
                  accept="image/*" 
                  className="hidden" 
                  ref={fileInputRef}
                  onChange={handleFileChange}
                />
                <div 
                  onClick={() => fileInputRef.current?.click()}
                  className="border-2 border-dashed border-border-dark rounded-2xl p-8 flex flex-col items-center justify-center gap-3 bg-zinc-900/50 hover:bg-zinc-900 transition-colors cursor-pointer"
                >
                  <Camera className="size-10 text-gray-500" />
                  <div className="text-center">
                    <p className="text-white font-bold">Click to upload or drag and drop</p>
                    <p className="text-xs text-gray-500">PNG, JPG or JPEG (max. 5MB per image)</p>
                    {formData.images.length > 0 && (
                      <p className="mt-2 text-primary font-bold">{formData.images.length} images selected</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-4">
              <button 
                onClick={prevStep}
                className="flex-1 bg-zinc-800 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-zinc-700 transition-colors"
                disabled={isSubmitting}
              >
                <ChevronLeft className="size-5" /> Back
              </button>
              <button 
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="flex-2 bg-primary text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-orange-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="size-5 animate-spin" /> Uploading...
                  </>
                ) : (
                  <>
                    Submit Listing <CheckCircle2 className="size-5" />
                  </>
                )}
              </button>
            </div>
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background-dark py-20 px-6 lg:px-10">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Left Content */}
        <div className="lg:col-span-1 space-y-8">
          <div>
            <h1 className="text-4xl font-black text-white mb-4">List Your Property</h1>
            <p className="text-gray-400 text-lg leading-relaxed">
              Reach thousands of students and professionals looking for quality accommodations. It only takes 5 minutes to get started.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className={`size-10 rounded-full flex items-center justify-center font-bold transition-colors ${step >= 1 ? 'bg-primary text-white' : 'bg-zinc-800 text-gray-500'}`}>1</div>
              <div>
                <h3 className={`font-bold ${step >= 1 ? 'text-white' : 'text-gray-500'}`}>Basic Details</h3>
                <p className="text-sm text-gray-500">Property name, type and gender preference.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className={`size-10 rounded-full flex items-center justify-center font-bold transition-colors ${step >= 2 ? 'bg-primary text-white' : 'bg-zinc-800 text-gray-500'}`}>2</div>
              <div>
                <h3 className={`font-bold ${step >= 2 ? 'text-white' : 'text-gray-500'}`}>Location & Pricing</h3>
                <p className="text-sm text-gray-500">Where is it located and what's the rent?</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className={`size-10 rounded-full flex items-center justify-center font-bold transition-colors ${step >= 3 ? 'bg-primary text-white' : 'bg-zinc-800 text-gray-500'}`}>3</div>
              <div>
                <h3 className={`font-bold ${step >= 3 ? 'text-white' : 'text-gray-500'}`}>Amenities & Photos</h3>
                <p className="text-sm text-gray-500">Showcase what makes your PG special.</p>
              </div>
            </div>
          </div>

          <div className="bg-zinc-900/50 p-6 rounded-2xl border border-border-dark space-y-4">
            <div className="flex items-center gap-2 text-primary font-bold">
              <Info className="size-5" />
              <span>Pro Tip</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Properties with at least 5 high-quality photos get 3x more inquiries. Make sure to capture the room, bathroom, and common areas.
            </p>
          </div>
        </div>

        {/* Right Form */}
        <div className="lg:col-span-2">
          <div className="bg-card-dark rounded-3xl p-8 md:p-12 border border-border-dark shadow-2xl">
            {renderStep()}
          </div>
        </div>
      </div>
    </div>
  );
}
