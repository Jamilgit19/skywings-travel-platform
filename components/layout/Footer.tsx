import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-surface-container-low border-t border-white/5">
      <div className="px-margin-mobile md:px-margin-desktop py-16 max-w-7xl mx-auto flex flex-col">
        {/* Top Section */}
        <div className="w-full flex flex-col lg:flex-row justify-between gap-12 border-b border-outline-variant/20 pb-12">
          {/* Brand */}
          <div className="flex flex-col gap-4 max-w-sm">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary fill text-3xl">flight</span>
              <span className="font-headline-sm text-headline-sm text-on-surface font-extrabold uppercase tracking-tight">
                SKYWINGS
              </span>
            </div>
            <p className="text-on-surface-variant font-body-md leading-relaxed">
              Elevating your travel experience with curated destinations, luxury accommodations, and unparalleled service.
            </p>
          </div>

          {/* Links Grid */}
          <div className="flex gap-12 sm:gap-24 flex-wrap">
            <div className="flex flex-col gap-4">
              <h4 className="text-on-surface font-bold text-[15px] uppercase tracking-wider mb-1">Company</h4>
              <Link href="/about" className="text-on-surface-variant hover:text-primary transition-colors text-[14px]">About Us</Link>
              <Link href="/careers" className="text-on-surface-variant hover:text-primary transition-colors text-[14px]">Careers</Link>
              <Link href="/press" className="text-on-surface-variant hover:text-primary transition-colors text-[14px]">Press</Link>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-on-surface font-bold text-[15px] uppercase tracking-wider mb-1">Support</h4>
              <Link href="/support" className="text-on-surface-variant hover:text-primary transition-colors text-[14px]">Help Center</Link>
              <Link href="/contact" className="text-on-surface-variant hover:text-primary transition-colors text-[14px]">Contact Us</Link>
              <Link href="/faq" className="text-on-surface-variant hover:text-primary transition-colors text-[14px]">FAQ</Link>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-on-surface font-bold text-[15px] uppercase tracking-wider mb-1">Legal</h4>
              <Link href="/policies/privacy" className="text-on-surface-variant hover:text-primary transition-colors text-[14px]">Privacy Policy</Link>
              <Link href="/policies/terms" className="text-on-surface-variant hover:text-primary transition-colors text-[14px]">Terms of Service</Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="w-full mt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <span className="text-on-surface-variant font-body-sm text-body-sm">
            © {new Date().getFullYear()} SkyWings Aviation Group. All rights reserved.
          </span>
          <div className="flex gap-6">
            <Link
              href="#"
              className="text-on-surface-variant hover:text-primary transition-all cursor-pointer"
            >
              <span className="material-symbols-outlined text-[20px]">public</span>
            </Link>
            <Link
              href="#"
              className="text-on-surface-variant hover:text-primary transition-all cursor-pointer"
            >
              <span className="material-symbols-outlined text-[20px]">share</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
