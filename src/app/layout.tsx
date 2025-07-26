import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KRIDH TRAVEL WORLD - Taxi & Tour Packages from Delhi",
  description: "Book reliable taxi services and tour packages from Delhi to destinations like Jaipur, Manali, Agra, Rishikesh, and more with KRIDH TRAVEL WORLD. Explore Uttarakhand, Himachal Pradesh, Rajasthan, and beyond with ease.",
  keywords: [
    "Delhi to Jaipur taxi",
    "Delhi to Manali tour package",
    "Delhi to Agra taxi",
    "Delhi sightseeing tour",
    "taxi service Delhi",
    "Uttarakhand tour packages",
    "Himachal Pradesh taxi",
    "Rajasthan travel from Delhi",
    "Punjab taxi service",
    "Haryana taxi service",
    "Delhi airport taxi",
    "corporate taxi Delhi Gurgaon",
  ],
  openGraph: {
    title: "KRIDH TRAVEL WORLD - Taxi & Tour Packages from Delhi",
    description: "Discover hassle-free taxi services and curated tour packages from Delhi to popular destinations across India with KRIDH TRAVEL WORLD.",
    url: "https://www.kridhtravelworld.com",
    siteName: "KRIDH TRAVEL WORLD",
    images: [
      {
        url: "https://www.kridhtravelworld.com/og_image.png",
        width: 1200,
        height: 630,
        alt: "KRIDH TRAVEL WORLD - Travel Services from Delhi",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KRIDH TRAVEL WORLD - Taxi & Tour Packages from Delhi",
    description: "Travel from Delhi to Jaipur, Manali, Agra, and more with KRIDH TRAVEL WORLD's reliable taxi and tour packages.",
    images: ["https://www.kridhtravelworld.com/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: "https://www.kridhtravelworld.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}