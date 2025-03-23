"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="relative w-full bg-white dark:bg-black py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Award-Winning Service Section */}
        <div className="mb-20 pb-16 border-b border-neutral-200 dark:border-neutral-800">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h3 className="text-2xl md:text-3xl font-semibold text-neutral-800 dark:text-white mb-4">
              Award-Winning Service Excellence
            </h3>
            <p className="text-neutral-600 dark:text-neutral-300">
              Our commitment to excellence has earned us the industry's most prestigious accolades, recognizing our dedication to superior service and safety.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-xl bg-blue-50 dark:bg-blue-950/30">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-neutral-800 dark:text-white text-center mb-2">Skytrax 5-Star Rating</h4>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 text-center">Consistently rated among the world's top airlines for service quality and excellence.</p>
            </div>
            <div className="p-6 rounded-xl bg-blue-50 dark:bg-blue-950/30">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-neutral-800 dark:text-white text-center mb-2">Safety Excellence Award</h4>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 text-center">Recognized for maintaining the highest safety standards in the aviation industry.</p>
            </div>
            <div className="p-6 rounded-xl bg-blue-50 dark:bg-blue-950/30">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-neutral-800 dark:text-white text-center mb-2">Best First Class Service</h4>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 text-center">Winner of the World Travel Awards for outstanding first-class experience.</p>
            </div>
          </div>
        </div>

        {/* Premium Services Section */}
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-neutral-800 dark:text-white">
            Discover Our Premium Services
          </h2>
          <p className="text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto mb-16">
            Experience unparalleled luxury in the skies with our meticulously crafted services, designed for those who expect nothing but the finest in air travel.
          </p>
        </div>

        {/* Rest of your existing carousel code */}
        <Carousel items={cards} />
      </div>
    </div>
  );
}

const data = [
  {
    category: "Premium Service",
    title: "First Class Experience",
    src: "https://images.unsplash.com/photo-1587019158091-1a103c5dd17f?q=80&w=2340&auto=format&fit=crop",
  },
  {
    category: "Comfort",
    title: "Business Class Excellence",
    src: "https://images.unsplash.com/photo-1506126279646-a697353d3166?q=80&w=2340&auto=format&fit=crop",
  },
  {
    category: "Dining",
    title: "Gourmet In-Flight Dining",
    src: "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?q=80&w=2340&auto=format&fit=crop",
  },
  {
    category: "Entertainment",
    title: "World-Class Entertainment",
    src: "https://images.unsplash.com/photo-1516733968668-dbdce39c4651?q=80&w=2340&auto=format&fit=crop",
  },
  {
    category: "Lounges",
    title: "Exclusive Airport Lounges",
    src: "https://images.unsplash.com/photo-1545128485-c400e7702796?q=80&w=2340&auto=format&fit=crop",
  },
  {
    category: "Service",
    title: "Personalized Concierge",
    src: "https://images.unsplash.com/photo-1530521954074-e64f6810b32d?q=80&w=2340&auto=format&fit=crop",
  },
];
