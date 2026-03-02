import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Zain Wellbeing: Be Well | Crisis Support Portal",
  description:
    "Zain Wellbeing crisis support portal. Connect with a Power Buddy, access daily wellbeing resources, and find professional support.",
  keywords: [
    "Zain",
    "Wellbeing",
    "Be Well",
    "Crisis Support",
    "Power Buddy",
    "Mental Health",
    "Employee Support",
  ],
};

export const viewport: Viewport = {
  themeColor: "#1E1A5F",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
