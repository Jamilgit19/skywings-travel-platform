"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/flights", label: "Flights" },
  { href: "/hotels", label: "Hotels" },
  { href: "/packages", label: "Packages" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

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
        className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-500 ease-out ${
          isScrolled
            ? "py-0 border-b border-white/[0.08]"
            : "py-1 border-b border-transparent"
        }`}
        style={{
          background: isScrolled
            ? "rgba(6, 14, 32, 0.6)"
            : "rgba(6, 14, 32, 0.25)",
          backdropFilter: "blur(20px) saturate(180%)",
          WebkitBackdropFilter: "blur(20px) saturate(180%)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-12 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 group shrink-0"
            aria-label="SkyWings Home"
          >
            <span
              className="material-symbols-outlined fill text-primary text-[28px] group-hover:scale-110 transition-transform duration-300"
            >
              flight
            </span>
            <span className="text-[18px] font-extrabold text-primary uppercase tracking-tight leading-none">
              SKYWINGS
            </span>
          </Link>

          {/* Desktop Navigation — centered */}
          <nav className="hidden md:flex items-center gap-8 h-full" aria-label="Main navigation">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (pathname === "/" && link.href === "/flights");
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative text-[13px] font-semibold tracking-[0.03em] h-full flex items-center transition-colors duration-200 ${
                    isActive
                      ? "text-primary"
                      : "text-on-surface-variant hover:text-primary"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="navIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary rounded-full"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-2 md:gap-4 shrink-0">
            {/* WhatsApp */}
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:flex items-center gap-2 bg-white/[0.06] hover:bg-white/[0.12] text-primary px-4 py-2 rounded-full cursor-pointer transition-colors duration-200 border border-white/[0.08]"
              aria-label="Contact via WhatsApp"
            >
              <span className="material-symbols-outlined fill text-[18px]">chat</span>
              <span className="text-[13px] font-semibold tracking-wide">WhatsApp</span>
            </a>

            {/* Currency */}
            <button
              className="hidden lg:flex items-center gap-1 cursor-pointer text-on-surface-variant hover:text-primary transition-colors duration-200"
              aria-label="Select currency"
            >
              <span className="material-symbols-outlined text-[20px]">language</span>
              <span className="text-[13px] font-semibold">USD</span>
              <span className="material-symbols-outlined text-[14px]">expand_more</span>
            </button>

            {/* Search */}
            <button
              className="hidden sm:flex w-9 h-9 items-center justify-center text-on-surface-variant hover:text-primary hover:bg-white/[0.06] rounded-full transition-all duration-200"
              aria-label="Search"
            >
              <span className="material-symbols-outlined text-[22px]">search</span>
            </button>

            {/* Account */}
            <Link
              href="/account"
              className="hidden sm:flex w-9 h-9 items-center justify-center text-on-surface-variant hover:text-primary hover:bg-white/[0.06] rounded-full transition-all duration-200"
              aria-label="My account"
            >
              <span className="material-symbols-outlined text-[22px]">account_circle</span>
            </Link>

            {/* CTA */}
            <Link
              href="/account"
              className="hidden md:inline-flex bg-primary text-on-primary text-[14px] font-bold tracking-wide px-6 py-2.5 rounded-full hover:bg-primary-fixed-variant transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-[1px]"
            >
              Save Trip
            </Link>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden w-10 h-10 flex items-center justify-center text-primary hover:bg-white/[0.08] rounded-full transition-all duration-200"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
            >
              <span className="material-symbols-outlined text-[26px]">
                {isMobileMenuOpen ? "close" : "menu"}
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 md:hidden"
            style={{
              background: "rgba(6, 14, 32, 0.92)",
              backdropFilter: "blur(24px) saturate(180%)",
              WebkitBackdropFilter: "blur(24px) saturate(180%)",
            }}
          >
            <div className="pt-24 pb-8 px-6 h-full overflow-y-auto flex flex-col">
              <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
                {navLinks.map((link, index) => {
                  const isActive = pathname === link.href || (pathname === "/" && link.href === "/flights");
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: -24 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: index * 0.06,
                        duration: 0.35,
                        ease: [0.25, 0.1, 0.25, 1],
                      }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`flex items-center px-5 py-4 text-[20px] font-semibold rounded-xl transition-colors duration-200 ${
                          isActive
                            ? "text-primary bg-primary/10"
                            : "text-on-surface hover:bg-white/[0.04]"
                        }`}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  );
                })}

                <motion.div
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navLinks.length * 0.06, duration: 0.35 }}
                >
                  <Link
                    href="/manage-booking"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center px-5 py-4 text-[20px] font-semibold text-secondary hover:bg-secondary/5 rounded-xl transition-colors duration-200 mt-2"
                  >
                    Manage Booking
                  </Link>
                </motion.div>
              </nav>

              {/* Bottom Actions */}
              <div className="mt-auto pt-8 flex flex-col gap-4">
                <motion.a
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.3 }}
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-5 py-4 text-green-400 hover:bg-green-400/5 rounded-xl transition-colors border border-green-400/15"
                >
                  <span className="material-symbols-outlined fill text-[24px]">chat</span>
                  <span className="text-[15px] font-semibold">WhatsApp Support</span>
                </motion.a>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.3 }}
                  className="flex gap-3"
                >
                  <button className="flex-1 flex items-center justify-center gap-2 px-4 py-3 text-[13px] font-semibold text-on-surface-variant bg-white/[0.04] rounded-xl hover:bg-white/[0.08] transition-colors border border-white/[0.06]">
                    <span className="material-symbols-outlined text-[18px]">language</span>
                    USD
                  </button>
                  <button className="flex-1 flex items-center justify-center gap-2 px-4 py-3 text-[13px] font-semibold text-on-surface-variant bg-white/[0.04] rounded-xl hover:bg-white/[0.08] transition-colors border border-white/[0.06]">
                    <span className="material-symbols-outlined text-[18px]">public</span>
                    English
                  </button>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.3 }}
                >
                  <Link
                    href="/account"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="w-full flex items-center justify-center gap-2 bg-primary-container text-white text-[15px] font-semibold px-6 py-4 rounded-xl hover:bg-inverse-primary transition-colors"
                  >
                    <span className="material-symbols-outlined text-[20px]">account_circle</span>
                    Sign In / Save Trip
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
