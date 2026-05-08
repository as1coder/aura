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

export const metadata = {
  title: "Aura Perfume | Luxury Fragrances",
  description:
    "Discover luxury perfumes crafted to leave a lasting memory. Elegant scents for every moment.",
  keywords: [
    "Aura Perfume",
    "Luxury Perfume",
    "Fragrance",
    "Perfume Store",
    "Extrait De Parfum",
    "Premium Scents",
  ],
  authors: [{ name: "Aura Perfume" }],
  creator: "Aura Perfume",
  metadataBase: new URL("https://yourwebsite.com"),

  openGraph: {
    title: "Aura Perfume | Luxury Fragrances",
    description:
      "Luxury fragrances that leave a memory, not just a scent.",
    url: "https://yourwebsite.com",
    siteName: "Aura Perfume",
    images: [
      {
        url: "/auraPerfumePage.png",
        width: 1200,
        height: 630,
        alt: "Aura Perfume",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Aura Perfume | Luxury Fragrances",
    description:
      "Luxury fragrances that leave a memory, not just a scent.",
    images: ["/auraPerfumePage.png"],
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`
        ${geistSans.variable}
        ${geistMono.variable}
        h-full
        scroll-smooth
        antialiased
      `}
    >
      <body className="min-h-screen bg-[#0B0B0B] text-white overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}