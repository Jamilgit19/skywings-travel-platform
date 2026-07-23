"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import SearchWidget from "@/components/flights/SearchWidget";
import AnimatedSection from "@/components/ui/AnimatedSection";
import ScrollSequence from "@/components/ui/ScrollSequence";

/* =============================================
   DATA
   ============================================= */

const popularDestinations = [
  {
    name: "Santorini",
    country: "Greece",
    image: "/images/destinations.png",
    rating: 4.9,
    price: "$890",
  },
  {
    name: "Bali",
    country: "Indonesia",
    image: "/images/destinations.png",
    rating: 4.8,
    price: "$650",
  },
  {
    name: "Tokyo",
    country: "Japan",
    image: "/images/destinations.png",
    rating: 4.9,
    price: "$1,200",
  },
];

const features = [
  {
    icon: "verified",
    title: "Best Price Guarantee",
    description:
      "We match competitive prices on flights and hotels to ensure you get the best value for your premium travel experience.",
  },
  {
    icon: "support_agent",
    title: "24/7 Concierge",
    description:
      "Our dedicated travel experts are available around the clock to assist with bookings, changes, and local recommendations.",
  },
  {
    icon: "airline_seat_recline_extra",
    title: "Exclusive Upgrades",
    description:
      "Enjoy priority access to business class upgrades, lounge access, and premium hotel suites for our members.",
  },
];

/* =============================================
   COMPONENT
   ============================================= */

