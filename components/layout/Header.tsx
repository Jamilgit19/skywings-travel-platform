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
        className={`fixed left-0 right-0 z-50 transition-all duration-500 ease-in-out flex justify-center ${
          isScrolled ? "top-4 px-4" : "top-0 px-0"
        }`}
      >
        <div
          className={`w-full max-w-7xl mx-auto flex items-center justify-between transition-all duration-500 ${
            isScrolled
              ? "h-16 px-6 md:px-8 rounded-full border shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]"
              : "h-20 px-6 md:px-12"
          }`}
          style={
            isScrolled
              ? {
                  background: "rgba(11, 19, 38, 0.75)",
                  backdropFilter: "blur(24px) saturate(200%)",
                  WebkitBackdropFilter: "blur(24px) saturate(200%)",
                  borderColor: "rgba(255, 255, 255, 0.1)",
                }
              : {
                  background: "linear-gradient(to bottom, rgba(11,19,38,0.8) 0%, rgba(11,19,38,0) 100%)",
                  borderColor: "transparent",
                }
          }
        >
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 group shrink-0"
            aria-label="SkyWings Home"
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-primary to-secondary flex items-center justify-center shadow-lg group-hover:shadow-primary/30 transition-all duration-300 group-hover:scale-105">
              <span className="material-symbols-outlined fill text-on-primary text-[24px]">
                flight
              </span>
            </div>
            <span className="text-[20px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70 uppercase tracking-widest leading-none">
              SkyWings
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-2 h-full" aria-label="Main navigation">
            {navLinks.map((link) => {
              const isActive =
                pathname === link.href || (pathname === "/" && link.href === "/flights");
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative px-4 py-2 rounded-full text-[14px] font-semibold tracking-wide transition-colors duration-300"
                >
                  <span className={`relative z-10 ${isActive ? "text-white" : "text-white/70 hover:text-white"}`}>
                    {link.label}
                  </span>
                  {isActive && (
                    <motion.div
                      layoutId="navIndicatorDesktop"
                      className="absolute inset-0 bg-white/10 rounded-full border border-white/5"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Search */}
            <button
              className="hidden sm:flex w-10 h-10 items-center justify-center text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300"
              aria-label="Search"
            >
              <span className="material-symbols-outlined text-[20px]">search</span>
            </button>

            {/* Currency */}
            <button
              className="hidden lg:flex items-center gap-1.5 px-3 py-2 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-all duration-300"
              aria-label="Select currency"
            >
              <span className="material-symbols-outlined text-[18px]">language</span>
              <span className="text-[13px] font-semibold">USD</span>
            </button>

            {/* CTA */}
            <Link
              href="/account"
              className="hidden md:inline-flex items-center justify-center gap-2 bg-white text-surface text-[14px] font-bold tracking-wide px-6 py-2.5 rounded-full hover:bg-primary-fixed hover:text-on-primary-fixed transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(255,255,255,0.2)] transform hover:-translate-y-0.5"
            >
              Sign In
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </Link>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden w-10 h-10 flex items-center justify-center text-white hover:bg-white/10 rounded-full transition-all duration-300"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              <span className="material-symbols-outlined text-[24px]">
                {isMobileMenuOpen ? "close" : "menu_open"}
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(24px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 md:hidden bg-surface/90"
          >
            <div className="pt-28 pb-8 px-6 h-full overflow-y-auto flex flex-col">
              <nav className="flex flex-col gap-2" aria-label="Mobile navigation">
                {navLinks.map((link, index) => {
                  const isActive =
                    pathname === link.href || (pathname === "/" && link.href === "/flights");
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: index * 0.1,
                        duration: 0.4,
                        ease: [0.25, 0.1, 0.25, 1],
                      }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`flex items-center px-6 py-4 text-[22px] font-bold rounded-2xl transition-all duration-300 ${
                          isActive
                            ? "bg-gradient-to-r from-primary/20 to-transparent text-primary border-l-4 border-primary"
                            : "text-white/70 hover:text-white hover:bg-white/5 border-l-4 border-transparent"
                        }`}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              <div className="mt-auto pt-8 flex flex-col gap-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.4 }}
                >
                  <Link
                    href="/account"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="w-full flex items-center justify-center gap-2 bg-white text-surface text-[16px] font-bold px-6 py-4 rounded-full hover:bg-primary-fixed transition-all"
                  >
                    Sign In
                    <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
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
