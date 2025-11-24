
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './globals.css'; 

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from 'next/link';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gear Vault",
  description: "Manage your music equipment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Navbar */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-glass sticky-top mb-5 px-4 py-3 shadow-sm">
          <div className="container">
            <Link className="navbar-brand fw-bold fs-4" href="/">
              Gear<span className="text-accent">Vault</span> 
            </Link>
             <div className="collapse navbar-collapse" id="navbarNav">
                <div className="navbar-nav ms-auto gap-3">
                  <Link className="nav-link text-white fw-medium" href="/gear">My Gear</Link>
                  <Link className="nav-link text-white fw-medium" href="/explore">Explore API</Link>
                </div>
             </div>
          </div>
        </nav>
        
        <main className="container py-4">
          {children}
        </main>
      </body>
    </html>
  );
}