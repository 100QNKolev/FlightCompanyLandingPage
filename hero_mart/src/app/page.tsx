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
      <h2 className="text-center text-xl md:text-4xl font-bold text-black dark:text-white">
            We sell soap worldwide
          </h2>
          <p className="text-center text-base md:text-lg font-normal text-neutral-700 dark:text-neutral-200 max-w-md mt-2 mx-auto">
            This globe is interactive and customizable. Have fun with it, and
            don&apos;t forget to share it. :)
          </p>
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
