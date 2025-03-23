"use client";

import { motion } from "motion/react";
import React from "react";
import { AuroraBackgroundDemo } from "@/components/-demo";
import { AnimatedTestimonialsDemo } from "@/components/animated-testimonials-demo";

export default function Page() {
  return (
    <main className="flex flex-col min-h-screen">
      <AuroraBackgroundDemo />
      <AnimatedTestimonialsDemo />
    </main>
  );
}
