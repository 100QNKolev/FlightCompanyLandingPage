"use client";

import { motion } from "motion/react";
import React from "react";
import { AppleCardsCarouselDemo } from "@/components/apple-cards-carousel-demo";
import { FloatingDockDemo } from "@/components/floating-dock-demo";
import { CardHoverEffectDemo } from "@/components/card-hover-effect-demo";
import { GlobeDemo } from "@/components/globe-demo";
import { ExpandableCardDemo } from "@/components/expandable-card-demo";
import { WorldMapDemo } from "@/components/world-map-demo";

export default function Page() {
  return (
    <main className="min-h-screen bg-black">
      <div className="flex flex-row min-h-screen bg-black m-8 rounded-3xl overflow-hidden">
        <div className="w-1/2">
          <GlobeDemo />
        </div>
        <div className="w-1/2">
          <CardHoverEffectDemo />
        </div>
      </div>
      <WorldMapDemo />
      <AppleCardsCarouselDemo />
      <ExpandableCardDemo />
      <FloatingDockDemo />
    </main>
  );
}
