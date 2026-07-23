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
        <form onSubmit={handleSearch} className="p-6 bg-surface-container">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            {/* From */}
            <div className="flex-1 w-full relative">
              <label className="absolute top-2 left-4 font-label-sm text-label-sm text-outline z-10">From</label>
              <input
                type="text"
                value={origin}
                onChange={(e) => setOrigin(e.target.value)}
                placeholder="City or Airport"
                className="w-full pt-6 pb-2 px-4 border border-outline-variant rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none font-body-md text-on-surface bg-transparent transition-all"
                required
              />
              <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-outline">flight_takeoff</span>
            </div>

            {/* Swap Icon */}
            <motion.button
              type="button"
              onClick={handleSwap}
              animate={{ rotate: isSwapping ? 180 : 0 }}
              transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-primary shrink-0 cursor-pointer hover:bg-primary hover:text-white transition-colors shadow-sm hidden md:flex z-10 -mx-6"
            >
              <span className="material-symbols-outlined">swap_horiz</span>
            </motion.button>

            {/* To */}
            <div className="flex-1 w-full relative">
              <label className="absolute top-2 left-4 font-label-sm text-label-sm text-outline z-10">To</label>
              <input
                type="text"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                placeholder="Where to?"
                className="w-full pt-6 pb-2 px-4 border border-outline-variant rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none font-body-md text-on-surface bg-transparent transition-all"
                required
              />
              <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-outline">flight_land</span>
            </div>

            {/* Dates */}
            <div className="flex-1 w-full relative">
              <label className="absolute top-2 left-4 font-label-sm text-label-sm text-outline z-10">Depart - Return</label>
              <div className="w-full border border-outline-variant rounded-lg flex items-center focus-within:ring-2 focus-within:ring-primary focus-within:border-primary transition-all overflow-hidden relative">
                <input
                  type="date"
                  className="w-full pt-6 pb-2 pl-4 pr-10 outline-none font-body-md text-on-surface bg-transparent border-none focus:ring-0 cursor-pointer"
                />
              </div>
              <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-outline pointer-events-none">calendar_month</span>
            </div>

            {/* Passengers */}
            <div className="flex-1 w-full relative">
              <label className="absolute top-2 left-4 font-label-sm text-label-sm text-outline z-10">Passengers &amp; Class</label>
              <div className="w-full pt-6 pb-2 px-4 border border-outline-variant rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none font-body-md text-on-surface bg-transparent cursor-pointer flex justify-between items-center">
                <span className="truncate">2 Adults, Economy</span>
                <span className="material-symbols-outlined text-outline">person</span>
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full md:w-auto h-[60px] px-8 bg-primary text-on-primary rounded-lg font-label-md text-label-md flex items-center justify-center gap-2 hover:bg-primary-fixed-variant transition-colors shadow-md shrink-0"
            >
              <span className="material-symbols-outlined">search</span>
              Search
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
