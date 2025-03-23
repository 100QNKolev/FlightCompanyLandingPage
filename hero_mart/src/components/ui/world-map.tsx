"use client";

import { useRef, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import DottedMap from "dotted-map";
import Image from "next/image";
import { useTheme } from "next-themes";

interface MapProps {
  dots?: Array<{
    start: { lat: number; lng: number; label?: string };
    end: { lat: number; lng: number; label?: string };
  }>;
  lineColor?: string;
  onDestinationClick?: (destination: { lat: number; lng: number }) => void;
}

export function WorldMap({
  dots = [],
  lineColor = "#0ea5e9",
  onDestinationClick,
}: MapProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const { theme } = useTheme();

  const map = useMemo(() => new DottedMap({ height: 100, grid: "diagonal" }), []);

  const svgMap = useMemo(() => 
    map.getSVG({
      radius: 0.22,
      color: theme === "dark" ? "#FFFFFF40" : "#00000040",
      shape: "circle",
      backgroundColor: theme === "dark" ? "black" : "white",
    }),
    [map, theme]
  );

  const projectPoint = useCallback((lat: number, lng: number) => {
    const x = (lng + 180) * (800 / 360);
    const y = (90 - lat) * (400 / 180);
    return { x, y };
  }, []);

  const createCurvedPath = useCallback((
    start: { x: number; y: number },
    end: { x: number; y: number }
  ) => {
    const midX = (start.x + end.x) / 2;
    const midY = Math.min(start.y, end.y) - 50;
    return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`;
  }, []);

  const handleDestinationClick = useCallback((destination: { lat: number; lng: number }) => {
    onDestinationClick?.(destination);
  }, [onDestinationClick]);

  const LocationPoint = useCallback(({ lat, lng }: { lat: number; lng: number }) => {
    const point = projectPoint(lat, lng);
    return (
      <g>
        <motion.circle
          cx={point.x}
          cy={point.y}
          r="2"
          fill={lineColor}
          initial={{ opacity: 0.5, scale: 1 }}
          animate={{ opacity: 0, scale: 4 }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear",
            repeatDelay: 0.5
          }}
          pointerEvents="none"
        />
        <circle
          cx={point.x}
          cy={point.y}
          r="4"
          className="cursor-pointer"
          fill={lineColor}
          onClick={() => handleDestinationClick({ lat, lng })}
        />
      </g>
    );
  }, [projectPoint, lineColor, handleDestinationClick]);

  return (
    <div className="w-full aspect-[2/1] dark:bg-black bg-white rounded-lg relative font-sans">
      <Image
        src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`}
        className="h-full w-full [mask-image:linear-gradient(to_bottom,transparent,white_10%,white_90%,transparent)] pointer-events-none select-none"
        alt="world map"
        height="495"
        width="1056"
        draggable={false}
        priority
      />
      <svg
        ref={svgRef}
        viewBox="0 0 800 400"
        className="w-full h-full absolute inset-0"
      >
        <defs>
          <linearGradient id="path-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="white" stopOpacity="0" />
            <stop offset="5%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="95%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>

        <AnimatePresence>
          {dots.map((dot, i) => {
            const startPoint = projectPoint(dot.start.lat, dot.start.lng);
            const endPoint = projectPoint(dot.end.lat, dot.end.lng);
            return (
              <g key={`path-group-${i}`}>
                <motion.path
                  d={createCurvedPath(startPoint, endPoint)}
                  fill="none"
                  stroke="url(#path-gradient)"
                  strokeWidth="1"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{
                    duration: 1.5,
                    delay: 0.2 * i,
                    ease: "easeOut"
                  }}
                />
              </g>
            );
          })}
        </AnimatePresence>

        {dots.map((dot, i) => (
          <g key={`points-group-${i}`}>
            <g key={`start-${i}`}>
              <LocationPoint lat={dot.start.lat} lng={dot.start.lng} />
            </g>
            <g key={`end-${i}`}>
              <LocationPoint lat={dot.end.lat} lng={dot.end.lng} />
            </g>
          </g>
        ))}
      </svg>
    </div>
  );
}
