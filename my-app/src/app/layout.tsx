// src/app/layout.tsx
import type { Metadata } from "next";
import localFont from "next/font/local";
import "../globals.css";

// Local font setup
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Raspberry Pi Dashboard",
  description: "Monitor and manage your Raspberry Pi's system information effortlessly.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export const themeColor = "#ffffff";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1e3a8a" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} bg-gray-50 text-gray-800`}>
        {children}
      </body>
    </html>
  );
}
