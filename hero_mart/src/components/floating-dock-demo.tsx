"use client";
import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconPlane,
  IconMapPin,
  IconCalendarEvent,
  IconPhone,
  IconUser,
  IconHeadset,
  IconCreditCard
} from "@tabler/icons-react";

export function FloatingDockDemo() {
  const links = [
    {
      title: "Book Flight",
      icon: (
        <IconPlane className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#book",
    },
    {
      title: "Destinations",
      icon: (
        <IconMapPin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#destinations",
    },
    {
      title: "Schedule",
      icon: (
        <IconCalendarEvent className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#schedule",
    },
    {
      title: "Contact",
      icon: (
        <IconPhone className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#contact",
    },
    {
      title: "Account",
      icon: (
        <IconUser className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#account",
    },
    {
      title: "Support",
      icon: (
        <IconHeadset className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#support",
    },
    {
      title: "Payment",
      icon: (
        <IconCreditCard className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#payment",
    },
  ];
  
  return (
    <FloatingDock
      items={links}
      className="bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md border border-neutral-200 dark:border-neutral-800"
      mobileClassName="bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md border border-neutral-200 dark:border-neutral-800"
    />
  );
}
