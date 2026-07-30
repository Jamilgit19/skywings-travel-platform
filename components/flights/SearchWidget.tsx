"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type TripType = "roundtrip" | "oneway" | "multicity";

export default function SearchWidget() {
  const [tripType, setTripType] = useState<TripType>("roundtrip");
  const [origin, setOrigin] = useState("New York (JFK)");
  const [destination, setDestination] = useState("Paris (CDG)");
  const [isSwapping, setIsSwapping] = useState(false);

  const handleSwap = () => {
    setIsSwapping(true);
    const temp = origin;
    setOrigin(destination);
    setDestination(temp);
    setTimeout(() => setIsSwapping(false), 400);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams({
      type: tripType,
      from: origin,
      to: destination,
    });
    window.location.href = `/flights/search?${params.toString()}`;
  };

  return (
    <div className="w-full max-w-5xl mx-auto">
      <div
        className="rounded-[16px] shadow-2xl border border-white/6 overflow-hidden"
        style={{ background: "rgba(13,13,13,0.92)", backdropFilter: "blur(20px)" }}
      >
        {/* Tabs */}
        <div className="flex border-b border-white/6" style={{ background: "rgba(10,10,10,0.6)" }}>
          {([
            { value: "roundtrip" as TripType, label: "Flights", icon: "flight" },
            { value: "oneway" as TripType, label: "Hotels", icon: "hotel" },
            { value: "multicity" as TripType, label: "Packages", icon: "luggage" },
          ]).map((tab) => (
            <button
              key={tab.value}
              type="button"
              onClick={() => setTripType(tab.value)}
              className={`flex-1 py-4 flex items-center justify-center gap-2.5 transition-all duration-300 relative ${
                tripType === tab.value
                  ? "text-white"
                  : "text-white/35 hover:text-white/70"
              }`}
            >
              <span className={`material-symbols-outlined text-[18px] transition-all duration-300 ${tripType === tab.value ? 'fill' : ''}`}>{tab.icon}</span>
              <span className="text-[11px] font-bold uppercase tracking-[0.12em]">{tab.label}</span>
              {tripType === tab.value && (
                <motion.div
                  layoutId="searchTabIndicator"
                  className="absolute bottom-0 left-[20%] right-[20%] h-[2px]"
                  style={{ background: "#e63030" }}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Search Form */}
        <form onSubmit={handleSearch} className="p-5 md:p-6" style={{ background: "rgba(16,16,16,0.7)" }}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 items-center">
            
            {/* From & To Wrapper (Spans 2 columns on lg) */}
            <div className="lg:col-span-2 flex flex-col md:flex-row items-center gap-2 relative w-full">
              {/* From */}
              <div className="w-full h-[64px] relative border border-white/8 rounded-[10px] px-4 py-2 flex flex-col justify-center focus-within:border-[#e63030]/50 transition-all" style={{ background: "rgba(20,20,20,0.9)" }}>
                <span className="text-[10px] font-bold text-white/30 uppercase tracking-wider leading-none mb-1 pointer-events-none">From</span>
                <div className="flex items-center justify-between">
                  <input
                    type="text"
                    value={origin}
                    onChange={(e) => setOrigin(e.target.value)}
                    placeholder="City or Airport"
                    className="w-full bg-transparent border-none p-0 focus:outline-none focus:ring-0 text-[14px] font-semibold text-white leading-tight truncate placeholder:text-white/20"
                    required
                  />
                  <span className="material-symbols-outlined text-white/25 text-[17px] shrink-0 ml-1 pointer-events-none">flight_takeoff</span>
                </div>
              </div>

              {/* Swap Button */}
              <motion.button
                type="button"
                onClick={handleSwap}
                animate={{ rotate: isSwapping ? 180 : 0 }}
                transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/40 shrink-0 cursor-pointer hover:border-[#e63030]/50 hover:text-[#e63030] transition-colors shadow-sm z-10 md:absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2"
                style={{ background: "rgba(22,22,22,0.9)" }}
                aria-label="Swap origin and destination"
              >
                <span className="material-symbols-outlined text-[15px]">swap_horiz</span>
              </motion.button>

              {/* To */}
              <div className="w-full h-[64px] relative border border-white/8 rounded-[10px] px-4 py-2 flex flex-col justify-center focus-within:border-[#e63030]/50 transition-all" style={{ background: "rgba(20,20,20,0.9)" }}>
                <span className="text-[10px] font-bold text-white/30 uppercase tracking-wider leading-none mb-1 pointer-events-none">To</span>
                <div className="flex items-center justify-between">
                  <input
                    type="text"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    placeholder="Where to?"
                    className="w-full bg-transparent border-none p-0 focus:outline-none focus:ring-0 text-[14px] font-semibold text-white leading-tight truncate placeholder:text-white/20"
                    required
                  />
                  <span className="material-symbols-outlined text-white/25 text-[17px] shrink-0 ml-1 pointer-events-none">flight_land</span>
                </div>
              </div>
            </div>

            {/* Dates */}
            <div className="lg:col-span-1 w-full h-[64px] relative border border-white/8 rounded-[10px] px-4 py-2 flex flex-col justify-center focus-within:border-[#e63030]/50 transition-all" style={{ background: "rgba(20,20,20,0.9)" }}>
              <span className="text-[10px] font-bold text-white/30 uppercase tracking-wider leading-none mb-1 pointer-events-none">Dates</span>
              <div className="flex items-center justify-between">
                <input
                  type="text"
                  placeholder="Select Dates"
                  defaultValue="Aug 10 – Aug 24"
                  className="w-full bg-transparent border-none p-0 focus:outline-none focus:ring-0 text-[14px] font-semibold text-white leading-tight cursor-pointer truncate placeholder:text-white/20"
                />
                <span className="material-symbols-outlined text-white/25 text-[17px] shrink-0 ml-1 pointer-events-none">calendar_month</span>
              </div>
            </div>

            {/* Passengers */}
            <div className="lg:col-span-1 w-full h-[64px] relative border border-white/8 rounded-[10px] px-4 py-2 flex flex-col justify-center cursor-pointer focus-within:border-[#e63030]/50 transition-all" style={{ background: "rgba(20,20,20,0.9)" }}>
              <span className="text-[10px] font-bold text-white/30 uppercase tracking-wider leading-none mb-1 pointer-events-none">Travelers</span>
              <div className="flex items-center justify-between">
                <span className="text-[14px] font-semibold text-white truncate leading-tight">2 Adults</span>
                <span className="material-symbols-outlined text-white/25 text-[17px] shrink-0 ml-1 pointer-events-none">person</span>
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="lg:col-span-1 w-full h-[64px] px-6 text-white rounded-[10px] font-black text-[11px] tracking-[0.14em] uppercase flex items-center justify-center gap-2.5 transition-all duration-300 shadow-[0_4px_20px_rgba(230,48,48,0.35)] hover:shadow-[0_8px_30px_rgba(230,48,48,0.5)] hover:opacity-90 shrink-0 cursor-pointer active:scale-95 group/search"
              style={{ background: "#e63030" }}
            >
              <span className="material-symbols-outlined text-[18px] transition-transform duration-300 group-hover/search:rotate-12">search</span>
              <span>Search</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
