import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export const metadata: Metadata = {
  title: "A2B Rides | HopRide",
  description: "Premium rides for NW Ohio. Instant and scheduled hops.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geist.variable} h-full`}>
      <body className="min-h-full bg-black text-white flex flex-col">
        <header className="border-b border-gold/30 bg-black/80 backdrop-blur sticky top-0 z-50">
          <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold tracking-tight">
              <span className="text-gold">A2B</span> Rides
            </Link>
            <nav className="flex gap-6 text-sm">
              <Link href="/" className="hover:text-gold transition">Book</Link>
              <Link href="/rides" className="hover:text-gold transition">My Rides</Link>
              <Link href="/profile" className="hover:text-gold transition">Profile</Link>
            </nav>
          </div>
        </header>
        <main className="flex-1">{children}</main>
        <footer className="border-t border-gold/20 py-4 text-center text-xs text-zinc-500">
          A2B Rides • Premium local hops • NW Ohio
        </footer>
      </body>
    </html>
  );
}
