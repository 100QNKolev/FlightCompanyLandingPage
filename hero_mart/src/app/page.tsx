"use client";

import { motion } from "motion/react";
import React from "react";
import { AuroraBackgroundDemo } from "@/components/-demo";
import { AppleCardsCarouselDemo } from "@/components/apple-cards-carousel-demo";
import { FloatingDockDemo } from "@/components/floating-dock-demo";

export default function Page() {
  return (
    <main className="flex flex-col min-h-screen">
      <FloatingDockDemo />

      <AuroraBackgroundDemo />
      <AppleCardsCarouselDemo />
    </main>
  );
}
