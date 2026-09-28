import React from 'react';
import { Header } from './components/Header';
import { Hero } from './sections/Hero';
import { ImpactPhrase } from './sections/ImpactPhrase';
import { About } from './sections/About';
import { Services } from './sections/Services';
import { Differentials } from './sections/Differentials';
import { HowItWorks } from './sections/HowItWorks';
import { CentralPhrase } from './sections/CentralPhrase';
import { Testimonials } from './sections/Testimonials';
import { FAQ } from './sections/FAQ';
import { Contact } from './sections/Contact';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';

export default function App() {
  return (
    <div className="min-h-screen bg-off-white selection:bg-sage/30">
      <Header />
      <main>
        <Hero />
        <ImpactPhrase />
        <About />
        <Services />
        <Differentials />
        <HowItWorks />
        <CentralPhrase />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
