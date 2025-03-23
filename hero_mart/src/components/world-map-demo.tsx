"use client";
import { WorldMap } from "@/components/ui/world-map";
import { useState, useCallback } from "react";

export function WorldMapDemo() {
  const [selectedDestination, setSelectedDestination] = useState<{ lat: number; lng: number } | null>(null);

  const handleClose = useCallback(() => {
    setSelectedDestination(null);
  }, []);

  const getDestinationName = (lat: number, lng: number) => {
    const key = `${lat},${lng}` as const;
    const destinations: Record<string, string> = {
      "34.0522,-118.2437": "Los Angeles",
      "-15.7975,-47.8919": "Brasília",
      "38.7223,-9.1393": "Lisbon",
      "28.6139,77.209": "New Delhi",
      "43.1332,131.9113": "Vladivostok",
      "-1.2921,36.8219": "Nairobi"
    };
    return destinations[key] || "Unknown Location";
  };

  return (
    <div className="py-40 dark:bg-black bg-white w-full relative">
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
          },
        ]}
        onDestinationClick={setSelectedDestination}
      />
      
      {selectedDestination && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={handleClose}
        >
          <div 
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl max-w-sm w-full mx-4 relative"
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={handleClose}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <h3 className="text-xl font-bold mb-4 dark:text-white pr-8">
              {getDestinationName(selectedDestination.lat, selectedDestination.lng)}
            </h3>
            <button
              onClick={() => {
                alert("Booking functionality coming soon!");
                handleClose();
              }}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-colors"
            >
              Book Now
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
