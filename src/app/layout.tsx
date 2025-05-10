import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Quick Noter",
  description: "A modern, minimalist note-taking application with a focus on speed, security, and beautiful design.",
  icons: [
    { rel: "icon", url: "/favicon.ico" },
    { rel: "icon", type: "image/png", sizes: "16x16", url: "/icon16.png" },
    { rel: "icon", type: "image/png", sizes: "32x32", url: "/icon32.png" },
    { rel: "apple-touch-icon", sizes: "180x180", url: "/icon180.png" }, // optional
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
