"use client"
import Hero from "@/components/Hero";
import AboutDevhost from "@/components/AboutDevhost";
import Counter from "@/components/Counter";
import TimelineSection from "@/components/TimeLine";

import AboutHackathon from "@/components/AboutHackathon";

import Events from "@/components/Events";
import Footer from "@/components/Footer";
{/*import { CommonEvents } from "@/components/CommonEvents";*/}


export default function Home() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <Hero />
      <Counter />
      <AboutDevhost />
      <AboutHackathon/>
      <TimelineSection />
      <Events /> 
      <Footer/>
    {/*  <CommonEvents /> */}
    </div>
  );
}
