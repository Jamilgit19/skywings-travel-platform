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

const popularTours = [
  {
    id: "tour-1",
    name: "Urban Skylines",
    tagline: "Architecture & culture",
    description: "Explore iconic cityscapes and modern marvels.",
    image: "/images/tour-city.png",
    href: "/tours/urban",
  },
  {
    id: "tour-2",
    name: "Paris, France",
    tagline: "Romance & history",
    description: "Discover the City of Light and its timeless charm.",
    image: "/images/tour-paris.png",
    href: "/tours/paris",
  },
  {
    id: "tour-3",
    name: "Canyon Depths",
    tagline: "Adventure & nature",
    description: "Journey through ancient geological wonders.",
    image: "/images/tour-canyon.png",
    href: "/tours/canyon",
  },
  {
    id: "tour-4",
    name: "Alpine Peaks",
    tagline: "Snow & solitude",
    description: "Breathtaking mountain vistas and fresh alpine air.",
    image: "/images/tour-mountains.png",
    href: "/tours/alpine",
  },
];

const features = [
  {
    icon: "location_on",
    title: "Handpicked Destinations",
    description:
      "Every route curated for extraordinary discovery. Small details, massive difference.",
  },
  {
    icon: "headset_mic",
    title: "24/7 Concierge Support",
    description:
      "A real travel expert answers your call at any hour. No bots, no waiting.",
  },
  {
    icon: "verified",
    title: "Verified Best Prices",
    description:
      "We actively compare fares across providers to lock in your ideal deal.",
  },
];

const testimonialQuote =
  '"Attachment to things and comfort is the main obstacle to an interesting life. People, as a rule, do not realize that at any time they can throw anything out of their lives. Anytime. Instantly."';

/* =============================================
   NUMBER NAV COMPONENT
   ============================================= */

function NumberNav({ active, count = 5 }: { active: number; count?: number }) {
  return (
    <div className="flex flex-col gap-3 items-end">
      {Array.from({ length: count }, (_, i) => i + 1).map((n) => (
        <span
          key={n}
          className={`number-nav-item text-right select-none ${
            n === active ? "active" : ""
          }`}
        >
          {String(n).padStart(2, "0")}
        </span>
      ))}
    </div>
  );
}

/* =============================================
   COMPONENT
   ============================================= */

