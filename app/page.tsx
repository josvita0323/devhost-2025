import Hero from "@/components/Hero";
import AboutDevhost from "@/components/AboutDevhost";
import Counter from "@/components/Counter";
import TimelineSection from "@/components/TimeLine";

import AboutHackathon from "@/components/AboutHackathon";

import Events from "@/components/Events";
import Footer from "@/components/Footer";
{
  /*import { CommonEvents } from "@/components/CommonEvents";*/
}

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
      <Footer/>
    {/*  <CommonEvents /> */}
      {/* <Events />
      {/*  <CommonEvents /> 

      <div className="pointer-events-none fixed inset-0 -z-10 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            linear-gradient(#a3ff12 1px, transparent 1px),
            linear-gradient(90deg, #a3ff12 1px, transparent 1px)
          `,
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div> */}
    </div>
  );
}
