"use client";

import Counter from "@/components/old/Counter";
import Events from "@/components/old/Events";
import AboutDevhost from "@/components/old/AboutDevhost";
import AboutHackathon from "@/components/old/AboutHackathon";
import Hero from "@/components/old/Hero";
import Map from "@/components/old/Map";
import Schedule from "@/components/old/Schedule";
import FAQ from "@/components/old/Faq";
import Footer from "@/components/old/Footer";

export default function Home() {
  return (
    <div>
      <div className="max-w-7xl px-5 mx-auto">
        <Hero />
        <Counter />
        <Schedule />
        <AboutDevhost />
        <AboutHackathon />
        <Events />
      </div>
      <div className="relative">
        <FAQ />
      </div>
      <div className="max-w-7xl relative px-5 mx-auto">
        <Map />
      </div>
      <Footer />
    </div>
  );
}
