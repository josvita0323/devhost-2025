import Hero from "@/components/Hero";
import AboutDevhost from "@/components/AboutDevhost";
import Counter from "@/components/Counter";
import TimelineSection from "@/components/TimeLine";
import Events from "@/components/Events";
{/*import { CommonEvents } from "@/components/CommonEvents";*/}

export default function Home() {
  return (
    <div>
      <Hero />
      <Counter />
      <AboutDevhost />
      <TimelineSection />
      <Events /> 
    {/*  <CommonEvents /> */}
    </div>
  );
}
