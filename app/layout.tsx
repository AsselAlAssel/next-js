import "./globals.css";
import type { Metadata } from "next";
import Nav from "@/components/Nav";
import React from "react";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>Next.js TypeScript Quickstart</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="author" content="Your Name Here" />
        <meta name="keywords" content="next.js, typescript, react" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="google" content="notranslate" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </head>

      <body>
        <Nav />
        <main className="pt-1 px-1">{children}</main>
      </body>
    </html>
  );
}
