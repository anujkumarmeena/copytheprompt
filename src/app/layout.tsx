import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
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
  title: {
    default: "CopyThePrompt — AI image prompts you can reuse",
    template: "%s · CopyThePrompt",
  },
  description:
    "Browse a curated gallery of AI-generated images and copy the exact Midjourney and Flux prompts that created them.",
  metadataBase: new URL("https://copytheprompt.vercel.app"),
  openGraph: {
    title: "CopyThePrompt",
    description:
      "Gallery of AI images with one-click copyable prompts for Midjourney, Flux, and more.",
    url: "https://copytheprompt.vercel.app",
    siteName: "CopyThePrompt",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} flex min-h-screen flex-col font-sans antialiased`}
      >
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
