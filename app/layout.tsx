import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zain Be Well | Crisis Support Portal",
  description:
    "Zain Wellbeing crisis support portal. Connect with a Power Buddy, access daily wellbeing resources, and find professional support.",
};

export const viewport: Viewport = {
  themeColor: "#1A1A24",
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
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
