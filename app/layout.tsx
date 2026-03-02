import type { Metadata, Viewport } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "Zain Wellbeing | Be Well - Crisis Support Portal",
  description:
    "Zain Wellbeing crisis support portal. Connect with a Power Buddy, access daily wellbeing resources, and find professional support.",
  keywords: [
    "Zain",
    "Wellbeing",
    "Be Well",
    "Crisis Support",
    "Power Buddy",
  ],
};

export const viewport: Viewport = {
  themeColor: "#0B1D26",
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
      <body className={`${dmSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
