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
    default: "CopyThePrompt India — viral AI prompts to copy",
    template: "%s · CopyThePrompt",
  },
  description:
    "India ke viral AI looks: 80s album, Ganeshotsav, bridal, streets, cricket. Image dekho, prompt copy karo.",
  metadataBase: new URL("https://copytheprompt.vercel.app"),
  openGraph: {
    title: "CopyThePrompt India",
    description:
      "Viral Indian AI image prompts — one-tap copy for ChatGPT, Midjourney, Flux.",
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
