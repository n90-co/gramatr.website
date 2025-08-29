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
  title: "Gramatr - Universal AI Operating System",
  description: "Unlock the next 9x with Gramatr. The Universal AI Operating System that provides persistent memory and context across all AI platforms.",
  keywords: ["AI", "operating system", "MCP", "universal", "memory", "context", "persistence"],
  authors: [{ name: "n90-co", url: "https://github.com/n90-co" }],
  openGraph: {
    title: "Gramatr - Unlock the next 9x with AI",
    description: "Universal AI Operating System with persistent memory across all platforms",
    url: "https://gramatr.com",
    siteName: "Gramatr",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gramatr - Universal AI Operating System",
    description: "Unlock the next 9x with Gramatr",
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
