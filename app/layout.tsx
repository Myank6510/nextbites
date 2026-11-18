
import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "NextBites | Discover Delicious Recipes",
  description: "Discover simple and delicious recipes with NextBites.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <nav className="navbar">
          <Link href="/" className="logo">
            Next<span>Bites</span>
          </Link>

          <div className="nav-links">
            <Link href="/">Home</Link>
            <Link href="/#recipes">Recipes</Link>
            <Link href="/#about">About</Link>
          </div>
        </nav>

        {children}

        <footer className="footer">
          <p>© 2026 NextBites. Made with ❤️ for food lovers.</p>
        </footer>
      </body>
    </html>
  );
}
