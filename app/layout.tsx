import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zain Be Well | Crisis Support Portal",
  description:
    "Zain Wellbeing crisis support portal. Connect with a Power Buddy, access daily wellbeing resources, and find professional support.",
  openGraph: {
    title: "Zain Be Well | Crisis Support Portal",
    description:
      "Zain Wellbeing crisis support portal. Connect with a Power Buddy, access daily wellbeing resources, and find professional support.",
    type: "website",
    images: [
      {
        url: "/images/bewell-hero.png",
        width: 1200,
        height: 630,
        alt: "Zain Be Well Portal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zain Be Well | Crisis Support Portal",
    description:
      "Zain Wellbeing crisis support portal. Connect with a Power Buddy, access daily wellbeing resources, and find professional support.",
    images: ["/images/bewell-hero.png"],
  },
  icons: {
    icon: "/images/bewell-logo.png",
    apple: "/images/bewell-logo.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#0B101E",
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
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Zain:wght@300;400;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
