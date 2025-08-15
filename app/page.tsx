import Hero from "@/components/Hero";
import AboutDevhost from "@/components/AboutDevhost";

import TimelineSection from "@/components/TimeLine";

import Events from "@/components/Events";
{/*import { CommonEvents } from "@/components/CommonEvents";*/}

export default function Home() {
  return (
    <div>
      <Hero />
      <AboutDevhost />
      <TimelineSection />
      <Events /> 
    {/*  <CommonEvents /> */}
    </div>
  );
}
