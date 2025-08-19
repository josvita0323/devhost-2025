import Hero from "@/components/Hero";
import AboutDevhost from "@/components/AboutDevhost";
import Counter from "@/components/Counter";
import TimelineSection from "@/components/TimeLine";

import AboutHackathon from "@/components/AboutHackathon";

import Events from "@/components/Events";
import Footer from "@/components/Footer";
import FAQ from "@/components/Faq";
import Map from "@/components/Map";
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
      <Map/>
      <Footer/>
    {/*<CommonEvents /> */}
    </div>
  );
}