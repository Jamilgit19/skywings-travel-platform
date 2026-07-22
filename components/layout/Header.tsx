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
            ? "py-2 bg-white/90 backdrop-blur-xl shadow-[0_1px_3px_rgba(15,23,42,0.08)] border-b border-slate-200/60"
            : "py-4 bg-white/70 backdrop-blur-md"
        }`}
      >
        <div className="container flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 group"
            aria-label="SkyWings Home"
          >
            <div className="relative w-9 h-9 rounded-xl bg-gradient-to-br from-[#0B4F8A] to-[#2563EB] flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
              <Plane className="w-5 h-5 text-white -rotate-45" />
            </div>
            <span className="text-xl font-bold text-[#0F172A] tracking-tight">
              SKY<span className="text-[#2563EB]">WINGS</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-[#64748B] hover:text-[#0F172A] rounded-lg hover:bg-slate-100/80 transition-all duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            {/* WhatsApp Button - Desktop */}
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-2 px-3 py-2 text-sm font-medium text-green-700 bg-green-50 hover:bg-green-100 rounded-full transition-colors"
              aria-label="Contact via WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
              <span className="hidden xl:inline">WhatsApp</span>
            </a>

            {/* Currency Selector */}
            <button
              className="hidden md:flex items-center gap-1 px-3 py-2 text-sm font-medium text-[#64748B] hover:text-[#0F172A] rounded-lg hover:bg-slate-100/80 transition-colors"
              aria-label="Select currency"
            >
              <Globe className="w-4 h-4" />
              <span>USD</span>
              <ChevronDown className="w-3 h-3" />
            </button>

            {/* Search Icon */}
            <button
              className="w-10 h-10 flex items-center justify-center text-[#64748B] hover:text-[#0F172A] hover:bg-slate-100/80 rounded-full transition-colors"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Account Icon */}
            <Link
              href="/account"
              className="w-10 h-10 flex items-center justify-center text-[#64748B] hover:text-[#0F172A] hover:bg-slate-100/80 rounded-full transition-colors"
              aria-label="My account"
            >
              <User className="w-5 h-5" />
            </Link>

            {/* Save Trip CTA - Desktop */}
            <Link
              href="/flights"
              className="hidden md:inline-flex btn btn-primary btn-sm"
            >
              Save Trip
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden w-10 h-10 flex items-center justify-center text-[#0F172A] hover:bg-slate-100/80 rounded-full transition-colors"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
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
