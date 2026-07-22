import Link from "next/link";
import {
  Plane,
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Shield,
  CreditCard,
  Clock,
  Award,
  ExternalLink,
} from "lucide-react";

/* Simple social SVG icons since Lucide dropped social brand icons */
const FacebookIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);
const TwitterIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);
const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><circle cx="12" cy="12" r="5" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);
const YoutubeIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.43z" /><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="white" />
  </svg>
);

const flightLinks = [
  { href: "/flights", label: "Search Flights" },
  { href: "/manage-booking", label: "Manage Booking" },
  { href: "/flights?type=roundtrip", label: "Round Trip" },
  { href: "/flights?type=oneway", label: "One Way" },
  { href: "/flights?type=multicity", label: "Multi-City" },
];

const serviceLinks = [
  { href: "/hotels", label: "Hotel Booking" },
  { href: "/visa", label: "Visa Assistance" },
  { href: "/packages", label: "Tour Packages" },
  { href: "/insurance", label: "Travel Insurance" },
  { href: "/corporate-travel", label: "Corporate Travel" },
];

const companyLinks = [
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
  { href: "/blog", label: "Travel Blog" },
  { href: "/faq", label: "FAQ" },
  { href: "/policies/privacy", label: "Privacy Policy" },
  { href: "/policies/terms", label: "Terms & Conditions" },
];

const destinationLinks = [
  { href: "/flights?to=DXB", label: "Dubai" },
  { href: "/flights?to=BKK", label: "Bangkok" },
  { href: "/flights?to=KUL", label: "Kuala Lumpur" },
  { href: "/flights?to=SIN", label: "Singapore" },
  { href: "/flights?to=LHR", label: "London" },
  { href: "/flights?to=JFK", label: "New York" },
];

const socialLinks = [
  { href: "#", icon: FacebookIcon, label: "Facebook" },
  { href: "#", icon: TwitterIcon, label: "Twitter" },
  { href: "#", icon: InstagramIcon, label: "Instagram" },
  { href: "#", icon: YoutubeIcon, label: "YouTube" },
];

export default function Footer() {
  return (
    <footer className="bg-[#082F49] text-white">
      {/* Main Footer */}
      <div className="container section-spacing">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-white/20 to-white/5 flex items-center justify-center border border-white/10">
                <Plane className="w-5 h-5 text-white -rotate-45" />
              </div>
              <span className="text-xl font-bold tracking-tight">
                SKY<span className="text-[#38BDF8]">WINGS</span>
              </span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed max-w-sm mb-6">
              Your trusted travel partner for flight bookings, visa assistance,
              tour packages, and comprehensive travel solutions. Experience the
              magic of effortless travel with SkyWings.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <a
                href="tel:+1234567890"
                className="flex items-center gap-3 text-sm text-white/70 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-[#38BDF8]" />
                +1 (234) 567-890
              </a>
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-white/70 hover:text-white transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-green-400" />
                WhatsApp Support
              </a>
              <a
                href="mailto:info@skywings.com"
                className="flex items-center gap-3 text-sm text-white/70 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-[#38BDF8]" />
                info@skywings.com
              </a>
              <div className="flex items-start gap-3 text-sm text-white/70">
                <MapPin className="w-4 h-4 text-[#38BDF8] mt-0.5 shrink-0" />
                <span>123 Travel Street, Suite 456, City, Country</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/15 border border-white/10 text-white/60 hover:text-white transition-all"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Flights Column */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/90 mb-4">
              Flights
            </h3>
            <ul className="space-y-2.5">
              {flightLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/55 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/90 mb-4">
              Services
            </h3>
            <ul className="space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/55 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company & Destinations Column */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/90 mb-4">
              Company
            </h3>
            <ul className="space-y-2.5 mb-6">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/55 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/90 mb-4">
              Popular Destinations
            </h3>
            <ul className="space-y-2.5">
              {destinationLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/55 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Trust Bar */}
      <div className="border-t border-white/10">
        <div className="container py-6">
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
            <div className="flex items-center gap-2 text-sm text-white/50">
              <Shield className="w-4 h-4 text-green-400" />
              Secure Payments
            </div>
            <div className="flex items-center gap-2 text-sm text-white/50">
              <CreditCard className="w-4 h-4 text-[#38BDF8]" />
              Visa, Mastercard, bKash
            </div>
            <div className="flex items-center gap-2 text-sm text-white/50">
              <Clock className="w-4 h-4 text-yellow-400" />
              24/7 Support
            </div>
            <div className="flex items-center gap-2 text-sm text-white/50">
              <Award className="w-4 h-4 text-orange-400" />
              Verified Agency
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/5">
        <div className="container py-5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3">
            <p className="text-xs text-white/40">
              © {new Date().getFullYear()} SkyWings Travel Agency. All rights
              reserved.
            </p>
            <div className="flex items-center gap-4">
              <Link
                href="/policies/privacy"
                className="text-xs text-white/40 hover:text-white/70 transition-colors"
              >
                Privacy
              </Link>
              <Link
                href="/policies/terms"
                className="text-xs text-white/40 hover:text-white/70 transition-colors"
              >
                Terms
              </Link>
              <Link
                href="/policies/cookies"
                className="text-xs text-white/40 hover:text-white/70 transition-colors"
              >
                Cookies
              </Link>
              <Link
                href="/policies/refund"
                className="text-xs text-white/40 hover:text-white/70 transition-colors"
              >
                Refund Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
