import Hero from "@/components/Hero";
import AboutDevhost from "@/components/AboutDevhost";
import { Events } from "@/components/Events";
import TimelineSection from "@/components/TimeLine";

export default function Home() {
  return (
    <div>
      <Hero />
      <AboutDevhost />
      <TimelineSection />
      <Events />
    </div>
  );
}
