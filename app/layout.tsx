import type { Metadata } from "next";
import { Inter, Hanken_Grotesk, Geist } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const hanken = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
  display: "swap",
});

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "SkyWings — Premium Flight Booking & Travel Agency",
    template: "%s | SkyWings",
  },
  description:
    "Book flights, hotels, tours, and visa services with SkyWings. Experience premium travel at the best prices with 24/7 support.",
  keywords: [
    "flight booking",
    "travel agency",
    "airline tickets",
    "hotel booking",
    "visa assistance",
    "tour packages",
    "travel insurance",
  ],
  openGraph: {
    type: "website",
    siteName: "SkyWings",
    title: "SkyWings — Premium Flight Booking & Travel Agency",
    description:
      "Book flights, hotels, tours, and visa services with SkyWings. Experience premium travel at the best prices.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`dark ${inter.variable} ${hanken.variable} ${geist.variable} antialiased`}
    >
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col bg-background text-on-background font-body-md antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
