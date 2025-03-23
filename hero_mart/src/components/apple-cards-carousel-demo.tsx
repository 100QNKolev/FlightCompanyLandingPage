"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Discover Our Premium Services
      </h2>
      <Carousel items={cards} />
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
