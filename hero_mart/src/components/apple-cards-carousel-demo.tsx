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
        {/* Trust Metrics Section */}
        <div className="mb-20">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h3 className="text-2xl md:text-3xl font-semibold text-neutral-800 dark:text-white mb-4">
              Trusted by Millions of Luxury Travelers
            </h3>
            <p className="text-neutral-600 dark:text-neutral-300">
              For over two decades, we've been setting the standard in luxury air travel, earning the trust of discerning travelers worldwide.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <h4 className="text-3xl md:text-4xl font-bold text-blue-500">20+</h4>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">Years of Excellence</p>
            </div>
            <div className="space-y-2">
              <h4 className="text-3xl md:text-4xl font-bold text-blue-500">500K+</h4>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">Happy Passengers</p>
            </div>
            <div className="space-y-2">
              <h4 className="text-3xl md:text-4xl font-bold text-blue-500">180+</h4>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">Global Destinations</p>
            </div>
            <div className="space-y-2">
              <h4 className="text-3xl md:text-4xl font-bold text-blue-500">98%</h4>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">Satisfaction Rate</p>
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
