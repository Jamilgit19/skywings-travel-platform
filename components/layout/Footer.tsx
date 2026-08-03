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

const socialIcons = [
  { icon: "language", label: "Website", href: "#" },
  { icon: "share", label: "Share", href: "#" },
  { icon: "favorite", label: "Favorite", href: "#" },
];

export default function Footer() {
  return (
    <footer className="w-full border-t border-white/5" style={{ background: "#0a0a0a" }}>
      <div className="max-w-[1280px] mx-auto px-4 md:px-10 pt-16 pb-8">
        {/* Top: brand + links */}
        <div className="flex flex-col lg:flex-row justify-between gap-14 pb-14 border-b border-white/6">
          {/* Brand block */}
          <div className="max-w-[320px]">
            <div className="flex items-center gap-2.5 mb-6">
              <div
                className="w-8 h-8 rounded-[4px] flex items-center justify-center shrink-0"
                style={{ background: "#e63030" }}
              >
                <span className="material-symbols-outlined fill text-white text-[16px]">flight</span>
              </div>
              <span className="text-white font-black uppercase tracking-[0.2em] text-[13px]">
                Werlton
              </span>
            </div>
            <p className="text-white/35 text-[13px] leading-[1.75] mb-8">
              Elevating your travel experience with curated destinations, extraordinary adventures, and unparalleled service since 2010.
            </p>
            {/* Social */}
            <div className="flex gap-3">
              {socialIcons.map(({ icon, label, href }) => (
                <Link
                  key={icon}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 border border-white/8 rounded-full flex items-center justify-center text-white/30 hover:text-white hover:border-[#e63030]/40 hover:bg-[rgba(230,48,48,0.08)] transition-all duration-300"
                >
                  <span className="material-symbols-outlined text-[15px]">{icon}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Navigation links grid */}
          <div className="flex gap-12 sm:gap-16 flex-wrap">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category} className="flex flex-col gap-3.5">
                <h4 className="text-white text-[10px] font-black uppercase tracking-[0.18em] mb-1.5">
                  {category}
                </h4>
                {links.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-white/30 hover:text-white text-[13px] transition-colors duration-300 hover:translate-x-0.5 transform"
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
          <span className="text-white/20 text-[12px] tracking-wide">
            © {new Date().getFullYear()} Werlton Travel Group. All rights reserved.
          </span>
          <div className="flex items-center gap-6">
            {["Visa", "Mastercard", "PayPal", "Stripe"].map((brand) => (
              <span
                key={brand}
                className="text-white/15 text-[11px] font-bold uppercase tracking-wider hover:text-white/30 transition-colors duration-300 cursor-default"
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
