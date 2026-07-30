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
            <div className="absolute top-8 md:top-14 left-6 md:left-16 z-10 w-[90%] md:w-[600px]">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="inline-flex items-center bg-primary/20 backdrop-blur-sm border border-primary/30 px-4 py-1.5 rounded-full mb-3 whitespace-nowrap badge-pill"
              >
                <span className="material-symbols-outlined text-[14px] mr-2 text-white/90">flight_takeoff</span>
                <span className="text-label-sm uppercase tracking-widest text-white whitespace-nowrap font-bold">
                  WELCOME TO SKYWINGS
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="heading-hero text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/60 drop-shadow-xl leading-tight mb-4"
              >
                Your Adventure Awaits
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.35 }}
                className="text-body-lg text-white/85 drop-shadow-md leading-relaxed w-full max-w-[480px]"
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
                <button className="hidden md:flex items-center gap-2 text-primary font-label-md text-label-md hover:text-primary-fixed-dim transition-all duration-300 group/viewall">
                  View all
                  <span className="material-symbols-outlined text-sm transition-transform duration-300 group-hover/viewall:translate-x-1">arrow_forward</span>
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

            <button className="md:hidden w-full mt-6 py-3.5 border border-outline/50 text-on-surface font-label-md text-label-md rounded-xl hover:bg-surface-container hover:border-primary/30 transition-all duration-300 active:scale-[0.98]">
              View all destinations
            </button>
          </div>
        </section>

        {/* =============================
            FEATURES SECTION
            ============================= */}
        <section className="bg-surface-container-low section-spacing">
          <div className="container">
            <div className="w-full text-center mb-12">
              <AnimatedSection className="w-full">
                <h2 className="heading-section mb-4">
                  Journey To The Skies Made Simple
                </h2>
                <div className="w-full flex justify-center">
                  <p className="text-body" style={{maxWidth: '42rem'}}>
                    Experience a seamless booking process with premium perks and dedicated support every step of the way.
                  </p>
                </div>
              </AnimatedSection>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <AnimatedSection key={feature.title} delay={index * 0.15}>
                  <div className="relative bg-surface-container/50 backdrop-blur-sm p-8 rounded-2xl shadow-sm border border-outline-variant/20 hover:shadow-xl hover:border-primary/30 hover:-translate-y-3 transition-all duration-500 group overflow-hidden">
                    {/* Subtle gradient accent on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                    <div className="relative z-10">
                      <div className="w-14 h-14 bg-gradient-to-br from-primary/15 to-primary/5 text-primary rounded-2xl flex items-center justify-center mb-6 group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-primary/80 group-hover:text-white transition-all duration-400 group-hover:shadow-[0_4px_16px_rgba(29,78,216,0.3)] group-hover:scale-110">
                        <span className="material-symbols-outlined text-3xl">{feature.icon}</span>
                      </div>
                      <h3 className="heading-card mb-3 group-hover:text-primary transition-colors duration-300">{feature.title}</h3>
                      <p className="text-body leading-relaxed">{feature.description}</p>
                    </div>
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
                  <div className="w-full md:flex-1" style={{maxWidth: '42rem'}}>
                    <span className="inline-flex items-center bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full text-label-sm uppercase tracking-wider mb-4 border border-white/30 whitespace-nowrap badge-pill font-bold">
                      Limited Time Offer
                    </span>
                    <h2 className="heading-section text-white mb-3" style={{width: '100%'}}>
                      Island Escapes up to 30% Off
                    </h2>
                    <p className="text-body-lg text-white/90 mb-6" style={{width: '100%'}}>
                      Book your tropical getaway before the end of the month and receive complimentary lounge access.
                    </p>
                    <Link
                      href="/flights"
                      className="btn btn-primary btn-lg"
                    >
                      <span className="material-symbols-outlined text-[18px]">local_offer</span>
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

        {/* =============================
            PURPLE GRADIENT CTA SECTION
            ============================= */}
        <section className="relative w-full overflow-hidden">
          {/* Purple radial gradient background */}
          <div className="absolute inset-0 -z-10 h-full w-full [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#6633ee_100%)]" />

          <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-28 md:py-36 gap-6">
            <AnimatedSection>
              <span className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-1.5 rounded-full text-label-sm uppercase tracking-widest text-white/90 font-bold mb-2">
                <span className="material-symbols-outlined text-[14px] mr-2 text-purple-300">rocket_launch</span>
                Start Your Journey
              </span>

              <h2 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-purple-300 leading-tight mt-4 mb-4">
                The World Is Waiting<br className="hidden md:block" /> For You
              </h2>

              <p className="text-body-lg text-white/70 max-w-xl mx-auto mb-8">
                Join thousands of travelers who trust SkyWings to craft extraordinary adventures. Your dream destination is just one click away.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/flights"
                  className="btn btn-primary btn-lg shadow-[0_0_30px_rgba(102,51,238,0.5)] hover:shadow-[0_0_40px_rgba(102,51,238,0.7)] transition-shadow duration-300"
                >
                  <span className="material-symbols-outlined text-[18px]">flight_takeoff</span>
                  Book a Flight
                </Link>
                <Link
                  href="/flights"
                  className="btn btn-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300"
                >
                  <span className="material-symbols-outlined text-[18px]">explore</span>
                  Explore Destinations
                </Link>
              </div>
            </AnimatedSection>
          </div>

          {/* Decorative glowing orbs */}
          <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-64 h-64 bg-purple-600/20 rounded-full blur-[80px] pointer-events-none" />
          <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-64 h-64 bg-violet-500/15 rounded-full blur-[100px] pointer-events-none" />
        </section>
      </div>
    </>
  );
}
