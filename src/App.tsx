/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ThemeProvider } from './components/Theme/ThemeContext';
import { Navbar } from './components/Navbar/Navbar';
import { Hero } from './components/Hero/Hero';
import { About } from './components/About/About';
import { Problem } from './components/Problem/Problem';
import { HowItWorks } from './components/HowItWorks/HowItWorks';
import { Features } from './components/Features/Features';
import { ManagementFeatures } from './components/ManagementFeatures/ManagementFeatures';
import { Comparison } from './components/Comparison/Comparison';
import { Testimonials } from './components/Testimonials/Testimonials';
import { Pricing } from './components/Pricing/Pricing';
import { Story } from './components/Story/Story';
import { FAQ } from './components/FAQ/FAQ';
import { StayTuned } from './components/StayTuned/StayTuned';
import { Contact } from './components/Contact/Contact';
import { Waitlist } from './components/Waitlist/Waitlist';
import { Footer } from './components/Footer/Footer';

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-brand-bg text-[var(--text-primary)] selection:bg-brand-green selection:text-black bg-grid">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Problem />
          <HowItWorks />
          <Features />
          <ManagementFeatures />
          <Comparison />
          <Testimonials />
          <Pricing />
          <Story />
          <FAQ />
          <StayTuned />
          <Contact />
          <Waitlist />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
