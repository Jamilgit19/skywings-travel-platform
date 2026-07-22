"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRightLeft,
  Calendar,
  ChevronDown,
  MapPin,
  Plane,
  Search,
  Users,
  Minus,
  Plus,
} from "lucide-react";

type TripType = "roundtrip" | "oneway" | "multicity";
type CabinClass = "economy" | "premium_economy" | "business" | "first";

const cabinLabels: Record<CabinClass, string> = {
  economy: "Economy",
  premium_economy: "Premium Economy",
  business: "Business",
  first: "First Class",
};

interface TravellerCounts {
  adults: number;
  children: number;
  infants: number;
}

export default function SearchWidget() {
  const [tripType, setTripType] = useState<TripType>("roundtrip");
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [cabin, setCabin] = useState<CabinClass>("economy");
  const [showTravellers, setShowTravellers] = useState(false);
  const [showCabin, setShowCabin] = useState(false);
  const [travellers, setTravellers] = useState<TravellerCounts>({
    adults: 1,
    children: 0,
    infants: 0,
  });
  const [isSwapping, setIsSwapping] = useState(false);

  const totalTravellers =
    travellers.adults + travellers.children + travellers.infants;

  const handleSwap = () => {
    setIsSwapping(true);
    const temp = origin;
    setOrigin(destination);
    setDestination(temp);
    setTimeout(() => setIsSwapping(false), 400);
  };

  const updateTraveller = (
    type: keyof TravellerCounts,
    increment: boolean
  ) => {
    setTravellers((prev) => {
      const newVal = increment ? prev[type] + 1 : prev[type] - 1;
      if (type === "adults" && newVal < 1) return prev;
      if (newVal < 0) return prev;
      if (type === "adults" && newVal > 9) return prev;
      if (type === "children" && newVal > 8) return prev;
      if (type === "infants" && newVal > prev.adults) return prev;
      return { ...prev, [type]: newVal };
    });
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Will navigate to search results in Phase 2
    const params = new URLSearchParams({
      type: tripType,
      from: origin,
      to: destination,
      depart: departureDate,
      ...(tripType === "roundtrip" && returnDate ? { return: returnDate } : {}),
      adults: String(travellers.adults),
      children: String(travellers.children),
      infants: String(travellers.infants),
      cabin,
    });
    window.location.href = `/flights/search?${params.toString()}`;
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="card p-6 md:p-8 bg-white/95 backdrop-blur-xl">
        {/* Trip Type Tabs */}
        <div className="flex items-center gap-1 mb-6 bg-slate-100 rounded-full p-1 w-fit">
          {(
            [
              { value: "roundtrip", label: "Round Trip" },
              { value: "oneway", label: "One Way" },
              { value: "multicity", label: "Multi-City" },
            ] as const
          ).map((tab) => (
            <button
              key={tab.value}
              onClick={() => setTripType(tab.value)}
              className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                tripType === tab.value
                  ? "text-white"
                  : "text-[#64748B] hover:text-[#0F172A]"
              }`}
            >
              {tripType === tab.value && (
                <motion.div
                  layoutId="tripTab"
                  className="absolute inset-0 bg-[#2563EB] rounded-full"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">{tab.label}</span>
            </button>
          ))}
        </div>

        <form onSubmit={handleSearch}>
          {/* Search Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_auto_1fr_1fr_1fr] gap-3 items-end">
            {/* Origin */}
            <div className="relative">
              <label className="text-label block mb-1.5 text-[#64748B]">
                Flying From
              </label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#64748B]" />
                <input
                  type="text"
                  value={origin}
                  onChange={(e) => setOrigin(e.target.value)}
                  placeholder="City or airport"
                  className="input pl-10"
                  required
                  aria-label="Origin city or airport"
                />
              </div>
            </div>

            {/* Swap Button */}
            <div className="hidden lg:flex items-center justify-center self-end mb-1">
              <motion.button
                type="button"
                onClick={handleSwap}
                animate={{ rotate: isSwapping ? 180 : 0 }}
                transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                className="w-10 h-10 flex items-center justify-center rounded-full border border-slate-200 hover:border-[#2563EB] hover:bg-blue-50 text-[#64748B] hover:text-[#2563EB] transition-colors shadow-sm bg-white"
                aria-label="Swap origin and destination"
              >
                <ArrowRightLeft className="w-4 h-4" />
              </motion.button>
            </div>

            {/* Destination */}
            <div className="relative">
              <label className="text-label block mb-1.5 text-[#64748B]">
                Flying To
              </label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#64748B]" />
                <input
                  type="text"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  placeholder="City or airport"
                  className="input pl-10"
                  required
                  aria-label="Destination city or airport"
                />
              </div>
            </div>

            {/* Departure Date */}
            <div>
              <label className="text-label block mb-1.5 text-[#64748B]">
                Departure
              </label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#64748B] pointer-events-none" />
                <input
                  type="date"
                  value={departureDate}
                  onChange={(e) => setDepartureDate(e.target.value)}
                  className="input pl-10"
                  required
                  aria-label="Departure date"
                />
              </div>
            </div>

            {/* Return Date */}
            <AnimatePresence>
              {tripType === "roundtrip" && (
                <motion.div
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: "auto" }}
                  exit={{ opacity: 0, width: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <label className="text-label block mb-1.5 text-[#64748B]">
                    Return
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#64748B] pointer-events-none" />
                    <input
                      type="date"
                      value={returnDate}
                      onChange={(e) => setReturnDate(e.target.value)}
                      className="input pl-10"
                      aria-label="Return date"
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Bottom Row */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mt-4 pt-4 border-t border-slate-100">
            <div className="flex flex-wrap items-center gap-3">
              {/* Travellers */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => {
                    setShowTravellers(!showTravellers);
                    setShowCabin(false);
                  }}
                  className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-[#0F172A] bg-slate-50 hover:bg-slate-100 rounded-lg transition-colors"
                  aria-expanded={showTravellers}
                  aria-haspopup="true"
                >
                  <Users className="w-4 h-4 text-[#64748B]" />
                  {totalTravellers} Traveller{totalTravellers !== 1 ? "s" : ""}
                  <ChevronDown className="w-3 h-3 text-[#64748B]" />
                </button>

                <AnimatePresence>
                  {showTravellers && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.95 }}
                      transition={{ duration: 0.15 }}
                      className="absolute left-0 top-full mt-2 bg-white rounded-xl border border-slate-200 shadow-[0_10px_40px_rgba(15,23,42,0.15)] p-4 z-50 min-w-[220px]"
                    >
                      {(
                        [
                          {
                            key: "adults",
                            label: "Adults",
                            sub: "12+ years",
                          },
                          {
                            key: "children",
                            label: "Children",
                            sub: "2-11 years",
                          },
                          {
                            key: "infants",
                            label: "Infants",
                            sub: "Under 2",
                          },
                        ] as const
                      ).map((item) => (
                        <div
                          key={item.key}
                          className="flex items-center justify-between py-2.5"
                        >
                          <div>
                            <p className="text-sm font-medium text-[#0F172A]">
                              {item.label}
                            </p>
                            <p className="text-xs text-[#64748B]">
                              {item.sub}
                            </p>
                          </div>
                          <div className="flex items-center gap-2">
                            <button
                              type="button"
                              onClick={() => updateTraveller(item.key, false)}
                              className="w-8 h-8 flex items-center justify-center rounded-full border border-slate-200 text-[#64748B] hover:border-[#2563EB] hover:text-[#2563EB] transition-colors disabled:opacity-30 disabled:pointer-events-none"
                              disabled={
                                item.key === "adults"
                                  ? travellers.adults <= 1
                                  : travellers[item.key] <= 0
                              }
                              aria-label={`Decrease ${item.label}`}
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="w-6 text-center text-sm font-semibold">
                              {travellers[item.key]}
                            </span>
                            <button
                              type="button"
                              onClick={() => updateTraveller(item.key, true)}
                              className="w-8 h-8 flex items-center justify-center rounded-full border border-slate-200 text-[#64748B] hover:border-[#2563EB] hover:text-[#2563EB] transition-colors"
                              aria-label={`Increase ${item.label}`}
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                        </div>
                      ))}
                      <button
                        type="button"
                        onClick={() => setShowTravellers(false)}
                        className="w-full mt-2 py-2 text-sm font-medium text-[#2563EB] hover:bg-blue-50 rounded-lg transition-colors"
                      >
                        Done
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Cabin Class */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => {
                    setShowCabin(!showCabin);
                    setShowTravellers(false);
                  }}
                  className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-[#0F172A] bg-slate-50 hover:bg-slate-100 rounded-lg transition-colors"
                  aria-expanded={showCabin}
                >
                  <Plane className="w-4 h-4 text-[#64748B]" />
                  {cabinLabels[cabin]}
                  <ChevronDown className="w-3 h-3 text-[#64748B]" />
                </button>

                <AnimatePresence>
                  {showCabin && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.95 }}
                      transition={{ duration: 0.15 }}
                      className="absolute left-0 top-full mt-2 bg-white rounded-xl border border-slate-200 shadow-[0_10px_40px_rgba(15,23,42,0.15)] p-2 z-50 min-w-[180px]"
                    >
                      {(Object.keys(cabinLabels) as CabinClass[]).map((c) => (
                        <button
                          key={c}
                          type="button"
                          onClick={() => {
                            setCabin(c);
                            setShowCabin(false);
                          }}
                          className={`w-full text-left px-3 py-2.5 text-sm rounded-lg transition-colors ${
                            cabin === c
                              ? "bg-blue-50 text-[#2563EB] font-medium"
                              : "text-[#0F172A] hover:bg-slate-50"
                          }`}
                        >
                          {cabinLabels[c]}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Search Button */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn btn-primary btn-lg gap-2 w-full md:w-auto"
            >
              <Search className="w-5 h-5" />
              Search Flights
            </motion.button>
          </div>
        </form>
      </div>
    </div>
  );
}
