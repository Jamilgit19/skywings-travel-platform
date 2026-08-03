"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Main" },
  { href: "/about", label: "About Us" },
  { href: "/tours", label: "Tours" },
  { href: "/gallery", label: "Gallery" },
  { href: "/reviews", label: "Reviews" },
  { href: "/contact", label: "Contacts" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
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
        className={`fixed left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
          isScrolled ? "top-0" : "top-0"
        }`}
        style={
          isScrolled
            ? {
                background: "rgba(13, 13, 13, 0.92)",
                backdropFilter: "blur(20px) saturate(180%)",
                WebkitBackdropFilter: "blur(20px) saturate(180%)",
                borderBottom: "1px solid rgba(255,255,255,0.06)",
                boxShadow: "0 4px 24px rgba(0,0,0,0.4)",
              }
            : {
                background: "linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0) 100%)",
              }
        }
      >
        <div
          className={`max-w-[1440px] mx-auto px-6 md:px-12 flex items-center justify-between transition-all duration-500 ${
            isScrolled ? "h-[56px]" : "h-[68px]"
          }`}
        >
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 group shrink-0"
            aria-label="SkyWings Home"
          >
            {/* Red square logo mark */}
            <div
              className="w-7 h-7 rounded-[3px] flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
              style={{ background: "#e63030" }}
            >
              <span className="material-symbols-outlined fill text-white text-[16px]">
                flight
              </span>
            </div>
            <span
              className="text-[13px] font-black uppercase tracking-[0.2em] text-white leading-none"
            >
              Werlton
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="hidden md:flex items-center gap-7 h-full"
            aria-label="Main navigation"
          >
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative text-[11px] font-bold tracking-[0.12em] uppercase transition-colors duration-300 py-1 ${
                    isActive
                      ? "text-white"
                      : "text-white/55 hover:text-white"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="navUnderline"
                      className="absolute -bottom-0.5 left-0 right-0 h-[2px]"
                      style={{ background: "#e63030" }}
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-2 shrink-0">
            {/* Search icon */}
            <button
              className="w-9 h-9 flex items-center justify-center text-white/40 hover:text-white rounded-full hover:bg-white/5 transition-all duration-300"
              aria-label="Search"
            >
              <span className="material-symbols-outlined text-[18px]">search</span>
            </button>

            {/* Account icon (desktop) */}
            <button
              className="hidden md:flex w-9 h-9 items-center justify-center text-white/40 hover:text-white rounded-full hover:bg-white/5 transition-all duration-300"
              aria-label="Account"
            >
              <span className="material-symbols-outlined text-[18px]">person</span>
            </button>

            {/* Mobile Toggle */}
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden w-9 h-9 flex items-center justify-center text-white hover:text-white/70 transition-all duration-300"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              <span className="material-symbols-outlined text-[22px]">
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
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
            className="fixed inset-0 z-40 md:hidden"
            style={{ background: "#0d0d0d" }}
          >
            <div className="pt-24 pb-10 px-8 h-full flex flex-col">
              <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
                {navLinks.map((link, index) => {
                  const isActive = pathname === link.href;
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: index * 0.07,
                        duration: 0.35,
                        ease: [0.25, 0.1, 0.25, 1],
                      }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`flex items-center py-4 text-[28px] font-black uppercase tracking-wider transition-all duration-300 border-b ${
                          isActive
                            ? "text-white border-white/10"
                            : "text-white/35 hover:text-white border-white/5"
                        }`}
                      >
                        {isActive && (
                          <span
                            className="w-2 h-2 rounded-full mr-4 shrink-0"
                            style={{ background: "#e63030" }}
                          />
                        )}
                        {link.label}
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              <div className="mt-auto pt-8 flex flex-col gap-3">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.45, duration: 0.35 }}
                >
                  <Link
                    href="/flights"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="btn btn-primary w-full justify-center"
                  >
                    Book a Flight
                  </Link>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.55, duration: 0.35 }}
                  className="text-center"
                >
                  <p className="text-white/25 text-[11px] uppercase tracking-[0.12em] mt-4">
                    24/7 Support: +1 (800) 555-0199
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
