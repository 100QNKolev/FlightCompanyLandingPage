"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";

export function ExpandableCardDemo() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <div className="relative py-20">
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-6 mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-200 to-white pb-4">
            Featured Travel Packages & Reviews
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-neutral-200 max-w-3xl mx-auto leading-relaxed"
          >
            Explore our carefully curated selection of luxury travel packages and hear what our distinguished guests have to say about their experiences.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 gap-4">
          <AnimatePresence>
            {active && typeof active === "object" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/80 backdrop-blur-sm h-full w-full z-10"
              />
            )}
          </AnimatePresence>
          
          {active && typeof active === "object" ? (
            <div className="fixed inset-0 grid place-items-center z-[100]">
              <motion.button
                key={`button-${active.title}-${id}`}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.05 },
                }}
                className="flex absolute top-4 right-4 items-center justify-center bg-white dark:bg-neutral-800 rounded-full h-8 w-8"
                onClick={() => setActive(null)}
              >
                <CloseIcon />
              </motion.button>
              <motion.div
                layoutId={`card-${active.title}-${id}`}
                ref={ref}
                className="w-full max-w-3xl h-full md:h-fit md:max-h-[90vh] flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden mx-4"
              >
                <motion.div layoutId={`image-${active.title}-${id}`} className="relative h-80">
                  <Image
                    priority
                    src={active.src}
                    alt={active.title}
                    fill
                    className="object-cover"
                  />
                </motion.div>

                <div className="p-8">
                  <div className="flex justify-between items-start">
                    <div>
                      <motion.h3
                        layoutId={`title-${active.title}-${id}`}
                        className="text-2xl font-bold text-neutral-800 dark:text-white"
                      >
                        {active.title}
                      </motion.h3>
                      <motion.p
                        layoutId={`description-${active.description}-${id}`}
                        className="text-neutral-600 dark:text-neutral-300 mt-2"
                      >
                        {active.description}
                      </motion.p>
                    </div>
                    <motion.a
                      layoutId={`button-${active.title}-${id}`}
                      href={active.ctaLink}
                      className="px-6 py-3 text-sm rounded-full font-bold bg-blue-500 text-white hover:bg-blue-600 transition-colors"
                    >
                      {active.ctaText}
                    </motion.a>
                  </div>
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="mt-6 text-neutral-600 dark:text-neutral-300 space-y-4"
                  >
                    {active.content}
                  </motion.div>
                </div>
              </motion.div>
            </div>
          ) : null}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {cards.map((card) => (
              <motion.div
                layoutId={`card-${card.title}-${id}`}
                key={`card-${card.title}-${id}`}
                onClick={() => setActive(card)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="p-4 flex flex-col md:flex-row gap-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl cursor-pointer hover:bg-white/10 transition-colors"
              >
                <motion.div layoutId={`image-${card.title}-${id}`} className="relative h-40 md:h-32 md:w-48 rounded-lg overflow-hidden">
                  <Image
                    src={card.src}
                    alt={card.title}
                    fill
                    className="object-cover"
                  />
                </motion.div>
                <div className="flex-1">
                  <motion.h3
                    layoutId={`title-${card.title}-${id}`}
                    className="font-bold text-white"
                  >
                    {card.title}
                  </motion.h3>
                  <motion.p
                    layoutId={`description-${card.description}-${id}`}
                    className="text-sm text-neutral-300 mt-1"
                  >
                    {card.description}
                  </motion.p>
                  <motion.button
                    layoutId={`button-${card.title}-${id}`}
                    className="mt-3 px-4 py-2 text-sm rounded-full font-medium bg-blue-500 text-white hover:bg-blue-600 transition-colors"
                  >
                    {card.ctaText}
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export const CloseIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4"
    >
      <path d="M18 6L6 18" />
      <path d="M6 6l12 12" />
    </svg>
  );
};

const cards = [
  {
    title: "Luxury Mediterranean Cruise",
    description: "10-day all-inclusive luxury cruise package with exclusive flight deals",
    src: "https://images.unsplash.com/photo-1548574505-5e239809ee19?q=80&w=2340&auto=format&fit=crop",
    ctaText: "View Package",
    ctaLink: "/packages/mediterranean",
    content: (
      <>
        <h4 className="text-lg font-semibold mb-2">Package Highlights</h4>
        <ul className="list-disc pl-4 mb-4">
          <li>First-class flights to Rome</li>
          <li>10 nights aboard a luxury cruise ship</li>
          <li>All-inclusive dining and beverages</li>
          <li>Private balcony suite accommodation</li>
          <li>Exclusive shore excursions</li>
        </ul>
        <p className="text-sm">
          Starting from $4,999 per person. Includes all taxes and port fees.
          Special offer: Complimentary premium beverage package worth $899.
        </p>
      </>
    ),
  },
  {
    title: "Sarah M. - New York",
    description: "A truly unforgettable first-class experience to Tokyo",
    src: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=2340&auto=format&fit=crop",
    ctaText: "Read Full Review",
    ctaLink: "/reviews/tokyo-first-class",
    content: (
      <p>
        &quot;The attention to detail was impeccable. From the moment I stepped into the
        first-class lounge to the final touchdown in Tokyo, every moment was pure luxury.
        The lie-flat seats were incredibly comfortable, and the in-flight chef prepared
        some of the best meals I&apos;ve ever had. The flight attendants remembered my name
        and preferences throughout the entire journey. This wasn&apos;t just a flight; it was
        the beginning of my vacation. Worth every penny!&quot;
      </p>
    ),
  },
  {
    title: "Dubai & Maldives Combo",
    description: "Experience the best of luxury city and beach life",
    src: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2340&auto=format&fit=crop",
    ctaText: "View Package",
    ctaLink: "/packages/dubai-maldives",
    content: (
      <>
        <h4 className="text-lg font-semibold mb-2">Package Details</h4>
        <ul className="list-disc pl-4 mb-4">
          <li>Business class flights throughout</li>
          <li>3 nights at Burj Al Arab, Dubai</li>
          <li>5 nights at overwater villa in Maldives</li>
          <li>Private seaplane transfers</li>
          <li>Full board in Maldives</li>
        </ul>
        <p className="text-sm">
          Starting from $8,999 per person. Limited time offer: Complimentary half-board
          upgrade in Dubai and sunset cruise in Maldives.
        </p>
      </>
    ),
  },
  {
    title: "James P. - London",
    description: "The Dubai-Maldives trip exceeded all expectations",
    src: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?q=80&w=2340&auto=format&fit=crop",
    ctaText: "Read Full Review",
    ctaLink: "/reviews/dubai-maldives",
    content: (
      <p>
        &quot;This was our honeymoon trip, and it couldn&apos;t have been more perfect. The
        business class flights were fantastic, but the real luxury began with our stay
        at the Burj Al Arab. The contrast between Dubai&apos;s urban luxury and the
        Maldives&apos; natural paradise was incredible. The overwater villa was a dream,
        and the private seaplane transfer offered breathtaking views. The staff at
        both properties went above and beyond to make our stay special. We&apos;re already
        planning our anniversary trip!&quot;
      </p>
    ),
  },
];
