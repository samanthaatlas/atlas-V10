import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Atlas Explorer | Next-Gen Blockchain Analytics",
  description:
    "Enterprise-grade blockchain analytics and compliance tools. Real-time visualization, transaction tracking, and smart contract analysis for Web3.",
  keywords:
    "blockchain, analytics, crypto, compliance, Web3, DeFi, smart contracts",
  openGraph: {
    title: "Atlas Explorer | Next-Gen Blockchain Analytics",
    description: "Enterprise-grade blockchain analytics and compliance tools.",
    url: "https://atlasexplorer.com",
    siteName: "Atlas Explorer",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Atlas Explorer Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Atlas Explorer | Next-Gen Blockchain Analytics",
    description: "Enterprise-grade blockchain analytics and compliance tools.",
    images: ["/twitter-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <div id="root">{children}</div>
      </body>
    </html>
  );
}
