"use client";
import Hero from "@/components/Hero";
import AboutDevhost from "@/components/AboutDevhost";
import Counter from "@/components/Counter";
import TimelineSection from "@/components/Timeline";

import AboutHackathon from "@/components/AboutHackathon";

import Footer from "@/components/Footer";
import FAQ from "@/components/Faq";
import Map from "@/components/Map";
import Events from "@/components/Events";
/* import { CommonEvents } from "@/components/CommonEvents"; */

export default function Home() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <Hero />
      <Counter />
      <AboutDevhost />
      <AboutHackathon />
      <TimelineSection />
      <Events />
      <FAQ />
      <Map />
      <Footer />
      {/*<CommonEvents /> */}

      <div className="pointer-events-none fixed inset-0 -z-10 opacity-8">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
        linear-gradient(#a3ff12 2px, transparent 1px),
        linear-gradient(90deg, #a3ff12 2px, transparent 1px)
      `,
            backgroundSize: "80px 80px",
          }}
        ></div>
      </div>
    </div>
  );
}
