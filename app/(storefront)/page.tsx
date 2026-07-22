"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Star,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Plane,
  CreditCard,
  Navigation,
  Shield,
  Clock,
  Headphones,
  Award,
  Briefcase,
  Globe,
  Heart,
  ArrowRight,
  Mail,
  CheckCircle,
  Quote,
  Hotel,
  FileText,
  Umbrella,
  Users,
} from "lucide-react";
import { useState } from "react";
import SearchWidget from "@/components/flights/SearchWidget";
import AnimatedSection from "@/components/ui/AnimatedSection";
import ScrollSequence from "@/components/ui/ScrollSequence";

/* =============================================
   DATA
   ============================================= */

const partnerLogos = [
  { name: "Airbnb", icon: "✦" },
  { name: "Booking.com", icon: "B" },
  { name: "Trivago", icon: "T" },
  { name: "Expedia", icon: "E" },
  { name: "Kayak", icon: "K" },
];

const popularDestinations = [
  {
    name: "Bali, Indonesia",
    image: "/images/destinations.png",
    rating: 4.8,
    reviews: 2847,
    price: "$450",
    period: "Oct — Dec",
  },
  {
    name: "Paris, France",
    image: "/images/destinations.png",
    rating: 4.9,
    reviews: 5213,
    price: "$680",
    period: "Apr — Jun",
  },
  {
    name: "Tokyo, Japan",
    image: "/images/destinations.png",
    rating: 4.7,
    reviews: 3491,
    price: "$720",
    period: "Mar — May",
  },
  {
    name: "Dubai, UAE",
    image: "/images/destinations.png",
    rating: 4.8,
    reviews: 4102,
    price: "$520",
    period: "Nov — Feb",
  },
];

const journeySteps = [
  {
    step: 1,
    icon: Navigation,
    title: "Find Your Destination",
    description:
      "Search from thousands of routes worldwide. Compare airlines, prices, and schedules to find your perfect flight.",
  },
  {
    step: 2,
    icon: CreditCard,
    title: "Book A Ticket",
    description:
      "Instantly book a trip, get a flight, and choose from over 500+ airlines at an unbeatable price. Secure checkout guaranteed.",
  },
  {
    step: 3,
    icon: Plane,
    title: "Pay & Start Journey",
    description:
      "Pay securely using your preferred method. Receive your e-ticket and start your adventure with confidence.",
  },
];

const travelServices = [
  {
    icon: Plane,
    title: "Flight Tickets",
    description: "Domestic & international flights at the best fares",
    href: "/flights",
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: Hotel,
    title: "Hotel Booking",
    description: "Find the perfect stay for your trip",
    href: "/hotels",
    color: "bg-amber-50 text-amber-600",
  },
  {
    icon: FileText,
    title: "Visa Assistance",
    description: "Hassle-free visa processing for any country",
    href: "/visa",
    color: "bg-green-50 text-green-600",
  },
  {
    icon: Globe,
    title: "Tour Packages",
    description: "Curated travel packages to dream destinations",
    href: "/packages",
    color: "bg-purple-50 text-purple-600",
  },
  {
    icon: Umbrella,
    title: "Travel Insurance",
    description: "Travel with peace of mind and full coverage",
    href: "/insurance",
    color: "bg-rose-50 text-rose-600",
  },
  {
    icon: Briefcase,
    title: "Corporate Travel",
    description: "Managed travel solutions for businesses",
    href: "/corporate-travel",
    color: "bg-slate-100 text-slate-600",
  },
];

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Frequent Traveller",
    content:
      "SkyWings made booking my flight to Dubai incredibly easy. The prices were unbeatable and the customer support was fantastic throughout.",
    rating: 5,
    route: "London → Dubai",
  },
  {
    name: "Ahmed Rahman",
    role: "Business Traveller",
    content:
      "I use SkyWings for all my corporate travel. Their booking system is efficient and the visa assistance service saved me hours of paperwork.",
    rating: 5,
    route: "Dhaka → Singapore",
  },
  {
    name: "Emma Chen",
    role: "Family Traveller",
    content:
      "Booked a family tour package to Bali through SkyWings. Everything was perfectly organized from flights to hotels. Will definitely book again!",
    rating: 5,
    route: "Sydney → Bali",
  },
];

