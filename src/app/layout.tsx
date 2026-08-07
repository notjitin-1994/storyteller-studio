import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import CookieConsent from "@/components/CookieConsent";
import { TransitionProvider } from "@/components/TransitionProvider";
import { Suspense } from "react";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Storyteller Studio | Your Audio Buddy",
  description: "Good Audio design makes the visuals leak emotions. Sound design available and affordable for all your project needs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`light ${inter.variable} ${cormorant.variable}`}>
      <body
        className={`antialiased bg-[#Fcfbf9] text-[#0a0a0a] selection:bg-black/10 min-h-[100dvh] flex flex-col font-sans`}
      >
        <TransitionProvider>
          <SmoothScroll>
            <Navbar />
            <main className="flex-1 w-full max-w-full">
              {children}
            </main>
            <Footer />
            <Suspense fallback={null}>
              <BookingModal />
            </Suspense>
            <CookieConsent />
          </SmoothScroll>
        </TransitionProvider>
      </body>
    </html>
  );
}
