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
      <div className="glass-panel rounded-2xl shadow-lg border border-surface-dim overflow-hidden bg-surface-container">
        {/* Tabs */}
        <div className="flex border-b border-outline-variant/30 bg-surface/50">
          {([
            { value: "roundtrip" as TripType, label: "Flights", icon: "flight" },
            { value: "oneway" as TripType, label: "Hotels", icon: "hotel" },
            { value: "multicity" as TripType, label: "Packages", icon: "luggage" },
          ]).map((tab) => (
            <button
              key={tab.value}
              type="button"
              onClick={() => setTripType(tab.value)}
              className={`flex-1 py-4 flex items-center justify-center gap-2 transition-colors ${
                tripType === tab.value
                  ? "border-b-2 border-primary text-primary bg-surface-container-high"
                  : "text-on-surface-variant hover:bg-surface-container-high/50"
              }`}
            >
              <span className="material-symbols-outlined">{tab.icon}</span>
              <span className="font-label-md text-label-md">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Search Form */}
        <form onSubmit={handleSearch} className="p-4 md:p-6 bg-surface-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 items-center">
            
            {/* From & To Wrapper (Spans 2 columns on lg) */}
            <div className="lg:col-span-2 flex flex-col md:flex-row items-center gap-2 relative w-full">
              {/* From */}
              <div className="w-full h-[64px] relative bg-surface-container-lowest/80 border border-outline-variant/50 rounded-xl px-4 py-2 flex flex-col justify-center focus-within:ring-2 focus-within:ring-primary focus-within:border-primary transition-all">
                <span className="text-[10px] md:text-[11px] font-bold text-outline uppercase tracking-wider leading-none mb-1 pointer-events-none">From</span>
                <div className="flex items-center justify-between">
                  <input
                    type="text"
                    value={origin}
                    onChange={(e) => setOrigin(e.target.value)}
                    placeholder="City or Airport"
                    className="w-full bg-transparent border-none p-0 focus:outline-none focus:ring-0 text-[14px] md:text-[15px] font-semibold text-on-surface leading-tight truncate"
                    required
                  />
                  <span className="material-symbols-outlined text-outline/80 text-[18px] shrink-0 ml-1 pointer-events-none">flight_takeoff</span>
                </div>
              </div>

              {/* Swap Button */}
              <motion.button
                type="button"
                onClick={handleSwap}
                animate={{ rotate: isSwapping ? 180 : 0 }}
                transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                className="w-8 h-8 rounded-full bg-surface-container-high border border-outline-variant/40 flex items-center justify-center text-primary shrink-0 cursor-pointer hover:bg-primary hover:text-white transition-colors shadow-sm z-10 md:absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2"
                aria-label="Swap origin and destination"
              >
                <span className="material-symbols-outlined text-[16px]">swap_horiz</span>
              </motion.button>

              {/* To */}
              <div className="w-full h-[64px] relative bg-surface-container-lowest/80 border border-outline-variant/50 rounded-xl px-4 py-2 flex flex-col justify-center focus-within:ring-2 focus-within:ring-primary focus-within:border-primary transition-all">
                <span className="text-[10px] md:text-[11px] font-bold text-outline uppercase tracking-wider leading-none mb-1 pointer-events-none">To</span>
                <div className="flex items-center justify-between">
                  <input
                    type="text"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    placeholder="Where to?"
                    className="w-full bg-transparent border-none p-0 focus:outline-none focus:ring-0 text-[14px] md:text-[15px] font-semibold text-on-surface leading-tight truncate"
                    required
                  />
                  <span className="material-symbols-outlined text-outline/80 text-[18px] shrink-0 ml-1 pointer-events-none">flight_land</span>
                </div>
              </div>
            </div>

            {/* Dates */}
            <div className="lg:col-span-1 w-full h-[64px] relative bg-surface-container-lowest/80 border border-outline-variant/50 rounded-xl px-4 py-2 flex flex-col justify-center focus-within:ring-2 focus-within:ring-primary focus-within:border-primary transition-all">
              <span className="text-[10px] md:text-[11px] font-bold text-outline uppercase tracking-wider leading-none mb-1 pointer-events-none">Dates</span>
              <div className="flex items-center justify-between">
                <input
                  type="text"
                  placeholder="Select Dates"
                  defaultValue="Aug 10 - Aug 24"
                  className="w-full bg-transparent border-none p-0 focus:outline-none focus:ring-0 text-[14px] md:text-[15px] font-semibold text-on-surface leading-tight cursor-pointer truncate"
                />
                <span className="material-symbols-outlined text-outline/80 text-[18px] shrink-0 ml-1 pointer-events-none">calendar_month</span>
              </div>
            </div>

            {/* Passengers */}
            <div className="lg:col-span-1 w-full h-[64px] relative bg-surface-container-lowest/80 border border-outline-variant/50 rounded-xl px-4 py-2 flex flex-col justify-center cursor-pointer focus-within:ring-2 focus-within:ring-primary focus-within:border-primary transition-all">
              <span className="text-[10px] md:text-[11px] font-bold text-outline uppercase tracking-wider leading-none mb-1 pointer-events-none">Travelers</span>
              <div className="flex items-center justify-between">
                <span className="text-[14px] md:text-[15px] font-semibold text-on-surface truncate leading-tight">2 Adults</span>
                <span className="material-symbols-outlined text-outline/80 text-[18px] shrink-0 ml-1 pointer-events-none">person</span>
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="lg:col-span-1 w-full h-[64px] px-6 bg-primary text-on-primary rounded-xl font-bold text-[15px] tracking-wide flex items-center justify-center gap-2 hover:bg-primary-fixed-variant transition-all shadow-md shrink-0 cursor-pointer active:scale-95"
            >
              <span className="material-symbols-outlined text-[20px]">search</span>
              <span>Search</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
