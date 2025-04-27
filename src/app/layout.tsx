import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";

export const metadata: Metadata = {
  title: "MobiusAi",
  description: "An Ai Application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased bg-[url(/gradient.png)]`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
