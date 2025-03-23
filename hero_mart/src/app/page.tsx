"use client";

import { motion } from "motion/react";
import React from "react";
import { AppleCardsCarouselDemo } from "@/components/apple-cards-carousel-demo";
import { FloatingDockDemo } from "@/components/floating-dock-demo";
import { CardHoverEffectDemo } from "@/components/card-hover-effect-demo";
import { GlobeDemo } from "@/components/globe-demo";
import { ExpandableCardDemo } from "@/components/expandable-card-demo";
import { WorldMapDemo } from "@/components/world-map-demo";
import { Footer } from "@/components/footer";

export default function Page() {
  return (
    <main className="min-h-screen bg-black">
      {/* Hero Section */}
      <div className="relative h-screen w-full overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 w-full h-full">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="object-cover w-full h-full"
            style={{ filter: 'brightness(0.6)' }}
          >
            <source src="/hero-background.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black" />

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-white px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300"
          >
            Elevate Your Journey
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-center max-w-2xl mb-8 text-gray-200"
          >
            Experience the world's most exclusive destinations from a perspective few ever will
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col md:flex-row gap-4"
          >
            <button className="px-8 py-4 bg-white text-black rounded-full font-semibold hover:bg-opacity-90 transition-all transform hover:scale-105">
              Book Your Flight
            </button>
            <button className="px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-black transition-all transform hover:scale-105">
              View Destinations
            </button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-40 left-1/2 transform -translate-x-1/2"
          >
            <div className="flex flex-col items-center">
              <span className="text-sm text-gray-300 mb-2">Scroll to explore</span>
              <motion.div
                animate={{
                  y: [0, 10, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                className="w-6 h-6 border-2 border-white rounded-full flex items-center justify-center"
              >
                <motion.div className="w-1 h-1 bg-white rounded-full" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Rest of the content */}
      <h2 className="text-center text-xl md:text-4xl font-bold text-black dark:text-white p-8">
        Experience the World from Above
      </h2>
      <p className="text-center text-base md:text-lg font-normal text-neutral-700 dark:text-neutral-200 max-w-md mt-2 mx-auto">
        Explore our global flight destinations and scenic aerial tours. Our interactive globe
        showcases the breathtaking routes we offer across continents.
      </p>
      <div className="flex flex-row items-center justify-center min-h-[70vh] bg-black mt-4 mb-8 rounded-3xl overflow-hidden">
        <div className="w-1/2 flex items-center justify-center -mt-16">
          <GlobeDemo />
        </div>
        <div className="w-1/2 flex items-center justify-center">
          <CardHoverEffectDemo />
        </div>
      </div>
      <WorldMapDemo />
      <AppleCardsCarouselDemo />
      <ExpandableCardDemo />
      <FloatingDockDemo />
      <Footer />
    </main>
  );
}
