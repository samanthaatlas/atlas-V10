import type { Metadata } from "next";
import { Space_Grotesk, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
});

export const metadata: Metadata = {
  title: "Atlas Explorer | Next-Gen Blockchain Explorer by Audicity",
  description:
    "Discover Atlas, the innovative blockchain explorer from Audicity. Real-time insights, cross-chain tools, and more. Request a demo today!",
  keywords:
    "blockchain explorer, Atlas Explorer, Web 3.0, Audicity blockchain tools, blockchain analytics",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${jakarta.variable}`}>
      <body className="bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