export default function HomePage() {
  return (
    <>
      {/* =============================
          INTRO SCROLL SEQUENCE
          ============================= */}
      <ScrollSequence frameCount={283} framePrefix="/frames/ezgif-frame-" />

      <div className="relative z-10 bg-background rounded-t-[32px] md:rounded-t-[48px] mt-[-40px] shadow-[0_-10px_40px_rgba(0,0,0,0.5)]">
        {/* =============================
            HERO SECTION WITH SEARCH
            ============================= */}
        <section className="relative w-full px-margin-mobile md:px-margin-desktop pt-8 md:pt-12 pb-12">
          {/* Hero Image Container */}
          <div className="relative w-full h-[400px] md:h-[500px] rounded-[32px] overflow-hidden shadow-2xl mb-[-100px] z-0">
            <Image
              src="/images/hero-airplane.png"
              alt="Airplane window view"
              fill
              className="object-cover"
              priority
              quality={90}
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 hero-gradient" />

            {/* Hero Text */}
            <div className="absolute top-8 md:top-14 left-6 md:left-16 z-10 w-[90%] md:w-[540px]">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="inline-flex items-center bg-primary/20 backdrop-blur-sm border border-primary/30 px-4 py-1.5 rounded-full mb-3 whitespace-nowrap badge-pill"
              >
                <span className="text-label-sm uppercase tracking-widest text-white whitespace-nowrap font-bold">
                  WELCOME TO SKYWINGS
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="heading-hero text-white drop-shadow-lg leading-tight mb-2"
              >
                Your Adventure Awaits
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.35 }}
                className="text-body-lg text-white/90 drop-shadow-md leading-relaxed w-full"
              >
                Explore flights, hotels, and tours crafted for unforgettable memories.
              </motion.p>
            </div>
          </div>

          {/* Search Widget (Elevated) */}
          <div className="relative z-10 w-full max-w-5xl mx-auto">
            <SearchWidget />
          </div>
        </section>

        {/* =============================
            POPULAR DESTINATIONS
            ============================= */}
        <section className="section-spacing">
          <div className="container">
            <AnimatedSection>
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
                <div>
                  <h2 className="heading-section">
                    Popular Destinations
                  </h2>
                  <p className="text-body mt-2">
                    Discover our most booked locations this week
                  </p>
                </div>
                <button className="hidden md:flex items-center gap-1 text-primary font-label-md text-label-md hover:text-primary-fixed-dim transition-colors">
                  View all
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {popularDestinations.map((dest, index) => (
                <AnimatedSection key={dest.name} delay={index * 0.1}>
                  <Link href={`/flights?to=${dest.name}`} className="group block">
                    <div className="group rounded-2xl overflow-hidden cursor-pointer relative aspect-[4/5] shadow-sm hover:shadow-lg transition-all duration-300 border border-outline-variant/20">
                      <Image
                        src={dest.image}
                        alt={dest.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      {/* Rating Badge */}
                      <div className="absolute top-4 right-4 bg-surface/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1 z-10 border border-white/10">
                        <span className="material-symbols-outlined text-sm text-[#eab308] fill">star</span>
                        <span className="font-label-sm text-label-sm text-on-surface">{dest.rating}</span>
                      </div>
                      {/* Card Bottom Gradient */}
                      <div className="absolute inset-0 card-gradient flex flex-col justify-end p-6 z-10">
                        <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                          <span className="text-white/80 font-label-sm text-label-sm uppercase tracking-wider mb-1 block">
                            {dest.country}
                          </span>
                          <h3 className="text-white font-headline-md text-headline-md mb-2">
                            {dest.name}
                          </h3>
                          <div className="flex items-center gap-4 text-white/90 font-body-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <span className="flex items-center gap-1">
                              <span className="material-symbols-outlined text-sm">flight</span> Flights
                            </span>
                            <span className="flex items-center gap-1">
                              <span className="material-symbols-outlined text-sm">hotel</span> Hotels
                            </span>
                          </div>
                          <div className="flex justify-between items-center pt-4 border-t border-white/20">
                            <span className="text-white/80 font-label-sm">Starting from</span>
                            <span className="text-white font-headline-md">{dest.price}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </AnimatedSection>
              ))}
            </div>

            <button className="md:hidden w-full mt-6 py-3 border border-outline text-on-surface font-label-md text-label-md rounded-lg hover:bg-surface-container transition-colors">
              View all destinations
            </button>
          </div>
        </section>

        {/* =============================
            FEATURES SECTION
            ============================= */}
        <section className="bg-surface-container-low section-spacing">
          <div className="container">
            <AnimatedSection className="text-center mb-12">
              <h2 className="heading-section mb-4">
                Journey To The Skies Made Simple
              </h2>
              <p className="text-body max-w-2xl mx-auto">
                Experience a seamless booking process with premium perks and dedicated support every step of the way.
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <AnimatedSection key={feature.title} delay={index * 0.15}>
                  <div className="bg-surface-container p-8 rounded-2xl shadow-sm border border-outline-variant/20 hover:shadow-md transition-shadow">
                    <div className="w-14 h-14 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6">
                      <span className="material-symbols-outlined text-3xl">{feature.icon}</span>
                    </div>
                    <h3 className="heading-card mb-3">{feature.title}</h3>
                    <p className="text-body">{feature.description}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* =============================
            PROMO BANNER
            ============================= */}
        <section className="section-spacing px-margin-mobile md:px-margin-desktop">
          <div className="container">
            <AnimatedSection>
              <div className="relative rounded-3xl overflow-hidden bg-surface-container-high border border-outline-variant/20 text-white">
                <div className="absolute inset-0 z-0">
                  <Image
                    src="/images/beach-promo.png"
                    alt="Tropical beach"
                    fill
                    className="object-cover opacity-40 mix-blend-overlay"
                  />
                </div>
                <div className="relative z-10 p-8 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8">
                  <div className="w-full md:flex-1 max-w-2xl text-center md:text-left flex flex-col items-center md:items-start">
                    <span className="inline-flex items-center bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full text-label-sm uppercase tracking-wider mb-4 border border-white/30 whitespace-nowrap badge-pill font-bold">
                      Limited Time Offer
                    </span>
                    <h2 className="heading-section text-white mb-3">
                      Island Escapes up to 30% Off
                    </h2>
                    <p className="text-body-lg text-white/90 mb-6 max-w-xl">
                      Book your tropical getaway before the end of the month and receive complimentary lounge access.
                    </p>
                    <Link
                      href="/flights"
                      className="btn btn-primary"
                    >
                      Claim Offer
                    </Link>
                  </div>
                  <div className="hidden md:flex w-40 h-40 rounded-full bg-white/10 backdrop-blur-md border border-white/20 items-center justify-center shrink-0 shadow-xl">
                    <div className="text-center">
                      <span className="block text-[42px] text-white font-black leading-none drop-shadow-md">-30%</span>
                      <span className="block text-[12px] text-white/90 uppercase tracking-[0.2em] mt-1 font-bold">Discount</span>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </div>
    </>
  );
}
