/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import BottomNav from "./components/BottomNav";
import Hero from "./components/Hero";
import BentoSection from "./components/BentoSection";
import Narrative from "./components/Narrative";
import TeamCarousel from "./components/TeamCarousel";
import CTA from "./components/CTA";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-on-background font-body">
      <Navbar />
      
      <main className="pt-24 pb-32 px-6 max-w-md mx-auto">
        <Hero />
        <BentoSection />
        <Narrative />
        <TeamCarousel />
        <CTA />
      </main>

      <BottomNav />
    </div>
  );
}

