import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import Header from "./components/Header";

export const metadata: Metadata = {
  title: "Mogesh Portfolio",
  description: "A Full Stack Developer from Tamil Nadu, India",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="background relative antialiased w-full flex flex-col">
        <Header />
        {children}
        <Analytics />
      </body>
    </html>
  );
}

