import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LIKHA | Boutique Web Studio",
  description:
    "LIKHA is a boutique web studio creating thoughtful websites for businesses, startups, and modern brands.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
