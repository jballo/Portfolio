import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jonathan Ballona's Portfolio",
  description: "Explore the projects, skills, and experience of Jonathan Ballona Sanchez, a cracked engineer.",
  icons: "https://xrqb2mg56u.ufs.sh/f/DbWOBxCL0tnld6MB7bxmRPWeyrM9u3jw0TFsbGNUVd6JS4Al"
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
        <Header />
        <main className="w-full h-full">{children}</main>
      </body>
    </html>
  );
}