const trustItems = [
  {
    icon: Shield,
    title: "Secure Payments",
    description: "256-bit SSL encryption",
  },
  {
    icon: Award,
    title: "Verified Agency",
    description: "Licensed & accredited",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Always here for you",
  },
  {
    icon: Headphones,
    title: "Expert Assistance",
    description: "Dedicated travel experts",
  },
];

/* =============================================
   COMPONENT
   ============================================= */

export default function HomePage() {
  const [destIndex, setDestIndex] = useState(0);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const visibleDestinations = popularDestinations.slice(destIndex, destIndex + 3);
  const canPrev = destIndex > 0;
  const canNext = destIndex + 3 < popularDestinations.length;

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <>
      {/* =============================
          INTRO SCROLL SEQUENCE
          ============================= */}
      <ScrollSequence frameCount={283} framePrefix="/frames/ezgif-frame-" />

      <div className="relative z-10 bg-background rounded-t-[32px] md:rounded-t-[48px] mt-[-40px] shadow-[0_-10px_40px_rgba(0,0,0,0.3)]">
        {/* =============================
            HERO SECTION WITH SEARCH
            ============================= */}
        <section className="relative w-full px-4 md:px-16 pt-8 md:pt-12 pb-12">
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
            {/* Gradient Overlay for text visibility */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0037b0]/40 via-transparent to-[#faf8ff]/90" />
            
            {/* Hero Text with Animation */}
            <div className="absolute top-12 md:top-20 left-6 md:left-16 max-w-lg z-10">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-xs md:text-sm font-bold text-white tracking-widest uppercase mb-4 block opacity-90 drop-shadow-md"
              >
                Elevate Your Travel
              </motion.p>
              
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-[28px] leading-[36px] md:text-[48px] md:leading-[56px] text-white font-extrabold drop-shadow-lg"
              >
                Experience The Magic Of Flight
              </motion.h1>
            </div>
          </div>

          {/* Search Widget (Elevated) */}
          <div className="relative z-10 w-full max-w-4xl mx-auto">
            <SearchWidget />
          </div>
        </section>

        {/* =============================
            PARTNER LOGOS
            ============================= */}
        <section className="py-10 border-b border-slate-100">
          <div className="container">
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14">
              {partnerLogos.map((partner) => (
                <div
                  key={partner.name}
                  className="flex items-center gap-2 text-slate-300 hover:text-slate-500 transition-colors"
                >
                  <span className="text-xl font-bold">{partner.icon}</span>
                  <span className="text-lg font-semibold tracking-tight">
                    {partner.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =============================
            POPULAR DESTINATIONS
            ============================= */}
        <section className="section-spacing">
          <div className="container">
            <AnimatedSection>
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
                <div>
                  <p className="text-label text-[#2563EB] mb-2 uppercase tracking-widest font-semibold">
                    Explore The World
                  </p>
                  <h2 className="heading-section text-[#0F172A]">
                    Popular Destinations
                  </h2>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setDestIndex(Math.max(0, destIndex - 1))}
                    disabled={!canPrev}
                    className="w-10 h-10 flex items-center justify-center rounded-full border border-slate-200 hover:border-[#2563EB] hover:bg-blue-50 text-[#64748B] hover:text-[#2563EB] transition-all disabled:opacity-30 disabled:pointer-events-none shadow-sm"
                    aria-label="Previous destinations"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() =>
                      setDestIndex(
                        Math.min(popularDestinations.length - 3, destIndex + 1)
                      )
                    }
                    disabled={!canNext}
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-[#2563EB] text-white hover:bg-[#1d4ed8] transition-colors disabled:opacity-30 disabled:pointer-events-none shadow-sm shadow-blue-500/20"
                    aria-label="Next destinations"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {visibleDestinations.map((dest, index) => (
                <AnimatedSection key={dest.name} delay={index * 0.1}>
                  <Link href={`/flights?to=${dest.name}`} className="group block">
                    <div className="card overflow-hidden">
                      <div className="relative h-56 overflow-hidden">
                        <Image
                          src={dest.image}
                          alt={dest.name}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute top-3 right-3 flex items-center gap-1 px-2.5 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold">
                          <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                          {dest.rating}
                        </div>
                      </div>
                      <div className="p-5">
                        <div className="flex items-center gap-2 mb-1">
                          <MapPin className="w-4 h-4 text-[#2563EB]" />
                          <h3 className="heading-card text-[#0F172A] group-hover:text-[#2563EB] transition-colors">
                            {dest.name}
                          </h3>
                        </div>
                        <p className="text-sm text-[#64748B] mb-3">
                          {dest.reviews.toLocaleString()} reviews • {dest.period}
                        </p>
                        <div className="flex items-center justify-between">
                          <p className="text-lg font-bold text-[#0F172A]">
                            From{" "}
                            <span className="text-[#2563EB]">{dest.price}</span>
                          </p>
                          <span className="text-sm font-medium text-[#2563EB] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                            Explore <ArrowRight className="w-4 h-4" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* =============================
            JOURNEY STEPS
            ============================= */}
        <section className="section-spacing bg-[#F1F5F9]">
          <div className="container">
            <AnimatedSection className="text-center mb-14">
              <p className="text-label text-[#2563EB] mb-2">How It Works</p>
              <h2 className="heading-section text-[#0F172A] mb-4">
                Journey To The Skies Made Simple!
              </h2>
              <p className="text-body max-w-2xl mx-auto">
                Travelling is easier than ever. Book in 3 easy steps and start
                your adventure. We handle everything so you can focus on making
                memories.
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
              {journeySteps.map((step, index) => (
                <AnimatedSection key={step.step} delay={index * 0.15}>
                  <div
                    className={`relative h-full p-8 rounded-2xl text-center transition-all ${
                      index === 1
                        ? "bg-[#2563EB] text-white shadow-xl shadow-blue-500/25 scale-105"
                        : "bg-white border border-slate-200/60"
                    }`}
                  >
                    {/* Step Number */}
                    <div
                      className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-5 ${
                        index === 1
                          ? "bg-white/20 text-white"
                          : "bg-blue-50 text-[#2563EB]"
                      }`}
                    >
                      <step.icon className="w-7 h-7" />
                    </div>

                    <h3
                      className={`text-xl font-bold mb-3 ${
                        index === 1 ? "text-white" : "text-[#0F172A]"
                      }`}
                    >
                      {step.title}
                    </h3>
                    <p
                      className={`text-sm leading-relaxed ${
                        index === 1 ? "text-white/80" : "text-[#64748B]"
                      }`}
                    >
                      {step.description}
                    </p>

                    {index === 1 && (
                      <Link
                        href="/flights"
                        className="inline-flex items-center gap-2 mt-5 px-5 py-2.5 bg-white text-[#2563EB] rounded-full text-sm font-semibold hover:bg-white/90 transition-colors"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    )}
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* =============================
            WANDERLUST CTA SECTION
            ============================= */}
        <section className="section-spacing overflow-hidden">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              {/* Image Side */}
              <AnimatedSection direction="left" className="relative">
                <div className="relative rounded-3xl overflow-hidden h-[400px] md:h-[500px]">
                  <Image
                    src="/images/beach-promo.png"
                    alt="Family enjoying a tropical beach vacation"
                    fill
                    className="object-cover"
                  />
                  {/* Promo Badge */}
                  <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm rounded-2xl p-5 shadow-lg">
                    <p className="text-3xl font-bold text-[#2563EB]">20% OFF</p>
                    <p className="text-sm text-[#64748B]">
                      On September 2026 flights
                    </p>
                  </div>
                </div>
              </AnimatedSection>

              {/* Content Side */}
              <AnimatedSection direction="right">
                <p className="text-label text-[#2563EB] mb-3">
                  Special Promotion
                </p>
                <h2 className="heading-section text-[#0F172A] mb-5 uppercase leading-tight">
                  Unleash
                  <br />
                  Wanderlust With
                  <br />
                  <span className="text-[#2563EB]">SkyWings</span>
                </h2>
                <p className="text-body mb-8 max-w-md">
                  Turn your dream destination into reality. Explore hidden
                  paradises, vibrant cities, and serene beaches. Experience the
                  world with SkyWings by your side.
                </p>
                <Link
                  href="/flights"
                  className="btn btn-primary btn-lg shadow-lg shadow-blue-500/20"
                >
                  Book A Flight Now
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* =============================
            TRAVEL SERVICES
            ============================= */}
        <section className="section-spacing bg-[#F1F5F9]">
          <div className="container">
            <AnimatedSection className="text-center mb-12">
              <p className="text-label text-[#2563EB] mb-2">What We Offer</p>
              <h2 className="heading-section text-[#0F172A] mb-4">
                Complete Travel Solutions
              </h2>
              <p className="text-body max-w-2xl mx-auto">
                From flights to visa processing, hotel bookings to travel
                insurance — we&apos;ve got everything covered for your perfect trip.
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {travelServices.map((service, index) => (
                <AnimatedSection key={service.title} delay={index * 0.08}>
                  <Link href={service.href} className="group block">
                    <div className="card p-6 h-full hover:border-[#2563EB]/20">
                      <div
                        className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${service.color} mb-4`}
                      >
                        <service.icon className="w-6 h-6" />
                      </div>
                      <h3 className="heading-card text-[#0F172A] mb-2 group-hover:text-[#2563EB] transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-sm text-[#64748B] leading-relaxed">
                        {service.description}
                      </p>
                      <span className="inline-flex items-center gap-1 mt-4 text-sm font-medium text-[#2563EB] opacity-0 group-hover:opacity-100 transition-opacity">
                        Learn more <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </Link>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* =============================
            TRUST SECTION
            ============================= */}
        <section className="section-spacing">
          <div className="container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {trustItems.map((item, index) => (
                <AnimatedSection key={item.title} delay={index * 0.1}>
                  <div className="text-center p-6">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-blue-50 text-[#2563EB] mb-4">
                      <item.icon className="w-7 h-7" />
                    </div>
                    <h3 className="text-base font-bold text-[#0F172A] mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[#64748B]">{item.description}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* =============================
            TESTIMONIALS
            ============================= */}
        <section className="section-spacing bg-[#082F49]">
          <div className="container">
            <AnimatedSection className="text-center mb-12">
              <p className="text-label text-[#38BDF8] mb-2">Testimonials</p>
              <h2 className="heading-section text-white mb-4">
                What Our Travellers Say
              </h2>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <AnimatedSection key={testimonial.name} delay={index * 0.12}>
                  <div className="p-7 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm h-full">
                    {/* Quote */}
                    <Quote className="w-8 h-8 text-[#38BDF8] mb-4 opacity-50" />

                    {/* Rating */}
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 text-yellow-400 fill-yellow-400"
                        />
                      ))}
                    </div>

                    {/* Content */}
                    <p className="text-white/80 text-sm leading-relaxed mb-6">
                      &quot;{testimonial.content}&quot;
                    </p>

                    {/* Author */}
                    <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#38BDF8] to-[#2563EB] flex items-center justify-center text-white font-bold text-sm">
                        {testimonial.name[0]}
                      </div>
                      <div>
                        <p className="text-white text-sm font-semibold">
                          {testimonial.name}
                        </p>
                        <p className="text-white/50 text-xs">
                          {testimonial.route}
                        </p>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* =============================
            NEWSLETTER
            ============================= */}
        <section className="section-spacing">
          <div className="container">
            <AnimatedSection>
              <div className="max-w-2xl mx-auto text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-blue-50 text-[#2563EB] mb-5">
                  <Mail className="w-7 h-7" />
                </div>
                <h2 className="heading-section text-[#0F172A] mb-4">
                  Stay Updated
                </h2>
                <p className="text-body mb-8">
                  Subscribe to receive exclusive flight deals, travel tips, and
                  special offers delivered to your inbox.
                </p>

                {subscribed ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex items-center justify-center gap-3 text-green-600"
                  >
                    <CheckCircle className="w-6 h-6" />
                    <span className="text-lg font-semibold">
                      You&apos;re subscribed! Check your inbox.
                    </span>
                  </motion.div>
                ) : (
                  <form
                    onSubmit={handleSubscribe}
                    className="flex flex-col sm:flex-row items-center gap-3 max-w-md mx-auto"
                  >
                    <div className="relative flex-1 w-full">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#64748B]" />
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        className="input pl-12 py-3.5"
                        required
                        aria-label="Email for newsletter"
                      />
                    </div>
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="btn btn-primary py-3.5 px-8 w-full sm:w-auto"
                    >
                      Subscribe
                    </motion.button>
                  </form>
                )}

                <p className="text-xs text-[#64748B] mt-4">
                  No spam, unsubscribe at any time. We respect your privacy.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </div>
    </>
  );
}
