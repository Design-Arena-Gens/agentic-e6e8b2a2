import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Pai Keys ? Unified AI API Platform",
  description:
    "Access GPT, Claude, Gemini, Mistral, Whisper, SD, and OSS via one API key."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <main className="container">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
