/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ThemeProvider } from './components/Theme/ThemeContext';
import { SmoothScroll } from './components/Scroll/SmoothScroll';
import { Navbar } from './components/Navbar/Navbar';
import { Hero } from './components/Hero/Hero';
import { HowItWorks } from './components/HowItWorks/HowItWorks';
import { PlayerShowcase } from './components/PlayerShowcase/PlayerShowcase';
import { ManagementFeatures } from './components/ManagementFeatures/ManagementFeatures';
import { PartnerJourney } from './components/Partner/PartnerJourney';
import { Comparison } from './components/Comparison/Comparison';
import { Testimonials } from './components/Testimonials/Testimonials';
import { Pricing } from './components/Pricing/Pricing';

import { FAQ } from './components/FAQ/FAQ';
import { StayTuned } from './components/StayTuned/StayTuned';
import { Contact } from './components/Contact/Contact';
import { Waitlist } from './components/Waitlist/Waitlist';
import { Footer } from './components/Footer/Footer';

export default function App() {
  return (
    <ThemeProvider>
      <SmoothScroll>
        <div className="min-h-screen bg-white text-slate-900 selection:bg-[#00A859] selection:text-white bg-grid">
          <Navbar />
          <main>
            <Hero />
            <HowItWorks />
          </main>
          <Footer />
        </div>
      </SmoothScroll>
    </ThemeProvider>
  );
}
