import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-surface-container-low border-t border-white/5">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter px-margin-mobile md:px-margin-desktop py-xl max-w-7xl mx-auto">
        {/* Brand Column */}
        <div className="col-span-1 md:col-span-1 flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary fill text-3xl">flight</span>
            <span className="font-headline-sm text-headline-sm text-on-surface font-bold uppercase tracking-tight">
              SKYWINGS
            </span>
          </div>
          <p className="text-on-surface-variant font-body-sm">
            Elevating your travel experience with curated destinations and unparalleled service.
          </p>
        </div>

        {/* Links */}
        <div className="col-span-1 md:col-span-3 flex flex-wrap justify-between md:justify-end gap-x-12 gap-y-4">
          <Link
            href="/about"
            className="text-on-surface-variant font-body-sm text-body-sm hover:text-primary underline transition-all cursor-pointer"
          >
            About Us
          </Link>
          <Link
            href="/support"
            className="text-on-surface-variant font-body-sm text-body-sm hover:text-primary underline transition-all cursor-pointer"
          >
            Support
          </Link>
          <Link
            href="/policies/privacy"
            className="text-on-surface-variant font-body-sm text-body-sm hover:text-primary underline transition-all cursor-pointer"
          >
            Privacy Policy
          </Link>
          <Link
            href="/policies/terms"
            className="text-on-surface-variant font-body-sm text-body-sm hover:text-primary underline transition-all cursor-pointer"
          >
            Terms of Service
          </Link>
          <Link
            href="/careers"
            className="text-on-surface-variant font-body-sm text-body-sm hover:text-primary underline transition-all cursor-pointer"
          >
            Careers
          </Link>
        </div>

        {/* Bottom Bar */}
        <div className="col-span-1 md:col-span-4 mt-8 pt-8 border-t border-white/10 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="text-on-surface-variant font-body-sm text-body-sm">
            © {new Date().getFullYear()} SkyWings Aviation Group. All rights reserved.
          </span>
          <div className="flex gap-4">
            <Link
              href="#"
              className="text-on-surface-variant hover:text-primary transition-all cursor-pointer"
            >
              <span className="material-symbols-outlined">public</span>
            </Link>
            <Link
              href="#"
              className="text-on-surface-variant hover:text-primary transition-all cursor-pointer"
            >
              <span className="material-symbols-outlined">share</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
