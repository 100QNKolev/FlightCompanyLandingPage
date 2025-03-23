"use client";

import { motion } from "motion/react";
import React from "react";
import { AppleCardsCarouselDemo } from "@/components/apple-cards-carousel-demo";
import { FloatingDockDemo } from "@/components/floating-dock-demo";
import { CardHoverEffectDemo } from "@/components/card-hover-effect-demo";
import { GlobeDemo } from "@/components/globe-demo";

export default function Page() {
  return (
    <main className="flex flex-col min-h-screen">
      <GlobeDemo />
      <FloatingDockDemo />
      <CardHoverEffectDemo />
      <AppleCardsCarouselDemo />
    </main>
  );
}
