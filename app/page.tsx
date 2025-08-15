"use client"
import Hero from "@/components/Hero";
import AboutDevhost from "@/components/AboutDevhost";
import { Events } from "@/components/Events";
import TimelineSection from "@/components/TimeLine";
import AboutHackathon from "@/components/AboutHackathon";

export default function Home() {
  return (
    <div>
      <Hero />
      <AboutDevhost />
      <AboutHackathon/>
      <TimelineSection />
      <Events />
    </div>
  );
}
