/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ThemeProvider } from './components/Theme/ThemeContext';
import { SmoothScroll } from './components/Scroll/SmoothScroll';
import { Navbar } from './components/Navbar/Navbar';
import { Hero } from './components/Hero/Hero';
import { PlayspotsPartnerPage } from './components/Partner/PlayspotsPartnerPage';
import { Footer } from './components/Footer/Footer';

export default function App() {
  return (
    <ThemeProvider>
      <SmoothScroll>
        <div className="min-h-screen bg-white text-slate-900 selection:bg-[#00A859] selection:text-white bg-grid">
          <Navbar />
          <main>
            <Hero />
            <PlayspotsPartnerPage />
          </main>
          <Footer />
        </div>
      </SmoothScroll>
    </ThemeProvider>
  );
}

