'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [email, setEmail] = useState('');

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="flex justify-between items-center px-4 sm:px-8 py-6 border-b border-border">
        <h1 className="font-domine text-2xl font-bold text-accent">Grateful</h1>
        <div className="flex gap-4 items-center">
          <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition">
            Privacy
          </Link>
          <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground transition">
            Terms
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="flex flex-col lg:flex-row items-center px-4 sm:px-8 py-12 lg:py-20 max-w-7xl mx-auto min-h-[calc(100vh-100px)] gap-12 lg:gap-0 lg:justify-between">
        {/* Left Content */}
        <div className="flex-1 w-full lg:pr-12">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
              <span className="text-2xl">✨</span>
            </div>
            <span className="text-sm text-muted-foreground font-dm-sans">Premium Experience</span>
          </div>

          <h2 className="font-domine text-4xl font-bold leading-tight mb-6 text-foreground">
            Your Personalized Daily Verse
          </h2>

          <p className="text-lg text-muted-foreground mb-8 leading-relaxed font-dm-sans max-w-xl">
            Receive a fresh, personalized Bible verse every day—tailored just for you. 
            Beautiful design meets meaningful faith in one intuitive app.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <button className="bg-accent text-accent-foreground px-8 py-4 rounded-full font-dm-sans font-semibold hover:opacity-90 transition">
              Download on iOS
            </button>
            <button className="border border-border text-foreground px-8 py-4 rounded-full font-dm-sans font-semibold hover:bg-secondary hover:bg-opacity-50 transition">
              Learn More
            </button>
          </div>

          {/* Features List */}
          <div className="grid grid-cols-2 gap-8 pt-8 border-t border-border">
            <div>
              <h3 className="font-domine font-bold text-accent mb-2">Beautifully Designed</h3>
              <p className="text-sm text-muted-foreground">Every pixel crafted with care for the perfect experience.</p>
            </div>
            <div>
              <h3 className="font-domine font-bold text-accent mb-2">Perfectly Personalized</h3>
              <p className="text-sm text-muted-foreground">Verses tailored to your life and faith journey every day.</p>
            </div>
          </div>
        </div>

        {/* Right - iPhone Mockup */}
        <div className="flex-1 flex justify-center items-center w-full">
          <div className="relative w-80 h-125 mx-auto">
            <Image
              src={'/mockup-forest.png'}
              alt="phone mockup"
              width={600}
              height={1200}
              className="w-full h-full object-contain"
            />

            {/* Glow Effect */}
            <div className="absolute -inset-4 bg-accent rounded-3xl opacity-20 blur-2xl -z-10"></div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border px-4 sm:px-8 py-8 text-center text-sm text-muted-foreground">
        <p>&copy; 2026 Grateful. All rights reserved.</p>
      </footer>
    </div>
  );
}