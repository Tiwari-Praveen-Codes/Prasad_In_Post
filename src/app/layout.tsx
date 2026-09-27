import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Prasad Bhangane — Video Editor & Motion Designer",
  description: "Cinematic editorial portfolio of Prasad Bhangane. Specializing in high-impact corporate films, AI video production, commercial ad reels, and luxury real estate edits.",
  keywords: [
    "Prasad Bhangane",
    "Video Editor",
    "Motion Designer",
    "AI Filmmaker",
    "Corporate Video Editor",
    "Commercial Ad Reels",
    "Real Estate Video",
    "DaVinci Resolve",
    "Premiere Pro",
  ],
  authors: [{ name: "Prasad Bhangane" }],
  creator: "Prasad Bhangane",
  openGraph: {
    title: "Prasad Bhangane — Video Editor & Motion Designer",
    description: "Cinematic, editorial portfolio for high-ticket corporate, commercial, and AI video commissions.",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://lh3.googleusercontent.com/aida-public/AB6AXuD66d1TBrnXh00ZQtJT4HQxtyP_b58Pdy-N2gO0E6wPR7KKkTIU07GY3c4cIbNeBPIxwRRtBuOuA2XUtRpx0zDvY39BHCV-7vPF_A3Xjuz3k48KBC1Xpm2WwL1v66OSeBHjlbqlC9dBnTuvTwjAUiE4yKaPAq29wEPy2aTxVsvsbke2ZAaiR-pspaobbvaR1GLReDYf4ElMAw6uV7gaSF-n9LjgC3wBZ7lnPY7r1gNg7Au04wM-PZeP",
        width: 1200,
        height: 630,
        alt: "Prasad Bhangane Portfolio",
      },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: "#fcf9f3",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </head>
      <body className="font-sans bg-surface text-on-surface min-h-screen antialiased selection:bg-black selection:text-white">
        {children}
      </body>
    </html>
  );
}
