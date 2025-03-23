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
        {/* Animated Gradient Background */}
        <div 
          className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-900 via-black to-purple-900"
          style={{
            backgroundSize: '400% 400%',
            animation: 'gradient 15s ease infinite',
          }}
        />
        
        {/* Animated Stars/Particles Effect */}
        <div className="absolute inset-0 bg-[radial-gradient(white_1px,transparent_1px)] bg-[size:50px_50px] opacity-30" />

        {/* Plane Silhouette */}
        <motion.div
          className="absolute w-[500px] h-[500px] opacity-15"
          initial={{ x: "-20%", y: "80%" }}
          animate={{ 
            x: "60%",
            y: "-20%",
            rotate: 0
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <svg
            viewBox="0 0 24 24"
            fill="white"
            className="w-full h-full transform rotate-[60deg]"
          >
            <path d="M22,16v-2l-8.5-5V3.5C13.5,2.67,12.83,2,12,2s-1.5,0.67-1.5,1.5V9L2,14v2l8.5-2.5V19L8,20.5V22l4-1l4,1v-1.5L13.5,19 v-5.5L22,16z"/>
          </svg>
        </motion.div>

        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black" />

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-white px-4 pb-30">
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

      {/* Experience Section */}
      <div className="relative py-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/20 to-black" />
        
        <div className="relative z-10 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center space-y-6"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-200 to-white">
              Experience the World from Above
            </h2>
            
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col items-center gap-8"
            >
              <p className="text-lg md:text-xl text-neutral-200 max-w-3xl mx-auto leading-relaxed">
                Explore our global flight destinations and scenic aerial tours. Our interactive globe
                showcases the breathtaking routes we offer across continents.
              </p>
              
              {/* Stats/Features */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center space-y-2"
                >
                  <span className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">50+</span>
                  <span className="text-neutral-300">Luxury Destinations</span>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center space-y-2"
                >
                  <span className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">24/7</span>
                  <span className="text-neutral-300">Concierge Service</span>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center space-y-2"
                >
                  <span className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">100%</span>
                  <span className="text-neutral-300">Private Flights</span>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

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
