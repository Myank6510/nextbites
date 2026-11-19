
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NextBites | Discover Delicious Recipes",
  description:
    "Explore delicious recipes, discover new cuisines, and find your next favorite meal.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
