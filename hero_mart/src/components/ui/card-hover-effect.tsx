"use client";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { useState } from "react";

interface FlightDeal {
  id: number;
  title: string;
  description: string;
  price: string;
  from: string;
  to: string;
  duration: string;
  image: string;
}

export const HoverEffect = ({
  items,
  className,
}: {
  items: FlightDeal[];
  className?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10",
        className
      )}
    >
      {items.map((item, idx) => (
        <Link
          href={`/book-flight?from=${item.from}&to=${item.to}`}
          key={item.id}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <div className="rounded-2xl h-full w-full p-4 overflow-hidden bg-white dark:bg-slate-950 relative z-20 group-hover:ring-2 ring-blue-500">
            <div className="relative z-50">
              <div className="p-4">
                <div className="flex items-center gap-3">
                  <span className="text-sm font-medium text-neutral-500 dark:text-neutral-400">
                    {item.from}
                  </span>
                  <svg className="w-4 h-4 text-neutral-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                  <span className="text-sm font-medium text-neutral-500 dark:text-neutral-400">
                    {item.to}
                  </span>
                </div>
                <p className="text-2xl font-bold text-neutral-900 dark:text-white mt-4">
                  {item.title}
                </p>
                <p className="text-neutral-500 text-sm line-clamp-2 mt-2 dark:text-neutral-400">
                  {item.description}
                </p>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-2xl font-bold text-blue-500">
                    {item.price}
                  </span>
                  <span className="text-sm text-neutral-500 dark:text-neutral-400">
                    {item.duration}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-3xl h-full w-full p-4 overflow-hidden bg-black/80 backdrop-blur-md border border-white/10 relative z-20 shadow-xl",
        className
      )}
    >
      <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("text-white font-bold tracking-wide mt-4", className)}>
      {children}
    </h4>
  );
};

export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-4 text-neutral-300 tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};