export default function HomePage() {
  const [activeNav] = useState(3);

  return (
    <>
      {/* =============================
          INTRO SCROLL SEQUENCE
          ============================= */}
      <ScrollSequence frameCount={283} framePrefix="/frames/ezgif-frame-" />

      {/* ─────────────────────────────────────────────────
          ALL CONTENT — sits above the scroll sequence
          ───────────────────────────────────────────────── */}
      <div
        className="relative z-10 bg-[#0d0d0d] rounded-t-[28px] md:rounded-t-[40px] mt-[-40px] shadow-[0_-12px_48px_rgba(0,0,0,0.7)]"
      >
        {/* =============================
            HERO SECTION WITH SEARCH
            ============================= */}
        <section className="relative w-full px-4 md:px-10 pt-8 md:pt-10 pb-14">
          {/* Hero Image */}
          <div className="relative w-full h-[420px] md:h-[520px] rounded-[20px] overflow-hidden shadow-2xl mb-[-110px] z-0">
            <Image
              src="/images/hero-airplane.png"
              alt="Dramatic travel landscape"
              fill
              className="object-cover"
              priority
              quality={90}
            />
            {/* Dark overlay */}
            <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.48) 0%, rgba(0,0,0,0.18) 60%, rgba(0,0,0,0.55) 100%)" }} />

            {/* Hero Text */}
            <div className="absolute top-8 md:top-14 left-6 md:left-14 z-10 w-[80%] md:w-[580px]">
              <motion.h1
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.1 }}
                className="text-white font-black uppercase leading-none tracking-[-0.01em] mb-4"
                style={{ fontSize: "clamp(36px, 7vw, 80px)", lineHeight: 1.05 }}
              >
                Travel Time
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.28 }}
                className="space-y-1 mb-0"
              >
                {[
                  "Don't let the loud noise scare you.",
                  "Let the rhythms of the dance amuse you.",
                  "You are given a very rare chance.",
                  "Feel the movement of our ancestors.",
                ].map((line, i) => (
                  <p key={i} className="text-white/70 text-[13px] md:text-[14px] leading-relaxed">
                    {line}
                  </p>
                ))}
              </motion.div>
            </div>

            {/* Number Nav — right side */}
            <div className="absolute top-10 right-6 md:right-10 z-10">
              <NumberNav active={activeNav} count={5} />
            </div>

            {/* Feature Highlights Bar — bottom of hero */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.45 }}
              className="absolute bottom-0 left-0 right-0 z-10 px-6 md:px-14 py-5 border-t border-white/10"
              style={{ background: "rgba(13,13,13,0.55)", backdropFilter: "blur(10px)" }}
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0 md:divide-x md:divide-white/10">
                {[
                  { icon: "location_on", title: "Handpicked Destinations", desc: "Routes curated by expert travel designers for extraordinary discovery." },
                  { icon: "explore", title: "Guided Adventures", desc: "Personalized itineraries with local guides and seamless logistics." },
                  { icon: "shield", title: "Trusted Worldwide", desc: "14+ years of reliable service with thousands of happy travellers." },
                ].map((item, i) => (
                  <div key={i} className="md:px-8 first:pl-0 last:pr-0 group">
                    <div className="flex items-start gap-3 mb-3">
                      <span
                        className="w-5 h-5 shrink-0 mt-0.5 flex items-center justify-center"
                        style={{ color: "#e63030" }}
                      >
                        <span className="material-symbols-outlined text-[18px] fill">{item.icon}</span>
                      </span>
                      <div>
                        <p className="text-white text-[12px] font-bold leading-snug mb-1">{item.title}</p>
                        <p className="text-white/50 text-[11px] leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                    <button className="tour-card-link group-hover:gap-3 transition-all">
                      More Detailed
                      <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                    </button>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Search Widget (Elevated) */}
          <div className="relative z-10 w-full max-w-5xl mx-auto pt-[110px]">
            <SearchWidget />
          </div>
        </section>

        {/* =============================
            POPULAR TOURS
            ============================= */}
        <section className="py-16 md:py-24 px-4 md:px-10">
          <div className="max-w-[1280px] mx-auto">
            <AnimatedSection>
              <div className="text-center mb-12 md:mb-16">
                <span className="block mx-auto section-divider" />
                <h2
                  className="text-white font-black uppercase tracking-[0.04em] mb-3"
                  style={{ fontSize: "clamp(22px, 3vw, 32px)" }}
                >
                  Popular Tours
                </h2>
                <p className="text-white/45 text-[13px] tracking-wide max-w-[448px] mx-auto">
                  Explore our most sought-after travel experiences, handpicked by our team.
                </p>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5">
              {popularTours.map((tour, index) => (
                <AnimatedSection key={tour.id} delay={index * 0.1}>
                  <Link href={tour.href} className="group block">
                    <div
                      className="relative rounded-[14px] overflow-hidden cursor-pointer"
                      style={{ aspectRatio: "3/4" }}
                    >
                      <Image
                        src={tour.image}
                        alt={tour.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 card-gradient" />

                      {/* Content at bottom */}
                      <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5 z-10">
                        <p className="text-white/55 text-[10px] uppercase tracking-[0.14em] font-semibold mb-1">
                          {tour.tagline}
                        </p>
                        <h3
                          className="text-white font-black uppercase tracking-tight leading-tight mb-2"
                          style={{ fontSize: "clamp(14px, 2vw, 18px)" }}
                        >
                          {tour.name}
                        </h3>
                        <p className="text-white/40 text-[11px] leading-snug line-clamp-2">
                          {tour.description}
                        </p>
                      </div>
                    </div>
                  </Link>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* =============================
            WHY CHOOSE US (Features)
            ============================= */}
        <section
          className="py-20 md:py-28 px-4 md:px-10 border-t border-white/5"
          style={{ background: "#111111" }}
        >
          <div className="max-w-[1280px] mx-auto">
            <AnimatedSection className="mb-14 md:mb-16">
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 md:gap-8">
                <div className="flex-1 min-w-0">
                  <span className="section-divider" />
                  <h2
                    className="text-white font-black uppercase tracking-[0.04em] mb-3"
                    style={{ fontSize: "clamp(22px, 3vw, 32px)" }}
                  >
                    Why Travel With Us
                  </h2>
                  <p className="text-white/40 text-[14px] max-w-[512px] leading-relaxed">
                    We combine local expertise, global reach, and genuine passion to craft experiences that stay with you long after you return home.
                  </p>
                </div>
                <Link
                  href="/about"
                  className="btn btn-secondary btn-sm shrink-0 self-start md:self-auto"
                >
                  Learn More
                  <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                </Link>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
              {features.map((feature, index) => (
                <AnimatedSection key={feature.title} delay={index * 0.12}>
                  <div className="feature-card-modern group">
                    {/* Red top accent line */}
                    <div
                      className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                      style={{ background: "linear-gradient(90deg, #e63030, #ff6b6b)" }}
                    />
                    
                    {/* Icon */}
                    <div
                      className="w-12 h-12 rounded-[10px] flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-105"
                      style={{ background: "rgba(230,48,48,0.1)", border: "1px solid rgba(230,48,48,0.15)" }}
                    >
                      <span className="material-symbols-outlined text-[22px] fill" style={{ color: "#e63030" }}>
                        {feature.icon}
                      </span>
                    </div>

                    {/* Content */}
                    <h3 className="text-white font-bold text-[15px] uppercase tracking-wide mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-white/50 text-[13px] leading-[1.7]">
                      {feature.description}
                    </p>

                    {/* Subtle link */}
                    <div className="mt-5 pt-4 border-t border-white/5">
                      <span className="tour-card-link text-[10px] group-hover:gap-3 transition-all">
                        Explore
                        <span className="material-symbols-outlined text-[12px]">arrow_forward</span>
                      </span>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* =============================
            DISCOVER THE WORLD SECTION
            ============================= */}
        <section className="relative discover-section min-h-[560px] md:min-h-[680px]">
          {/* Background aerial image */}
          <div className="absolute inset-0">
            <Image
              src="/images/discover-aerial.png"
              alt="Aerial travel view"
              fill
              className="object-cover"
            />
            {/* Dark overlay */}
            <div className="absolute inset-0" style={{ background: "rgba(10,10,10,0.72)" }} />
          </div>

          <div className="relative z-10 max-w-[1280px] mx-auto px-4 md:px-10 py-16 md:py-24">
            <AnimatedSection>
              <div className="flex flex-col md:flex-row md:items-end gap-10 md:gap-16">
                {/* Left — Big headline */}
                <div className="flex-1">
                  <h2
                    className="text-white font-black uppercase leading-none tracking-[-0.01em] mb-8"
                    style={{ fontSize: "clamp(36px, 6vw, 72px)", lineHeight: 1.05 }}
                  >
                    Discover the
                    <br />
                    World in a
                    <br />
                    New Way
                  </h2>

                  <button className="play-btn mb-10 group">
                    <div className="play-btn-circle">
                      <span className="material-symbols-outlined text-white text-[20px] fill ml-[2px]">
                        play_arrow
                      </span>
                    </div>
                    Watch the Video
                  </button>

                  {/* Quote */}
                  <div className="max-w-[400px]">
                    <p className="text-white/55 text-[13px] leading-[1.8] italic mb-4">
                      {testimonialQuote}
                    </p>
                    <p className="text-white/35 text-[11px] uppercase tracking-[0.14em] font-bold">
                      © Carlos Castaneda
                    </p>
                  </div>
                </div>

                {/* Right — Video thumbnails */}
                <div className="flex flex-row md:flex-col gap-4 md:w-[340px] shrink-0">
                  {[
                    { src: "/images/video-thumb-1.png", label: "Tropical Escapes" },
                    { src: "/images/video-thumb-2.png", label: "Historic Cities" },
                  ].map((thumb, i) => (
                    <div key={i} className="video-thumb flex-1 md:flex-none group cursor-pointer">
                      <Image
                        src={thumb.src}
                        alt={thumb.label}
                        fill
                        className="object-cover"
                      />
                      {/* Play icon overlay */}
                      <div className="absolute inset-0 z-10 flex items-center justify-center">
                        <div
                          className="w-10 h-10 rounded-full flex items-center justify-center border border-white/60 group-hover:border-[#e63030] group-hover:bg-[rgba(230,48,48,0.2)] transition-all duration-300"
                        >
                          <span className="material-symbols-outlined text-white text-[16px] fill ml-[1px]">play_arrow</span>
                        </div>
                      </div>
                      {/* Label overlay */}
                      <div className="absolute bottom-0 left-0 right-0 z-10 p-3">
                        <span className="text-white/70 text-[10px] uppercase tracking-[0.12em] font-bold">
                          {thumb.label}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* =============================
            STATS BAR
            ============================= */}
        <section
          className="py-12 md:py-16 px-4 md:px-10 border-t border-b border-white/5"
          style={{ background: "#0d0d0d" }}
        >
          <div className="max-w-[1280px] mx-auto">
            <AnimatedSection>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0">
                {[
                  { value: "50K+", label: "Happy Travelers", icon: "group" },
                  { value: "120+", label: "Destinations", icon: "public" },
                  { value: "14+", label: "Years of Experience", icon: "workspace_premium" },
                  { value: "4.9★", label: "Average Rating", icon: "star" },
                ].map((stat, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center gap-2 px-4 relative"
                  >
                    {/* Vertical divider between items (desktop only) */}
                    {i > 0 && (
                      <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 w-px h-12 bg-white/8" />
                    )}
                    <span
                      className="material-symbols-outlined text-[20px] mb-1 fill"
                      style={{ color: "#e63030" }}
                    >
                      {stat.icon}
                    </span>
                    <span
                      className="font-black text-white"
                      style={{ fontSize: "clamp(28px, 4vw, 44px)" }}
                    >
                      {stat.value}
                    </span>
                    <span className="text-white/35 text-[11px] uppercase tracking-[0.14em] font-semibold text-center">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* =============================
            NEWSLETTER
            ============================= */}
        <section className="py-16 md:py-20 px-4 md:px-10" style={{ background: "#0d0d0d" }}>
          <div className="max-w-[1280px] mx-auto">
            <AnimatedSection>
              <div className="text-center max-w-[576px] mx-auto">
                <span className="block mx-auto section-divider" />
                <h2
                  className="text-white font-black uppercase tracking-[0.04em] mb-3"
                  style={{ fontSize: "clamp(20px, 2.5vw, 28px)" }}
                >
                  Stay Inspired
                </h2>
                <p className="text-white/40 text-[13px] leading-relaxed mb-8">
                  Get exclusive travel deals, destination guides, and insider tips delivered straight to your inbox.
                </p>
                <form
                  className="flex flex-col sm:flex-row gap-3 max-w-[512px] mx-auto"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="flex-1 h-[52px] px-5 rounded-full text-[14px] font-medium text-white placeholder:text-white/25 focus:outline-none focus:ring-2 focus:ring-[#e63030]/40 transition-all"
                    style={{
                      background: "rgba(22,22,22,0.9)",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}
                  />
                  <button
                    type="submit"
                    className="h-[52px] px-8 rounded-full font-bold text-[12px] uppercase tracking-[0.12em] text-white transition-all duration-300 hover:opacity-90 shrink-0"
                    style={{
                      background: "#e63030",
                      boxShadow: "0 4px 20px rgba(230,48,48,0.35)",
                    }}
                  >
                    Subscribe
                  </button>
                </form>
                <p className="text-white/20 text-[11px] mt-4">
                  No spam, ever. Unsubscribe anytime.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* =============================
            CTA — BOOK A TRIP
            ============================= */}
        <section className="py-16 md:py-24 px-4 md:px-10" style={{ background: "#111111" }}>
          <div className="max-w-[1280px] mx-auto">
            <AnimatedSection>
              <div
                className="relative rounded-[24px] overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 p-10 md:p-16"
                style={{
                  background: "linear-gradient(135deg, #161616 0%, #1a1118 50%, #161616 100%)",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                {/* Decorative red glow */}
                <div
                  className="absolute top-[-80px] right-[-80px] w-[320px] h-[320px] rounded-full blur-[120px] pointer-events-none opacity-25"
                  style={{ background: "#e63030" }}
                />
                {/* Second decorative glow */}
                <div
                  className="absolute bottom-[-60px] left-[-60px] w-[200px] h-[200px] rounded-full blur-[80px] pointer-events-none opacity-10"
                  style={{ background: "#e63030" }}
                />

                <div className="relative z-10 flex-1">
                  <span className="section-divider" />
                  <h2
                    className="text-white font-black uppercase tracking-[-0.01em] mb-4"
                    style={{ fontSize: "clamp(26px, 4vw, 48px)", lineHeight: 1.1 }}
                  >
                    The World Is<br />
                    Waiting for You
                  </h2>
                  <p className="text-white/45 text-[14px] leading-relaxed max-w-[420px]">
                    Join thousands of travelers who trust us to craft extraordinary adventures. Your dream destination is just one click away.
                  </p>
                </div>

                <div className="relative z-10 flex flex-col gap-4 md:items-end shrink-0">
                  <Link
                    href="/flights"
                    className="btn btn-primary btn-lg"
                  >
                    <span className="material-symbols-outlined text-[17px]">flight_takeoff</span>
                    Book a Flight
                  </Link>
                  <Link
                    href="/tours"
                    className="btn btn-secondary"
                  >
                    <span className="material-symbols-outlined text-[17px]">explore</span>
                    Explore Tours
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </div>
    </>
  );
}
