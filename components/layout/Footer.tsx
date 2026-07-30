import Link from "next/link";

const footerLinks = {
  Explore: [
    { label: "Our Tours", href: "/tours" },
    { label: "Flight Deals", href: "/flights" },
    { label: "Gallery", href: "/gallery" },
    { label: "Destinations", href: "/destinations" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Careers", href: "/careers" },
    { label: "Reviews", href: "/reviews" },
    { label: "Press", href: "/press" },
  ],
  Support: [
    { label: "Help Center", href: "/support" },
    { label: "Contact Us", href: "/contact" },
    { label: "Privacy Policy", href: "/policies/privacy" },
    { label: "Terms", href: "/policies/terms" },
  ],
};

export default function Footer() {
  return (
    <footer className="w-full border-t border-white/5" style={{ background: "#0d0d0d" }}>
      <div className="max-w-[1280px] mx-auto px-4 md:px-10 pt-14 pb-8">
        {/* Top: brand + links */}
        <div className="flex flex-col lg:flex-row justify-between gap-12 pb-12 border-b border-white/6">
          {/* Brand block */}
          <div className="max-w-[300px]">
            <div className="flex items-center gap-2 mb-5">
              <div
                className="w-7 h-7 flex items-center justify-center shrink-0"
                style={{ background: "#e63030" }}
              >
                <span className="material-symbols-outlined fill text-white text-[15px]">flight</span>
              </div>
              <span className="text-white font-black uppercase tracking-[0.2em] text-[13px]">
                Werlton
              </span>
            </div>
            <p className="text-white/35 text-[13px] leading-relaxed mb-6">
              Elevating your travel experience with curated destinations, extraordinary adventures, and unparalleled service since 2010.
            </p>
            {/* Social */}
            <div className="flex gap-4">
              {["public", "share", "favorite"].map((icon) => (
                <Link
                  key={icon}
                  href="#"
                  className="w-8 h-8 border border-white/10 rounded-full flex items-center justify-center text-white/35 hover:text-white hover:border-white/30 transition-all duration-300"
                >
                  <span className="material-symbols-outlined text-[15px]">{icon}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Navigation links grid */}
          <div className="flex gap-10 sm:gap-16 flex-wrap">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category} className="flex flex-col gap-3">
                <h4 className="text-white text-[10px] font-black uppercase tracking-[0.18em] mb-1">
                  {category}
                </h4>
                {links.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-white/35 hover:text-white text-[13px] transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="text-white/25 text-[12px] tracking-wide">
            © {new Date().getFullYear()} Werlton Travel Group. All rights reserved.
          </span>
          <div className="flex items-center gap-6">
            {["Visa", "Mastercard", "PayPal", "Stripe"].map((brand) => (
              <span
                key={brand}
                className="text-white/20 text-[11px] font-bold uppercase tracking-wider"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
