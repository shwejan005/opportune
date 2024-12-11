import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/ui/Navbar";
import { ClerkProvider } from "@clerk/nextjs";


export const metadata: Metadata = {
  title: "Opportune",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className="min-h-screen flex flex-col">
          <header className="bg-white border-b z-50 sticky top-0 ">
            <Navbar/>
          </header>
          <main className="flex-1 bg-gray-200 w-full">
            {children}
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}
