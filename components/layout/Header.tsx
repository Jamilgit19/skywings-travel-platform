"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Plane,
  Menu,
  X,
  Search,
  User,
  Globe,
  ChevronDown,
  Phone,
  MessageCircle,
} from "lucide-react";

const navLinks = [
  { href: "/flights", label: "Flights" },
  { href: "/hotels", label: "Hotels" },
  { href: "/packages", label: "Tour Packages" },
  { href: "/visa", label: "Visa Assistance" },
  { href: "/insurance", label: "Insurance" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "py-2 bg-[#030712]/80 backdrop-blur-xl shadow-lg border-b border-white/10"
            : "py-4 bg-transparent backdrop-blur-sm"
        }`}
      >
        <div className="container mx-auto px-4 md:px-8 h-16 md:h-20 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 group"
            aria-label="SkyWings Home"
          >
            <div className="relative w-10 h-10 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:bg-white/20 transition-all">
              <Plane className="w-6 h-6 text-white -rotate-45" />
            </div>
            <span className="text-xl md:text-2xl font-extrabold tracking-tight text-white drop-shadow-md">
              SKY<span className="text-[#38BDF8]">WINGS</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
            <Link href="/flights" className="text-sm font-bold text-white border-b-2 border-[#38BDF8] pb-1 drop-shadow-sm">
              Flights
            </Link>
            <Link href="/hotels" className="text-sm font-semibold text-white/80 hover:text-white transition-colors pb-1 drop-shadow-sm">
              Hotels
            </Link>
            <Link href="/packages" className="text-sm font-semibold text-white/80 hover:text-white transition-colors pb-1 drop-shadow-sm">
              Tour Packages
            </Link>
            <Link href="/about" className="text-sm font-semibold text-white/80 hover:text-white transition-colors pb-1 drop-shadow-sm">
              About
            </Link>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-3 md:gap-5">
            {/* WhatsApp Button - Desktop */}
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-2 px-4 py-2 text-sm font-bold text-white bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 rounded-full transition-all shadow-sm"
              aria-label="Contact via WhatsApp"
            >
              <MessageCircle className="w-5 h-5 text-green-400" />
              <span>WhatsApp</span>
            </a>

            {/* Currency Selector */}
            <button
              className="hidden md:flex items-center gap-1 text-white/80 hover:text-white transition-colors"
              aria-label="Select currency"
            >
              <Globe className="w-5 h-5" />
              <span className="text-sm font-bold ml-1">USD</span>
              <ChevronDown className="w-4 h-4" />
            </button>

            {/* Search Icon */}
            <button
              className="w-10 h-10 flex items-center justify-center text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-all"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Account Icon */}
            <Link
              href="/account"
              className="w-10 h-10 flex items-center justify-center text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-all"
              aria-label="My account"
            >
              <User className="w-5 h-5" />
            </Link>

            {/* Sign In CTA - Desktop */}
            <Link
              href="/account"
              className="hidden md:inline-flex bg-[#38BDF8] text-[#030712] text-sm font-extrabold px-6 py-2.5 rounded-full hover:bg-white transition-colors shadow-[0_0_15px_rgba(56,189,248,0.5)]"
            >
              Sign In
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden w-10 h-10 flex items-center justify-center text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-all"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-white lg:hidden"
          >
            <div className="pt-20 pb-8 px-6 h-full overflow-y-auto">
              <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: index * 0.05,
                      duration: 0.3,
                      ease: [0.25, 0.1, 0.25, 1],
                    }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center px-4 py-3.5 text-lg font-medium text-[#0F172A] hover:bg-slate-50 rounded-xl transition-colors"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: navLinks.length * 0.05,
                    duration: 0.3,
                  }}
                >
                  <Link
                    href="/manage-booking"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center px-4 py-3.5 text-lg font-medium text-[#2563EB] hover:bg-blue-50 rounded-xl transition-colors"
                  >
                    Manage Booking
                  </Link>
                </motion.div>
              </nav>

              {/* Mobile Contact Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.3 }}
                className="mt-8 pt-6 border-t border-slate-100"
              >
                <p className="text-label mb-4 px-4">Contact Us</p>
                <a
                  href="tel:+1234567890"
                  className="flex items-center gap-3 px-4 py-3 text-[#0F172A] hover:bg-slate-50 rounded-xl transition-colors"
                >
                  <Phone className="w-5 h-5 text-[#2563EB]" />
                  <span className="font-medium">+1 (234) 567-890</span>
                </a>
                <a
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-3 text-green-700 hover:bg-green-50 rounded-xl transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span className="font-medium">WhatsApp Support</span>
                </a>
              </motion.div>

              {/* Mobile Actions */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.3 }}
                className="mt-6 px-4 flex flex-col gap-3"
              >
                <Link
                  href="/flights"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="btn btn-primary btn-lg w-full"
                >
                  Search Flights
                </Link>
                <Link
                  href="/account"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="btn btn-secondary btn-lg w-full"
                >
                  <User className="w-5 h-5" />
                  Sign In / Register
                </Link>
              </motion.div>

              {/* Currency & Language */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.3 }}
                className="mt-6 px-4 flex gap-3"
              >
                <button className="flex-1 flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium text-[#64748B] bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors">
                  <Globe className="w-4 h-4" />
                  USD
                </button>
                <button className="flex-1 flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium text-[#64748B] bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors">
                  🌐 English
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
