'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [email, setEmail] = useState('');

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="flex justify-between items-center px-8 py-6 border-b border-border">
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
      <main className="flex items-center justify-between px-8 py-20 max-w-7xl mx-auto min-h-[calc(100vh-100px)]">
        {/* Left Content */}
        <div className="flex-1 pr-12">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
              <span className="text-2xl">✨</span>
            </div>
            <span className="text-sm text-muted-foreground font-dm-sans">Premium Experience</span>
          </div>

          <h2 className="font-domine text-5xl font-bold leading-tight mb-6 text-foreground">
            Transform Your Daily Routine
          </h2>

          <p className="text-lg text-muted-foreground mb-8 leading-relaxed font-dm-sans max-w-xl">
            Experience the perfect blend of functionality and elegance. Our app brings together everything you need in one beautiful, intuitive interface.
          </p>

          <div className="flex gap-4 mb-12">
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
              <h3 className="font-domine font-bold text-accent mb-2">Lightning Fast</h3>
              <p className="text-sm text-muted-foreground">Optimized performance that feels instant.</p>
            </div>
          </div>
        </div>

        {/* Right - iPhone Mockup */}
        <div className="flex-1 flex justify-center items-center">
          <div className="relative w-72 h-96">
            {/* iPhone Frame */}
            <div className="absolute inset-0 bg-black rounded-3xl shadow-2xl border-8 border-gray-900 flex flex-col items-center justify-start overflow-hidden">
              {/* Notch */}
              <div className="w-40 h-7 bg-black rounded-b-3xl absolute top-0 left-1/2 transform -translate-x-1/2 z-10 flex items-center justify-between px-6">
                <span className="text-white text-xs">📶</span>
                <span className="text-white text-xs font-bold">9:41</span>
                <span className="text-white text-xs">🔋</span>
              </div>

              {/* Screen Content */}
              <div className="w-full h-full bg-gradient-to-b from-gray-900 to-black pt-12 px-6 pb-8 flex flex-col items-center justify-center text-center">
                <div className="mb-8">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">✨</span>
                  </div>
                </div>
                <h3 className="text-white font-bold text-xl mb-3 leading-tight">
                  Your Daily Companion
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-8">
                  Everything you need to make your day more productive and enjoyable.
                </p>
                <button className="bg-accent text-accent-foreground px-6 py-2 rounded-full text-sm font-semibold mb-6">
                  Get Started
                </button>

                {/* Bottom Icons */}
                <div className="flex gap-6 justify-center mt-auto mb-4">
                  <div className="w-10 h-10 bg-gray-800 rounded-2xl flex items-center justify-center">
                    <span className="text-white text-lg">🏠</span>
                  </div>
                  <div className="w-10 h-10 bg-gray-800 rounded-2xl flex items-center justify-center">
                    <span className="text-white text-lg">❤️</span>
                  </div>
                  <div className="w-10 h-10 bg-gray-800 rounded-2xl flex items-center justify-center">
                    <span className="text-white text-lg">👤</span>
                  </div>
                </div>
              </div>

              {/* Home Indicator */}
              <div className="h-2 w-1/3 bg-black rounded-full absolute bottom-2"></div>
            </div>

            {/* Glow Effect */}
            <div className="absolute -inset-4 bg-accent rounded-3xl opacity-20 blur-2xl -z-10"></div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border px-8 py-8 text-center text-sm text-muted-foreground">
        <p>&copy; 2024 Grateful. All rights reserved.</p>
      </footer>
    </div>
  );
}
