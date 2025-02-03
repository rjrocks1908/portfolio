import Navbar from "@/components/navbar/Navbar";
import Sidebar from "@/components/sidebar/Sidebar";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Bottombar from "@/components/bottombar/Bottombar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
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
        <div className="flex xl:flex-row flex-col container mx-auto mb-12 md:mb-0">
          <Sidebar />
          <div className="flex-1 my-4 mr-4 ml-4 xl:ml-0 bg-neutral-900 text-white rounded-3xl border border-neutral-800 overflow-hidden">
            <Navbar />
            <div className="w-12 h-1 bg-[#FFD700] mt-2 mb-8 rounded-full ml-4 md:ml-8"></div>
            {children}
          </div>
          <Bottombar className="block md:hidden" />
        </div>
      </body>
    </html>
  );
}
