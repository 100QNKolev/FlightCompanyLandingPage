"use client";
import { WorldMap } from "@/components/ui/world-map";
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface Destination {
  lat: number;
  lng: number;
}

const FLIGHT_DESTINATIONS = {
  "34.0522,-118.2437": {
    name: "Los Angeles (LAX)",
    price: "$499",
    duration: "5h 45m"
  },
  "-15.7975,-47.8919": {
    name: "Brasília (BSB)",
    price: "$899",
    duration: "12h 30m"
  },
  "38.7223,-9.1393": {
    name: "Lisbon (LIS)",
    price: "$799",
    duration: "8h 15m"
  },
  "28.6139,77.209": {
    name: "New Delhi (DEL)",
    price: "$899",
    duration: "14h 20m"
  },
  "43.1332,131.9113": {
    name: "Vladivostok (VVO)",
    price: "$999",
    duration: "16h 45m"
  },
  "-1.2921,36.8219": {
    name: "Nairobi (NBO)",
    price: "$849",
    duration: "13h 10m"
  },
  "51.5074,-0.1278": {
    name: "London (LHR)",
    price: "$749",
    duration: "7h 30m"
  },
  "64.2008,-149.4937": {
    name: "Anchorage (ANC)",
    price: "$599",
    duration: "6h 15m"
  }
};

export function WorldMapDemo() {
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const getDestinationInfo = (lat: number, lng: number) => {
    const key = `${lat},${lng}` as const;
    return FLIGHT_DESTINATIONS[key as keyof typeof FLIGHT_DESTINATIONS] || {
      name: "Unknown Location",
      price: "N/A",
      duration: "N/A"
    };
  };

  return (
    <div className="py-20 dark:bg-black bg-white w-full relative" ref={ref}>
      {/* Trust Metrics Section */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-20 pb-16 border-b border-neutral-200 dark:border-neutral-800">
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
      </div>

      <motion.div 
        className="max-w-7xl mx-auto text-center mb-16"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h1 className="font-bold text-3xl md:text-5xl dark:text-white text-black mb-6">
          Explore Our Flight Destinations
        </h1>
        <p className="text-sm md:text-lg text-neutral-500 max-w-2xl mx-auto">
          Discover amazing destinations worldwide with our premium flight services.
          Direct flights available from major international airports.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <WorldMap
          dots={[
            {
              start: {
                lat: 64.2008,
                lng: -149.4937,
              },
              end: {
                lat: 34.0522,
                lng: -118.2437,
              },
            },
            {
              start: { lat: 64.2008, lng: -149.4937 },
              end: { lat: -15.7975, lng: -47.8919 },
            },
            {
              start: { lat: -15.7975, lng: -47.8919 },
              end: { lat: 38.7223, lng: -9.1393 },
            },
            {
              start: { lat: 51.5074, lng: -0.1278 },
              end: { lat: 28.6139, lng: 77.209 },
            },
            {
              start: { lat: 28.6139, lng: 77.209 },
              end: { lat: 43.1332, lng: 131.9113 },
            },
            {
              start: { lat: 28.6139, lng: 77.209 },
              end: { lat: -1.2921, lng: 36.8219 },
            }
          ]}
          onDestinationClick={setSelectedDestination}
        />
      </motion.div>

      {selectedDestination && (
        <motion.div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedDestination(null)}
        >
          <motion.div 
            className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-xl max-w-sm w-full mx-4 relative"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedDestination(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <h3 className="text-2xl font-bold mb-2 dark:text-white pr-8">
              {getDestinationInfo(selectedDestination.lat, selectedDestination.lng).name}
            </h3>
            
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-gray-600 dark:text-gray-300">Price from:</span>
                <span className="text-xl font-bold text-blue-500">
                  {getDestinationInfo(selectedDestination.lat, selectedDestination.lng).price}
                </span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-gray-600 dark:text-gray-300">Flight duration:</span>
                <span className="text-gray-900 dark:text-gray-100">
                  {getDestinationInfo(selectedDestination.lat, selectedDestination.lng).duration}
                </span>
              </div>
            </div>

            <button
              onClick={() => {
                alert("Flight booking functionality coming soon!");
                setSelectedDestination(null);
              }}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-lg transition-colors mt-4"
            >
              Book Flight
            </button>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
