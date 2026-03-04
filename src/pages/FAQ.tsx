import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HelpCircle, ChevronDown, ChevronUp, Search, MessageCircle, Shield, CreditCard, Home } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-border-dark last:border-0">
      <button
        onClick={onClick}
        className="w-full py-6 flex items-center justify-between text-left hover:text-primary transition-colors"
      >
        <span className="text-lg font-semibold pr-8">{question}</span>
        {isOpen ? <ChevronUp className="size-5 shrink-0" /> : <ChevronDown className="size-5 shrink-0" />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-gray-400 leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      category: "General",
      icon: <HelpCircle className="size-5" />,
      items: [
        {
          question: "What is PG Buddy?",
          answer: "PG Buddy is a digital platform that connects property owners with students and young professionals looking for Paying Guest (PG) accommodations. We provide a space for owners to list their properties and for seekers to discover them effortlessly."
        },
        {
          question: "Is PG Buddy a real estate agency?",
          answer: "No, PG Buddy is not a real estate agency or broker. We are a listing platform. We do not own, manage, or inspect the properties listed on our site. All transactions and agreements happen directly between the owner and the tenant."
        }
      ]
    },
    {
      category: "For Seekers",
      icon: <Home className="size-5" />,
      items: [
        {
          question: "How do I book a room through PG Buddy?",
          answer: "PG Buddy is a discovery platform. You can browse listings, view details, and use the contact information provided by the owner to reach out to them directly for bookings, visits, and payments."
        },
        {
          question: "Are the listings verified?",
          answer: "While we encourage owners to provide accurate information, PG Buddy does not physically verify properties. We recommend visiting the property in person and verifying all details before making any payments."
        },
        {
          question: "Do I have to pay any brokerage fee to PG Buddy?",
          answer: "No, PG Buddy does not charge any brokerage or commission from seekers. Our platform is free for you to browse and discover accommodations."
        }
      ]
    },
    {
      category: "For Owners",
      icon: <Shield className="size-5" />,
      items: [
        {
          question: "How can I list my property on PG Buddy?",
          answer: "You can list your property by clicking on the 'Post a Listing' button. You'll need to create an account, provide property details, upload photos, and set your rent expectations."
        },
        {
          question: "How many listings can I post?",
          answer: "Currently, we allow owners to post multiple listings. However, each listing must represent a unique property or room available for rent."
        }
      ]
    },
    {
      category: "Payments & Safety",
      icon: <CreditCard className="size-5" />,
      items: [
        {
          question: "Does PG Buddy handle rent payments?",
          answer: "No, PG Buddy does not handle any financial transactions. All rent payments, deposits, and refunds must be settled directly between the owner and the tenant."
        },
        {
          question: "What should I do if I encounter a fraudulent listing?",
          answer: "If you suspect a listing is fraudulent or misleading, please report it immediately through our contact form. We take user safety seriously and will investigate and remove such listings."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background-dark text-white py-20 px-6 lg:px-10">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold mb-6"
          >
            <HelpCircle className="size-4" />
            <span>Support Center</span>
          </motion.div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">Frequently Asked Questions</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Everything you need to know about PG Buddy. Can't find the answer you're looking for? Reach out to our support team.
          </p>
        </div>

        <div className="space-y-12">
          {faqs.map((category, catIdx) => (
            <div key={catIdx} className="bg-zinc-900/30 rounded-2xl border border-border-dark p-8">
              <div className="flex items-center gap-3 text-primary mb-6">
                {category.icon}
                <h2 className="text-xl font-bold uppercase tracking-wider">{category.category}</h2>
              </div>
              <div className="divide-y divide-border-dark">
                {category.items.map((item, itemIdx) => {
                  const globalIdx = catIdx * 10 + itemIdx;
                  return (
                    <FAQItem
                      key={itemIdx}
                      question={item.question}
                      answer={item.answer}
                      isOpen={openIndex === globalIdx}
                      onClick={() => setOpenIndex(openIndex === globalIdx ? null : globalIdx)}
                    />
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-primary rounded-3xl p-10 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <MessageCircle className="size-40" />
          </div>
          <h3 className="text-2xl font-bold mb-4 relative z-10">Still have questions?</h3>
          <p className="text-white/80 mb-8 max-w-md mx-auto relative z-10">
            Our team is here to help you find the perfect PG or list your property effectively.
          </p>
          <button className="bg-white text-primary px-8 py-3 rounded-xl font-bold hover:bg-gray-100 transition-colors relative z-10">
            Contact Support
          </button>
        </div>
      </div>
    </div>
  );
}
