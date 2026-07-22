import type { Metadata } from "next";
import { Inter, Playfair_Display, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
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
      className={`${inter.variable} ${playfair.variable} ${jetbrains.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
